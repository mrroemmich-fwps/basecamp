/* ============================================================
   8/9 Collab Basecamp — shared code for every subject page.
   Each page sets window.PAGE = { units: [...], current: N } before loading this file.
   ============================================================ */
(function () {
  const PAGE = window.PAGE || { units: [], current: 1 };
  const $ = s => document.querySelector(s);

  /* ---------- top menus ---------- */
  const navList = $('#navList');
  if (navList) {
    const closeMenus = () => navList.querySelectorAll('button').forEach(x => {
      x.setAttribute('aria-expanded', 'false');
      document.getElementById(x.getAttribute('aria-controls')).classList.remove('open');
    });
    navList.addEventListener('click', e => {
      const b = e.target.closest('button'); if (!b) return;
      const open = b.getAttribute('aria-expanded') !== 'true'; closeMenus();
      b.setAttribute('aria-expanded', open);
      document.getElementById(b.getAttribute('aria-controls')).classList.toggle('open', open);
    });
    document.addEventListener('click', e => { if (!e.target.closest('nav.main')) closeMenus(); });
    // mark the current page in the menu
    navList.querySelectorAll('.menu a').forEach(a => {
      if (location.pathname.replace(/index\.html$/, '').endsWith(a.getAttribute('href').replace('..', ''))) a.setAttribute('aria-current', 'page');
    });
  }
  const burger = $('.burger'), nav = $('#mainNav');
  if (burger) burger.addEventListener('click', () => { const o = nav.classList.toggle('open'); burger.setAttribute('aria-expanded', o); });

  /* ---------- unit trail ---------- */
  const unitsEl = $('#units');
  function showUnit(n) {
    const u = PAGE.units.find(x => x.n === n) || PAGE.units.find(x => x.n === PAGE.current);
    if (!u) return;
    document.querySelectorAll('main > section[id^="unit-"]').forEach(s => s.hidden = true);
    const sec = document.getElementById('unit-' + u.n);
    if (u.open && sec) sec.hidden = false;
    else { $('#unit-soon').hidden = false; $('#soonTitle').textContent = 'Unit ' + u.n + ': ' + u.title; }
    unitsEl.querySelectorAll('.unit').forEach(a => a.setAttribute('aria-current', a.dataset.n == u.n));
  }
  window.showUnit = showUnit;
  if (unitsEl) {
    unitsEl.innerHTML = PAGE.units.map(u => `<a class="unit ${u.open ? 'open' : 'soon'}" href="#unit-${u.n}" data-n="${u.n}">
      <small>Unit ${u.n}</small><strong>${u.title}</strong><span class="st">${u.n === PAGE.current ? 'On the trail now' : u.open ? 'Open' : 'Coming soon'}</span></a>`).join('');
    unitsEl.addEventListener('click', e => { const a = e.target.closest('.unit'); if (a) showUnit(Number(a.dataset.n)); });
    const back = $('#backToCurrent');
    if (back) { back.href = '#unit-' + PAGE.current; back.textContent = 'Back to Unit ' + PAGE.current; back.addEventListener('click', () => showUnit(PAGE.current)); }
    const fromHash = (location.hash.match(/^#unit-(\d+)/) || [])[1];
    showUnit(fromHash ? Number(fromHash) : PAGE.current);
    const cur = unitsEl.querySelector('[aria-current="true"]');
    if (cur) unitsEl.scrollLeft = cur.offsetLeft - unitsEl.clientWidth / 2 + cur.clientWidth / 2;
  }
  // open a lesson linked directly, e.g. #u4-l3
  if (location.hash && !/^#unit-/.test(location.hash)) {
    const t = document.getElementById(location.hash.slice(1));
    if (t) { if (t.tagName === 'DETAILS') t.open = true; setTimeout(() => t.scrollIntoView(), 50); }
  }

  /* ---------- 100-square grids ---------- */
  function fillGrid(el, n) {
    el.innerHTML = Array.from({ length: 100 }, (_, i) => `<i class="${i < n ? 'on' : ''}"></i>`).join('');
    el.setAttribute('aria-label', n + ' of 100 squares shaded');
  }
  document.querySelectorAll('.grid100[data-shade]').forEach(g => fillGrid(g, Number(g.dataset.shade)));

  /* ---------- "Try it" boxes ---------- */
  const rnd = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  const pick = arr => arr[rnd(0, arr.length - 1)];
  const money = n => Number.isInteger(Math.round(n * 100) / 100) ? String(Math.round(n * 100) / 100) : (Math.round(n * 100) / 100).toFixed(2);
  const num = s => Number(String(s).replace(/[$,%\s]/g, ''));
  const near = (a, b, tol) => Math.abs(a - b) < (tol || 0.006);
  const say = (box, ok, msg) => { const f = box.querySelector('.fb'); f.className = 'fb ' + (ok ? 'ok' : 'no'); f.textContent = msg; };
  const Q = (box, html) => { box.querySelector('[data-role=q]').innerHTML = html; };

  // Each maker sets up a question and returns { check(value) → bool, right: 'explanation' }.
  const MAKERS = {
    /* ----- Grade 8 math ----- */
    grid(box) { const n = rnd(3, 97); fillGrid(box.querySelector('[data-role=grid]'), n);
      return { check: v => near(num(v), n), right: n + '% (' + n + ' out of 100 squares)' }; },
    pd(box) {
      if (Math.random() < .5) { const p = pick([5, 8, 12, 25, 30, 45, 60, 75, 3, 90, 100]); Q(box, 'Write <strong>' + p + '%</strong> as a decimal.');
        return { check: v => near(num(v), p / 100), right: p + '% = ' + (p / 100) + ' (move the decimal 2 places left)' }; }
      const d = pick([0.4, 0.07, 0.35, 0.9, 0.15, 0.5, 0.02, 0.66]); Q(box, 'Write <strong>' + d + '</strong> as a percent.');
      return { check: v => near(num(v), Math.round(d * 100)), right: d + ' = ' + Math.round(d * 100) + '% (move the decimal 2 places right)' }; },
    bench(box) {
      const [f, d, p] = pick([['1/10', 0.1, 10], ['1/4', 0.25, 25], ['1/2', 0.5, 50], ['3/4', 0.75, 75], ['3/10', 0.3, 30], ['7/10', 0.7, 70]]);
      const askPct = Math.random() < .5; Q(box, 'What is <strong>' + f + '</strong> as a ' + (askPct ? 'percent' : 'decimal') + '?');
      return { check: v => near(num(v), askPct ? p : d), right: f + ' = ' + d + ' = ' + p + '%' }; },
    ofamt(box) {
      const p = pick([10, 50, 25, 20, 5]); const a = p === 25 ? pick([20, 40, 60, 80, 100, 12, 16]) : pick([20, 30, 40, 50, 60, 70, 80, 90, 14, 36, 120]);
      const ans = a * p / 100; Q(box, 'What is <strong>' + p + '% of $' + a + '</strong>?');
      const how = { 10: 'move the decimal 1 place left', 50: 'take half', 25: 'take half, then half again', 20: 'find 10%, then double it', 5: 'find 10%, then take half' }[p];
      return { check: v => near(num(v), ans), right: '$' + money(ans) + ' (' + how + ')' }; },
    sale(box) {
      const p = pick([10, 25, 50, 20]); const a = pick([20, 40, 60, 80, 100, 120]); const disc = a * p / 100, ans = a - disc;
      Q(box, 'Shoes are <strong>$' + a + '</strong>, <strong>' + p + '% off</strong>. What is the sale price?');
      return { check: v => near(num(v), ans), right: 'Discount: ' + p + '% of $' + a + ' = $' + money(disc) + '. Sale price: $' + a + ' − $' + money(disc) + ' = $' + money(ans) }; },
    reason(box) {
      const p = pick([10, 25, 50, 20]); const a = pick([40, 60, 80, 100]); const real = a - a * p / 100;
      const ok = Math.random() < .5; const shown = ok ? real : pick([a - p, a - a * p / 1000, a + a * p / 100].filter(x => !near(x, real)));
      Q(box, 'Someone says <strong>' + p + '% off $' + a + '</strong> is <strong>$' + money(shown) + '</strong>.');
      return { ok, right: p + '% of $' + a + ' is $' + money(a * p / 100) + ', so the sale price should be about $' + money(real) + '.' }; },

    /* ----- Grade 9 math ----- */
    fdp9(box) {
      const rows = [['3/8', 0.375, 37.5], ['1/5', 0.2, 20], ['2/5', 0.4, 40], ['3/5', 0.6, 60], ['1/8', 0.125, 12.5], ['7/20', 0.35, 35], ['9/25', 0.36, 36], ['4/5', 0.8, 80]];
      const [f, d, p] = pick(rows); const askPct = Math.random() < .6;
      Q(box, 'Write <strong>' + f + '</strong> as a ' + (askPct ? 'percent' : 'decimal') + '.');
      return { check: v => near(num(v), askPct ? p : d), right: f + ' → ' + f.replace('/', ' ÷ ') + ' = ' + d + ' = ' + p + '%' }; },
    pctof9(box) {
      const p = pick([15, 12, 8, 35, 6, 18, 45]); const a = pick([64, 25, 48, 120, 36.5, 82, 250]);
      const ans = Math.round(a * p) / 100; Q(box, 'What is <strong>' + p + '% of $' + money(a) + '</strong>? (round to the nearest cent)');
      return { check: v => near(num(v), ans), right: (p / 100) + ' × ' + money(a) + ' = $' + money(ans) }; },
    tax9(box) {
      const a = pick([18, 24.5, 39.99, 52, 7.6, 129, 64.25]);
      if (Math.random() < .5) { const ans = Math.round(a * 105) / 100; Q(box, 'A game costs <strong>$' + money(a) + '</strong>. What is the total with <strong>5% GST</strong>?');
        return { check: v => near(num(v), ans), right: money(a) + ' × 1.05 = $' + money(ans) }; }
      const t = pick([15, 18, 20]); const tip = Math.round(a * t) / 100; Q(box, 'Dinner costs <strong>$' + money(a) + '</strong>. How much is a <strong>' + t + '% tip</strong>?');
      return { check: v => near(num(v), tip, 0.02), right: (t / 100) + ' × ' + money(a) + ' = $' + money(tip) }; },
    sale9(box) {
      const p = pick([15, 30, 35, 40, 20, 25]); const a = pick([49.99, 80, 125, 36, 64, 210]);
      const ans = Math.round(a * (100 - p)) / 100; Q(box, 'A jacket is <strong>$' + money(a) + '</strong>, <strong>' + p + '% off</strong>. What is the sale price?');
      return { check: v => near(num(v), ans, 0.02), right: 'Pay ' + (100 - p) + '%: ' + money(a) + ' × ' + ((100 - p) / 100) + ' = $' + money(ans) }; },
    rate9(box) {
      const items = [['cereal', 'g', [[450, 4.29], [750, 6.49]]], ['juice', 'L', [[1.75, 3.99], [2.5, 5.99]]], ['rice', 'kg', [[2, 6.99], [8, 24.99]]], ['shampoo', 'mL', [[400, 5.49], [900, 12.99]]], ['granola bars', 'bars', [[6, 3.49], [12, 6.49]]], ['milk', 'L', [[1, 2.79], [4, 6.19]]]];
      const [name, unit, opts] = pick(items); const per = o => o[1] / o[0];
      const best = per(opts[0]) < per(opts[1]) ? 'A' : 'B';
      Q(box, 'Which ' + name + ' is the better buy?<br><strong>A:</strong> ' + opts[0][0] + ' ' + unit + ' for $' + opts[0][1].toFixed(2) + ' &nbsp; <strong>B:</strong> ' + opts[1][0] + ' ' + unit + ' for $' + opts[1][1].toFixed(2) + '<br><span class="hint">Type A or B</span>');
      const fmt = o => '$' + o[1].toFixed(2) + ' ÷ ' + o[0] + ' = $' + per(o).toFixed(4).replace(/0+$/, '') + ' per ' + unit;
      return { check: v => String(v).trim().toUpperCase() === best, right: best + ' is cheaper per ' + unit + '. A: ' + fmt(opts[0]) + '. B: ' + fmt(opts[1]) + '.' }; },
    change9(box) {
      const [o, n] = pick([[15, 15.45], [80, 68], [200, 230], [12.5, 15], [40, 34], [16, 16.8]]);
      const pc = Math.round((n - o) / o * 1000) / 10;
      Q(box, 'A price goes from <strong>$' + money(o) + '</strong> to <strong>$' + money(n) + '</strong>. What is the percent change? <span class="hint">(use − for a decrease)</span>');
      return { check: v => near(num(String(v).replace('−', '-')), pc, 0.06), right: '(' + money(n) + ' − ' + money(o) + ') ÷ ' + money(o) + ' = ' + (pc / 100) + ' → ' + (pc > 0 ? '+' : '') + pc + '%' }; },

    /* ----- CEFL 8: pay and total compensation ----- */
    annual8(box) {
      const w = pick([15, 15.5, 16, 17, 18.5, 20, 22]), h = pick([20, 25, 30, 37.5, 40]); const ans = w * h * 52;
      Q(box, 'A job pays <strong>$' + money(w) + ' an hour</strong> for <strong>' + h + ' hours a week</strong>. How much is that in a year (52 weeks)?');
      return { check: v => near(num(v), ans, 0.6), right: '$' + money(w) + ' × ' + h + ' × 52 = $' + ans.toLocaleString('en-CA', { maximumFractionDigits: 2 }) }; },
    total8(box) {
      const sal = pick([32000, 36500, 41000, 45000]), bon = pick([500, 1000, 1500, 2000]), ben = pick([1200, 2400, 3000, 3600]); const ans = sal + bon + ben;
      Q(box, 'Salary <strong>$' + sal.toLocaleString('en-CA') + '</strong>, a yearly bonus of <strong>$' + bon.toLocaleString('en-CA') + '</strong>, and health benefits worth <strong>$' + ben.toLocaleString('en-CA') + '</strong> a year. What is the total compensation?');
      return { check: v => near(num(v), ans, 0.6), right: sal.toLocaleString('en-CA') + ' + ' + bon.toLocaleString('en-CA') + ' + ' + ben.toLocaleString('en-CA') + ' = $' + ans.toLocaleString('en-CA') }; },
    offer8(box) {
      let a, b, A, B;
      do { a = pick([16, 17, 18]); b = a + pick([1, 1.5, 2]); const benA = pick([2000, 3000, 4000, 5000]);
        A = { w: a, ben: benA, t: a * 40 * 52 + benA }; B = { w: b, ben: 0, t: b * 40 * 52 }; } while (A.t === B.t);
      const best = A.t > B.t ? 'A' : 'B';
      Q(box, 'Both jobs are 40 hours a week. Which has the higher total compensation?<br><strong>A:</strong> $' + money(A.w) + '/hour + benefits worth $' + A.ben.toLocaleString('en-CA') + ' a year &nbsp; <strong>B:</strong> $' + money(B.w) + '/hour, no benefits<br><span class="hint">Type A or B</span>');
      const f = o => '$' + money(o.w) + ' × 40 × 52' + (o.ben ? ' + $' + o.ben.toLocaleString('en-CA') : '') + ' = $' + o.t.toLocaleString('en-CA');
      return { check: v => String(v).trim().toUpperCase() === best, right: best + ' is worth more. A: ' + f(A) + '. B: ' + f(B) + '.' }; },

    /* ----- multiple choice (science and anything else) -----
       Put the questions in <script type="application/json" class="qs"> inside the box:
       [{ "q": "...", "options": ["A","B","C"], "answer": 0, "why": "..." }] */
    mc(box) {
      const list = box._qs || (box._qs = JSON.parse(box.querySelector('script.qs').textContent));
      box._i = ((box._i == null ? -1 : box._i) + 1) % list.length;
      const it = list[box._i];
      Q(box, it.q);
      const opts = box.querySelector('[data-role=opts]');
      opts.innerHTML = it.options.map((o, i) => `<button type="button" data-i="${i}">${o}</button>`).join('');
      opts.querySelectorAll('button').forEach(b => b.addEventListener('click', () => {
        const right = Number(b.dataset.i) === it.answer;
        b.classList.add(right ? 'right' : 'wrong');
        if (right) { opts.querySelectorAll('button').forEach(x => x.disabled = true); say(box, true, '✓ Yes! ' + (it.why || '')); }
        else say(box, false, 'Not quite. Try another answer.');
      }));
      const c = box.querySelector('[data-role=count]'); if (c) c.textContent = 'Question ' + (box._i + 1) + ' of ' + list.length;
      return {};
    }
  };

  document.querySelectorAll('.try').forEach(box => {
    const type = box.dataset.try; if (!MAKERS[type]) return;
    let cur = MAKERS[type](box), tries = 0;
    const input = box.querySelector('input');
    const fresh = () => { cur = MAKERS[type](box); tries = 0; if (input) input.value = ''; box.querySelector('.fb').textContent = ''; };
    const nb = box.querySelector('[data-role=new]'); if (nb) nb.addEventListener('click', fresh);
    const check = () => {
      if (!input.value.trim()) return say(box, false, 'Type an answer first.');
      if (cur.check(input.value)) return say(box, true, '✓ Nice work! ' + cur.right);
      tries++; say(box, false, tries < 2 ? 'Not quite. Try again. (Hint: look at the examples above.)' : 'Answer: ' + cur.right);
    };
    if (input) { box.querySelector('[data-role=check]').addEventListener('click', check); input.addEventListener('keydown', e => { if (e.key === 'Enter') check(); }); }
    ['yes', 'no'].forEach(r => { const b = box.querySelector('[data-role=' + r + ']'); if (b) b.addEventListener('click', () => {
      const right = (r === 'yes') === cur.ok; say(box, right, (right ? '✓ Right! ' : 'Not this time. ') + cur.right); }); });
  });

  /* ---------- print the cheat sheet ---------- */
  document.querySelectorAll('[data-print-cheat]').forEach(a => a.addEventListener('click', e => {
    e.preventDefault(); document.body.classList.add('printing'); window.print();
    setTimeout(() => document.body.classList.remove('printing'), 500);
  }));
})();
