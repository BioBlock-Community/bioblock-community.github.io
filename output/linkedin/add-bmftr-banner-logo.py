from pathlib import Path

from PIL import Image, ImageChops, ImageDraw

folder = Path(__file__).resolve().parent
banner = Image.open(folder / 'bioblock-2nd-call-linkedin-banner-v2.png').convert('RGB')

# Remove the previous DATIpilot placement from the lower-left logo area.
ImageDraw.Draw(banner).rectangle((45, 218, 575, 350), fill='white')

assets = folder.parent.parent / 'assets'
datipilot = Image.open(assets / 'funding/datipilot-logo.png').convert('RGBA')
datipilot = datipilot.crop(datipilot.getbbox())
datipilot_width = 160
datipilot = datipilot.resize(
    (datipilot_width, round(datipilot.height * datipilot_width / datipilot.width)),
    Image.Resampling.LANCZOS,
)
banner.paste(datipilot, (60, 269), datipilot)

bmftr_path = Path(r'C:\Users\jonas\Desktop\BioBlock\Media\Logos\DATIpilot + TU\BMFTR funded.jpg')
bmftr = Image.open(bmftr_path).convert('RGB')
difference = ImageChops.difference(bmftr, Image.new('RGB', bmftr.size, 'white')).convert('L')
bounds = difference.point(lambda value: 255 if value > 18 else 0).getbbox()
bmftr = bmftr.crop(bounds)
bmftr_width = 300
bmftr = bmftr.resize(
    (bmftr_width, round(bmftr.height * bmftr_width / bmftr.width)),
    Image.Resampling.LANCZOS,
)
banner.paste(bmftr, (250, 177))

target = folder / 'bioblock-2nd-call-linkedin-banner-v3-funding.png'
banner.save(target)
print(f'Saved {target}; DATIpilot {datipilot.size}; BMFTR {bmftr.size}')
