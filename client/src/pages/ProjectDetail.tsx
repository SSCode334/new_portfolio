import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import { ArrowLeft, ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);
  
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  if (!project) {
    return (
      <div className="pt-24 min-h-screen flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
          <Link href="/projects">
            <Button variant="outline" data-testid="button-back-projects">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Link href="/projects">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground" data-testid="button-back-projects">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative aspect-video rounded-md overflow-hidden mb-8 border border-neon-purple/30"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 via-neon-cyan/10 to-neon-magenta/20 flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-md border border-neon-purple/50 bg-neon-purple/10 flex items-center justify-center">
                <span className="text-3xl font-bold text-neon-purple">{project.title[0]}</span>
              </div>
              <p className="text-muted-foreground text-sm">Project Preview</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2" data-testid="text-project-title">
                {project.title}
              </h1>
              <p className="text-lg text-muted-foreground" data-testid="text-project-short-desc">
                {project.shortDescription}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-neon-purple/50 hover:border-neon-purple" data-testid="link-project-github">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-neon-cyan hover:bg-neon-cyan/80 text-black font-semibold" data-testid="link-project-live">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </a>
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.techStack.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="border-neon-purple/50 text-neon-purple bg-neon-purple/5"
                data-testid={`badge-tech-${tech.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="prose prose-invert max-w-none mb-12"
        >
          <h2 className="text-xl font-semibold text-foreground mb-4">About This Project</h2>
          <p className="text-muted-foreground leading-relaxed text-lg" data-testid="text-project-long-desc">
            {project.longDescription}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-border pt-8"
        >
          <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">
            Tech Stack Deep Dive
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.techStack.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                className="p-4 rounded-md border border-border bg-card/50 hover:border-neon-cyan/50 transition-colors duration-300"
              >
                <span className="text-foreground font-medium">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-between mt-12 pt-8 border-t border-border"
        >
          {prevProject ? (
            <Link href={`/projects/${prevProject.slug}`}>
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground group" data-testid="button-prev-project">
                <ChevronLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                <span className="hidden sm:inline">{prevProject.title}</span>
                <span className="sm:hidden">Previous</span>
              </Button>
            </Link>
          ) : (
            <div />
          )}

          {nextProject ? (
            <Link href={`/projects/${nextProject.slug}`}>
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground group" data-testid="button-next-project">
                <span className="hidden sm:inline">{nextProject.title}</span>
                <span className="sm:hidden">Next</span>
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          ) : (
            <div />
          )}
        </motion.div>
      </div>
    </div>
  );
}
