"""Assemble subject pages for 8/9 Collab Basecamp from a shared shell + per-unit content."""
import json, sys, os

SITE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
B = os.path.dirname(os.path.abspath(__file__))

NAV = '''      <ul id="navList">
        <li><button aria-expanded="false" aria-controls="m8">Grade 8 ▾</button>
          <ul class="menu" id="m8">
            <li><a href="../math8/">Mathematics</a></li>
            <li><a href="../la8/">Language Arts</a></li>
            <li><a href="../science8/">Science</a></li>
            <li><a href="../social8/">Social Studies</a></li>
            <li><a href="../cefl8/">Career &amp; Financial Literacy</a></li>
          </ul></li>
        <li><button aria-expanded="false" aria-controls="m9">Grade 9 ▾</button>
          <ul class="menu" id="m9">
            <li><a href="../math9/">Mathematics</a></li>
            <li><a href="../la9/">Language Arts</a></li>
            <li><a href="../science9/">Science</a></li>
            <li><a href="../social9/">Social Studies</a></li>
            <li><a href="../cefl9/">Career &amp; Financial Literacy</a></li>
          </ul></li>
        <li><a class="accent" href="../avalanche/">Avalanche HQ</a></li>
        <li><a class="accent" href="../avalanche/#expeditions">Expeditions</a></li>
      </ul>'''

SHELL = '''<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title} · 8/9 Collab Basecamp</title>
<meta name="description" content="{title}: units, lessons with worked examples, practice, resources and Expeditions.">
<meta name="theme-color" content="#22392b">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bitter:wght@600;700;800&family=Source+Sans+3:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../assets/subject.css">
</head>
<body class="g{grade}">
<a class="skip" href="#main">Skip to content</a>

<header class="top">
  <div class="wrap bar">
    <a class="brand" href="../">
      <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M2 27 12 11l5 8 4-6 9 14z" fill="#e9b949"/><path d="M12 11l-3 5 3-1 2 2z" fill="#fffdf8"/></svg>
      <span>8/9 Collab Basecamp</span>
    </a>
    <button class="burger" aria-expanded="false" aria-controls="mainNav">Menu</button>
    <nav class="main" id="mainNav" aria-label="Main">
{nav}
    </nav>
  </div>
  <div class="stripe"></div>
</header>

<main id="main" class="wrap">
  <div class="crumbs"><a href="../">Basecamp</a> › Grade {grade} › {subject}</div>
  <div class="hero">
    <span class="marker" aria-hidden="true">{grade}</span>
    <div>
      <h1>{title}</h1>
      <p>{tagline}</p>
    </div>
  </div>

  <nav class="units" id="units" aria-label="Units"></nav>

{units_html}
  <!-- shown when a "coming soon" unit is picked -->
  <section id="unit-soon" hidden><div class="card soonbox"><h2 id="soonTitle" style="margin:0 0 6px"></h2><p class="hint" style="margin:0">This part of the trail opens later this year.</p>
    <p><a class="btn gold" id="backToCurrent" href="#">Back</a></p></div></section>
</main>

<!-- printable cheat sheets -->
{cheat}

<footer>
  <div class="wrap"><span>8/9 Collab Basecamp · {title}</span><a href="../">← Back to Basecamp</a></div>
</footer>

<script>
/* ============================================================
   EDIT HERE: the unit list. Set open: true when a unit is ready,
   and change "current" to the unit the class is on now.
   ============================================================ */
window.PAGE = {{
  current: {current},
  units: [
{units_js}
  ]
}};
</script>
<script src="../assets/subject.js"></script>
</body>
</html>
'''

import re

MC_TPL = """<div class="try" data-try="mc">
          <h4>Quick check <small class="hint" data-role="count"></small></h4>
          <div class="q" data-role="q"></div>
          <div class="opts" data-role="opts"></div>
          <div class="fb" aria-live="polite"></div>
          <button class="btn ghost" data-role="new" style="margin-top:8px">Next question</button>
          <script type="application/json" class="qs">%s</script>
        </div>"""
EXP_TPL = """<div class="expd"><span class="ic">🧭</span><div><strong>Expedition: %s</strong>
          <p>%s</p></div></div>"""
PRACTICE = """<div class="levels">
      <div class="level"><strong>🥾 Trailhead</strong><p class="hint">Warm-up questions. Practice questions are coming soon.</p></div>
      <div class="level"><strong>🌲 On the trail</strong><p class="hint">Everyday problems. Coming soon.</p></div>
      <div class="level"><strong>🏔️ Summit</strong><p class="hint">Challenge questions. Coming soon.</p></div>
    </div>"""
