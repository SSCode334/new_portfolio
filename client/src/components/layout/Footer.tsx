import { motion } from "framer-motion";
import { socials } from "@/data/socials";
import { SiGithub, SiLinkedin, SiTwitter, SiCodepen, SiDribbble } from "react-icons/si";

const iconMap: Record<string, typeof SiGithub> = {
  github: SiGithub,
  linkedin: SiLinkedin,
  twitter: SiTwitter,
  codepen: SiCodepen,
  dribbble: SiDribbble,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border-t border-neon-purple/20 bg-background/50 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            {socials.map((social) => {
              const Icon = iconMap[social.icon];
              return (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md border border-border text-muted-foreground hover:text-neon-cyan hover:border-neon-cyan/50 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  data-testid={`link-footer-${social.icon}`}
                >
                  {Icon && <Icon className="w-5 h-5" />}
                </motion.a>
              );
            })}
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              {currentYear} YOUR_NAME. Crafted with passion.
            </p>
            <p className="text-xs text-muted-foreground/60 mt-1">
              Built with React, Three.js & Framer Motion
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
