import { MapCard } from './_components/map-card';
import { ProfileCard } from './_components/profile-card';

export default function ProfilePage() {
  return (
    <div className="flex flex-col justify-between">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* ================= LEFT SIDEBAR: PROFILE CARD ================= */}
        <ProfileCard />

        {/* ================= RIGHT MAIN CONTENT AREA ================= */}
        <main className="lg:col-span-3 space-y-6">
          
          {/* MAP CONTAINER BANNER */}
          <MapCard />
        </main>
      </div>
    </div>
  );
}