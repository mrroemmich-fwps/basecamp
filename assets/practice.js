/* ============================================================
   8/9 Collab Basecamp: the Practice section on math pages.
   Five tools per unit, all built from the same questions:
     Practice set · Am I ready? · Real-world task · Flashcards · Worksheet
   Questions come from the lesson generators in subject.js (window.BC.MAKERS)
   or, for lessons without one, from the written banks in practice-mathN.js
   (window.PDATA). Three levels: 1 Base Camp, 2 Climb, 3 Summit.
   ============================================================ */
(function () {
  'use strict';
  const BC = window.BC, D = window.PDATA;
  if (!BC || !D) return;
  const $ = (s, el) => (el || document).querySelector(s), $$ = (s, el) => [...(el || document).querySelectorAll(s)];
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const LEVELS = [
    { n: 1, ic: '🥾', name: 'Base Camp', desc: 'Smaller numbers, a hint on every question, and a calculator is always OK.' },
    { n: 2, ic: '🌲', name: 'Climb', desc: 'Everyday numbers. A hint shows up after one wrong try.' },
    { n: 3, ic: '🏔️', name: 'Summit', desc: 'Bigger numbers and no hints. Show what you know.' }];
  if (D.numeric === false) {   // subjects without number generators: levels change hints and question difficulty
    LEVELS[0].desc = 'A hint on every question, with the more straightforward questions.';
    LEVELS[1].desc = 'A hint shows up after one wrong try.';
    LEVELS[2].desc = 'No hints, and the trickier questions. Show what you know.';
  }
  let level = Number(BC.store.get('bc-level')) || 2;

  /* ---------- random helpers (seedable, so worksheets can be printed again) ---------- */
  const hash = s => { let h = 2166136261; for (const c of String(s)) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); } return h >>> 0; };
  const mkRng = seed => { let s = seed >>> 0; return () => { s = s + 0x6D2B79F5 | 0; let t = Math.imul(s ^ s >>> 15, 1 | s); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; };
  const shuffle = (a, r) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

  /* ---------- what each lesson offers ---------- */
  function lessonsOf(sec) {
    return $$('details.lesson', sec).map(d => {
      const gens = $$('.try[data-try]', d).filter(b => b.dataset.try !== 'mc' && BC.MAKERS[b.dataset.try]).map(b => {
        const inp = $('input', b), pre = $('.row > span', b);
        return { type: b.dataset.try, pre: pre ? pre.textContent.trim() : '', text: !!inp && !inp.hasAttribute('inputmode') };
      });
      const meta = (D.lessons || {})[d.id] || {};
      // Written bank items, plus the lesson's own quick-check questions (reused automatically).
      const norm = it => Array.isArray(it) ? { q: it[0], o: it[1], a: it[2], why: it[3], lv: it[4] } : it;
      const bank = ((D.banks || {})[d.id] || []).map(norm);
      $$('.try[data-try=mc] script.qs', d).forEach(sc => { try { JSON.parse(sc.textContent).forEach(m => bank.push({ q: m.q, o: m.options, a: m.answer, why: m.why })); } catch (e) {} });
      let hint = meta.hint || '';
      if (!hint) { const bi = $('.big-idea', d); if (bi) { const t = BC.textOf(bi).replace(/\s+/g, ' ').trim(); hint = t.length > 190 ? t.slice(0, t.indexOf('. ', 80) > 0 ? t.indexOf('. ', 80) + 1 : 190) : t; } }
      return { id: d.id, el: d, title: ($('.ltitle strong', d) || {}).textContent || d.id, gens, bank, hint, calc: meta.calc !== false };
    }).filter(l => l.gens.length || l.bank.length);
  }

  /* ---------- one question, in a single shape ----------
     { html, kind: 'num' | 'choice', check(v), choices, answer, right, hint, calc, pre, neg, text, lesson } */
  function fromMaker(L, g) {
    const box = document.createElement('div');
    box.innerHTML = '<div data-role="q"></div><div class="grid100" data-role="grid"></div>';
    BC.level(qLevel); const cur = BC.MAKERS[g.type](box); BC.level(2);
    const grid = $('[data-role=grid]', box); if (!grid.children.length) grid.remove();
    const q = { type: g.type, html: box.innerHTML, right: cur.right, lesson: L, hint: L.hint, calc: L.calc, pre: g.pre, text: g.text, neg: BC.NEG.has(g.type) };
    if (cur.choices) Object.assign(q, { kind: 'choice', choices: cur.choices, answer: cur.answer });
    else if ('ok' in cur) Object.assign(q, { kind: 'choice', choices: ['Yes, it makes sense', 'No, it doesn\'t'], answer: cur.ok ? 0 : 1 });
    else Object.assign(q, { kind: 'num', check: cur.check });
    return q;
  }
  function fromBank(L, it, rng) {
    const q = { html: it.q, lesson: L, hint: it.hint || L.hint, calc: 'calc' in it ? it.calc : L.calc, pre: it.pre || '', neg: !!it.neg };
    if (it.o) {   // shuffle the choices so the right answer isn't always in the same spot
      const idx = it.keep ? it.o.map((_, i) => i) : shuffle(it.o.map((_, i) => i), rng || Math.random);
      return Object.assign(q, { kind: 'choice', choices: idx.map(i => it.o[i]), answer: idx.indexOf(it.a), right: it.why || it.o[it.a] });
    }
    const answers = [].concat(it.a), isNum = answers.every(a => typeof a === 'number');
    q.text = !isNum; q.ans = answers[0];
    q.check = v => isNum ? answers.some(a => BC.near(BC.num(v), a, it.tol || 0.006))
      : answers.some(a => String(v).trim().toLowerCase().replace(/\s+/g, ' ') === String(a).toLowerCase());
    q.right = (it.why ? it.why + ' ' : '') + 'Answer: ' + (it.pre || '') + answers[0] + (it.unit ? ' ' + it.unit : '');
    return Object.assign(q, { kind: 'num' });
  }
  let qLevel = 2;
  // Build n questions, cycling through the lessons. rng decides which generator or bank item.
  function buildSet(lessons, n, lv, rng) {
    qLevel = lv; const used = {}, out = [];
    for (let i = 0; out.length < n && i < n * 3; i++) {
      const L = lessons[i % lessons.length];
      const bankOK = L.bank.filter(it => !it.lv || (lv === 1 ? it.lv <= 2 : lv === 3 ? it.lv >= 2 : true));
      const useGen = L.gens.length && (!bankOK.length || rng() < .75);
      if (useGen) out.push(fromMaker(L, L.gens[Math.floor(rng() * L.gens.length)]));
      else if (bankOK.length) {
        used[L.id] = used[L.id] || shuffle(bankOK.map((_, k) => k), rng);
        if (!used[L.id].length) used[L.id] = shuffle(bankOK.map((_, k) => k), rng);
        out.push(fromBank(L, bankOK[used[L.id].pop()], rng));
      }
    }
    return out;
  }
  const calcBadge = (q, lv) => D.calcNotes === false ? '' : (lv === 1 || q.calc) ? '<span class="calc ok" title="You may use a calculator">🧮 Calculator OK</span>' : '<span class="calc no" title="Try it without a calculator">✏️ No calculator</span>';

  /* ---------- an interactive question card ---------- */
  function card(q, lv, opts) {
    const el = document.createElement('div'); el.className = 'pq';
    const showHint = lv === 1 && q.hint;
    el.innerHTML = `<div class="pq-top"><span class="from">${esc(q.lesson.title)}</span>${calcBadge(q, lv)}</div>
      <div class="q readq">${q.html}</div>
      ${showHint ? `<p class="hintbox">💡 ${q.hint}</p>` : ''}
      ${q.kind === 'choice' ? `<div class="opts">${q.choices.map((c, i) => `<button type="button" data-i="${i}">${c}</button>`).join('')}</div>`
        : `<div class="row">${q.pre ? `<span>${esc(q.pre)}</span>` : ''}<input aria-label="Your answer" ${q.text ? '' : 'inputmode="decimal"'} autocomplete="off">${q.neg ? '<button type="button" class="btn ghost pm">+/−</button>' : ''}${opts.noCheck ? '' : '<button class="btn" data-role="check">Check</button>'}</div>`}
      <div class="fb" aria-live="polite"></div>`;
    const sp = BC.spkBtn(); sp.addEventListener('click', () => BC.speak(BC.textOf($('.readq', el)) + (q.kind === 'choice' ? '. Choices: ' + q.choices.join('. ') : ''))); $('.pq-top', el).appendChild(sp);
    const fb = $('.fb', el), inp = $('input', el); let tries = 0, done = false;
    const pm = $('.pm', el); if (pm) pm.addEventListener('click', () => { const v = inp.value.trim(); inp.value = /^[-−]/.test(v) ? v.replace(/^[-−]/, '') : '-' + v; inp.focus(); });
    const finish = (ok) => { done = true; el.classList.add(ok ? 'got' : 'missed'); if (opts.onDone) opts.onDone(ok, tries); };
    const wrong = () => {
      tries++;
      if (tries >= 2) { fb.className = 'fb no'; fb.textContent = 'Here\'s how: ' + q.right; finish(false); }
      else { fb.className = 'fb no'; fb.innerHTML = 'Not quite. Try again.' + (lv === 2 && q.hint ? ' <span class="hintline">💡 ' + q.hint + '</span>' : ''); }
    };
    const right = () => { fb.className = 'fb ok'; fb.textContent = '✓ ' + (tries ? 'Got it! ' : 'Nice work! ') + q.right; finish(true); };
    if (!opts.noCheck) {
      if (q.kind === 'choice') $$('.opts button', el).forEach(b => b.addEventListener('click', () => {
        if (done) return; const ok = Number(b.dataset.i) === q.answer; b.classList.add(ok ? 'right' : 'wrong');
        if (ok) { $$('.opts button', el).forEach(x => x.disabled = true); right(); } else { b.disabled = true; wrong(); if (done) $$('.opts button', el).forEach(x => x.disabled = true); }
      }));
      else {
        const go = () => { if (done) return; if (!inp.value.trim()) { fb.className = 'fb no'; fb.textContent = 'Type an answer first.'; return; } q.check(inp.value) ? right() : wrong(); };
        $('[data-role=check]', el).addEventListener('click', go); inp.addEventListener('keydown', e => { if (e.key === 'Enter') go(); });
      }
    } else if (q.kind === 'choice') {   // test mode: pick one, no feedback yet
      $$('.opts button', el).forEach(b => b.addEventListener('click', () => { $$('.opts button', el).forEach(x => x.classList.remove('picked')); b.classList.add('picked'); el.dataset.pick = b.dataset.i; }));
    }
    return el;
  }

  /* ---------- 1. Practice set: 10 questions, one at a time ---------- */
  function practiceSet(panel, lessons) {
    const qs = buildSet(lessons, 10, level, Math.random); let i = 0, firstTry = 0, got = 0; const missed = new Set();
    panel.innerHTML = '<div class="pset"><div class="progress"><span></span></div><p class="count hint"></p><div class="slot"></div><div class="nav"></div></div>';
    const slot = $('.slot', panel), nav = $('.nav', panel);
    const show = () => {
      $('.count', panel).textContent = 'Question ' + (i + 1) + ' of ' + qs.length; $('.progress span', panel).style.width = (i / qs.length * 100) + '%';
      slot.innerHTML = ''; nav.innerHTML = '';
      slot.appendChild(card(qs[i], level, { onDone(ok, tries) {
        if (ok) { got++; if (!tries) firstTry++; } else missed.add(qs[i].lesson);
        nav.innerHTML = `<button class="btn gold">${i + 1 < qs.length ? 'Next question →' : 'See my results'}</button>`;
        $('button', nav).addEventListener('click', () => { i++; i < qs.length ? show() : results(); }); $('button', nav).focus();
      } }));
      const f = $('input, .opts button', slot); if (f && i) f.focus();
    };
    const results = () => {
      $('.progress span', panel).style.width = '100%'; $('.count', panel).textContent = 'Done!';
      slot.innerHTML = `<div class="result"><p class="big">${got} / ${qs.length}</p><p>${firstTry} right on the first try. ${got === qs.length ? '🏔️ You reached the summit!' : got >= 8 ? '🌲 Strong climb!' : '🥾 Keep at it. Every try builds the skill.'}</p>
        ${missed.size ? '<p><strong>Worth another look:</strong></p><ul>' + [...missed].map(L => `<li><a href="#${L.id}" data-open="${L.id}">${esc(L.title)}</a></li>`).join('') + '</ul>' : ''}</div>`;
      nav.innerHTML = '<button class="btn">New practice set</button>'; $('button', nav).addEventListener('click', () => practiceSet(panel, lessons));
      openLinks(slot);
    };
    show();
  }
  const openLinks = scope => $$('[data-open]', scope).forEach(a => a.addEventListener('click', () => { const d = document.getElementById(a.dataset.open); if (d) d.open = true; }));

  /* ---------- 2. Am I ready? 2 per lesson, scored at the end ---------- */
  function readyCheck(panel, lessons) {
    const qs = buildSet(lessons, lessons.length * 2, level, Math.random);
    panel.innerHTML = '<p class="hint">Answer them all, then check. No hints on this one: it shows what you can do on your own.</p><div class="rlist"></div><button class="btn gold" data-role="score">Check my answers</button><div class="rresult"></div>';
    const list = $('.rlist', panel), cards = qs.map((q, k) => { const c = card(q, level === 1 ? 2 : level, { noCheck: true }); c.querySelector('.pq-top').insertAdjacentHTML('afterbegin', `<b class="qn">${k + 1}.</b>`); $('.hintbox', c) && $('.hintbox', c).remove(); list.appendChild(c); return c; });
    $('[data-role=score]', panel).addEventListener('click', () => {
      let score = 0; const review = new Set();
      qs.forEach((q, k) => { const c = cards[k], fb = $('.fb', c);
        const ok = q.kind === 'choice' ? Number(c.dataset.pick) === q.answer && c.dataset.pick != null : !!$('input', c).value.trim() && q.check($('input', c).value);
        c.classList.remove('got', 'missed'); c.classList.add(ok ? 'got' : 'missed'); fb.className = 'fb ' + (ok ? 'ok' : 'no'); fb.textContent = (ok ? '✓ ' : '✗ ') + q.right;
        if (ok) score++; else review.add(q.lesson); });
      const pct = Math.round(score / qs.length * 100);
      $('.rresult', panel).innerHTML = `<div class="result"><p class="big">${score} / ${qs.length} (${pct}%)</p><p>${pct >= 80 ? '✅ You\'re ready for the unit check.' : pct >= 60 ? '🌲 Almost there. Review the lessons below and try again.' : '🥾 Let\'s get some more practice first. Start with these lessons:'}</p>
        ${review.size ? '<ul>' + [...review].map(L => `<li><a href="#${L.id}" data-open="${L.id}">${esc(L.title)}</a></li>`).join('') + '</ul>' : ''}<button class="btn" data-role="again">Try a new check</button></div>`;
      openLinks($('.rresult', panel)); $('[data-role=again]', panel).addEventListener('click', () => readyCheck(panel, lessons));
      $('.rresult', panel).scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

  /* ---------- 3. Real-world task: a multi-step problem ---------- */
  function realTask(panel, unit) {
    const t = (D.tasks || {})[unit]; if (!t) { panel.innerHTML = '<p class="hint">A real-world task for this unit is coming soon.</p>'; return; }
    panel.innerHTML = `<div class="task"><h4>🧭 ${t.title}</h4><div class="story readq">${t.story}</div><div class="parts"></div></div>`;
    const sp = BC.spkBtn(); sp.addEventListener('click', () => BC.speak(t.title + '. ' + BC.textOf($('.story', panel)))); $('.task h4', panel).appendChild(sp);
    const parts = $('.parts', panel);
    t.parts.forEach((p, k) => {
      const L = { title: 'Part ' + String.fromCharCode(65 + k), id: '' };
      if (p.model) { parts.appendChild(written(L, p)); return; }
      const q = fromBank(L, p.o ? { q: p.q, o: p.o, a: p.a, why: p.work, hint: p.hint } : { q: p.q, a: p.a, tol: p.tol, pre: p.pre, unit: p.unit, why: p.work, hint: p.hint, calc: p.calc !== false, neg: p.neg }, Math.random);
      if (!p.o) q.right = p.work + ' Answer: ' + (p.pre || '') + [].concat(p.a)[0] + (p.unit ? ' ' + p.unit : '');
      parts.appendChild(card(q, level, {}));
    });
  }

  // A written-response part: students write, then compare with a sample answer and a checklist.
  function written(L, p) {
    const el = document.createElement('div'); el.className = 'pq written';
    el.innerHTML = `<div class="pq-top"><span class="from">${esc(L.title)} · written answer</span></div><div class="q readq">${p.q}</div>
      ${level === 1 && p.hint ? `<p class="hintbox">💡 ${p.hint}</p>` : ''}
      <textarea rows="4" aria-label="Your answer"></textarea>
      <button class="btn ghost" data-role="model">Compare with a sample answer</button>
      <div class="model" hidden><p><strong>Sample answer:</strong> ${p.model}</p>${p.look ? '<p><strong>Check that yours has:</strong></p><ul>' + p.look.map(x => `<li>${x}</li>`).join('') + '</ul>' : ''}</div>`;
    const sp = BC.spkBtn(); sp.addEventListener('click', () => BC.speak(BC.textOf($('.readq', el)))); $('.pq-top', el).appendChild(sp);
    $('[data-role=model]', el).addEventListener('click', e => { const m = $('.model', el); m.hidden = !m.hidden; e.target.textContent = m.hidden ? 'Compare with a sample answer' : 'Hide the sample answer'; });
    return el;
  }

  /* ---------- 4. Flashcards ---------- */
  function flashcards(panel, unit) {
    let cards = ((D.vocab || {})[unit] || []).slice(), i = 0, flipped = false;
    if (!cards.length) { panel.innerHTML = '<p class="hint">Flashcards for this unit are coming soon.</p>'; return; }
    panel.innerHTML = `<div class="flash"><button type="button" class="fcard" aria-live="polite"></button>
      <div class="fnav"><button class="btn ghost" data-d="-1">← Back</button><span class="hint fcount"></span><button class="btn ghost" data-d="1">Next →</button></div>
      <div class="fnav"><button class="btn ghost" data-role="shuffle">🔀 Shuffle</button><button class="btn ghost" data-role="flipall">Start with meanings</button></div>
      <p class="hint">Tap the card to flip it.</p></div>`;
    let defFirst = false;
    const fc = $('.fcard', panel);
    const draw = () => { const [term, def] = cards[i]; const front = defFirst ? def : term, back = defFirst ? term : def;
      fc.innerHTML = flipped ? `<span class="side">${defFirst ? 'Word' : 'Meaning'}</span><span class="fdef">${back}</span>` : `<span class="side">${defFirst ? 'Meaning' : 'Word'}</span><span class="${defFirst ? 'fdef' : 'fterm'}">${front}</span>`;
      fc.classList.toggle('back', flipped); $('.fcount', panel).textContent = (i + 1) + ' of ' + cards.length;
      const sp = BC.spkBtn(); sp.addEventListener('click', e => { e.stopPropagation(); BC.speak(BC.textOf($('.fterm, .fdef', fc))); }); fc.appendChild(sp); };
    fc.addEventListener('click', () => { flipped = !flipped; draw(); });
    $$('[data-d]', panel).forEach(b => b.addEventListener('click', () => { i = (i + Number(b.dataset.d) + cards.length) % cards.length; flipped = false; draw(); }));
    $('[data-role=shuffle]', panel).addEventListener('click', () => { cards = shuffle(cards, Math.random); i = 0; flipped = false; draw(); });
    $('[data-role=flipall]', panel).addEventListener('click', e => { defFirst = !defFirst; e.target.textContent = defFirst ? 'Start with words' : 'Start with meanings'; flipped = false; draw(); });
    draw();
  }

  /* ---------- 5. Worksheet maker (printable, versions A–D, answer key for teachers) ---------- */
  function worksheet(panel, lessons, unit, unitTitle) {
    panel.innerHTML = `<div class="wsform">
      <fieldset><legend>Lessons</legend>${lessons.map(L => `<label class="chk"><input type="checkbox" value="${L.id}" checked> ${esc(L.title)}</label>`).join('')}</fieldset>
      <div class="wsrow">
        <label>Questions <select data-k="n"><option>6</option><option selected>10</option><option>15</option><option>20</option></select></label>
        <label>Level <select data-k="lv">${LEVELS.map(l => `<option value="${l.n}" ${l.n === level ? 'selected' : ''}>${l.ic} ${l.name}</option>`).join('')}</select></label>
        <label>Version <select data-k="ver"><option>A</option><option>B</option><option>C</option><option>D</option><option value="R">New mix</option></select></label>
        ${BC.PREVIEW ? '<label class="chk"><input type="checkbox" data-k="key" checked> Answer key</label>' : ''}
      </div>
      <div class="wsrow"><button class="btn" data-role="prev">Preview</button><button class="btn gold" data-role="print">🖨️ Print</button></div>
      <p class="hint">Versions A, B, C and D always come out the same, so you can print the same sheet again or give neighbours different versions.</p>
      </div><div class="wsprev"></div>`;
    const make = () => {
      const pickL = $$('.wsform input[type=checkbox][value]', panel).filter(c => c.checked).map(c => lessons.find(L => L.id === c.value));
      if (!pickL.length) return null;
      const n = Number($('[data-k=n]', panel).value), lv = Number($('[data-k=lv]', panel).value);
      let ver = $('[data-k=ver]', panel).value; if (ver === 'R') ver = String(1000 + Math.floor(Math.random() * 9000));
      const seed = hash([D.course, unit, pickL.map(L => L.id).join(','), n, lv, ver].join('|'));
      BC.seed(seed); const qs = buildSet(pickL, n, lv, mkRng(seed)); BC.unseed();
      return { qs, lv, ver, key: BC.PREVIEW && $('[data-k=key]', panel) && $('[data-k=key]', panel).checked };
    };
    const sheetHTML = ({ qs, lv, ver, key }) => {
      const L = LEVELS[lv - 1];
      const head = `<div class="wshead"><div><strong>${esc(D.course)} · Unit ${unit}: ${esc(unitTitle)}</strong><br><span>Practice worksheet · ${L.ic} ${L.name} · Version ${ver}</span></div><div class="wsname">Name ____________________<br>Date _____________</div></div>`;
      const items = qs.map((q, k) => `<li class="wsq"><div class="wsmeta">${calcBadge(q, lv)}</div><div class="q">${q.html}</div>
        ${lv === 1 && q.hint ? `<p class="wshint">💡 ${q.hint}</p>` : ''}
        ${q.kind === 'choice' ? `<ol class="wsopts" type="a">${q.choices.map(c => `<li>${c}</li>`).join('')}</ol>` : `<div class="wswork"></div><p class="wsans">Answer: ${q.pre ? esc(q.pre) : ''}________________</p>`}</li>`).join('');
      const keyHTML = key ? `<div class="wskey"><div class="wshead"><div><strong>Answer key · ${esc(D.course)} · Unit ${unit}</strong><br><span>${L.name} · Version ${ver}</span></div></div><ol>${qs.map(q => `<li>${q.kind === 'choice' ? '<strong>(' + 'abcdefgh'[q.answer] + ')</strong> ' : ''}${esc(q.right)}</li>`).join('')}</ol></div>` : '';
      return head + `<ol class="wslist">${items}</ol>` + keyHTML;
    };
    $('[data-role=prev]', panel).addEventListener('click', () => { const w = make(); $('.wsprev', panel).innerHTML = w ? '<div class="wspaper">' + sheetHTML(w) + '</div>' : '<p class="fb no">Pick at least one lesson.</p>'; });
    $('[data-role=print]', panel).addEventListener('click', () => {
      const w = make(); if (!w) { $('.wsprev', panel).innerHTML = '<p class="fb no">Pick at least one lesson.</p>'; return; }
      let out = document.getElementById('ws-print'); if (!out) { out = document.createElement('div'); out.id = 'ws-print'; out.className = 'ws'; document.body.appendChild(out); }
      out.innerHTML = sheetHTML(w); out.classList.add('printme'); document.body.classList.add('printing'); window.print();
      setTimeout(() => { document.body.classList.remove('printing'); out.classList.remove('printme'); }, 500);
    });
  }

  /* ---------- put it together in each unit ---------- */
  const TABS = [['set', '🎯 Practice set'], ['ready', '✅ Am I ready?'], ['task', '🧭 Real-world task'], ['flash', '🃏 Flashcards'], ['ws', '🖨️ Worksheet']];
  $$('.pr').forEach(box => {
    const sec = box.closest('section[id^="unit-"]'); if (!sec) return;
    const unit = Number(sec.id.split('-')[1]), unitTitle = ($('.unitHead h2', sec) || {}).textContent || '', lessons = lessonsOf(sec);
    box.innerHTML = `<div class="prlv"><span class="lbl">Level:</span>${LEVELS.map(l => `<button type="button" data-lv="${l.n}" aria-pressed="false">${l.ic} ${l.name}</button>`).join('')}<p class="hint lvdesc"></p></div>
      <div class="prtabs" role="tablist">${TABS.map(([k, t], i) => `<button type="button" role="tab" data-tab="${k}" aria-selected="${i === 0}">${t}</button>`).join('')}</div>
      <div class="prpanel" role="tabpanel"></div>`;
    const panel = $('.prpanel', box); let tab = 'set', started = false;
    const run = () => { started = true;
      if (tab === 'set') practiceSet(panel, lessons); else if (tab === 'ready') readyCheck(panel, lessons); else if (tab === 'task') realTask(panel, unit);
      else if (tab === 'flash') flashcards(panel, unit); else worksheet(panel, lessons, unit, unitTitle); };
    const paintLv = () => { $$('[data-lv]', box).forEach(b => b.setAttribute('aria-pressed', Number(b.dataset.lv) === level)); $('.lvdesc', box).textContent = LEVELS[level - 1].desc; };
    $$('[data-lv]', box).forEach(b => b.addEventListener('click', () => { level = Number(b.dataset.lv); BC.store.set('bc-level', level); $$('.pr').forEach(p => p._paint && p._paint()); if (started && tab !== 'flash') run(); }));
    box._paint = paintLv; paintLv();
    $$('[data-tab]', box).forEach(b => b.addEventListener('click', () => { tab = b.dataset.tab; $$('[data-tab]', box).forEach(x => x.setAttribute('aria-selected', x === b)); run(); }));
    panel.innerHTML = '<div class="prstart"><p>Ten questions from this unit, one at a time. Pick a level above, then start.</p><button class="btn gold">Start practising</button></div>';
    $('.prstart button', panel).addEventListener('click', run);
  });

  window.PR = { lessonsOf, buildSet };   // used by the automated tests

  /* ---------- calculator notes on the lesson Try-it boxes ---------- */
  $$('details.lesson').forEach(d => {
    const meta = (D.lessons || {})[d.id]; if (!meta) return;
    $$('.try[data-try]', d).forEach(b => { if (b.dataset.try === 'mc') return; const h = $('h4', b); if (!h || $('.calc', h)) return;
      h.insertAdjacentHTML('beforeend', meta.calc === false ? ' <span class="calc no">✏️ No calculator</span>' : ' <span class="calc ok">🧮 Calculator OK</span>'); });
  });
})();
