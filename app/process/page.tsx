"use client";

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
import { motion } from "framer-motion";
import { FadeInUp } from "@/components/animations/fade-in-up";
import { StaggerContainer } from "@/components/animations/stagger-container";

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
            <FadeInUp>
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
                How We Work
              </p>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Our Proven Process
              </h1>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                A systematic approach that ensures every project delivers exceptional results. From discovery to growth, we guide you through every step.
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Process Steps - Horizontal Timeline for Desktop */}
      <section className="py-16 bg-card overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Horizontal step indicators */}
          <div className="hidden lg:flex items-center justify-between relative mb-16">
            {/* Connecting line */}
            <motion.div 
              className="absolute top-6 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              viewport={{ once: true }}
              style={{ originX: 0 }}
            />
            
            {steps.map((step, index) => (
              <motion.div 
                key={step.number} 
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative z-10 flex flex-col items-center"
              >
                <motion.div 
                  whileHover={{ scale: 1.2 }}
                  className={`w-12 h-12 rounded-full ${step.iconColor} flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300`}
                >
                  <step.icon className="w-6 h-6" />
                </motion.div>
                <p className="mt-3 text-sm font-semibold text-foreground">{step.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <FadeInUp delay={index * 0.1}>
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-4 mb-6">
                      <motion.span 
                        className="text-6xl font-bold text-primary/20"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {step.number}
                      </motion.span>
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        className={`w-14 h-14 ${step.iconColor} rounded-2xl flex items-center justify-center transition-all duration-300`}
                      >
                        <step.icon className="w-7 h-7" />
                      </motion.div>
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
                    <motion.div 
                      whileHover={{ y: -4 }}
                      className="bg-card rounded-2xl border border-border p-6 hover:shadow-lg hover:border-primary/50 transition-all duration-300"
                    >
                      <h4 className="font-semibold text-foreground mb-4">
                        Key Activities:
                      </h4>
                      <ul className="space-y-3">
                        {step.activities.map((activity, aIndex) => (
                          <motion.li 
                            key={activity} 
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: (index * 0.1) + (aIndex * 0.05) }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3"
                          >
                            <div className="w-2 h-2 rounded-full bg-accent" />
                            <span className="text-sm text-muted-foreground">
                              {activity}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </FadeInUp>

                {/* Visual */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className={index % 2 === 1 ? "lg:order-1" : ""}
                >
                  <div className={`aspect-square rounded-3xl bg-gradient-to-br ${step.color} p-8 relative overflow-hidden group`}>
                    <div className="absolute inset-8 bg-card rounded-2xl shadow-xl border border-border flex items-center justify-center group-hover:shadow-2xl transition-all duration-300">
                      <div className="text-center">
                        <motion.div
                          animate={{ y: [0, -10, 0] }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          <step.icon className="w-20 h-20 text-primary/30 mx-auto mb-4" />
                        </motion.div>
                        <p className="text-4xl font-bold text-foreground">
                          Step {step.number}
                        </p>
                      </div>
                    </div>
                    {/* Animated Decorative elements */}
                    <motion.div 
                      animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="absolute top-4 right-4 w-20 h-20 bg-accent/30 rounded-full blur-xl" 
                    />
                    <motion.div 
                      animate={{ x: [0, -10, 0], y: [0, 10, 0] }}
                      transition={{ duration: 5, repeat: Infinity }}
                      className="absolute bottom-4 left-4 w-28 h-28 bg-primary/30 rounded-full blur-xl" 
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-primary to-primary/80 relative overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-primary-foreground/20 rounded-full opacity-10"
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeInUp>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Start Your Journey?
            </h2>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Let&apos;s begin with discovery. Schedule a free consultation to discuss your project and see how our process can work for you.
            </p>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
            </motion.div>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
}