CH_TPL = """<div class="try" data-try="%s">
          <h4>Try it</h4>
          <div class="q" data-role="q"></div>
          <div class="opts" data-role="opts"></div>
          <div class="fb" aria-live="polite"></div>
          <button class="btn ghost" data-role="new" style="margin-top:8px">New one</button>
        </div>"""
NUM_TPL = """<div class="try" data-try="%s">
          <h4>Try it</h4>
          <div class="q" data-role="q"></div>
          <div class="row"><label class="sr" for="t-%s">Your answer</label>%s<input id="t-%s" inputmode="decimal"><button class="btn" data-role="check">Check</button><button class="btn ghost" data-role="new">New one</button></div>
          <div class="fb" aria-live="polite"></div>
        </div>"""

def expand(html):
    """Short-hands used in the unit files:
       <!--MC [json questions]-->   quick-check box
       <!--EXP Title | text-->      Expedition callout
       <!--NUM maker | prefix-->    numeric Try-it box (prefix like $)
       <!--PRACTICE-->              practice placeholders"""
    html = re.sub(r'<!--MC (\[.*?\])-->', lambda m: MC_TPL % m.group(1), html, flags=re.S)
    html = re.sub(r'<!--EXP (.*?) \| (.*?)-->', lambda m: EXP_TPL % (m.group(1).strip(), m.group(2).strip()), html, flags=re.S)
    n = [0]
    def num(m):
        n[0] += 1; maker, pre = [x.strip() for x in m.group(1).split('|')]
        if pre == 'AB':   # letter answer: normal keyboard on phones
            return (NUM_TPL % (maker, n[0], '', n[0])).replace('inputmode="decimal"', 'placeholder="A or B" maxlength="1" style="width:90px"')
        pre_html = '<span>%s</span>' % pre if pre else ''
        return NUM_TPL % (maker, n[0], pre_html, n[0])
    html = re.sub(r'<!--NUM (.*?)-->', num, html)
    html = re.sub(r'<!--CH (\w+)-->', lambda m: CH_TPL % m.group(1), html)
    html = re.sub(r'<!--SIM (\w+)-->', lambda m: '<div class="sim" data-sim="%s"><h4 style="margin:0">Try it: run the experiment</h4></div>' % m.group(1), html)
    return html.replace('<!--PRACTICE-->', PRACTICE)

def pull_cheats(html):
    """Move <!--CHEAT id-->…<!--/CHEAT--> blocks out of the units; return (html, cheat divs)."""
    cheats = []
    def grab(m):
        cheats.append('<div class="cheat" id="cheat-%s">%s</div>' % (m.group(1), m.group(2))); return ''
    html = re.sub(r'<!--CHEAT (\w+)-->(.*?)<!--/CHEAT-->', grab, html, flags=re.S)
    return html, '\n'.join(cheats)

def build(spec):
    units_js = ',\n'.join('    {{ n: {n}, title: {t}, open: {o} }}'.format(n=n, t=json.dumps(t), o='true' if n in spec['open'] else 'false')
                          for n, t in enumerate(spec['units'], 1))
    units_html, unit_cheats = pull_cheats(expand(''.join(open(os.path.join(B, f)).read() for f in spec['unit_files'])))
    page_cheat = '<div id="cheat" class="cheat">%s</div>' % open(os.path.join(B, spec['cheat'])).read() if spec.get('cheat') else ''
    html = SHELL.format(title=spec['title'], grade=spec['grade'], subject=spec['subject'], tagline=spec['tagline'], nav=NAV,
                        units_html=units_html, cheat=page_cheat + unit_cheats, current=spec['current'], units_js=units_js)
    os.makedirs(os.path.join(SITE, spec['folder']), exist_ok=True)
    open(os.path.join(SITE, spec['folder'], 'index.html'), 'w').write(html)
    print('built', spec['folder'], len(html))

