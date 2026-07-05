"use client";

import { useForm } from "@tanstack/react-form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@packages/ui/components/button";
import { Input } from "@packages/ui/components/input";
import { ShowToggle } from "@web/app/[locale]/shared/show-toggle";
import { authClient } from "@web/auth/client";

import { validateEmail, validatePassword } from "@packages/validators";

export function LoginForm() {
  const router = useRouter();
  const [globalError, setGlobalError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // 1. Initialize TanStack Form Configuration Engine
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      setIsLoading(true);
      setGlobalError(null);

      try {
        const { error: authError } = await authClient.signIn.email({
          email: value.email,
          password: value.password,
        });

        if (authError) {
          setGlobalError(authError.message ?? "Invalid credentials.");
        } else {
          router.push("/dashboard");
          router.refresh();
        }
      } catch {
        setGlobalError("An unexpected connection error occurred.");
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <div className="mx-auto w-full max-w-110 rounded-4xl border border-zinc-200 bg-white p-8 shadow-2xl dark:border-zinc-800 dark:bg-zinc-900/50 transition-colors">
      <div className="flex flex-col space-y-6 text-center">
        <h1 className="text-[22px] font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Log in to your account
        </h1>
      </div>

      {/* Social Auth Stack */}
      <div className="mt-8 space-y-3">
        <Button 
          type="button"
          variant="outline" 
          disabled={isLoading}
          className="w-full h-12 bg-white hover:bg-zinc-50 text-zinc-700 font-medium rounded-full text-sm flex items-center justify-center gap-3 border border-zinc-200 dark:bg-transparent dark:text-zinc-300 dark:border-zinc-800 dark:hover:bg-zinc-800/50 disabled:opacity-50 cursor-pointer"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24">
            <path fill="#EA4335" d="M12.24 10.285V14.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.866-3.577-7.866-8s3.536-8 7.866-8c2.46 0 4.105 1.025 5.047 1.926l3.227-3.227C18.422 1.926 15.545 1 12.24 1 5.917 1 .75 6.167.75 12.5s5.167 11.5 11.49 11.5c6.605 0 11.01-4.636 11.01-11.205 0-.756-.08-1.334-.178-1.81H12.24z"/>
          </svg>
          Log in with Google
        </Button>
      </div>

      {/* Divider */}
      <div className="relative my-7">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-zinc-200 dark:border-zinc-800" />
        </div>
        <div className="relative flex justify-center text-xs font-semibold">
          <span className="bg-white px-3 text-zinc-400 dark:bg-zinc-900">Or continue with</span>
        </div>
      </div>

      {/* Global Error Banner */}
      {globalError && (
        <div className="mb-4 text-center text-xs font-medium text-red-500 bg-red-500/15 p-3 rounded-xl border border-red-500/20">
          {globalError}
        </div>
      )}

      {/* 2. Form Implementation using TanStack Submission Handlers */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          void form.handleSubmit();
        }}
        noValidate
        className="space-y-4"
      >
        {/* Email Field Container */}
        <form.Field
          name="email"
          validators={{
            onChange: ({ value }) => validateEmail(value),
          }}
        >
          {(field) => {
            const hasError = field.state.meta.isTouched && field.state.meta.errors.length > 0;
            return (
              <div>
                <Input
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  type="email"
                  placeholder="Email"
                  disabled={isLoading}
                  className={`w-full h-13 px-4 rounded-xl border bg-transparent text-sm placeholder:text-zinc-400 transition-all disabled:opacity-50
                    ${hasError 
                      ? "border-red-500 focus-visible:ring-1 focus-visible:ring-red-500 dark:border-red-500" 
                      : "border-zinc-200 focus-visible:ring-1 focus-visible:ring-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:focus-visible:ring-zinc-700"
                    }`}
                />
                {hasError && (
                  <p className="text-red-500 text-xs font-medium mt-1.5 pl-1 animate-in fade-in-50 duration-200">
                    {field.state.meta.errors[0]}
                  </p>
                )}
              </div>
            );
          }}
        </form.Field>

        {/* Password Field Container */}
        <form.Field
          name="password"
          validators={{
            onChange: ({ value }) => validatePassword(value),
          }}
        >
          {(field) => {
            const hasError = field.state.meta.isTouched && field.state.meta.errors.length > 0;
            return (
              <div>
                {/* 1. This wrapper is now the anchoring boundary and handles the border frame */}
                <div className={`relative flex items-center w-full h-13 rounded-xl border bg-transparent transition-all
                  ${hasError 
                    ? "border-red-500 focus-within:ring-1 focus-within:ring-red-500 dark:border-red-500" 
                    : "border-zinc-200 focus-within:ring-1 focus-within:ring-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:focus-within:ring-zinc-700"
                  }`}
                >
                  <Input
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    disabled={isLoading}
                    className="w-full h-full pl-4 pr-12 bg-transparent text-sm placeholder:text-zinc-400 focus-visible:ring-0 border-none outline-none disabled:opacity-50 shadow-none"
                  />
                  {/* 3. The absolute layout anchors cleanly inside the right border wall */}
                  <div className="pr-8 flex items-center shrink-0">
                    <ShowToggle 
                      isVisible={showPassword} 
                      onToggle={() => setShowPassword(!showPassword)} 
                    />
                  </div>
                </div>
                {hasError && (
                  <p className="text-red-500 text-xs font-medium mt-1.5 pl-1 animate-in fade-in-50 duration-200">
                    {field.state.meta.errors[0]}
                  </p>
                )}
              </div>
            );
          }}
        </form.Field>

        <div className="text-center pt-1">
          <Link 
            href="/password-forget" 
            className="text-xs font-semibold text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
          >
            Forgot password
          </Link>
        </div>

        {/* Form State Button Binder */}
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
        >
          {([canSubmit, isSubmitting]) => {
            // 🎯 Use strict boolean logic. Since these are guaranteed booleans,
            // standard conditional operations are fully safe and satisfy all ESLint rules.
            const isFormBusy = isSubmitting ?? isLoading;
            const isDisabled = !canSubmit || isFormBusy;

            return (
              <Button 
                type="submit" 
                disabled={isDisabled}
                className="w-full h-12 bg-transparent text-zinc-900 hover:bg-zinc-50 font-bold dark:text-zinc-100 dark:hover:bg-zinc-800 rounded-full border border-zinc-200 dark:border-zinc-800 shadow-none text-sm transition-colors mt-2 disabled:opacity-50 cursor-pointer"
              >
                {isFormBusy ? "Logging in..." : "Log in"}
              </Button>
            );
          }}
        </form.Subscribe>
      </form>

      {/* Redirect Footer */}
      <div className="mt-6 text-center text-sm text-zinc-500 dark:text-zinc-400 font-light">
        Don't have an account yet?{" "}
        <Link href="/register" className="font-bold text-zinc-800 dark:text-zinc-200 hover:underline">
          Sign up
        </Link>
      </div>
    </div>
  );
}