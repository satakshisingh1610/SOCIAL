"use client";

import { Metadata } from "next";
import { Target, Eye, Users, Award, Lightbulb, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { FadeInUp } from "@/components/animations/fade-in-up";
import { ScaleOnScroll } from "@/components/animations/scale-on-scroll";

export const metadata: Metadata = {
  title: "About Us | Social Nexus",
  description: "Learn about Social Nexus - a creative digital agency building brands for the digital world. Powered by SGCA Technologies Private Limited.",
};

const timeline = [
  {
    year: "2019",
    title: "Founded",
    description: "Social Nexus was born with a vision to transform digital branding.",
  },
  {
    year: "2020",
    title: "First 20 Clients",
    description: "Reached our first milestone of 20 happy clients across industries.",
  },
  {
    year: "2021",
    title: "Team Expansion",
    description: "Grew to a team of 25+ creative professionals.",
  },
  {
    year: "2022",
    title: "100 Projects",
    description: "Celebrated 100 successful project deliveries.",
  },
  {
    year: "2023",
    title: "Industry Recognition",
    description: "Won multiple awards for creative excellence.",
  },
  {
    year: "2024",
    title: "Global Reach",
    description: "Expanded services to clients across 10+ countries.",
  },
];

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We push boundaries and embrace new ideas to deliver cutting-edge solutions.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "We love what we do, and it shows in every project we deliver.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with our clients as partners, not just service providers.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We hold ourselves to the highest standards in everything we create.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-secondary/30 to-primary/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInUp>
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
                About Us
              </p>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                We Are Social Nexus
              </h1>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                A creative digital agency passionate about building memorable brands and driving digital growth. We combine strategy, creativity, and technology to deliver exceptional results.
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeInUp>
              <div>
                <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                  Our Story
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  Who We Are
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Social Nexus is a full-service digital media and branding agency dedicated to helping businesses thrive in the digital landscape. We believe that every brand has a unique story to tell, and our mission is to help you tell it in the most compelling way possible.
                  </p>
                  <p>
                    Founded by a team of passionate creatives and strategists, we&apos;ve grown from a small startup to a leading agency serving clients across multiple industries. Our diverse team brings together expertise in design, marketing, technology, and content creation.
                  </p>
                  <p>
                    What sets us apart is our holistic approach. We don&apos;t just create beautiful designs or run campaigns—we build comprehensive digital ecosystems that work together to achieve your business goals.
                  </p>
                </div>
              </div>
            </FadeInUp>
            <ScaleOnScroll>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl blur-2xl" />
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl overflow-hidden relative z-10">
                  <div className="absolute inset-8 bg-card rounded-2xl shadow-xl border border-border flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <Users className="w-10 h-10 text-primary" />
                      </div>
                      <h3 className="text-4xl font-bold text-foreground mb-2">50+</h3>
                      <p className="text-muted-foreground">Team Members</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScaleOnScroll>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <FadeInUp>
              <motion.div 
                whileHover={{ y: -8 }}
                className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl p-8 md:p-12 border border-primary/20 hover:shadow-lg hover:border-primary/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary/30 rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted digital partner for brands worldwide, pioneering innovative solutions that shape the future of digital marketing and brand communication.
                </p>
              </motion.div>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <motion.div 
                whileHover={{ y: -8 }}
                className="bg-gradient-to-br from-accent/20 to-accent/5 rounded-3xl p-8 md:p-12 border border-accent/20 hover:shadow-lg hover:border-accent/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-accent/30 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower businesses with creative digital solutions that drive growth, build meaningful connections, and create lasting impact in the digital world.
                </p>
              </motion.div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeInUp>
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                Our Values
              </p>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                What Drives Us
              </h2>
            </FadeInUp>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background rounded-2xl p-6 border border-border hover:shadow-lg hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeInUp>
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                Our Journey
              </p>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Milestones
              </h2>
            </FadeInUp>
          </div>
          <div className="relative">
            {/* Animated Timeline line */}
            <motion.div 
              className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/0 via-primary to-primary/0 -translate-x-1/2"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              viewport={{ once: true }}
              style={{ originY: 0 }}
            />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <motion.div 
                    whileInView={{ scale: [0, 1.2, 1] }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 z-10 shadow-lg shadow-primary/50" 
                  />
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                    <motion.div 
                      whileHover={{ y: -4 }}
                      className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300"
                    >
                      <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-3">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Powered By */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary-foreground/80 text-sm uppercase tracking-wider mb-2">
            Powered By
          </p>
          <h3 className="text-2xl sm:text-3xl font-bold text-primary-foreground">
            SGCA Technologies Private Limited
          </h3>
          <p className="text-primary-foreground/70 mt-4 max-w-2xl mx-auto">
            Social Nexus is a product of SGCA Technologies, a leading technology company committed to innovation and digital excellence.
          </p>
        </div>
      </section>
    </div>
  );
}
