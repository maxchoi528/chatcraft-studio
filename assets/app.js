document.addEventListener('DOMContentLoaded', () => {
  // 1. Hero Raw Copy-Paste vs ChatCraft Specimen Switcher
  const modeBtns = document.querySelectorAll('[data-specimen-mode]');
  const bodyEl = document.getElementById('specimen-output');
  const cleanView = document.getElementById('specimen-clean');
  const rawView = document.getElementById('specimen-raw');

  if (modeBtns.length && bodyEl && cleanView && rawView) {
    modeBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const mode = btn.getAttribute('data-specimen-mode');
        modeBtns.forEach((b) => b.setAttribute('aria-selected', String(b === btn)));
        if (mode === 'raw') {
          cleanView.hidden = true;
          rawView.hidden = false;
          bodyEl.className = 'specimen-body raw-mess';
        } else {
          cleanView.hidden = false;
          rawView.hidden = true;
          bodyEl.className = mode === 'nord' ? 'specimen-body dark-nord' : 'specimen-body';
        }
      });
    });
  }

  // 2. Obsidian Section Interactive Theme Sampler (reflects real exporter palettes)
  const PALETTES = {
    modern: {
      name: 'Default (Modern)', bg: '#ffffff', fg: '#0f172a', border: '#e2e8f0', accent: '#1d4ed8', codeBg: '#0f172a', codeFg: '#f8fafc', tag: 'Free + Pro'
    },
    flexoki: {
      name: 'Flexoki Paper', bg: '#fffcf0', fg: '#100f0f', border: '#e6e4d9', accent: '#205ea6', codeBg: '#f2f0e5', codeFg: '#100f0f', tag: 'Pro Theme'
    },
    nord: {
      name: 'Nord', bg: '#2e3440', fg: '#eceff4', border: '#4c566a', accent: '#88c0d0', codeBg: '#242933', codeFg: '#d8dee9', tag: 'Pro Theme'
    },
    catppuccin: {
      name: 'Catppuccin', bg: '#1e1e2e', fg: '#cdd6f4', border: '#313244', accent: '#89b4fa', codeBg: '#181825', codeFg: '#cdd6f4', tag: 'Pro Theme'
    },
    gruvbox: {
      name: 'Gruvbox', bg: '#282828', fg: '#ebdbb2', border: '#3c3836', accent: '#fabd2f', codeBg: '#1d2021', codeFg: '#ebdbb2', tag: 'Pro Theme'
    },
    everforest: {
      name: 'Everforest', bg: '#2d353b', fg: '#d3c6aa', border: '#475258', accent: '#a7c080', codeBg: '#232a2e', codeFg: '#d3c6aa', tag: 'Pro Theme'
    }
  };

  const sampleDoc = document.getElementById('live-theme-doc');
  const sampleTitle = document.getElementById('live-theme-title');
  const sampleBadge = document.getElementById('live-theme-badge');
  const sampleCode = document.getElementById('live-theme-code');
  const themeChips = document.querySelectorAll('[data-theme-pick]');

  if (sampleDoc && themeChips.length) {
    const applyPalette = (key) => {
      const p = PALETTES[key] || PALETTES.modern;
      sampleDoc.style.backgroundColor = p.bg;
      sampleDoc.style.color = p.fg;
      sampleDoc.style.borderColor = p.border;
      if (sampleTitle) sampleTitle.textContent = p.name;
      if (sampleBadge) {
        sampleBadge.textContent = p.tag;
        sampleBadge.style.color = p.accent;
      }
      if (sampleCode) {
        sampleCode.style.backgroundColor = p.codeBg;
        sampleCode.style.color = p.codeFg;
        sampleCode.style.border = '1px solid ' + p.border;
      }
    };

    themeChips.forEach((chip) => {
      chip.addEventListener('click', () => {
        const key = chip.getAttribute('data-theme-pick');
        themeChips.forEach((c) => c.setAttribute('aria-pressed', String(c === chip)));
        applyPalette(key);
      });
    });
    applyPalette('nord');
  }
});
