import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Palette,
  Share2,
  Users,
  Globe,
  TrendingUp,
  Video,
  ArrowRight,
  Check,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services | Social Nexus",
  description: "Explore our comprehensive digital services including brand identity, social media management, influencer marketing, website development, and more.",
};

const services = [
  {
    id: "brand-identity",
    icon: Palette,
    title: "Brand Identity & Design",
    subtitle: "Create a Memorable Visual Identity",
    description: "Your brand is more than just a logo—it's the complete experience people have with your business. We create cohesive brand identities that resonate with your target audience and set you apart from the competition.",
    features: [
      "Logo Design & Brand Mark Creation",
      "Brand Guidelines & Style Guides",
      "Visual Identity Systems",
      "Packaging Design",
      "Brand Strategy & Positioning",
      "Brand Messaging & Voice",
    ],
    color: "from-primary/30 to-primary/10",
    iconColor: "bg-primary/20 text-primary",
  },
  {
    id: "social-media",
    icon: Share2,
    title: "Social Media Management",
    subtitle: "Build & Engage Your Community",
    description: "Social media is where your audience lives. We help you create meaningful connections, grow your following, and turn followers into loyal customers through strategic content and community management.",
    features: [
      "Content Strategy & Calendar Planning",
      "Content Creation & Curation",
      "Community Management",
      "Social Media Advertising",
      "Analytics & Reporting",
      "Platform Optimization",
    ],
    color: "from-accent/30 to-accent/10",
    iconColor: "bg-accent/20 text-accent",
  },
  {
    id: "influencer",
    icon: Users,
    title: "Influencer Marketing",
    subtitle: "Amplify Your Reach Authentically",
    description: "Partner with the right voices to tell your story. We connect you with influencers who align with your brand values and help you create authentic campaigns that drive real results.",
    features: [
      "Influencer Identification & Vetting",
      "Campaign Strategy & Planning",
      "Contract Negotiation & Management",
      "Content Collaboration",
      "Performance Tracking",
      "ROI Measurement & Reporting",
    ],
    color: "from-secondary to-secondary/50",
    iconColor: "bg-secondary text-foreground",
  },
  {
    id: "web-dev",
    icon: Globe,
    title: "Website Design & Development",
    subtitle: "Build Your Digital Home",
    description: "Your website is often the first impression people have of your brand. We design and build stunning, high-performance websites that not only look great but convert visitors into customers.",
    features: [
      "Custom Website Design",
      "Responsive Development",
      "E-commerce Solutions",
      "CMS Implementation",
      "Performance Optimization",
      "Maintenance & Support",
    ],
    color: "from-primary/20 to-accent/20",
    iconColor: "bg-primary/30 text-primary",
  },
  {
    id: "digital-growth",
    icon: TrendingUp,
    title: "Digital Marketing & Growth",
    subtitle: "Drive Measurable Results",
    description: "Data-driven marketing strategies that deliver real business results. From SEO to paid advertising, we help you reach your target audience and maximize your marketing ROI.",
    features: [
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click Advertising (PPC)",
      "Email Marketing Campaigns",
      "Conversion Rate Optimization",
      "Marketing Automation",
      "Analytics & Insights",
    ],
    color: "from-accent/20 to-primary/20",
    iconColor: "bg-accent/30 text-accent",
  },
  {
    id: "content",
    icon: Video,
    title: "Content Creation & Media Production",
    subtitle: "Tell Your Story Visually",
    description: "Compelling content is the fuel that drives digital marketing. We produce high-quality photos, videos, and multimedia content that captures attention and tells your brand story.",
    features: [
      "Professional Photography",
      "Video Production & Editing",
      "Motion Graphics & Animation",
      "Podcast Production",
      "Copywriting & Content Writing",
      "User-Generated Content Strategy",
    ],
    color: "from-secondary/80 to-primary/20",
    iconColor: "bg-secondary text-foreground",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-secondary/30 to-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              Our Services
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Comprehensive Digital Solutions
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              From brand strategy to execution, we offer end-to-end digital services designed to help your business grow and thrive in the digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className={`w-16 h-16 ${service.iconColor} rounded-2xl flex items-center justify-center mb-6`}>
                    <service.icon className="w-8 h-8" />
                  </div>
                  <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                    {service.subtitle}
                  </p>
                  <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-accent" />
                        </div>
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full"
                  >
                    <Link href="/contact">
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>

                {/* Visual */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className={`aspect-square rounded-3xl bg-gradient-to-br ${service.color} p-8 relative overflow-hidden`}>
                    <div className="absolute inset-8 bg-card rounded-2xl shadow-xl border border-border flex items-center justify-center">
                      <service.icon className="w-24 h-24 text-primary/30" />
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-16 h-16 bg-accent/30 rounded-full blur-xl" />
                    <div className="absolute bottom-4 left-4 w-24 h-24 bg-primary/30 rounded-full blur-xl" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-primary to-primary/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our services can help you achieve your business goals. Get in touch for a free consultation.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 rounded-full"
          >
            <Link href="/contact">
              Schedule a Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
