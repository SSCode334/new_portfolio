import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, Zap } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SkillPill } from "@/components/ui/skill-pill";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";
import { skillGroups, type SkillGroup } from "@/data/skills";

export default function About() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredGroups = activeCategory === "all"
    ? skillGroups
    : skillGroups.filter((group) => group.category === activeCategory);

  return (
    <div className="pt-24">
      <SectionWrapper title="About Me" subtitle="A glimpse into who I am and what drives my passion for creating">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative mb-8">
              <div className="w-48 h-48 rounded-md overflow-hidden border-2 border-neon-purple/50 neon-glow-purple">
                <div className="w-full h-full gradient-neon opacity-30 flex items-center justify-center">
                  <span className="text-6xl font-bold text-white/50">
                    {profile.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-md gradient-neon opacity-20 blur-xl" />
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-4" data-testid="text-about-name">
              {profile.name}
            </h3>

            <div className="flex items-center gap-2 text-muted-foreground mb-6">
              <MapPin className="w-4 h-4 text-neon-cyan" />
              <span data-testid="text-about-location">{profile.location}</span>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6" data-testid="text-about-bio">
              {profile.shortBio}
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              When I'm not coding, you'll find me exploring new music, experimenting with creative coding 
              projects, or diving deep into the latest web technologies. I believe in pushing boundaries 
              and creating experiences that leave a lasting impression.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              My approach combines technical excellence with creative vision, ensuring every project 
              not only functions flawlessly but also captivates and inspires. I'm always excited to 
              take on new challenges and collaborate with innovative teams.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Zap className="w-5 h-5 text-neon-purple" />
              <h3 className="text-xl font-semibold text-foreground">Skills & Technologies</h3>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              <Button
                variant={activeCategory === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory("all")}
                className={activeCategory === "all" 
                  ? "bg-neon-purple hover:bg-neon-purple/80" 
                  : "border-border hover:border-neon-purple/50"
                }
                data-testid="button-filter-all"
              >
                All
              </Button>
              {skillGroups.map((group) => (
                <Button
                  key={group.category}
                  variant={activeCategory === group.category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(group.category)}
                  className={activeCategory === group.category 
                    ? "bg-neon-purple hover:bg-neon-purple/80" 
                    : "border-border hover:border-neon-purple/50"
                  }
                  data-testid={`button-filter-${group.category.toLowerCase()}`}
                >
                  {group.category}
                </Button>
              ))}
            </div>

            <div className="space-y-8">
              {filteredGroups.map((group, groupIndex) => (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: groupIndex * 0.1 }}
                >
                  <h4 className="text-sm font-medium text-neon-cyan uppercase tracking-wider mb-4">
                    {group.category}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {group.skills.map((skill, skillIndex) => (
                      <SkillPill
                        key={skill.name}
                        skill={skill}
                        index={skillIndex}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-md border border-border bg-card/30">
              <h4 className="text-sm font-medium text-foreground mb-2">Skill Level Legend</h4>
              <div className="flex flex-wrap gap-4 text-xs">
                <span className="text-muted-foreground">Beginner</span>
                <span className="text-neon-green">Intermediate</span>
                <span className="text-neon-cyan">Advanced</span>
                <span className="text-neon-purple">Expert</span>
              </div>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>
    </div>
  );
}
