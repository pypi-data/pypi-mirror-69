import os
from pynwb import load_namespaces, get_class
from os import path

name = 'ndx-spectrum'

here = path.abspath(path.dirname(__file__))
ns_path = os.path.join(here, 'spec', name + '.namespace.yaml')

load_namespaces(ns_path)

Spectrum = get_class('Spectrum', name)