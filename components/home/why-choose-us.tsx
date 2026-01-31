"use client";

import { Check, Zap, Shield, Lightbulb, Target, Heart } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Fast Execution",
    description: "We move quickly without compromising quality, delivering results on time.",
  },
  {
    icon: Shield,
    title: "Proven Track Record",
    description: "150+ successful projects and 50+ happy clients speak for our expertise.",
  },
  {
    icon: Lightbulb,
    title: "Creative Excellence",
    description: "Our team brings fresh, innovative ideas that make your brand stand out.",
  },
  {
    icon: Target,
    title: "Data-Driven Approach",
    description: "Every decision is backed by insights and analytics for maximum impact.",
  },
  {
    icon: Heart,
    title: "Client-Centric Focus",
    description: "Your success is our priority. We build lasting partnerships, not just projects.",
  },
  {
    icon: Check,
    title: "End-to-End Solutions",
    description: "From strategy to execution, we handle everything under one roof.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
              Why Social Nexus
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Your Partner in Digital Success
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We combine creativity with strategy to deliver digital solutions that not only look great but also drive real business results. Here&apos;s what sets us apart:
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                    <reason.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Background circles */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-3xl" />
              
              {/* Main card */}
              <div className="absolute inset-8 bg-card rounded-3xl shadow-2xl border border-border flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Target className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Results That Matter
                  </h3>
                  <p className="text-muted-foreground">
                    We measure success by your growth
                  </p>
                </div>
              </div>

              {/* Floating stats */}
              <div className="absolute top-4 left-4 bg-card rounded-2xl shadow-lg border border-border p-4">
                <p className="text-3xl font-bold text-primary">98%</p>
                <p className="text-xs text-muted-foreground">Client Satisfaction</p>
              </div>
              <div className="absolute bottom-4 right-4 bg-card rounded-2xl shadow-lg border border-border p-4">
                <p className="text-3xl font-bold text-accent">3x</p>
                <p className="text-xs text-muted-foreground">Avg. ROI Increase</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
