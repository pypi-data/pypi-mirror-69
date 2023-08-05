# AUTOGENERATED! DO NOT EDIT! File to edit: nbs/07_transforms.ipynb (unless otherwise specified).

__all__ = ['Tfm', 'AlbuTfm']

# Cell
from .imports import *
from .core import *
from .data.all import *

# Cell
class Tfm:
    def __init__(self, tfms): self.tfms = tfms
    def __call__(self, item):
        tfmed = self.apply(**item.asdict())
        return item.replace(**tfmed)

# Cell
class AlbuTfm(Tfm):
    def __init__(self, tfms):
        self.bbox_params=A.BboxParams(format='pascal_voc', label_fields=['labels'])
        super().__init__(tfms=A.Compose(tfms, bbox_params=self.bbox_params))

    def apply(self, img, labels, bboxes=None, masks=None, iscrowds=None, **kwargs):
        # Substitue labels with list of idxs, so we can also filter out iscrowd in case any bbox is removed
        # TODO: Same should be done if a mask is completely removed from the image (if bbox is not given)
        d = self.tfms(image=img, labels=list(range_of(labels)),
                      masks=masks.data if masks else None,
                      bboxes=lmap(lambda o: o.xyxy, bboxes))
        return {
            'img': d['image'],
            'labels': [labels[i] for i in d['labels']],
            'bboxes': lmap(lambda o: BBox.from_xyxy(*o), d['bboxes']),
            'masks': ifnotnone(d['masks'], lambda o: Mask(np.stack(o))),
            'iscrowds': lmap(iscrowds.__getitem__, d['labels']),
        }