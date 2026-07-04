import { Footer } from "../shared/footer";
import { Header } from "../shared/header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="w-full bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 overflow-x-hidden selection:bg-orange-600/30 transition-colors duration-200">
        <div className="mx-auto mt-12 mb-36 pt-16 min-h-screen max-w-7xl md:px-6 lg:px-8">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}