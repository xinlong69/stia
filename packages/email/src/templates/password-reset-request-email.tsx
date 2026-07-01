import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Section,
  Tailwind,
  Text,
} from "react-email";

interface ResetPasswordRequestEmailProps {
  username?: string;
  resetUrl: string;
}

export const ResetPasswordRequestEmail = ({
  username,
  resetUrl,
}: ResetPasswordRequestEmailProps) => {
  return (
    <Html dir="ltr" lang="en">
      <Tailwind>
        <Head />

        <Body className="bg-gray-100 py-10 font-sans">
          <Container className="mx-auto max-w-[600px] rounded-xl bg-white p-8">
            <Section>
              <Text className="mt-0 mb-4 text-[24px] font-bold text-gray-900">
                Reset your password
              </Text>

              <Text className="mt-0 mb-6 text-[16px] leading-6 text-gray-700">
                Hi{username ? ` ${username}` : ""}, we received a request to
                reset the password for your account.
              </Text>

              <Text className="mt-0 mb-6 text-[16px] leading-6 text-gray-700">
                Click the button below to choose a new password.
              </Text>

              <Section className="mb-8 text-center">
                <Button
                  href={resetUrl}
                  className="inline-block box-border rounded-[6px] bg-blue-600 px-8 py-3 text-[16px] font-medium text-white no-underline"
                >
                  Reset Password
                </Button>
              </Section>

              <Text className="mt-0 mb-6 break-all text-[14px] leading-5 text-gray-600">
                If the button doesn't work, copy and paste this link into your
                browser:
                <br />
                <span className="text-blue-600 underline">{resetUrl}</span>
              </Text>

              <Text className="mt-0 mb-8 text-[14px] leading-5 text-gray-600">
                If you didn't request a password reset, you can safely ignore
                this email. Your password won't be changed unless you use the
                link above.
              </Text>

              <Hr className="my-6 border-gray-200" />

              <Text className="m-0 text-[12px] leading-4 text-gray-500">
                Best regards,
                <br />
                The Stia Team
              </Text>
            </Section>

            <Section className="mt-8 border-t border-gray-200 pt-6">
              <Text className="m-0 text-center text-[12px] leading-4 text-gray-400">
                Stia Inc.
                <br />
                123 Business Street, Suite 100
                <br />
                City, State 12345
              </Text>

              <Text className="mt-2 mb-0 text-center text-[12px] leading-4 text-gray-400">
                © {new Date().getFullYear()} Stia. All rights reserved.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ResetPasswordRequestEmail;