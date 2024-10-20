import * as motion from "framer-motion/client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Basic",
    price: "$9",
    features: ["5 Projects", "Basic Analytics", "24/7 Support"],
  },
  {
    name: "Pro",
    price: "$29",
    features: [
      "Unlimited Projects",
      "Advanced Analytics",
      "Priority Support",
      "Custom Integrations",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Unlimited Everything",
      "Dedicated Account Manager",
      "Custom Development",
      "SLA",
    ],
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="w-full py-12 overflow-hidden md:py-24 lg:py-32"
    >
      <div className="container px-4 mx-auto md:px-6">
        <h2 className="mb-12 text-3xl font-bold tracking-tighter text-center sm:text-5xl">
          Pricing Plans
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className="flex flex-col p-6 bg-white rounded-md shadow-md"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-4 text-2xl font-bold">{plan.name}</h3>
              <p className="mb-6 text-4xl font-bold">
                {plan.price}
                <span className="text-sm font-normal">/month</span>
              </p>
              <ul className="flex-grow mb-6 space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="w-5 h-5 mr-2 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full">Choose Plan</Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
