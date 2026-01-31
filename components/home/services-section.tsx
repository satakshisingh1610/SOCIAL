"use client";

import Link from "next/link";
import { Palette, Share2, Users, Globe, TrendingUp, Video, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Brand Identity & Design",
    description: "Create a memorable visual identity that resonates with your audience and sets you apart.",
    color: "bg-primary/20 text-primary",
    href: "/services#brand-identity",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description: "Engage, grow, and convert your audience with strategic social media presence.",
    color: "bg-accent/20 text-accent",
    href: "/services#social-media",
  },
  {
    icon: Users,
    title: "Influencer Marketing",
    description: "Connect with the right creators to amplify your brand message authentically.",
    color: "bg-secondary text-foreground",
    href: "/services#influencer",
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "Build stunning, high-performance websites that convert visitors into customers.",
    color: "bg-primary/30 text-primary",
    href: "/services#web-dev",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing & Growth",
    description: "Drive measurable results with data-driven digital marketing strategies.",
    color: "bg-accent/30 text-accent",
    href: "/services#digital-growth",
  },
  {
    icon: Video,
    title: "Content Production",
    description: "Produce compelling content that tells your story and captivates your audience.",
    color: "bg-secondary text-foreground",
    href: "/services#content",
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Services That Drive Results
          </h2>
          <p className="text-muted-foreground text-lg">
            From strategy to execution, we provide comprehensive digital solutions to elevate your brand.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group p-8 bg-card rounded-3xl border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <span className="inline-flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn more
                <ArrowRight className="ml-1 w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
