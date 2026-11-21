/**
 * PROTOCOLO PUSH-UP 12 SEMANAS - CORE APP JAVASCRIPT
 * Arquitetura Vanilla ES6+ Offline-First, Sem Dependências Externas.
 */

// ============================================================================
// 1. BASE DE DADOS DO PROTOCOLO (12 SEMANAS / 36 SESSÕES)
// ============================================================================
const PROTOCOL_DATA = {
  1: {
    title: "Semana 1 · Base & Adaptação Neural",
    seg: {
      type: "regular",
      focus: "Força Inclinada e Negativas",
      exercises: [
        { id: 1, name: "Inclinada 50 cm", detail: "3 séries de 6 repetições", sets: 3, reps: 6, height: 50 },
        { id: 2, name: "Negativa no chão", detail: "3 séries de 3 reps (descida controlada de 4s)", sets: 3, reps: 3, tempo: "4s" },
        { id: 3, name: "Prancha alta", detail: "3 séries de 20 segundos", sets: 3, isoSeconds: 20 }
      ]
    },
    qua: {
      type: "regular",
      focus: "Progressão de Volume Inclinado",
      exercises: [
        { id: 1, name: "Inclinada 50 cm", detail: "3 séries de 7 repetições", sets: 3, reps: 7, height: 50 },
        { id: 2, name: "Negativa no chão", detail: "3 séries de 3 reps (descida controlada de 4s)", sets: 3, reps: 3, tempo: "4s" },
        { id: 3, name: "Prancha alta", detail: "3 séries de 20 segundos", sets: 3, isoSeconds: 20 }
      ]
    },
    sex: {
      type: "regular",
      focus: "Sobrecarga de Tempo Sob Tensão",
      exercises: [
        { id: 1, name: "Inclinada 50 cm", detail: "3 séries de 8 repetições", sets: 3, reps: 8, height: 50 },
        { id: 2, name: "Negativa no chão", detail: "3 séries de 3 reps (descida controlada de 5s)", sets: 3, reps: 3, tempo: "5s" },
        { id: 3, name: "Prancha alta", detail: "3 séries de 25 segundos", sets: 3, isoSeconds: 25 }
      ]
    }
  },
  2: {
    title: "Semana 2 · Redução de Ângulo (40 cm)",
    seg: {
      type: "regular",
      focus: "Adaptação a 40 cm",
      exercises: [
        { id: 1, name: "Inclinada 40 cm", detail: "3 séries de 6 repetições", sets: 3, reps: 6, height: 40 },
        { id: 2, name: "Negativa no chão", detail: "3 séries de 3 reps (descida controlada de 5s)", sets: 3, reps: 3, tempo: "5s" },
        { id: 3, name: "Prancha alta", detail: "3 séries de 25 segundos", sets: 3, isoSeconds: 25 }
      ]
    },
    qua: {
      type: "regular",
      focus: "Aumento de Densidade Excêntrica",
      exercises: [
        { id: 1, name: "Inclinada 40 cm", detail: "3 séries de 7 repetições", sets: 3, reps: 7, height: 40 },
        { id: 2, name: "Negativa no chão", detail: "3 séries de 4 reps (descida controlada de 5s)", sets: 3, reps: 4, tempo: "5s" },
        { id: 3, name: "Prancha alta", detail: "3 séries de 30 segundos", sets: 3, isoSeconds: 30 }
      ]
    },
    sex: {
      type: "regular",
      focus: "Consolidação de Força a 40 cm",
      exercises: [
        { id: 1, name: "Inclinada 40 cm", detail: "3 séries de 8 repetições", sets: 3, reps: 8, height: 40 },
        { id: 2, name: "Negativa no chão", detail: "3 séries de 4 reps (descida controlada de 5s)", sets: 3, reps: 4, tempo: "5s" },
        { id: 3, name: "Prancha alta", detail: "3 séries de 30 segundos", sets: 3, isoSeconds: 30 }
      ]
    }
  },
  3: {
    title: "Semana 3 · Redução de Ângulo (30 cm)",
    seg: {
      type: "regular",
      focus: "Transição para Ângulo Baixo",
      exercises: [
        { id: 1, name: "Inclinada 30 cm", detail: "3 séries de 6 repetições", sets: 3, reps: 6, height: 30 },
        { id: 2, name: "Negativa no chão", detail: "4 séries de 3 reps (descida controlada de 5s)", sets: 4, reps: 3, tempo: "5s" },
        { id: 3, name: "Prancha alta", detail: "3 séries de 30 segundos", sets: 3, isoSeconds: 30 }
      ]
    },
    qua: {
      type: "regular",
      focus: "Sobrecarga de Volume Excêntrico",
      exercises: [
        { id: 1, name: "Inclinada 30 cm", detail: "3 séries de 7 repetições", sets: 3, reps: 7, height: 30 },
        { id: 2, name: "Negativa no chão", detail: "4 séries de 3 reps (descida controlada de 5s)", sets: 4, reps: 3, tempo: "5s" },
        { id: 3, name: "Prancha alta", detail: "3 séries de 35 segundos", sets: 3, isoSeconds: 35 }
      ]
    },
    sex: {
      type: "regular",
      focus: "Pico de Volume Pré-Deload",
      exercises: [
        { id: 1, name: "Inclinada 30 cm", detail: "3 séries de 8 repetições", sets: 3, reps: 8, height: 30 },
        { id: 2, name: "Negativa no chão", detail: "4 séries de 3 reps (descida controlada de 5s)", sets: 4, reps: 3, tempo: "5s" },
        { id: 3, name: "Prancha alta", detail: "3 séries de 35 segundos", sets: 3, isoSeconds: 35 }
      ]
    }
  },
  4: {
    title: "Semana 4 · Descarga & Teste 1 (AMRAP)",
    seg: {
      type: "regular",
      focus: "Descarga Ativa (Deload)",
      exercises: [
        { id: 1, name: "Inclinada 30 cm", detail: "2 séries de 6 repetições", sets: 2, reps: 6, height: 30 },
        { id: 2, name: "Negativa no chão", detail: "2 séries de 2 reps (descida controlada de 4s)", sets: 2, reps: 2, tempo: "4s" },
        { id: 3, name: "Prancha alta", detail: "2 séries de 20 segundos (Descarga)", sets: 2, isoSeconds: 20 }
      ]
    },
    qua: {
      type: "regular",
      focus: "Descarga e Prontidão Neural",
      exercises: [
        { id: 1, name: "Inclinada 30 cm", detail: "2 séries de 6 repetições", sets: 2, reps: 6, height: 30 },
        { id: 2, name: "Negativa no chão", detail: "2 séries de 2 reps (descida controlada de 4s)", sets: 2, reps: 2, tempo: "4s" },
        { id: 3, name: "Prancha alta", detail: "2 séries de 20 segundos (Descarga)", sets: 2, isoSeconds: 20 }
      ]
    },
    sex: {
      type: "test",
      testNumber: 1,
      targetMin: 5,
      targetMax: 6,
      focus: "TESTE 1: Máximo de Reps no Chão",
      exercises: [
        { id: 1, name: "Aquecimento articular e leve", detail: "Mobilidade de punhos e escápulas", sets: 1, reps: 1 },
        { id: 2, name: "TESTE 1: 1 série AMRAP no chão", detail: "Meta: 5 a 6 repetições com amplitude total", sets: 1, isAmrap: true, target: "5 a 6 reps" }
      ]
    }
  },
  5: {
    title: "Semana 5 · Entrada no Chão & Estabilidade",
    seg: {
      type: "regular",
      focus: "Início das Séries Estritas no Chão",
      exercises: [
        { id: 1, name: "Flexão no chão", detail: "4 séries de 3 repetições", sets: 4, reps: 3 },
        { id: 2, name: "Inclinada 30 cm", detail: "2 séries de 6 repetições", sets: 2, reps: 6, height: 30 },
        { id: 3, name: "Shoulder taps", detail: "3 séries de 12 toques (6/lado)", sets: 3, reps: 12 }
      ]
    },
    qua: {
      type: "regular",
      focus: "Consolidação das Séries no Chão",
      exercises: [
        { id: 1, name: "Flexão no chão", detail: "4 séries de 3 repetições", sets: 4, reps: 3 },
        { id: 2, name: "Inclinada 30 cm", detail: "2 séries de 7 repetições", sets: 2, reps: 7, height: 30 },
        { id: 3, name: "Shoulder taps", detail: "3 séries de 12 toques (6/lado)", sets: 3, reps: 12 }
      ]
    },
    sex: {
      type: "regular",
      focus: "Pico de Séries no Chão (5x3)",
      exercises: [
        { id: 1, name: "Flexão no chão", detail: "5 séries de 3 repetições", sets: 5, reps: 3 },
        { id: 2, name: "Inclinada 30 cm", detail: "2 séries de 8 repetições", sets: 2, reps: 8, height: 30 },
        { id: 3, name: "Shoulder taps", detail: "3 séries de 14 toques (7/lado)", sets: 3, reps: 14 }
      ]
    }
  },
  6: {
    title: "Semana 6 · Volume de Base no Chão (4 reps)",
    seg: {
      type: "regular",
      focus: "Séries de 4 Repetições no Chão",
      exercises: [
        { id: 1, name: "Flexão no chão", detail: "4 séries de 4 repetições", sets: 4, reps: 4 },
        { id: 2, name: "Inclinada 30 cm", detail: "2 séries de 6 repetições", sets: 2, reps: 6, height: 30 },
        { id: 3, name: "Shoulder taps", detail: "3 séries de 14 toques (7/lado)", sets: 3, reps: 14 }
      ]
    },
    qua: {
      type: "regular",
      focus: "Aumento de Back-off Inclinado e Core",
      exercises: [
        { id: 1, name: "Flexão no chão", detail: "4 séries de 4 repetições", sets: 4, reps: 4 },
        { id: 2, name: "Inclinada 30 cm", detail: "2 séries de 7 repetições", sets: 2, reps: 7, height: 30 },
        { id: 3, name: "Shoulder taps", detail: "3 séries de 16 toques (8/lado)", sets: 3, reps: 16 }
      ]
    },
    sex: {
      type: "regular",
      focus: "Pico de Volume Semanal (5x4 no chão)",
      exercises: [
        { id: 1, name: "Flexão no chão", detail: "5 séries de 4 repetições", sets: 5, reps: 4 },
        { id: 2, name: "Inclinada 30 cm", detail: "2 séries de 8 repetições", sets: 2, reps: 8, height: 30 },
        { id: 3, name: "Shoulder taps", detail: "3 séries de 16 toques (8/lado)", sets: 3, reps: 16 }
      ]
    }
  },
  7: {
    title: "Semana 7 · Avanço para 5 Repetições & Protração",
    seg: {
      type: "regular",
      focus: "Força no Chão com Protração Escapular",
      exercises: [
        { id: 1, name: "Flexão no chão", detail: "4 séries de 5 repetições", sets: 4, reps: 5 },
        { id: 2, name: "Inclinada 30 cm", detail: "2 séries de 6 repetições", sets: 2, reps: 6, height: 30 },
        { id: 3, name: "Prancha alta c/ protração", detail: "3 séries de 40 segundos", sets: 3, isoSeconds: 40 }
      ]
    },
    qua: {
      type: "regular",
      focus: "Consolidação de Protração e Volume",
      exercises: [
        { id: 1, name: "Flexão no chão", detail: "4 séries de 5 repetições", sets: 4, reps: 5 },
        { id: 2, name: "Inclinada 30 cm", detail: "2 séries de 7 repetições", sets: 2, reps: 7, height: 30 },
        { id: 3, name: "Prancha alta c/ protração", detail: "3 séries de 40 segundos", sets: 3, isoSeconds: 40 }
      ]
    },
    sex: {
      type: "regular",
      focus: "Pico de 25 Reps Totais no Chão (5x5)",
      exercises: [
        { id: 1, name: "Flexão no chão", detail: "5 séries de 5 repetições", sets: 5, reps: 5 },
        { id: 2, name: "Inclinada 30 cm", detail: "2 séries de 8 repetições", sets: 2, reps: 8, height: 30 },
        { id: 3, name: "Prancha alta c/ protração", detail: "3 séries de 45 segundos", sets: 3, isoSeconds: 45 }
      ]
    }
  },
  8: {
    title: "Semana 8 · Descarga & Teste 2 (AMRAP)",
    seg: {
      type: "regular",
      focus: "Descarga de Volume (Deload)",
      exercises: [
        { id: 1, name: "Flexão no chão", detail: "3 séries de 3 repetições", sets: 3, reps: 3 },
        { id: 2, name: "Inclinada 30 cm", detail: "2 séries de 5 repetições", sets: 2, reps: 5, height: 30 },
        { id: 3, name: "Shoulder taps", detail: "2 séries de 10 toques (Descarga)", sets: 2, reps: 10 }
      ]
    },
    qua: {
      type: "regular",
      focus: "Ativação Rápida Pré-Teste",
      exercises: [
        { id: 1, name: "Flexão no chão", detail: "2 séries de 3 repetições", sets: 2, reps: 3 },
        { id: 2, name: "Inclinada 30 cm", detail: "2 séries de 5 repetições", sets: 2, reps: 5, height: 30 },
        { id: 3, name: "Shoulder taps", detail: "2 séries de 10 toques (Descarga)", sets: 2, reps: 10 }
      ]
    },
    sex: {
      type: "test",
      testNumber: 2,
      targetMin: 10,
      targetMax: 12,
      focus: "TESTE 2: Máximo de Reps no Chão",
      exercises: [
        { id: 1, name: "Aquecimento leve e mobilidade", detail: "Escápulas, cotovelos e punhos", sets: 1, reps: 1 },
        { id: 2, name: "TESTE 2: 1 série AMRAP no chão", detail: "Meta: 10 a 12 repetições estritas", sets: 1, isAmrap: true, target: "10 a 12 reps" }
      ]
    }
  },
  9: {
    title: "Semana 9 · Introdução ao Método EMOM",
    seg: {
      type: "regular",
      focus: "Densidade de Treino com EMOM 8 min",
      exercises: [
        { id: 1, name: "EMOM 8 min", detail: "3 reps/min (24 total no chão)", emomMinutes: 8, sets: 8, reps: 3 },
        { id: 2, name: "Pés elevados 15 cm", detail: "3 séries de 4 repetições", sets: 3, reps: 4 },
        { id: 3, name: "Prancha alta", detail: "3 séries de 45 segundos", sets: 3, isoSeconds: 45 }
      ]
    },
    qua: {
      type: "regular",
      focus: "EMOM 8 min + Elevação de Pés",
      exercises: [
        { id: 1, name: "EMOM 8 min", detail: "3 reps/min (24 total no chão)", emomMinutes: 8, sets: 8, reps: 3 },
        { id: 2, name: "Pés elevados 15 cm", detail: "3 séries de 5 repetições", sets: 3, reps: 5 },
        { id: 3, name: "Shoulder taps", detail: "3 séries de 16 toques", sets: 3, reps: 16 }
      ]
    },
    sex: {
      type: "regular",
      focus: "EMOM 10 min + Bi-set RIR 1",
      exercises: [
        { id: 1, name: "EMOM 10 min", detail: "3 reps/min (30 total)", emomMinutes: 10, sets: 10, reps: 3 },
        { id: 2, name: "Bi-set 2x", detail: "[Chão RIR 1 → Sem pausa, Inclinada até falha]", sets: 2, reps: "RIR 1 + Falha" },
        { id: 3, name: "Prancha alta", detail: "3 séries de 45 segundos", sets: 3, isoSeconds: 45 }
      ]
    }
  },
  10: {
    title: "Semana 10 · Progressão EMOM e Bi-sets",
    seg: {
      type: "regular",
      focus: "EMOM 10 min (30 total) + Pés Elevados",
      exercises: [
        { id: 1, name: "EMOM 10 min", detail: "3 reps/min (30 total)", emomMinutes: 10, sets: 10, reps: 3 },
        { id: 2, name: "Pés elevados 15 cm", detail: "3 séries de 6 repetições", sets: 3, reps: 6 },
        { id: 3, name: "Prancha alta", detail: "3 séries de 50 segundos", sets: 3, isoSeconds: 50 }
      ]
    },
    qua: {
      type: "regular",
      focus: "Salto de Ritmo: EMOM 4 reps/min (40 total)",
      exercises: [
        { id: 1, name: "EMOM 10 min", detail: "4 reps/min (40 total)", emomMinutes: 10, sets: 10, reps: 4 },
        { id: 2, name: "Pés elevados 15 cm", detail: "3 séries de 6 repetições", sets: 3, reps: 6 },
        { id: 3, name: "Shoulder taps", detail: "3 séries de 18 toques", sets: 3, reps: 18 }
      ]
    },
    sex: {
      type: "regular",
      focus: "EMOM 10 min (40 total) + Bi-set 3x",
      exercises: [
        { id: 1, name: "EMOM 10 min", detail: "4 reps/min (40 total)", emomMinutes: 10, sets: 10, reps: 4 },
        { id: 2, name: "Bi-set 3x", detail: "[Chão RIR 1 → Sem pausa, Inclinada até falha]", sets: 3, reps: "RIR 1 + Falha" },
        { id: 3, name: "Prancha alta", detail: "3 séries de 50 segundos", sets: 3, isoSeconds: 50 }
      ]
    }
  },
  11: {
    title: "Semana 11 · Pico de Volume & Resistência Máxima",
    seg: {
      type: "regular",
      focus: "EMOM 12 min: 4 reps/min (48 total)",
      exercises: [
        { id: 1, name: "EMOM 12 min", detail: "4 reps/min (48 total)", emomMinutes: 12, sets: 12, reps: 4 },
        { id: 2, name: "Pés elevados 15 cm", detail: "3 séries de 6 repetições", sets: 3, reps: 6 },
        { id: 3, name: "Shoulder taps", detail: "3 séries de 20 toques", sets: 3, reps: 20 }
      ]
    },
    qua: {
      type: "regular",
      focus: "EMOM 12 min + Pés Elevados 7 reps",
      exercises: [
        { id: 1, name: "EMOM 12 min", detail: "4 reps/min (48 total)", emomMinutes: 12, sets: 12, reps: 4 },
        { id: 2, name: "Pés elevados 15 cm", detail: "3 séries de 7 repetições", sets: 3, reps: 7 },
        { id: 3, name: "Shoulder taps", detail: "3 séries de 20 toques", sets: 3, reps: 20 }
      ]
    },
    sex: {
      type: "regular",
      focus: "Pico de Intensidade: 5 reps/min (50 total)",
      exercises: [
        { id: 1, name: "EMOM 10 min", detail: "5 reps/min (50 total)", emomMinutes: 10, sets: 10, reps: 5 },
        { id: 2, name: "Bi-set 3x", detail: "[Chão RIR 1 → Sem pausa, Inclinada até falha]", sets: 3, reps: "RIR 1 + Falha" },
        { id: 3, name: "Prancha alta", detail: "3 séries de 60 segundos", sets: 3, isoSeconds: 60 }
      ]
    }
  },
  12: {
    title: "Semana 12 · Descarga Final & Teste Máximo",
    seg: {
      type: "regular",
      focus: "Manutenção & Recuperação do Sistema Nervoso",
      exercises: [
        { id: 1, name: "Flexão no chão", detail: "3 séries de 5 repetições (Manutenção)", sets: 3, reps: 5 },
        { id: 2, name: "Inclinada 30 cm", detail: "2 séries de 6 repetições", sets: 2, reps: 6, height: 30 },
        { id: 3, name: "Prancha alta", detail: "2 séries de 30 segundos (Descarga)", sets: 2, isoSeconds: 30 }
      ]
    },
    qua: {
      type: "regular",
      focus: "Ativação Rápida e Descanso Total do Core",
      exercises: [
        { id: 1, name: "Flexão no chão", detail: "2 séries de 4 reps (Ativação rápida)", sets: 2, reps: 4 },
        { id: 2, name: "Descanso total do core", detail: "Sem pranchas para preservar o abdômen", sets: 1, reps: "-" },
        { id: 3, name: "Alongamento leve", detail: "Peitoral, deltoides e punhos", sets: 1, reps: "-" }
      ]
    },
    sex: {
      type: "test",
      testNumber: 3,
      targetMin: 16,
      targetMax: 20,
      focus: "TESTE FINAL: Máximo de Flexões no Chão",
      exercises: [
        { id: 1, name: "Aquecimento padrão", detail: "Mobilidade completa de ombros e punhos", sets: 1, reps: 1 },
        { id: 2, name: "TESTE FINAL: 1 série AMRAP no chão", detail: "Meta: 16 a 20 repetições estritas", sets: 1, isAmrap: true, target: "16 a 20 reps" }
      ]
    }
  }
};

