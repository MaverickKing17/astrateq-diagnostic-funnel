import { useState } from 'react';
import { Terminal, ChevronDown, ChevronUp, Radio, Trash2 } from 'lucide-react';
import { AnalyticsEvent } from '../types';

interface EventLoggerProps {
  events: AnalyticsEvent[];
  onClear: () => void;
}

export default function EventLogger({ events, onClear }: EventLoggerProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50 font-sans max-w-sm w-[90vw] md:w-96">
      {/* Closed Mini Bubble */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 bg-slate-900 text-white px-3.5 py-2.5 rounded-full shadow-lg border border-slate-800 hover:bg-slate-800 transition-all cursor-pointer group float-right"
          id="open_telemetry_btn"
        >
          <div className="relative">
            <Terminal className="w-4 h-4 text-brand-secondary" />
            {events.length > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            )}
          </div>
          <span className="text-xs font-semibold font-mono">
            Funnel Analytics ({events.length})
          </span>
          <ChevronUp className="w-3.5 h-3.5 text-slate-400 group-hover:translate-y-[-1px] transition-transform" />
        </button>
      )}

      {/* Open Console Drawer */}
      {isOpen && (
        <div className="bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-96">
          {/* Header */}
          <div className="bg-slate-900 px-4 py-3 border-b border-slate-850 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Radio className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span className="text-xs font-bold font-mono text-slate-100 uppercase tracking-wider">
                Funnel Event Console
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={onClear}
                className="p-1 rounded text-slate-400 hover:text-rose-400 hover:bg-slate-800 transition-colors cursor-pointer"
                title="Clear Logs"
                id="clear_telemetry_btn"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors cursor-pointer"
                id="close_telemetry_btn"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Logs List */}
          <div className="p-3 overflow-y-auto space-y-2 flex-1 scrollbar-thin scrollbar-thumb-slate-800 bg-slate-950">
            {events.length === 0 ? (
              <div className="text-center py-8 text-slate-600 font-mono text-xs">
                No telemetry events logged yet.
                <br />
                <span className="text-[10px] text-slate-700 mt-1 block">
                  Complete questions to fire events!
                </span>
              </div>
            ) : (
              [...events].reverse().map((ev, index) => (
                <div
                  key={ev.id}
                  className="bg-slate-900/60 border border-slate-850 p-2.5 rounded-lg font-mono text-[11px] leading-relaxed transition-all hover:bg-slate-900/100"
                >
                  <div className="flex items-center justify-between text-[10px] text-slate-500 mb-1">
                    <span>{ev.timestamp}</span>
                    <span className="bg-slate-800 text-slate-400 px-1.5 py-0.2 rounded font-semibold text-[9px]">
                      EVENT
                    </span>
                  </div>
                  <div className="text-emerald-400 font-bold break-all">
                    {ev.name}
                  </div>
                  {ev.data && (
                    <pre className="text-slate-400 text-[9px] mt-1.5 bg-slate-950 p-1.5 rounded overflow-x-auto max-h-24">
                      {JSON.stringify(ev.data, null, 2)}
                    </pre>
                  )}
                </div>
              ))
            )}
          </div>

          {/* Console Footer */}
          <div className="bg-slate-900 px-3 py-2 text-[9px] font-mono text-slate-500 border-t border-slate-850 flex items-center justify-between">
            <span>ASTRATEQ VALIDATION PILOT</span>
            <span className="text-emerald-500 font-semibold uppercase">ACTIVE TRACKING</span>
          </div>
        </div>
      )}
    </div>
  );
}
