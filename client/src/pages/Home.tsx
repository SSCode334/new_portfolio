import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { HeroScene } from "@/components/3d/HeroScene";
import { profile } from "@/data/profile";
import lokiImage from "@/assets/loki.jpg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center">
      <HeroScene />
      
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl flex-1"
          >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium rounded-md border border-neon-cyan/30 bg-neon-cyan/10 text-neon-cyan">
              <Sparkles className="w-4 h-4" />
              Available for hire
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4"
            data-testid="text-hero-name"
          >
            <span className="gradient-text-neon">{profile.name}</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl text-neon-cyan mb-6 neon-text-cyan"
            data-testid="text-hero-tagline"
          >
            {profile.tagline}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed"
            data-testid="text-hero-bio"
          >
            {profile.shortBio}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4"
          >
            <Link href="/projects">
              <Button
                size="lg"
                className="bg-neon-purple hover:bg-neon-purple/80 text-white font-semibold animate-pulse-glow"
                data-testid="button-view-projects"
              >
                View Projects
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10"
                data-testid="button-contact-me"
              >
                Contact Me
              </Button>
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-16 flex items-center gap-8 text-sm text-muted-foreground"
          >
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-neon-purple">5+</span>
              <span>Years Experience</span>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-neon-cyan">50+</span>
              <span>Projects Completed</span>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-neon-magenta">30+</span>
              <span>Happy Clients</span>
            </div>
          </motion.div>
        </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-neon-purple/20 blur-3xl rounded-full animate-pulse" />
              <img
                src={lokiImage}
                alt="Profile"
                className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-neon-cyan/50 shadow-2xl shadow-neon-purple/50"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-neon-purple to-transparent" />
        </motion.div>
      </motion.div>
    </div>
  );
}
