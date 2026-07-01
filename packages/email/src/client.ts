import { Resend } from "resend";
import { z } from "zod";

const env = z
  .object({
    RESEND_API_KEY: z
      .string()
      .min(1, "RESEND_API_KEY environment variable is required"),
    EMAIL_FROM: z
      .string()
      .min(1)
      .default("Stia <noreply@yourdomain.com>"),
  })
  .parse({
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    EMAIL_FROM: process.env.EMAIL_FROM,
  });

export const email = new Resend(env.RESEND_API_KEY);

export const DEFAULT_FROM_ADDRESS = env.EMAIL_FROM;