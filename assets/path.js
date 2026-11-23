/* ============================================================
   8/9 Collab Basecamp: the Unit Path on math pages.
   One step after another, from warm-up to unit quiz:
     🔋 Warm-up → for each lesson: 📝 Guided notes · 📖 Lesson · 🎟️ Exit ticket
     → ✋ Mid-unit quiz (halfway) → 📄 Reference sheet → ★ Core practice → ★★ Challenge → 🏁 Unit quiz
   Every step is open. When a student finishes one, they sign in (nickname + PIN, same as Avalanche HQ)
   and it goes to their own tab in the Avalanche HQ sheet with the date (and score for quizzes and practice).
   Their checkmarks come back from that sheet. Teacher preview (BC.PREVIEW) prints answer keys and sends nothing.
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

  /* ---------- Avalanche HQ: students sign in (nickname + PIN) and each step they finish goes to their sheet ---------- */
  const AV_API = 'https://script.google.com/macros/s/AKfycbxDcPBwBXI4-6xRHIJWYJLNxRyDhZLDHHgWo8BN2h6J9cMj9iEkdXGa3UuxRJxcYUd2fw/exec';
  const ss = { get: k => { try { return sessionStorage.getItem(k); } catch (e) { return null; } }, set: (k, v) => { try { v == null ? sessionStorage.removeItem(k) : sessionStorage.setItem(k, v); } catch (e) {} } };
  const AUTH = { token: ss.get('avToken'), name: ss.get('avName') || '', done: {}, loaded: false, boxes: [] };
  async function api(action, extra) {
    const res = await fetch(AV_API, { method: 'POST', body: JSON.stringify(Object.assign({ action, token: AUTH.token }, extra || {})) });
    const j = await res.json();
    if (!j.ok) { if (j.code === 'signin') signOut(); const e = new Error(j.error || 'Something went wrong.'); e.code = j.code; throw e; }
    return j.data;
  }
  function signOut() { const t = AUTH.token; AUTH.token = null; AUTH.name = ''; AUTH.done = {}; AUTH.loaded = false; ss.set('avToken', null); ss.set('avName', null);
    if (t) fetch(AV_API, { method: 'POST', body: JSON.stringify({ action: 'logout', token: t }) }).catch(() => {}); AUTH.boxes.forEach(b => b.redraw()); }
  function gotProgress(p) { AUTH.done = p.done || {}; AUTH.loaded = true; if (p.nickname) { AUTH.name = p.nickname; ss.set('avName', p.nickname); } AUTH.boxes.forEach(b => b.redraw()); }

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
          <div class="row updonerow"><button class="btn gold" data-role="finish">✓ Send my result to my teacher</button></div></div>`;
        PR.openLinks(res);
        $('[data-role=finish]', res).addEventListener('click', e => onDone({ score, max }, e.currentTarget));
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
        panel.insertAdjacentHTML('beforeend', `<div class="result"><p class="big">${got} / ${qs.length}</p><div class="row updonerow"><button class="btn gold" data-role="finish">✓ Send my result to my teacher</button></div></div>`);
        $('[data-role=finish]', panel).addEventListener('click', e => onDone({ score: got, max: qs.length }, e.currentTarget)); return;
      }
      const c = PR.card(qs[i], lv, { onDone: (ok, tries) => { if (ok && !tries) got++; i++; setTimeout(next, 300); } });
      $('.pq-top', c).insertAdjacentHTML('afterbegin', `<b class="qn">${i + 1} of ${qs.length}</b>`);
      panel.appendChild(c); const inp = $('input', c); if (inp) inp.focus({ preventScroll: true });
    };
    if (!qs.length) { panel.innerHTML = '<p class="hint">Practice for this unit is coming soon.</p>'; return; }
    next();
  }

  // Sign-in form, shown inside a path box. onIn runs after a good PIN.
  let NICKS = null;
  function signInForm(where, why, onIn) {
    const f = document.createElement('div'); f.className = 'upsign';
    f.innerHTML = `<p><strong>${esc(why)}</strong><br><span class="hint">Use the same nickname and PIN as Avalanche HQ.</span></p>
      <div class="row"><label>Nickname <select data-k="nick"><option value="">Loading…</option></select></label>
      <label>PIN <input data-k="pin" type="password" inputmode="numeric" autocomplete="off" maxlength="8" size="6"></label>
      <button class="btn gold" data-k="go">Sign in</button><button class="btn ghost" data-k="x">Cancel</button></div><p class="upmsg" role="status"></p>`;
    where.appendChild(f);
    const sel = $('[data-k=nick]', f), msg = $('.upmsg', f);
    (NICKS ? Promise.resolve(NICKS) : api('nicknames').then(n => (NICKS = n)))
      .then(n => { sel.innerHTML = '<option value="">Pick your nickname</option>' + n.map(x => `<option value="${esc(x.id)}">${esc(x.nickname)}</option>`).join(''); })
      .catch(() => { msg.textContent = 'Can\'t reach Avalanche HQ right now. Check your internet and try again.'; });
    const go = async () => {
      if (!sel.value) { msg.textContent = 'Pick your nickname first.'; return; }
      const pin = $('[data-k=pin]', f).value.trim(); if (!pin) { msg.textContent = 'Type your PIN.'; return; }
      msg.textContent = 'Signing in…'; $('[data-k=go]', f).disabled = true;
      try {
        const r = await api('login', { studentId: sel.value, pin });
        AUTH.token = r.token; ss.set('avToken', r.token); AUTH.name = r.view && r.view.me ? r.view.me.nickname : sel.options[sel.selectedIndex].text; ss.set('avName', AUTH.name);
        f.remove(); onIn();
      } catch (e) { msg.textContent = e.message; $('[data-k=go]', f).disabled = false; $('[data-k=pin]', f).value = ''; }
    };
    $('[data-k=go]', f).addEventListener('click', go);
    $('[data-k=pin]', f).addEventListener('keydown', e => { if (e.key === 'Enter') go(); });
    $('[data-k=x]', f).addEventListener('click', () => f.remove());
    sel.focus();
  }

  /* ---------- build the path in each unit ---------- */
  $$('.upath[data-unit]').forEach(box => {
    const sec = box.closest('section[id^="unit-"]'); if (!sec) return;
    const unit = Number(box.dataset.unit), unitTitle = ($('.unitHead h2', sec) || {}).textContent || '', CK = box.dataset.course || '';
    const lessonEls = $$('details.lesson', sec); if (!lessonEls.length) { box.innerHTML = '<p class="hint">The path for this unit is coming soon.</p>'; return; }
    const src = PR.lessonsOf(sec), srcOf = d => src.find(L => L.id === d.id);
    const prevSec = document.getElementById('unit-' + (unit - 1));
    const warmFrom = prevSec ? PR.lessonsOf(prevSec) : src.slice(0, 2);
    const half = Math.ceil(lessonEls.length / 2);
    const cheat = document.getElementById('cheat-u' + unit);

    // Step ids match assets/path-steps.json (built by _build/build.py) and the rows on each student's sheet.
    const steps = [{ id: 'u' + unit + '-warm', kind: 'warm', grp: 'Get ready', ic: '🔋', name: 'Warm-up', sub: prevSec ? '5 quick questions from last unit' : '5 easy questions to get started' }];
    lessonEls.forEach((d, i) => {
      const t = ($('.ltitle strong', d) || {}).textContent || 'Lesson ' + (i + 1), g = 'Lesson ' + (i + 1) + ': ' + t;
      steps.push({ id: d.id + '-notes', kind: 'notes', grp: g, ic: '📝', name: 'Guided notes', d });
      steps.push({ id: d.id + '-lesson', kind: 'lesson', grp: g, ic: '📖', name: 'Lesson', d });
      steps.push({ id: d.id + '-exit', kind: 'exit', grp: g, ic: '🎟️', name: 'Exit ticket', d });
      if (i + 1 === half && lessonEls.length > 2) steps.push({ id: 'u' + unit + '-midquiz', kind: 'midquiz', grp: 'Check-in', ic: '✋', name: 'Mid-unit quiz', sub: 'Lessons 1–' + half });
    });
    if (cheat) steps.push({ id: 'u' + unit + '-ref', kind: 'ref', grp: 'Wrap up', ic: '📄', name: 'Reference sheet', sub: 'The whole unit on one page' });
    steps.push({ id: 'u' + unit + '-core', kind: 'core', grp: 'Wrap up', ic: '★', name: 'Core practice', sub: '10 questions · Climb' });
    steps.push({ id: 'u' + unit + '-chal', kind: 'chal', grp: 'Wrap up', ic: '★★', name: 'Challenge', sub: '8 questions · Summit' });
    steps.push({ id: 'u' + unit + '-unitquiz', kind: 'unitquiz', grp: 'Wrap up', ic: '🏁', name: 'Unit quiz', sub: 'Everything in the unit' });

    let openId = null, tries = {};
    const fid = s => CK + '-' + s.id, rec = s => AUTH.done[fid(s)], isDone = s => !!(rec(s) && rec(s).at);

    // Finished a step: sign in if needed, then send it to the teacher's sheet.
    async function mark(s, result, btn) {
      if (TEACH) { note(btn, 'Teacher preview: nothing is sent from your device.'); advance(s); return; }
      const send = async () => {
        if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }
        try {
          const r = await api('pathDone', Object.assign({ course: CK, unit, step: s.id }, result || {}));
          AUTH.done = r.done || AUTH.done; AUTH.loaded = true;
          if (s.kind.endsWith('quiz')) tries[s.id] = (tries[s.id] || 0) + 1;
          advance(s); flash('✓ Sent to your teacher' + (AUTH.name ? ' · ' + AUTH.name : ''));
          if (btn && btn.isConnected) { btn.disabled = false; btn.textContent = '✓ Sent to your teacher'; }
        } catch (e) {
          if (btn) { btn.disabled = false; btn.textContent = 'Try sending again'; }
          if (e.code === 'signin') signInForm(btn ? btn.parentNode : box, 'Sign in again to send this to your teacher.', send);
          else note(btn, e.message);
        }
      };
      if (!AUTH.token) signInForm(btn ? btn.parentNode : box, 'Sign in so your teacher gets this.', async () => { try { gotProgress(await api('pathProgress', { course: CK })); } catch (e) {} send(); });
      else await send();
    }
    const note = (btn, t) => { const where = btn ? btn.parentNode : box; let m = $('.upnote', where); if (!m) { m = document.createElement('p'); m.className = 'upnote'; where.appendChild(m); } m.textContent = t; };
    const flash = t => { let f = $('.upflash', box); if (!f) { f = document.createElement('div'); f.className = 'upflash'; f.setAttribute('role', 'status'); $('.uphead', box).after(f); } f.textContent = t; clearTimeout(f._t); f._t = setTimeout(() => f.remove(), 4000); };
    const advance = s => { const i = steps.indexOf(s); openId = null; draw(); const nx = steps.slice(i + 1).find(x => !isDone(x)); if (nx) { const b = $(`[data-step="${nx.id}"]`, box); if (b) b.classList.add('pulse'); } };

    box.innerHTML = `<div class="uphead"><div><strong>Your path through Unit ${unit}</strong><div class="hint">Go in order from top to bottom. When you finish a step, mark it done and it goes to your teacher.</div></div>
      <div class="upbar"><span></span></div><div class="upcount small"></div><div class="upwho small"></div></div><div class="upsteps"></div>
      ${TEACH ? '<div class="upteach"><strong>Teacher:</strong> students\' checkmarks go to their own tab in the Avalanche HQ sheet. <button class="btn ghost small" data-role="exits">🖨️ All exit tickets + key</button></div>' : ''}`;
    if (TEACH) $('[data-role=exits]', box).addEventListener('click', () => printHTML(exitPaper(lessonEls.map(d => exitTicket(d, srcOf(d))), true)));

    function draw() {
      const done = steps.filter(isDone).length, nextStep = steps.find(x => !isDone(x));
      $('.upbar span', box).style.width = Math.round(done / steps.length * 100) + '%';
      $('.upcount', box).textContent = AUTH.token ? done + ' of ' + steps.length + ' steps done' + (done === steps.length ? ' 🎉' : '') : '';
      $('.upwho', box).innerHTML = TEACH ? '' : AUTH.token ? `Signed in as <strong>${esc(AUTH.name || 'you')}</strong> · <button type="button" class="linkbtn" data-role="out">Not you? Sign out</button>`
        : '<button type="button" class="btn small gold" data-role="in">Sign in to see your checkmarks</button>';
      const o = $('[data-role=out]', box), inb = $('[data-role=in]', box);
      if (o) o.addEventListener('click', signOut);
      if (inb) inb.addEventListener('click', () => { if (!$('.upsign', box)) signInForm($('.uphead', box), 'Sign in to see what you have finished.', async () => { try { gotProgress(await api('pathProgress', { course: CK })); } catch (e) { flash(e.message); } }); });
      let html = '', grp = '';
      steps.forEach(s => {
        if (s.grp !== grp) { if (grp) html += '</div></div>'; grp = s.grp; html += `<div class="upgrp"><div class="upgname">${esc(grp)}</div><div class="uprow">`; }
        const ok = isDone(s), r = rec(s), when = ok ? new Date(r.at) : null;
        html += `<button type="button" class="upstep ${ok ? 'done' : AUTH.token && s === nextStep ? 'next' : 'open'} ${openId === s.id ? 'cur' : ''}" data-step="${s.id}" aria-expanded="${openId === s.id}">
          <span class="upic" aria-hidden="true">${ok ? '✓' : s.ic}</span><span class="upname">${esc(s.name)}${s.sub ? `<small>${esc(s.sub)}</small>` : ''}${ok ? `<small class="upscore">${r.score ? esc(r.score) + ' · ' : ''}${when && !isNaN(when) ? when.toLocaleDateString(undefined, { month: 'short', day: 'numeric' }) : 'done'}</small>` : ''}</span></button>`;
      });
      html += '</div></div>';
      $('.upsteps', box).innerHTML = html;
      $$('.upstep', box).forEach(b => b.addEventListener('click', () => { openId = openId === b.dataset.step ? null : b.dataset.step; draw(); }));
      const s = steps.find(x => x.id === openId);
      if (s) { const b = $(`[data-step="${s.id}"]`, box), p = document.createElement('div'); p.className = 'uppanel'; b.closest('.upgrp').after(p); show(s, p); }
    }
    box.redraw = draw; AUTH.boxes.push(box);

    function show(s, p) {
      const doneBtn = label => { const b = document.createElement('button'); b.className = 'btn gold'; b.textContent = isDone(s) ? '✓ Done (send again)' : label; b.addEventListener('click', () => mark(s, null, b));
        const w = document.createElement('div'); w.className = 'row updonerow'; w.appendChild(b); return w; };
      const finish = (r, btn) => mark(s, { score: r.score + ' / ' + r.max }, btn);
      p.innerHTML = `<h4>${s.ic} ${esc(s.name)}${s.d ? ' · ' + esc(($('.ltitle strong', s.d) || {}).textContent) : ''}</h4>`;
      if (s.kind === 'warm') {
        p.insertAdjacentHTML('beforeend', `<p class="hint">${prevSec ? 'A quick warm-up from last unit.' : 'Some easy questions to get your brain going.'} Two tries each.</p>`);
        drill(p, PR.buildSet(warmFrom, 5, 1, Math.random), 1, finish);
      } else if (s.kind === 'notes') {
        const style = BC.store.get('bc-notes-style') || 'fill', help = Number(BC.store.get('bc-notes-help')) || 2;
        if (!NOTES) { p.insertAdjacentHTML('beforeend', '<p class="hint">Notes are in the Notes section of this unit.</p>'); p.appendChild(doneBtn('✓ I finished my notes')); return; }
        const o = { lessons: [NOTES.readLesson(s.d)], style, help, unit, unitTitle };
        p.insertAdjacentHTML('beforeend', `<p class="hint">Fill these in as you go through the lesson. Change the style (full, fill in the blank, write your own) in the <a href="#u${unit}-notes">Notes</a> section.</p>
          <div class="row"><button class="btn ghost" data-role="print">🖨️ Print</button><button class="btn ghost" data-role="docx">⬇️ Download for Google Docs</button></div><div class="wspaper ntpaper">${NOTES.sheetHTML(o)}</div>`);
        $('[data-role=print]', p).addEventListener('click', () => printHTML('<div class="ntpaper">' + NOTES.sheetHTML(o) + '</div>'));
        $('[data-role=docx]', p).addEventListener('click', () => { const a = document.createElement('a'); a.href = URL.createObjectURL(NOTES.docx(o)); a.download = COURSE + ' Unit ' + unit + ' ' + o.lessons[0].title.replace(/[\\/:*?"<>|]/g, '') + ' notes.docx'; document.body.appendChild(a); a.click(); setTimeout(() => a.remove(), 500); });
        p.appendChild(doneBtn('✓ I finished my notes'));
      } else if (s.kind === 'lesson') {
        p.insertAdjacentHTML('beforeend', '<p class="hint">Work through the examples and the Try it questions. When you\'re done, tap the button at the bottom of the lesson (or here).</p><div class="row"><button class="btn" data-role="go">Open the lesson ↓</button></div>');
        $('[data-role=go]', p).addEventListener('click', () => { s.d.open = true; s.d.scrollIntoView({ behavior: 'smooth', block: 'start' }); });
        p.appendChild(doneBtn('✓ I finished the lesson'));
      } else if (s.kind === 'exit') {
        const t = exitTicket(s.d, srcOf(s.d));
        p.insertAdjacentHTML('beforeend', `<p class="hint">${t.qs.length ? t.qs.length + ' questions and one "explain how you know".' : 'One "explain how you know" question.'} No hints. Do it on screen, or print it and hand it in.</p><div class="row"><button class="btn ghost" data-role="print">🖨️ Print this exit ticket</button></div>`);
        $('[data-role=print]', p).addEventListener('click', () => printHTML(exitPaper([t], TEACH)));
        testOnScreen(p, [{ qs: t.qs }, { qs: t.ex ? [Object.assign({}, t.ex, { lesson: 'Explain how you know' })] : [], written: true }], finish);
      } else if (s.kind === 'midquiz' || s.kind === 'unitquiz') {
        const mid = s.kind === 'midquiz', els = mid ? lessonEls.slice(0, half) : lessonEls;
        const ls = src.filter(L => els.some(d => d.id === L.id));
        const n = tries[s.id] || 0, ver = 'ABC'[n % 3];
        const z = quiz(ls, els, mid ? { a: 4, b: 4, c: 1 } : { a: 6, b: 6, c: 2 }, unit + s.kind + ver);
        const title = (mid ? 'Mid-unit quiz' : 'Unit quiz') + ' · Unit ' + unit, sub = esc(unitTitle) + ' · Version ' + ver;
        p.insertAdjacentHTML('beforeend', `<p class="hint">${mid ? 'Lessons 1 to ' + half : 'The whole unit'} · out of ${z.max} marks · about ${mid ? 20 : 35} minutes. Part A: choose the answer. Part B: short answer. Part C: explain.</p>
          <div class="row"><button class="btn ghost" data-role="print">🖨️ Print the quiz${TEACH ? ' + answer key' : ''}</button>${n ? `<span class="hint">Version ${ver} (a new set of questions)</span>` : ''}</div>`);
        $('[data-role=print]', p).addEventListener('click', () => printHTML(quizPaper(z, title, sub, TEACH)));
        testOnScreen(p, [{ label: 'Part A · Choose the best answer (1 mark each)', qs: z.A, marks: 1 }, { label: 'Part B · Short answer (2 marks each)', qs: z.B, marks: 2 },
          { label: 'Part C · Explain how you know (3 marks each)', qs: z.C, written: true, marks: 3 }], (r, btn) => mark(s, { score: r.score + ' / ' + r.max + ' (v' + ver + ')' }, btn));
      } else if (s.kind === 'ref') {
        p.insertAdjacentHTML('beforeend', '<p class="hint">Everything from this unit on one page. Keep it beside you for the practice and the quiz.</p><div class="row"><button class="btn ghost" data-role="print">🖨️ Print</button></div>');
        const c = cheat.cloneNode(true); c.removeAttribute('id'); c.className = 'cheatview'; p.appendChild(c);
        $('[data-role=print]', p).addEventListener('click', () => { cheat.classList.add('printme'); document.body.classList.add('printing'); window.print(); setTimeout(() => { document.body.classList.remove('printing'); cheat.classList.remove('printme'); }, 500); });
        p.appendChild(doneBtn('✓ I read it over'));
      } else if (s.kind === 'core' || s.kind === 'chal') {
        const lv = s.kind === 'core' ? 2 : 3;
        p.insertAdjacentHTML('beforeend', `<p class="hint">${lv === 2 ? 'Everyday numbers, from every lesson. A hint shows up after one wrong try.' : 'Bigger numbers and no hints. Show what you know.'}</p>`);
        drill(p, PR.buildSet(src, lv === 2 ? 10 : 8, lv, Math.random), lv, finish);
      }
      p.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    draw();

    // At the end of each lesson: "Done with this lesson?"
    lessonEls.forEach(d => {
      const s = steps.find(x => x.id === d.id + '-lesson'), body = $('.lbody', d); if (!body || $('.updone', body)) return;
      body.insertAdjacentHTML('beforeend', `<div class="updone"><button class="btn gold">✓ I finished this lesson</button> <a href="#u${unit}-path" class="small">back to my path ↑</a></div>`);
      const b = $('.updone button', body);
      b.addEventListener('click', () => mark(s, null, b));
    });
  });

  // Signed in already (here or in Avalanche HQ, same browser tab)? Show their checkmarks.
  if (AUTH.token && !TEACH && AUTH.boxes.length) api('pathProgress', { course: AUTH.boxes[0].dataset.course }).then(gotProgress).catch(() => {});
})();
