import { RegisterForm } from "@web/app/_components/auth/register-form";

export default function RegisterPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center p-4 text-zinc-900 dark:text-zinc-50 overflow-hidden transition-colors duration-300
      /* Light Mode: Elegant radial grey shadow vignette */
      bg-linear-to-b from-zinc-200 via-zinc-300 to-zinc-400
      
      /* Dark Mode: Deep atmospheric dark-to-black shadow vignette */
      dark:bg-linear-to-b dark:from-zinc-900 dark:via-zinc-950 dark:to-black">
      
      {/* Dynamic ambient back-glow behind the form for an enhanced floating contrast */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-orange-500/5 dark:bg-orange-600/5 blur-[130px] rounded-full pointer-events-none" />

      {/* Keeps the form wrapper isolated at its original size without any compression */}
      <div className="relative z-10 w-full flex justify-center">
        <RegisterForm />
      </div>
    </main>
  );
}