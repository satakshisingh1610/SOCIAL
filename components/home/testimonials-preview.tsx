"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    quote: "Social Nexus transformed our brand completely. The team's creativity and strategic thinking helped us achieve a 300% increase in engagement within just 3 months.",
    author: "Sarah Chen",
    role: "CEO",
    company: "TechFlow",
  },
  {
    id: 2,
    quote: "Working with Social Nexus was a game-changer. Their influencer marketing campaign exceeded all our expectations and delivered incredible ROI.",
    author: "Michael Rodriguez",
    role: "Marketing Director",
    company: "FoodieHub",
  },
  {
    id: 3,
    quote: "The website they built for us is not only beautiful but also converts visitors like never before. Highly recommend their services!",
    author: "Emily Thompson",
    role: "Founder",
    company: "StyleCraft",
  },
];

export function TestimonialsPreview() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl border border-border p-8 md:p-12 shadow-lg">
            <Quote className="w-12 h-12 text-primary/30 mb-6" />
            <blockquote className="text-xl md:text-2xl text-foreground font-medium leading-relaxed mb-8 min-h-[120px]">
              &ldquo;{testimonials[current].quote}&rdquo;
            </blockquote>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-foreground">
                  {testimonials[current].author}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonials[current].role}, {testimonials[current].company}
                </p>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prev}
                  className="rounded-full border-2 bg-transparent"
                >
                  <ChevronLeft className="w-5 h-5" />
                  <span className="sr-only">Previous testimonial</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={next}
                  className="rounded-full border-2 bg-transparent"
                >
                  <ChevronRight className="w-5 h-5" />
                  <span className="sr-only">Next testimonial</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === current
                    ? "bg-primary w-8"
                    : "bg-primary/30 hover:bg-primary/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
