import type { ReactElement } from "react";
import { z } from "zod";

import { DEFAULT_FROM_ADDRESS, email } from "./client";

export const sendEmailSchema = z.object({
  to: z.email(),
  subject: z.string().min(1),
});

export type SendEmailInput = z.infer<typeof sendEmailSchema>;

export interface SendEmailOptions extends SendEmailInput {
  react: ReactElement;
  from?: string;
}

export async function sendEmail({
  to,
  subject,
  react,
  from = DEFAULT_FROM_ADDRESS,
}: SendEmailOptions) {
  const resendReact = react as unknown as Parameters<
    typeof email.emails.send
  >[0]["react"];

  return email.emails.send({
    from,
    to,
    subject,
    react: resendReact,
  });
}