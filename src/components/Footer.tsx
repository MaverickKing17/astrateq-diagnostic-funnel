import { Shield, EyeOff, Globe, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 px-6 border-t border-slate-900 font-sans" id="app_footer">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-slate-900">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-primary to-brand-secondary flex items-center justify-center text-white font-display font-bold text-sm">
                A
              </div>
              <span className="font-display font-bold text-white tracking-tight">ASTRATEQ GADGETS</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Privacy-first vehicle intelligence for Canadian driver readiness. Empowering Ontario commuters, summer adventurers, and families without surveillance.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
              <MapPin className="w-3.5 h-3.5 text-slate-500" />
              <span>Designed for roads in Ontario & Canada</span>
            </div>
          </div>

          {/* Col 2: Strategic Wedge */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-200 font-bold">Privacy Core</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Shield className="w-4 h-4 text-brand-secondary shrink-0 mt-0.5" />
                <span><strong>No Insurance Tracking:</strong> We never sell telemetry logs, speeds, or route coordinates to auto insurers or advertisers.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <EyeOff className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong>Local-First Diagnostic:</strong> Raw vehicle network calculations occur in physical gadget sandboxes, keeping driving logs private.</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Resources & Socials */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-200 font-bold">Astrateq Funnel Navigation</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <span className="hover:text-white cursor-pointer transition-colors">About Us</span>
              <span className="hover:text-white cursor-pointer transition-colors">Privacy Charter</span>
              <span className="hover:text-white cursor-pointer transition-colors">How It Works</span>
              <span className="hover:text-white cursor-pointer transition-colors">Compatibility</span>
              <span className="hover:text-white cursor-pointer transition-colors">Ontario Commutes</span>
              <span className="hover:text-white cursor-pointer transition-colors">Founding Cohort</span>
            </div>
            <div className="pt-2 flex items-center gap-4">
              <a href="#" className="p-2 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors" aria-label="Website">
                <Globe className="w-4 h-4" />
              </a>
              <span className="text-xs text-slate-500">Astrateq pre-launch validation program • v1.0-CA</span>
            </div>
          </div>

        </div>

        {/* Legal and Disclaimer Row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <div>
            <p>© {new Date().getFullYear()} Astrateq Gadgets. All rights reserved. Registered pre-launch automotive project in Canada.</p>
            <p className="mt-1">Astrateq Gadgets diagnostic tools are built to validate early demand. This diagnostic is for informational, pre-purchase validation purposes and does not replace official mechanical inspections.</p>
          </div>
          <div className="flex gap-4 shrink-0">
            <span className="hover:underline cursor-pointer">Terms of Service</span>
            <span className="hover:underline cursor-pointer">Privacy Promise</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
