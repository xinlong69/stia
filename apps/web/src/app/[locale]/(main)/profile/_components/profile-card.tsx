"use client";

import { Button } from "@packages/ui/components/button";
import { Edit3, Share2 } from '@packages/ui/icons';

export function ProfileCard() {
  return (
    <aside className="lg:col-span-1 border border-zinc-800/50 rounded-2xl p-6 flex flex-col items-center text-center">
      {/* Avatar Circle matching the prominent yellow placeholder in image_a51a5e.jpg */}
      <div className="w-36 h-36 bg-yellow-400 rounded-full mb-4 shadow-lg shadow-yellow-400/10" />
      
      <h2 className="text-xl font-bold text-zinc-100 tracking-wide">Xin Long He</h2>
      <p className="text-sm text-blue-400 font-medium mt-1">@xivlon</p>
      
      {/* Stats Counters */}
      <div className="flex gap-8 my-6">
        <div>
          <p className="text-xl font-extrabold text-blue-400">0</p>
          <p className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold">Followers</p>
        </div>
        <div>
          <p className="text-xl font-extrabold text-blue-400">0</p>
          <p className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold">Following</p>
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="flex gap-3 w-full mt-2">
        <Button className="flex-1 flex items-center justify-center gap-2 bg-[#282834] hover:bg-[#323242] text-zinc-200 text-xs font-semibold py-2.5 px-4 rounded-xl transition border border-zinc-700/30">
          <Edit3 size={14} className="text-zinc-400" />
          Edit
        </Button>
        <Button className="flex-1 flex items-center justify-center gap-2 bg-[#282834] hover:bg-[#323242] text-zinc-200 text-xs font-semibold py-2.5 px-4 rounded-xl transition border border-zinc-700/30">
          <Share2 size={14} className="text-zinc-400" />
          Share
        </Button>
      </div>
    </aside>
  );
}