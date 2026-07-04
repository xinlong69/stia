import { Button } from '@packages/ui/components/button';
import { BookOpen, Compass, Edit3, MapPin, MoreHorizontal, Share2, Trophy } from '@packages/ui/icons';
import { getSession } from "@web/auth/server";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="flex flex-col justify-between">
      <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* ================= LEFT SIDEBAR: PROFILE CARD ================= */}
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
            <button className="flex-1 flex items-center justify-center gap-2 bg-[#282834] hover:bg-[#323242] text-zinc-200 text-xs font-semibold py-2.5 px-4 rounded-xl transition border border-zinc-700/30">
              <Edit3 size={14} className="text-zinc-400" />
              Edit
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 bg-[#282834] hover:bg-[#323242] text-zinc-200 text-xs font-semibold py-2.5 px-4 rounded-xl transition border border-zinc-700/30">
              <Share2 size={14} className="text-zinc-400" />
              Share
            </button>
          </div>
        </aside>

        {/* ================= RIGHT MAIN CONTENT AREA ================= */}
        <main className="lg:col-span-3 space-y-6">
          
          {/* MAP CONTAINER BANNER */}
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
                <div className="flex items-center gap-1.5 text-xs text-orange-400 font-bold bg-orange-500/10 px-2.5 py-1.5 rounded-lg">
                  <span className="text-sm">👋</span>
                  <span>Travel Newcomer</span>
                </div>
              </div>
              
              <button className="bg-[#282834] hover:bg-[#323242] text-zinc-200 font-bold text-xs px-4 py-2.5 rounded-xl shadow-lg transition border border-zinc-700/40">
                Add visited places
              </button>
            </div>

            {/* Leaderboard button floating on map */}
            <div className="absolute top-20 left-4 z-10">
              <Button className="flex items-center gap-2 bg-[#1c1c24]/95 text-zinc-200 font-bold text-xs px-4 py-2.5 rounded-xl shadow-md border border-zinc-700/30 hover:bg-[#282834]">
                <Trophy size={14} className="text-orange-400" />
                Travel leaderboard
              </Button>
            </div>

            {/* Simulated Map Controls (Bottom Right) */}
            <div className="absolute bottom-4 right-4 flex flex-col gap-1.5 z-10">
              <Button className="w-8 h-8 bg-[#1c1c24]/90 backdrop-blur-sm rounded-lg flex items-center justify-center border border-zinc-700/40 text-zinc-300 hover:bg-[#282834]">
                <Compass size={16} />
              </Button>
              <div className="flex flex-col rounded-lg bg-[#1c1c24]/90 backdrop-blur-sm border border-zinc-700/40 overflow-hidden">
                <Button className="w-8 h-8 flex items-center justify-center text-zinc-300 hover:bg-[#282834] font-bold text-base border-b border-zinc-700/30">+</Button>
                <Button className="w-8 h-8 flex items-center justify-center text-zinc-300 hover:bg-[#282834] font-bold text-base">-</Button>
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

          {/* TABS NAVIGATION */}
          <nav className="flex justify-center border-b border-zinc-800/60 text-sm font-semibold text-zinc-400">
            <div className="flex gap-8">
              <button className="flex items-center gap-1.5 pb-3 px-1 text-orange-500 border-b-2 border-orange-500 tracking-wide">
                <MapPin size={15} />
                Trip plans
              </button>
              <button className="flex items-center gap-1.5 pb-3 px-1 hover:text-zinc-200 tracking-wide transition">
                <Compass size={15} />
                Guides
              </button>
              <button className="flex items-center gap-1.5 pb-3 px-1 hover:text-zinc-200 tracking-wide transition">
                <BookOpen size={15} />
                Journals
              </button>
            </div>
          </nav>

          {/* TRIP CARDS GRID */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {/* Simulated Card matching image_a51a5e.jpg */}
            <div className="group cursor-pointer">
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-md">
                {/* Fallback pattern context matching the image_a51a5e.jpg card layout */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-black/30 z-10" />
                
                {/* 
                  Using placeholder text label styling to replace the image asset.
                  In production, swap this div with: <img src="image_a51a5e.jpg" className="..." alt="Beijing" />
                */}
                <div className="absolute inset-0 bg-amber-950/40 flex items-center justify-center text-zinc-500/20 font-black text-3xl tracking-widest uppercase select-none">
                  Beijing '26
                </div>

                {/* Overlays on top of the card preview */}
                <div className="absolute top-3 left-3 z-20 bg-orange-600/90 text-white text-[10px] font-bold px-2 py-1 rounded-md shadow">
                  In 1 month
                </div>
                
                <div className="absolute top-3 right-3 z-20 flex gap-1.5">
                  <button className="flex items-center gap-1 bg-black/40 hover:bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-lg transition">
                    <Share2 size={11} />
                    Share
                  </button>
                  <Button className="bg-black/40 hover:bg-black/60 backdrop-blur-md text-white p-1 rounded-lg transition">
                    <MoreHorizontal size={12} />
                  </Button>
                </div>
              </div>

              {/* Card Meta Content Details */}
              <div className="mt-3 space-y-1">
                <h3 className="font-bold text-sm text-zinc-200 group-hover:text-orange-400 transition-colors">
                  Family Trip to Beijing (August '26)
                </h3>
                <div className="flex items-center gap-2 text-xs text-zinc-500">
                  <div className="w-5 h-5 bg-yellow-400 rounded-full border border-zinc-800" />
                  <span className="text-zinc-400 font-medium">s</span>
                  <span className="text-zinc-600">•</span>
                  <span className="text-zinc-400">Aug 18 – 23</span>
                  <span className="text-zinc-600">•</span>
                  <span className="text-zinc-400">14 places</span>
                </div>
              </div>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}