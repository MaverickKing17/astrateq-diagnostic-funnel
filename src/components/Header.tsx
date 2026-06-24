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
          <div className="h-14 w-auto max-w-[175px] flex items-center justify-start overflow-hidden">
            <img 
              src="https://i.ibb.co/rfHxnJNM/Astrateq.png" 
              alt="Astrateq Gadgets Logo" 
              className="h-14 w-auto object-contain group-hover:scale-102 transition-transform"
              referrerPolicy="no-referrer"
            />
          </div>
        </button>

        {/* Privacy-First Badge */}
        <div className="hidden md:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-100/80 text-sky-800 text-xs font-semibold font-sans">
          <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
          <span>Privacy-First Driver Intelligence</span>
        </div>

        {/* Menu indicator / README link */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <span className="text-[10px] font-mono font-bold bg-sky-50 text-sky-700 border border-sky-150 px-3 py-1.5 rounded-full uppercase tracking-wider">
              Pre-Launch Cohort
            </span>
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
