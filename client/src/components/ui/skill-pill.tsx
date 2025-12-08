import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { Skill } from "@/data/skills";

interface SkillPillProps {
  skill: Skill;
  index: number;
}

const levelColors = {
  beginner: "border-muted-foreground/50 text-muted-foreground",
  intermediate: "border-neon-green/50 text-neon-green",
  advanced: "border-neon-cyan/50 text-neon-cyan",
  expert: "border-neon-purple/50 text-neon-purple",
};

const levelGlow = {
  beginner: "",
  intermediate: "hover:shadow-[0_0_10px_hsl(84_85%_50%/0.3)]",
  advanced: "hover:shadow-[0_0_10px_hsl(188_90%_50%/0.3)]",
  expert: "hover:shadow-[0_0_10px_hsl(280_85%_55%/0.3)]",
};

export function SkillPill({ skill, index }: SkillPillProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className={cn(
        "px-4 py-2 rounded-md border bg-card/50 backdrop-blur-sm transition-all duration-300",
        levelColors[skill.level],
        levelGlow[skill.level]
      )}
      whileHover={{ scale: 1.05 }}
      data-testid={`skill-${skill.name.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <span className="text-sm font-medium">{skill.name}</span>
    </motion.div>
  );
}
