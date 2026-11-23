/* ============================================================
   8/9 Collab Basecamp: the Unit Path on math pages.
   One step after another, from warm-up to unit quiz:
     🔋 Warm-up → for each lesson: 📝 Guided notes · 📖 Lesson · 🎟️ Exit ticket
     → ✋ Mid-unit quiz (halfway) → 📄 Reference sheet → ★ Core practice → ★★ Challenge → 🏁 Unit quiz
   Steps unlock in order. Progress is saved on the student's device (localStorage).
   Teacher-unlocked devices (BC.PREVIEW) can open every step, print answer keys and reset.
   Questions come from practice.js (window.PR); "explain" questions from path-mathN.js (window.PATHDATA);
   guided notes from notes.js (window.NOTES).
   ============================================================ */
(function () {
  'use strict';
  const BC = window.BC, PR = window.PR, PD = window.PATHDATA, NOTES = window.NOTES, D = window.PDATA;
  if (!BC || !PR || !PD || !D) return;
  const $ = (s, el) => (el || document).querySelector(s), $$ = (s, el) => [...(el || document).querySelectorAll(s)];
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const TEACH = !!BC.PREVIEW, COURSE = ((document.querySelector('.hero h1, h1') || {}).textContent || document.title.split('·')[0]).trim();
  const key = unit => 'bc-path-' + location.pathname.split('/').filter(Boolean).slice(-1)[0] + '-u' + unit;
  const load = unit => { try { return JSON.parse(BC.store.get(key(unit)) || '{}'); } catch (e) { return {}; } };
  const save = (unit, st) => BC.store.set(key(unit), JSON.stringify(st));

  /* ---------- questions ---------- */
  // Same questions every time for a given seed, so the screen version matches the printed one.
  function seeded(seed, fn) { BC.seed(seed); try { return fn(PR.mkRng(seed)); } finally { BC.unseed(); } }
  const explainFor = L => { const e = (PD.explain || {})[L.id || L]; return e ? { q: e[0], model: e[1], look: e[2] || [] } : null; };
  function exitTicket(lessonEl, srcL, ver) {
    const seed = PR.hash(COURSE + lessonEl.id + 'exit' + (ver || ''));
    const qs = srcL ? seeded(seed, r => PR.buildSet([srcL], 2, 2, r)) : [];
    return { qs, ex: explainFor(lessonEl.id), title: ($('.ltitle strong', lessonEl) || {}).textContent || lessonEl.id };
  }
  // A quiz: Part A choose the answer (1 mark), Part B short answer (2 marks), Part C explain (3 marks).
  function quiz(lessons, lessonEls, plan, seedText) {
    const seed = PR.hash(COURSE + seedText);
    return seeded(seed, r => {
      const pool = PR.buildSet(lessons, Math.max(40, lessons.length * 10), 2, r);
      // spread across lessons: take round-robin by lesson
      const byKind = k => { const by = {}; pool.filter(q => q.kind === k).forEach(q => { (by[q.lesson.id] = by[q.lesson.id] || []).push(q); });
        const out = [], ids = Object.keys(by); for (let i = 0; out.length < 99 && ids.some(id => by[id].length); i++) { const id = ids[i % ids.length]; if (by[id].length) out.push(by[id].shift()); } return out; };
      // the same kind of question (same maker) only once, if there are enough others
      const varied = list => { const seen = new Set(), first = [], later = []; list.forEach(q => { const k = q.type || q.html.replace(/<[^>]+>/g, '').slice(0, 40); (seen.has(k) ? later : first).push(q); seen.add(k); }); return first.concat(later); };
      // never the same question twice, even if it is written in two banks or as both kinds
      const plain = h => String(h).replace(/aria-label="([^"]*)"/g, ' $1 ').replace(/<[^>]+>/g, '').replace(/&\w+;/g, ' ').replace(/\s+/g, ' ').trim().toLowerCase();
      const stem = q => { const t = plain(q.html); return /\d/.test(t) ? t : t + '|' + (q.choices || []).map(plain).sort().join('|'); };
      const taken = new Set(), texts = new Set(), numTexts = new Set(), once = list => list.filter(q => { const k = stem(q), t = plain(q.html);
        if (taken.has(k) || numTexts.has(t) || (q.kind === 'num' && texts.has(t))) return false;
        taken.add(k); texts.add(t); if (q.kind === 'num') numTexts.add(t); return true; });
      const num = once(varied(byKind('num'))), choice = once(varied(byKind('choice')));
      let A = choice.slice(0, plan.a), B = num.slice(0, plan.b);
      if (A.length < plan.a) B = num.slice(0, plan.b + plan.a - A.length);   // not enough choice questions: more short answers
      if (B.length < plan.b) A = choice.slice(0, plan.a + plan.b - B.length);
      const exs = PR.shuffle(lessonEls.map(d => explainFor(d.id) && Object.assign(explainFor(d.id), { lesson: ($('.ltitle strong', d) || {}).textContent })).filter(Boolean), r).slice(0, plan.c);
      return { A, B, C: exs, max: A.length + B.length * 2 + exs.length * 3 };
    });
  }

  /* ---------- printing ---------- */
  function printHTML(html) {
    let out = document.getElementById('ws-print'); if (!out) { out = document.createElement('div'); out.id = 'ws-print'; out.className = 'ws'; document.body.appendChild(out); }
    out.innerHTML = html; out.classList.add('printme'); document.body.classList.add('printing'); window.print();
    setTimeout(() => { document.body.classList.remove('printing'); out.classList.remove('printme'); }, 500);
  }
  const head = (title, sub) => `<div class="wshead"><div><strong>${esc(COURSE)} · ${title}</strong><br><span>${sub}</span></div><div class="wsname">Name ____________________<br>Date _____________</div></div>`;
  const qPaper = (q, marks) => `<li class="wsq"><div class="wsmeta">${PR.calcBadge(q, 2)}${marks ? `<span class="marks">[${marks} mark${marks > 1 ? 's' : ''}]</span>` : ''}</div><div class="q">${q.html}</div>
    ${q.kind === 'choice' ? `<ol class="wsopts" type="a">${q.choices.map(c => `<li>${c}</li>`).join('')}</ol>` : `<div class="wswork"></div><p class="wsans">Answer: ${q.pre ? esc(q.pre) : ''}________________</p>`}</li>`;
  const exPaper = (e, marks) => `<li class="wsq"><div class="wsmeta">${marks ? `<span class="marks">[${marks} marks]</span>` : ''}</div><div class="q">${e.q}</div><div class="wswork tall"></div></li>`;
  const keyLine = (q, marks) => `<li>${q.kind === 'choice' ? '<strong>(' + 'abcdefgh'[q.answer] + ')</strong> ' : ''}${esc(q.right)}${marks > 1 ? ' <em>(1 mark for the method, 1 for the answer)</em>' : ''}</li>`;
  const exKey = e => `<li>${esc(e.model)}<br><em>Look for: ${e.look.map(esc).join('; ')}.</em></li>`;
  function exitPaper(tickets, withKey) {
    const sheets = tickets.map(t => `<div class="exitsheet">${head('Exit ticket', esc(t.title))}<ol class="wslist">${t.qs.map(q => qPaper(q)).join('')}${t.ex ? exPaper(t.ex) : ''}</ol></div>`).join('');
    const key = withKey ? `<div class="wskey">${tickets.map(t => `<div class="wshead"><div><strong>Answer key · Exit ticket</strong><br><span>${esc(t.title)}</span></div></div><ol>${t.qs.map(q => keyLine(q)).join('')}${t.ex ? exKey(t.ex) : ''}</ol>`).join('')}</div>` : '';
    return sheets + key;
  }
  function quizPaper(z, title, sub, withKey) {
    let n = 0; const num = () => ++n;
    const body = (z.A.length ? `<h3 class="wspart">Part A · Choose the best answer <small>(1 mark each)</small></h3><ol class="wslist" start="${n + 1}">${z.A.map(q => (num(), qPaper(q, 1))).join('')}</ol>` : '') +
      (z.B.length ? `<h3 class="wspart">Part B · Show your work <small>(2 marks each)</small></h3><ol class="wslist" start="${n + 1}">${z.B.map(q => (num(), qPaper(q, 2))).join('')}</ol>` : '') +
      (z.C.length ? `<h3 class="wspart">Part C · Explain how you know <small>(3 marks each)</small></h3><ol class="wslist" start="${n + 1}">${z.C.map(e => (num(), exPaper(e, 3))).join('')}</ol>` : '');
    const key = withKey ? `<div class="wskey"><div class="wshead"><div><strong>Answer key · ${title}</strong><br><span>${sub} · out of ${z.max}</span></div></div><ol>${z.A.map(q => keyLine(q, 1)).join('')}${z.B.map(q => keyLine(q, 2)).join('')}${z.C.map(e => exKey(e) .replace('<li>', '<li>(3 marks) ')).join('')}</ol></div>` : '';
    return head(title, sub + ` · out of ${z.max} marks`) + body + key;
  }

  /* ---------- on screen ---------- */
  // Questions to answer, then "Hand in". Written parts are self-checked against a sample answer.
  function testOnScreen(panel, parts, onDone) {
    const list = document.createElement('div'); list.className = 'rlist'; panel.appendChild(list);
    const cards = []; let n = 0;
    parts.forEach(({ label, qs, marks, written }) => {
      if (!qs.length) return;
      if (label) list.insertAdjacentHTML('beforeend', `<h4 class="ptpart">${label}</h4>`);
      qs.forEach(q => {
        n++;
        if (written) {
          const el = document.createElement('div'); el.className = 'pq written';
          el.innerHTML = `<div class="pq-top"><b class="qn">${n}.</b><span class="from">${esc(q.lesson || 'Explain')}${marks ? ' · ' + marks + ' marks' : ''}</span></div><div class="q readq">${q.q}</div><textarea rows="4" aria-label="Your answer"></textarea><div class="model" hidden></div>`;
          const sp = BC.spkBtn(); sp.addEventListener('click', () => BC.speak(BC.textOf($('.readq', el)))); $('.pq-top', el).appendChild(sp);
          list.appendChild(el); cards.push({ el, q, written: true, marks });
        } else {
          const c = PR.card(q, 2, { noCheck: true }); $('.hintbox', c) && $('.hintbox', c).remove();
          $('.pq-top', c).insertAdjacentHTML('afterbegin', `<b class="qn">${n}.</b>`);
          if (marks) $('.pq-top', c).insertAdjacentHTML('beforeend', `<span class="marks">${marks} mark${marks > 1 ? 's' : ''}</span>`);
          list.appendChild(c); cards.push({ el: c, q, marks: marks || 1 });
        }
      });
    });
    panel.insertAdjacentHTML('beforeend', '<button class="btn gold" data-role="handin">Hand in</button><div class="presult"></div>');
    $('[data-role=handin]', panel).addEventListener('click', e => {
      const blank = cards.filter(c => c.written ? !$('textarea', c.el).value.trim() : c.q.kind === 'choice' ? c.el.dataset.pick == null : !$('input', c.el).value.trim());
      if (blank.length && !confirm(blank.length + (blank.length === 1 ? ' question is' : ' questions are') + ' blank. Hand in anyway?')) return;
      e.target.remove();
      let auto = 0, autoMax = 0; const review = new Set();
      cards.forEach(c => {
        if (c.written) {
          const m = $('.model', c.el); m.hidden = false; $('textarea', c.el).readOnly = true;
          m.innerHTML = `<p><strong>Sample answer:</strong> ${c.q.model}</p><p><strong>Tick what your answer has:</strong></p>` +
            c.q.look.map((x, i) => `<label class="chk"><input type="checkbox" data-look="${i}"> ${x}</label>`).join('');
          return;
        }
        const q = c.q, fb = $('.fb', c.el);
        const ok = q.kind === 'choice' ? Number(c.el.dataset.pick) === q.answer && c.el.dataset.pick != null : !!$('input', c.el).value.trim() && q.check($('input', c.el).value);
        c.el.classList.add(ok ? 'got' : 'missed'); fb.className = 'fb ' + (ok ? 'ok' : 'no'); fb.textContent = (ok ? '✓ ' : '✗ ') + q.right;
        $$('input, button', c.el).forEach(x => { if (!x.classList.contains('spk')) x.disabled = true; });
        autoMax += c.marks; if (ok) auto += c.marks; else if (q.lesson) review.add(q.lesson);
      });
      const res = $('.presult', panel), wr = cards.filter(c => c.written);
      const paint = () => {
        let wm = 0, wmax = 0;
        wr.forEach(c => { const n = c.q.look.length || 1, t = $$('[data-look]:checked', c.el).length, m = c.marks || 1; wmax += m; wm += Math.round(m * Math.min(t, n) / n); });
        const score = auto + wm, max = autoMax + wmax, pct = max ? Math.round(score / max * 100) : 100;
        res.innerHTML = `<div class="result"><p class="big">${score} / ${max}${max ? ' (' + pct + '%)' : ''}</p>
          ${wr.length ? '<p class="hint">Your written answers count when you tick what they include. Be honest: your teacher may check.</p>' : ''}
          <p>${pct >= 80 ? '✅ Strong work.' : pct >= 60 ? '🌲 Getting there. Look back at the lessons below.' : '🥾 Go back over these lessons, then try again.'}</p>
          ${review.size ? '<ul>' + [...review].map(L => `<li><a href="#${L.id}" data-open="${L.id}">${esc(L.title)}</a></li>`).join('') + '</ul>' : ''}
          <button class="btn" data-role="finish">${'Save my result and continue'}</button></div>`;
        PR.openLinks(res);
        $('[data-role=finish]', res).addEventListener('click', () => onDone({ score, max }));
      };
      $$('[data-look]', panel).forEach(x => x.addEventListener('change', paint));
      paint(); res.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }
  // Practice-style: one question after another with feedback, done when all are answered.
  function drill(panel, qs, lv, onDone) {
    let i = 0, got = 0;
    const next = () => {
      if (i >= qs.length) {
        panel.insertAdjacentHTML('beforeend', `<div class="result"><p class="big">${got} / ${qs.length}</p><button class="btn" data-role="finish">Save and continue</button></div>`);
        $('[data-role=finish]', panel).addEventListener('click', () => onDone({ score: got, max: qs.length })); return;
      }
      const c = PR.card(qs[i], lv, { onDone: (ok, tries) => { if (ok && !tries) got++; i++; setTimeout(next, 300); } });
      $('.pq-top', c).insertAdjacentHTML('afterbegin', `<b class="qn">${i + 1} of ${qs.length}</b>`);
      panel.appendChild(c); const inp = $('input', c); if (inp) inp.focus({ preventScroll: true });
    };
    if (!qs.length) { panel.innerHTML = '<p class="hint">Practice for this unit is coming soon.</p>'; return; }
    next();
  }

  /* ---------- build the path in each unit ---------- */
  $$('.upath[data-unit]').forEach(box => {
    const sec = box.closest('section[id^="unit-"]'); if (!sec) return;
    const unit = Number(box.dataset.unit), unitTitle = ($('.unitHead h2', sec) || {}).textContent || '';
    const lessonEls = $$('details.lesson', sec); if (!lessonEls.length) { box.innerHTML = '<p class="hint">The path for this unit is coming soon.</p>'; return; }
    const src = PR.lessonsOf(sec), srcOf = d => src.find(L => L.id === d.id);
    const prevSec = document.getElementById('unit-' + (unit - 1));
    const warmFrom = prevSec ? PR.lessonsOf(prevSec) : src.slice(0, 2);
    const half = Math.ceil(lessonEls.length / 2);
    const cheat = document.getElementById('cheat-u' + unit);

    const steps = [{ id: 'warm', grp: 'Get ready', ic: '🔋', name: 'Warm-up', sub: prevSec ? '5 quick questions from last unit' : '5 easy questions to get started' }];
    lessonEls.forEach((d, i) => {
      const t = ($('.ltitle strong', d) || {}).textContent || 'Lesson ' + (i + 1), g = 'Lesson ' + (i + 1) + ': ' + t;
      steps.push({ id: 'notes-' + d.id, grp: g, ic: '📝', name: 'Guided notes', d });
      steps.push({ id: 'lesson-' + d.id, grp: g, ic: '📖', name: 'Lesson', d });
      steps.push({ id: 'exit-' + d.id, grp: g, ic: '🎟️', name: 'Exit ticket', d });
      if (i + 1 === half && lessonEls.length > 2) steps.push({ id: 'midquiz', grp: 'Check-in', ic: '✋', name: 'Mid-unit quiz', sub: 'Lessons 1–' + half });
    });
    if (cheat) steps.push({ id: 'ref', grp: 'Wrap up', ic: '📄', name: 'Reference sheet', sub: 'The whole unit on one page' });
    steps.push({ id: 'core', grp: 'Wrap up', ic: '★', name: 'Core practice', sub: '10 questions · Climb' });
    steps.push({ id: 'chal', grp: 'Wrap up', ic: '★★', name: 'Challenge', sub: '8 questions · Summit' });
    steps.push({ id: 'unitquiz', grp: 'Wrap up', ic: '🏁', name: 'Unit quiz', sub: 'Everything in the unit' });

    let st = load(unit), openId = null;
    const isDone = s => !!(st[s.id]);
    const unlocked = i => TEACH || steps.slice(0, i).every(isDone);
    const mark = (s, result) => { st[s.id] = Object.assign({ at: Date.now() }, result || {}); save(unit, st); const i = steps.indexOf(s); openId = steps[i + 1] && unlocked(i + 1) ? steps[i + 1].id : null; draw(); };

    box.innerHTML = `<div class="uphead"><div><strong>Your path through Unit ${unit}</strong><div class="hint">Do the steps in order. Each one opens when you finish the one before. Your progress is saved on this device.</div></div>
      <div class="upbar"><span></span></div><div class="upcount small"></div></div><div class="upsteps"></div>
      ${TEACH ? '<div class="upteach"><strong>Teacher:</strong> every step is open on this device. <button class="btn ghost small" data-role="exits">🖨️ All exit tickets + key</button> <button class="btn ghost small" data-role="reset">Reset this path on this device</button></div>' : ''}`;
    if (TEACH) {
      $('[data-role=exits]', box).addEventListener('click', () => printHTML(exitPaper(lessonEls.map(d => exitTicket(d, srcOf(d))), true)));
      $('[data-role=reset]', box).addEventListener('click', () => { if (confirm('Clear the checkmarks for this unit on this device?')) { st = {}; save(unit, st); draw(); } });
    }

    function draw() {
      const done = steps.filter(isDone).length;
      $('.upbar span', box).style.width = Math.round(done / steps.length * 100) + '%';
      $('.upcount', box).textContent = done + ' of ' + steps.length + ' steps done' + (done === steps.length ? ' 🎉' : '');
      let html = '', grp = '';
      steps.forEach((s, i) => {
        if (s.grp !== grp) { if (grp) html += '</div></div>'; grp = s.grp; html += `<div class="upgrp"><div class="upgname">${esc(grp)}</div><div class="uprow">`; }
        const ok = isDone(s), open = unlocked(i), next = !ok && open && (TEACH ? steps.slice(0, i).every(isDone) : true), r = st[s.id];
        html += `<button type="button" class="upstep ${ok ? 'done' : open ? (next ? 'next' : 'open') : 'locked'} ${openId === s.id ? 'cur' : ''}" data-step="${s.id}" ${open ? '' : 'aria-disabled="true"'} aria-expanded="${openId === s.id}">
          <span class="upic" aria-hidden="true">${ok ? '✓' : open ? s.ic : '🔒'}</span><span class="upname">${esc(s.name)}${s.sub ? `<small>${esc(s.sub)}</small>` : ''}${r && r.max ? `<small class="upscore">${r.score} / ${r.max}</small>` : ''}</span></button>`;
      });
      html += '</div></div>';
      $('.upsteps', box).innerHTML = html;
      $$('.upstep', box).forEach(b => b.addEventListener('click', () => {
        const s = steps.find(x => x.id === b.dataset.step), i = steps.indexOf(s);
        if (!unlocked(i)) { BC.toast ? BC.toast('Finish the step before this one first.') : alert('Finish the step before this one first.'); return; }
        openId = openId === s.id ? null : s.id; draw();
      }));
      const s = steps.find(x => x.id === openId);
      if (s) { const b = $(`[data-step="${s.id}"]`, box), p = document.createElement('div'); p.className = 'uppanel'; b.closest('.upgrp').after(p); show(s, p); }
    }

    function show(s, p) {
      const doneBtn = label => { const b = document.createElement('button'); b.className = 'btn gold'; b.textContent = isDone(s) ? '✓ Done' : label; b.addEventListener('click', () => mark(s)); return b; };
      p.innerHTML = `<h4>${s.ic} ${esc(s.name)}${s.d ? ' · ' + esc(($('.ltitle strong', s.d) || {}).textContent) : ''}</h4>`;
      if (s.id === 'warm') {
        p.insertAdjacentHTML('beforeend', `<p class="hint">${prevSec ? 'A quick warm-up from last unit.' : 'Some easy questions to get your brain going.'} Two tries each.</p>`);
        drill(p, PR.buildSet(warmFrom, 5, 1, Math.random), 1, r => mark(s, r));
      } else if (s.id.startsWith('notes-')) {
        const style = BC.store.get('bc-notes-style') || 'fill', help = Number(BC.store.get('bc-notes-help')) || 2;
        if (!NOTES) { p.insertAdjacentHTML('beforeend', '<p class="hint">Notes are in the Notes section of this unit.</p>'); p.appendChild(doneBtn('✓ I finished my notes')); return; }
        const o = { lessons: [NOTES.readLesson(s.d)], style, help, unit, unitTitle };
        p.insertAdjacentHTML('beforeend', `<p class="hint">Fill these in as you go through the lesson. Change the style (full, fill in the blank, write your own) in the <a href="#u${unit}-notes">Notes</a> section.</p>
          <div class="row"><button class="btn ghost" data-role="print">🖨️ Print</button><button class="btn ghost" data-role="docx">⬇️ Download for Google Docs</button></div><div class="wspaper ntpaper">${NOTES.sheetHTML(o)}</div>`);
        $('[data-role=print]', p).addEventListener('click', () => printHTML('<div class="ntpaper">' + NOTES.sheetHTML(o) + '</div>'));
        $('[data-role=docx]', p).addEventListener('click', () => { const a = document.createElement('a'); a.href = URL.createObjectURL(NOTES.docx(o)); a.download = COURSE + ' Unit ' + unit + ' ' + o.lessons[0].title.replace(/[\\/:*?"<>|]/g, '') + ' notes.docx'; document.body.appendChild(a); a.click(); setTimeout(() => a.remove(), 500); });
        p.appendChild(doneBtn('✓ I finished my notes'));
      } else if (s.id.startsWith('lesson-')) {
        p.insertAdjacentHTML('beforeend', '<p class="hint">Work through the examples and the Try it questions. When you\'re done, tap the button at the bottom of the lesson (or here).</p><div class="row"><button class="btn" data-role="go">Open the lesson ↓</button></div>');
        $('[data-role=go]', p).addEventListener('click', () => { s.d.open = true; s.d.scrollIntoView({ behavior: 'smooth', block: 'start' }); });
        p.appendChild(doneBtn('✓ I finished the lesson'));
      } else if (s.id.startsWith('exit-')) {
        const t = exitTicket(s.d, srcOf(s.d));
        p.insertAdjacentHTML('beforeend', `<p class="hint">${t.qs.length ? t.qs.length + ' questions and one "explain how you know".' : 'One "explain how you know" question.'} No hints. Do it on screen, or print it and hand it in.</p><div class="row"><button class="btn ghost" data-role="print">🖨️ Print this exit ticket</button></div>`);
        $('[data-role=print]', p).addEventListener('click', () => printHTML(exitPaper([t], TEACH)));
        testOnScreen(p, [{ qs: t.qs }, { qs: t.ex ? [Object.assign({}, t.ex, { lesson: 'Explain how you know' })] : [], written: true }], r => mark(s, r));
      } else if (s.id === 'midquiz' || s.id === 'unitquiz') {
        const mid = s.id === 'midquiz', els = mid ? lessonEls.slice(0, half) : lessonEls;
        const ls = src.filter(L => els.some(d => d.id === L.id));
        const tries = (st[s.id] && st[s.id].tries) || 0, ver = 'ABC'[tries % 3];
        const z = quiz(ls, els, mid ? { a: 4, b: 4, c: 1 } : { a: 6, b: 6, c: 2 }, unit + s.id + ver);
        const title = (mid ? 'Mid-unit quiz' : 'Unit quiz') + ' · Unit ' + unit, sub = esc(unitTitle) + ' · Version ' + ver;
        p.insertAdjacentHTML('beforeend', `<p class="hint">${mid ? 'Lessons 1 to ' + half : 'The whole unit'} · out of ${z.max} marks · about ${mid ? 20 : 35} minutes. Part A: choose the answer. Part B: short answer. Part C: explain.</p>
          <div class="row"><button class="btn ghost" data-role="print">🖨️ Print the quiz${TEACH ? ' + answer key' : ''}</button>${tries ? `<span class="hint">Version ${ver} (a new set of questions)</span>` : ''}</div>`);
        $('[data-role=print]', p).addEventListener('click', () => printHTML(quizPaper(z, title, sub, TEACH)));
        testOnScreen(p, [{ label: 'Part A · Choose the best answer (1 mark each)', qs: z.A, marks: 1 }, { label: 'Part B · Short answer (2 marks each)', qs: z.B, marks: 2 },
          { label: 'Part C · Explain how you know (3 marks each)', qs: z.C, written: true, marks: 3 }], r => mark(s, Object.assign(r, { tries: tries + 1 })));
      } else if (s.id === 'ref') {
        p.insertAdjacentHTML('beforeend', '<p class="hint">Everything from this unit on one page. Keep it beside you for the practice and the quiz.</p><div class="row"><button class="btn ghost" data-role="print">🖨️ Print</button></div>');
        const c = cheat.cloneNode(true); c.removeAttribute('id'); c.className = 'cheatview'; p.appendChild(c);
        $('[data-role=print]', p).addEventListener('click', () => { cheat.classList.add('printme'); document.body.classList.add('printing'); window.print(); setTimeout(() => { document.body.classList.remove('printing'); cheat.classList.remove('printme'); }, 500); });
        p.appendChild(doneBtn('✓ I read it over'));
      } else if (s.id === 'core' || s.id === 'chal') {
        const lv = s.id === 'core' ? 2 : 3;
        p.insertAdjacentHTML('beforeend', `<p class="hint">${lv === 2 ? 'Everyday numbers, from every lesson. A hint shows up after one wrong try.' : 'Bigger numbers and no hints. Show what you know.'}</p>`);
        drill(p, PR.buildSet(src, lv === 2 ? 10 : 8, lv, Math.random), lv, r => mark(s, r));
      }
      p.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    draw();

    // At the end of each lesson: "Done with this lesson?"
    lessonEls.forEach(d => {
      const s = steps.find(x => x.id === 'lesson-' + d.id), body = $('.lbody', d); if (!body || $('.updone', body)) return;
      body.insertAdjacentHTML('beforeend', `<div class="updone"><button class="btn gold">✓ Done with this lesson · back to my path</button></div>`);
      $('.updone button', body).addEventListener('click', () => {
        const i = steps.indexOf(s);
        if (!unlocked(i)) { alert('Do the guided notes for this lesson first (in your path at the top of the unit).'); box.scrollIntoView({ behavior: 'smooth' }); return; }
        mark(s); box.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  });
})();
