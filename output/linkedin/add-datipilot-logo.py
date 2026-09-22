from pathlib import Path
from PIL import Image

folder = Path(__file__).resolve().parent
base = Image.open(folder / 'bioblock-2nd-call-v4-flat.png').convert('RGBA')
logo = Image.open(folder.parent.parent / 'assets/funding/datipilot-logo.png').convert('RGBA')
logo = logo.crop(logo.getbbox())
width = 340
logo = logo.resize((width, round(logo.height * width / logo.width)), Image.Resampling.LANCZOS)
position = (base.width - 70 - logo.width, 105)
base.alpha_composite(logo, position)
target = folder / 'bioblock-2nd-call-v5-datipilot.png'
base.convert('RGB').save(target)
print(f'Saved: {target}; logo size: {logo.size}; position: {position}')
