"use client";

import { Avatar, AvatarFallback } from "@packages/ui/components/avatar";

export function TripBanner() {
  return (
    <div className="relative h-100 w-full rounded-3xl overflow-hidden bg-[url('/berlin.jpg')] bg-cover bg-center shadow-md">
      {/* Dark overlay grid overlay for text readability */}
      <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-black/20" />

      {/* Top Controls */}
      <div className="absolute top-6 left-6 right-6 flex justify-between items-center">
        <span className="bg-blue-600/90 text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
          LIVE NOW
        </span>
      </div>

      {/* Main Destination Text */}
      <div className="absolute bottom-32 left-8">
        <h1 className="text-6xl font-black text-white tracking-tight">Berlin 2026</h1>
      </div>

      {/* Pinned Info Dashboard Bar */}
      <div className="absolute bottom-6 left-6 right-6 backdrop-blur-xl bg-white/75 rounded-2xl p-4 grid grid-cols-4 divide-x divide-slate-300/50 text-center shadow-lg">
        <div>
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Buddies</p>
          <div className="flex justify-center -space-x-2 mt-1">
            <Avatar className="h-6 w-6 border-2 border-white"><AvatarFallback className="bg-neutral-900 text-white text-[10px]">ER</AvatarFallback></Avatar>
            <Avatar className="h-6 w-6 border-2 border-white"><AvatarFallback className="bg-emerald-600 text-white text-[10px]">ED</AvatarFallback></Avatar>
            <Avatar className="h-6 w-6 border-2 border-white"><AvatarFallback className="bg-amber-500 text-white text-[10px]">VI</AvatarFallback></Avatar>
          </div>
        </div>
        <div>
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Trip Dates</p>
          <p className="text-xl font-bold mt-1">8 <span className="text-xs font-normal text-slate-400">JUN</span> → 26 <span className="text-xs font-normal text-slate-400">JUN</span></p>
        </div>
        <div>
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Ongoing</p>
          <p className="text-2xl font-black text-neutral-900">10 <span className="text-xs font-normal text-slate-500">DAYS LEFT</span></p>
        </div>
        <div>
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Places</p>
          <p className="text-xl font-bold mt-1">12 <span className="text-xs font-normal text-slate-400">DESTINATIONS</span></p>
        </div>
      </div>
    </div>
  )
}