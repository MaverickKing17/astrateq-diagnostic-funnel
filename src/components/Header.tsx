import { ShieldCheck, Cpu } from 'lucide-react';

interface HeaderProps {
  onReset: () => void;
}

export default function Header({ onReset }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-slate-100 px-4 py-3.5 transition-all">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {/* Brand Logo & Title */}
        <button 
          onClick={onReset}
          className="flex items-center gap-2.5 text-left group hover:opacity-90 transition-opacity"
          id="brand_logo_btn"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-primary to-brand-secondary flex items-center justify-center text-white shadow-sm shadow-blue-500/20 group-hover:scale-105 transition-transform">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <div className="font-display font-bold text-slate-900 leading-tight tracking-tight text-lg">
              ASTRATEQ
            </div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-slate-500 font-semibold leading-none">
              GADGETS
            </div>
          </div>
        </button>

        {/* Privacy-First Badge */}
        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100/80 text-emerald-700 text-xs font-medium font-sans">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Privacy-First Driver Intelligence</span>
        </div>

        {/* Menu indicator */}
        <div className="flex items-center gap-3">
          <div className="text-right hidden md:block">
            <span className="text-[10px] text-slate-400 block font-mono">VAL-ID</span>
            <span className="text-xs font-semibold text-brand-primary">PRE-LAUNCH COHORT</span>
          </div>
          <div className="w-8 h-8 rounded-lg hover:bg-slate-50 flex flex-col justify-center gap-1.5 items-end px-1.5 cursor-pointer border border-slate-100">
            <div className="w-5 h-[2px] bg-slate-800 rounded-full"></div>
            <div className="w-4.5 h-[2px] bg-slate-800 rounded-full"></div>
            <div className="w-3 h-[2px] bg-slate-800 rounded-full"></div>
          </div>
        </div>
      </div>
    </header>
  );
}