// ============================================================================
// 2. GERENCIADOR DE ESTADO E LOCALSTORAGE
// ============================================================================
const STORAGE_KEY = "pushup_protocol_v1";

const defaultState = {
  activeWeek: 1,
  activeDay: "seg",
  physicalRefs: {
    "50cm": "",
    "40cm": "",
    "30cm": ""
  },
  sessions: {} // chave formato: "w{week}_{day}" -> { completed, completedAt, rpe, technique, context, setsChecked: [], amrapReps: null }
};

class StateManager {
  constructor() {
    this.state = this.loadState();
  }

  loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...defaultState,
          ...parsed,
          physicalRefs: { ...defaultState.physicalRefs, ...(parsed.physicalRefs || {}) },
          sessions: parsed.sessions || {}
        };
      }
    } catch (e) {
      console.error("Falha ao carregar estado do localStorage:", e);
    }
    return JSON.parse(JSON.stringify(defaultState));
  }

  save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
    } catch (e) {
      console.error("Falha ao salvar no localStorage:", e);
    }
  }

  getSessionKey(week, day) {
    return `w${week}_${day}`;
  }

  getSession(week, day) {
    const key = this.getSessionKey(week, day);
    return this.state.sessions[key] || null;
  }

  updateSession(week, day, sessionData) {
    const key = this.getSessionKey(week, day);
    this.state.sessions[key] = {
      ...(this.state.sessions[key] || {}),
      ...sessionData
    };
    this.save();
  }

  deleteSession(week, day) {
    const key = this.getSessionKey(week, day);
    delete this.state.sessions[key];
    this.save();
  }

  setPhysicalRef(heightKey, value) {
    this.state.physicalRefs[heightKey] = value;
    this.save();
  }

  getPhysicalRef(heightKey) {
    return this.state.physicalRefs[heightKey] || "";
  }

  // Encontra a primeira semana que possui ao menos um treino pendente (ou 1 se nenhuma iniciada)
  findFirstPendingWeek() {
    for (let w = 1; w <= 12; w++) {
      const days = ["seg", "qua", "sex"];
      const allDone = days.every((d) => {
        const s = this.getSession(w, d);
        return s && s.completed;
      });
      if (!allDone) {
        return w;
      }
    }
    return 12;
  }

  // Verifica se a semana anterior teve algum RPE "heavy" ou Técnica "broken"
  hasCoachingAlertForWeek(week) {
    if (week <= 1) return false;
    const prevWeek = week - 1;
    const days = ["seg", "qua", "sex"];
    for (const d of days) {
      const s = this.getSession(prevWeek, d);
      if (s && s.completed) {
        if (s.rpe === "heavy" || s.technique === "broken") {
          return true;
        }
      }
    }
    return false;
  }

  getTotalCompletedSessions() {
    return Object.values(this.state.sessions).filter((s) => s && s.completed).length;
  }

  resetAll() {
    this.state = JSON.parse(JSON.stringify(defaultState));
    this.save();
  }
}

