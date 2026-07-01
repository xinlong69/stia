import { sendEmail } from "../send-email";
import { PasswordResetConfirmationEmail } from "../templates/password-reset-confirmation-email";

export interface SendPasswordResetConfirmationEmailOptions {
  to: string;
  username: string;
}

export async function sendPasswordResetConfirmationEmail({
  to,
  username
}: SendPasswordResetConfirmationEmailOptions) {
  return sendEmail({
    to,
    subject: "Password reset confirmed",
    react: PasswordResetConfirmationEmail({
      username
    }),
  });
}
