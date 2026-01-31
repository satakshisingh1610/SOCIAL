import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog & Insights | Social Nexus",
  description: "Stay updated with the latest trends in digital marketing, branding, social media, and growth strategies from Social Nexus experts.",
};

const categories = [
  "All",
  "Digital Marketing",
  "Branding",
  "Social Media",
  "Growth Hacks",
  "Industry News",
];

const featuredPost = {
  id: 1,
  title: "The Future of Digital Marketing: 10 Trends to Watch in 2024",
  excerpt: "Discover the emerging trends that will shape digital marketing in 2024 and beyond. From AI-powered personalization to immersive experiences, here's what you need to know.",
  category: "Digital Marketing",
  author: "Sarah Chen",
  date: "Jan 15, 2024",
  readTime: "8 min read",
  color: "from-primary/40 to-accent/30",
};

const posts = [
  {
    id: 2,
    title: "Building a Brand Identity That Resonates",
    excerpt: "Learn the key elements of creating a memorable brand identity that connects with your target audience.",
    category: "Branding",
    author: "Michael Rodriguez",
    date: "Jan 12, 2024",
    readTime: "5 min read",
    color: "from-accent/30 to-primary/20",
  },
  {
    id: 3,
    title: "Instagram Reels vs TikTok: Which Platform is Right for Your Brand?",
    excerpt: "A comprehensive comparison of two leading short-form video platforms and how to choose the best one.",
    category: "Social Media",
    author: "Emily Thompson",
    date: "Jan 10, 2024",
    readTime: "6 min read",
    color: "from-secondary to-primary/30",
  },
  {
    id: 4,
    title: "5 Growth Hacking Strategies That Actually Work",
    excerpt: "Proven strategies to accelerate your business growth without breaking the bank.",
    category: "Growth Hacks",
    author: "David Park",
    date: "Jan 8, 2024",
    readTime: "7 min read",
    color: "from-primary/30 to-secondary",
  },
  {
    id: 5,
    title: "The Art of Storytelling in Digital Content",
    excerpt: "How to craft compelling narratives that engage your audience and drive action.",
    category: "Digital Marketing",
    author: "Lisa Green",
    date: "Jan 5, 2024",
    readTime: "6 min read",
    color: "from-accent/40 to-secondary/50",
  },
  {
    id: 6,
    title: "Influencer Marketing ROI: Measuring What Matters",
    excerpt: "Key metrics and strategies to measure the true impact of your influencer partnerships.",
    category: "Social Media",
    author: "James Wilson",
    date: "Jan 3, 2024",
    readTime: "5 min read",
    color: "from-primary/20 to-accent/40",
  },
  {
    id: 7,
    title: "Web Design Trends That Convert in 2024",
    excerpt: "The latest design trends that not only look great but also drive conversions.",
    category: "Digital Marketing",
    author: "Sarah Chen",
    date: "Dec 28, 2023",
    readTime: "8 min read",
    color: "from-secondary/80 to-accent/30",
  },
  {
    id: 8,
    title: "Building Community: Beyond Followers and Likes",
    excerpt: "Strategies for building genuine community around your brand in the social age.",
    category: "Social Media",
    author: "Michael Rodriguez",
    date: "Dec 25, 2023",
    readTime: "6 min read",
    color: "from-accent/20 to-primary/40",
  },
  {
    id: 9,
    title: "The Psychology of Color in Branding",
    excerpt: "Understanding how color choices impact brand perception and customer behavior.",
    category: "Branding",
    author: "Emily Thompson",
    date: "Dec 22, 2023",
    readTime: "5 min read",
    color: "from-primary/40 to-secondary/50",
  },
];