// Instância singleton do estado
const appState = new StateManager();

// ============================================================================
// 3. SÍNTESE DE ÁUDIO VIA WEB AUDIO API (ZERO MP3 EXTERNO)
// ============================================================================
class SoundEffects {
  constructor() {
    this.audioCtx = null;
    this.unlocked = false;
  }

  init() {
    if (!this.audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        this.audioCtx = new AudioContextClass();
      }
    }
    if (this.audioCtx && this.audioCtx.state === "suspended") {
      this.audioCtx.resume();
    }
    this.unlocked = true;
  }

  playTone(freq = 880, duration = 0.1, type = "sine", gainVal = 0.15) {
    this.init();
    if (!this.audioCtx) return;

    try {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);

      gain.gain.setValueAtTime(gainVal, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start();
      osc.stop(this.audioCtx.currentTime + duration);
    } catch (e) {
      console.warn("Erro ao emitir som:", e);
    }
  }

  // Bip curto para 3, 2, 1
  tick() {
    this.playTone(740, 0.08, "triangle", 0.2);
  }

  // Bip agudo para início de minuto / Go!
  go() {
    this.playTone(1200, 0.25, "square", 0.18);
  }

  // Duplo acorde de finalização
  finish() {
    this.playTone(880, 0.18, "sine", 0.2);
    setTimeout(() => {
      this.playTone(1320, 0.35, "sine", 0.25);
    }, 120);
  }
}

