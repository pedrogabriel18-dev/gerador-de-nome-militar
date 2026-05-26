/**
 * database.js
 * Banco de dados de nomes, patentes, adjetivos e traduções
 * WarName Generator v1.0
 */

const DB = {
  PT: {
    ranks: {
      army:     ["Cabo", "Sgt.", "2º Ten.", "1º Ten.", "Capitão", "Major", "Ten. Cel.", "Coronel", "General"],
      navy:     ["Marinheiro", "Cabo", "Sgt.", "Sub-Of.", "Guarda-Mar.", "Ten.", "Cap-Ten.", "Comodoro", "Almirante"],
      airforce: ["Av.", "Cabo", "Sgt.", "Sub-Of.", "Asp.", "Ten.", "Capitão", "Major", "Brigadeiro"],
      special:  ["Operador", "Spec.", "Sr. Spec.", "Mestre", "Chefe", "Comandante", "Diretor", "Sombra", "Fantasma"],
    },
    adjectives: {
      modern:     ["Ferro", "Aço", "Titânio", "Carbono", "Cromo", "Cobalto", "Neon", "Plasma", "Laser", "Blindado", "Forjado", "Fraturado"],
      futuristic: ["Quantum", "Nano", "Cyber", "Nexus", "Omega", "Alpha", "Vórtex", "Fluxo", "Sombra", "Espectral", "Binário", "Void"],
      classic:    ["Negro", "Vermelho", "Dourado", "Preto", "Branco", "Cinzento", "Escarlate", "Ébano", "Prata", "Obsidiana", "Coral", "Âmbar"],
    },
    nouns: {
      modern:     ["Lobo", "Águia", "Cobra", "Falcão", "Puma", "Raptor", "Jaguar", "Mamba", "Viper", "Buldogue", "Tubarão", "Gavião"],
      futuristic: ["Espectro", "Fantasma", "Nexus", "Vórtex", "Cipher", "Matrix", "Phantom", "Vector", "Nova", "Daemon", "Glitch", "Zero"],
      classic:    ["Leão", "Touro", "Corvo", "Pantera", "Tigre", "Grifo", "Dragão", "Hidra", "Fênix", "Basilisco", "Quimera", "Wyvern"],
    },
    nationalities: {
      BR: ["Cabo", "Sgt.", "Ten.", "Capitão", "Major", "Coronel", "General"],
      US: ["Sergeant", "Captain", "Lieutenant", "Major", "Colonel", "General", "Corporal"],
      RU: ["Kapitan", "Leytenant", "Polkovnik", "Mayor", "General", "Serzhant", "Starshiy"],
      DE: ["Leutnant", "Hauptmann", "Major", "Oberst", "General", "Gefreiter", "Feldwebel"],
      UK: ["Corporal", "Sergeant", "Lieutenant", "Captain", "Major", "Colonel", "Brigadier"],
      CN: ["Shàngshì", "Zhōngwèi", "Shàngwèi", "Shàoxiào", "Shàngxiào", "Shàojiàng", "Shàngjiàng"],
    },
    ui: {
      branch:      "▸ DIVISÃO",
      style:       "▸ ESTILO",
      nationality: "▸ NAÇÃO",
      rank:        "▸ PATENTE",
      count:       "QUANTIDADE",
      history:     "HISTÓRICO DE COMBATE",
      clearHistory:"Limpar",
      generate:    "GERAR NOME",
      generateMulti: "GERAR MÚLTIPLOS",
      copy:        "COPIAR",
      copied:      "COPIADO!",
      rankAuto:    "Auto",
      rankCustom:  "Manual",
      noHistory:   "Nenhum nome gerado ainda.",
      army:        "Exército",
      navy:        "Marinha",
      airforce:    "Força Aérea",
      special:     "Forças Especiais",
      modern:      "Moderno",
      futuristic:  "Futurista",
      classic:     "Clássico",
    },
  },

  EN: {
    ranks: {
      army:     ["Pfc.", "Cpl.", "Sgt.", "S.Sgt.", "Lt.", "Cpt.", "Major", "Lt.Col.", "Colonel", "General"],
      navy:     ["Seaman", "Petty Off.", "Chief", "Ensign", "Lt.", "Cdr.", "Captain", "Commodore", "Admiral"],
      airforce: ["Airman", "A1C", "Sgt.", "TSgt.", "Lt.", "Cpt.", "Major", "Colonel", "General"],
      special:  ["Operator", "Spec.", "Sr.Spec.", "Master", "Chief", "Commander", "Director", "Shadow", "Ghost"],
    },
    adjectives: {
      modern:     ["Iron", "Steel", "Titan", "Carbon", "Chrome", "Cobalt", "Neon", "Plasma", "Laser", "Armored", "Forged", "Fractured"],
      futuristic: ["Quantum", "Nano", "Cyber", "Nexus", "Omega", "Alpha", "Vortex", "Flux", "Shadow", "Spectral", "Binary", "Void"],
      classic:    ["Black", "Red", "Gold", "Dark", "White", "Grey", "Scarlet", "Ebony", "Silver", "Obsidian", "Crimson", "Amber"],
    },
    nouns: {
      modern:     ["Wolf", "Eagle", "Cobra", "Falcon", "Puma", "Raptor", "Jaguar", "Mamba", "Viper", "Bulldog", "Shark", "Hawk"],
      futuristic: ["Specter", "Ghost", "Nexus", "Vortex", "Cipher", "Matrix", "Phantom", "Vector", "Nova", "Daemon", "Glitch", "Zero"],
      classic:    ["Lion", "Bull", "Raven", "Panther", "Tiger", "Griffin", "Dragon", "Hydra", "Phoenix", "Basilisk", "Chimera", "Wyvern"],
    },
    nationalities: {
      BR: ["Cabo", "Sgt.", "Ten.", "Capitão", "Major", "Coronel", "General"],
      US: ["Sergeant", "Captain", "Lieutenant", "Major", "Colonel", "General", "Corporal"],
      RU: ["Kapitan", "Leytenant", "Polkovnik", "Mayor", "General", "Serzhant", "Starshiy"],
      DE: ["Leutnant", "Hauptmann", "Major", "Oberst", "General", "Gefreiter", "Feldwebel"],
      UK: ["Corporal", "Sergeant", "Lieutenant", "Captain", "Major", "Colonel", "Brigadier"],
      CN: ["Shàngshì", "Zhōngwèi", "Shàngwèi", "Shàoxiào", "Shàngxiào", "Shàojiàng", "Shàngjiàng"],
    },
    ui: {
      branch:      "▸ DIVISION",
      style:       "▸ STYLE",
      nationality: "▸ NATION",
      rank:        "▸ RANK",
      count:       "COUNT",
      history:     "COMBAT HISTORY",
      clearHistory:"Clear",
      generate:    "GENERATE NAME",
      generateMulti: "GENERATE MULTIPLE",
      copy:        "COPY",
      copied:      "COPIED!",
      rankAuto:    "Auto",
      rankCustom:  "Manual",
      noHistory:   "No names generated yet.",
      army:        "Army",
      navy:        "Navy",
      airforce:    "Air Force",
      special:     "Special Forces",
      modern:      "Modern",
      futuristic:  "Futuristic",
      classic:     "Classic",
    },
  },
};
