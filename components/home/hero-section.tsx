"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, TrendingUp, Zap, Target } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-primary/10">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/25 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: "1s"}} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: "2s"}} />
        
        {/* Floating accent shapes */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 border-2 border-primary/20 rounded-lg opacity-30" style={{animation: "float 6s ease-in-out infinite"}} />
        <div className="absolute bottom-1/4 left-1/4 w-24 h-24 border-2 border-accent/20 rounded-full opacity-30" style={{animation: "float 8s ease-in-out infinite", animationDelay: "1s"}} />
      </div>

      {/* Global animation styles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-20px) translateX(10px); }
          66% { transform: translateY(20px) translateX(-10px); }
        }
      `}</style>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/15 border border-primary/30 rounded-full mb-2 hover:bg-primary/20 transition-colors duration-300">
              <Sparkles className="w-4 h-4 text-accent animate-pulse" />
              <span className="text-sm font-medium text-foreground">
                Digital Excellence Awaits
              </span>
            </div>

            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground leading-tight mb-6 text-balance">
                We Build <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-pulse">
                  Brands
                </span>
                <br />
                for the{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
                  Digital World
                </span>
              </h1>
            </div>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed text-pretty">
              Transform your brand into a digital powerhouse. We craft compelling narratives, stunning visuals, and strategic campaigns that captivate audiences and drive exponential growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 rounded-full text-lg h-14 group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-primary/40 hover:bg-primary/5 font-semibold px-8 rounded-full text-lg h-14 bg-transparent hover:scale-105 transition-all duration-300"
              >
                <Link href="/portfolio">Explore Our Work</Link>
              </Button>
            </div>

            {/* Stats with Icons */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border/50">
              <div className="group hover:scale-110 transition-transform duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <p className="text-3xl sm:text-4xl font-bold text-foreground">150+</p>
                </div>
                <p className="text-sm text-muted-foreground">Projects Delivered</p>
              </div>
              <div className="group hover:scale-110 transition-transform duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-5 h-5 text-accent" />
                  <p className="text-3xl sm:text-4xl font-bold text-foreground">50+</p>
                </div>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
              <div className="group hover:scale-110 transition-transform duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-secondary" />
                  <p className="text-3xl sm:text-4xl font-bold text-foreground">5+</p>
                </div>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Visual Element with Enhanced Graphics */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square">
              {/* Main Card with layered design */}
              <div className="absolute inset-4 bg-card rounded-3xl shadow-2xl border border-border overflow-hidden hover:shadow-3xl transition-shadow duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-accent/10" />
                
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
                
                {/* Header section */}
                <div className="absolute top-8 left-8 right-8 z-10">
                  <div className="flex gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500 hover:scale-125 transition-transform" />
                    <div className="w-3 h-3 rounded-full bg-accent hover:scale-125 transition-transform" />
                    <div className="w-3 h-3 rounded-full bg-green-500 hover:scale-125 transition-transform" />
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-primary/40 rounded-full w-3/4 hover:w-full transition-all" />
                    <div className="h-4 bg-primary/25 rounded-full w-1/2 hover:w-2/3 transition-all" style={{transitionDelay: "100ms"}} />
                    <div className="h-4 bg-primary/15 rounded-full w-2/3 hover:w-3/4 transition-all" style={{transitionDelay: "200ms"}} />
                  </div>
                </div>

                {/* Content grid */}
                <div className="absolute bottom-8 left-8 right-8 grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl p-4 h-32 hover:scale-105 transition-transform hover:shadow-lg" />
                  <div className="bg-gradient-to-br from-accent/30 to-accent/10 rounded-2xl p-4 h-32 hover:scale-105 transition-transform hover:shadow-lg" style={{transitionDelay: "100ms"}} />
                </div>
              </div>

              {/* Floating Elements with Enhanced Animations */}
              <div className="absolute -top-6 -right-6 w-28 h-28 bg-accent rounded-3xl shadow-xl flex items-center justify-center group hover:scale-125 hover:shadow-2xl transition-all duration-300 cursor-pointer" style={{animation: "bounce 3s ease-in-out infinite"}}>
                <span className="text-4xl font-bold text-accent-foreground">+</span>
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-36 h-36 bg-gradient-to-br from-primary to-primary/80 rounded-3xl shadow-xl flex items-center justify-center group hover:scale-110 hover:shadow-2xl transition-all duration-300 cursor-pointer" style={{animation: "float 4s ease-in-out infinite"}}>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary-foreground">98%</p>
                  <p className="text-sm text-primary-foreground/90 font-semibold">Success Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
          <span className="text-sm text-muted-foreground">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-foreground/50 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
