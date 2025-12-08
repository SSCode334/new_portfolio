import { motion } from "framer-motion";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NeonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "purple" | "cyan" | "magenta" | "green";
  size?: "sm" | "md" | "lg";
}

const variantStyles = {
  purple: "border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-white neon-glow-purple",
  cyan: "border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black neon-glow-cyan",
  magenta: "border-neon-magenta text-neon-magenta hover:bg-neon-magenta hover:text-white neon-glow-magenta",
  green: "border-neon-green text-neon-green hover:bg-neon-green hover:text-black neon-glow-green",
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export const NeonButton = forwardRef<HTMLButtonElement, NeonButtonProps>(
  ({ className, variant = "purple", size = "md", children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        className={cn(
          "relative font-semibold rounded-md border-2 bg-transparent transition-all duration-300",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

NeonButton.displayName = "NeonButton";
