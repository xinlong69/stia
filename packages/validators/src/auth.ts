import { isDisposableEmail } from "disposable-email-domains-js";

/**
 * Validates an email address for presence, format, and ensures it does not 
 * belong to a known disposable email provider or its subdomains.
 * * @returns An error message string if invalid, or undefined if valid.
 */
export function validateEmail(email: string): string | undefined {
  if (!email) {
    return "Email is required.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "Invalid email address.";
  }

  // The library natively checks the domain (and subdomains) for you
  if (isDisposableEmail(email)) {
    return "Temporary or disposable email addresses are not allowed.";
  }
}

/**
 * Validates a password against the application's
 * password policy.
 */
export function validatePassword(
  password: string,
) {

  if (password.length < 8) {
    return "Password must be at least 8 characters.";
  }

  if (!/[a-z]/.test(password)) {
    return "Password must contain a lowercase letter.";
  }

  if (!/[A-Z]/.test(password)) {
    return "Password must contain an uppercase letter.";
  }

  if (!/\d/.test(password)) {
    return "Password must contain a number.";
  }

  if (!/[^A-Za-z0-9]/.test(password)) {
    return "Password must contain a special character.";
  }

  return undefined;
}