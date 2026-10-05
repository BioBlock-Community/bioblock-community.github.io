from pathlib import Path
import re
from html import unescape
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[2]
html = (ROOT / 'roadmap-projects.html').read_text(encoding='utf-8')
table = html.split('<table class="project-timeline">', 1)[1].split('</table>', 1)[0]
rows = []
for category, body in re.findall(r'<tr class="timeline-(\w+)">(.*?)</tr>', table, re.S):
    header = re.search(r'<th\b[^>]*>(.*?)</th>', body, re.S).group(1)
    name = unescape(re.sub(r'<[^>]+>', '', header.split('<span class="timeline-dates">')[0])).strip()
    dates = re.findall(r'datetime="(\d{4})-(\d{2})"', header)
    start, months = map(int, re.search(r'--start:\s*(\d+);\s*--months:\s*(\d+)', body).groups())
    (sy, sm), (ey, em) = [tuple(map(int, d)) for d in dates]
    assert start == (sy-2025)*12 + sm
    assert months == (ey-sy)*12 + em-sm+1
    rows.append((category, name, start-1, months, f'{sm:02d}.{sy} – {em:02d}.{ey}', 'Expected:' in header))
assert len(rows) == 9

# One representative bar per new project cohort, as specified by the user.
cohorts = {
    '2nd Call for Proposals': ('upcoming', 'Projects from the 2nd Call', 27, 18, '04.2027 – 09.2028 · 18 months', False),
    '3rd Call for Proposals': ('upcoming', 'Projects from the 3rd Call', 33, 12, '10.2027 – 09.2028 · 12 months', False),
}
expanded = []
for row in rows:
    expanded.append(row)
    if row[1] in cohorts:
        expanded.append(cohorts[row[1]])
rows = expanded
assert len(rows) == 11
assert 27 + 18 == (2028 - 2025) * 12 + 9
assert 33 + 12 == 27 + 18 == (2028 - 2025) * 12 + 9

W, H = 3200, 1800
im = Image.new('RGB', (W, H), '#FFFFFF')
draw = ImageDraw.Draw(im)
def font(size, bold=False):
    return ImageFont.truetype('C:/Windows/Fonts/arialbd.ttf' if bold else 'C:/Windows/Fonts/arial.ttf', size)
def text(x, y, value, size=36, color='#19251F', bold=False, anchor=None):
    draw.text((x,y), value, font=font(size,bold), fill=color, anchor=anchor)

green = '#20A783'
colors = {'management': green, 'starter': '#075C3B', 'selected': '#5B8F3D', 'upcoming': '#609E8E'}
logo = Image.open(ROOT / 'assets/bioblock-logo.png').convert('RGBA')
logo.thumbnail((460, 130), Image.Resampling.LANCZOS)
im.paste(logo, (140, 112), logo)
text(720, 91, 'Projects & Calls for Proposals', 78, bold=True)
text(724, 198, 'BioBlock funding period: 2025–2028', 41, '#607369')
draw.line((140,295,3060,295), fill='#DCE9E2', width=3)

x0, x1 = 1030, 3060
unit = (x1-x0)/48
top, bottom = 450, 1490
for year in range(4):
    xa, xb = x0+12*year*unit, x0+12*(year+1)*unit
    draw.rectangle((xa,345,xb,420), fill='#E6F4EE')
    text((xa+xb)/2,382,str(2025+year),44,'#075C3B',True,'mm')
    for q in range(4):
        text(xa+(q*3+1.5)*unit,440,f'Q{q+1}',27,'#607369',anchor='mm')
text(150,373,'Project / Call',39,bold=True)

for i,(category,name,start,months,dates,expected) in enumerate(rows):
    yc = 513+i*90
    if i%2==0:
        draw.rectangle((140,yc-40,3060,yc+46),fill='#F6F9F7')
    text(165,yc-37,name,38,bold=True)
    text(165,yc+10,('Expected: ' if expected else '')+dates,29,'#607369')

for month in range(49):
    x = round(x0+month*unit)
    if month%12==0:
        draw.line((x,465,x,bottom), fill='#BDCEC4', width=3)
    elif month%3==0:
        draw.line((x,465,x,bottom), fill='#E0E9E4', width=2)

for i,(category,name,start,months,dates,expected) in enumerate(rows):
    yc = 513+i*90
    left,right = round(x0+start*unit),round(x0+(start+months)*unit)
    box=(left,yc-18,right,yc+22)
    if category=='call':
        draw.rounded_rectangle(box,radius=9,fill='#E6F4EE',outline='#087C4B',width=4)
        if expected:
            text(right+20,yc+2,'Expected',27,'#607369',anchor='lm')
    else:
        draw.rounded_rectangle(box,radius=9,fill=colors[category])

text(150,1535,'Dates include the start and end months. The 3rd Call for Proposals is tentative.',29,'#607369')
legend=[(150,1622,green,'Management project'),(930,1622,'#075C3B','Starter projects'),
        (150,1692,'#5B8F3D','Projects selected in the 1st Call for Proposals'),(1920,1622,None,'Calls for proposals'),
        (1920,1692,'#609E8E','Projects from the 2nd & 3rd Calls')]
for x,y,color,label in legend:
    draw.rounded_rectangle((x,y,x+62,y+29),radius=7,fill=color or '#E6F4EE',outline=None if color else '#087C4B',width=3)
    text(x+84,y-5,label,34,'#34483D')

target = ROOT / 'output/timeline/bioblock-projects-cfp-timeline-v3.png'
im.save(target, dpi=(200,200))
print(f'Saved {target} ({W} x {H})')
for row in rows: print(row)
