import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { ProjectCard } from "@/components/ui/project-card";
import { projects } from "@/data/projects";

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.highlight);
  const otherProjects = projects.filter((p) => !p.highlight);

  return (
    <div className="pt-24">
      <SectionWrapper
        title="Projects"
        subtitle="A collection of work that showcases my skills and passion for creative development"
      >
        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg font-semibold text-neon-magenta mb-6"
            >
              Featured Work
            </motion.h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={project.slug} project={project} index={index} />
              ))}
            </div>
          </div>
        )}

        {otherProjects.length > 0 && (
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg font-semibold text-muted-foreground mb-6"
            >
              Other Projects
            </motion.h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  index={index + featuredProjects.length}
                />
              ))}
            </div>
          </div>
        )}
      </SectionWrapper>
    </div>
  );
}
