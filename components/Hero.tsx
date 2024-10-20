import * as motion from "framer-motion/client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full py-12 overflow-hidden md:py-24 lg:py-32 xl:py-48 bg-gradient-to-l from-primary/80 to-background">
      <motion.div
        className="container px-4 mx-auto md:px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col items-center space-y-8 text-center md:space-y-12">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Simplify Your Workflow
            </h1>
          </div>
          <blockquote className="max-w-xl mx-auto mt-6 italic border-l-2 text-muted-foreground md:text-xl">
            "Boost productivity and streamline your tasks with our intuitive
            micro-SaaS solution."
          </blockquote>
          <div className="space-x-4">
            <Button>Get Started</Button>
            <Button variant="outline">
              Learn More <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
