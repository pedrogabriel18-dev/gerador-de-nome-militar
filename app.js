/**
 * app.js
 * Controlador principal — inicializa estado, eventos e fluxo da aplicação
 * WarName Generator v1.0
 */

(() => {
  /* ── ESTADO ──────────────────────────────────────────── */
  const state = {
    lang:          'PT',
    branch:        'army',
    style:         'modern',
    nat:           'US',
    useCustomRank: false,
    count:         1,
    lastGenerated: [],
    history:       loadHistory(),
  };

  /* ── INIT ────────────────────────────────────────────── */
  function init() {
    UI.initCursor();
    UI.initTheme();
    UI.applyLang(state.lang);
    UI.setYear();

    UI.initFilterButtons((filter, value) => {
      state[filter === 'nat' ? 'nat' : filter] = value;
    });

    UI.initRankToggle((isCustom) => {
      state.useCustomRank = isCustom;
    });

    UI.initCountSlider((count) => {
      state.count = count;
      UI.updateGenerateLabel(count, state.lang);
    });

    // Render history on load
    UI.renderHistory(
      state.history,
      state.lang,
      (name, t) => UI.copyToClipboard(name, null, t),
      clearHistory
    );

    // Language toggle
    document.getElementById('btn-lang').addEventListener('click', () => {
      state.lang = state.lang === 'PT' ? 'EN' : 'PT';
      document.getElementById('btn-lang').textContent =
        state.lang === 'PT' ? 'PT | EN' : 'EN | PT';
      document.documentElement.lang = state.lang === 'PT' ? 'pt-BR' : 'en';
      UI.applyLang(state.lang);
      UI.updateGenerateLabel(state.count, state.lang);
      UI.renderHistory(
        state.history,
        state.lang,
        (name, t) => UI.copyToClipboard(name, null, t),
        clearHistory
      );
    });

    // Theme toggle
    document.getElementById('btn-theme').addEventListener('click', () => {
      UI.toggleTheme();
    });

    // Generate
    document.getElementById('btn-generate').addEventListener('click', handleGenerate);

    // Keyboard shortcut: Enter = generate
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && e.target.tagName !== 'INPUT') {
        handleGenerate();
      }
    });
  }

  /* ── GENERATE ────────────────────────────────────────── */
  function handleGenerate() {
    const customRank = state.useCustomRank
      ? document.getElementById('custom-rank-input').value
      : null;

    const names = Generator.generateMany(
      state.count,
      state.branch,
      state.style,
      state.nat,
      customRank,
      state.lang,
      state.lastGenerated
    );

    state.lastGenerated = [...names];

    UI.showResults(names, state.lang);
    addToHistory(names);
  }

  /* ── HISTORY ─────────────────────────────────────────── */
  function addToHistory(names) {
    // Prepend new names, avoid full duplicates, cap at 50
    const merged = [...names, ...state.history];
    // Remove consecutive duplicates at the top (RN02)
    const deduped = merged.filter((name, i) => i === 0 || name !== merged[i - 1]);
    state.history = deduped.slice(0, 50);
    saveHistory();
    UI.renderHistory(
      state.history,
      state.lang,
      (name, t) => UI.copyToClipboard(name, null, t),
      clearHistory
    );
  }

  function clearHistory() {
    state.history = [];
    saveHistory();
    UI.renderHistory(
      state.history,
      state.lang,
      (name, t) => UI.copyToClipboard(name, null, t),
      clearHistory
    );
  }

  /* ── LOCALSTORAGE ────────────────────────────────────── */
  function saveHistory() {
    try {
      localStorage.setItem('warname_history', JSON.stringify(state.history));
    } catch (e) {
      console.warn('WarName: unable to save history.', e);
    }
  }

  function loadHistory() {
    try {
      const raw = localStorage.getItem('warname_history');
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  /* ── START ───────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', init);
})();
