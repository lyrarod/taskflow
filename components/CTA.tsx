import * as motion from "framer-motion/client";

import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="w-full py-12 overflow-hidden bg-gradient-to-r from-primary/80 to-background md:py-24 lg:py-32">
      <motion.div
        className="container px-4 mx-auto md:px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Ready to Boost Your Productivity?
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join thousands of satisfied users and transform your workflow
              today.
            </p>
          </div>
          <Button variant={"outline"}>Start Your Free Trial</Button>
        </div>
      </motion.div>
    </section>
  );
}
