import { CheckIcon, Cross2Icon } from "@radix-ui/react-icons";

import { cn } from "@packages/ui";
import { Progress } from "./progress";

export interface PasswordRequirement {
  label: string;
  passed: boolean;
}

interface PasswordStrengthProps {
  score: number;
  label: string;
  requirements: PasswordRequirement[];
}

function getStrengthColor(score: number) {
  if (score < 40) {
    return {
      text: "text-red-500",
      indicator: "bg-red-500",
    };
  }

  if (score < 60) {
    return {
      text: "text-orange-500",
      indicator: "bg-orange-500",
    };
  }

  if (score < 80) {
    return {
      text: "text-yellow-500",
      indicator: "bg-yellow-500",
    };
  }

  return {
    text: "text-green-500",
    indicator: "bg-green-500",
  };
}

export function PasswordStrength({
  score,
  label,
  requirements,
}: PasswordStrengthProps) {
  const color = getStrengthColor(score);

  return (
    <div className="mt-3 space-y-3">
      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">
            Password strength
          </span>

          <span className={cn("font-medium", color.text)}>
            {label}
          </span>
        </div>

        <Progress
          value={score}
          indicatorClassName={color.indicator}
          className="h-1.5"
        />
      </div>

      <ul className="space-y-1.5">
        {requirements.map((requirement) => (
          <li
            key={requirement.label}
            className={cn(
              "flex items-center gap-2 text-xs transition-colors",
              requirement.passed
                ? "text-green-600 dark:text-green-400"
                : "text-muted-foreground"
            )}
          >
            {requirement.passed ? (
              <CheckIcon className="size-3.5 shrink-0" />
            ) : (
              <Cross2Icon className="size-3.5 shrink-0" />
            )}

            <span>{requirement.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}