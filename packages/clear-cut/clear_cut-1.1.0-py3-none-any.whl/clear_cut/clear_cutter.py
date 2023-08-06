import pydoc
import json
import time
import numpy as np
import matplotlib
matplotlib.use('TkAgg')
import matplotlib.pyplot as plt
import matplotlib.gridspec as gridspec

from collections import defaultdict
from random import randint

from utils.edge_utility import ImageUtils

DEBUG = True


class ClearCut(ImageUtils):

    _tracer = None

    def __init__(self):
        self.base_dir = 'app/images'
        self.default_image_selection()
    
    @property
    def tracer(self, method='gradient'):
        if not self._tracer:
            Tracer = pydoc.locate('utils.tracers.{}.{}Tracer'.format(
                method, str.capitalize(method)
            ))
            self._tracer = Tracer()
        
        return self._tracer

    def default_image_selection(self):
        self.image_filename = 'Bob.jpeg'
        self.image_filename = 'colorful1.jpeg'
        #self.image_filename = 'john1.jpg'
        #self.image_filename = 'minimal1.jpg'
        #self.image_filename = 'heathers_cats.jpg'
        #self.image_filename = 'IMG_0396.jpg'
        #self.image_filename = 'IMG_0397.jpg'
        #self.image_filename = 'pidgey.jpg'
        #self.image_filename = 'IMG_1740.jpg'
        #self.image_filename = 'IMG_1741.jpg'

        self.image_filepath = '/'.join([self.base_dir, self.image_filename])
        self.image_size_threshold = 600
        self.pixel_tolerance = 10

        self.image_raw = self.graph_tools.upright_image(image_filepath=self.image_filepath)
        self.image = np.array(self.image_raw)

        filename, _ = self.image_filename.split('.')
        self.results_filepath = 'results/{}'.format(filename)
        self.reduce_image_size()

    def run(self):
        # Determine segmentation edges of the image (default method = gradient)
        edgy_image = self.tracer.trace_objects_in_image(image=self.image)

        # Reduce noise (edge pixels that cannot possibly contain an edge)
        edgy_image = self.edge_killer(edgy_image, pixel_tolerance=self.pixel_tolerance)

        self.graph_tools.save_image(
            edgy_image,
            filepath='{}/0007_noise_reduced_image.png'.format(self.tracer.results_path),
        )

        # Mask over the original image
        import numpy as np

        wipe_mask = edgy_image < 0.01
        bold_mask = edgy_image > 0.01
        self.image[wipe_mask] = 255
        self.image[bold_mask] = 0
        self.graph_tools.save_image(
            self.image,
            filepath='{}/0008_edge_masked_image.png'.format(self.tracer.results_path),
        )

    def reduce_image_size(self):
        # Build pooling dictionary
        pooling_history = defaultdict(lambda: defaultdict(tuple))
        pooling_history['iteration:0']['image_shape'] = self.image.shape

        # Check if the image is too small to be pooled, then pool the image
        while self.graph_tools.image_mean(self.image.shape) > self.image_size_threshold:
            image, kernel = self.graph_tools.reduce_image(image=self.image)
            
            # Update dictionary
            iter_no = 'iteration:{}'.format(len(pooling_history.keys()))
            pooling_history[iter_no] = {
                'image_shape': image.shape,
                'kernal_size': kernel,
            }
            
            # Must assign within the loop to dynamicaly update the while condition
            self.image = image
        
        # note that the final k is stored in "k"
        if DEBUG:
            print('pooling_history={}'.format(
                json.dumps(pooling_history, indent=4)
            ))

            self.graph_tools.save_image(
                self.image,
                filepath='{}/0001_size_reduced_image.png'.format(self.tracer.results_path),
            )

            self.graph_tools.save_image(
                self.image,
                filepath='{}/0002_size_reduced_image_channel_collage.png'.format(self.tracer.results_path),
                split_rgb_channels=True,
            )


clear_cut = ClearCut()
clear_cut.run()