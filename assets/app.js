document.addEventListener('DOMContentLoaded', () => {
  const modeBtns = document.querySelectorAll('[data-specimen-mode]');
  const themeChips = document.querySelectorAll('[data-specimen-theme]');
  const bodyEl = document.getElementById('specimen-output');
  const cleanView = document.getElementById('specimen-clean');
  const rawView = document.getElementById('specimen-raw');
  const themeBar = document.getElementById('specimen-themes');
  if (!bodyEl || !cleanView || !rawView) return;

  modeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const mode = btn.getAttribute('data-specimen-mode');
      modeBtns.forEach((b) => b.setAttribute('aria-selected', String(b === btn)));
      if (mode === 'raw') {
        cleanView.hidden = true;
        rawView.hidden = false;
        bodyEl.className = 'specimen-body raw-mess';
        if (themeBar) themeBar.style.visibility = 'hidden';
      } else {
        cleanView.hidden = false;
        rawView.hidden = true;
        const activeTheme = document.querySelector('[data-specimen-theme][aria-pressed="true"]')?.getAttribute('data-specimen-theme') || 'light';
        bodyEl.className = activeTheme === 'nord' ? 'specimen-body dark-nord' : 'specimen-body';
        if (themeBar) themeBar.style.visibility = 'visible';
      }
    });
  });

  themeChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      const th = chip.getAttribute('data-specimen-theme');
      themeChips.forEach((c) => c.setAttribute('aria-pressed', String(c === chip)));
      if (!cleanView.hidden) {
        bodyEl.className = th === 'nord' ? 'specimen-body dark-nord' : 'specimen-body';
      }
    });
  });
});
