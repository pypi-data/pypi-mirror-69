# test loading of keras retinanet
import os


def test_keras_retinanet():
    pass


def test_Cython_build():
    import keras_retinanet.utils.compute_overlap
    assert os.path.exists(keras_retinanet.utils.compute_overlap.__file__)
