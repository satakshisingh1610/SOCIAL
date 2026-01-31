import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Search,
  FileText,
  Rocket,
  Settings,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Process | Social Nexus",
  description: "Discover our proven 5-step process: Discovery, Planning, Execution, Optimization, and Growth. See how we deliver results for your brand.",
};

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    subtitle: "Understanding Your Brand",
    description: "We start by diving deep into your business, understanding your goals, target audience, competitive landscape, and unique value proposition. This foundation ensures every decision we make is aligned with your objectives.",
    activities: [
      "Brand & Business Analysis",
      "Market Research",
      "Competitor Analysis",
      "Audience Profiling",
      "Goal Setting & KPIs",
    ],
    color: "from-primary/40 to-primary/20",
    iconColor: "bg-primary text-primary-foreground",
  },
  {
    number: "02",
    icon: FileText,
    title: "Planning",
    subtitle: "Strategic Roadmap",
    description: "With insights in hand, we develop a comprehensive strategy tailored to your needs. Our detailed roadmap outlines timelines, deliverables, and milestones to ensure clarity and alignment throughout the project.",
    activities: [
      "Strategy Development",
      "Creative Direction",
      "Content Planning",
      "Resource Allocation",
      "Timeline & Milestones",
    ],
    color: "from-accent/40 to-accent/20",
    iconColor: "bg-accent text-accent-foreground",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Execution",
    subtitle: "Bringing Ideas to Life",
    description: "This is where the magic happens. Our expert team brings the strategy to life through creative design, compelling content, and technical excellence. Regular check-ins ensure you're always in the loop.",
    activities: [
      "Design & Development",
      "Content Creation",
      "Campaign Launch",
      "Quality Assurance",
      "Client Reviews & Feedback",
    ],
    color: "from-secondary to-secondary/50",
    iconColor: "bg-foreground text-background",
  },
  {
    number: "04",
    icon: Settings,
    title: "Optimization",
    subtitle: "Continuous Improvement",
    description: "We monitor performance closely and make data-driven adjustments to maximize results. Our iterative approach ensures we're always improving and adapting to what works best.",
    activities: [
      "Performance Monitoring",
      "A/B Testing",
      "Data Analysis",
      "Strategy Refinement",
      "Feedback Integration",
    ],
    color: "from-primary/30 to-accent/30",
    iconColor: "bg-primary text-primary-foreground",
  },
  {
    number: "05",
    icon: TrendingUp,
    title: "Growth",
    subtitle: "Scaling Success",
    description: "Once we've found the winning formula, we scale what works. Our focus shifts to sustainable growth, helping you expand your reach and impact while maintaining quality and consistency.",
    activities: [
      "Scale Winning Strategies",
      "Expand Reach & Channels",
      "Long-term Partnership",
      "Ongoing Support",
      "Future Planning",
    ],
    color: "from-accent/30 to-primary/30",
    iconColor: "bg-accent text-accent-foreground",
  },
];

export default function ProcessPage() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-secondary/30 to-primary/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              How We Work
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Our Proven Process
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              A systematic approach that ensures every project delivers exceptional results. From discovery to growth, we guide you through every step.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <span 
                      className="text-6xl font-bold text-primary/20"
                    >
                      {step.number}
                    </span>
                    <div
                      className={`w-14 h-14 ${step.iconColor} rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110`}
                    >
                      <step.icon className="w-7 h-7" />
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                    {step.subtitle}
                  </p>
                  <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                    {step.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {step.description}
                  </p>
                  <div 
                    className="bg-card rounded-2xl border border-border p-6 hover:shadow-lg hover:border-primary/50 transition-all duration-300"
                  >
                    <h4 className="font-semibold text-foreground mb-4">
                      Key Activities:
                    </h4>
                    <ul className="space-y-3">
                      {step.activities.map((activity) => (
                        <li 
                          key={activity} 
                          className="flex items-center gap-3"
                        >
                          <div className="w-2 h-2 rounded-full bg-accent" />
                          <span className="text-sm text-muted-foreground">
                            {activity}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Visual */}
                <div
                  className={`transition-all duration-300 hover:scale-105 ${index % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  <div className={`aspect-square rounded-3xl bg-gradient-to-br ${step.color} p-8 relative overflow-hidden group`}>
                    <div className="absolute inset-8 bg-card rounded-2xl shadow-xl border border-border flex items-center justify-center group-hover:shadow-2xl transition-all duration-300">
                      <div className="text-center">
                        <step.icon className="w-20 h-20 text-primary/30 mx-auto mb-4" />
                        <p className="text-4xl font-bold text-foreground">
                          Step {step.number}
                        </p>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 w-20 h-20 bg-accent/30 rounded-full blur-xl" />
                    <div className="absolute bottom-4 left-4 w-28 h-28 bg-primary/30 rounded-full blur-xl" />
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
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let&apos;s begin with discovery. Schedule a free consultation to discuss your project and see how our process can work for you.
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
