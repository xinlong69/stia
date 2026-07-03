import { expo } from "@better-auth/expo";
import type { BetterAuthPlugin } from "better-auth";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { lastLoginMethod, oAuthProxy } from "better-auth/plugins";

import { db } from "@packages/db/client";
import {
  sendAccountVerificationEmail,
  sendPasswordResetConfirmationEmail,
  sendPasswordResetRequestEmail,
} from "@packages/email";

export function initAuth<
  TExtraPlugins extends BetterAuthPlugin[] = [],
>(
  options: {
    baseUrl: string;
    productionUrl: string;
    secret: string | undefined;
    googleClientId: string;
    googleClientSecret: string;
    extraPlugins?: TExtraPlugins;
  }
) {
  return betterAuth({
    appName: "Stia",
    database: drizzleAdapter(db, {
      provider: "pg",
    }),
    emailVerification: {
      sendVerificationEmail: async ({ user, url }) => {
        await sendAccountVerificationEmail({
          to: user.email,
          username: user.name,
          verifyUrl: url,
        });
      },
      sendOnSignup: true,
    },
    emailAndPassword: {
      enabled: true,
      requireEmailVerification: true,
      revokeSessionsOnPasswordReset: true,
      sendResetPassword: async ({ user, url }) => {
        await sendPasswordResetRequestEmail({
          to: user.email,
          username: user.name,
          resetUrl: url,
        });
        console.log(`Password reset email sent to ${user.email}.`);
      },
      resetPasswordTokenExpiresIn: 3600,
      onPasswordReset: async ({ user }) => {
        await sendPasswordResetConfirmationEmail({
          to: user.email,
          username: user.name
        });
        console.log(`Password for user ${user.email} has been reset.`);
      },
    },
    socialProviders: {
      google: { 
        clientId: options.googleClientId,
        clientSecret: options.googleClientSecret,
      }, 
    },
    baseURL: options.baseUrl,
    secret: options.secret,
    plugins: [
      oAuthProxy({
        productionURL: options.productionUrl,
      }),
      lastLoginMethod(),
      expo(),
      ...(options.extraPlugins ?? []),
    ],
    trustedOrigins: ["expo://"],
    onAPIError: {
      onError(error, ctx) {
        console.error("BETTER AUTH API ERROR", error, ctx);
        const hasConnRefused = 
          (error instanceof Error && 'code' in error && error.code === 'ECONNREFUSED') ||
          (error instanceof Error && 'cause' in error && 
            typeof error.cause === 'object' && error.cause !== null && 
            'code' in error.cause && (error.cause as Record<string, unknown>).code === 'ECONNREFUSED');

        if (hasConnRefused) {
          console.error("FATAL: Database connection lost during auth API request. Shutting down.");
          process.exit(1);
        }
      },
    },
  });
}

export type Auth<T extends BetterAuthPlugin[] = []> =
  ReturnType<typeof initAuth<T>>;

// 1. Define what a concrete User and Session object shape looks like
export interface User {
  id: string;
  email: string;
  emailVerified: boolean;
  name: string;
  image?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface Session {
  session: {
    id: string;
    userId: string;
    expiresAt: Date;
    token: string;
    createdAt: Date;
    updatedAt: Date;
    userAgent?: string | null;
    ipAddress?: string | null;
  };
  user: User;
}

/**
 * Safe type for consumption across package boundaries.
 * Intentionally omits plugin information.
 */
export interface AuthLike {
  api: {
    // 2. Swapped `Promise<any>` with `Promise<Session | null>`
    getSession: (args: {
      headers: Headers;
    }) => Promise<Session | null>;
  };
}