const sound = new SoundEffects();

// Feedback Tátil Nativo (Vibração Háptica para Mobile)
const haptics = {
  tap: () => {
    if ("vibrate" in navigator) {
      try { navigator.vibrate(15); } catch (e) {}
    }
  },
  tick: () => {
    if ("vibrate" in navigator) {
      try { navigator.vibrate(25); } catch (e) {}
    }
  },
  alert: () => {
    if ("vibrate" in navigator) {
      try { navigator.vibrate([80, 50, 80, 50, 150]); } catch (e) {}
    }
  },
  success: () => {
    if ("vibrate" in navigator) {
      try { navigator.vibrate([40, 40, 80]); } catch (e) {}
    }
  }
};

// Desbloqueia áudio na primeira interação do usuário
window.addEventListener("pointerdown", () => sound.init(), { once: true });
window.addEventListener("keydown", () => sound.init(), { once: true });

// ============================================================================
// 4. SCREEN WAKE LOCK API (MANTER TELA LIGADA NO TREINO)
// ============================================================================
class WakeLockController {
  constructor() {
    this.wakeLock = null;
    this.statusElement = null;
    this.handleVisibility = this.handleVisibility.bind(this);
  }

  setIndicator(element) {
    this.statusElement = element;
    this.updateUI(false);
  }

  async acquire() {
    if (!("wakeLock" in navigator)) return;
    try {
      if (!this.wakeLock) {
        this.wakeLock = await navigator.wakeLock.request("screen");
        this.updateUI(true);
        document.removeEventListener("visibilitychange", this.handleVisibility);
        document.addEventListener("visibilitychange", this.handleVisibility);
      }
    } catch (err) {
      console.warn("Wake Lock não pôde ser ativado:", err);
      this.updateUI(false);
    }
  }

  async release() {
    if (this.wakeLock) {
      try {
        await this.wakeLock.release();
      } catch (e) {}
      this.wakeLock = null;
    }
    this.updateUI(false);
    document.removeEventListener("visibilitychange", this.handleVisibility);
  }

  async handleVisibility() {
    if (document.visibilityState === "visible") {
      await this.acquire();
    }
  }

  updateUI(isActive) {
    if (!this.statusElement) return;
    if (isActive) {
      this.statusElement.classList.add("active");
      this.statusElement.title = "Tela mantida acesa durante o timer";
    } else {
      this.statusElement.classList.remove("active");
      this.statusElement.title = "Tela em economia normal";
    }
  }
}

const wakeController = new WakeLockController();

// ============================================================================
// 5. CRONÔMETRO INTEGRADO (DESCANSO, ISOMETRIA, EMOM)
// ============================================================================
class WorkoutTimer {
  constructor() {
    this.mode = "rest"; // 'rest' | 'iso' | 'emom'
    this.isRunning = false;
    this.totalSeconds = 60;
    this.remainingSeconds = 60;

    // EMOM específico
    this.emomTotalMinutes = 10;
    this.emomCurrentMinute = 1;
    this.emomMinuteRemaining = 60;

    this.timerId = null;
    this.lastTimestamp = null;

    // Callbacks de UI
    this.onTick = null;
    this.onStateChange = null;
  }

  setMode(mode) {
    this.stop();
    this.mode = mode;
    if (mode === "rest") {
      this.totalSeconds = 60;
      this.remainingSeconds = 60;
    } else if (mode === "iso") {
      this.totalSeconds = 30;
      this.remainingSeconds = 30;
    } else if (mode === "emom") {
      this.emomTotalMinutes = 10;
      this.emomCurrentMinute = 1;
      this.emomMinuteRemaining = 60;
    }
    if (this.onStateChange) this.onStateChange();
  }

  setSeconds(seconds) {
    this.stop();
    this.totalSeconds = Math.max(1, seconds);
    this.remainingSeconds = this.totalSeconds;
    if (this.onStateChange) this.onStateChange();
  }

  setEmomMinutes(minutes) {
    this.stop();
    this.emomTotalMinutes = minutes;
    this.emomCurrentMinute = 1;
    this.emomMinuteRemaining = 60;
    if (this.onStateChange) this.onStateChange();
  }

  start() {
    if (this.isRunning) return;
    sound.init();
    haptics.tick();
    this.isRunning = true;
    this.lastTimestamp = Date.now();
    wakeController.acquire();

    if (this.mode === "emom") {
      // Início com bip de partida
      sound.go();
    }

    this.timerId = setInterval(() => this.tick(), 250);
    if (this.onStateChange) this.onStateChange();
  }

  pause() {
    if (!this.isRunning) return;
    this.isRunning = false;
    clearInterval(this.timerId);
    this.timerId = null;
    wakeController.release();
    if (this.onStateChange) this.onStateChange();
  }

  stop() {
    this.pause();
    if (this.mode === "rest" || this.mode === "iso") {
      this.remainingSeconds = this.totalSeconds;
    } else if (this.mode === "emom") {
      this.emomCurrentMinute = 1;
      this.emomMinuteRemaining = 60;
    }
    if (this.onStateChange) this.onStateChange();
  }

  addTime(seconds) {
    if (this.mode === "rest" || this.mode === "iso") {
      this.remainingSeconds = Math.max(0, this.remainingSeconds + seconds);
      this.totalSeconds = Math.max(this.totalSeconds, this.remainingSeconds);
      if (this.onTick) this.onTick();
    }
  }

  tick() {
    const now = Date.now();
    const elapsed = (now - this.lastTimestamp) / 1000;
    if (elapsed < 1) return;

    const secondsPassed = Math.floor(elapsed);
    this.lastTimestamp = now;

    if (this.mode === "rest" || this.mode === "iso") {
      const prev = this.remainingSeconds;
      this.remainingSeconds = Math.max(0, this.remainingSeconds - secondsPassed);

      // Bips de contagem regressiva para Isometria
      if (this.mode === "iso" && this.remainingSeconds <= 3 && this.remainingSeconds > 0 && prev !== this.remainingSeconds) {
        sound.tick();
        haptics.tick();
      }

      if (this.remainingSeconds === 0) {
        this.stop();
        sound.finish();
        haptics.alert();
      }
    } else if (this.mode === "emom") {
      const prevRem = this.emomMinuteRemaining;
      this.emomMinuteRemaining -= secondsPassed;

      // Avisos sonoros a cada minuto: 57, 58, 59 (tick) e 00 (go!)
      if (this.emomMinuteRemaining <= 3 && this.emomMinuteRemaining > 0 && prevRem !== this.emomMinuteRemaining) {
        sound.tick();
        haptics.tick();
      }

      if (this.emomMinuteRemaining <= 0) {
        if (this.emomCurrentMinute < this.emomTotalMinutes) {
          this.emomCurrentMinute++;
          this.emomMinuteRemaining = 60;
          sound.go();
          haptics.alert();
        } else {
          // EMOM Concluído totalmente
          this.stop();
          sound.finish();
          haptics.alert();
        }
      }
    }

    if (this.onTick) this.onTick();
  }

  getFormattedTime() {
    if (this.mode === "rest" || this.mode === "iso") {
      const m = Math.floor(this.remainingSeconds / 60);
      const s = this.remainingSeconds % 60;
      return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
    } else if (this.mode === "emom") {
      const s = Math.max(0, this.emomMinuteRemaining);
      return `00:${String(s).padStart(2, "0")}`;
    }
    return "00:00";
  }
}

const timer = new WorkoutTimer();

