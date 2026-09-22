from pathlib import Path
import numpy as np
from PIL import Image, ImageDraw

folder = Path(__file__).resolve().parent
banner = Image.open(folder / 'bioblock-2nd-call-linkedin-banner.png').convert('RGB')
a = np.asarray(banner).astype(int)
r, g, b = a.transpose(2, 0, 1)
yy, xx = np.indices(r.shape)
mask = (xx < 650) & (yy > 180) & (r-g > 15) & (b-g > 20)
ys, xs = np.where(mask)
box = (int(xs.min())-4, int(ys.min())-4, int(xs.max())+5, int(ys.max())+5)
ImageDraw.Draw(banner).rectangle(box, fill='white')
logo = Image.open(folder.parent.parent / 'assets/funding/datipilot-logo.png').convert('RGBA')
logo = logo.crop(logo.getbbox())
width = 290
logo = logo.resize((width, round(logo.height * width / logo.width)), Image.Resampling.LANCZOS)
position = (box[0]+4, round((box[1]+box[3]-logo.height)/2))
banner.paste(logo, position, logo)
target = folder / 'bioblock-2nd-call-linkedin-banner-v2.png'
banner.save(target)
print(f'Saved {target}; logo {logo.size}; position {position}; old bounds {box}')
