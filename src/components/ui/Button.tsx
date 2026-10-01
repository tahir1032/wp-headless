"use client";

import { cn } from "@/lib/utils";
import { ReactNode, forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      href,
      className,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

    const variants = {
      primary: "bg-primary text-white hover:bg-primary-dark",
      secondary: "bg-foreground text-background hover:bg-foreground/90",
      outline:
        "border-2 border-foreground text-foreground hover:bg-foreground hover:text-background",
      ghost: "text-foreground hover:bg-muted",
    };

    const sizes = {
      sm: "text-sm px-4 py-2 rounded-lg",
      md: "text-base px-6 py-3 rounded-lg",
      lg: "text-lg px-8 py-4 rounded-xl",
    };

    const classes = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      className
    );

    if (href) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
