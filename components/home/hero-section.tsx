"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-primary/20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/40 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-foreground">
                Digital Excellence Awaits
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6 text-balance">
              We Build Brands for the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Digital World
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed text-pretty">
              Transform your brand into a digital powerhouse. We craft compelling narratives, stunning visuals, and strategic campaigns that captivate audiences and drive growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 rounded-full text-lg h-14"
              >
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-foreground/20 hover:bg-foreground/5 font-semibold px-8 rounded-full text-lg h-14 bg-transparent"
              >
                <Link href="/contact">Talk to Our Experts</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border">
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-foreground">150+</p>
                <p className="text-sm text-muted-foreground">Projects Delivered</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-foreground">50+</p>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-foreground">5+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square">
              {/* Main Card */}
              <div className="absolute inset-4 bg-card rounded-3xl shadow-2xl border border-border overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
                <div className="absolute top-8 left-8 right-8">
                  <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-destructive" />
                    <div className="w-3 h-3 rounded-full bg-accent" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-primary/30 rounded-full w-3/4" />
                    <div className="h-4 bg-primary/20 rounded-full w-1/2" />
                    <div className="h-4 bg-primary/10 rounded-full w-2/3" />
                  </div>
                </div>
                <div className="absolute bottom-8 left-8 right-8 grid grid-cols-2 gap-4">
                  <div className="bg-primary/20 rounded-2xl p-4 h-32" />
                  <div className="bg-accent/20 rounded-2xl p-4 h-32" />
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent rounded-2xl shadow-lg flex items-center justify-center animate-bounce">
                <span className="text-3xl font-bold text-accent-foreground">+</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary rounded-2xl shadow-lg flex items-center justify-center">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary-foreground">98%</p>
                  <p className="text-xs text-primary-foreground/80">Success Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
