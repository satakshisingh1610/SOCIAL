"use client";

import React from "react"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin, Send, CheckCircle } from "lucide-react";

const services = [
  "Brand Identity & Design",
  "Social Media Management",
  "Influencer Marketing",
  "Website Development",
  "Digital Marketing & Growth",
  "Content Production",
  "Other",
];

const contactInfo = [
  {
    icon: MapPin,
    title: "Office Address",
    content: "123 Digital Avenue, Tech Park\nBangalore, India 560001",
  },
  {
    icon: Phone,
    title: "Phone Number",
    content: "+91 98765 43210",
  },
  {
    icon: Mail,
    title: "Email Address",
    content: "hello@socialnexus.com",
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Monday - Friday: 9AM - 6PM IST",
  },
];

const socials = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center py-20 lg:py-32 bg-gradient-to-br from-background via-secondary/25 to-primary/15 overflow-hidden">
        {/* Warm Gradient Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: "0.8s"}} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-secondary/15 rounded-full blur-3xl opacity-50" style={{animation: "float 14s ease-in-out infinite"}} />
          
          {/* Soft glow elements */}
          <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl opacity-40" style={{animation: "float 10s ease-in-out infinite", animationDelay: "1s"}} />
        </div>

        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-30px); }
          }
        `}</style>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text */}
            <div className="text-center lg:text-left space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/15 border border-primary/30 rounded-full hover:bg-primary/20 transition-colors">
                <span className="inline-block w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-sm font-medium text-foreground">Connection & Action</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance">
                Let&apos;s
                <br />
                Start a
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Conversation
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Have a project in mind? We&apos;d love to hear from you. Reach out and let&apos;s discuss how we can help your brand grow and thrive.
              </p>

              {/* Quick Contact Options */}
              <div className="space-y-3 pt-4">
                <a href="tel:+919876543210" className="flex items-center gap-3 px-6 py-3 bg-primary/10 border border-primary/20 rounded-full hover:bg-primary/15 hover:scale-105 transition-all duration-300 group cursor-pointer w-fit">
                  <span className="text-lg">📞</span>
                  <span className="text-sm font-medium text-foreground">+91 98765 43210</span>
                  <span className="text-primary group-hover:translate-x-1 transition-transform text-xs">→</span>
                </a>
                <a href="mailto:hello@socialnexus.com" className="flex items-center gap-3 px-6 py-3 bg-accent/10 border border-accent/20 rounded-full hover:bg-accent/15 hover:scale-105 transition-all duration-300 group cursor-pointer w-fit">
                  <span className="text-lg">✉️</span>
                  <span className="text-sm font-medium text-foreground">hello@socialnexus.com</span>
                  <span className="text-accent group-hover:translate-x-1 transition-transform text-xs">→</span>
                </a>
              </div>

              {/* Response Time Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs text-foreground">We typically respond within 24 hours</span>
              </div>
            </div>

            {/* Right - Visual Element */}
            <div className="hidden lg:flex items-center justify-center relative">
              <div className="relative w-full max-w-md">
                {/* Central circle glow */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-52 h-52 bg-gradient-to-br from-primary/30 to-accent/20 rounded-full blur-3xl" />
                </div>

                {/* Main contact illustration area */}
                <div className="relative space-y-6">
                  {/* Message bubble 1 */}
                  <div className="ml-auto w-32 p-4 bg-gradient-to-br from-primary/25 to-primary/10 rounded-3xl rounded-tr-none shadow-lg hover:scale-105 transition-transform duration-300 border border-primary/20" style={{animation: "slideIn 0.6s ease-out"}}>
                    <div className="text-center">
                      <p className="text-2xl mb-1">🎯</p>
                      <p className="text-xs font-semibold text-foreground">Your Vision</p>
                    </div>
                  </div>

                  {/* Message bubble 2 */}
                  <div className="w-32 p-4 bg-gradient-to-br from-accent/25 to-accent/10 rounded-3xl rounded-tl-none shadow-lg hover:scale-105 transition-transform duration-300 border border-accent/20" style={{animation: "slideIn 0.8s ease-out"}}>
                    <div className="text-center">
                      <p className="text-2xl mb-1">💡</p>
                      <p className="text-xs font-semibold text-foreground">Our Ideas</p>
                    </div>
                  </div>

                  {/* Message bubble 3 */}
                  <div className="ml-auto w-32 p-4 bg-gradient-to-br from-secondary to-secondary/50 rounded-3xl rounded-tr-none shadow-lg hover:scale-105 transition-transform duration-300 border border-secondary/30" style={{animation: "slideIn 1s ease-out"}}>
                    <div className="text-center">
                      <p className="text-2xl mb-1">🚀</p>
                      <p className="text-xs font-semibold text-foreground">Success</p>
                    </div>
                  </div>

                  {/* CTA Button with pulse animation */}
                  <div className="pt-4 flex justify-center">
                    <button className="px-8 py-3 bg-gradient-to-r from-primary to-accent rounded-full text-primary-foreground font-semibold shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group" style={{animation: "pulse 2s ease-in-out infinite"}}>
                      <span className="flex items-center gap-2">
                        Send Message
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
                Send Us a Message
              </h2>

              {isSubmitted ? (
                <div className="bg-card rounded-3xl border border-border p-8 md:p-12 text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Thank You!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Your message has been sent successfully. We&apos;ll get back to you within 24-48 hours.
                  </p>
                  <Button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        company: "",
                        service: "",
                        message: "",
                      });
                    }}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full hover:scale-105 transition-transform duration-300"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="rounded-xl h-12 focus:ring-2 focus:ring-accent transition-all hover:scale-105"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="rounded-xl h-12 focus:ring-2 focus:ring-accent transition-all hover:scale-105"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="rounded-xl h-12 focus:ring-2 focus:ring-accent transition-all hover:scale-105"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                        Company Name
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        className="rounded-xl h-12 focus:ring-2 focus:ring-accent transition-all hover:scale-105"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                      Service Required *
                    </label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) => setFormData({ ...formData, service: value })}
                      required
                    >
                      <SelectTrigger className="rounded-xl h-12 focus:ring-2 focus:ring-accent">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Your Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      rows={6}
                      className="rounded-xl resize-none focus:ring-2 focus:ring-accent transition-all hover:scale-105"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full h-14 hover:scale-105 transition-transform duration-300"
                  >
                    <Send className="mr-2 w-5 h-5" />
                    Send Message
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
                Get in Touch
              </h2>

              <div className="space-y-6 mb-12">
                {contactInfo.map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-4 p-4 bg-card rounded-2xl border border-border hover:shadow-md hover:border-primary/50 transition-all hover:scale-105"
                  >
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center shrink-0 hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm whitespace-pre-line">
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-semibold text-foreground mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 hover:scale-120"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-12">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl border border-border flex items-center justify-center relative overflow-hidden group hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-0 opacity-10 border border-primary rounded-2xl" />
                  <div className="text-center relative z-10">
                    <MapPin className="w-12 h-12 text-primary/50 mx-auto mb-2" />
                    <p className="text-muted-foreground text-sm">
                      Map location would go here
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
              FAQ
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "What is your typical project timeline?",
                a: "Project timelines vary based on scope and complexity. A typical branding project takes 4-6 weeks, while website development can take 6-12 weeks. We'll provide a detailed timeline during our initial consultation.",
              },
              {
                q: "Do you work with startups or only established businesses?",
                a: "We work with businesses of all sizes, from early-stage startups to established enterprises. We tailor our approach and packages to fit different budgets and needs.",
              },
              {
                q: "What is your pricing structure?",
                a: "Our pricing is project-based and depends on scope, deliverables, and timeline. We offer custom quotes after understanding your specific requirements during our discovery call.",
              },
              {
                q: "Do you offer ongoing support after project completion?",
                a: "Yes! We offer ongoing support and maintenance packages to ensure your digital assets continue to perform optimally. We also offer retainer agreements for continuous marketing support.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-background rounded-2xl border border-border p-6 hover:shadow-md hover:border-primary/50 transition-all hover:scale-105"
              >
                <h3 className="font-semibold text-foreground mb-2">
                  {faq.q}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
