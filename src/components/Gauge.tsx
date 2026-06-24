import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface GaugeProps {
  score: number;
  size?: number;
}

export default function Gauge({ score, size = 200 }: GaugeProps) {
  const [animatedScore, setAnimatedScore] = useState(0);

  // Animate the text score climbing
  useEffect(() => {
    let start = 0;
    const duration = 1200; // ms
    const increment = score / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= score) {
        setAnimatedScore(score);
        clearInterval(timer);
      } else {
        setAnimatedScore(Math.round(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [score]);

  // Speedometer style SVG calculations
  const radius = 60;
  const strokeWidth = 10;
  const cx = 80;
  const cy = 80;
  const circumference = 2 * Math.PI * radius; // 376.99
  const sweepAngle = 240; // 240 degrees out of 360
  const activeSweepLength = (sweepAngle / 360) * circumference; // 251.3
  const gapLength = circumference - activeSweepLength; // 125.7

  // Animation calculation for path
  const targetOffset = activeSweepLength - (score / 100) * activeSweepLength;

  // Determine status metadata
  let statusText = 'Moderate Readiness';
  let statusColor = 'text-sky-500';
  let statusBg = 'bg-sky-50 text-sky-700 border-sky-100';
  let strokeColor = '#0ea5e9'; // sky-500

  if (score >= 80) {
    statusText = 'High Readiness';
    statusColor = 'text-emerald-500';
    statusBg = 'bg-emerald-50 text-emerald-700 border-emerald-100';
    strokeColor = '#10b981'; // emerald-500
  } else if (score < 60) {
    statusText = 'Needs Attention';
    statusColor = 'text-amber-500';
    statusBg = 'bg-amber-50 text-amber-700 border-amber-100';
    strokeColor = '#f59e0b'; // amber-500
  }

  return (
    <div className="flex flex-col items-center justify-center font-sans">
      <div className="relative" style={{ width: size, height: size * 0.85 }}>
        {/* Speedometer SVG */}
        <svg
          viewBox="0 0 160 160"
          className="w-full h-full transform -rotate-210" // Rotate so the 240° sweep is centered vertically at top
        >
          {/* Track background */}
          <circle
            cx={cx}
            cy={cy}
            r={radius}
            fill="none"
            stroke="#f1f5f9" // slate-100
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={`${activeSweepLength} ${gapLength}`}
          />

          {/* Active filled path with spring transition */}
          <motion.circle
            cx={cx}
            cy={cy}
            r={radius}
            fill="none"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={`${activeSweepLength} ${gapLength}`}
            initial={{ strokeDashoffset: activeSweepLength }}
            animate={{ strokeDashoffset: targetOffset }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </svg>

        {/* Floating Digital Stats in Center */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-4">
          <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase font-semibold">
            READINESS
          </span>
          <div className="flex items-baseline gap-0.5 mt-0.5">
            <span className="text-5xl font-display font-black text-slate-900 tracking-tight">
              {animatedScore}
            </span>
            <span className="text-sm font-semibold text-slate-400">/ 100</span>
          </div>
          <div className="mt-2.5">
            <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${statusBg}`}>
              {statusText}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
