"use client";

import { Button } from "@packages/ui/components";
import { authClient } from "@web/auth/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

// Define what props this client component expects from the server
interface PlanHeroProps {
  user: {
    name: string;
    email: string;
    image?: string | null;
  };
}

export function PlanHero({ user }: PlanHeroProps) {
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleSignOut = async () => {
    setIsLoggingOut(true);
    
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
          router.refresh();
        },
      },
    });
    
    setIsLoggingOut(false);
  };

  return (
    <div className="w-full max-w-md rounded-xl bg-zinc-900 p-6 text-center shadow-md border border-zinc-800 space-y-6">
      <h1 className="text-3xl font-extrabold tracking-tight text-white">Dashboard</h1>
      
      <div className="space-y-1 bg-zinc-950 p-4 rounded-lg border border-zinc-800">
        <p className="text-zinc-400 text-sm">Logged in as</p>
        <p className="text-xl font-semibold text-primary">{user.name}</p>
        <p className="text-zinc-500 text-xs">{user.email}</p>
      </div>

      <Button
        size="lg"
        variant="destructive"
        className="w-full"
        disabled={isLoggingOut}
        onClick={handleSignOut}
      >
        {isLoggingOut ? "Signing out..." : "Sign out"}
      </Button>
    </div>
  );
}