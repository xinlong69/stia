"use client";

import { useForm } from "@tanstack/react-form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@packages/ui/button";
import { Input } from "@packages/ui/input";
import { ShowToggle } from "@packages/ui/show-toggle";
import { toast } from "@packages/ui/toast";
import { authClient } from "@web/auth/client";

import { validatePassword } from "@packages/validators";

interface AuthResponseError {
  message?: string;
}

interface AuthResponse {
  error: AuthResponseError | null;
}

export function ResetPasswordForm() {
  const router = useRouter();
  const [globalError, setGlobalError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // 1. Initialize TanStack Form Configuration Engine
  const form = useForm({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
    validators: {
      onChange: ({ value }) => {
        if (value.password !== value.confirmPassword) {
          return {
            form: "Passwords do not match",
          };
        }
        return undefined;
      },
    },
    onSubmit: async ({ value }) => {
      setIsLoading(true);
      setGlobalError(null);

      try {
        // Cast target call to safely avoid eslint @typescript-eslint/no-unsafe-assignment
        const response = (await authClient.resetPassword({
          newPassword: value.password,
        })) as AuthResponse;

        const authError = response.error;

        if (authError) {
          setGlobalError(authError.message ?? "Failed to reset password.");
        } else {
          toast.success("Password reset successful!", {
            description: "You can now log in with your new password.",
          });
          
          router.push("/login");
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
      <div className="flex flex-col space-y-3 text-center">
        <h1 className="text-[22px] font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Reset your password
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 font-light px-2">
          Please enter your new secure password below.
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
        {/* New Password Field Container */}
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
                    placeholder="New Password"
                    disabled={isLoading}
                    className="w-full h-full pl-4 pr-12 bg-transparent text-sm placeholder:text-zinc-400 focus-visible:ring-0 border-none outline-none disabled:opacity-50 shadow-none"
                  />
                  <div className="pr-3 flex items-center shrink-0">
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

        {/* Confirm Password Field Container */}
        <form.Field name="confirmPassword">
          {(field) => {
            const hasError = field.state.meta.isTouched && field.state.meta.errors.length > 0;
            return (
              <div>
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
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm New Password"
                    disabled={isLoading}
                    className="w-full h-full pl-4 pr-12 bg-transparent text-sm placeholder:text-zinc-400 focus-visible:ring-0 border-none outline-none disabled:opacity-50 shadow-none"
                  />
                  <div className="pr-3 flex items-center shrink-0">
                    <ShowToggle 
                      isVisible={showConfirmPassword} 
                      onToggle={() => setShowConfirmPassword(!showConfirmPassword)} 
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
                {isFormBusy ? "Updating password..." : "Reset password"}
              </Button>
            );
          }}
        </form.Subscribe>
      </form>

      {/* Redirect Footer */}
      <div className="mt-6 text-center text-sm text-zinc-500 dark:text-zinc-400 font-light">
        Nevermind?{" "}
        <Link href="/login" className="font-bold text-zinc-800 dark:text-zinc-200 hover:underline">
          Back to log in
        </Link>
      </div>
    </div>
  );
}