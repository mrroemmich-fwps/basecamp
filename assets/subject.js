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
  // Teacher preview: add ?preview to the address to see units that are still "Coming soon".
  const PREVIEW = new URLSearchParams(location.search).has('preview');
  function showUnit(n) {
    const u = PAGE.units.find(x => x.n === n) || PAGE.units.find(x => x.n === PAGE.current);
    if (!u) return;
    document.querySelectorAll('main > section[id^="unit-"]').forEach(s => s.hidden = true);
    const sec = document.getElementById('unit-' + u.n);
    if ((u.open || PREVIEW) && sec) {
      sec.hidden = false;
      if (!u.open && !sec.querySelector('.previewNote')) sec.insertAdjacentHTML('afterbegin', '<div class="previewNote">👀 <strong>Teacher preview.</strong> Students see this unit as "Coming soon." Only you can see it with this preview link.</div>');
    }
    else { $('#unit-soon').hidden = false; $('#soonTitle').textContent = 'Unit ' + u.n + ': ' + u.title; }
    unitsEl.querySelectorAll('.unit').forEach(a => a.setAttribute('aria-current', a.dataset.n == u.n));
  }
  window.showUnit = showUnit;
  if (unitsEl) {
    unitsEl.innerHTML = PAGE.units.map(u => `<a class="unit ${u.open ? 'open' : 'soon'}" href="#unit-${u.n}" data-n="${u.n}">
      <small>Unit ${u.n}</small><strong>${u.title}</strong><span class="st">${u.n === PAGE.current ? 'On the trail now' : u.open ? 'Open' : PREVIEW ? 'Coming soon (preview)' : 'Coming soon'}</span></a>`).join('');
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
  const sup = n => String(n).split('').map(d => '⁰¹²³⁴⁵⁶⁷⁸⁹'[d]).join('');
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


    /* ----- Grade 9 math: big numbers and rounding ----- */
    pow9(box) {
      if (Math.random() < .5) { const n = rnd(2, 7); Q(box, 'What is <strong>10<sup>' + n + '</sup></strong> as a regular number?');
        return { check: v => near(num(v), Math.pow(10, n)), right: '10' + sup(n) + ' is 1 followed by ' + n + ' zeros = ' + Math.pow(10, n).toLocaleString('en-CA') }; }
      const a = pick([2, 3, 4, 5, 1.5, 2.5, 3.2, 6.8]), n = rnd(3, 7), ans = Math.round(a * Math.pow(10, n));
      Q(box, 'Write <strong>' + a + ' × 10<sup>' + n + '</sup></strong> in standard form.');
      return { check: v => near(num(v), ans), right: 'Move the decimal ' + n + ' places right: ' + a + ' × 10' + sup(n) + ' = ' + ans.toLocaleString('en-CA') }; },
    round9(box) {
      const to = pick([1, 0.1, 0.01]); const x = rnd(10000, 999999) / 1000;
      const ans = Math.round(x / to) * to, d = to === 1 ? 0 : to === 0.1 ? 1 : 2, name = { 1: 'whole number', 0.1: 'tenth', 0.01: 'hundredth' }[to];
      Q(box, 'Round <strong>' + x.toFixed(3) + '</strong> to the nearest <strong>' + name + '</strong>.');
      return { check: v => near(num(v), ans, 0.0001), right: x.toFixed(3) + ' rounds to ' + ans.toFixed(d) + '. Look at the next digit to the right: 5 or more rounds up.' }; },
    est9(box) {
      const a = rnd(11, 89) * 10 + rnd(1, 9), b = rnd(3, 9) * 10 + rnd(1, 4); const ra = Math.round(a / 100) * 100, rb = Math.round(b / 10) * 10;
      Q(box, 'Estimate <strong>' + a + ' × ' + b + '</strong> by rounding ' + a + ' to the nearest hundred and ' + b + ' to the nearest ten.');
      return { check: v => near(num(v), ra * rb), right: ra + ' × ' + rb + ' = ' + (ra * rb).toLocaleString('en-CA') + ' (the exact answer is ' + (a * b).toLocaleString('en-CA') + ')' }; },

    /* ----- integers and debt ----- */
    bank9(box) {
      let bal = rnd(-60, 120); const start = bal; const steps = [];
      for (let i = 0; i < 3; i++) { const dep = Math.random() < .45, amt = rnd(1, 15) * 5; bal += dep ? amt : -amt; steps.push([dep, amt]); }
      const f = n => (n < 0 ? '−$' + (-n) : '$' + n);
      Q(box, 'Your account starts at <strong>' + f(start) + '</strong>. Then: ' + steps.map(s => (s[0] ? 'deposit ' : 'withdraw ') + '<strong>$' + s[1] + '</strong>').join(', ') + '. What is the balance now? <span class="hint">(use − if it is negative)</span>');
      return { check: v => near(num(String(v).replace(/−/g, '-').replace('$', '')), bal), right: start + steps.map(s => (s[0] ? ' + ' : ' − ') + s[1]).join('') + ' = ' + bal + (bal < 0 ? ' (overdrawn by $' + (-bal) + ')' : '') }; },
    int9(box) {
      const a = rnd(-15, 15), b = rnd(-12, 12), op = pick(['+', '−', '×']); if (!a || !b) return MAKERS.int9(box);
      const ans = op === '+' ? a + b : op === '−' ? a - b : a * b, w = n => n < 0 ? '(' + n + ')' : n;
      Q(box, 'Work it out: <span class="math">' + w(a) + ' ' + op + ' ' + w(b) + '</span>');
      const how = op === '−' ? 'Subtracting is adding the opposite: ' + w(a) + ' + ' + w(-b) : op === '×' ? (a * b < 0 ? 'Signs are different, so the answer is negative' : 'Signs are the same, so the answer is positive') : 'Start at ' + a + ' and move ' + Math.abs(b) + (b > 0 ? ' right' : ' left');
      return { check: v => near(num(String(v).replace(/−/g, '-')), ans), right: how + ' = ' + ans }; },

    /* ----- decimals and averages ----- */
    decmul9(box) {
      const p = pick([1.29, 2.49, 3.75, 0.89, 4.6, 12.5, 18.25]), q = pick([1.5, 2.5, 0.75, 3.2, 1.25, 12, 24]); const ans = Math.round(p * q * 100) / 100;
      Q(box, 'Grapes cost <strong>$' + p.toFixed(2) + ' per kg</strong>. What do <strong>' + q + ' kg</strong> cost? <span class="hint">(round to the cent)</span>');
      return { check: v => near(num(v), ans, 0.011), right: p.toFixed(2) + ' × ' + q + ' = $' + ans.toFixed(2) }; },
    decdiv9(box) {
      if (Math.random() < .5) { const tot = pick([7.5, 12.6, 4.8, 22.5, 9.75, 15.6]), d = pick([0.3, 1.5, 0.25, 0.6, 2.5]); const ans = Math.round(tot / d * 100) / 100;
        Q(box, 'A <strong>' + tot + ' m</strong> board is cut into pieces <strong>' + d + ' m</strong> long. How many pieces? <span class="hint">(round to the hundredth)</span>');
        return { check: v => near(num(v), ans, 0.011), right: tot + ' ÷ ' + d + ' = ' + ans }; }
      const bill = pick([86.4, 157.5, 243.6, 98.75, 312]), n = pick([12, 15, 16, 24, 25]), ans = Math.round(bill / n * 100) / 100;
      Q(box, 'A team of <strong>' + n + '</strong> splits a <strong>$' + bill.toFixed(2) + '</strong> bill evenly. How much does each person pay? <span class="hint">(round to the cent)</span>');
      return { check: v => near(num(v), ans, 0.011), right: bill.toFixed(2) + ' ÷ ' + n + ' ≈ $' + ans.toFixed(2) }; },
    mean9(box) {
      const n = rnd(4, 6); const xs = Array.from({ length: n }, () => rnd(4, 30)); const s = xs.reduce((a, b) => a + b, 0), ans = Math.round(s / n * 10) / 10;
      Q(box, 'Hours worked each week: <strong>' + xs.join(', ') + '</strong>. What is the <strong>mean</strong>? <span class="hint">(round to the tenth)</span>');
      return { check: v => near(num(v), ans, 0.051), right: 'Add them: ' + s + '. Divide by ' + n + ': ' + s + ' ÷ ' + n + ' ≈ ' + ans }; },

    /* ----- factors and fractions ----- */
    lcm9(box) {
      const g = (a, b) => b ? g(b, a % b) : a; const a = pick([4, 6, 8, 9, 10, 12, 15]), b = pick([3, 4, 5, 6, 8, 9, 10]); if (a === b) return MAKERS.lcm9(box);
      const l = a * b / g(a, b);
      Q(box, 'Hot dogs come in packs of <strong>' + a + '</strong> and buns in packs of <strong>' + b + '</strong>. What is the smallest number of each you can buy so they match? <span class="hint">(the lowest common multiple)</span>');
      return { check: v => near(num(v), l), right: 'Multiples of ' + a + ' and ' + b + ' first meet at LCM = ' + l }; },
    gcf9(box) {
      const g = (a, b) => b ? g(b, a % b) : a; const k = pick([2, 3, 4, 5, 6, 8]), a = k * rnd(2, 7), b = k * rnd(2, 9); if (a === b) return MAKERS.gcf9(box);
      const ans = g(a, b);
      Q(box, 'You have <strong>' + a + ' granola bars</strong> and <strong>' + b + ' juice boxes</strong>. What is the greatest number of identical snack bags you can make with nothing left over? <span class="hint">(the greatest common factor)</span>');
      return { check: v => near(num(v), ans), right: 'The biggest number that divides both ' + a + ' and ' + b + ' is GCF = ' + ans }; },
    prime9(box) {
      const n = pick([12, 18, 20, 24, 28, 30, 36, 40, 42, 45, 48, 60, 72]); const f = []; let m = n, d = 2;
      while (m > 1) { while (m % d === 0) { f.push(d); m /= d; } d++; }
      const right = f.join(' × '), wrong1 = f.length > 2 ? [f[0] * f[1], ...f.slice(2)].join(' × ') : (n / 2) + ' × 2', wrong2 = [...f.slice(0, -1), f[f.length - 1] + 1].join(' × ');
      const opts = [right, wrong1, wrong2].filter((v, i, a) => a.indexOf(v) === i); if (opts.length < 3) return MAKERS.prime9(box);
      const order = opts.map(o => [Math.random(), o]).sort().map(x => x[1]);
      Q(box, 'Which is the <strong>prime factorization</strong> of <strong>' + n + '</strong>?');
      return { choices: order, answer: order.indexOf(right), right: n + ' = ' + right + ', and every factor is prime.' }; },
    fracunl9(box) {
      const g = (a, b) => b ? g(b, a % b) : a; const pairs = [[2, 3], [2, 5], [3, 4], [4, 6], [2, 8], [3, 6], [5, 10], [4, 3], [6, 8]];
      const [d1, d2] = pick(pairs); const n1 = rnd(1, d1 - 1), n2 = rnd(1, d2 - 1), add = Math.random() < .6, L = d1 * d2 / g(d1, d2);
      const t1 = n1 * L / d1, t2 = n2 * L / d2, top = add ? t1 + t2 : t1 - t2; if (top <= 0) return MAKERS.fracunl9(box);
      const parse = v => { v = String(v).trim(); let m;
        if ((m = v.match(/^(\d+)\s+(\d+)\/(\d+)$/))) return Number(m[1]) + m[2] / m[3];
        if ((m = v.match(/^(\d+)\/(\d+)$/))) return m[1] / m[2]; return num(v); };
      const k = g(top, L), simple = top % L === 0 ? String(top / L) : top > L ? Math.floor(top / L) + ' ' + ((top % L) / g(top % L, L)) + '/' + (L / g(top % L, L)) : (top / k) + '/' + (L / k);
      Q(box, '<strong>' + n1 + '/' + d1 + ' ' + (add ? '+' : '−') + ' ' + n2 + '/' + d2 + '</strong> = ? <span class="hint">(type a fraction like 5/6 or a mixed number like 1 1/4)</span>');
      return { check: v => near(parse(v), top / L, 0.001), right: 'Common denominator ' + L + ': ' + t1 + '/' + L + (add ? ' + ' : ' − ') + t2 + '/' + L + ' = ' + top + '/' + L + (simple !== top + '/' + L ? ' = ' + simple : '') }; },

    /* ----- paycheques and time ----- */
    timeadd9(box) {
      const days = ['Mon', 'Tue', 'Wed', 'Thu']; const n = rnd(3, 4); const t = Array.from({ length: n }, () => [rnd(3, 8), pick([0, 15, 30, 45])]);
      const mins = t.reduce((a, x) => a + x[0] * 60 + x[1], 0), ans = mins / 60;
      Q(box, 'Time card: ' + t.map((x, i) => days[i] + ' <strong>' + x[0] + ' h ' + x[1] + ' min</strong>').join(', ') + '. How many hours in total? <span class="hint">(a decimal, like 19.5)</span>');
      return { check: v => near(num(v), ans, 0.01), right: 'Hours: ' + t.reduce((a, x) => a + x[0], 0) + ', minutes: ' + t.reduce((a, x) => a + x[1], 0) + ' → ' + Math.floor(mins / 60) + ' h ' + (mins % 60) + ' min = ' + ans }; },
    ot9(box) {
      const r = pick([15, 16, 17, 18, 20]), h = rnd(45, 52), reg = 44, ot = h - reg, ans = r * reg + r * 1.5 * ot;
      Q(box, 'You earn <strong>$' + r + ' an hour</strong> and work <strong>' + h + ' hours</strong> this week. Hours over 44 are overtime at <strong>1.5 ×</strong> your wage. What is your gross pay?');
      return { check: v => near(num(v), ans, 0.011), right: '44 × $' + r + ' = $' + (r * reg) + ', plus ' + ot + ' × $' + money(r * 1.5) + ' = $' + money(r * 1.5 * ot) + '. Total: $' + money(ans) }; },
    net9(box) {
      const gross = pick([612.5, 840, 1125, 486, 960.75]), cpp = Math.round(gross * pick([5, 6]) ) / 100, ei = Math.round(gross * 1.6) / 100, tax = Math.round(gross * pick([8, 10, 12])) / 100;
      const ans = Math.round((gross - cpp - ei - tax) * 100) / 100;
      Q(box, 'Gross pay <strong>$' + money(gross) + '</strong>. Deductions: CPP <strong>$' + money(cpp) + '</strong>, EI <strong>$' + money(ei) + '</strong>, income tax <strong>$' + money(tax) + '</strong>. What is your net pay?');
      return { check: v => near(num(v), ans, 0.011), right: money(gross) + ' − ' + money(cpp) + ' − ' + money(ei) + ' − ' + money(tax) + ' = $' + money(ans) }; },

    /* ----- patterns and equations ----- */
    eq9(box) {
      const x = rnd(2, 15), a = rnd(2, 9), b = rnd(1, 30), minus = Math.random() < .35, c = minus ? a * x - b : a * x + b;
      if (minus && c <= 0) return MAKERS.eq9(box);
      Q(box, 'Solve for <strong>x</strong>: <span class="math">' + a + 'x ' + (minus ? '−' : '+') + ' ' + b + ' = ' + c + '</span>');
      return { check: v => near(num(String(v).replace(/x\s*=\s*/i, '')), x), right: (minus ? 'Add ' : 'Subtract ') + b + ' from both sides: ' + a + 'x = ' + (a * x) + '. Divide by ' + a + ': x = ' + x }; },
    expr9(box) {
      const f = pick([[4, 2.5, 'A taxi charges $4 plus $2.50 per km', 'km'], [25, 15, 'A plumber charges $25 to come out plus $15 per half hour', 'half hours'], [10, 3, 'A gym charges a $10 sign-up fee plus $3 per visit', 'visits'], [6, 1.75, 'Bowling costs $6 for shoes plus $1.75 per game', 'games']]);
      const n = rnd(3, 12), ans = Math.round((f[0] + f[1] * n) * 100) / 100;
      Q(box, f[2] + '. Cost = <span class="math">' + f[0] + ' + ' + f[1] + 'n</span>. What is the cost for <strong>' + n + ' ' + f[3] + '</strong>?');
      return { check: v => near(num(v), ans, 0.011), right: f[0] + ' + ' + f[1] + ' × ' + n + ' = $' + money(ans) }; },

    /* ----- perimeter, area and angles ----- */
    tri9(box) {
      const b = rnd(3, 20), h = rnd(2, 15);
      if (Math.random() < .5) { const ans = b * h / 2; Q(box, 'A triangle has a base of <strong>' + b + ' m</strong> and a height of <strong>' + h + ' m</strong>. What is its area?');
        return { check: v => near(num(v), ans), right: b + ' × ' + h + ' ÷ 2 = ' + ans + ' m²' }; }
      Q(box, 'A parallelogram has a base of <strong>' + b + ' cm</strong> and a height of <strong>' + h + ' cm</strong>. What is its area?');
      return { check: v => near(num(v), b * h), right: b + ' × ' + h + ' = ' + (b * h) + ' cm²' }; },
    angle9(box) {
      const a = pick([rnd(10, 85), 90, rnd(95, 175), 180]); const kind = a < 90 ? 0 : a === 90 ? 1 : a < 180 ? 2 : 3;
      Q(box, 'An angle measures <strong>' + a + '°</strong>. What kind of angle is it?');
      return { choices: ['Acute', 'Right', 'Obtuse', 'Straight'], answer: kind, right: ['Acute angles are less than 90°.', 'A right angle is exactly 90°.', 'Obtuse angles are between 90° and 180°.', 'A straight angle is exactly 180°.'][kind] }; },
    tri180(box) {
      const a = rnd(25, 80), b = rnd(25, 80), c = 180 - a - b; if (c < 10) return MAKERS.tri180(box);
      Q(box, 'Two angles of a triangle are <strong>' + a + '°</strong> and <strong>' + b + '°</strong>. What is the third angle?');
      return { check: v => near(num(String(v).replace('°', '')), c), right: 'Angles in a triangle add to 180°: 180 − ' + a + ' − ' + b + ' = ' + c + '°' }; },
    scale9(box) {
      if (Math.random() < .5) { const s = pick([2, 5, 10, 25, 50]), cm = pick([3, 4.5, 6, 7.5, 12]), ans = Math.round(s * cm * 100) / 100;
        Q(box, 'On a map, <strong>1 cm = ' + s + ' km</strong>. Two towns are <strong>' + cm + ' cm</strong> apart on the map. How far apart are they really?');
        return { check: v => near(num(v), ans), right: cm + ' × ' + s + ' = ' + ans + ' km' }; }
      const s = pick([50, 100, 200]), m = pick([4, 5, 6, 8, 3.5]), ans = m * 100 / s;
      Q(box, 'A floor plan uses the scale <strong>1 cm = ' + s + ' cm</strong>. A wall is <strong>' + m + ' m</strong> long. How long is it on the plan, in cm?');
      return { check: v => near(num(v), ans, 0.01), right: m + ' m = ' + (m * 100) + ' cm, and ' + (m * 100) + ' ÷ ' + s + ' = ' + ans + ' cm' }; },

    /* ----- circles and 3-D objects ----- */
    vol9(box) {
      if (Math.random() < .5) { const l = rnd(2, 12), w = rnd(2, 10), h = rnd(2, 10); Q(box, 'A rectangular planter is <strong>' + l + ' dm × ' + w + ' dm × ' + h + ' dm</strong>. How many litres of soil fill it? <span class="hint">(1 dm³ = 1 L)</span>');
        return { check: v => near(num(v), l * w * h), right: l + ' × ' + w + ' × ' + h + ' = ' + (l * w * h) + ' L' }; }
      const r = rnd(3, 10), h = rnd(5, 20), ans = Math.round(3.14 * r * r * h * 100) / 100;
      Q(box, 'A can (cylinder) has a radius of <strong>' + r + ' cm</strong> and a height of <strong>' + h + ' cm</strong>. What is its volume? <span class="hint">(V ≈ 3.14 × r × r × h)</span>');
      return { check: v => near(num(v), ans, Math.max(1, ans * 0.01)), right: '3.14 × ' + r + ' × ' + r + ' × ' + h + ' ≈ ' + ans + ' cm³' }; },
    sa9(box) {
      const l = rnd(2, 12), w = rnd(2, 10), h = rnd(2, 10), ans = 2 * (l * w + l * h + w * h);
      Q(box, 'How much wrapping paper covers a box <strong>' + l + ' cm × ' + w + ' cm × ' + h + ' cm</strong> with no overlap? <span class="hint">(surface area: add all 6 faces)</span>');
      return { check: v => near(num(v), ans), right: '2 × (' + l + '×' + w + ' + ' + l + '×' + h + ' + ' + w + '×' + h + ') = 2 × ' + (l * w + l * h + w * h) + ' = ' + ans + ' cm²' }; },

    /* ----- data and graphing ----- */
    stat9(box) {
      const n = pick([5, 7]); const xs = Array.from({ length: n }, () => rnd(2, 40)); const s = [...xs].sort((a, b) => a - b);
      const t = pick(['range', 'median']); const ans = t === 'range' ? s[n - 1] - s[0] : s[(n - 1) / 2];
      Q(box, 'Points scored in ' + n + ' games: <strong>' + xs.join(', ') + '</strong>. What is the <strong>' + t + '</strong>?');
      return { check: v => near(num(v), ans), right: 'In order: ' + s.join(', ') + '. ' + (t === 'range' ? 'Range: ' + s[n - 1] + ' − ' + s[0] + ' = ' + ans : 'The middle number is the median = ' + ans) }; },
    graph9(box) {
      const c = pick([['How your height changed from age 5 to 14', 2], ['Favourite pizza toppings in the class', 0], ['How a $40 budget is split between food, fun and savings', 1], ['The number of students who walk, bus or drive to school', 0], ['The temperature every hour during one day', 2], ['What percent of your day you spend sleeping, at school and other', 1]]);
      Q(box, 'Which graph fits best? <strong>' + c[0] + '</strong>');
      return { choices: ['Bar graph', 'Circle graph', 'Broken-line graph'], answer: c[1], right: ['Bar graphs compare separate categories.', 'Circle graphs show parts of a whole.', 'Broken-line graphs show change over time.'][c[1]] }; },
    prob9(box) {
      const c = pick([['rolling a 6 on a die', 1, 6], ['flipping heads on a coin', 1, 2], ['rolling an even number on a die', 3, 6], ['pulling a red marble from a bag with 3 red and 7 blue', 3, 10], ['spinning blue on a spinner with 4 equal parts, 1 blue', 1, 4]]);
      const ans = Math.round(c[1] / c[2] * 100);
      Q(box, 'What is the probability of <strong>' + c[0] + '</strong>, as a percent? <span class="hint">(round to the whole number)</span>');
      return { check: v => near(num(v), ans, 0.6), right: c[1] + ' out of ' + c[2] + ' = ' + c[1] + ' ÷ ' + c[2] + ' ≈ ' + ans + '%' }; },

    /* ----- Grade 8 math: number sense ----- */
    placeval(box) {
      let n; do { n = rnd(100000, 999999); } while (String(n).split('').filter(d => d !== '0').length < 5);
      const s = String(n), pos = rnd(0, 4), d = s[pos]; if (d === '0') return MAKERS.placeval(box);
      const val = Number(d) * Math.pow(10, 5 - pos), names = ['hundred thousands', 'ten thousands', 'thousands', 'hundreds', 'tens', 'ones'];
      Q(box, 'What is the value of the digit <strong>' + d + '</strong> in <strong>' + n.toLocaleString('en-CA') + '</strong>?<br><span class="hint">(The ' + d + ' is in the ' + names[pos] + ' place.)</span>');
      return { check: v => near(num(v), val), right: d + ' is in the ' + names[pos] + ' place, so its value is ' + val.toLocaleString('en-CA') + '.' }; },
    round8(box) {
      const to = pick([10, 100, 1000]); const n = rnd(1000, 99999); const ans = Math.round(n / to) * to;
      Q(box, 'Round <strong>' + n.toLocaleString('en-CA') + '</strong> to the nearest <strong>' + to.toLocaleString('en-CA') + '</strong>.');
      return { check: v => near(num(v), ans), right: n.toLocaleString('en-CA') + ' rounds to ' + ans.toLocaleString('en-CA') + '. Look at the digit to the right of the ' + { 10: 'tens', 100: 'hundreds', 1000: 'thousands' }[to] + ' place: 5 or more rounds up.' }; },
    order8(box) {
      const base = rnd(20, 90) * 1000; const nums = [base + rnd(0, 999), base + rnd(0, 999), base - rnd(1, 999)].filter((v, i, a) => a.indexOf(v) === i);
      if (nums.length < 3) return MAKERS.order8(box);
      const big = Math.max(...nums); Q(box, 'Which number is the <strong>greatest</strong>?');
      return { choices: nums.map(x => x.toLocaleString('en-CA')), answer: nums.indexOf(big), right: big.toLocaleString('en-CA') + ' is greatest. Compare digits from left to right.' }; },

    /* ----- integers and temperature ----- */
    temp8(box) {
      const start = rnd(-20, 10), ch = rnd(3, 15), rise = Math.random() < .5, end = rise ? start + ch : start - ch;
      Q(box, 'It is <strong>' + start + '°C</strong> in the morning. The temperature ' + (rise ? 'rises' : 'drops') + ' <strong>' + ch + '°</strong>. What is the new temperature?');
      return { check: v => near(num(String(v).replace('−', '-').replace('°', '').replace(/c/i, '')), end), right: start + (rise ? ' + ' : ' − ') + ch + ' = ' + end + '°C' }; },
    tempdiff8(box) {
      const a = rnd(-25, -1), b = rnd(1, 20), ans = b - a;
      Q(box, 'Last night it was <strong>' + a + '°C</strong>. This afternoon it is <strong>' + b + '°C</strong>. How many degrees warmer is it?');
      return { check: v => near(num(v), ans), right: 'From ' + a + ' up to 0 is ' + (-a) + '°, then 0 up to ' + b + ' is ' + b + '°. ' + (-a) + ' + ' + b + ' = ' + ans + '°' }; },

    /* ----- decimals and money ----- */
    change8(box) {
      const price = rnd(105, 4699) / 100; const paid = [5, 10, 20, 50, 100].find(x => x > price + 0.01);
      const ans = Math.round((paid - price) * 100) / 100;
      Q(box, 'A customer buys something for <strong>$' + price.toFixed(2) + '</strong> and pays with a <strong>$' + paid + ' bill</strong>. How much change do they get?');
      return { check: v => near(num(v), ans), right: '$' + paid + '.00 − $' + price.toFixed(2) + ' = $' + ans.toFixed(2) + '. Count up from $' + price.toFixed(2) + ' to $' + paid + '.' }; },
    money8(box) {
      if (Math.random() < .5) { const k = rnd(2, 6), p = pick([1.25, 2.5, 3.75, 0.99, 4.5, 6.25]), ans = Math.round(k * p * 100) / 100;
        Q(box, 'You buy <strong>' + k + '</strong> items at <strong>$' + p.toFixed(2) + '</strong> each. What is the total?');
        return { check: v => near(num(v), ans), right: k + ' × $' + p.toFixed(2) + ' = $' + ans.toFixed(2) }; }
      const people = pick([2, 3, 4, 5]), bill = pick([24, 36, 45, 60, 72, 50]), ans = Math.round(bill / people * 100) / 100;
      Q(box, '<strong>' + people + '</strong> friends split a <strong>$' + bill + '</strong> pizza order equally. How much does each person pay?');
      return { check: v => near(num(v), ans, 0.011), right: '$' + bill + ' ÷ ' + people + ' = $' + ans.toFixed(2) }; },
    dec8(box) {
      const pairs = [[0.5, 0.45], [0.3, 0.25], [0.09, 0.1], [1.2, 1.15], [0.75, 0.8], [2.05, 2.5], [0.6, 0.58]];
      const [a, b] = pick(pairs); const big = Math.max(a, b);
      Q(box, 'Which decimal is <strong>greater</strong>?');
      return { choices: [String(a), String(b)], answer: a > b ? 0 : 1, right: big + ' is greater. Line up the decimal points and compare tenths, then hundredths (' + a.toFixed(2) + ' vs ' + b.toFixed(2) + ').' }; },

    /* ----- factors and fractions ----- */
    factor8(box) {
      if (Math.random() < .5) { const n = rnd(2, 99), isP = n > 1 && [...Array(n).keys()].slice(2).every(d => n % d);
        const f = [...Array(n + 1).keys()].slice(1).filter(d => n % d === 0);
        Q(box, 'Is <strong>' + n + '</strong> prime or composite?');
        return { choices: ['Prime', 'Composite'], answer: isP ? 0 : 1, right: n + ' has the factors ' + f.join(', ') + (isP ? ' only, so it is prime.' : ', so it is composite.') }; }
      const a = rnd(2, 9), b = rnd(3, 12) * (Math.random() < .6 ? a : 1) + (Math.random() < .3 ? 1 : 0); const yes = b % a === 0;
      Q(box, 'Is <strong>' + a + '</strong> a factor of <strong>' + b + '</strong>?');
      return { choices: ['Yes', 'No'], answer: yes ? 0 : 1, right: yes ? b + ' ÷ ' + a + ' = ' + (b / a) + ' with no remainder, so yes.' : b + ' ÷ ' + a + ' has a remainder, so no.' }; },
    multiple8(box) {
      const a = rnd(3, 12), k = rnd(4, 12); Q(box, 'What is the <strong>' + k + 'th multiple</strong> of <strong>' + a + '</strong>? <span class="hint">(Count by ' + a + 's)</span>');
      return { check: v => near(num(v), a * k), right: a + ' × ' + k + ' = ' + (a * k) }; },
    fracadd8(box) {
      const d = pick([4, 5, 6, 8, 10, 12]); let x = rnd(1, d - 1), y = rnd(1, d - 1); const add = Math.random() < .6;
      if (!add && y > x) [x, y] = [y, x]; if (!add && x === y) return MAKERS.fracadd8(box);
      const top = add ? x + y : x - y;
      const parse = v => { v = String(v).trim(); let m;
        if ((m = v.match(/^(\d+)\s+(\d+)\/(\d+)$/))) return Number(m[1]) + m[2] / m[3];
        if ((m = v.match(/^(\d+)\/(\d+)$/))) return m[1] / m[2]; return num(v); };
      const g = (a, b) => b ? g(b, a % b) : a; const k = g(top, d);
      const nice = top % d === 0 ? String(top / d) : top > d ? Math.floor(top / d) + ' ' + (top % d) / g(top % d, d) + '/' + d / g(top % d, d) : (top / k) + '/' + (d / k);
      Q(box, '<strong>' + x + '/' + d + ' ' + (add ? '+' : '−') + ' ' + y + '/' + d + '</strong> = ? <span class="hint">(type a fraction like 3/8 or a mixed number like 1 1/4)</span>');
      return { check: v => near(parse(v), top / d, 0.001), right: 'Same denominator, so ' + (add ? 'add' : 'subtract') + ' the tops: ' + x + (add ? ' + ' : ' − ') + y + ' = ' + top + '. ' + top + '/' + d + (nice !== top + '/' + d ? ' = ' + nice : '') }; },
    fraccomp8(box) {
      const d = pick([4, 5, 6, 8, 10]); let a = rnd(1, d - 1), b = rnd(1, d - 1); if (a === b) return MAKERS.fraccomp8(box);
      if (Math.random() < .5) { const n = rnd(1, 3), d1 = rnd(n + 1, 9), d2 = rnd(n + 1, 9); if (d1 === d2) return MAKERS.fraccomp8(box);
        Q(box, 'Which fraction is <strong>greater</strong>?');
        return { choices: [n + '/' + d1, n + '/' + d2], answer: d1 < d2 ? 0 : 1, right: 'Same top number: the smaller bottom number means bigger pieces, so ' + n + '/' + Math.min(d1, d2) + ' is greater.' }; }
      Q(box, 'Which fraction is <strong>greater</strong>?');
      return { choices: [a + '/' + d, b + '/' + d], answer: a > b ? 0 : 1, right: 'Same denominator: more pieces is bigger, so ' + Math.max(a, b) + '/' + d + ' is greater.' }; },

    /* ----- time and wages ----- */
    clock8(box) {
      const h = rnd(0, 23), m = pick([0, 5, 15, 20, 30, 45, 50]); const mm = String(m).padStart(2, '0');
      const t24 = String(h).padStart(2, '0') + ':' + mm, h12 = h % 12 || 12, ap = h < 12 ? 'a.m.' : 'p.m.', t12 = h12 + ':' + mm + ' ' + ap;
      const wrongH = [(h + 12) % 24, (h + 2) % 24];
      if (Math.random() < .5) { const opts = [t12, ...wrongH.map(w => (w % 12 || 12) + ':' + mm + ' ' + (w < 12 ? 'a.m.' : 'p.m.'))].filter((v, i, a) => a.indexOf(v) === i);
        const order = opts.map((o, i) => [Math.random(), o]).sort().map(x => x[1]);
        Q(box, 'What is <strong>' + t24 + '</strong> on a 12-hour clock?');
        return { choices: order, answer: order.indexOf(t12), right: t24 + ' = ' + t12 + (h >= 13 ? ' (' + h + ' − 12 = ' + h12 + ')' : '') }; }
      const opts = [t24, ...wrongH.map(w => String(w).padStart(2, '0') + ':' + mm)].filter((v, i, a) => a.indexOf(v) === i);
      const order = opts.map(o => [Math.random(), o]).sort().map(x => x[1]);
      Q(box, 'What is <strong>' + t12 + '</strong> on a 24-hour clock?');
      return { choices: order, answer: order.indexOf(t24), right: t12 + ' = ' + t24 + (h >= 13 ? ' (' + h12 + ' + 12 = ' + h + ')' : '') }; },
    hm8(box) {
      const t = rnd(0, 2);
      if (t === 0) { const h = pick([1.5, 2, 2.5, 3, 4, 0.75, 0.25]); Q(box, 'How many <strong>minutes</strong> are in <strong>' + h + ' hours</strong>?');
        return { check: v => near(num(v), h * 60), right: h + ' × 60 = ' + (h * 60) + ' minutes' }; }
      if (t === 1) { const m = pick([2, 3, 5, 10, 1.5]); Q(box, 'How many <strong>seconds</strong> are in <strong>' + m + ' minutes</strong>?');
        return { check: v => near(num(v), m * 60), right: m + ' × 60 = ' + (m * 60) + ' seconds' }; }
      const m = pick([90, 150, 75, 200, 135, 45]); Q(box, '<strong>' + m + ' minutes</strong> is how many <strong>hours</strong>? <span class="hint">(a decimal, like 1.5)</span>');
      return { check: v => near(num(v), m / 60, 0.02), right: m + ' ÷ 60 = ' + (Math.round(m / 60 * 100) / 100) + ' hours (' + Math.floor(m / 60) + ' h ' + (m % 60) + ' min)' }; },
    elapsed8(box) {
      const sh = rnd(7, 11), sm = pick([0, 15, 30, 45]), len = pick([120, 150, 195, 240, 270, 330, 375, 420]);
      const end = sh * 60 + sm + len, eh = Math.floor(end / 60), em = end % 60;
      const f = (h, m) => (h % 12 || 12) + ':' + String(m).padStart(2, '0') + (h < 12 ? ' a.m.' : ' p.m.');
      const ans = len / 60;
      Q(box, 'A shift starts at <strong>' + f(sh, sm) + '</strong> and ends at <strong>' + f(eh, em) + '</strong>. How many <strong>hours</strong> long is it? <span class="hint">(use a decimal, like 4.5)</span>');
      return { check: v => near(num(v), ans, 0.01), right: Math.floor(len / 60) + ' h ' + (len % 60) + ' min = ' + ans + ' hours' }; },
    wage8(box) {
      const r = pick([15, 15.5, 16, 16.75, 17, 18.5]), h = pick([4, 6.5, 7.5, 8, 12.25, 15.5, 20]); const ans = Math.round(r * h * 100) / 100;
      Q(box, 'You work <strong>' + h + ' hours</strong> at <strong>$' + r.toFixed(2) + ' an hour</strong>. How much do you earn?');
      return { check: v => near(num(v), ans, 0.011), right: h + ' × $' + r.toFixed(2) + ' = $' + ans.toFixed(2) }; },

    /* ----- patterns and equations ----- */
    pattern8(box) {
      const a = rnd(1, 20), d = pick([2, 3, 4, 5, 6, 10, -2, -3]); const seq = [0, 1, 2, 3, 4].map(i => a + d * i);
      if (seq.some(x => x < 0)) return MAKERS.pattern8(box);
      if (Math.random() < .6) { Q(box, 'What comes next? <strong>' + seq.slice(0, 4).join(', ') + ', …</strong>');
        return { check: v => near(num(v), seq[4]), right: 'The rule is "start at ' + a + ', ' + (d > 0 ? 'add ' + d : 'subtract ' + (-d)) + '." Next: ' + seq[4] }; }
      const n = pick([8, 10, 12]); const ans = a + d * (n - 1); if (ans < 0) return MAKERS.pattern8(box);
      Q(box, 'The pattern is <strong>' + seq.slice(0, 4).join(', ') + ', …</strong> What is the <strong>' + n + 'th</strong> number?');
      return { check: v => near(num(v), ans), right: 'Start at ' + a + ' and ' + (d > 0 ? 'add ' + d : 'subtract ' + (-d)) + ' ' + (n - 1) + ' times: ' + a + (d > 0 ? ' + ' : ' − ') + Math.abs(d) + ' × ' + (n - 1) + ' = ' + ans }; },
    eq8(box) {
      const x = rnd(2, 15), a = rnd(2, 12), t = rnd(0, 3);
      const forms = [['x + ' + a + ' = ' + (x + a), 'Subtract ' + a + ' from both sides'], [(x + a) + ' − x = ' + a, 'What do you take away from ' + (x + a) + ' to get ' + a + '?'],
        [a + 'x = ' + (a * x), 'Divide both sides by ' + a], ['x − ' + a + ' = ' + x, 'Add ' + a + ' to both sides']];
      const ans = t === 3 ? x + a : x; const [eq, how] = forms[t];
      Q(box, 'Solve for <strong>x</strong>: <span class="math">' + eq + '</span>');
      return { check: v => near(num(String(v).replace(/x\s*=\s*/i, '')), ans), right: how + ': x = ' + ans }; },

    /* ----- measurement ----- */
    perim8(box) {
      if (Math.random() < .5) { const l = rnd(3, 20), w = rnd(2, 12), ans = 2 * (l + w);
        Q(box, 'A rectangular garden is <strong>' + l + ' m</strong> long and <strong>' + w + ' m</strong> wide. How much fencing goes around it?');
        return { check: v => near(num(v), ans), right: l + ' + ' + w + ' + ' + l + ' + ' + w + ' = ' + ans + ' m' }; }
      const s = [rnd(3, 12), rnd(3, 12), rnd(3, 12)].sort((p, q) => p - q); if (s[0] + s[1] <= s[2]) return MAKERS.perim8(box);
      Q(box, 'A triangle has sides <strong>' + s.join(' cm, ') + ' cm</strong>. What is its perimeter?');
      return { check: v => near(num(v), s[0] + s[1] + s[2]), right: s.join(' + ') + ' = ' + (s[0] + s[1] + s[2]) + ' cm' }; },
    area8(box) {
      if (Math.random() < .5) { const l = rnd(3, 15), w = rnd(2, 10);
        Q(box, 'A rug is <strong>' + l + ' m</strong> by <strong>' + w + ' m</strong>. What is its area in m²?');
        return { check: v => near(num(v), l * w), right: l + ' × ' + w + ' = ' + (l * w) + ' m²' }; }
      const a = rnd(4, 10), b = rnd(3, 6), c = rnd(2, 6), d = rnd(2, 5), ans = a * b + c * d;
      Q(box, 'An L-shaped room is made of two rectangles: <strong>' + a + ' m × ' + b + ' m</strong> and <strong>' + c + ' m × ' + d + ' m</strong>. What is the total area?');
      return { check: v => near(num(v), ans), right: a + ' × ' + b + ' = ' + (a * b) + ', ' + c + ' × ' + d + ' = ' + (c * d) + '. Total: ' + ans + ' m²' }; },
    circ8(box) {
      if (Math.random() < .35) { const r = rnd(2, 30); Q(box, 'A circle has a radius of <strong>' + r + ' cm</strong>. What is its diameter?');
        return { check: v => near(num(v), 2 * r), right: 'diameter = 2 × radius = 2 × ' + r + ' = ' + (2 * r) + ' cm' }; }
      const d = pick([10, 20, 30, 50, 66, 4, 12]); const ans = Math.round(3.14 * d * 100) / 100;
      Q(box, 'A bike wheel has a diameter of <strong>' + d + ' cm</strong>. About how far does it roll in one turn? <span class="hint">(circumference ≈ 3.14 × diameter)</span>');
      return { check: v => near(num(v), ans, Math.max(0.5, ans * 0.01)), right: '3.14 × ' + d + ' ≈ ' + ans + ' cm' }; },
    vol8(box) {
      const l = rnd(2, 12), w = rnd(2, 10), h = rnd(2, 10), v = l * w * h;
      Q(box, 'A box is <strong>' + l + ' cm × ' + w + ' cm × ' + h + ' cm</strong>. How many <strong>mL</strong> of water would fill it?');
      return { check: x => near(num(x), v), right: l + ' × ' + w + ' × ' + h + ' = ' + v + ' cm³, and 1 cm³ = 1 mL, so ' + v + ' mL' }; },
    conv8(box) {
      const c = pick([['km', 'm', 1000, [2, 3.5, 0.8, 12]], ['m', 'cm', 100, [3, 1.75, 0.4, 12]], ['cm', 'mm', 10, [4, 12.5, 30]], ['kg', 'g', 1000, [2, 0.5, 1.25, 4]],
        ['L', 'mL', 1000, [2, 0.25, 1.5, 4]], ['g', 'kg', 0.001, [500, 1500, 2500, 750]], ['mL', 'L', 0.001, [750, 2000, 250, 1500]], ['m', 'km', 0.001, [3000, 500, 1200]]]);
      const [from, to, f, vals] = c; const x = pick(vals), ans = Math.round(x * f * 1000) / 1000;
      Q(box, 'Convert <strong>' + x + ' ' + from + '</strong> to <strong>' + to + '</strong>.');
      return { check: v => near(num(v), ans, 0.001), right: x + ' ' + from + (f >= 1 ? ' × ' + f : ' ÷ ' + Math.round(1 / f)) + ' = ' + ans + ' ' + to }; },
    imp8(box) {
      const c = pick([['in', 'cm', 2.54, [2, 5, 10, 12]], ['kg', 'lb', 2.2, [5, 10, 20, 50]], ['ft', 'cm', 30.48, [1, 2, 6]], ['mi', 'km', 1.6, [5, 10, 25]]]);
      const [from, to, f, vals] = c; const x = pick(vals), ans = Math.round(x * f * 100) / 100;
      Q(box, 'Use the chart: <strong>1 ' + from + ' ≈ ' + f + ' ' + to + '</strong>. About how many <strong>' + to + '</strong> are in <strong>' + x + ' ' + from + '</strong>?');
      return { check: v => near(num(v), ans, Math.max(0.05, ans * 0.01)), right: x + ' × ' + f + ' ≈ ' + ans + ' ' + to }; },

    /* ----- science: machines and electricity ----- */
    ma8(box) {
      const effort = pick([10, 20, 25, 40, 50, 100]), k = pick([2, 3, 4, 5, 6]), load = effort * k;
      Q(box, 'A lever lifts a <strong>' + load + ' N</strong> load when you push with <strong>' + effort + ' N</strong> of force. What is the mechanical advantage?');
      return { check: v => near(num(v), k), right: 'MA = load ÷ effort = ' + load + ' ÷ ' + effort + ' = ' + k + '. The machine multiplies your force ' + k + ' times.' }; },
    work8(box) {
      const f = pick([20, 50, 80, 120, 200, 15]), d = pick([2, 3, 1.5, 5, 10, 0.5]), w = Math.round(f * d * 100) / 100;
      Q(box, 'You push a cart with a force of <strong>' + f + ' N</strong> for <strong>' + d + ' m</strong>. How much work do you do, in joules?');
      return { check: v => near(num(v), w), right: 'Work = force × distance = ' + f + ' × ' + d + ' = ' + w + ' J' }; },
    ohm9(box) {
      const t = rnd(0, 2), I = pick([0.5, 1, 2, 3, 4, 5]), R = pick([2, 3, 4, 6, 10, 12, 24]), V = I * R;
      if (t === 0) { Q(box, 'A circuit has a current of <strong>' + I + ' A</strong> and a resistance of <strong>' + R + ' Ω</strong>. What is the voltage? <span class="hint">(V = I × R)</span>');
        return { check: v => near(num(v), V), right: 'V = I × R = ' + I + ' × ' + R + ' = ' + V + ' V' }; }
      if (t === 1) { Q(box, 'A <strong>' + V + ' V</strong> battery pushes current through a <strong>' + R + ' Ω</strong> resistor. What is the current? <span class="hint">(I = V ÷ R)</span>');
        return { check: v => near(num(v), I), right: 'I = V ÷ R = ' + V + ' ÷ ' + R + ' = ' + I + ' A' }; }
      Q(box, 'A <strong>' + V + ' V</strong> battery makes <strong>' + I + ' A</strong> of current. What is the resistance? <span class="hint">(R = V ÷ I)</span>');
      return { check: v => near(num(v), R), right: 'R = V ÷ I = ' + V + ' ÷ ' + I + ' = ' + R + ' Ω' }; },
    ecost9(box) {
      const dev = pick([['a 1,500 W space heater', 1500], ['a 100 W TV', 100], ['a 60 W light bulb', 60], ['a 10 W LED bulb', 10], ['a 1,200 W microwave', 1200], ['a 300 W gaming computer', 300]]);
      const h = pick([2, 4, 5, 8, 10, 20]), price = pick([0.12, 0.15, 0.2]), kwh = dev[1] * h / 1000, cost = Math.round(kwh * price * 100) / 100;
      Q(box, 'You run <strong>' + dev[0] + '</strong> for <strong>' + h + ' hours</strong>. Electricity costs <strong>$' + price.toFixed(2) + ' per kWh</strong>. What does it cost? <span class="hint">(kWh = watts × hours ÷ 1,000)</span>');
      return { check: v => near(num(v), cost, 0.011), right: dev[1] + ' × ' + h + ' ÷ 1,000 = ' + kwh + ' kWh. Cost: ' + kwh + ' × $' + price.toFixed(2) + ' = $' + cost.toFixed(2) }; },

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

  // Makers can return { choices: [...], answer: index, right } to show answer buttons instead of a box.
  function drawChoices(box, cur) {
    const opts = box.querySelector('[data-role=opts]'); if (!opts || !cur.choices) return;
    opts.innerHTML = cur.choices.map((c, i) => `<button type="button" data-i="${i}">${c}</button>`).join('');
    opts.querySelectorAll('button').forEach(b => b.addEventListener('click', () => {
      const ok = Number(b.dataset.i) === cur.answer; b.classList.add(ok ? 'right' : 'wrong');
      if (ok) { opts.querySelectorAll('button').forEach(x => x.disabled = true); say(box, true, '✓ Yes! ' + cur.right); }
      else say(box, false, 'Not quite. Try another answer.');
    }));
  }
  document.querySelectorAll('.try').forEach(box => {
    const type = box.dataset.try; if (!MAKERS[type]) return;
    let cur = MAKERS[type](box), tries = 0;
    drawChoices(box, cur);
    const input = box.querySelector('input');
    const fresh = () => { cur = MAKERS[type](box); tries = 0; if (input) input.value = ''; box.querySelector('.fb').textContent = ''; drawChoices(box, cur); };
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
    e.preventDefault();
    const v = a.getAttribute('data-print-cheat'); const sheet = document.getElementById(v ? 'cheat-' + v : 'cheat');
    if (!sheet) return;
    sheet.classList.add('printme'); document.body.classList.add('printing'); window.print();
    setTimeout(() => { document.body.classList.remove('printing'); sheet.classList.remove('printme'); }, 500);
  }));

  /* ---------- probability simulator: <div class="sim" data-sim="coin|dice"> ---------- */
  document.querySelectorAll('.sim').forEach(box => {
    const dice = box.dataset.sim === 'dice', faces = dice ? ['1', '2', '3', '4', '5', '6'] : ['Heads', 'Tails'];
    let counts = faces.map(() => 0);
    box.insertAdjacentHTML('beforeend', `<div class="row" style="display:flex;gap:8px;flex-wrap:wrap">
      ${(dice ? [6, 30, 300] : [10, 50, 500]).map(n => `<button class="btn" data-n="${n}">${dice ? 'Roll' : 'Flip'} ${n}</button>`).join('')}
      <button class="btn ghost" data-n="0">Reset</button></div>
      <div class="bars">${faces.map(() => '<div class="bar"><b>0</b></div>').join('')}</div>
      <div class="labels">${faces.map(f => `<span>${f}</span>`).join('')}</div>
      <div class="fb ok" aria-live="polite"></div>`);
    const draw = () => {
      const total = counts.reduce((a, b) => a + b, 0), max = Math.max(1, ...counts);
      box.querySelectorAll('.bar').forEach((b, i) => { b.style.height = (counts[i] / max * 100) + '%'; b.querySelector('b').textContent = counts[i]; });
      box.querySelector('.fb').textContent = total ? total + (dice ? ' rolls' : ' flips') + ' so far. ' + faces.map((f, i) => f + ': ' + Math.round(counts[i] / total * 100) + '%').join(' · ') : '';
    };
    box.querySelectorAll('button[data-n]').forEach(b => b.addEventListener('click', () => {
      const n = Number(b.dataset.n); if (!n) counts = faces.map(() => 0);
      for (let i = 0; i < n; i++) counts[Math.floor(Math.random() * faces.length)]++;
      draw();
    }));
  });
})();
