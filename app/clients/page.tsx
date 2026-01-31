"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote, ArrowRight, Star } from "lucide-react";

const clients = [
  "TechFlow",
  "FoodieHub",
  "StyleCraft",
  "HealthPlus",
  "EcoSmart",
  "FinanceNow",
  "TravelBee",
  "GameZone",
  "DataCore",
  "CloudSync",
  "MediaPro",
  "SmartLiving",
];

const testimonials = [
  {
    id: 1,
    quote: "Social Nexus transformed our brand completely. The team's creativity and strategic thinking helped us achieve a 300% increase in engagement within just 3 months. They truly understand what it takes to succeed in the digital space.",
    author: "Sarah Chen",
    role: "CEO",
    company: "TechFlow",
    rating: 5,
  },
  {
    id: 2,
    quote: "Working with Social Nexus was a game-changer for our food delivery business. Their influencer marketing campaign exceeded all our expectations and delivered incredible ROI. We saw our app downloads triple in just 6 weeks.",
    author: "Michael Rodriguez",
    role: "Marketing Director",
    company: "FoodieHub",
    rating: 5,
  },
  {
    id: 3,
    quote: "The website they built for us is not only beautiful but also converts visitors like never before. Our online sales increased by 150% after the redesign. Highly recommend their services to any business looking to grow!",
    author: "Emily Thompson",
    role: "Founder",
    company: "StyleCraft",
    rating: 5,
  },
  {
    id: 4,
    quote: "Social Nexus helped us establish a strong brand identity in a competitive market. Their attention to detail and creative approach set them apart. They're not just service providers—they're true partners in growth.",
    author: "David Park",
    role: "COO",
    company: "HealthPlus",
    rating: 5,
  },
  {
    id: 5,
    quote: "From social media strategy to content creation, Social Nexus delivers excellence at every step. Our brand awareness has skyrocketed, and we're now recognized as a leader in sustainable products. Incredible team!",
    author: "Lisa Green",
    role: "Brand Manager",
    company: "EcoSmart",
    rating: 5,
  },
  {
    id: 6,
    quote: "The team at Social Nexus understood our fintech brand perfectly. They created a digital presence that builds trust and converts. Our customer acquisition cost dropped by 40% after implementing their strategies.",
    author: "James Wilson",
    role: "CMO",
    company: "FinanceNow",
    rating: 5,
  },
];

export default function ClientsPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-secondary/30 to-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              Our Clients
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Trusted by Leading Brands
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              We&apos;re proud to partner with innovative companies across industries. Here&apos;s what they have to say about working with us.
            </p>
          </div>
        </div>
      </section>

      {/* Client Logos Grid */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Partners
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From startups to established enterprises, we&apos;ve helped brands across diverse sectors achieve their digital goals.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {clients.map((client) => (
              <div
                key={client}
                className="flex items-center justify-center h-24 bg-background rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <span className="text-lg font-bold text-muted-foreground/60 hover:text-foreground transition-colors duration-300">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
              Testimonials
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              What Our Clients Say
            </h2>
          </div>

          {/* Featured Testimonial */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-card rounded-3xl border border-border p-8 md:p-12 shadow-lg relative">
              <Quote className="w-16 h-16 text-primary/20 absolute top-8 left-8" />
              <div className="relative z-10 pt-8">
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl text-foreground font-medium leading-relaxed mb-8 min-h-[120px]">
                  &ldquo;{testimonials[currentTestimonial].quote}&rdquo;
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-foreground text-lg">
                      {testimonials[currentTestimonial].author}
                    </p>
                    <p className="text-muted-foreground">
                      {testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={prevTestimonial}
                      className="rounded-full border-2 bg-transparent"
                    >
                      <ChevronLeft className="w-5 h-5" />
                      <span className="sr-only">Previous testimonial</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={nextTestimonial}
                      className="rounded-full border-2 bg-transparent"
                    >
                      <ChevronRight className="w-5 h-5" />
                      <span className="sr-only">Next testimonial</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-primary w-8"
                      : "bg-primary/30 hover:bg-primary/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Testimonial Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 6).map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-card rounded-2xl border border-border p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-4">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-primary to-primary/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Join Our Client Family?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help your brand achieve similar success stories. Your transformation starts here.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 rounded-full"
          >
            <Link href="/contact">
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
