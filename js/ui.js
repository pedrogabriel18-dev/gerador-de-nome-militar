/**
 * ui.js
 * Manipulação de DOM, cursor, temas, i18n e histórico
 * WarName Generator v1.0
 */

const UI = (() => {

  /* ── CURSOR CROSSHAIR ──────────────────────────────────── */
  const cursor = document.getElementById('cursor-crosshair');

  function initCursor() {
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top  = e.clientY + 'px';
    });

    document.addEventListener('mousedown', () => {
      document.body.classList.add('cursor-click');
    });
    document.addEventListener('mouseup', () => {
      document.body.classList.remove('cursor-click');
    });

    // Hover em elementos interativos
    const interactiveSelectors = 'button, input, a, [role="button"], label';
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest(interactiveSelectors)) {
        document.body.classList.add('cursor-hover');
      }
    });
    document.addEventListener('mouseout', (e) => {
      if (e.target.closest(interactiveSelectors)) {
        document.body.classList.remove('cursor-hover');
      }
    });

    // Esconde cursor quando mouse sai da janela
    document.addEventListener('mouseleave', () => {
      cursor.style.opacity = '0';
    });
    document.addEventListener('mouseenter', () => {
      cursor.style.opacity = '1';
    });
  }

  /* ── THEME ─────────────────────────────────────────────── */
  function initTheme() {
    const saved = localStorage.getItem('warname_theme') || 'dark';
    applyTheme(saved);
  }

  function applyTheme(theme) {
    document.body.classList.remove('dark', 'light');
    document.body.classList.add(theme);
    localStorage.setItem('warname_theme', theme);
    const btn = document.getElementById('btn-theme');
    if (btn) btn.textContent = theme === 'dark' ? '☀' : '🌑';
  }

  function toggleTheme() {
    const isDark = document.body.classList.contains('dark');
    applyTheme(isDark ? 'light' : 'dark');
  }

  /* ── I18N ──────────────────────────────────────────────── */
  function applyLang(lang) {
    const t = DB[lang].ui;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.textContent = t[key];
    });
  }

  /* ── FILTER BUTTONS ────────────────────────────────────── */
  function initFilterButtons(onChange) {
    document.querySelectorAll('.filter-btn[data-filter]').forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');
        // Deactivate siblings in same filter group
        document.querySelectorAll(`.filter-btn[data-filter="${filter}"]`)
          .forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        onChange(filter, btn.getAttribute('data-value'));
      });
    });
  }

  /* ── RANK TOGGLE ───────────────────────────────────────── */
  function initRankToggle(onToggle) {
    const btnAuto   = document.getElementById('rank-auto');
    const btnCustom = document.getElementById('rank-custom');
    const input     = document.getElementById('custom-rank-input');

    btnAuto.addEventListener('click', () => {
      btnAuto.classList.add('active');
      btnCustom.classList.remove('active');
      input.classList.add('hidden');
      onToggle(false);
    });

    btnCustom.addEventListener('click', () => {
      btnCustom.classList.add('active');
      btnAuto.classList.remove('active');
      input.classList.remove('hidden');
      input.focus();
      onToggle(true);
    });
  }

  /* ── COUNT SLIDER ──────────────────────────────────────── */
  function initCountSlider(onChange) {
    const slider  = document.getElementById('count-slider');
    const display = document.getElementById('count-display');
    slider.addEventListener('input', () => {
      display.textContent = slider.value;
      onChange(Number(slider.value));
    });
  }

  /* ── RESULT DISPLAY ────────────────────────────────────── */
  function showResults(names, lang) {
    const t           = DB[lang].ui;
    const placeholder = document.getElementById('result-placeholder');
    const list        = document.getElementById('result-list');
    const logo        = document.getElementById('logo-text');

    // Glitch the logo briefly
    logo.classList.remove('glitch');
    void logo.offsetWidth; // reflow
    logo.classList.add('glitch');
    setTimeout(() => logo.classList.remove('glitch'), 400);

    placeholder.style.display = 'none';
    list.innerHTML = '';

    names.forEach((name, i) => {
      const item = document.createElement('div');
      item.className = 'result-item';
      item.style.animationDelay = `${i * 70}ms`;

      const nameEl = document.createElement('span');
      nameEl.className = 'result-name';
      nameEl.textContent = name;

      const copyBtn = document.createElement('button');
      copyBtn.className = 'copy-btn';
      copyBtn.textContent = t.copy;
      copyBtn.addEventListener('click', () => copyToClipboard(name, copyBtn, t));

      item.appendChild(nameEl);
      item.appendChild(copyBtn);
      list.appendChild(item);
    });
  }

  function resetResultPanel() {
    const placeholder = document.getElementById('result-placeholder');
    const list        = document.getElementById('result-list');
    placeholder.style.display = '';
    list.innerHTML = '';
  }

  /* ── CLIPBOARD ─────────────────────────────────────────── */
  function copyToClipboard(text, btn, t) {
    navigator.clipboard.writeText(text).catch(() => {
      // Fallback for older browsers
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    });
    if (btn) {
      btn.textContent = t.copied;
      btn.classList.add('copied');
      setTimeout(() => {
        btn.textContent = t.copy;
        btn.classList.remove('copied');
      }, 1800);
    }
  }

  /* ── HISTORY ───────────────────────────────────────────── */
  function renderHistory(history, lang, onCopy, onClear) {
    const list      = document.getElementById('history-list');
    const countEl   = document.getElementById('history-count');
    const clearBtn  = document.getElementById('btn-clear');
    const t         = DB[lang].ui;

    countEl.textContent = history.length;
    list.innerHTML = '';

    if (history.length === 0) {
      clearBtn.classList.add('hidden');
      const empty = document.createElement('span');
      empty.className = 'history-empty';
      empty.setAttribute('data-i18n', 'noHistory');
      empty.textContent = t.noHistory;
      list.appendChild(empty);
      return;
    }

    clearBtn.classList.remove('hidden');
    clearBtn.onclick = onClear;

    history.forEach((name, i) => {
      const tag = document.createElement('button');
      tag.className = 'history-tag';
      tag.textContent = name;
      tag.title = t.copy;
      tag.style.animationDelay = `${Math.min(i, 12) * 30}ms`;
      tag.addEventListener('click', () => onCopy(name, t));
      list.appendChild(tag);
    });
  }

  /* ── GENERATE BUTTON LABEL ─────────────────────────────── */
  function updateGenerateLabel(count, lang) {
    const t   = DB[lang].ui;
    const lbl = document.getElementById('gen-label');
    if (lbl) lbl.textContent = count > 1 ? t.generateMulti : t.generate;
  }

  /* ── FOOTER YEAR ───────────────────────────────────────── */
  function setYear() {
    const el = document.getElementById('year');
    if (el) el.textContent = new Date().getFullYear();
  }

  return {
    initCursor,
    initTheme,
    applyTheme,
    toggleTheme,
    applyLang,
    initFilterButtons,
    initRankToggle,
    initCountSlider,
    showResults,
    resetResultPanel,
    copyToClipboard,
    renderHistory,
    updateGenerateLabel,
    setYear,
  };
})();
