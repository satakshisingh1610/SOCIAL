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
import { motion } from "framer-motion";
import { FadeInUp } from "@/components/animations/fade-in-up";
import { StaggerContainer } from "@/components/animations/stagger-container";

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
    // Simulate form submission
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-secondary/30 to-primary/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-10 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInUp>
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
                Contact Us
              </p>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Let&apos;s Start a Conversation
              </h1>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Have a project in mind? We&apos;d love to hear from you. Reach out and let&apos;s discuss how we can help your brand grow.
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <FadeInUp>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
                  Send Us a Message
                </h2>

                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-card rounded-3xl border border-border p-8 md:p-12 text-center"
                  >
                    <motion.div 
                      className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                      animate={{ scale: [0, 1.1, 1] }}
                      transition={{ duration: 0.6 }}
                    >
                      <CheckCircle className="w-10 h-10 text-green-500" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Thank You!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Your message has been sent successfully. We&apos;ll get back to you within 24-48 hours.
                    </p>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
                        className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
                      >
                        Send Another Message
                      </Button>
                    </motion.div>
                  </motion.div>
                ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <motion.div whileFocus={{ scale: 1.02 }}>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="rounded-xl h-12 focus:ring-2 focus:ring-accent transition-all"
                        />
                      </motion.div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <motion.div whileFocus={{ scale: 1.02 }}>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          className="rounded-xl h-12 focus:ring-2 focus:ring-accent transition-all"
                        />
                      </motion.div>
                    </motion.div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
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
                        className="rounded-xl h-12 focus:ring-2 focus:ring-accent transition-all"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
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
                        className="rounded-xl h-12 focus:ring-2 focus:ring-accent transition-all"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
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
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
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
                      className="rounded-xl resize-none focus:ring-2 focus:ring-accent transition-all"
                    />
                  </motion.div>

                  <motion.div 
                    whileHover={{ scale: 1.02 }} 
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full h-14"
                    >
                      <Send className="mr-2 w-5 h-5" />
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              )}
            </div>
            </FadeInUp>

            {/* Contact Info */}
            <FadeInUp delay={0.2}>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
                  Get in Touch
                </h2>

                <StaggerContainer staggerDelay={0.1} delayChildren={0.1}>
                  <div className="space-y-6 mb-12">
                    {contactInfo.map((item, index) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -2 }}
                        className="flex gap-4 p-4 bg-card rounded-2xl border border-border hover:shadow-md hover:border-primary/50 transition-all"
                      >
                        <motion.div 
                          className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center shrink-0"
                          whileHover={{ scale: 1.1 }}
                        >
                          <item.icon className="w-6 h-6 text-primary" />
                        </motion.div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground text-sm whitespace-pre-line">
                            {item.content}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </StaggerContainer>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-semibold text-foreground mb-4">
                    Follow Us
                  </h3>
                  <div className="flex gap-3">
                    {socials.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
                        aria-label={social.label}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.2, rotate: 10 }}
                      >
                        <social.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>

                {/* Map Placeholder */}
                <motion.div 
                  className="mt-12"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl border border-border flex items-center justify-center relative overflow-hidden group">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 opacity-10 border border-primary rounded-2xl"
                    />
                    <div className="text-center relative z-10">
                      <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <MapPin className="w-12 h-12 text-primary/50 mx-auto mb-2" />
                      </motion.div>
                      <p className="text-muted-foreground text-sm">
                        Map location would go here
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeInUp>
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                FAQ
              </p>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Frequently Asked Questions
              </h2>
            </FadeInUp>
          </div>

          <StaggerContainer staggerDelay={0.1} delayChildren={0.1}>
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
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -2 }}
                  className="bg-background rounded-2xl border border-border p-6 hover:shadow-md hover:border-primary/50 transition-all"
                >
                  <h3 className="font-semibold text-foreground mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {faq.a}
                  </p>
                </motion.div>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
