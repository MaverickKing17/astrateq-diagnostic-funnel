import { ShieldCheck } from 'lucide-react';

interface HeaderProps {
  onReset: () => void;
  onOpenAbout: () => void;
}

export default function Header({ onReset, onOpenAbout }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-slate-200 shadow-sm px-4 py-2.5 transition-all">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {/* Brand Logo & Title */}
        <button 
          onClick={onReset}
          className="flex items-center text-left group hover:opacity-90 transition-opacity"
          id="brand_logo_btn"
        >
          <div className="h-12 w-auto max-w-[140px] flex items-center justify-start overflow-hidden">
            <img 
              src="https://i.ibb.co/rfHxnJNM/Astrateq.png" 
              alt="Astrateq Gadgets Logo" 
              className="h-12 w-auto object-contain group-hover:scale-102 transition-transform"
              referrerPolicy="no-referrer"
            />
          </div>
        </button>

        {/* Privacy-First Badge */}
        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-100/80 text-sky-800 text-xs font-medium font-sans">
          <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
          <span>Privacy-First Driver Intelligence</span>
        </div>

        {/* Menu indicator / README link */}
        <div className="flex items-center gap-3">
          <div className="text-right hidden md:block">
            <span className="text-[10px] text-slate-400 block font-mono">VAL-ID</span>
            <span className="text-xs font-semibold text-sky-600 uppercase tracking-wider">PRE-LAUNCH COHORT</span>
          </div>
          <button 
            onClick={onOpenAbout}
            className="w-9 h-9 rounded-xl hover:bg-slate-100 flex flex-col justify-center gap-1 items-end px-2.5 cursor-pointer border border-slate-200 transition-all hover:border-slate-300"
            aria-label="Open Documentation"
            id="header_menu_btn"
          >
            <div className="w-4 h-[2px] bg-[#102A43] rounded-full"></div>
            <div className="w-5 h-[2px] bg-[#102A43] rounded-full"></div>
            <div className="w-3.5 h-[2px] bg-[#102A43] rounded-full"></div>
          </button>
        </div>
      </div>
    </header>
  );
}
