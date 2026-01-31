import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function FinalCta() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-primary via-primary/90 to-primary/80 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-background/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-background/20 rounded-full mb-6">
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium text-primary-foreground">
            Let&apos;s Create Something Amazing
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground mb-6 text-balance">
          Ready to Build a Powerful Digital Presence?
        </h2>

        <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
          Join 50+ brands that have transformed their digital footprint with Social Nexus. Let&apos;s start your journey today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 rounded-full text-lg h-14"
          >
            <Link href="/contact">
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="bg-transparent border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8 rounded-full text-lg h-14"
          >
            <Link href="/portfolio">View Our Work</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
