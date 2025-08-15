import * as React from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

const base =
  "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition-colors";
const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-black text-white hover:opacity-90",
  secondary: "bg-gray-200 hover:bg-gray-300",
  ghost: "bg-transparent hover:bg-gray-100"
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", className = "", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={[base, variants[variant], className].join(" ").trim()}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