PAGES = {
  'math8': dict(folder='math8', grade=8, subject='Mathematics', title='Grade 8 Math',
    tagline='Numbers, money, measuring and data, all in everyday situations at home, at work and in the community.',
    units=['Number Sense', 'Integers & Temperature', 'Decimals & Money', 'Factors & Fractions', 'Percents & Discounts',
           'Time & Wages', 'Patterns & Equations', 'Perimeter & Area', 'Mass, Volume & Capacity', 'Data & Probability'],
    open=[1, 2, 3, 4, 5], current=5, unit_files=['math8-unit%d.html' % n for n in range(1, 11)], cheat=None),
  'math9': dict(folder='math9', grade=9, subject='Mathematics', title='Grade 9 Math',
    tagline='Rates, percents, measuring, graphing and spreadsheets, the math you will use for shopping, paycheques and the job site.',
    units=['Big Numbers & Rounding', 'Integers & Debt', 'Decimals & Averages', 'Factors & Fractions', 'Percents & Consumer Math',
           'Paycheques & Time', 'Patterns & Equations', 'Perimeter, Area & Angles', 'Circles & 3-D Objects', 'Data & Graphing'],
    open=[1, 2, 3, 4, 5], current=5, unit_files=['math9-unit%d.html' % n for n in range(1, 11)], cheat=None),
  'science8': dict(folder='science8', grade=8, subject='Science', title='Grade 8 Science',
    tagline='Fluids, cells, light, machines and water: how science works at home, at work and in the community.',
    units=['Mix & Flow of Matter', 'Fresh & Saltwater Systems', 'Mechanical Systems', 'Cells & Systems', 'Light & Optical Systems'],
    open=[1], current=1, unit_files=['sci8-unit%d.html' % n for n in range(1, 6)], cheat=None),
  'science9': dict(folder='science9', grade=9, subject='Science', title='Grade 9 Science',
    tagline='Chemistry, the environment, electricity, living things and space, and the safety skills every workplace needs.',
    units=['Matter & Chemical Change', 'Environmental Chemistry', 'Electrical Principles', 'Biological Diversity', 'Space Exploration'],
    open=[1], current=1, unit_files=['sci9-unit%d.html' % n for n in range(1, 6)], cheat=None),
  'la8': dict(folder='la8', grade=8, subject='Language Arts', title='Grade 8 Language Arts',
    tagline='Reading, writing, viewing and speaking for school, home and the workplace.',
    units=['Identity & Belonging', 'Workplace Writing', 'Stories & Scripts', 'Media Literacy', 'Persuasion & PSAs', 'My Career Portfolio'],
    open=[1, 2], current=2, unit_files=['la8-unit%d.html' % n for n in range(1, 7)], cheat=None),
  'la9': dict(folder='la9', grade=9, subject='Language Arts', title='Grade 9 Language Arts',
    tagline='Stories, essays, media and interviews: communicating with confidence for high school and the job site.',
    units=['Identity & Belonging', 'Résumés, Cover Letters & Interviews', 'Novel vs Film', 'Media & Bias', 'Persuasive Essays & PSAs', 'My Transition Plan'],
    open=[1, 2], current=2, unit_files=['la9-unit%d.html' % n for n in range(1, 7)], cheat=None),
  'social8': dict(folder='social8', grade=8, subject='Social Studies', title='Grade 8 Social Studies',
    tagline='How worldviews shape societies, and what happens when different worldviews meet.',
    units=['Worldviews & Identity', 'Japan: Isolation & Adaptation', 'The Renaissance', 'The Aztecs & Spain', 'Worldviews Today'],
    open=[1, 2], current=2, unit_files=['soc8-unit%d.html' % n for n in range(1, 6)], cheat=None),
  'social9': dict(folder='social9', grade=9, subject='Social Studies', title='Grade 9 Social Studies',
    tagline='Canadian government, rights and the economy, and how decisions affect your quality of life.',
    units=['Citizenship & Collective Rights', 'Resources, Trade & the Economy', 'Laws, Courts & the Charter', 'Consumers, Taxes & Quality of Life', 'Environment & Our Future'],
    open=[1, 2], current=2, unit_files=['soc9-unit%d.html' % n for n in range(1, 6)], cheat=None),
  'cefl8': dict(folder='cefl8', grade=8, subject='Career &amp; Financial Literacy', title='CEFL 8',
    tagline='Career and financial literacy: jobs, pay, taxes, budgets and the choice between saving and investing.',
    units=['Skills, Identity & the World of Work', 'Getting Hired: Job Offers & Pay', 'Paycheques, Taxes & Worker Rights', 'Spending, Saving & Interest', 'Planning My Future'],
    open=[1, 2], current=2, unit_files=['cefl8-unit%d.html' % n for n in range(1, 6)], cheat=None),
  'cefl9': dict(folder='cefl9', grade=9, subject='Career &amp; Financial Literacy', title='CEFL 9',
    tagline='Career and financial literacy: getting hired, T4s and taxes, credit and debt, and planning your path.',
    units=['Skills, Identity & the World of Work', 'Getting Hired', 'Paycheques, Taxes & Worker Rights', 'Credit & Debt', 'Planning My Future'],
    open=[1, 2], current=2, unit_files=['cefl9-unit%d.html' % n for n in range(1, 6)], cheat=None),
}

if __name__ == '__main__':
    for k in (sys.argv[1:] or PAGES):
        build(PAGES[k])
