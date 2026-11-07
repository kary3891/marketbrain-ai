import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  Search, 
  Activity, 
  BarChart3, 
  Users, 
  FolderKanban, 
  FileText, 
  Database, 
  Sparkles, 
  Filter
} from 'lucide-react';

export default function MarketBrainAI() {
  const [oportunidades, setOportunidades] = useState([
    {
      id: '1',
      nicho: 'Salud & Ergonomía',
      red_social: 'TikTok @SaludRemota',
      dolor_auditado: 'Llevo 6 meses trabajando remoto y el dolor de espalda baja me está matando...',
      solucion_sugerida: 'Rutina 5 Min "Espalda Sana PDF"',
      winning_score: 94,
      intensidad_dolor: 9.5,
      volumen_busqueda: 9.0,
      nivel_competencia: 2.0
    },
    {
      id: '2',
      nicho: 'Finanzas Micro-Negocios',
      red_social: 'TikTok @EmprendeControl',
      dolor_auditado: 'No entiendo el Excel tradicional para llevar la caja chica de mi tienda...',
      solucion_sugerida: 'Plantilla Excel "Cero-Fórmulas"',
      winning_score: 87,
      intensidad_dolor: 8.8,
      volumen_busqueda: 8.5,
      nivel_competencia: 3.5
    }
  ]);
  const [filtroNicho, setFiltroNicho] = useState('Todos');
  const [busqueda, setBusqueda] = useState('');
  const [selectedOp, setSelectedOp] = useState(null);

  const oportunidadesFiltradas = oportunidades.filter(op => {
    const coincideNicho = filtroNicho === 'Todos' || op.nicho.toLowerCase().includes(filtroNicho.toLowerCase());
    const coincideBusqueda = op.dolor_auditado.toLowerCase().includes(busqueda.toLowerCase()) || op.solucion_sugerida.toLowerCase().includes(busqueda.toLowerCase());
    return coincideNicho && coincideBusqueda;
  });

  return (
    <div className="flex h-screen bg-[#090A0F] text-[#E0E0E0] font-sans antialiased overflow-hidden">
      
      {/* SIDEBAR LATERAL */}
      <aside className="w-64 bg-[#12141C] border-r border-white/10 flex flex-col justify-between hidden md:flex">
        <div>
          <div className="flex items-center gap-3 px-6 py-6 border-b border-white/10">
            <Brain className="w-7 h-7 text-indigo-500 animate-pulse" />
            <div>
              <h1 className="font-bold text-white text-base tracking-wide">MarketBrain AI</h1>
              <span className="text-xs text-indigo-400 font-mono">v1.0 Inverse Engine</span>
            </div>
          </div>
          
          <nav className="p-4 space-y-1">
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-indigo-600/10 text-indigo-400 font-medium text-sm">
              <BarChart3 className="w-4 h-4" /> Radar de Oportunidades
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:bg-white/5 hover:text-white transition text-sm">
              <Users className="w-4 h-4" /> Avatares Detectados
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:bg-white/5 hover:text-white transition text-sm">
              <FolderKanban className="w-4 h-4" /> Ecosistemas
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:bg-white/5 hover:text-white transition text-sm">
              <FileText className="w-4 h-4" /> Guionista TikTok
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:bg-white/5 hover:text-white transition text-sm">
              <Database className="w-4 h-4" /> Supabase DB
            </a>
          </nav>
        </div>

        <div className="p-4 border-t border-white/10">
          <div className="bg-white/5 p-3 rounded-lg border border-white/5 text-xs text-slate-400">
            <span className="font-semibold text-emerald-400">● Supabase:</span> Sincronizado
          </div>
        </div>
      </aside>

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
        {/* HEADER SUPERIOR */}
        <header className="h-16 bg-[#12141C] border-b border-white/10 flex items-center justify-between px-6">
          <div className="flex items-center gap-4 flex-1 max-w-md">
            <div className="relative w-full">
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-500" />
              <input 
                type="text" 
                placeholder="Buscar dolor, nicho o solución..." 
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="w-full bg-[#1A1D29] border border-white/10 rounded-lg pl-9 pr-4 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full text-xs text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              Motor de Escucha: Activo
            </div>
            <div className="bg-[#1A1D29] border border-white/10 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-300">
              Latam (Real-Time) ▾
            </div>
          </div>
        </header>

        {/* PANEL DE TRABAJO */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#090A0F]">
          
          {/* FILTROS INTELIGENTES DE NICHO */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Nichos:
            </span>
            {['Todos', 'Salud', 'Finanzas', 'Productividad'].map((nicho) => (
              <button
                key={nicho}
                onClick={() => setFiltroNicho(nicho)}
                className={`px-4 py-1.5 rounded-lg text-xs font-medium transition ${
                  filtroNicho === nicho 
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' 
                    : 'bg-[#161822] border border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                }`}
              >
                {nicho === 'Todos' ? 'Todos los Nichos' : nicho}
              </button>
            ))}
          </div>

          {/* GRID DE TARJETAS DE OPORTUNIDAD */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {oportunidadesFiltradas.map((op) => (
              <div 
                key={op.id}
                className="bg-[#161822] border border-white/10 rounded-xl p-5 flex flex-col justify-between hover:border-indigo-500/50 transition duration-200 shadow-xl"
              >
                <div>
                  {/* HEADER CON WINNING SCORE */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-slate-400 font-medium">
                      {op.nicho}
                    </span>
                    <span className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs px-2.5 py-1 rounded-full flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3" /> {op.winning_score}% WINNING SCORE
                    </span>
                  </div>

                  <div className="text-xs font-mono text-indigo-400 mb-3">
                    Red Asignada: {op.red_social}
                  </div>

                  {/* DOLOR AUDITADO */}
                  <div className="mb-4">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block mb-1">
                      Dolor Auditado (Redes Sociales):
                    </span>
                    <p className="text-sm text-slate-200 italic bg-black/20 p-3 rounded-lg border border-white/5">
                      "{op.dolor_auditado}"
                    </p>
                  </div>

                  {/* SOLUCIÓN SUGERIDA */}
                  <div className="mb-6">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block mb-1">
                      Solución Digital Recomendada:
                    </span>
                    <p className="text-sm font-semibold text-white">
                      {op.solucion_sugerida}
                    </p>
                  </div>
                </div>

                {/* BOTÓN DE ACCIÓN PROFESIONAL */}
                <button 
                  onClick={() => setSelectedOp(op)}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium text-xs py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 shadow-md shadow-indigo-600/20 transition active:scale-[0.98]"
                >
                  <Activity className="w-4 h-4" /> Ver Auditoría y Guion TikTok
                </button>
              </div>
            ))}
          </div>

        </div>
      </main>

      {/* DRAWER / PANEL LATERAL DE DETALLE */}
      {selectedOp && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex justify-end">
          <div className="w-full max-w-md bg-[#12141C] border-l border-white/10 h-full p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <h3 className="font-bold text-white text-base">Auditoría del Cerebro Inverso</h3>
                <button 
                  onClick={() => setSelectedOp(null)}
                  className="text-slate-400 hover:text-white p-1 rounded-lg bg-white/5"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4 text-sm">
                <div className="bg-[#1A1D29] p-4 rounded-xl border border-white/5">
                  <span className="text-xs text-indigo-400 font-mono block mb-1">NICHO SELECCIONADO</span>
                  <p className="font-semibold text-white">{selectedOp.nicho}</p>
                </div>

                <div className="bg-[#1A1D29] p-4 rounded-xl border border-white/5">
                  <span className="text-xs text-emerald-400 font-mono block mb-1">MÉTRICAS DEL WINNING SCORE</span>
                  <div className="grid grid-cols-3 gap-2 mt-2 text-center text-xs">
                    <div className="bg-black/20 p-2 rounded">
                      <span className="block text-slate-500 text-[10px]">Dolor</span>
                      <strong className="text-white">{selectedOp.intensidad_dolor}/10</strong>
                    </div>
                    <div className="bg-black/20 p-2 rounded">
                      <span className="block text-slate-500 text-[10px]">Búsqueda</span>
                      <strong className="text-white">{selectedOp.volumen_busqueda}/10</strong>
                    </div>
                    <div className="bg-black/20 p-2 rounded">
                      <span className="block text-slate-500 text-[10px]">Competencia</span>
                      <strong className="text-white">{selectedOp.nivel_competencia}/10</strong>
                    </div>
                  </div>
                </div>

                <div className="bg-[#1A1D29] p-4 rounded-xl border border-white/5">
                  <span className="text-xs text-indigo-400 font-mono block mb-1">GUION ESTRUCTURADO PARA TIKTOK</span>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    <strong>Hook (0-3s):</strong> "Si te pasa esto todos los días con {selectedOp.nicho.toLowerCase()}, tienes que ver este video..."<br/><br/>
                    <strong>Cuerpo (3-30s):</strong> Explicación rápida de cómo resolverlo usando {selectedOp.solucion_sugerida}.<br/><br/>
                    <strong>CTA (30s+):</strong> "Comenta la palabra 'INFO' y te envío el enlace directo por WhatsApp."
                  </p>
                </div>
              </div>
            </div>

            <button 
              onClick={() => setSelectedOp(null)}
              className="mt-6 w-full bg-white/10 hover:bg-white/15 text-white font-medium text-xs py-3 rounded-lg transition"
            >
              Cerrar Panel
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
