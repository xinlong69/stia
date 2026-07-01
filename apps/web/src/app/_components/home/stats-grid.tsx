// apps/web/components/widgets/currency-card.tsx
import { Card } from "@packages/ui/card"

export function StatsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {/* Dark Theme Accent Card */}
      <Card className="bg-zinc-900 text-zinc-100 rounded-2xl p-5 shadow-sm border-none flex flex-col justify-between h-36">
        <div>
          <p className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">Atlas - Countries Visited</p>
          <p className="text-4xl font-bold mt-2">6 <span className="text-sm font-normal text-zinc-500">of 195</span></p>
        </div>
        <div className="flex gap-1 items-center text-xs">🌍 Flag Badges Here</div>
      </Card>

      {/* Standard White Metric Card with Sparkline */}
      <Card className="bg-white rounded-2xl p-5 shadow-sm border-none flex flex-col justify-between h-36 relative overflow-hidden">
        <div>
          <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Trips Total</p>
          <p className="text-4xl font-bold mt-2">5</p>
          <p className="text-[10px] text-slate-400 mt-1">32 places mapped</p>
        </div>
        {/* Simple inline SVG simulation of a sparkline chart */}
        <svg className="absolute bottom-4 right-4 w-16 h-8 text-emerald-500" viewBox="0 0 100 50" fill="none" stroke="currentColor" strokeWidth="4">
          <path d="M0 45 Q 25 35, 50 40 T 100 10" strokeLinecap="round"/>
        </svg>
      </Card>

      {/* Repeat structural approach for Days Traveled & Distance Flown */}
    </div>
  )
}