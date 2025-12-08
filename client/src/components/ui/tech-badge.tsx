import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TechBadgeProps {
  name: string;
  variant?: "purple" | "cyan" | "magenta" | "green" | "default";
  className?: string;
}

const variantStyles = {
  purple: "border-neon-purple/50 text-neon-purple hover:bg-neon-purple/20",
  cyan: "border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan/20",
  magenta: "border-neon-magenta/50 text-neon-magenta hover:bg-neon-magenta/20",
  green: "border-neon-green/50 text-neon-green hover:bg-neon-green/20",
  default: "border-border text-muted-foreground hover:border-neon-purple/50 hover:text-neon-purple",
};

export function TechBadge({ name, variant = "default", className }: TechBadgeProps) {
  return (
    <motion.span
      className={cn(
        "inline-flex items-center px-3 py-1 text-xs font-medium rounded-md border bg-transparent transition-all duration-300",
        variantStyles[variant],
        className
      )}
      whileHover={{ scale: 1.05 }}
    >
      {name}
    </motion.span>
  );
}
