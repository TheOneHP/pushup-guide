# 🛡️ Protocolo Push-Up 12 Semanas

> **Progressive Web App (PWA) minimalista, tático e 100% offline-first para acompanhamento diário de um protocolo de flexões de 12 semanas.**  
> Zero dependências externas, alto contraste, otimizado para operação com uma mão durante o treino.

📱 **Acesso Online (PWA):** [https://theonehp.github.io/pushup-guide/](https://theonehp.github.io/pushup-guide/)

---

## 🎯 Visão Geral

O **Protocolo Push-Up 12S** foi desenvolvido sob a ótica de engenharia de software minimalista voltada à performance atlética. Ele elimina atritos comuns em apps de treino (telas pesadas, propagandas, login obrigatório, conexão com a internet) e entrega uma interface tática de alta legibilidade, alto contraste e resposta física imediata.

---

## ⚡ Diferenciais Técnicos (Zero Dependências)

- **Zero Dependências Externas:** Construído exclusivamente com HTML5 semântico, CSS3 moderno (CSS Variables, Flexbox/Grid) e Vanilla JavaScript (ES6+). Sem frameworks, sem CDNs e sem bibliotecas de terceiros.
- **100% Offline-First:** Equipado com Service Worker (`sw.js`) com estratégia *cache-first*. Funciona continuamente mesmo sem sinal ou em modo avião.
- **Feedback Tátil Háptico (`navigator.vibrate`):** Resposta vibratória nativa ao marcar séries, bips regressivos no timer e padrão de alerta ao concluir descansos ou viradas de minuto no EMOM.
- **Áudio Sintetizado Nativo (`Web Audio API`):** Bips sonoros de contagem regressiva e início gerados programaticamente via osciladores senoidais/triangulares, sem consumo de arquivos `.mp3` externos.
- **Screen Wake Lock API:** Impede que a tela do celular apague automaticamente enquanto o cronômetro estiver em execução.
- **Prevenção de Fricções Mobile:** Bloqueio de *pull-to-refresh* acidental (`overscroll-behavior-y: contain`) e bloqueio de menus contextuais de seleção de texto (`user-select: none`).
- **Privacidade & Persistência Local:** Todo o histórico e dados de sessões ficam salvos exclusivamente no `localStorage` do dispositivo, com ferramentas integradas de backup (exportar e importar `.json`).

---

## 🧭 Estrutura da Interface

### 1. Header de Comando & Progresso Geral
- Contador em tempo real de sessões concluídas (ex: `14 de 36 sessões - 39%`).
- Barra de navegação rápida de semanas (`S1` a `S12`), abrindo automaticamente na primeira semana com treinos pendentes.
- Botão nativo de instalação PWA (`beforeinstallprompt`).

### 2. Card do Treino do Dia (Seg / Qua / Sex)
- **Contexto Físico:** Seletor de 3 estados (`Dia Off`, `Pré-Boxe`, `Pós-Boxe`) para contextualizar o nível de esforço.
- **Referência Física de Apoio (S1 a S4):** Campo persistido para padronizar o ponto de apoio em flexões inclinadas (`50cm`, `40cm`, `30cm`).
- **Checklist Interativo de Séries:** Checkboxes táteis por série com toque mínimo de $48\text{px}$.
- **Métricas de Coaching:**
  - Padrão Motor: Alternância entre `Execução Limpa` e `Técnica Quebrou`.
  - Percepção Subjetiva de Esforço (RPE): `Fácil`, `Na Medida` e `Pesado`.
  - **Alerta de Sobrecarga:** Se a semana anterior registrar `Pesado` ou `Técnica Quebrou`, a semana seguinte exibe uma recomendação visual para consolidar a carga antes de avançar.

### 3. Dias de Teste (AMRAP)
- Nas semanas de aferição (`S4 Sex`, `S8 Sex`, `S12 Sex`), o card exibe um módulo especial com input numérico para repetições máximas no solo e comparação instantânea com a meta do protocolo:
  - **S4 (Teste 1):** Meta de 5 a 6 repetições estritas.
  - **S8 (Teste 2):** Meta de 10 a 12 repetições estritas.
  - **S12 (Teste Final):** Meta de 16 a 20 repetições estritas.

### 4. Cronômetro Estilo Mini-Player / Bottom Sheet
- **Modo Compacto (Mini-Player):** Barra recolhida de $44\text{px}$ na base da tela mostrando tempo, modo ativo e botão Play/Pause rápido, sem cobrir os exercícios.
- **Gaveta Expandida (Bottom Sheet):** Puxador tátil que revela controles completos:
  - **Descanso:** Atalhos rápidos de `60s`, `90s` e `120s`.
  - **Isometria:** Presets de `20s` a `60s` para pranchas com contagem regressiva sonora e vibratória.
  - **EMOM:** Seleção de 8, 10 ou 12 minutos com bips aos 57s, 58s, 59s e virada no 00s.
  - **Botão Direto:** Atalho `▶ Carregar no Timer` em qualquer exercício para configurar a duração em 1 toque.

---

## 📅 Resumo do Protocolo (12 Semanas / 36 Sessões)

| Fase | Semanas | Foco Principal | Volume / Destaques |
| :--- | :--- | :--- | :--- |
| **Fase 1** | **S1 – S3** | Adaptação Neural & Ângulos | Inclinada 50cm $\rightarrow$ 40cm $\rightarrow$ 30cm + Negativas excêntricas (4s a 5s) + Pranchas altas. |
| **Deload 1** | **S4** | Descarga & Teste 1 | Deload em Seg/Qua e **TESTE 1 AMRAP no chão** na Sex (Meta: 5-6 reps). |
| **Fase 2** | **S5 – S7** | Entrada no Chão & Densidade | Flexões no solo (4x3 até 5x5) + Back-off inclinado + Shoulder Taps e Protração escapular. |
| **Deload 2** | **S8** | Descarga & Teste 2 | Deload em Seg/Qua e **TESTE 2 AMRAP no chão** na Sex (Meta: 10-12 reps). |
| **Fase 3** | **S9 – S11** | Método EMOM & Bi-sets | EMOM de 8 a 12 min (3 a 5 reps/min) + Pés elevados 15cm + Bi-sets até a falha. |
| **Pico Final** | **S12** | Descarga & Teste Final | Manutenção leve em Seg/Qua e **TESTE FINAL AMRAP** na Sex (Meta: 16-20 reps). |

---

## 📂 Arquitetura de Arquivos

```text
Trainer/
├── index.html       # Estrutura semântica HTML5 e SVGs táticos inline
├── style.css        # Dark mode de alto contraste, layout mobile-first e Bottom Sheet
├── app.js           # Base de dados, Web Audio, Wake Lock, Haptics e gerenciamento de estado
├── manifest.json    # Manifesto PWA autossuficiente com ícones Data URI
├── sw.js            # Service Worker com cache-first para funcionamento 100% offline
├── icon.svg         # Ícone vetorial tático do aplicativo
└── README.md        # Documentação técnica e operacional
```

---

## 📲 Como Instalar no Celular

### No Android (Chrome)
1. Acesse o link do app no Google Chrome: `https://theonehp.github.io/pushup-guide/`.
2. Toque no botão dourado **"Instalar"** no topo da tela ou vá no menu do navegador (3 pontinhos) e toque em **"Instalar aplicativo"** / **"Adicionar à tela inicial"**.

### No iPhone (Safari)
1. Acesse o link no Safari.
2. Toque no botão de **Compartilhar** (ícone do quadrado com a seta para cima).
3. Selecione **"Adicionar à Tela de Início"**.

---

## 💾 Backup e Restauração de Dados

Para garantir total soberania dos seus dados:
1. Toque no ícone de engrenagem no canto superior direito do app.
2. Clique em **"Exportar JSON"** para baixar um arquivo com todo o histórico de treinos, notas de apoio e AMRAPs.
3. Para restaurar em outro dispositivo, clique em **"Importar JSON"** e selecione o arquivo.

---

## 📄 Licença

Este projeto é de código aberto sob a licença [MIT](LICENSE).
