from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter

folder = Path(__file__).resolve().parent
source = folder / 'bioblock-2nd-call-v3.png'
target = folder / 'bioblock-2nd-call-v4-flat.png'
original = Image.open(source).convert('RGB')
pixels = np.asarray(original).astype(np.float64)
red, green, blue = pixels.transpose(2, 0, 1)
chroma = green - red
green_hue = (green - blue > 8) & (blue - red > 10)
solid = green_hue & (chroma >= 65)
# Keep the pale background leaf intact; only soften the immediate glyph edges.
nearby = np.asarray(Image.fromarray(solid.astype('uint8') * 255).filter(ImageFilter.MaxFilter(3))) > 0
edges = nearby & green_hue & ~solid
result = pixels.copy()
ink = np.array([32, 167, 131], dtype=np.float64)
result[solid] = ink
coverage = np.clip(chroma[edges] / 65, 0, 1)[:, None]
result[edges] = coverage * ink + (1 - coverage) * pixels[edges]
output = np.rint(result).clip(0, 255).astype('uint8')
Image.fromarray(output).save(target)
assert np.all(output[solid] == ink)
assert np.array_equal(output[~(solid | edges)], np.asarray(original)[~(solid | edges)])
print(f'Saved: {target}')
print(f'Uniform #20A783 pixels: {solid.sum()}; antialiased edge pixels: {edges.sum()}')