export default function BlogPage() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center py-20 lg:py-32 bg-gradient-to-br from-background via-secondary/25 to-primary/15 overflow-hidden">
        {/* Editorial Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: "1s"}} />
          
          {/* Floating article cards background */}
          <div className="absolute top-1/3 right-1/4 w-48 h-32 border-2 border-primary/15 rounded-xl opacity-30" style={{animation: "float 6s ease-in-out infinite"}} />
          <div className="absolute bottom-1/3 left-1/4 w-40 h-24 border-2 border-accent/15 rounded-lg opacity-30" style={{animation: "float 7s ease-in-out infinite", animationDelay: "0.5s"}} />
        </div>

        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotateZ(-2deg); }
            50% { transform: translateY(-30px) rotateZ(2deg); }
          }
        `}</style>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text */}
            <div className="text-center lg:text-left space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/15 border border-primary/30 rounded-full hover:bg-primary/20 transition-colors">
                <span className="inline-block w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-sm font-medium text-foreground">Thought Leadership</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Digital Insights
                </span>
                <br />
                & Trends
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Insights that help brands grow smarter. Expert perspectives on digital marketing, branding strategies, social media, and growth hacks.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 border border-primary/20 rounded-full hover:bg-primary/15 hover:scale-105 transition-all duration-300 group cursor-pointer">
                  <span className="text-sm font-medium text-foreground">Latest Articles</span>
                  <span className="text-primary group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>

              {/* Stats */}
              <div className="flex gap-8 pt-6 border-t border-border/50">
                <div className="hover:scale-110 transition-transform duration-300">
                  <p className="text-2xl sm:text-3xl font-bold text-primary">50+</p>
                  <p className="text-xs text-muted-foreground">Articles Published</p>
                </div>
                <div className="hover:scale-110 transition-transform duration-300">
                  <p className="text-2xl sm:text-3xl font-bold text-accent">8</p>
                  <p className="text-xs text-muted-foreground">Expert Authors</p>
                </div>
              </div>
            </div>

            {/* Right - Floating Article Cards */}
            <div className="hidden lg:flex items-center justify-center relative">
              <div className="relative w-full max-w-md aspect-square">
                {/* Central glow */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-40 h-40 bg-gradient-to-br from-primary/25 to-accent/15 rounded-full blur-3xl" />
                </div>

                {/* Floating article cards */}
                {/* Card 1 */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 bg-gradient-to-br from-primary/30 to-primary/15 rounded-2xl shadow-lg border border-primary/30 p-4 hover:scale-110 hover:shadow-xl transition-all duration-300" style={{animation: "float 4s ease-in-out infinite"}}>
                  <div className="w-full h-20 bg-primary/20 rounded-lg mb-3" />
                  <p className="text-xs font-semibold text-foreground mb-1">Digital Marketing</p>
                  <p className="text-xs text-muted-foreground line-clamp-2">Future trends in 2024</p>
                </div>

                {/* Card 2 */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-40 bg-gradient-to-br from-accent/30 to-accent/15 rounded-2xl shadow-lg border border-accent/30 p-4 hover:scale-110 hover:shadow-xl transition-all duration-300" style={{animation: "float 5s ease-in-out infinite", animationDelay: "0.5s"}}>
                  <div className="w-full h-20 bg-accent/20 rounded-lg mb-3" />
                  <p className="text-xs font-semibold text-foreground mb-1">Branding</p>
                  <p className="text-xs text-muted-foreground line-clamp-2">Building identity that resonates</p>
                </div>

                {/* Card 3 */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-40 bg-gradient-to-br from-secondary to-secondary/50 rounded-2xl shadow-lg border border-secondary/30 p-4 hover:scale-110 hover:shadow-xl transition-all duration-300" style={{animation: "float 6s ease-in-out infinite", animationDelay: "1s"}}>
                  <div className="w-full h-20 bg-secondary/30 rounded-lg mb-3" />
                  <p className="text-xs font-semibold text-foreground mb-1">Growth Hacks</p>
                  <p className="text-xs text-muted-foreground line-clamp-2">Strategies that work</p>
                </div>

                {/* Card 4 */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl shadow-lg border border-primary/30 p-4 hover:scale-110 hover:shadow-xl transition-all duration-300" style={{animation: "float 7s ease-in-out infinite", animationDelay: "1.5s"}}>
                  <div className="w-full h-20 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg mb-3" />
                  <p className="text-xs font-semibold text-foreground mb-1">Social Media</p>
                  <p className="text-xs text-muted-foreground line-clamp-2">Community building tips</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-card border-b border-border sticky top-16 md:top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  category === "All"
                    ? "bg-primary text-primary-foreground"
                    : "bg-background border border-border text-foreground hover:bg-secondary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href={`/blog/${featuredPost.id}`}
            className="group block relative overflow-hidden rounded-3xl bg-gradient-to-br border border-border hover:shadow-2xl transition-all duration-500"
          >
            <div 
              className={`absolute inset-0 bg-gradient-to-br ${featuredPost.color} opacity-50 group-hover:opacity-70 transition-opacity duration-500`}
            />
            <div className="relative p-8 md:p-12 lg:p-16 min-h-[400px] flex flex-col justify-end hover:scale-105 transition-transform duration-300" style={{ transformOrigin: 'center' }}>
              <span className="inline-block px-4 py-1.5 bg-background/80 backdrop-blur-sm rounded-full text-sm font-medium text-foreground w-fit mb-4 hover:scale-105 transition-transform duration-300">
                {featuredPost.category}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 max-w-3xl group-hover:translate-x-2 transition-transform duration-300">
                {featuredPost.title}
              </h2>
              <p className="text-muted-foreground text-lg mb-6 max-w-2xl">
                {featuredPost.excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
                  <User className="w-4 h-4" />
                  <span>{featuredPost.author}</span>
                </div>
                <span>•</span>
                <span>{featuredPost.date}</span>
                <span>•</span>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>
              <div className="absolute top-8 right-8 w-14 h-14 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-115">
                <ArrowRight className="w-6 h-6 text-foreground" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <div key={post.id}>
                <Link
                  href={`/blog/${post.id}`}
                  className="group bg-background rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                >
                  <div 
                    className={`h-48 bg-gradient-to-br ${post.color} hover:scale-110 transition-transform duration-300`}
                    style={{ transformOrigin: 'top' }}
                  />
                  <div className="p-6 flex-1 flex flex-col">
                    <span className="inline-block px-3 py-1 bg-secondary rounded-full text-xs font-medium text-foreground mb-3 w-fit hover:scale-105 transition-transform duration-300">
                      {post.category}
                    </span>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2 group-hover:translate-x-1 transition-transform duration-300">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-4">
                      <div className="flex items-center gap-2">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button 
              className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full transition-all duration-300 hover:scale-105"
            >
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-primary to-primary/80 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-primary-foreground/20 rounded-full opacity-10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
            Stay Updated with Our Newsletter
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Get the latest insights, tips, and trends delivered straight to your inbox. Join 5,000+ marketing professionals.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 bg-background/20 border border-primary-foreground/30 rounded-full text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300 hover:scale-105"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full transition-all duration-300 hover:scale-105"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