// ============================================================================
// 6. CONTROLADOR DE UI E RENDERIZAÇÃO
// ============================================================================
class AppUI {
  constructor() {
    // Cache de Elementos DOM
    this.globalProgressBar = document.getElementById("globalProgressBar");
    this.globalProgressLabel = document.getElementById("globalProgressLabel");
    this.weeksNav = document.getElementById("weeksNav");
    this.daysNav = document.getElementById("daysNav");

    // Card do Treino
    this.workoutCard = document.getElementById("workoutCard");
    this.coachingAlertContainer = document.getElementById("coachingAlertContainer");
    this.sessionBadge = document.getElementById("sessionBadge");
    this.workoutTitle = document.getElementById("workoutTitle");
    this.sessionFocus = document.getElementById("sessionFocus");
    this.statusIndicator = document.getElementById("statusIndicator");

    // Referência Física e Contexto
    this.physicalRefBlock = document.getElementById("physicalRefBlock");
    this.physicalRefInput = document.getElementById("physicalRefInput");
    this.physicalRefHeightTag = document.getElementById("physicalRefHeightTag");
    this.contextSelector = document.getElementById("contextSelector");

    // Exercícios e AMRAP
    this.exercisesList = document.getElementById("exercisesList");

    // Coaching Métricas
    this.techniqueBtn = document.getElementById("techniqueBtn");
    this.techniquePill = document.getElementById("techniquePill");
    this.rpeButtons = document.querySelectorAll(".rpe-btn");
    this.completeWorkoutBtn = document.getElementById("completeWorkoutBtn");
    this.sessionSavedMeta = document.getElementById("sessionSavedMeta");

    // Timer Elements & Bottom Sheet
    this.timerDock = document.getElementById("timerDock");
    this.timerSheetHandle = document.getElementById("timerSheetHandle");
    this.timerMiniBar = document.getElementById("timerMiniBar");
    this.timerMiniExpandTrigger = document.getElementById("timerMiniExpandTrigger");
    this.miniDigits = document.getElementById("miniDigits");
    this.miniSublabel = document.getElementById("miniSublabel");
    this.miniModeBadge = document.getElementById("miniModeBadge");
    this.miniPlayBtn = document.getElementById("miniPlayBtn");
    this.miniPlayIcon = document.getElementById("miniPlayIcon");
    this.miniChevronBtn = document.getElementById("miniChevronBtn");

    this.timerModeBtns = document.querySelectorAll(".timer-mode-btn");
    this.timerDigits = document.getElementById("timerDigits");
    this.timerSublabel = document.getElementById("timerSublabel");
    this.timerPresetsContainer = document.getElementById("timerPresetsContainer");
    this.timerMainBtn = document.getElementById("timerMainBtn");
    this.timerResetBtn = document.getElementById("timerResetBtn");
    this.wakeLockStatus = document.getElementById("wakeLockStatus");

    // Modais e Backup
    this.settingsModal = document.getElementById("settingsModal");
    this.openSettingsBtn = document.getElementById("openSettingsBtn");
    this.closeSettingsBtn = document.getElementById("closeSettingsBtn");
    this.exportBackupBtn = document.getElementById("exportBackupBtn");
    this.importBackupBtn = document.getElementById("importBackupBtn");
    this.importFileInput = document.getElementById("importFileInput");
    this.resetAllBtn = document.getElementById("resetAllBtn");
    this.statCompletedCount = document.getElementById("statCompletedCount");
    this.statAmrapCount = document.getElementById("statAmrapCount");

    // Estado local transitório para o formulário do treino atual
    this.currentFormData = {
      context: "off",
      technique: "clean",
      rpe: "moderate",
      setsChecked: [],
      amrapReps: null
    };

    this.init();
  }

  init() {
    // Configura Wake Lock indicator
    wakeController.setIndicator(this.wakeLockStatus);

    // Seleciona a primeira semana com pendências
    appState.state.activeWeek = appState.findFirstPendingWeek();
    appState.save();

    // Setup de Timer callbacks
    timer.onTick = () => this.updateTimerDisplay();
    timer.onStateChange = () => {
      this.updateTimerDisplay();
      this.renderTimerPresets();
    };

    this.bindEvents();
    this.render();
    this.updateTimerDisplay();
    this.renderTimerPresets();

    // Scroll inicial da semana ativa
    setTimeout(() => this.scrollActiveWeekIntoView(), 150);
  }

  toggleTimerSheet(expand) {
    haptics.tap();
    if (typeof expand === "boolean") {
      this.timerDock.classList.toggle("is-expanded", expand);
    } else {
      this.timerDock.classList.toggle("is-expanded");
    }
  }

