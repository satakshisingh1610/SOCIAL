"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  "All",
  "Branding",
  "Social Media",
  "Websites",
  "Influencer",
];

const projects = [
  {
    id: 1,
    title: "TechFlow Rebrand",
    category: "Branding",
    description: "Complete brand identity overhaul for a leading SaaS company, including logo, visual system, and brand guidelines.",
    results: "200% increase in brand recognition",
    color: "from-primary/40 to-primary/20",
  },
  {
    id: 2,
    title: "FoodieHub Campaign",
    category: "Social Media",
    description: "Viral social media campaign for a food delivery startup reaching millions of impressions.",
    results: "2.5M+ impressions, 150K new followers",
    color: "from-accent/40 to-accent/20",
  },
  {
    id: 3,
    title: "StyleCraft Launch",
    category: "Influencer",
    description: "Fashion brand launch campaign with top-tier influencers and content creators.",
    results: "500K+ reach, 85% engagement rate",
    color: "from-secondary to-secondary/50",
  },
  {
    id: 4,
    title: "HealthPlus Platform",
    category: "Websites",
    description: "Modern health-tech platform design and development with seamless user experience.",
    results: "40% increase in conversions",
    color: "from-primary/30 to-accent/30",
  },
  {
    id: 5,
    title: "EcoSmart Identity",
    category: "Branding",
    description: "Sustainable brand identity for an eco-friendly products company.",
    results: "Brand awareness up 180%",
    color: "from-accent/30 to-primary/30",
  },
  {
    id: 6,
    title: "FinanceNow App",
    category: "Websites",
    description: "Mobile-first web application for personal finance management.",
    results: "50K+ active users in 3 months",
    color: "from-secondary/80 to-primary/20",
  },
  {
    id: 7,
    title: "TravelBee Social",
    category: "Social Media",
    description: "Complete social media strategy and management for travel brand.",
    results: "300% growth in engagement",
    color: "from-primary/20 to-accent/40",
  },
  {
    id: 8,
    title: "GameZone Partnership",
    category: "Influencer",
    description: "Gaming influencer campaign reaching Gen Z audience.",
    results: "1M+ views, 200K app downloads",
    color: "from-accent/20 to-secondary",
  },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-secondary/30 to-primary/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 -right-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              Our Work
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Portfolio & Case Studies
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Explore our latest projects and see how we&apos;ve helped brands transform their digital presence and achieve remarkable results.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Projects */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-card border border-border text-foreground hover:bg-secondary hover:border-primary/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br border border-border hover:shadow-2xl transition-all duration-500 hover:scale-105"
              >
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-50 group-hover:opacity-70 transition-opacity duration-500`}
                />
                <div className="relative p-8 md:p-10 min-h-[320px] flex flex-col justify-between">
                  <div>
                    <span className="inline-block px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-xs font-medium text-foreground w-fit mb-4 hover:scale-110 transition-transform duration-300">
                      {project.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:translate-x-2 transition-transform duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-base mb-4">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="bg-background/80 backdrop-blur-sm rounded-full px-4 py-2 hover:scale-105 transition-transform duration-300">
                      <p className="text-xs text-muted-foreground">Results</p>
                      <p className="text-sm font-semibold text-foreground">
                        {project.results}
                      </p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0 hover:scale-110">
                      <ExternalLink className="w-5 h-5 text-foreground" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-primary to-primary/80 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-primary-foreground/20 rounded-full opacity-10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
            Want Results Like These?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help your brand achieve similar success. Every project starts with a conversation.
          </p>
          <div className="hover:scale-105 transition-transform duration-300 inline-block">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 rounded-full"
            >
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
