"use client";

import { useForm } from "@tanstack/react-form";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@packages/ui/components/button";
import { Input } from "@packages/ui/components/input";
import { toast } from "@packages/ui/components/toast";

import { authClient } from "@web/auth/client";

import { validateEmail } from "@packages/validators";

export function PasswordForgetForm() {
  const [globalError, setGlobalError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    defaultValues: {
      email: "",
    },
    onSubmit: async ({ value }) => {
      setIsLoading(true);
      setGlobalError(null);

      try {
        const { error: authError } = await authClient.requestPasswordReset({
          email: value.email,
          redirectTo: "/reset-password",
        });

        if (authError) {
          setGlobalError(authError.message ?? "Failed to send reset email.");
        } else {
          // Trigger the snackbar notification instead of routing away immediately
          toast.success("Reset link sent successfully!", {
            description: "Please check your email inbox to reset your password.",
          });
          
          // Reset form fields after successful trigger
          form.reset();
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
      <div className="flex flex-col space-y-3 text-center">
        <h1 className="text-[22px] font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Forgot your password?
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 font-light px-2">
          Enter your email address below and we'll send you a link to reset your password.
        </p>
      </div>

      {/* Global Error Banner */}
      {globalError && (
        <div className="mb-4 mt-6 text-center text-xs font-medium text-red-500 bg-red-500/15 p-3 rounded-xl border border-red-500/20">
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
        className="space-y-4 mt-6"
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

        {/* Form State Button Binder */}
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
        >
          {([canSubmit, isSubmitting]) => {
            const isFormBusy = isSubmitting ?? isLoading;
            const isDisabled = !canSubmit || isFormBusy;

            return (
              <Button 
                type="submit" 
                disabled={isDisabled}
                className="w-full h-12 bg-transparent text-zinc-900 hover:bg-zinc-50 font-bold dark:text-zinc-100 dark:hover:bg-zinc-800 rounded-full border border-zinc-200 dark:border-zinc-800 shadow-none text-sm transition-colors mt-2 disabled:opacity-50 cursor-pointer"
              >
                {isFormBusy ? "Sending link..." : "Send reset link"}
              </Button>
            );
          }}
        </form.Subscribe>
      </form>

      {/* Redirect Footer */}
      <div className="mt-6 text-center text-sm text-zinc-500 dark:text-zinc-400 font-light">
        Remember your credentials?{" "}
        <Link href="/login" className="font-bold text-zinc-800 dark:text-zinc-200 hover:underline">
          Back to log in
        </Link>
      </div>
    </div>
  );
}