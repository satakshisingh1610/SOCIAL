import { Metadata } from "next";
import Link from "next/link";
import { Target, Eye, Users, Award, Lightbulb, Heart, ArrowRight } from "lucide-react";

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
      <section className="relative min-h-[80vh] flex items-center py-20 lg:py-32 bg-gradient-to-br from-background via-secondary/25 to-primary/15 overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary/25 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: "1s"}} />
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-secondary/20 rounded-full blur-3xl opacity-50" style={{animation: "float 8s ease-in-out infinite"}} />
          
          {/* Geometric accents */}
          <div className="absolute top-1/4 right-1/3 w-40 h-40 border border-primary/20 rounded-3xl opacity-30" style={{animation: "rotate 20s linear infinite"}} />
          <div className="absolute bottom-1/4 left-1/3 w-32 h-32 border border-accent/20 rounded-full opacity-30" style={{animation: "rotate 30s linear infinite reverse"}} />
        </div>

        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-30px); }
          }
          @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="text-center lg:text-left space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/15 border border-primary/30 rounded-full hover:bg-primary/20 transition-colors">
                <span className="inline-block w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-sm font-medium text-foreground">Our Story</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance">
                We Are
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Social Nexus
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                A creative digital agency passionate about building memorable brands and driving digital growth. We combine strategy, creativity, and technology to deliver exceptional results.
              </p>

              <p className="text-sm md:text-base text-muted-foreground italic">
                Built for brands that want to lead digitally
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/services" className="inline-flex items-center gap-2 px-6 py-3 bg-primary/15 border border-primary/30 rounded-full hover:bg-primary/25 hover:scale-105 transition-all duration-300 font-medium group">
                  Explore Our Services
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right: Visual Element */}
            <div className="hidden lg:flex items-center justify-center relative">
              <div className="relative w-full max-w-md aspect-square">
                {/* Floating cards representing team/collaboration */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Central circle */}
                  <div className="absolute w-48 h-48 bg-gradient-to-br from-primary/20 to-accent/10 rounded-full blur-2xl" />
                  
                  {/* Card 1 - Top */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-40 bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl shadow-lg border border-primary/20 hover:scale-110 transition-transform duration-300 hover:shadow-xl p-4 flex flex-col items-center justify-center gap-3" style={{animation: "float 4s ease-in-out infinite"}}>
                    <div className="w-10 h-10 bg-primary/40 rounded-lg" />
                    <span className="text-xs font-semibold text-foreground text-center">Strategy</span>
                  </div>

                  {/* Card 2 - Left */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-32 h-40 bg-gradient-to-br from-accent/30 to-accent/10 rounded-2xl shadow-lg border border-accent/20 hover:scale-110 transition-transform duration-300 hover:shadow-xl p-4 flex flex-col items-center justify-center gap-3" style={{animation: "float 5s ease-in-out infinite", animationDelay: "0.5s"}}>
                    <div className="w-10 h-10 bg-accent/40 rounded-lg" />
                    <span className="text-xs font-semibold text-foreground text-center">Creativity</span>
                  </div>

                  {/* Card 3 - Right */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-40 bg-gradient-to-br from-secondary to-secondary/50 rounded-2xl shadow-lg border border-secondary/20 hover:scale-110 transition-transform duration-300 hover:shadow-xl p-4 flex flex-col items-center justify-center gap-3" style={{animation: "float 6s ease-in-out infinite", animationDelay: "1s"}}>
                    <div className="w-10 h-10 bg-secondary/40 rounded-lg" />
                    <span className="text-xs font-semibold text-foreground text-center">Technology</span>
                  </div>

                  {/* Card 4 - Bottom */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-40 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl shadow-lg border border-primary/20 hover:scale-110 transition-transform duration-300 hover:shadow-xl p-4 flex flex-col items-center justify-center gap-3" style={{animation: "float 7s ease-in-out infinite", animationDelay: "1.5s"}}>
                    <div className="w-10 h-10 bg-primary/30 rounded-lg" />
                    <span className="text-xs font-semibold text-foreground text-center">Growth</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
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
            <div className="relative">
              <img 
                src="/images/agency-strategy.jpg" 
                alt="Agency strategy and collaboration"
                className="absolute inset-0 w-full h-full object-cover rounded-3xl opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl blur-2xl" />
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl overflow-hidden relative z-10 shadow-2xl">
                <div className="absolute inset-8 bg-card rounded-2xl shadow-xl border border-border/60 flex items-center justify-center backdrop-blur-sm">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Users className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-4xl font-bold text-foreground mb-2">50+</h3>
                    <p className="text-muted-foreground font-medium">Team Members</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div 
              className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl p-8 md:p-12 border border-primary/20 hover:shadow-lg hover:border-primary/40 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary/30 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted digital partner for brands worldwide, pioneering innovative solutions that shape the future of digital marketing and brand communication.
              </p>
            </div>
            <div 
              className="bg-gradient-to-br from-accent/20 to-accent/5 rounded-3xl p-8 md:p-12 border border-accent/20 hover:shadow-lg hover:border-accent/40 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-accent/30 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses with creative digital solutions that drive growth, build meaningful connections, and create lasting impact in the digital world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
              Our Values
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              What Drives Us
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
              Our Journey
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Milestones
            </h2>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div 
              className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/0 via-primary to-primary/0 -translate-x-1/2"
            />
            
            <div className="space-y-12">
              {timeline.map((item) => (
                <div
                  key={item.year}
                  className="relative flex items-center"
                >
                  {/* Dot */}
                  <div 
                    className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 z-10 shadow-lg shadow-primary/50" 
                  />
                  
                  {/* Content */}
                  <div className="ml-12 md:ml-0 md:w-1/2 md:pr-12">
                    <div 
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
                    </div>
                  </div>
                </div>
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
