"use client";

import * as motion from "framer-motion/client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    name: "Michael Chen",
    role: "Startup Founder",
    content: `"I can't imagine running my business without this tool. It's been a game-changer for our productivity."`,
    avatar: "https://github.com/shadcn.png",
  },
  {
    name: "Sarah Johnson",
    role: "Marketing Manager",
    content: `"This micro-SaaS has revolutionized our workflow. It's intuitive, powerful, and has saved us countless hours."`,
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Michael Chen",
    role: "Startup Founder",
    content: `"I can't imagine running my business without this tool. It's been a game-changer for our productivity."`,
    avatar: "https://github.com/shadcn.png",
  },
  {
    name: "Emily Rodriguez",
    role: "Project Manager",
    content: `"The features and customer support are top-notch. It has significantly improved our team's collaboration."`,
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Michael Chen",
    role: "Startup Founder",
    content: `"I can't imagine running my business without this tool. It's been a game-changer for our productivity."`,
    avatar: "https://github.com/shadcn.png",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="w-full py-12 overflow-hidden bg-white md:py-24 lg:py-32"
    >
      <motion.div
        className="container px-4 mx-auto md:px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="mb-12 text-2xl font-bold tracking-tighter text-center md:text-5xl">
          What Our Customers Say
        </h2>
        <Carousel
          className="w-full max-w-xs mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: true,
            }),
          ]}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="">
                <Card>
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="mb-4 rounded-full"
                    />
                    <p className="mb-4 text-lg">"{`${testimonial.content}`}"</p>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </motion.div>
    </section>
  );
}
