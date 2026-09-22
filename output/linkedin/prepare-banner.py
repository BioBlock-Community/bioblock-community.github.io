from pathlib import Path
import numpy as np
from PIL import Image, ImageFilter

folder = Path(__file__).resolve().parent
im = Image.open(folder / 'bioblock-call-banner-source.png').convert('RGB')
# Keep all lettering in a shallow cover strip, without stretching the artwork.
im = im.crop((0, 163, 2173, 531)).resize((2256, 382), Image.Resampling.LANCZOS)
a = np.asarray(im).astype(float)
r, g, b = a.transpose(2, 0, 1)
solid = (g-r >= 65) & (g-b > 8) & (b-r > 10)
near = np.asarray(Image.fromarray(solid.astype('uint8')*255).filter(ImageFilter.MaxFilter(3))) > 0
edges = near & ~solid & (g-b > 8) & (b-r > 10)
ink = np.array([32,167,131])
a[solid] = ink
coverage = np.clip((g-r)[edges]/65, 0, 1)[:,None]
a[edges] = coverage*ink + (1-coverage)*a[edges]
result = np.rint(a).clip(0,255).astype('uint8')
assert np.all(result[solid] == ink)
Image.fromarray(result).save(folder / 'bioblock-2nd-call-linkedin-banner.png')
print('Saved banner: 2256 x 382 px; uniform green verified.')
