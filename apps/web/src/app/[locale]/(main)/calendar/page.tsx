import { Button } from "@packages/ui/components/button";
import { Calendar, ChevronLeft, ChevronRight, Plus } from "@packages/ui/icons";

// Mock data generator for 12 months in 2026
const MONTHS = [
  { name: "January", days: 31, offset: 3 }, // 2026 starts on Thursday
  { name: "February", days: 28, offset: 6 },
  { name: "March", days: 31, offset: 6 },
  { name: "April", days: 30, offset: 2 },
  { name: "May", days: 31, offset: 4 },
  { name: "June", days: 30, offset: 0 },
  { name: "July", days: 31, offset: 2 },
  { name: "August", days: 31, offset: 5 },
  { name: "September", days: 30, offset: 1 },
  { name: "October", days: 31, offset: 3 },
  { name: "November", days: 30, offset: 6 },
  { name: "December", days: 31, offset: 1 },
];

const DAYS_OF_WEEK = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function CalendarPage() {
  return (
    <div className="min-h-screen font-sans">
      <div className="mx-auto flex max-w-[1600px] gap-6">
        
        {/* LEFT SIDEBAR CONTROLS */}
        <aside className="w-80 shrink-0 flex flex-col gap-5">
          
          {/* Year Card */}
          <div className="bg-white rounded-2xl border border-slate-100 p-4 shadow-sm">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">Year</span>
            <div className="flex items-center justify-between mb-4">
              <Button className="p-1 text-slate-400 hover:text-slate-600"><Plus className="w-4 h-4" /></Button>
              <div className="flex items-center gap-4">
                <Button className="p-1 text-slate-300 hover:text-slate-500"><ChevronLeft className="w-4 h-4" /></Button>
                <span className="text-xl font-bold text-slate-900">2026</span>
                <Button className="p-1 text-slate-300 hover:text-slate-500"><ChevronRight className="w-4 h-4" /></Button>
              </div>
              <Button className="p-1 text-slate-400 hover:text-slate-600"><Plus className="w-4 h-4" /></Button>
            </div>
            <Button className="w-full bg-slate-900 text-white text-sm font-semibold py-2 px-3 rounded-xl transition-colors">
              2026
            </Button>
          </div>

          {/* Legend Card */}
          <div className="bg-white rounded-2xl border border-slate-100 p-4 shadow-sm">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">Legend</span>
            <div className="flex items-center gap-6 text-xs font-medium text-slate-500">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded bg-amber-200 block"></span>
                <span>Company Holiday</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded bg-slate-100 block"></span>
                <span>Weekend</span>
              </div>
            </div>
          </div>

          {/* Entitlement Card */}
          <div className="bg-white rounded-2xl border border-slate-100 p-4 shadow-sm">
            <div className="flex items-center gap-2 text-slate-400 mb-4">
              <Calendar className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Entitlement 2026</span>
            </div>
            
            <div className="flex justify-between items-center mb-5">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 block"></span>
                <p className="text-sm font-semibold text-slate-700">admin <span className="text-xs text-slate-400 font-normal">(you)</span></p>
              </div>
              <span className="text-xs font-medium text-slate-400">0/30</span>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="bg-slate-50 border border-slate-100 rounded-xl p-2">
                <p className="text-[10px] text-slate-400 font-medium">Days</p>
                <p className="text-lg font-bold text-slate-800">30</p>
              </div>
              <div className="bg-slate-50 border border-slate-100 rounded-xl p-2">
                <p className="text-[10px] text-slate-400 font-medium">Used</p>
                <p className="text-lg font-bold text-slate-800">0</p>
              </div>
              <div className="bg-emerald-50/40 border border-emerald-100 rounded-xl p-2">
                <p className="text-[10px] text-emerald-600 font-medium">Left</p>
                <p className="text-lg font-bold text-emerald-600">30</p>
              </div>
            </div>
          </div>
        </aside>

        {/* MAIN CALENDAR GRID */}
        <main className="flex-1 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {MONTHS.map((month) => {
              // Create empty slots for the grid offset alignment
              const blanks = Array<null>(month.offset).fill(null);
              // Create true days array
              const days = Array.from({ length: month.days }, (_, i) => i + 1);
              const gridItems = [...blanks, ...days];

              return (
                <div key={month.name} className="bg-white rounded-2xl border border-slate-100 p-4 shadow-sm flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-slate-800 mb-3">{month.name}</h3>
                    
                    {/* Weekday headers */}
                    <div className="grid grid-cols-7 text-center mb-1">
                      {DAYS_OF_WEEK.map((day) => (
                        <span key={day} className="text-[10px] font-medium text-slate-400">
                          {day}
                        </span>
                      ))}
                    </div>

                    {/* Days grid */}
                    <div className="grid grid-cols-7 gap-y-1 text-center text-xs">
                      {gridItems.map((day, dIndex) => {
                        if (day === null) return <div key={`blank-${dIndex}`} />;

                        // Calculate day of the week to determine if it is a weekend (Sat=5, Sun=6)
                        const dayOfWeek = (month.offset + day - 1) % 7;
                        const isWeekend = dayOfWeek === 5 || dayOfWeek === 6;

                        // Mock specific visual indicators visible in image_57b049.jpg
                        const isSelectedSpecial = month.name === "April" && day === 20;
                        const hasDot = (month.name === "May" && [1, 3, 5, 8, 12, 15, 19, 22, 26, 31].includes(day)) ||
                                       (month.name === "September" && [5, 9, 13, 17, 25].includes(day)) ||
                                       (month.name === "November" && [4, 8, 25, 29].includes(day));

                        return (
                          <div
                            key={`day-${day}`}
                            className={`relative h-7 flex items-center justify-center rounded-md font-medium transition-all
                              ${isWeekend ? "bg-slate-50 text-slate-400 font-normal" : "text-slate-700"}
                              ${isSelectedSpecial ? "bg-blue-600 text-white font-bold shadow-sm shadow-blue-200" : ""}
                            `}
                          >
                            <span>{day}</span>
                            {/* Blue event status indicator dots */}
                            {hasDot && !isSelectedSpecial && (
                              <span className="absolute bottom-1 w-1 h-1 rounded-full bg-indigo-500"></span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
}