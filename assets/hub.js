/* ============================================================
   8/9 Collab Basecamp: Parent and Teacher pages.
   ============================================================
   EDIT HERE: contact details and private links.
   Leave any of these as '' and that line simply won't show.
   ============================================================ */
window.HUB = {
  teacher: '',        // how parents should address you, e.g. 'Mr. Smith'
  email: 'michael.roemmich@sturgeon.ab.ca',          // school email for parents
  phone: '825-349-0021',          // school office phone
  school: '',         // school name
  bestTimes: '',      // e.g. 'Email anytime; I reply within one school day.'
  teacherApp: '',     // your Avalanche HQ teacher app link (the one behind your school login)
  subFolder: ''       // link to your sub plans folder in Google Drive (behind your school login)
};

(function () {
  'use strict';
  const H = window.HUB, $ = (s, el) => (el || document).querySelector(s), $$ = (s, el) => [...(el || document).querySelectorAll(s)];
  const COURSES = [
    ['8', 'Mathematics', 'math8'], ['8', 'Language Arts', 'la8'], ['8', 'Science', 'science8'], ['8', 'Social Studies', 'social8'], ['8', 'Career & Financial Literacy', 'cefl8'],
    ['9', 'Mathematics', 'math9'], ['9', 'Language Arts', 'la9'], ['9', 'Science', 'science9'], ['9', 'Social Studies', 'social9'], ['9', 'Career & Financial Literacy', 'cefl9']];

  /* ---------- contact details (shown only if filled in) ---------- */
  $$('[data-hub]').forEach(el => {
    const k = el.dataset.hub, v = H[k];
    if (!v) { const row = el.closest('[data-hub-row]'); if (row) row.hidden = true; return; }
    if (el.tagName === 'A') { el.href = k === 'email' ? 'mailto:' + v : k === 'phone' ? 'tel:' + v.replace(/[^\d+]/g, '') : v; if (!el.dataset.keep) el.textContent = v; }
    else el.textContent = v;
  });
  $$('[data-hub-empty]').forEach(el => { el.hidden = !!H[el.dataset.hubEmpty]; });

  /* ---------- read each course page to see which units are open ---------- */
  const parse = html => {
    const cur = Number((html.match(/current:\s*(\d+)/) || [])[1]);
    const units = [...html.matchAll(/\{\s*n:\s*(\d+),\s*title:\s*"((?:[^"\\]|\\.)*)",\s*open:\s*(true|false)\s*\}/g)]
      .map(m => ({ n: Number(m[1]), title: JSON.parse('"' + m[2] + '"'), open: m[3] === 'true' }));
    return { cur, units };
  };
  const load = c => fetch('../' + c[2] + '/', { cache: 'no-cache' }).then(r => r.ok ? r.text() : Promise.reject()).then(parse).then(d => ({ grade: c[0], subject: c[1], folder: c[2], ...d }));
  const all = Promise.allSettled(COURSES.map(load)).then(rs => rs.map((r, i) => r.status === 'fulfilled' ? r.value : { grade: COURSES[i][0], subject: COURSES[i][1], folder: COURSES[i][2], cur: 0, units: [] }));
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  // Parents: "What we're learning now"
  const now = $('#nowLearning');
  if (now) all.then(list => {
    now.innerHTML = ['8', '9'].map(g => `<div class="nowcol"><h3><span class="gmark g${g}">${g}</span> Grade ${g}</h3><ul>` +
      list.filter(c => c.grade === g).map(c => { const u = c.units.find(x => x.n === c.cur);
        return `<li><a href="../${c.folder}/${u ? '#unit-' + u.n : ''}"><strong>${esc(c.subject)}</strong><span>${u ? 'Unit ' + u.n + ': ' + esc(u.title) : 'Open the course page'}</span></a></li>`; }).join('') + '</ul></div>').join('');
  });

  /* ---------- teacher code ---------- */
  const T = window.BC_TEACHER, gate = $('#gate');
  const paintGate = () => {
    if (!gate || !T) return; const ok = T.ok;
    $('.locked', gate).hidden = ok; $('.unlocked', gate).hidden = !ok;
    document.body.classList.toggle('teacher-ok', ok);
  };
  if (gate && T) {
    paintGate();
    $('form', gate).addEventListener('submit', e => {
      e.preventDefault(); const inp = $('input', gate), fb = $('.fb', gate);
      if (T.check(inp.value)) { T.unlock(); T.ok = true; inp.value = ''; fb.textContent = ''; paintGate(); drawStatus(); }
      else { fb.className = 'fb no'; fb.textContent = 'That code didn\'t match. Try again.'; }
    });
    $('[data-role=lock]', gate).addEventListener('click', () => { T.lock(); T.ok = false; paintGate(); drawStatus(); });
  }

  // Teachers: course status table and curriculum at a glance
  const status = $('#courseStatus'), glance = $('#glance');
  function drawStatus() {
    if (!status) return;
    all.then(list => {
      const ok = T && T.ok;
      status.innerHTML = `<table class="status"><thead><tr><th>Course</th><th>On the trail now</th><th>Open</th><th>Links</th></tr></thead><tbody>` +
        list.map(c => { const u = c.units.find(x => x.n === c.cur), open = c.units.filter(x => x.open).length;
          return `<tr><td><span class="gmark g${c.grade}">${c.grade}</span> ${esc(c.subject)}</td><td>${u ? 'Unit ' + u.n + ': ' + esc(u.title) : '–'}</td><td>${c.units.length ? open + ' of ' + c.units.length : '–'}</td>
            <td class="links"><a href="../${c.folder}/">Student view</a>${ok ? ` <a href="../${c.folder}/?preview">Preview all</a>` : ''}</td></tr>`; }).join('') + '</tbody></table>' +
        (ok ? '' : '<p class="hint">Enter the teacher code above to add preview links (hidden units and answer keys).</p>');
      if (glance) glance.innerHTML = list.map(c => `<details class="glance"><summary><span class="gmark g${c.grade}">${c.grade}</span> ${esc(c.subject)}</summary><ol>` +
        c.units.map(u => `<li><a href="../${c.folder}/${ok ? '?preview' : ''}#unit-${u.n}">${esc(u.title)}</a> <span class="chip ${u.n === c.cur ? 'now' : u.open ? 'open' : 'soon'}">${u.n === c.cur ? 'On the trail now' : u.open ? 'Open' : 'Coming soon'}</span></li>`).join('') + '</ol></details>').join('');
    });
  }
  drawStatus();
})();
