"use client";

import { Button } from "@packages/ui/components/button";
import { Compass } from '@packages/ui/icons';

export function MapCard() {
  return (
    <section className="relative h-64 w-full bg-[#83b0e3] rounded-2xl overflow-hidden border border-zinc-800/50 shadow-inner">
      {/* Simulated Map Background Content based on image_a51a5e.jpg */}
      <div className="absolute inset-0 opacity-40 mix-blend-multiply bg-radial from-transparent to-black/20 pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 text-blue-900/40 text-xs font-serif italic font-semibold tracking-widest uppercase select-none">
        Sargasso Sea
      </div>
      <div className="absolute top-1/3 left-1/2 text-blue-900/30 text-[10px] font-sans font-bold select-none">
        Gulf of Mexico
      </div>
      
      {/* Top Stat overlay row */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10">
        <div className="flex bg-[#1c1c24]/90 backdrop-blur-md rounded-xl p-2.5 px-4 shadow-lg items-center gap-4 border border-zinc-700/30">
          <div className="text-center pr-3 border-r border-zinc-700/50">
            <span className="block text-lg font-black text-zinc-200 leading-none">0</span>
            <span className="text-[9px] uppercase font-bold text-zinc-400 tracking-wider">Countries</span>
          </div>
          <div className="text-center pr-3 border-r border-zinc-700/50">
            <span className="block text-lg font-black text-zinc-200 leading-none">0</span>
            <span className="text-[9px] uppercase font-bold text-zinc-400 tracking-wider">Cities & Regions</span>
          </div>
        </div>
      </div>

      {/* Simulated Map Controls (Bottom Right) */}
      <div className="absolute bottom-4 right-4 flex flex-col gap-1.5 z-10">
        <Button className="w-8 h-8 bg-[#1c1c24]/90 backdrop-blur-sm rounded-lg flex items-center justify-center border border-zinc-700/40 text-zinc-300 hover:bg-[#282834]">
          <Compass/>
        </Button>
        <div className="flex flex-col rounded-lg bg-[#1c1c24]/90 backdrop-blur-sm border border-zinc-700/40 overflow-hidden">
          <Button className="w-8 h-8 flex items-center justify-center text-zinc-300 hover:bg-[#282834] font-bold text-base border-b border-zinc-700/30">
            +
          </Button>
          <Button className="w-8 h-8 flex items-center justify-center text-zinc-300 hover:bg-[#282834] font-bold text-base">
            -
          </Button>
        </div>
      </div>

      {/* Map Scale & Attributions */}
      <div className="absolute bottom-2 left-4 text-[9px] font-medium text-zinc-700 bg-white/20 px-1.5 py-0.5 rounded backdrop-blur-[2px]">
        1000 mi
      </div>
      <div className="absolute bottom-2 right-14 text-[9px] font-medium text-zinc-700 bg-white/40 px-1.5 py-0.5 rounded-l backdrop-blur-[2px]">
        © Stadia Maps © OpenMapTiles © OpenStreetMap
      </div>
    </section>
  );
}