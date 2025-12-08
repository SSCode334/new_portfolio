export type SkillLevel = "beginner" | "intermediate" | "advanced" | "expert";

export type Skill = {
  name: string;
  level: SkillLevel;
};

export type SkillGroup = {
  category: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: "expert" },
      { name: "TypeScript", level: "expert" },
      { name: "Next.js", level: "advanced" },
      { name: "Three.js", level: "advanced" },
      { name: "Framer Motion", level: "advanced" },
      { name: "Tailwind CSS", level: "expert" },
      { name: "WebGL", level: "intermediate" }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: "expert" },
      { name: "Express", level: "advanced" },
      { name: "PostgreSQL", level: "advanced" },
      { name: "MongoDB", level: "intermediate" },
      { name: "GraphQL", level: "intermediate" },
      { name: "REST APIs", level: "expert" }
    ]
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", level: "expert" },
      { name: "Docker", level: "intermediate" },
      { name: "Figma", level: "advanced" },
      { name: "VS Code", level: "expert" },
      { name: "Webpack/Vite", level: "advanced" },
      { name: "CI/CD", level: "intermediate" }
    ]
  }
];
