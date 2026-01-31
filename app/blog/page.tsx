import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, User } from "lucide-react";
import { motion } from "framer-motion";
import { FadeInUp } from "@/components/animations/fade-in-up";
import { StaggerContainer } from "@/components/animations/stagger-container";

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
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-secondary/30 to-primary/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInUp>
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
                Blog & Insights
              </p>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Ideas That Inspire Growth
              </h1>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Insights, strategies, and stories from our team of digital experts to help you stay ahead in the ever-evolving digital landscape.
              </p>
            </FadeInUp>
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
          <FadeInUp>
            <Link
              href={`/blog/${featuredPost.id}`}
              className="group block relative overflow-hidden rounded-3xl bg-gradient-to-br border border-border hover:shadow-2xl transition-all duration-500"
            >
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${featuredPost.color} opacity-50 group-hover:opacity-70 transition-opacity duration-500`}
                whileHover={{ scale: 1.05 }}
              />
              <motion.div 
                className="relative p-8 md:p-12 lg:p-16 min-h-[400px] flex flex-col justify-end"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <motion.span 
                  className="inline-block px-4 py-1.5 bg-background/80 backdrop-blur-sm rounded-full text-sm font-medium text-foreground w-fit mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  {featuredPost.category}
                </motion.span>
                <motion.h2 
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 max-w-3xl group-hover:translate-x-2 transition-transform duration-300"
                  whileHover={{ x: 4 }}
                >
                  {featuredPost.title}
                </motion.h2>
                <p className="text-muted-foreground text-lg mb-6 max-w-2xl">
                  {featuredPost.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <motion.div 
                    className="flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <User className="w-4 h-4" />
                    <span>{featuredPost.author}</span>
                  </motion.div>
                  <span>•</span>
                  <span>{featuredPost.date}</span>
                  <span>•</span>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <motion.div 
                  className="absolute top-8 right-8 w-14 h-14 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                  whileHover={{ scale: 1.15, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <ArrowRight className="w-6 h-6 text-foreground" />
                </motion.div>
              </motion.div>
            </Link>
          </FadeInUp>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer staggerDelay={0.1} delayChildren={0.1}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Link
                    href={`/blog/${post.id}`}
                    className="group bg-background rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                  >
                    <motion.div 
                      className={`h-48 bg-gradient-to-br ${post.color}`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      style={{ originY: 0 }}
                    />
                    <div className="p-6 flex-1 flex flex-col">
                      <motion.span 
                        className="inline-block px-3 py-1 bg-secondary rounded-full text-xs font-medium text-foreground mb-3 w-fit"
                        whileHover={{ scale: 1.05 }}
                      >
                        {post.category}
                      </motion.span>
                      <motion.h3 
                        className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2"
                        whileHover={{ x: 4 }}
                      >
                        {post.title}
                      </motion.h3>
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
                </motion.div>
              ))}
            </div>
          </StaggerContainer>

          {/* Load More */}
          <div className="text-center mt-12">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full transition-colors duration-300"
            >
              Load More Articles
            </motion.button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-primary to-primary/80 relative overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-primary-foreground/20 rounded-full opacity-10"
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeInUp>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
              Stay Updated with Our Newsletter
            </h2>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Get the latest insights, tips, and trends delivered straight to your inbox. Join 5,000+ marketing professionals.
            </p>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
              <motion.input
                whileFocus={{ scale: 1.05 }}
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-background/20 border border-primary-foreground/30 rounded-full text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-8 py-3 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full transition-colors duration-300"
              >
                Subscribe
              </motion.button>
            </form>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
}
