import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TechBadge } from "@/components/ui/tech-badge";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const variants = ["purple", "cyan", "magenta", "green"] as const;

export function ProjectCard({ project, index }: ProjectCardProps) {
  const accentVariant = variants[index % variants.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card
        className="group relative overflow-visible bg-card/50 backdrop-blur-sm border-border hover:border-neon-purple/50 transition-all duration-300"
        data-testid={`card-project-${project.slug}`}
      >
        <div className="relative h-48 overflow-hidden rounded-t-lg">
          <div className={`absolute inset-0 gradient-neon opacity-20`} />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-bold text-white/20 uppercase tracking-widest">
              {project.title.slice(0, 2)}
            </span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
          
          <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.liveUrl && (
              <Button
                size="sm"
                className="bg-neon-cyan/20 border border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black"
                onClick={() => window.open(project.liveUrl, "_blank")}
                data-testid={`button-project-live-${project.slug}`}
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                Live
              </Button>
            )}
            {project.githubUrl && (
              <Button
                size="sm"
                variant="outline"
                className="border-border hover:border-neon-purple/50"
                onClick={() => window.open(project.githubUrl, "_blank")}
                data-testid={`button-project-github-${project.slug}`}
              >
                <Github className="w-4 h-4 mr-1" />
                Code
              </Button>
            )}
          </div>
        </div>

        <CardContent className="p-6">
          <div className="flex items-start justify-between gap-2 mb-3">
            <h3 className="text-lg font-semibold text-foreground group-hover:text-neon-purple transition-colors">
              {project.title}
            </h3>
            {project.highlight && (
              <span className="px-2 py-0.5 text-xs font-medium rounded-md bg-neon-magenta/20 text-neon-magenta border border-neon-magenta/30">
                Featured
              </span>
            )}
          </div>
          
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {project.shortDescription}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.techStack.slice(0, 4).map((tech, i) => (
              <TechBadge
                key={tech}
                name={tech}
                variant={variants[i % variants.length]}
              />
            ))}
            {project.techStack.length > 4 && (
              <span className="text-xs text-muted-foreground self-center">
                +{project.techStack.length - 4} more
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
