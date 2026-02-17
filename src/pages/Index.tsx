import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { CountUp } from "@/components/motion/CountUp";
import { 
  Shield, 
  Rocket, 
  ArrowRight, 
  CheckCircle2,
  Server,
  Lock,
  Heart,
  Scale,
  Building,
  Globe,
  Cpu,
  Wifi,
  ShieldCheck,
  Cloud,
  Headphones,
  Quote,
  Star,
  ChevronDown
} from "lucide-react";
import inc5000Badge from "@/assets/inc-5000-badge.png";
import soc2Badge from "@/assets/soc2-badge.webp";
import hipaaBadge from "@/assets/hipaa-badge.png";

export default function Index() {
  const scrollToProtectPropel = () => {
    const element = document.getElementById('protect-propel');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-background text-center">
        {/* Simple background pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
          <div className="absolute top-0 left-0 right-0 h-[50vh] bg-gradient-to-b from-primary/5 to-transparent" />
        </div>

        <div className="container relative z-10 px-4 md:px-8 pt-20 pb-12 md:pt-32 md:pb-24 max-w-5xl mx-auto">
          <div className="space-y-8 flex flex-col items-center">
            <AnimatedSection delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 border border-primary/20">
                <span className="relative flex h-2 w-2">
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Trusted by regulated organizations
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] text-foreground mb-6">
                Technology should{' '}
                <span className="text-primary">
                  protect
                </span>
                {' '}your organization and{' '}
                <span className="text-accent">
                  propel
                </span>
                {' '}it into the future.
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                We help regulated organizations stay secure, audit-ready, and fully operational - then safely modernize with AI to move faster and scale with confidence.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
                <Button 
                  size="lg" 
                  className="h-14 px-8 text-lg rounded-full bg-primary hover:bg-primary/90 shadow-md transition-all"
                  onClick={scrollToProtectPropel}
                >
                  See How It Works
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Link to="/security-check">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="h-14 px-8 text-lg rounded-full border-2 hover:bg-accent/5 hover:text-accent hover:border-accent transition-all"
                  >
                    Run a Security & AI Readiness Check
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer animate-bounce" onClick={scrollToProtectPropel}>
           <ChevronDown className="h-10 w-10 text-muted-foreground/50 hover:text-primary transition-colors" />
        </div>
      </section>

      {/* MARQUEE - PARTNER LOGOS */}
      <section className="py-8 border-y border-border/50 bg-muted/20 overflow-hidden">
        <div className="marquee-container">
          <div className="marquee-content" style={{ animation: "marquee 40s linear infinite" }}>
            {[...Array(2)].map((_, i) => (
              <span key={i} className="inline-flex items-center gap-12 md:gap-16 px-6 md:px-8">
                <img src={inc5000Badge} alt="Inc 5000" className="h-9 md:h-10 object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
                <img src={soc2Badge} alt="SOC 2" className="h-9 md:h-10 object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
                <img src={hipaaBadge} alt="HIPAA" className="h-9 md:h-10 object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
                <span className="text-lg md:text-xl font-bold text-foreground/40 whitespace-nowrap tracking-widest">MICROSOFT</span>
                <span className="text-lg md:text-xl font-bold text-foreground/40 whitespace-nowrap tracking-widest">CROWDSTRIKE</span>
                <span className="text-lg md:text-xl font-bold text-foreground/40 whitespace-nowrap tracking-widest">SENTINELONE</span>
                <span className="text-lg md:text-xl font-bold text-foreground/40 whitespace-nowrap tracking-widest">PALO ALTO</span>
                <span className="text-lg md:text-xl font-bold text-foreground/40 whitespace-nowrap tracking-widest">DELL</span>
                <span className="text-lg md:text-xl font-bold text-foreground/40 whitespace-nowrap tracking-widest">DATTO</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* MANIFESTO SECTION */}
      <section className="py-20 md:py-28 bg-foreground text-background relative overflow-hidden">
        <div className="container px-4 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <AnimatedSection>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight">
                Most regulated organizations are being pulled in <span className="text-destructive">two directions</span>.
              </h2>
            </AnimatedSection>
            <AnimatedSection>
              <p className="text-xl md:text-2xl font-light text-gray-400 leading-relaxed">
                Cyber risk is rising. Compliance expectations are tightening. And AI is transforming the world faster than most teams can safely adapt. <br className="hidden md:block"/>
                Yet many IT strategies are still reactive: fragmented vendors, constant firefighting, and no clear path forward.
              </p>
            </AnimatedSection>
            
            {/* Dynamic counter stats */}
            <AnimatedSection>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 py-8">
                {[
                  { value: 500, suffix: "+", label: "Endpoints Managed" },
                  { value: 99.9, suffix: "%", label: "Uptime SLA", decimals: 1 },
                  { value: 24, suffix: "/7", label: "Threat Monitoring" },
                  { value: 15, suffix: "+", label: "Years Experience" },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-primary">
                      <CountUp end={stat.value} duration={2} decimals={stat.decimals || 0} />{stat.suffix}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <div className="h-1 w-32 bg-primary mx-auto rounded-full" />
            <AnimatedSection>
              <p className="text-2xl md:text-4xl font-medium text-white">
                We believe organizations entrusted with sensitive data deserve technology that creates <span className="text-primary">stability, confidence, and a future-ready advantage</span>, without adding chaos or complexity.
              </p>
            </AnimatedSection>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/grid.svg')] invert" />
      </section>

      {/* PROTECT & PROPEL */}
      <section id="protect-propel" className="py-20 md:py-28 bg-background relative">
        <div className="container px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our Approach</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              A safer path for regulated organizations: <span className="text-primary">Protect</span> → <span className="text-accent">Propel™</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              A two-part system that keeps you secure and audit-ready today, then helps you modernize with safe, practical AI.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* PROTECT CARD */}
            <AnimatedSection className="h-full">
              <div className="group relative overflow-hidden rounded-[2.5rem] bg-card border border-border/50 p-8 md:p-12 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-xl h-full">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                  <Shield className="w-64 h-64" />
                </div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Shield className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                  </div>
                  
                  <h3 className="text-4xl font-bold mb-4 group-hover:text-primary transition-colors">PROTECT</h3>
                  <p className="text-xl text-muted-foreground mb-8">
                    Your foundation. Security, compliance, and uptime you can count on.
                  </p>
                  
                  <ul className="space-y-4">
                    {[
                      "Protected from ransomware and breaches",
                      "Audit-ready year-round (HIPAA / CMMC / GLBA)",
                      "Operational uptime you can count on",
                      "24/7 monitoring and response"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-lg font-medium">
                        <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-2 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            </AnimatedSection>

            {/* PROPEL CARD */}
            <AnimatedSection className="h-full" delay={0.2}>
              <div className="group relative overflow-hidden rounded-[2.5rem] bg-card border border-border/50 p-8 md:p-12 hover:border-accent/50 transition-all duration-300 shadow-lg hover:shadow-xl h-full">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                  <Rocket className="w-64 h-64" />
                </div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    <Rocket className="w-8 h-8 text-accent group-hover:text-white transition-colors" />
                  </div>
                  
                  <h3 className="text-4xl font-bold mb-4 group-hover:text-accent transition-colors">PROPEL</h3>
                  <p className="text-xl text-muted-foreground mb-8">
                    Your advantage. Safe AI adoption, automation, and modern growth.
                  </p>
                  
                  <ul className="space-y-4">
                    {[
                      "Secure, compliant AI adoption",
                      "Automation that frees up staff time",
                      "Faster workflows and documentation",
                      "Scale without adding headcount"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-lg font-medium">
                        <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-2 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* BENTO GRID - WHO WE SERVE */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Built for organizations that can't afford <span className="text-primary">mistakes</span>.</h2>
            <p className="text-lg text-muted-foreground mb-2">
              If security, compliance, and operational confidence matter to your organization, you're in the right place.
            </p>
            <p className="text-base text-muted-foreground/80">
              Where audits, downtime, and sensitive data exposure carry real consequences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
            {/* Large Card 1 - Healthcare */}
            <div className="md:col-span-2 row-span-1 group relative overflow-hidden rounded-3xl bg-white dark:bg-card border border-border/50 p-8 transition-all duration-300 hover:shadow-lg hover:border-primary/30">
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Healthcare Organizations</h3>
                  <p className="text-muted-foreground max-w-md">HIPAA-secure systems that protect patient care and reduce audit stress.</p>
                </div>
                <Link to="/compliance" className="inline-flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
                  Explore Healthcare IT <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
              <Shield className="absolute -bottom-8 -right-8 w-48 h-48 text-primary/5 group-hover:scale-105 transition-transform duration-500" />
            </div>

            {/* Card 2 - DoD */}
            <div className="group relative overflow-hidden rounded-3xl bg-white dark:bg-card border border-border/50 p-8 transition-all duration-300 hover:shadow-lg hover:border-secondary/30">
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors duration-300">
                    <Shield className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">DoD Contractors (CMMC)</h3>
                  <p className="text-muted-foreground text-sm">CMMC-ready cybersecurity that keeps contracts compliant and assessments smooth.</p>
                </div>
                <Link to="/services" className="inline-flex items-center text-secondary font-semibold group-hover:translate-x-2 transition-transform">
                  View CMMC Solutions <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Card 3 - Legal & Finance */}
            <div className="group relative overflow-hidden rounded-3xl bg-white dark:bg-card border border-border/50 p-8 transition-all duration-300 hover:shadow-lg hover:border-accent/30">
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                    <Scale className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Law Firms & Financial Institutions</h3>
                  <p className="text-muted-foreground text-sm">Technology that protects client confidentiality and billable momentum. Audit-ready security that reduces risk and strengthens client trust.</p>
                </div>
                <Link to="/services" className="inline-flex items-center text-accent font-semibold group-hover:translate-x-2 transition-transform">
                  See Professional Services <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Large Card 4 - Enterprise */}
            <div className="md:col-span-2 row-span-1 group relative overflow-hidden rounded-3xl bg-foreground text-background p-8 transition-all duration-300 hover:shadow-lg">
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300">
                      <Building className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-white">Enterprise & Regulated Organizations</h3>
                    <p className="text-gray-400 max-w-md">Comprehensive security and compliance for complex, high-stakes environments.</p>
                  </div>
                  <Globe className="w-24 h-24 text-white/5" />
                </div>
                <Link to="/services" className="inline-flex items-center text-white font-semibold group-hover:translate-x-2 transition-transform">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES - EXPANDED GRID */}
      <section className="py-20 md:py-28 bg-background overflow-hidden">
        <div className="container px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">How we help, built for regulated confidence.</h2>
              <p className="text-xl text-muted-foreground">
                Everything you need to stay secure, audit-ready, and prepared for safe AI modernization, under one trusted partner.
              </p>
            </div>
            <Link to="/services">
              <Button variant="outline" className="rounded-full px-6">View All Services</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Server, title: "Managed IT & Operations", desc: "Always-on systems that reduce downtime and keep your organization running smoothly." },
              { icon: Lock, title: "Cybersecurity & Compliance", desc: "24/7 security and compliance-ready controls that keep audits stress-free." },
              { icon: Cloud, title: "Cloud Infrastructure", desc: "Azure and AWS migration, optimization, and management." },
              { icon: Cpu, title: "AI Modernization", desc: "Automation and productivity gains, with the guardrails regulated teams require." },
              { icon: ShieldCheck, title: "EDR / XDR", desc: "Endpoint detection and response across your entire fleet." },
              { icon: Wifi, title: "SASE & Zero Trust", desc: "Secure access service edge for the modern workforce." },
              { icon: Headphones, title: "Co-Managed IT", desc: "Augment your internal team with our engineers on demand." },
              { icon: Globe, title: "Compliance", desc: "HIPAA, SOC 2, CMMC, GLBA: audit-ready, always." },
            ].map((service, i) => (
              <div key={i} className="p-8 rounded-3xl bg-muted/20 border border-border/50 hover:bg-card hover:shadow-lg hover:border-primary/20 transition-all duration-300 group cursor-pointer">
                <service.icon className="w-10 h-10 text-primary mb-6 transition-transform group-hover:scale-105" />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS / SOCIAL PROOF */}
      <section className="py-20 md:py-28 bg-muted/20">
        <div className="container px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Trusted in high-stakes, regulated environments.</h2>
            <p className="text-lg text-muted-foreground">
              Organizations choose NorthStar when cybersecurity, compliance, and uptime can't be left to chance.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Back-to-back Inc. 5000 honoree: #3837 (2024) and #2393 (2025) with 178% three-year growth. Founded in 2000, 25+ years of trusted IT partnership.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote: "NorthStar gave us the confidence that our security and compliance posture could keep pace with our growth. They don't just manage our IT. They genuinely understand the regulatory pressures we face every day.",
                name: "IT Director",
                title: "Healthcare Organization",
                stars: 5,
              },
              {
                quote: "Their team feels like an extension of ours. Response times are incredible, and they actually understand the unique demands of financial services.",
                name: "Michael Torres",
                title: "VP of Operations, Meridian Capital",
                stars: 5,
              },
              {
                quote: "We needed CMMC compliance fast. NorthStar delivered a clear roadmap and executed flawlessly. Our contracts were never at risk.",
                name: "James Wright",
                title: "CEO, Apex Defense Solutions",
                stars: 5,
              },
            ].map((testimonial, i) => (
              <div key={i} className="relative p-8 rounded-3xl bg-card border border-border/50 hover:shadow-lg transition-all duration-300 group">
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                <p className="text-muted-foreground leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.stars }).map((_, si) => (
                    <Star key={si} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-3xl" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-700 to-accent opacity-90" />
        </div>
        
        <div className="container relative z-10 px-4 md:px-8 text-center">
          <h2 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tight">
            Start with clarity, not a sales pitch.
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-8">
            In regulated environments, you don't need more noise. You need to know where you stand. We'll help you understand your security, compliance, and AI readiness, clearly and calmly.
          </p>
          
          {/* Trust badges */}
          <div className="flex items-center justify-center gap-6 md:gap-10 mb-12">
            <img src={inc5000Badge} alt="Inc 5000" className="h-10 md:h-14 object-contain brightness-0 invert opacity-60" />
            <img src={soc2Badge} alt="SOC 2" className="h-10 md:h-14 object-contain brightness-0 invert opacity-60" />
            <img src={hipaaBadge} alt="HIPAA" className="h-10 md:h-14 object-contain brightness-0 invert opacity-60" />
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/security-check">
              <Button size="lg" className="h-20 px-12 text-xl rounded-full bg-white text-primary hover:bg-gray-100 shadow-xl hover:scale-105 transition-all font-bold">
                Run a Security & AI Readiness Check
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="h-20 px-12 text-xl rounded-full border-2 border-white/30 text-white hover:bg-white/10 hover:text-white hover:border-white transition-all">
                Assess Your Readiness
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
