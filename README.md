# ⚔️ WARNAME GENERATOR

> **Generate your combat callsign. No login. No server. 100% offline.**

Um gerador de nomes militares personalizados para jogadores de FPS, RPG tático, simuladores militares e clãs gamer.

Criado por Pedro Gabriel, com a ajuda do Claude Code IA.
#believeinyourself #acrediteemsimesmo

---

## 📸 Preview

```
╔══════════════════════════════════════════╗
║         WARNAME GENERATOR v1.0           ║
║  ── CLASSIFIED // RESTRICTED USE ──      ║
╠══════════════════════════════════════════╣
║  [ Exército ]  [ Marinha ]               ║
║  [ Força Aérea ] [ Forças Especiais ]    ║
║  Estilo: Moderno | Futurista | Clássico  ║
║  Nação:  BR | US | RU | DE | UK | CN    ║
╠══════════════════════════════════════════╣
║  ► Sgt. Iron Wolf                        ║
║  ► Lt. Quantum Falcon                    ║
╚══════════════════════════════════════════╝
```

---

## 🚀 Como usar

### Opção 1 — Abrir direto no navegador

1. Baixe ou clone este repositório
2. Abra `index.html` no Chrome, Edge ou Firefox
3. Pronto — funciona 100% offline

### Opção 2 — Deploy no GitHub Pages

```bash
# 1. Fork ou clone o repositório
git clone https://github.com/seu-usuario/warname-generator.git

# 2. Ative o GitHub Pages nas configurações do repositório
# Settings → Pages → Branch: main → / (root)

# 3. Acesse em: https://seu-usuario.github.io/warname-generator
```

### Opção 3 — Deploy no Vercel

```bash
# 1. Instale o Vercel CLI
npm install -g vercel

# 2. Na pasta do projeto
vercel

# 3. Siga as instruções — deploy automático em segundos
```

---

## 📁 Estrutura do Projeto

```
warname-generator/
├── index.html          # Estrutura HTML principal
├── css/
│   └── style.css       # Estilos, cursor mira, animações, temas
├── js/
│   ├── database.js     # Dados: patentes, nomes, adjetivos, i18n
│   ├── generator.js    # Lógica de geração e anti-repetição
│   ├── ui.js           # DOM: cursor, tema, histórico, filtros
│   └── app.js          # Controlador principal e estado
└── README.md
```

---

## ✨ Funcionalidades

| Funcionalidade | Status |
|---|---|
| Geração aleatória de nomes militares | ✅ |
| Filtro por divisão (Exército, Marinha, Força Aérea, Especiais) | ✅ |
| Filtro por estilo (Moderno, Futurista, Clássico) | ✅ |
| Filtro por nacionalidade (BR, US, RU, DE, UK, CN) | ✅ |
| Patente automática ou manual | ✅ |
| Geração de 1 a 8 nomes simultâneos | ✅ |
| Botão copiar nome para área de transferência | ✅ |
| Histórico local (até 50 nomes via localStorage) | ✅ |
| Limpar histórico | ✅ |
| Modo escuro / claro | ✅ |
| Suporte multilíngue PT / EN | ✅ |
| Cursor personalizado em forma de mira | ✅ |
| Anti-repetição consecutiva | ✅ |
| Atalho de teclado (Enter = gerar) | ✅ |
| Funcionamento offline | ✅ |
| Layout responsivo | ✅ |

---

## 🎯 Cursor Mira

O cursor padrão do sistema é substituído por uma **mira tática** com:

- Anel circular pulsante
- 4 linhas ortogonais (topo, base, esquerda, direita)
- Ponto central com brilho verde
- Estado **hover** — escala aumentada ao passar sobre botões
- Estado **click** — escala reduzida ao clicar

Implementado 100% em CSS, sem canvas ou imagem externa.

---

## 🎨 Design

| Elemento | Detalhe |
|---|---|
| Tema dark | Verde militar `#00ff41` sobre fundo `#050a05` |
| Tema light | Verde escuro `#1b5e20` sobre cinza-esverdeado |
| Fonte display | **Orbitron** (tática/militar) |
| Fonte mono | **Share Tech Mono** (terminal/HUD) |
| Efeitos | Scanlines, grain, glitch no logo, animação scan no botão |
| Cantos | Decoração HUD nos painéis |

---

## 🧩 Exemplos de Nomes Gerados

**Estilo Moderno — Exército — EUA**
```
Sergeant Iron Wolf
Major Steel Eagle
Lt. Carbon Raptor
```

**Estilo Futurista — Forças Especiais — RU**
```
Kapitan Quantum Specter
Polkovnik Void Ghost
Leytenant Binary Phantom
```

**Estilo Clássico — Marinha — BR**
```
Capitão Obsidiana Dragão
Ten. Escarlate Fênix
Sgt. Âmbar Hidra
```

---

## ⚙️ Tecnologias

- **HTML5** — estrutura semântica
- **CSS3** — variáveis, animações, cursor customizado, tema claro/escuro
- **JavaScript (ES6+)** — módulos IIFE, localStorage, Clipboard API
- **Google Fonts** — Orbitron + Share Tech Mono
- **Sem frameworks, sem dependências, sem backend**

---

## 🌐 Compatibilidade

| Navegador | Suporte |
|---|---|
| Chrome 90+ | ✅ |
| Edge 90+ | ✅ |
| Firefox 88+ | ✅ |
| Safari 14+ | ✅ |
| Mobile (touch) | ✅ (cursor mira desativado em touch) |

---

## 🗺️ Roadmap

### v1.0 — MVP ✅
- [x] Gerador funcional com filtros
- [x] Histórico local
- [x] Temas claro/escuro
- [x] Multilíngue PT/EN
- [x] Cursor mira

### v1.1 — Planejado
- [ ] Exportar histórico como `.txt`
- [ ] Mais nacionalidades (JP, FR, IL, AR)
- [ ] Sons de interface (cliques táticos)
- [ ] Modo "Full Random" sem filtros

### v2.0 — Futuro
- [ ] Geração com IA via API
- [ ] Compartilhamento de nome via URL
- [ ] Temas por país/divisão
- [ ] PWA (instalável no celular)

---

## 📄 Licença

MIT License — use, modifique e distribua à vontade.

---

## 👤 Autor

**Pedro Gabriel**
Projeto: WarName Generator v1.0
Data: 26/05/2026

---

> *"No battlefield, your name is your legend."*
