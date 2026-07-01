"use client";

import { Button } from "@packages/ui/button";
import { authClient } from "@web/auth/client"; // Path to your Better Auth client instance

export function GoogleLoginButton() {
  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/home", // Where to redirect after successful authorization
    });
  };

  return (
    <Button 
      type="button"
      onClick={handleGoogleLogin}
      variant="outline"
      className="w-full h-12 bg-white hover:bg-zinc-50 dark:bg-transparent"
    >
      <svg className="h-4 w-4" viewBox="0 0 24 24">
        <path fill="#EA4335" d="M12.24 10.285V14.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.866-3.577-7.866-8s3.536-8 7.866-8c2.46 0 4.105 1.025 5.047 1.926l3.227-3.227C18.422 1.926 15.545 1 12.24 1 5.917 1 .75 6.167.75 12.5s5.167 11.5 11.49 11.5c6.605 0 11.01-4.636 11.01-11.205 0-.756-.08-1.334-.178-1.81H12.24z"/>
      </svg>
      Log in with Google
    </Button>
  );
}