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
      <section className="relative min-h-[85vh] flex items-center py-20 lg:py-32 bg-gradient-to-br from-background via-secondary/25 to-primary/15 overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-32 right-10 w-80 h-80 bg-primary/25 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-10 w-96 h-96 bg-accent/25 rounded-full blur-3xl animate-pulse" style={{animationDelay: "0.5s"}} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl opacity-40" style={{animation: "float 10s ease-in-out infinite"}} />
          
          {/* Service icons scattered in background */}
          <div className="absolute top-1/4 left-1/4 w-24 h-24 border-2 border-primary/20 rounded-lg opacity-20" style={{animation: "rotate 15s linear infinite"}} />
          <div className="absolute bottom-1/3 right-1/4 w-32 h-32 border-2 border-accent/20 rounded-full opacity-20" style={{animation: "rotate 20s linear infinite reverse"}} />
          <div className="absolute top-1/3 right-1/3 w-20 h-20 border-2 border-secondary/20 rounded-full opacity-20" style={{animation: "rotate 25s linear infinite"}} />
        </div>

        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-40px); }
          }
          @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text */}
            <div className="text-center lg:text-left space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/15 border border-primary/30 rounded-full hover:bg-primary/20 transition-colors">
                <span className="inline-block w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-sm font-medium text-foreground">Capabilities & Power</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
                  Build
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/60">
                  Scale
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
                  Dominate
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                From brand strategy to execution, we offer end-to-end digital services designed to help your business grow exponentially in the digital landscape.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 hover:bg-primary/15 hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="text-2xl font-bold text-primary mb-1">6</div>
                  <p className="text-xs text-muted-foreground">Services</p>
                </div>
                <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 hover:bg-accent/15 hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="text-2xl font-bold text-accent mb-1">100%</div>
                  <p className="text-xs text-muted-foreground">Custom</p>
                </div>
                <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-4 hover:bg-secondary/15 hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="text-2xl font-bold text-foreground mb-1">24/7</div>
                  <p className="text-xs text-muted-foreground">Support</p>
                </div>
              </div>
            </div>

            {/* Right Side - Floating Service Cards */}
            <div className="hidden lg:flex items-center justify-center relative">
              <div className="relative w-full max-w-md aspect-square">
                {/* Central glow */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary/30 to-accent/20 rounded-full blur-3xl" />
                </div>

                {/* Service Cards in circular arrangement */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-28 bg-gradient-to-br from-primary/40 to-primary/20 rounded-2xl shadow-lg border border-primary/30 flex items-center justify-center hover:scale-110 hover:shadow-xl transition-all duration-300" style={{animation: "float 3s ease-in-out infinite"}}>
                  <div className="text-center">
                    <div className="text-2xl mb-1">🎨</div>
                    <p className="text-xs font-semibold text-foreground">Brand</p>
                  </div>
                </div>

                <div className="absolute left-0 top-1/3 w-28 h-28 bg-gradient-to-br from-accent/40 to-accent/20 rounded-2xl shadow-lg border border-accent/30 flex items-center justify-center hover:scale-110 hover:shadow-xl transition-all duration-300" style={{animation: "float 3.5s ease-in-out infinite", animationDelay: "0.3s"}}>
                  <div className="text-center">
                    <div className="text-2xl mb-1">📱</div>
                    <p className="text-xs font-semibold text-foreground">Social</p>
                  </div>
                </div>

                <div className="absolute right-0 top-1/3 w-28 h-28 bg-gradient-to-br from-secondary to-secondary/50 rounded-2xl shadow-lg border border-secondary/30 flex items-center justify-center hover:scale-110 hover:shadow-xl transition-all duration-300" style={{animation: "float 4s ease-in-out infinite", animationDelay: "0.6s"}}>
                  <div className="text-center">
                    <div className="text-2xl mb-1">🌐</div>
                    <p className="text-xs font-semibold text-foreground">Web</p>
                  </div>
                </div>

                <div className="absolute left-1/4 bottom-0 w-28 h-28 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl shadow-lg border border-primary/30 flex items-center justify-center hover:scale-110 hover:shadow-xl transition-all duration-300" style={{animation: "float 4.5s ease-in-out infinite", animationDelay: "0.9s"}}>
                  <div className="text-center">
                    <div className="text-2xl mb-1">📊</div>
                    <p className="text-xs font-semibold text-foreground">Growth</p>
                  </div>
                </div>

                <div className="absolute right-1/4 bottom-0 w-28 h-28 bg-gradient-to-br from-accent/30 to-primary/30 rounded-2xl shadow-lg border border-accent/30 flex items-center justify-center hover:scale-110 hover:shadow-xl transition-all duration-300" style={{animation: "float 5s ease-in-out infinite", animationDelay: "1.2s"}}>
                  <div className="text-center">
                    <div className="text-2xl mb-1">🎬</div>
                    <p className="text-xs font-semibold text-foreground">Content</p>
                  </div>
                </div>
              </div>
            </div>
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
                  <div
                    className={`w-16 h-16 ${service.iconColor} rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 hover:scale-110`}
                  >
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
                      <li 
                        key={feature} 
                        className="flex items-center gap-3"
                      >
                        <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-accent" />
                        </div>
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="hover:scale-105 transition-transform duration-300 inline-block">
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
                </div>

                {/* Visual */}
                <div
                  className={`transition-all duration-300 hover:scale-105 ${index % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  <div className={`aspect-square rounded-3xl bg-gradient-to-br ${service.color} p-8 relative overflow-hidden group shadow-xl`}>
                    <img 
                      src={index === 0 ? "/images/service-branding.jpg" : index === 1 ? "/images/service-social-media.jpg" : "/images/service-web-dev.jpg"}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-8 bg-card rounded-2xl shadow-xl border border-border/60 flex items-center justify-center group-hover:shadow-2xl transition-all duration-300 backdrop-blur-sm">
                      <service.icon className="w-24 h-24 text-primary/40" />
                    </div>
                    <div className="absolute top-4 right-4 w-16 h-16 bg-accent/30 rounded-full blur-xl opacity-50" />
                    <div className="absolute bottom-4 left-4 w-24 h-24 bg-primary/30 rounded-full blur-xl opacity-50" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-primary to-primary/80 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-primary-foreground/20 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 border border-primary-foreground/20 rounded-full" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our services can help you achieve your business goals. Get in touch for a free consultation.
          </p>
          <div className="hover:scale-105 transition-transform duration-300 inline-block">
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
        </div>
      </section>
    </div>
  );
}
