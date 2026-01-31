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
      <section className="relative min-h-[85vh] flex items-center py-20 lg:py-32 bg-gradient-to-br from-background via-secondary/25 to-primary/15 overflow-hidden">
        {/* Tech-inspired Grid Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: "1s"}} />
          
          {/* Grid pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-10" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>

          {/* Animated flow lines */}
          <div className="absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" style={{animation: "flow 4s ease-in-out infinite"}} />
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent" style={{animation: "flow 5s ease-in-out infinite", animationDirection: "reverse"}} />
          <div className="absolute top-3/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/30 to-transparent" style={{animation: "flow 6s ease-in-out infinite"}} />
        </div>

        <style>{`
          @keyframes flow {
            0%, 100% { background-position: 0% 0%; }
            50% { background-position: 100% 0%; }
          }
        `}</style>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text Content */}
            <div className="text-center lg:text-left space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/15 border border-primary/30 rounded-full hover:bg-primary/20 transition-colors">
                <span className="inline-block w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-sm font-medium text-foreground">Clarity & System</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance">
                Our
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Proven Process
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                A structured approach to scalable digital growth. From discovery to optimization, we guide you through every step with clarity and precision.
              </p>

              <div className="space-y-4 pt-6">
                <div className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300 cursor-pointer">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Discovery</h3>
                    <p className="text-sm text-muted-foreground">Understanding your vision</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300 cursor-pointer">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/20 border border-accent/30 flex items-center justify-center">
                    <span className="text-lg font-bold text-accent">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Strategy</h3>
                    <p className="text-sm text-muted-foreground">Building the roadmap</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300 cursor-pointer">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-secondary/20 border border-secondary/30 flex items-center justify-center">
                    <span className="text-lg font-bold text-foreground">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Execution</h3>
                    <p className="text-sm text-muted-foreground">Bringing ideas to life</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Visual Flow Diagram */}
            <div className="hidden lg:flex items-center justify-center relative">
              <div className="relative w-full max-w-md">
                {/* Central pipeline */}
                <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-secondary/50 -translate-x-1/2 rounded-full" style={{opacity: 0.3}} />

                {/* Step nodes */}
                <div className="space-y-12">
                  {/* Step 1 */}
                  <div className="flex items-center gap-6">
                    <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/40 to-primary/20 border-2 border-primary/40 flex items-center justify-center text-center group hover:scale-110 transition-transform duration-300 hover:shadow-lg">
                      <div>
                        <p className="text-2xl font-bold text-primary">01</p>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground">Discovery</h3>
                      <p className="text-sm text-muted-foreground">Deep dive into your business</p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center">
                    <div className="text-3xl text-primary/50 animate-bounce">↓</div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-center gap-6">
                    <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-accent/40 to-accent/20 border-2 border-accent/40 flex items-center justify-center text-center group hover:scale-110 transition-transform duration-300 hover:shadow-lg">
                      <div>
                        <p className="text-2xl font-bold text-accent">02</p>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground">Planning</h3>
                      <p className="text-sm text-muted-foreground">Strategic roadmap creation</p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center">
                    <div className="text-3xl text-accent/50 animate-bounce" style={{animationDelay: "0.2s"}}>↓</div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-center gap-6">
                    <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-secondary to-secondary/50 border-2 border-secondary/50 flex items-center justify-center text-center group hover:scale-110 transition-transform duration-300 hover:shadow-lg">
                      <div>
                        <p className="text-2xl font-bold text-foreground">03</p>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground">Growth</h3>
                      <p className="text-sm text-muted-foreground">Optimization & scaling</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                  <div className={`aspect-square rounded-3xl bg-gradient-to-br ${step.color} p-8 relative overflow-hidden group shadow-xl`}>
                    <img 
                      src="/images/process-pipeline.jpg"
                      alt="Process pipeline"
                      className="absolute inset-0 w-full h-full object-cover opacity-15"
                    />
                    <div className="absolute inset-8 bg-card rounded-2xl shadow-xl border border-border/60 flex items-center justify-center group-hover:shadow-2xl transition-all duration-300 backdrop-blur-sm">
                      <div className="text-center">
                        <step.icon className="w-20 h-20 text-primary/40 mx-auto mb-4" />
                        <p className="text-4xl font-bold text-foreground">
                          Step {step.number}
                        </p>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 w-20 h-20 bg-accent/30 rounded-full blur-xl opacity-50" />
                    <div className="absolute bottom-4 left-4 w-28 h-28 bg-primary/30 rounded-full blur-xl opacity-50" />
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
