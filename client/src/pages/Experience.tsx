import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { TimelineCard } from "@/components/ui/timeline-card";
import { Button } from "@/components/ui/button";
import { experiences, type ExperienceType } from "@/data/experience";

export default function Experience() {
  const [filter, setFilter] = useState<ExperienceType | "all">("all");

  const filteredExperiences = filter === "all"
    ? experiences
    : experiences.filter((exp) => exp.type === filter);

  return (
    <div className="pt-24">
      <SectionWrapper
        title="Experience"
        subtitle="My professional journey through work and education"
      >
        <div className="flex flex-wrap gap-3 mb-12">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
            className={filter === "all" 
              ? "bg-neon-purple hover:bg-neon-purple/80" 
              : "border-border hover:border-neon-purple/50"
            }
            data-testid="button-filter-all"
          >
            All
          </Button>
          <Button
            variant={filter === "work" ? "default" : "outline"}
            onClick={() => setFilter("work")}
            className={filter === "work" 
              ? "bg-neon-purple hover:bg-neon-purple/80" 
              : "border-border hover:border-neon-purple/50"
            }
            data-testid="button-filter-work"
          >
            <Briefcase className="w-4 h-4 mr-2" />
            Work
          </Button>
          <Button
            variant={filter === "education" ? "default" : "outline"}
            onClick={() => setFilter("education")}
            className={filter === "education" 
              ? "bg-neon-cyan hover:bg-neon-cyan/80 text-black" 
              : "border-border hover:border-neon-cyan/50"
            }
            data-testid="button-filter-education"
          >
            <GraduationCap className="w-4 h-4 mr-2" />
            Education
          </Button>
        </div>

        <motion.div
          key={filter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="max-w-3xl"
        >
          {filteredExperiences.map((item, index) => (
            <TimelineCard
              key={`${item.companyOrSchool}-${item.startDate}`}
              item={item}
              index={index}
              isLast={index === filteredExperiences.length - 1}
            />
          ))}
        </motion.div>

        {filteredExperiences.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground">No experiences found for this filter.</p>
          </motion.div>
        )}
      </SectionWrapper>
    </div>
  );
}
