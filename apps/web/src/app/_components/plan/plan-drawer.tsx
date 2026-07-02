"use client";

import { Button } from "@packages/ui/components";
import Link from "next/link";
import { useState } from "react";

interface PlanDrawerProps {
  user: {
    name: string;
    email: string;
  };
}

export function PlanDrawer({ user }: PlanDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Trigger Button (Top Left corner of dashboard) */}
      <div className="absolute top-4 left-4 z-40">
        <Button 
          onClick={() => setIsOpen(true)}
          className="bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white"
        >
          {/* Simple Menu Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          Menu
        </Button>
      </div>

      {/* Backdrop Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer Panel */}
      <div className={`fixed top-0 left-0 bottom-0 z-50 w-72 bg-zinc-900 border-r border-zinc-800 p-6 text-white transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}>
        <div className="flex flex-col h-full justify-between">
          
          {/* Header & Navigation Links */}
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-zinc-800">
              <h2 className="text-xl font-bold tracking-tight text-primary">Acme App</h2>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-zinc-400 hover:text-white transition-colors"
              >
                {/* Close Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="mt-6 space-y-2">
              <Link 
                href="/home" 
                className="flex items-center gap-3 px-3 py-2 rounded-lg bg-zinc-800 text-white font-medium text-sm transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Overview
              </Link>
              <Link 
                href="/home/settings" 
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:text-white font-medium text-sm transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Settings
              </Link>
            </nav>
          </div>

          {/* Footer containing User Minimap Info */}
          <div className="pt-4 border-t border-zinc-800">
            <p className="text-sm font-semibold truncate text-zinc-200">{user.name}</p>
            <p className="text-xs truncate text-zinc-500">{user.email}</p>
          </div>

        </div>
      </div>
    </>
  );
}