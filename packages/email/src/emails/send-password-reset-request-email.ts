import { sendEmail } from "../send-email";
import { ResetPasswordRequestEmail } from "../templates/password-reset-request-email";

export interface SendPasswordResetRequestEmailOptions {
  to: string;
  username: string;
  resetUrl: string;
}

export async function sendPasswordResetRequestEmail({
  to,
  username,
  resetUrl,
}: SendPasswordResetRequestEmailOptions) {
  return sendEmail({
    to,
    subject: "Reset your password",
    react: ResetPasswordRequestEmail({
      username,
      resetUrl,
    }),
  });
}
