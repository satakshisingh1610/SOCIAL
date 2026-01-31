"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "TechFlow Rebrand",
    category: "Brand Identity",
    description: "Complete brand overhaul for a leading SaaS company",
    color: "from-primary/40 to-primary/20",
  },
  {
    id: 2,
    title: "FoodieHub Campaign",
    category: "Social Media",
    description: "Viral campaign reaching 2M+ impressions",
    color: "from-accent/40 to-accent/20",
  },
  {
    id: 3,
    title: "StyleCraft Launch",
    category: "Influencer Marketing",
    description: "Fashion brand launch with top creators",
    color: "from-secondary to-primary/30",
  },
  {
    id: 4,
    title: "HealthPlus Platform",
    category: "Website Development",
    description: "Modern health-tech platform design & development",
    color: "from-primary/30 to-accent/30",
  },
];

export function FeaturedWork() {
  return (
    <section className="py-20 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
              Our Work
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Featured Projects
            </h2>
          </div>
          <Button
            asChild
            variant="outline"
            className="border-2 border-foreground/20 hover:bg-foreground/5 rounded-full self-start md:self-auto bg-transparent"
          >
            <Link href="/portfolio">
              View All Work
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/portfolio/${project.id}`}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br border border-border/50 hover:shadow-2xl transition-all duration-500"
            >
              <img 
                src="/images/portfolio-work.jpg" 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-50 group-hover:opacity-60 transition-opacity duration-500`} />
              <div className="relative p-8 md:p-10 h-64 md:h-80 flex flex-col justify-end">
                <span className="inline-block px-3 py-1 bg-background/85 backdrop-blur-sm rounded-full text-xs font-medium text-foreground w-fit mb-4 border border-border/50">
                  {project.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2 group-hover:translate-x-2 transition-transform duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base">
                  {project.description}
                </p>
                <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-background/85 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0 border border-border/50 shadow-lg">
                  <ArrowRight className="w-5 h-5 text-foreground" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
