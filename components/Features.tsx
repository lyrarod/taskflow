import * as motion from "framer-motion/client";

import { CheckCircle, Zap, Shield, Smartphone } from "lucide-react";

const features = [
  {
    name: "Easy Integration",
    description: "Seamlessly integrate with your existing tools and workflows.",
    icon: Zap,
  },
  {
    name: "Secure & Reliable",
    description: "Bank-level security ensures your data is always protected.",
    icon: Shield,
  },
  {
    name: "Mobile Friendly",
    description:
      "Access your work from anywhere with our responsive mobile app.",
    icon: Smartphone,
  },
  {
    name: "24/7 Support",
    description: "Our dedicated team is always ready to assist you.",
    icon: CheckCircle,
  },
  {
    name: "Easy Integration",
    description: "Seamlessly integrate with your existing tools and workflows.",
    icon: Zap,
  },
  {
    name: "Secure & Reliable",
    description: "Bank-level security ensures your data is always protected.",
    icon: Shield,
  },
  {
    name: "Mobile Friendly",
    description:
      "Access your work from anywhere with our responsive mobile app.",
    icon: Smartphone,
  },
  {
    name: "24/7 Support",
    description: "Our dedicated team is always ready to assist you.",
    icon: CheckCircle,
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="w-full py-12 overflow-hidden md:py-24 lg:py-32"
    >
      <div className="container px-4 mx-auto md:px-6">
        <h2 className="mb-12 text-3xl font-bold tracking-tighter text-center sm:text-5xl">
          Features
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-4 text-center bg-white rounded-md shadow-md"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
              viewport={{ once: true }}
            >
              <feature.icon className="w-12 h-12 mb-4 text-primary" />
              <h3 className="mb-2 text-lg font-semibold">{feature.name}</h3>
              <p className="text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
