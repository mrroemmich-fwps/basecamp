/* 8/9 Collab Basecamp — font choice (the "Ff" reading-tools button).
   Standard, Serif (Merriweather) or Dyslexia-friendly (OpenDyslexic). Remembered on this device (bc-font).
   Joins the other reading tools at the bottom right if the page has them; otherwise makes its own spot.
   Styles: assets/fontpick.css */
(function () {
  const FONTS = [['std', 'Standard'], ['serif', 'Serif'], ['dys', 'Dyslexia-friendly']];
  const root = document.documentElement;
  const get = k => { try { return localStorage.getItem(k); } catch (e) { return null; } };
  const set = (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} };
  const apply = k => { if (k && k !== 'std') root.setAttribute('data-font', k); else root.removeAttribute('data-font'); };
  apply(get('bc-font'));   // as early as possible, so the page doesn't flash the old font

  function mount() {
    let tools = document.querySelector('.a11y');
    if (!tools) { tools = document.createElement('div'); tools.className = 'a11y'; tools.setAttribute('aria-label', 'Reading tools'); document.body.appendChild(tools); }
    const box = document.createElement('div');
    box.className = 'fonts'; box.id = 'fontPick'; box.hidden = true;
    box.setAttribute('role', 'group'); box.setAttribute('aria-label', 'Font');
    box.innerHTML = '<span class="lbl">Font</span>' + FONTS.map(([k, name]) =>
      `<button type="button" data-font="${k}" aria-pressed="false" title="${name}"><span aria-hidden="true" class="f-${k}">Aa</span><span class="sr">${name}</span></button>`).join('');
    const btn = document.createElement('button');
    btn.type = 'button'; btn.dataset.t = 'font'; btn.title = 'Font';
    btn.setAttribute('aria-expanded', 'false'); btn.setAttribute('aria-controls', 'fontPick');
    btn.innerHTML = '<span aria-hidden="true" class="f-btn">Ff</span><span class="sr">Font</span>';
    tools.prepend(btn); tools.prepend(box);

    const setFont = k => {
      if (!FONTS.some(f => f[0] === k)) k = 'std';
      apply(k); set('bc-font', k);
      box.querySelectorAll('[data-font]').forEach(b => b.setAttribute('aria-pressed', b.dataset.font === k));
      btn.classList.toggle('on', k !== 'std');
    };
    const open = on => {
      box.hidden = !on; btn.setAttribute('aria-expanded', on);
      if (on) { document.dispatchEvent(new CustomEvent('bc-picker', { detail: 'font' })); (box.querySelector('[aria-pressed=true]') || box.querySelector('button')).focus(); }
    };
    btn.addEventListener('click', () => open(box.hidden));
    box.addEventListener('click', e => { const b = e.target.closest('[data-font]'); if (b) setFont(b.dataset.font); });
    box.addEventListener('keydown', e => {
      const i = FONTS.findIndex(f => f[0] === (root.getAttribute('data-font') || 'std'));
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); setFont(FONTS[Math.min(FONTS.length - 1, i + 1)][0]); box.querySelector('[aria-pressed=true]').focus(); }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); setFont(FONTS[Math.max(0, i - 1)][0]); box.querySelector('[aria-pressed=true]').focus(); }
      if (e.key === 'Escape') { open(false); btn.focus(); }
    });
    document.addEventListener('bc-picker', e => { if (e.detail !== 'font' && !box.hidden) open(false); });
    document.addEventListener('click', e => { if (!box.hidden && !e.target.closest('.a11y')) open(false); });
    setFont(get('bc-font') || 'std');
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount); else mount();
})();
