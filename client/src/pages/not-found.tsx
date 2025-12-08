import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <motion.h1
          className="text-8xl sm:text-9xl font-bold gradient-text-neon mb-4"
          animate={{ 
            textShadow: [
              "0 0 20px hsl(280 85% 55% / 0.5)",
              "0 0 40px hsl(280 85% 55% / 0.8)",
              "0 0 20px hsl(280 85% 55% / 0.5)"
            ]
          }}
          transition={{ repeat: Infinity, duration: 2 }}
          data-testid="text-404"
        >
          404
        </motion.h1>
        
        <h2 className="text-2xl font-semibold text-foreground mb-2">
          Page Not Found
        </h2>
        
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved to another dimension.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/">
            <Button
              className="bg-neon-purple hover:bg-neon-purple/80 text-white"
              data-testid="button-go-home"
            >
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Button>
          </Link>
          
          <Button
            variant="outline"
            className="border-border hover:border-neon-cyan/50"
            onClick={() => window.history.back()}
            data-testid="button-go-back"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
