import { sendEmail } from "../send-email";
import { VerifyAccountEmail } from "../templates/account-verification-email";

export interface SendAccountVerificationEmailOptions {
  to: string;
  username?: string;
  verifyUrl: string;
}

export async function sendAccountVerificationEmail({
  to,
  username,
  verifyUrl,
}: SendAccountVerificationEmailOptions) {
  return sendEmail({
    to,
    subject: "Verify your email address",
    react: VerifyAccountEmail({
      username,
      verifyUrl,
    }),
  });
}
