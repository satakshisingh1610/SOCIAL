import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function FinalCta() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-primary via-primary/90 to-accent/80 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/25 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-background/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: "1s"}} />
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-50" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-background/20 backdrop-blur-sm border border-primary-foreground/20 rounded-full mb-6 hover:bg-background/30 transition-colors duration-300">
          <Sparkles className="w-4 h-4 text-accent animate-pulse" />
          <span className="text-sm font-medium text-primary-foreground">
            Let&apos;s Create Something Amazing
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground mb-6 text-balance leading-tight">
          Ready to Build a Powerful
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/80">
            Digital Presence?
          </span>
        </h2>

        <p className="text-lg sm:text-xl text-primary-foreground/85 max-w-2xl mx-auto mb-10 leading-relaxed">
          Join 50+ brands that have transformed their digital footprint with Social Nexus. Let&apos;s start your journey today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 rounded-full text-lg h-14 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
          >
            <Link href="/contact">
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="bg-primary-foreground/10 backdrop-blur-sm border-2 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/20 hover:border-primary-foreground/60 font-semibold px-8 rounded-full text-lg h-14 hover:scale-105 transition-all duration-300"
          >
            <Link href="/portfolio">View Our Work</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
