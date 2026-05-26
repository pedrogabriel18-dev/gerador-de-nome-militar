/**
 * generator.js
 * Lógica de geração de nomes militares
 * WarName Generator v1.0
 */

const Generator = (() => {
  /** Retorna item aleatório de um array */
  function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  /**
   * Gera um único nome militar
   * @param {string} branch   - army | navy | airforce | special
   * @param {string} style    - modern | futuristic | classic
   * @param {string} nat      - BR | US | RU | DE | UK | CN
   * @param {string|null} customRank - patente manual ou null
   * @param {string} lang     - PT | EN
   * @returns {string}
   */
  function generateOne(branch, style, nat, customRank, lang) {
    const data = DB[lang];

    const adj  = pick(data.adjectives[style]);
    const noun = pick(data.nouns[style]);

    let rank;
    if (customRank && customRank.trim().length > 0) {
      rank = customRank.trim();
    } else if (nat && data.nationalities[nat]) {
      rank = pick(data.nationalities[nat]);
    } else {
      rank = pick(data.ranks[branch]);
    }

    return `${rank} ${adj} ${noun}`;
  }

  /**
   * Gera múltiplos nomes sem repetições consecutivas
   * @param {number} count
   * @param {string} branch
   * @param {string} style
   * @param {string} nat
   * @param {string|null} customRank
   * @param {string} lang
   * @param {string[]} lastGenerated - nomes gerados na rodada anterior
   * @returns {string[]}
   */
  function generateMany(count, branch, style, nat, customRank, lang, lastGenerated = []) {
    const results = [];
    const maxAttempts = count * 15;
    let attempts = 0;

    while (results.length < count && attempts < maxAttempts) {
      const name = generateOne(branch, style, nat, customRank, lang);
      const isDuplicate =
        results.includes(name) || lastGenerated.includes(name);
      if (!isDuplicate) {
        results.push(name);
      }
      attempts++;
    }

    // Fallback: se não conseguir sem repetição, adiciona mesmo assim
    while (results.length < count) {
      results.push(generateOne(branch, style, nat, customRank, lang));
    }

    return results;
  }

  return { generateOne, generateMany, pick };
})();
