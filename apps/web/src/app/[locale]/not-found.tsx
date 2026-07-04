import { Button } from '@packages/ui/components';
import Link from 'next/link';
import { Footer } from './shared/footer';
import { Header } from './shared/header';

export default function LocalizedNotFound() {
  return (
    <main className="pt-24 min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 overflow-x-hidden selection:bg-orange-600/30 transition-colors duration-200 flex flex-col justify-between">
      {/* Dynamic Main App Section Container */}
      <div className="w-full">
        <Header/>
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6">
          <h2 className="text-3xl font-bold">404 - Page Not Found</h2>
          <p className="mt-3 text-slate-500">We couldn't find the requested page.</p>

          <Link href="/">
            <Button size="sm" className="mt-6 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-full px-8 h-12 shadow-lg shadow-orange-600/20 transition-all hover:scale-[1.02] border-none">
              Return Home
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    </main>
  );
}