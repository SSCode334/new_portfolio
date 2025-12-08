import { motion } from "framer-motion";
import { Sparkles, Cpu, Waves } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { ParticleDemo, CubeDemo, WaveDemo } from "@/components/3d/PlaygroundCanvas";

const demos = [
  {
    title: "Interactive Particles",
    description: "A particle system that reacts to your cursor movement. Move around to push particles away.",
    icon: Sparkles,
    component: ParticleDemo,
  },
  {
    title: "Floating Wireframe",
    description: "A 3D wireframe cube that floats and rotates with color-shifting effects.",
    icon: Cpu,
    component: CubeDemo,
  },
  {
    title: "Procedural Waves",
    description: "Canvas-based wave animation with procedurally generated motion and color gradients.",
    icon: Waves,
    component: WaveDemo,
  },
];

export default function Playground() {
  return (
    <div className="pt-24">
      <SectionWrapper
        title="Playground"
        subtitle="Experimental demos and interactive visual toys"
      >
        <div className="grid gap-8">
          {demos.map((demo, index) => (
            <motion.div
              key={demo.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-md border border-neon-purple/50 bg-neon-purple/10">
                  <demo.icon className="w-5 h-5 text-neon-purple" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground" data-testid={`text-demo-title-${index}`}>
                    {demo.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{demo.description}</p>
                </div>
              </div>
              <demo.component />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 p-6 rounded-md border border-dashed border-border bg-card/30 text-center"
        >
          <p className="text-muted-foreground">
            More experiments coming soon. These demos showcase WebGL, Three.js, and Canvas capabilities.
          </p>
        </motion.div>
      </SectionWrapper>
    </div>
  );
}
