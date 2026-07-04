import { Button } from "@packages/ui/components/button";
import { getSession } from "@web/auth/server";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

// Mock data based on the card layout in image_57317f.jpg
const trips = [
  {
    id: "1",
    title: "Family Trip to Beijing (August '26)",
    image: "/images/beijing.jpg", // Replace with your image asset path
    badge: "In 1 month",
    dates: "Aug 18 – 23",
    placesCount: 14,
    collaborators: [
      { name: "User 1", avatar: "/avatars/user1.jpg" },
      { name: "S", fallback: "S" },
    ],
  },
];

export default async function PlanPage() {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="flex flex-col">
      <main className="flex-1">
        {/* Header Section */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight">
            Recently viewed and upcoming
          </h1>
          <Link
            href="/plan/new"
            className="flex items-center gap-1.5 bg-[#FF5A44] hover:bg-[#e04f3b] text-white font-medium px-5 py-2.5 rounded-full shadow-sm transition-colors text-sm"
          >
            <span className="text-lg font-light leading-none">+</span> Plan new trip
          </Link>
        </div>

        {/* Filter Dropdown */}
        <div className="mb-6">
          <Button className="flex items-center gap-1 text-sm font-semibold">
            Recently viewed
            <svg
              className="w-4 h-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </Button>
        </div>

        {/* Trips Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {trips.map((trip) => (
            <div key={trip.id} className="group cursor-pointer flex flex-col gap-3">
              {/* Card Image Wrapper */}
              <div className="relative aspect-4/3 w-full rounded-xl overflow-hidden shadow-sm">
                <Image
                  src={trip.image}
                  alt={trip.title}
                  fill
                  className="object-cover"
                />
                
                {/* Top Overlay Controls */}
                <div className="absolute top-3 left-3 right-3 flex justify-between items-start z-10">
                  {/* Badge */}
                  <span className="bg-[#FFF0ED] text-[#FF5A44] text-xs font-bold px-2.5 py-1 rounded-md shadow-sm">
                    {trip.badge}
                  </span>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button className="flex items-center gap-1 bg-black/50 hover:bg-black/60 backdrop-blur-sm text-white text-xs font-medium py-1 px-3 rounded-full transition-colors">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 10.5l-9-8v5c-7.775.31-13.881 5.482-15 13.5 3.125-4.384 7.643-6.616 15-6.616v5.116l9-9z" />
                      </svg>
                      Share
                    </Button>
                    <Button className="bg-black/50 hover:bg-black/60 backdrop-blur-sm text-white p-1.5 rounded-full transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                      </svg>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Card Details */}
              <div className="flex flex-col gap-1.5">
                <h3 className="font-semibold group-hover:underline text-base leading-snug">
                  {trip.title}
                </h3>
                
                {/* Meta Row: Avatars + Dates + Places */}
                <div className="flex items-center gap-2 text-xs font-medium">
                  <div className="flex -space-x-1 items-center">
                    {/* Hardcoded representation matching the image UI layout */}
                    <div className="w-5 h-5 rounded-full overflow-hidden border border-white">
                      <Image src="/avatars/user1.jpg" alt="User" width={20} height={20} className="object-cover" />
                    </div>
                    <div className="w-5 h-5 rounded-full bg-slate-200 border border-white flex items-center justify-center text-[10px] text-gray-600 font-bold">
                      S
                    </div>
                  </div>
                  
                  <span>•</span>
                  <span>{trip.dates}</span>
                  <span>•</span>
                  <span>{trip.placesCount} places</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}