  bindEvents() {
    // Bottom Sheet / Mini-Player Toggle
    if (this.timerSheetHandle) {
      this.timerSheetHandle.addEventListener("click", () => this.toggleTimerSheet());
    }
    if (this.timerMiniExpandTrigger) {
      this.timerMiniExpandTrigger.addEventListener("click", () => this.toggleTimerSheet());
    }
    if (this.miniChevronBtn) {
      this.miniChevronBtn.addEventListener("click", () => this.toggleTimerSheet());
    }
    if (this.miniPlayBtn) {
      this.miniPlayBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        haptics.tap();
        if (timer.isRunning) {
          timer.pause();
        } else {
          timer.start();
        }
      });
    }

    // Seletor de semanas
    this.weeksNav.addEventListener("click", (e) => {
      const chip = e.target.closest(".week-chip");
      if (!chip) return;
      haptics.tap();
      const week = parseInt(chip.dataset.week, 10);
      if (week && week !== appState.state.activeWeek) {
        appState.state.activeWeek = week;
        appState.save();
        this.render();
      }
    });

    // Seletor de dias
    this.daysNav.addEventListener("click", (e) => {
      const tab = e.target.closest(".day-tab");
      if (!tab) return;
      haptics.tap();
      const day = tab.dataset.day;
      if (day && day !== appState.state.activeDay) {
        appState.state.activeDay = day;
        appState.save();
        this.render();
      }
    });

    // Contexto do dia (Off / Pré-Boxe / Pós-Boxe)
    this.contextSelector.addEventListener("click", (e) => {
      const btn = e.target.closest(".context-btn");
      if (!btn) return;
      haptics.tap();
      const ctx = btn.dataset.context;
      this.currentFormData.context = ctx;
      this.updateContextUI();
    });

    // Referência Física Input (salvamento automático com debounce)
    this.physicalRefInput.addEventListener("input", (e) => {
      const height = this.physicalRefInput.dataset.currentHeight;
      if (height) {
        appState.setPhysicalRef(height, e.target.value.trim());
      }
    });

    // Toggle Técnica Limpa / Quebrou
    this.techniqueBtn.addEventListener("click", () => {
      haptics.tap();
      this.currentFormData.technique = this.currentFormData.technique === "clean" ? "broken" : "clean";
      this.updateTechniqueUI();
    });

    // RPE Botões
    this.rpeButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        haptics.tap();
        this.currentFormData.rpe = btn.dataset.rpe;
        this.updateRpeUI();
      });
    });

    // Botão Concluir Treino do Dia
    this.completeWorkoutBtn.addEventListener("click", () => {
      this.handleCompleteWorkout();
    });

    // Undo / Desmarcar Treino
    this.sessionSavedMeta.addEventListener("click", (e) => {
      if (e.target.closest(".undo-btn")) {
        haptics.tap();
        const confirmUndo = confirm("Deseja desmarcar a conclusão desta sessão?");
        if (confirmUndo) {
          appState.deleteSession(appState.state.activeWeek, appState.state.activeDay);
          this.render();
        }
      }
    });

    // Modos do Timer
    this.timerModeBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        haptics.tap();
        const mode = btn.dataset.mode;
        this.timerModeBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        timer.setMode(mode);
      });
    });

    // Ações do Timer
    this.timerMainBtn.addEventListener("click", () => {
      haptics.tap();
      if (timer.isRunning) {
        timer.pause();
      } else {
        timer.start();
      }
    });

    this.timerResetBtn.addEventListener("click", () => {
      haptics.tap();
      timer.stop();
    });

    // Modais e Backup
    this.openSettingsBtn.addEventListener("click", () => this.openModal());
    this.closeSettingsBtn.addEventListener("click", () => this.closeModal());
    this.settingsModal.addEventListener("click", (e) => {
      if (e.target === this.settingsModal) this.closeModal();
    });

    this.exportBackupBtn.addEventListener("click", () => this.handleExportBackup());
    this.importBackupBtn.addEventListener("click", () => this.importFileInput.click());
    this.importFileInput.addEventListener("change", (e) => this.handleImportFile(e));
    this.resetAllBtn.addEventListener("click", () => this.handleResetAll());

    // Botão de Instalação PWA
    const installBtn = document.getElementById("installPwaBtn");
    if (installBtn) {
      installBtn.addEventListener("click", async () => {
        if (!deferredInstallPrompt) return;
        deferredInstallPrompt.prompt();
        const { outcome } = await deferredInstallPrompt.userChoice;
        if (outcome === "accepted") {
          installBtn.style.display = "none";
        }
        deferredInstallPrompt = null;
      });
    }
  }

  // ==========================================================================
  // RENDERIZAÇÃO GERAL
  // ==========================================================================
  render() {
    const { activeWeek, activeDay } = appState.state;
    const weekData = PROTOCOL_DATA[activeWeek];
    const sessionData = weekData ? weekData[activeDay] : null;

    if (!sessionData) return;

    // 1. Atualiza progresso global
    const totalDone = appState.getTotalCompletedSessions();
    const percent = Math.round((totalDone / 36) * 100);
    this.globalProgressBar.style.width = `${percent}%`;
    this.globalProgressLabel.textContent = `${totalDone} de 36 sessões (${percent}%)`;

    // 2. Renderiza botões de semanas (S1..S12)
    this.renderWeeksNav();

    // 3. Renderiza abas de dias (Seg / Qua / Sex)
    this.renderDaysNav();

    // 4. Alerta de Coaching da semana anterior
    const hasAlert = appState.hasCoachingAlertForWeek(activeWeek);
    if (hasAlert) {
      this.coachingAlertContainer.innerHTML = `
        <div class="coaching-alert">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
          </svg>
          <p><strong>Atenção ao RPE anterior:</strong> A semana passada registrou esforço pesado ou quebra técnica. Considere repetir esta semana antes de avançar a carga.</p>
        </div>
      `;
      this.coachingAlertContainer.style.display = "block";
    } else {
      this.coachingAlertContainer.innerHTML = "";
      this.coachingAlertContainer.style.display = "none";
    }

    // 5. Header do Card do Treino
    const dayNames = { seg: "Segunda-feira", qua: "Quarta-feira", sex: "Sexta-feira" };
    this.sessionBadge.textContent = `Semana ${activeWeek} · ${dayNames[activeDay]}`;
    this.workoutTitle.textContent = sessionData.focus;
    this.sessionFocus.textContent = weekData.title;

    // Carrega dados salvos da sessão (se houver)
    const savedSession = appState.getSession(activeWeek, activeDay);
    const isCompleted = savedSession && savedSession.completed;

    if (isCompleted) {
      this.statusIndicator.textContent = "Concluído";
      this.statusIndicator.className = "status-indicator is-done";
      this.currentFormData = {
        context: savedSession.context || "off",
        technique: savedSession.technique || "clean",
        rpe: savedSession.rpe || "moderate",
        setsChecked: Array.isArray(savedSession.setsChecked) ? savedSession.setsChecked : [],
        amrapReps: savedSession.amrapReps || null
      };

      const dateStr = savedSession.completedAt
        ? new Date(savedSession.completedAt).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "2-digit",
            hour: "2-digit",
            minute: "2-digit"
          })
        : "Salvo";

      this.sessionSavedMeta.innerHTML = `
        <span>Concluído em ${dateStr}</span>
        <button type="button" class="undo-btn">Desmarcar</button>
      `;
      this.completeWorkoutBtn.textContent = "Atualizar Registro";
      this.completeWorkoutBtn.className = "complete-btn is-completed";
    } else {
      this.statusIndicator.textContent = "Pendente";
      this.statusIndicator.className = "status-indicator";
      this.currentFormData = {
        context: "off",
        technique: "clean",
        rpe: "moderate",
        setsChecked: [],
        amrapReps: null
      };
      this.sessionSavedMeta.innerHTML = "";
      this.completeWorkoutBtn.textContent = "Concluir Treino do Dia";
      this.completeWorkoutBtn.className = "complete-btn";
    }

    // 6. Referência Física (apenas S1 a S4 caso haja exercícios inclinados com altura)
    this.renderPhysicalRef(sessionData);

    // 7. Contexto do dia (Off / Pré-Boxe / Pós-Boxe)
    this.updateContextUI();

    // 8. Exercícios e Séries
    this.renderExercises(sessionData);

    // 9. Métricas de Coaching (Técnica & RPE)
    this.updateTechniqueUI();
    this.updateRpeUI();
  }

  renderWeeksNav() {
    this.weeksNav.innerHTML = "";
    for (let w = 1; w <= 12; w++) {
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "week-chip";
      chip.dataset.week = w;

      if (w === appState.state.activeWeek) {
        chip.classList.add("active");
      }

      // Verifica status de conclusão dos 3 dias
      const days = ["seg", "qua", "sex"];
      const doneCount = days.filter((d) => {
        const s = appState.getSession(w, d);
        return s && s.completed;
      }).length;

      if (doneCount === 3) {
        chip.classList.add("completed");
      }

      // Verifica alerta de coaching
      if (appState.hasCoachingAlertForWeek(w)) {
        chip.classList.add("has-alert");
      }

      chip.innerHTML = `
        <span class="chip-label">S${w}</span>
        <span class="chip-sub mono">${doneCount}/3</span>
      `;

      this.weeksNav.appendChild(chip);
    }
  }

  renderDaysNav() {
    const days = [
      { key: "seg", label: "SEG" },
      { key: "qua", label: "QUA" },
      { key: "sex", label: "SEX" }
    ];

    this.daysNav.innerHTML = "";
    days.forEach((d) => {
      const tab = document.createElement("button");
      tab.type = "button";
      tab.className = "day-tab";
      tab.dataset.day = d.key;

      if (d.key === appState.state.activeDay) {
        tab.classList.add("active");
      }

      const s = appState.getSession(appState.state.activeWeek, d.key);
      const isDone = s && s.completed;

      if (isDone) {
        tab.classList.add("done");
      }

      tab.innerHTML = `
        <span class="day-tab-name">${d.label}</span>
        <span class="day-tab-status">${isDone ? "✓ Feito" : "Pendente"}</span>
      `;

      this.daysNav.appendChild(tab);
    });
  }

  renderPhysicalRef(sessionData) {
    const activeWeek = appState.state.activeWeek;

    // Procura se tem algum exercício inclinado com altura especificada
    let targetHeight = null;
    if (activeWeek <= 4) {
      for (const ex of sessionData.exercises) {
        if (ex.height) {
          targetHeight = `${ex.height}cm`;
          break;
        }
      }
    }

    if (targetHeight) {
      this.physicalRefBlock.style.display = "flex";
      this.physicalRefHeightTag.textContent = `Apoio ${targetHeight}`;
      this.physicalRefInput.dataset.currentHeight = targetHeight;
      this.physicalRefInput.value = appState.getPhysicalRef(targetHeight);
    } else {
      this.physicalRefBlock.style.display = "none";
      this.physicalRefInput.dataset.currentHeight = "";
    }
  }

  renderExercises(sessionData) {
    this.exercisesList.innerHTML = "";

    sessionData.exercises.forEach((ex, exIndex) => {
      // Se for exercício AMRAP de teste
      if (ex.isAmrap) {
        const amrapCard = document.createElement("div");
        amrapCard.className = "amrap-card";

        const savedReps = this.currentFormData.amrapReps !== null ? this.currentFormData.amrapReps : "";

        amrapCard.innerHTML = `
          <div class="amrap-header">
            <span class="amrap-title">${ex.name}</span>
            <span class="amrap-target-badge">Meta: ${ex.target}</span>
          </div>
          <p class="session-focus">Execute 1 série até a falha técnica ou concêntrica com peito tocando o solo.</p>
          <div class="amrap-input-group">
            <input type="number" min="0" max="100" class="amrap-input mono" id="amrapRepsInput" placeholder="0" value="${savedReps}">
            <div class="amrap-feedback" id="amrapFeedback">Insira as repetições completadas.</div>
          </div>
        `;

        this.exercisesList.appendChild(amrapCard);

        const input = amrapCard.querySelector("#amrapRepsInput");
        const feedback = amrapCard.querySelector("#amrapFeedback");

        const updateFeedback = (val) => {
          if (val === "" || isNaN(val)) {
            feedback.textContent = "Insira as repetições completadas.";
            feedback.className = "amrap-feedback";
            this.currentFormData.amrapReps = null;
            return;
          }
          const num = parseInt(val, 10);
          this.currentFormData.amrapReps = num;

          const targetMin = sessionData.targetMin || 5;
          const targetMax = sessionData.targetMax || 6;

          if (num >= targetMin) {
            feedback.textContent = `✓ Excelente! Meta atingida (${num} reps). Força consolidada!`;
            feedback.className = "amrap-feedback met";
          } else {
            feedback.textContent = `⚠ ${num} reps registradas. Abaixo da meta (${targetMin}-${targetMax}). Recomenda-se reforçar a semana anterior.`;
            feedback.className = "amrap-feedback below";
          }
        };

        input.addEventListener("input", (e) => updateFeedback(e.target.value));
        if (savedReps !== "") updateFeedback(savedReps);

        return;
      }

      // Bloco de Exercício Regular
      const block = document.createElement("div");
      block.className = "exercise-block";

      // Botão de carregar timer (se for prancha com isoSeconds ou EMOM)
      let timerBtnHtml = "";
      if (ex.isoSeconds) {
        timerBtnHtml = `
          <button type="button" class="timer-load-btn" data-iso="${ex.isoSeconds}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            ${ex.isoSeconds}s Timer
          </button>
        `;
      } else if (ex.emomMinutes) {
        timerBtnHtml = `
          <button type="button" class="timer-load-btn" data-emom="${ex.emomMinutes}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            EMOM ${ex.emomMinutes}m
          </button>
        `;
      }

      // Checkboxes de Séries
      let setsHtml = "";
      const setCount = ex.sets || 1;
      setsHtml += `<div class="sets-grid">`;

      for (let s = 1; s <= setCount; s++) {
        const setIndexKey = `${exIndex}_${s}`;
        const isChecked = this.currentFormData.setsChecked.includes(setIndexKey);

        let labelSub = `S${s}`;
        if (ex.reps) labelSub = `S${s} (${ex.reps})`;
        else if (ex.isoSeconds) labelSub = `S${s} (${ex.isoSeconds}s)`;

        setsHtml += `
          <label class="set-check-label ${isChecked ? "is-checked" : ""}" data-setkey="${setIndexKey}">
            <input type="checkbox" ${isChecked ? "checked" : ""}>
            <span class="set-text">${labelSub}</span>
          </label>
        `;
      }
      setsHtml += `</div>`;

      block.innerHTML = `
        <div class="exercise-header">
          <div class="exercise-num mono">${exIndex + 1}</div>
          <div class="exercise-info">
            <h4 class="exercise-name">${ex.name}</h4>
            <div class="exercise-detail">${ex.detail}</div>
          </div>
          ${timerBtnHtml}
        </div>
        ${setsHtml}
      `;

      // Eventos de Checklist
      block.querySelectorAll(".set-check-label").forEach((lbl) => {
        const checkbox = lbl.querySelector('input[type="checkbox"]');
        const setKey = lbl.dataset.setkey;

        checkbox.addEventListener("change", () => {
          haptics.tap();
          if (checkbox.checked) {
            lbl.classList.add("is-checked");
            if (!this.currentFormData.setsChecked.includes(setKey)) {
              this.currentFormData.setsChecked.push(setKey);
            }
          } else {
            lbl.classList.remove("is-checked");
            this.currentFormData.setsChecked = this.currentFormData.setsChecked.filter((k) => k !== setKey);
          }
          // Salva estado intermediário silenciosamente se já concluído
          this.autoSaveIfCompleted();
        });
      });

      // Evento de Carregar Timer
      const loadTimerBtn = block.querySelector(".timer-load-btn");
      if (loadTimerBtn) {
        loadTimerBtn.addEventListener("click", () => {
          haptics.tap();
          if (loadTimerBtn.dataset.iso) {
            const sec = parseInt(loadTimerBtn.dataset.iso, 10);
            this.activateTimerMode("iso", sec);
          } else if (loadTimerBtn.dataset.emom) {
            const min = parseInt(loadTimerBtn.dataset.emom, 10);
            this.activateTimerMode("emom", min);
          }
          this.toggleTimerSheet(true);
        });
      }

      this.exercisesList.appendChild(block);
    });
  }

  activateTimerMode(mode, value) {
    this.timerModeBtns.forEach((b) => {
      if (b.dataset.mode === mode) b.classList.add("active");
      else b.classList.remove("active");
    });
    timer.setMode(mode);
    if (mode === "iso" && value) {
      timer.setSeconds(value);
    } else if (mode === "emom" && value) {
      timer.setEmomMinutes(value);
    }
    this.toggleTimerSheet(true);
  }

  updateContextUI() {
    const buttons = this.contextSelector.querySelectorAll(".context-btn");
    buttons.forEach((btn) => {
      if (btn.dataset.context === this.currentFormData.context) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
    this.autoSaveIfCompleted();
  }

  updateTechniqueUI() {
    if (this.currentFormData.technique === "clean") {
      this.techniqueBtn.className = "technique-toggle-btn clean";
      this.techniquePill.textContent = "Execução Limpa";
    } else {
      this.techniqueBtn.className = "technique-toggle-btn broken";
      this.techniquePill.textContent = "Técnica Quebrou";
    }
    this.autoSaveIfCompleted();
  }

  updateRpeUI() {
    this.rpeButtons.forEach((btn) => {
      if (btn.dataset.rpe === this.currentFormData.rpe) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
    this.autoSaveIfCompleted();
  }

  autoSaveIfCompleted() {
    const current = appState.getSession(appState.state.activeWeek, appState.state.activeDay);
    if (current && current.completed) {
      appState.updateSession(appState.state.activeWeek, appState.state.activeDay, {
        context: this.currentFormData.context,
        technique: this.currentFormData.technique,
        rpe: this.currentFormData.rpe,
        setsChecked: this.currentFormData.setsChecked,
        amrapReps: this.currentFormData.amrapReps
      });
    }
  }

  handleCompleteWorkout() {
    sound.finish();
    haptics.success();
    const now = new Date().toISOString();
    appState.updateSession(appState.state.activeWeek, appState.state.activeDay, {
      completed: true,
      completedAt: now,
      context: this.currentFormData.context,
      technique: this.currentFormData.technique,
      rpe: this.currentFormData.rpe,
      setsChecked: this.currentFormData.setsChecked,
      amrapReps: this.currentFormData.amrapReps
    });

    this.render();

    // Feedback visual sutil
    const btn = this.completeWorkoutBtn;
    btn.style.transform = "scale(0.97)";
    setTimeout(() => {
      btn.style.transform = "";
    }, 150);
  }

  scrollActiveWeekIntoView() {
    const activeChip = this.weeksNav.querySelector(".week-chip.active");
    if (activeChip) {
      activeChip.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  }

  // ==========================================================================
  // RENDERIZAÇÃO DO CRONÔMETRO (DRAWER & MINI-PLAYER)
  // ==========================================================================
  updateTimerDisplay() {
    const timeFormatted = timer.getFormattedTime();
    this.timerDigits.textContent = timeFormatted;
    if (this.miniDigits) {
      this.miniDigits.textContent = timeFormatted;
    }

    if (timer.isRunning) {
      this.timerDigits.classList.add("running");
      this.timerMainBtn.textContent = "Pausar";
      this.timerMainBtn.classList.add("running");

      if (this.miniDigits) this.miniDigits.classList.add("running");
      if (this.miniPlayBtn) {
        this.miniPlayBtn.classList.add("running");
        this.miniPlayIcon.innerHTML = `
          <rect x="6" y="5" width="4" height="14" rx="1"/>
          <rect x="14" y="5" width="4" height="14" rx="1"/>
        `;
      }
    } else {
      this.timerDigits.classList.remove("running");
      this.timerMainBtn.textContent = "Iniciar";
      this.timerMainBtn.classList.remove("running");

      if (this.miniDigits) this.miniDigits.classList.remove("running");
      if (this.miniPlayBtn) {
        this.miniPlayBtn.classList.remove("running");
        this.miniPlayIcon.innerHTML = `
          <polygon points="5 3 19 12 5 21 5 3"/>
        `;
      }
    }

    let modeText = "Descanso";
    let badgeText = "REST";
    let badgeClass = "mini-mode-badge";

    if (timer.mode === "rest") {
      modeText = "Descanso";
      badgeText = "REST";
      badgeClass = "mini-mode-badge";
    } else if (timer.mode === "iso") {
      modeText = `Isometria (${timer.totalSeconds}s)`;
      badgeText = "ISO";
      badgeClass = "mini-mode-badge iso";
    } else if (timer.mode === "emom") {
      modeText = `Minuto ${timer.emomCurrentMinute} de ${timer.emomTotalMinutes}`;
      badgeText = "EMOM";
      badgeClass = "mini-mode-badge emom";
    }

    this.timerSublabel.textContent = modeText;
    if (this.miniSublabel) this.miniSublabel.textContent = modeText;
    if (this.miniModeBadge) {
      this.miniModeBadge.textContent = badgeText;
      this.miniModeBadge.className = badgeClass;
    }
  }

  renderTimerPresets() {
    this.timerPresetsContainer.innerHTML = "";

    if (timer.mode === "rest") {
      const presets = [60, 90, 120];
      presets.forEach((sec) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = `preset-btn ${timer.totalSeconds === sec ? "active" : ""}`;
        btn.textContent = `${sec}s`;
        btn.addEventListener("click", () => {
          haptics.tap();
          timer.setSeconds(sec);
        });
        this.timerPresetsContainer.appendChild(btn);
      });
    } else if (timer.mode === "iso") {
      const presets = [20, 25, 30, 35, 40, 45, 50, 60];
      presets.forEach((sec) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = `preset-btn ${timer.totalSeconds === sec ? "active" : ""}`;
        btn.textContent = `${sec}s`;
        btn.addEventListener("click", () => {
          haptics.tap();
          timer.setSeconds(sec);
        });
        this.timerPresetsContainer.appendChild(btn);
      });
    } else if (timer.mode === "emom") {
      const presets = [8, 10, 12];
      presets.forEach((min) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = `preset-btn ${timer.emomTotalMinutes === min ? "active" : ""}`;
        btn.textContent = `${min} min`;
        btn.addEventListener("click", () => {
          haptics.tap();
          timer.setEmomMinutes(min);
        });
        this.timerPresetsContainer.appendChild(btn);
      });
    }
  }

  // ==========================================================================
  // MODAL E BACKUP (EXPORTAR / IMPORTAR / RESETAR)
  // ==========================================================================
  openModal() {
    this.statCompletedCount.textContent = `${appState.getTotalCompletedSessions()}/36`;

    // Conta AMRAPs feitos
    let amrapDone = 0;
    const testKeys = ["w4_sex", "w8_sex", "w12_sex"];
    testKeys.forEach((k) => {
      if (appState.state.sessions[k] && appState.state.sessions[k].completed) amrapDone++;
    });
    this.statAmrapCount.textContent = `${amrapDone}/3`;

    this.settingsModal.classList.add("is-open");
    this.settingsModal.setAttribute("aria-hidden", "false");
  }

  closeModal() {
    this.settingsModal.classList.remove("is-open");
    this.settingsModal.setAttribute("aria-hidden", "true");
  }

  handleExportBackup() {
    const dataStr = JSON.stringify(appState.state, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    const dateStr = new Date().toISOString().slice(0, 10);
    a.href = url;
    a.download = `pushup12s_backup_${dateStr}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  handleImportFile(event) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const parsed = JSON.parse(e.target.result);
        if (parsed && typeof parsed === "object" && parsed.sessions) {
          appState.state = {
            ...defaultState,
            ...parsed,
            physicalRefs: { ...defaultState.physicalRefs, ...(parsed.physicalRefs || {}) }
          };
          appState.save();
          alert("Backup restaurado com sucesso!");
          this.closeModal();
          this.render();
        } else {
          alert("Arquivo de backup inválido.");
        }
      } catch (err) {
        alert("Erro ao ler o arquivo JSON.");
      }
    };
    reader.readAsText(file);
    event.target.value = "";
  }

  handleResetAll() {
    const firstConfirm = confirm("ATENÇÃO: Deseja realmente resetar TODO o progresso de 12 semanas?");
    if (!firstConfirm) return;

    const secondConfirm = prompt("Digite 'RESET' para confirmar a limpeza definitiva dos dados:");
    if (secondConfirm === "RESET") {
      appState.resetAll();
      alert("Progresso reiniciado com sucesso.");
      this.closeModal();
      this.init();
    } else {
      alert("Operação cancelada.");
    }
  }
}

// ============================================================================
// 7. REGISTRO DO SERVICE WORKER & PWA INSTALL HANDLER
// ============================================================================
let deferredInstallPrompt = null;

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredInstallPrompt = e;
  const installBtn = document.getElementById("installPwaBtn");
  if (installBtn) {
    installBtn.style.display = "inline-flex";
  }
});

window.addEventListener("appinstalled", () => {
  const installBtn = document.getElementById("installPwaBtn");
  if (installBtn) {
    installBtn.style.display = "none";
  }
  deferredInstallPrompt = null;
  console.log("PWA instalado com sucesso!");
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./sw.js")
      .then((reg) => {
        console.log("Service Worker registrado com escopo:", reg.scope);
      })
      .catch((err) => {
        console.warn("Falha no registro do Service Worker:", err);
      });
  });
}

// Geração Dinâmica de Ícones PNG em Runtime (via Canvas) para Apple & navegadores legados
function generateAndInjectPngIcons() {
  try {
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Fundo Gradiente Tático
    const bgGrad = ctx.createLinearGradient(0, 0, 512, 512);
    bgGrad.addColorStop(0, "#0a0d14");
    bgGrad.addColorStop(1, "#141a24");
    ctx.fillStyle = bgGrad;

    // Retângulo arredondado
    const r = 100;
    ctx.beginPath();
    ctx.moveTo(r, 0);
    ctx.lineTo(512 - r, 0);
    ctx.quadraticCurveTo(512, 0, 512, r);
    ctx.lineTo(512, 512 - r);
    ctx.quadraticCurveTo(512, 512, 512 - r, 512);
    ctx.lineTo(r, 512);
    ctx.quadraticCurveTo(0, 512, 0, 512 - r);
    ctx.lineTo(0, r);
    ctx.quadraticCurveTo(0, 0, r, 0);
    ctx.closePath();
    ctx.fill();

    // Borda interna sutil
    ctx.lineWidth = 6;
    ctx.strokeStyle = "#263142";
    ctx.stroke();

    // Linha de solo
    ctx.lineWidth = 12;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#475569";
    ctx.beginPath();
    ctx.moveTo(90, 440);
    ctx.lineTo(422, 440);
    ctx.stroke();

    // Linha azul secundária
    ctx.lineWidth = 24;
    ctx.lineJoin = "round";
    ctx.strokeStyle = "#38bdf8";
    ctx.beginPath();
    ctx.moveTo(168, 390);
    ctx.lineTo(256, 300);
    ctx.lineTo(344, 390);
    ctx.stroke();

    // Linha dourada primária
    ctx.lineWidth = 38;
    ctx.strokeStyle = "#f59e0b";
    ctx.beginPath();
    ctx.moveTo(120, 340);
    ctx.lineTo(256, 200);
    ctx.lineTo(392, 340);
    ctx.stroke();

    // Cabeça / Círculo
    ctx.fillStyle = "#f59e0b";
    ctx.beginPath();
    ctx.arc(256, 130, 34, 0, Math.PI * 2);
    ctx.fill();

    const pngDataUrl = canvas.toDataURL("image/png");

    // Injeta apple-touch-icon
    let appleIcon = document.querySelector('link[rel="apple-touch-icon"]');
    if (!appleIcon) {
      appleIcon = document.createElement("link");
      appleIcon.rel = "apple-touch-icon";
      document.head.appendChild(appleIcon);
    }
    appleIcon.href = pngDataUrl;

    // Injeta favicon PNG
    let pngFavicon = document.querySelector('link[rel="icon"][type="image/png"]');
    if (!pngFavicon) {
      pngFavicon = document.createElement("link");
      pngFavicon.rel = "icon";
      pngFavicon.type = "image/png";
      document.head.appendChild(pngFavicon);
    }
    pngFavicon.href = pngDataUrl;
  } catch (err) {
    console.warn("Falha ao gerar PNG icons em runtime:", err);
  }
}

// Inicializa a UI ao carregar o DOM
document.addEventListener("DOMContentLoaded", () => {
  generateAndInjectPngIcons();
  new AppUI();
});
