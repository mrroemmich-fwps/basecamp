/* 8/9 Collab Basecamp — unit Notes: full notes, fill in the blank, or write your own.
   Everything is built from the lessons already on the page, so the notes always match the lessons.
   Print, or download a Word file that opens in Google Docs. */
(function () {
  const $ = (s, el) => (el || document).querySelector(s), $$ = (s, el) => Array.from((el || document).querySelectorAll(s));
  const BC = window.BC || {}, store = BC.store || { get: () => null, set: () => {} };
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
  const course = (document.querySelector('.hero h1, h1') || {}).textContent || document.title.split('·')[0].trim();

  const STYLES = [
    ['full', '📄 Full notes', 'Everything filled in. Print it or keep a copy in Google Docs.'],
    ['fill', '✏️ Fill in the blank', 'The key words are blanks. Fill them in as the class goes.'],
    ['frame', '📝 Write your own', 'Questions on the left, space on the right, and a summary box.']];
  const HELP = [
    [1, '🥾 Word bank + first letters'],
    [2, '🌲 Word bank'],
    [3, '🏔️ No word bank']];

  // A bolded word or short phrase becomes a blank; a whole bolded rule (like "percent → decimal: divide by 100") stays.
  const blankable = t => !!t && t.split(' ').length <= 3 && t.length <= 28 && !/[:→=]/.test(t);

  /* ---------- read a lesson off the page ---------- */
  const clean = el => {
    const c = el.cloneNode(true);
    $$('button, .spk, .tag, .lx, script, input, [data-role="new"], .calc', c).forEach(x => x.remove());
    $$('.grid100', c).forEach(g => { const p = document.createElement('p'); p.className = 'gridnote'; p.textContent = '[' + (g.getAttribute('aria-label') || '100-square grid') + ']'; g.replaceWith(p); });
    $$('[style]', c).forEach(x => x.removeAttribute('style'));
    return c;
  };
  function readLesson(d) {
    const t = $('.ltitle strong', d), sub = $('.ltitle span', d), ican = $('.ican', d);
    let key = $('.big-idea', d);
    if (!key) key = $$('.lbody > table, .lbody > .card, .lbody > p, .lbody > ul, .lbody > ol', d).find(x => !x.closest('.try, .ex, .hq, .expd'));
    const ex = $('.ex', d);
    const icanText = ican ? clean(ican).textContent.replace(/^\s*I can\s*/i, '').replace(/\s+/g, ' ').trim() : '';
    const keyEl = key ? clean(key) : null;
    const terms = keyEl ? $$('strong, b', keyEl).map(s => s.textContent.replace(/\s+/g, ' ').trim()).filter(blankable) : [];
    return { id: d.id, num: ($('.lnum', d) || {}).textContent || '', title: t ? t.textContent : d.id, sub: sub ? sub.textContent : '',
      ican: icanText, key: keyEl, terms, ex: ex ? clean(ex) : null };
  }

  /* ---------- seeded shuffle so a word bank is the same every time it prints ---------- */
  const hash = s => { let h = 2166136261; for (const c of String(s)) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); } return h >>> 0; };
  const rng = seed => () => { seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
  const shuffle = (a, r) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const blankFor = (term, help) => {
    const n = Math.max(6, Math.min(16, term.length + 3));
    return help === 1 && /^[A-Za-z]/.test(term) ? term[0] + '_'.repeat(n - 1) : '_'.repeat(n);
  };

  /* ---------- the notes for one lesson, as print HTML ---------- */
  function lessonHTML(L, style, help) {
    const head = `<div class="nthead"><strong>Lesson ${esc(L.num)}: ${esc(L.title)}</strong>${L.sub ? ' <span>· ' + esc(L.sub) + '</span>' : ''}</div>
      ${L.ican ? `<p class="ntican"><b>I can</b> ${esc(L.ican)}</p>` : ''}`;
    if (style === 'frame') {
      const qs = L.terms.filter(t => /[A-Za-z]{3}/.test(t) && t.split(' ').length <= 4).slice(0, 3).map(t => `What does <b>${esc(/^[A-Z][a-z]/.test(t) ? t[0].toLowerCase() + t.slice(1) : t)}</b> mean?`);
      qs.push('What is the big idea of this lesson?');
      if (L.ex) qs.push('Write or draw an example.');
      return `<div class="ntlesson">${head}<table class="ntframe"><tbody>${qs.map(q => `<tr><td class="cue">${q}</td><td></td></tr>`).join('')}
        <tr><td colspan="2" class="sum">Summary in my own words:</td></tr></tbody></table></div>`;
    }
    let key = '';
    if (L.key) {
      const k = L.key.cloneNode(true);
      if (style === 'fill') $$('strong, b', k).forEach(s => { const t = s.textContent.replace(/\s+/g, ' ').trim(); if (!blankable(t)) return; const sp = document.createElement('span'); sp.className = 'blank'; sp.dataset.a = t; sp.textContent = blankFor(t, help); s.replaceWith(sp); });
      key = `<div class="ntkey">${k.outerHTML}</div>`;
    }
    let bank = '';
    if (style === 'fill' && help < 3 && L.terms.length) {
      const words = shuffle(Array.from(new Set(L.terms)), rng(hash(L.id)));
      bank = `<p class="ntbank"><b>Word bank:</b> ${words.map(esc).join(' · ')}</p>`;
    }
    const ex = L.ex ? `<div class="ntex">${L.ex.innerHTML}</div>` : '';
    return `<div class="ntlesson">${head}${key}${bank}${ex}</div>`;
  }
  function sheetHTML(o) {
    const S = STYLES.find(s => s[0] === o.style);
    const head = `<div class="wshead"><div><strong>${esc(course)} · Unit ${o.unit}: ${esc(o.unitTitle)}</strong><br><span>Notes · ${S[1].replace(/^\S+\s/, '')}</span></div><div class="wsname">Name ____________________<br>Date _____________</div></div>`;
    const body = o.lessons.map(L => lessonHTML(L, o.style, o.help)).join('');
    let key = '';
    if (o.key && o.style === 'fill') key = `<div class="wskey"><div class="wshead"><div><strong>Answer key · ${esc(course)} · Unit ${o.unit}</strong><br><span>Fill in the blank notes</span></div></div>${o.lessons.filter(L => L.terms.length).map(L => `<p><b>Lesson ${esc(L.num)}:</b> ${L.terms.map(esc).join(', ')}</p>`).join('')}</div>`;
    return head + body + key;
  }

  /* ---------- Word (.docx) file, built here in the browser ---------- */
  const xml = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
  const run = (t, o) => { o = o || {}; return `<w:r><w:rPr>${o.b ? '<w:b/>' : ''}${o.i ? '<w:i/>' : ''}${o.sz ? `<w:sz w:val="${o.sz}"/>` : ''}${o.color ? `<w:color w:val="${o.color}"/>` : ''}</w:rPr><w:t xml:space="preserve">${xml(t)}</w:t></w:r>`; };
  const para = (runs, o) => { o = o || {}; return `<w:p><w:pPr><w:spacing w:before="${o.before || 0}" w:after="${o.after == null ? 100 : o.after}"/>${o.ind ? `<w:ind w:left="${o.ind}"/>` : ''}${o.shade ? `<w:shd w:val="clear" w:color="auto" w:fill="${o.shade}"/>` : ''}</w:pPr>${runs}</w:p>`; };
  // Inline content of an element → runs (bold kept, blanks kept as underscores)
  function runsOf(el, bold) {
    let out = '';
    el.childNodes.forEach(n => {
      if (n.nodeType === 3) { const t = n.textContent.replace(/\s+/g, ' '); if (t.trim() || t === ' ') out += run(t, { b: bold }); }
      else if (n.nodeType === 1) {
        if (n.tagName === 'BR') out += '<w:r><w:br/></w:r>';
        else if (n.classList.contains('blank')) out += run(n.textContent, { b: bold });
        else out += runsOf(n, bold || /^(STRONG|B|H4)$/.test(n.tagName) || n.classList.contains('ans'));
      }
    });
    return out;
  }
  const BLOCK = /^(P|DIV|H4|LI|UL|OL|TABLE|SECTION)$/;
  // Block content → paragraphs and tables
  function blocksOf(el) {
    let out = '', inline = document.createElement('span');
    const flush = () => { if (inline.textContent.trim()) out += para(runsOf(inline)); inline = document.createElement('span'); };
    el.childNodes.forEach(n => {
      if (n.nodeType === 1 && BLOCK.test(n.tagName)) {
        flush();
        if (n.tagName === 'TABLE') out += tableOf($$('tr', n).map(tr => $$('th, td', tr).map(td => runsOf(td, td.tagName === 'TH'))));
        else if (n.tagName === 'UL' || n.tagName === 'OL') $$(':scope > li', n).forEach((li, i) => { out += para(run(n.tagName === 'OL' ? (i + 1) + '. ' : '• ') + runsOf(li), { ind: 360 }); });
        else if (n.tagName === 'H4') out += para(runsOf(n, true), { before: 80 });
        else if ($$(':scope > div, :scope > p, :scope > ul, :scope > ol, :scope > table', n).length) out += blocksOf(n);
        else if (n.textContent.trim()) out += para(runsOf(n));
      } else inline.appendChild(n.cloneNode(true));
    });
    flush();
    return out;
  }
  function tableOf(rows, o) {
    o = o || {}; const cols = Math.max(...rows.map(r => r.length)), W = 10080, widths = o.widths || Array(cols).fill(Math.floor(W / cols));
    const b = '<w:top w:val="single" w:sz="6" w:color="999999"/><w:left w:val="single" w:sz="6" w:color="999999"/><w:bottom w:val="single" w:sz="6" w:color="999999"/><w:right w:val="single" w:sz="6" w:color="999999"/><w:insideH w:val="single" w:sz="6" w:color="999999"/><w:insideV w:val="single" w:sz="6" w:color="999999"/>';
    return `<w:tbl><w:tblPr><w:tblW w:w="${W}" w:type="dxa"/><w:tblBorders>${b}</w:tblBorders><w:tblCellMar><w:left w:w="100" w:type="dxa"/><w:right w:w="100" w:type="dxa"/></w:tblCellMar></w:tblPr><w:tblGrid>${widths.map(w => `<w:gridCol w:w="${w}"/>`).join('')}</w:tblGrid>` +
      rows.map((r, ri) => `<w:tr>${o.heights ? `<w:trPr><w:trHeight w:val="${o.heights[ri] || o.heights[0]}"/></w:trPr>` : ''}${r.map((c, ci) => {
        const span = r.length === 1 && cols > 1 ? cols : 1, w = span > 1 ? W : widths[ci];
        return `<w:tc><w:tcPr><w:tcW w:w="${w}" w:type="dxa"/>${span > 1 ? `<w:gridSpan w:val="${span}"/>` : ''}</w:tcPr>${para(c || '', { after: 40 })}</w:tc>`;
      }).join('')}</w:tr>`).join('') + '</w:tbl>' + para('', { after: 80 });
  }
  function docxBody(o) {
    const S = STYLES.find(s => s[0] === o.style);
    let x = para(run(course + ' · Unit ' + o.unit + ': ' + o.unitTitle, { b: true, sz: 32 }), { after: 40 }) +
      para(run('Notes · ' + S[1].replace(/^\S+\s/, ''), { color: '555555' }) + run('      Name: ______________________', {}), { after: 200 });
    o.lessons.forEach(L => {
      x += para(run('Lesson ' + L.num + ': ' + L.title, { b: true, sz: 28 }) + (L.sub ? run('  · ' + L.sub, { color: '555555' }) : ''), { before: 240, after: 60 });
      if (L.ican) x += para(run('I can ', { b: true }) + run(L.ican), { after: 120 });
      if (o.style === 'frame') {
        const tmp = document.createElement('div'); tmp.innerHTML = lessonHTML(L, 'frame', o.help);
        const rows = $$('.ntframe tr', tmp).map(tr => $$('td', tr).map(td => runsOf(td)));
        x += tableOf(rows, { widths: [3200, 6880], heights: rows.map((r, i) => i === rows.length - 1 ? 1800 : 1300) });
        return;
      }
      const tmp = document.createElement('div'); tmp.innerHTML = lessonHTML(L, o.style, o.help);
      const key = $('.ntkey', tmp), bank = $('.ntbank', tmp), ex = $('.ntex', tmp);
      if (key) x += blocksOf(key);
      if (bank) x += para(runsOf(bank), { shade: 'F3EFE3', before: 60 });
      if (ex) x += blocksOf(ex);
    });
    return x;
  }
  // A tiny zip writer (files stored, not compressed) — all a .docx needs.
  const CRC = (() => { const t = new Uint32Array(256); for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; } return t; })();
  const crc32 = b => { let c = 0xFFFFFFFF; for (let i = 0; i < b.length; i++) c = CRC[(c ^ b[i]) & 0xFF] ^ (c >>> 8); return (c ^ 0xFFFFFFFF) >>> 0; };
  function zip(files) {
    const enc = new TextEncoder(), parts = [], cd = []; let off = 0;
    const u16 = n => [n & 255, n >>> 8 & 255], u32 = n => [n & 255, n >>> 8 & 255, n >>> 16 & 255, n >>> 24 & 255];
    files.forEach(([name, text]) => {
      const nm = enc.encode(name), data = enc.encode(text), c = crc32(data);
      const local = new Uint8Array([0x50, 0x4b, 3, 4, ...u16(20), 0, 0, 0, 0, 0, 0, 0x21, 0, ...u32(c), ...u32(data.length), ...u32(data.length), ...u16(nm.length), 0, 0]);
      parts.push(local, nm, data);
      cd.push(new Uint8Array([0x50, 0x4b, 1, 2, ...u16(20), ...u16(20), 0, 0, 0, 0, 0, 0, 0x21, 0, ...u32(c), ...u32(data.length), ...u32(data.length), ...u16(nm.length), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ...u32(off)]), nm);
      off += local.length + nm.length + data.length;
    });
    const cdSize = cd.reduce((a, p) => a + p.length, 0);
    const end = new Uint8Array([0x50, 0x4b, 5, 6, 0, 0, 0, 0, ...u16(files.length), ...u16(files.length), ...u32(cdSize), ...u32(off), 0, 0]);
    return new Blob([...parts, ...cd, end], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
  }
  function docx(o) {
    const W = 'xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"';
    const doc = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:document ${W}><w:body>${docxBody(o)}<w:sectPr><w:pgSz w:w="12240" w:h="15840"/><w:pgMar w:top="1080" w:right="1080" w:bottom="1080" w:left="1080" w:header="720" w:footer="720" w:gutter="0"/></w:sectPr></w:body></w:document>`;
    const styles = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:styles ${W}><w:docDefaults><w:rPrDefault><w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/><w:sz w:val="24"/></w:rPr></w:rPrDefault><w:pPrDefault><w:pPr><w:spacing w:line="300" w:lineRule="auto"/></w:pPr></w:pPrDefault></w:docDefaults></w:styles>`;
    return zip([
      ['[Content_Types].xml', '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/><Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/></Types>'],
      ['_rels/.rels', '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships>'],
      ['word/_rels/document.xml.rels', '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>'],
      ['word/document.xml', doc], ['word/styles.xml', styles]]);
  }

  /* ---------- the Notes box in each unit ---------- */
  $$('.notes[data-unit]').forEach(box => {
    const sec = box.closest('section[id^="unit-"]'); if (!sec) return;
    const unit = Number(sec.id.split('-')[1]), unitTitle = ($('.unitHead h2', sec) || {}).textContent || '';
    const lessons = $$('details.lesson', sec).map(readLesson);
    if (!lessons.length) { box.innerHTML = '<p class="hint">Notes are coming soon.</p>'; return; }
    let style = store.get('bc-notes-style') || 'full', help = Number(store.get('bc-notes-help')) || 2;
    if (!STYLES.some(s => s[0] === style)) style = 'full';
    box.innerHTML = `<div class="ntstyles" role="group" aria-label="Notes style">${STYLES.map(s => `<button type="button" data-style="${s[0]}">${s[1]}</button>`).join('')}</div>
      <p class="hint ntdesc"></p>
      <div class="wsform">
        <fieldset><legend>Lessons <button type="button" class="linkbtn" data-all="1">All</button> <button type="button" class="linkbtn" data-all="0">None</button></legend>
          ${lessons.map(L => `<label class="chk"><input type="checkbox" value="${L.id}" checked> ${esc(L.num)}. ${esc(L.title)}</label>`).join('')}</fieldset>
        <div class="wsrow ntfill"><label>Help <select data-k="help">${HELP.map(h => `<option value="${h[0]}">${h[1]}</option>`).join('')}</select></label>
          ${BC.PREVIEW ? '<label class="chk"><input type="checkbox" data-k="key" checked> Answer key</label>' : ''}</div>
        <div class="wsrow"><button class="btn" data-role="prev">Preview</button><button class="btn gold" data-role="print">🖨️ Print</button><button class="btn ghost" data-role="docx">⬇️ Download for Google Docs</button></div>
        <p class="hint">To use it in Google Docs: download, then open the file from Google Drive (or drag it into Drive) and choose <b>Open with → Google Docs</b>. Type right into the blanks and boxes.</p>
      </div><div class="wsprev"></div>`;
    $('[data-k=help]', box).value = String(help);
    const paint = () => {
      $$('[data-style]', box).forEach(b => b.setAttribute('aria-pressed', b.dataset.style === style));
      $('.ntdesc', box).textContent = STYLES.find(s => s[0] === style)[2];
      $('.ntfill', box).style.display = style === 'fill' ? '' : 'none';
    };
    paint();
    const opts = () => {
      const pick = $$('.wsform input[type=checkbox][value]', box).filter(c => c.checked).map(c => lessons.find(L => L.id === c.value));
      if (!pick.length) { $('.wsprev', box).innerHTML = '<p class="fb no">Pick at least one lesson.</p>'; return null; }
      const k = $('[data-k=key]', box);
      return { lessons: pick, style, help, unit, unitTitle, key: BC.PREVIEW && k && k.checked };
    };
    const preview = () => { const o = opts(); if (o) $('.wsprev', box).innerHTML = '<div class="wspaper ntpaper">' + sheetHTML(o) + '</div>'; };
    $$('[data-style]', box).forEach(b => b.addEventListener('click', () => { style = b.dataset.style; store.set('bc-notes-style', style); $$('.notes[data-unit]').forEach(n => n._sync && n._sync(style)); paint(); if ($('.wsprev', box).innerHTML) preview(); }));
    box._sync = s => { style = s; paint(); };
    $('[data-k=help]', box).addEventListener('change', e => { help = Number(e.target.value); store.set('bc-notes-help', help); if ($('.wsprev', box).innerHTML) preview(); });
    $$('[data-all]', box).forEach(b => b.addEventListener('click', () => $$('.wsform input[type=checkbox][value]', box).forEach(c => c.checked = b.dataset.all === '1')));
    $('[data-role=prev]', box).addEventListener('click', preview);
    $('[data-role=print]', box).addEventListener('click', () => {
      const o = opts(); if (!o) return;
      let out = document.getElementById('ws-print'); if (!out) { out = document.createElement('div'); out.id = 'ws-print'; out.className = 'ws'; document.body.appendChild(out); }
      out.innerHTML = '<div class="ntpaper">' + sheetHTML(o) + '</div>'; out.classList.add('printme'); document.body.classList.add('printing'); window.print();
      setTimeout(() => { document.body.classList.remove('printing'); out.classList.remove('printme'); }, 500);
    });
    $('[data-role=docx]', box).addEventListener('click', () => {
      const o = opts(); if (!o) return;
      const blob = docx(o), a = document.createElement('a');
      const name = (course + ' Unit ' + unit + ' notes' + (o.lessons.length < lessons.length ? ' (lesson ' + o.lessons.map(L => L.num).join(', ') + ')' : '') + ' - ' + STYLES.find(s => s[0] === style)[1].replace(/^\S+\s/, '')).replace(/[\\/:*?"<>|]/g, '');
      a.href = URL.createObjectURL(blob); a.download = name + '.docx'; document.body.appendChild(a); a.click();
      setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
    });
  });

  window.NOTES = { readLesson, sheetHTML, docx };   // used by the automated tests
})();
