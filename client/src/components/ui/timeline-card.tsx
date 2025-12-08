import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { TechBadge } from "@/components/ui/tech-badge";
import type { ExperienceItem } from "@/data/experience";

interface TimelineCardProps {
  item: ExperienceItem;
  index: number;
  isLast: boolean;
}

export function TimelineCard({ item, index, isLast }: TimelineCardProps) {
  const isWork = item.type === "work";

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative flex gap-6"
      data-testid={`timeline-item-${index}`}
    >
      <div className="flex flex-col items-center">
        <div
          className={`flex items-center justify-center w-10 h-10 rounded-md border ${
            isWork
              ? "bg-neon-purple/20 border-neon-purple/50 text-neon-purple"
              : "bg-neon-cyan/20 border-neon-cyan/50 text-neon-cyan"
          }`}
        >
          {isWork ? (
            <Briefcase className="w-5 h-5" />
          ) : (
            <GraduationCap className="w-5 h-5" />
          )}
        </div>
        {!isLast && (
          <div className="w-px flex-1 bg-gradient-to-b from-neon-purple/50 to-transparent mt-4" />
        )}
      </div>

      <Card className="flex-1 mb-8 bg-card/50 backdrop-blur-sm border-border hover:border-neon-purple/30 transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                {item.roleOrDegree}
              </h3>
              <p className="text-sm text-neon-cyan">{item.companyOrSchool}</p>
            </div>
            <div className="text-sm text-muted-foreground">
              <p>{item.startDate} - {item.endDate}</p>
              <p className="text-xs">{item.location}</p>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mb-4">
            {item.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {item.technologies.map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
