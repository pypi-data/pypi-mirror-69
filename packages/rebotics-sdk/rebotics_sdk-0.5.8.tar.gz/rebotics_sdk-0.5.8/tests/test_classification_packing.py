import pathlib

from rebotics_sdk.advanced.packers import ClassificationDatabasePacker, ZipDatabasePacker


def test_classification_packing():
    packer = ClassificationDatabasePacker(destination='test')
    features = pathlib.Path('db/features.txt')
    labels = pathlib.Path('db/labels.txt')
    images_folder = pathlib.Path('db/custom_folder/')

    res = packer.pack(labels, features, images_folder)

    assert res == 'test.rcdb'
    assert len(packer.images) == 2

    packer = ClassificationDatabasePacker(source='test.rcdb')
    entries = list(packer.unpack())
    assert len(entries) == 2
    entry = entries[0]
    assert entry.label == '123123123'
    assert entry.feature == '123123123123123'
    internal_filename = entry.filename
    assert internal_filename == 'image_1.png'

    # testing if it can be dumped to the FS
    og_file = pathlib.Path('db/custom_folder') / internal_filename
    tmp_file = pathlib.Path('db') / internal_filename

    with open(tmp_file, 'wb') as fout:
        fout.write(entry.image)

    assert og_file.stat().st_size == tmp_file.stat().st_size
    tmp_file.unlink()


def test_zip_packing():
    packer = ZipDatabasePacker()
    packed = packer.pack(
        labels=[
            '123123123'
        ],
        features=[
            '123123123123123'
        ]
    )
    assert packer.meta_data['count'] == 1

    unpacker = ZipDatabasePacker(source=packed)
    for entry in unpacker.unpack():
        assert entry.label == '123123123'
        assert entry.feature == '123123123123123'

    assert unpacker.meta_data['count'] == 1
