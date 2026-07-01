import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Section,
  Tailwind,
  Text,
} from "react-email";

interface PasswordResetConfirmationEmailProps {
  username?: string;
}

export const PasswordResetConfirmationEmail = ({
  username,
}: PasswordResetConfirmationEmailProps) => {
  return (
    <Html dir="ltr" lang="en">
      <Tailwind>
        <Head />

        <Body className="bg-gray-100 py-10 font-sans">
          <Container className="mx-auto max-w-[600px] rounded-xl bg-white p-8">
            <Section>
              <Text className="mt-0 mb-4 text-[24px] font-bold text-gray-900">
                Your password has been changed
              </Text>

              <Text className="mt-0 mb-6 text-[16px] leading-6 text-gray-700">
                Hi{username ? ` ${username}` : ""}, this is a confirmation that
                the password for your account has been successfully updated.
              </Text>

              <Text className="mt-0 mb-8 text-[14px] leading-5 text-gray-600">
                If you made this change, you can safely ignore this email. No
                further action is required.
              </Text>

              <Section className="mb-8 rounded-lg bg-yellow-50 p-4 border border-yellow-100">
                <Text className="m-0 text-[14px] leading-5 text-yellow-800">
                  <strong>Did not make this change?</strong> If you didn't
                  request a password reset, please contact our support team
                  immediately or secure your account right away.
                </Text>
              </Section>

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

export default PasswordResetConfirmationEmail;