# Imports models
from .dvs.model_convtiny import convtiny_dvs
from .cifar10.model_ds_cnn import ds_cnn_cifar10
from .cifar10.model_vgg import vgg_cifar10
from .imagenet.model_mobilenet import mobilenet_imagenet
from .imagenet.model_mobilenet_edge import (mobilenet_edge_imagenet,
                                            mobilenet_edge_imagenet_pretrained)
from .kws.model_ds_cnn import ds_cnn_kws
from .kws.model_ds_cnn_edge import ds_cnn_edge_kws
from .utk_face.model_vgg import vgg_utk_face
from .cse2018.model_tse import tse_mlp_cse2018
from .tabular_data import tabular_data
