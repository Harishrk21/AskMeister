import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { MessageCircle, Users, Zap, BarChart3, CheckCircle, ArrowRight, Play, Shield, Clock, Bot, Globe, Award, Megaphone, Calendar, ShoppingBag, GraduationCap, Stethoscope, ShoppingCart, Home as HomeIcon, Plane, Landmark } from 'lucide-react';
import Button from '../components/ui/Button';
import SectionHeader from '../components/ui/SectionHeader';
import EDU1 from '../assets/EDU1.jpg';
import auto from '../assets/auto.png';
import chatbot from '../assets/chatbot.png';
import analytics from '../assets/analytics.png';
import security from '../assets/security.webp';
import home from '../assets/home.png';
import uploadingcontacts from '../assets/uploadingcontacts.gif';

const Home = () => {
  const features = [
    {
      icon: MessageCircle,
      title: 'Bulk WhatsApp Broadcasting',
      description: 'Send personalized messages to large opted-in lists using broadcast flows aligned with WhatsApp policies.',
      image: 'https://www.wati.io/wp-content/uploads/2024/11/Broadcast-new1.webp'
    },
    {
      icon: Bot,
      title: 'Customized Chatbots',
      description: 'Automate customer conversations with intelligent chatbots that understand and respond naturally.',
      image: chatbot
    },
    {
      icon: Zap,
      title: 'Marketing Automation',
      description: 'Set up automated sequences, drip campaigns, and smart triggers to nurture leads 24/7.',
      image: auto
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Track delivery rates, open rates, and engagement metrics with detailed reporting dashboard.',
      image: analytics
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Manage multiple team members, assign conversations, and collaborate efficiently.',
      image: 'https://www.wati.io/wp-content/uploads/2024/05/chhnl.webp'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance with global data protection laws.',
      image: security
    }
  ];

  const howItWorks = [
    {
      step: '1',
      title: 'Connect Your WhatsApp',
      description: 'Link your WhatsApp Business account with our secure API integration in just 2 minutes.',
      icon: MessageCircle
    },
    {
      step: '2',
      title: 'Import Your Contacts',
      description: 'Upload your contact lists from CSV, Excel, or sync directly from your CRM platform.',
      icon: Users
    },
    {
      step: '3',
      title: 'Create Smart Campaigns',
      description: 'Design personalized message templates and set up intelligent automation workflows.',
      icon: Zap
    },
    {
      step: '4',
      title: 'Launch & Optimize',
      description: 'Send your campaigns and monitor performance with real-time analytics and AI insights.',
      icon: BarChart3
    }
  ];

  const useCaseHighlights = [
    {
      title: 'Support & sales teams',
      text: 'Route WhatsApp conversations to the right person, use approved templates, and keep a clear history of customer context—without promising specific revenue outcomes.'
    },
    {
      title: 'Campaigns & reminders',
      text: 'Send utility and marketing messages where your audience has opted in. Volume and deliverability depend on Meta policies, list quality, and template approval—not shortcuts.'
    },
    {
      title: 'Automation & chatbots',
      text: 'Build flows for FAQs, lead capture, and hand-off to humans when needed. Automation should complement your team, not replace compliance.'
    }
  ];

 const stats = [
  { number: '100%', label: 'Official WhatsApp API', icon: Shield },
  { number: '24/7', label: 'Message Scheduling Support', icon: Clock },
  { number: 'No Code', label: 'Easy Dashboard Setup', icon: Zap },
  { number: 'Secure', label: 'Meta Verified Tech Provider', icon: Globe }
];

  const useCases = [
  {
    title: 'Auto-response for Website Inquiries',
    icon: MessageCircle,
    industry: 'Real Estate',
    description: 'Convert web visitors into leads using instant WhatsApp replies.'
  },
  {
    title: 'Bulk Promotions to Donors',
    icon: Megaphone,
    industry: 'NGOs',
    description: 'Engage past donors with timely updates and appeals automatically.'
  },
  {
    title: 'Appointment Reminders',
    icon: Calendar,
    industry: 'Clinics & Hospitals',
    description: 'Reduce no-shows by automating appointment reminders via WhatsApp.'
  },
  {
    title: 'WhatsApp Shopping Assistant',
    icon: ShoppingBag,
    industry: 'Retail',
    description: 'Guide customers from inquiry to checkout with automated flows.'
  }
];

  const industries = [
    {
      title: 'Education',
      description: 'Streamline admissions, student communication, and parent engagement',
      link: '/whatsapp-software-for-universities',
      icon: GraduationCap,
      benefits: ['Quick admission forms', 'Parent notifications', 'Student support']
    },
    {
      title: 'Healthcare',
      description: 'Automate appointments, patient care, and medical communications',
      link: '/whatsapp-automation-for-healthcare',
      icon: Stethoscope,
      benefits: ['Appointment booking', 'Patient reminders', 'Department coordination']
    },
    {
      title: 'E-commerce',
      description: 'Boost sales with order updates, cart recovery, and customer support',
      link: '/whatsapp-automation-for-ecommerce',
      icon: ShoppingCart,
      benefits: ['Order tracking', 'Cart recovery', 'Product recommendations']
    },
   {
  title: 'Real Estate',
  description: 'Promote properties, engage leads, and automate client interactions',
  link: '/whatsapp-automation-for-real-estate',
  icon: HomeIcon,
  benefits: ['Property listings', 'Lead engagement', 'Automated follow-ups']
},
{
  title: 'Travel & Tourism',
  description: 'Share tour packages, send booking alerts, and assist travelers instantly',
  link: '/whatsapp-automation-for-travel-and-tourism',
  icon: Plane,
  benefits: ['Tour packages', 'Booking alerts', 'Travel assistance']
}
,
    {
      title: 'Financial Services',
      description: 'Secure banking, transaction alerts, and customer support',
      link: '/whatsapp-banking-automation',
      icon: Landmark,
      benefits: ['Transaction alerts', 'Account updates', 'Secure banking']
    }
  ];

  // Quick navigation links for better internal linking
  const quickLinks = [
    { title: 'WhatsApp API Integration', link: '/whatsapp-api' },
    { title: 'Contact Sales', link: '/contact' },
    { title: 'Marketing Tools', link: '/tools' },
    { title: 'WhatsApp Chatbots', link: '/chatbots' },
    { title: 'WhatsApp business analytics', link: '/whatsapp-business-analytics' },
    { title: 'WhatsApp bulk messaging', link: '/whatsapp-bulk-messaging' },
    { title: 'WhatsApp message templates', link: '/whatsapp-message-templates' },
    { title: 'WhatsApp live chat', link: '/whatsapp-live-chat' },
    { title: 'Chennai marketing', link: '/whatsapp-marketing-chennai' },
    { title: 'Case studies', link: '/case-studies' },
    { title: 'Hospital WhatsApp', link: '/hospital-whatsapp' },
    { title: 'WhatsApp for colleges', link: '/whatsapp-software-for-colleges' },
    { title: 'Banking automation', link: '/whatsapp-banking-automation' },
  ];

  return (
    <>
    <Helmet>
        <title>WhatsApp Marketing Platform in Chennai | Ask Meister</title>
        <meta name="description" content="Ask Meister helps Tamil Nadu businesses use WhatsApp for bulk messaging, Business API campaigns, chatbots & automation. Chennai HQ. Contact us for a demo." />
        <meta name="keywords" content="whatsapp marketing platform, whatsapp business api provider, bulk whatsapp messaging software, whatsapp chatbot builder, whatsapp marketing automation, whatsapp business analytics, whatsapp crm tool, whatsapp lead generation, whatsapp notification system, whatsapp engagement platform, whatsapp marketing software india, whatsapp sales automation, ecommerce whatsapp automation, ask meister" />
        <link rel="canonical" href="https://askmeister.com/" />
        <meta property="og:title" content="WhatsApp Marketing Platform in Chennai | Ask Meister" />
        <meta property="og:description" content="Ask Meister helps Tamil Nadu businesses use WhatsApp for bulk messaging, Business API campaigns, chatbots & automation. Demo by request." />
        <meta property="og:url" content="https://askmeister.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="WhatsApp Marketing Platform in Chennai | Ask Meister" />
        <meta name="twitter:description" content="WhatsApp Business Platform support for Tamil Nadu: bulk messaging, API onboarding, chatbots & automation." />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What is WhatsApp marketing?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'WhatsApp marketing uses the WhatsApp Business Platform for template messaging, opted-in campaigns, and automation. Meta’s policies and template approval apply.'
              }
            },
            {
              '@type': 'Question',
              name: 'Does Ask Meister serve Tamil Nadu and Chennai?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Ask Meister supports businesses across Tamil Nadu, with operations anchored in Chennai.'
              }
            },
            {
              '@type': 'Question',
              name: 'Do you guarantee message delivery or sales results?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'No. Outcomes depend on list quality, compliance, offers, and operations. Ask Meister provides software and guidance—not guaranteed placement or revenue.'
              }
            }
          ]
        })}</script>
      </Helmet>
      
    <div className="page-wrap">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-mesh-hero" />
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="absolute top-20 right-[10%] w-72 h-72 bg-brand/15 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-[5%] w-96 h-96 bg-brand-dark/10 rounded-full blur-3xl animate-float-delay" />

        <div className="container-wide relative py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8 opacity-0 animate-fade-up">
              <span className="section-eyebrow">
                <Award className="w-4 h-4" />
                WhatsApp Business Platform · Tamil Nadu
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                WhatsApp marketing platform for{' '}
                <span className="gradient-text">Tamil Nadu businesses</span>
              </h1>
              <p className="text-lg md:text-xl text-ink-muted leading-relaxed max-w-xl">
                Ask Meister helps you run compliant WhatsApp campaigns: broadcasts with approved templates, chatbots and automation, and analytics—without shortcuts that risk account quality.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button to="/contact" size="lg" icon>Request a demo</Button>
                <button
                  onClick={() => document.getElementById('demo-video')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-secondary px-8 py-4 text-lg inline-flex items-center justify-center gap-2"
                >
                  <Play className="w-5 h-5" />
                  Watch Demo
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-card">
                    <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center mx-auto mb-2">
                      <stat.icon className="w-5 h-5 text-brand" />
                    </div>
                    <div className="text-xl font-bold gradient-text">{stat.number}</div>
                    <div className="text-xs text-ink-muted mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative opacity-0 animate-fade-up-delay">
              <div className="hero-glow-ring" />
              <img
                src={home}
                alt="WhatsApp Marketing Dashboard - Bulk Messaging and Chatbot Platform"
                className="relative w-full h-auto rounded-3xl shadow-card border border-white/60"
              />
              <div className="floating-badge -top-4 -right-2 lg:-right-6 animate-float">
                <div className="w-8 h-8 rounded-lg bg-gradient-brand flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                AI Chatbots
              </div>
              <div className="floating-badge -bottom-4 -left-2 lg:-left-6 animate-float-delay">
                <div className="w-8 h-8 rounded-lg bg-gradient-brand flex items-center justify-center">
                  <BarChart3 className="w-4 h-4 text-white" />
                </div>
                Live Analytics
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-5 glass border-y border-brand/10">
        <div className="container-wide flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-ink-muted text-sm md:text-base">
            Based in Chennai — WhatsApp marketing for Tamil Nadu:{' '}
            <span className="text-brand-dark font-semibold">Chennai</span>,{' '}
            <span className="text-brand-dark font-semibold">Coimbatore</span>,{' '}
            <span className="text-brand-dark font-semibold">Madurai</span>, and statewide.
          </p>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link to="/whatsapp-marketing-chennai" className="text-sm font-semibold text-brand hover:text-brand-dark transition-colors inline-flex items-center gap-1">
              Chennai page <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/whatsapp-marketing-tamil-nadu" className="text-sm font-semibold text-brand hover:text-brand-dark transition-colors inline-flex items-center gap-1">
              Tamil Nadu page <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Navigation Links for SEO */}
      <section className="section-padding bg-surface">
        <div className="container-wide">
          <SectionHeader
            eyebrow="Explore"
            title="WhatsApp Marketing Solutions"
            description="Quick access to our key features and services"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                to={link.link}
                className="glass-card p-4 text-center group hover:border-brand/30"
              >
                <span className="text-sm font-medium text-ink-muted group-hover:text-brand transition-colors">
                  {link.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section id="demo-video" className="section-padding bg-surface-muted relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container-wide relative">
          <SectionHeader
            eyebrow="Product tour"
            title="See Our WhatsApp Marketing Dashboard in Action"
            description="Watch how easy it is to manage campaigns, build chatbots, and send bulk messages with our intuitive dashboard."
          />

          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-6 md:p-8">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-soft ring-1 ring-brand/10">
                <img
                  src={uploadingcontacts}
                  alt="WhatsApp Marketing Dashboard Demo - Contact Upload and Bulk Messaging"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-xl font-semibold text-white mb-2">
                  One-Step Drag & Drop Contact Upload for Bulk WhatsApp Marketing
                </h3>
                <p className="text-ink-muted">
                  See how easy it is to import contacts and send bulk WhatsApp messages instantly with our marketing automation platform
                </p>
                <div className="mt-4">
                  <Link to="/whatsapp-bulk-messaging" className="text-brand font-semibold hover:text-brand-dark inline-flex items-center gap-1 transition-colors">
                    Learn more about bulk messaging <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeader
            eyebrow="Industries"
            title="WhatsApp Marketing Solutions for Every Industry"
            description="Tailored WhatsApp business solutions with industry-specific chatbot templates, automation workflows, and marketing strategies"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <Link key={index} to={industry.link} className="industry-card group">
                <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <industry.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-brand-light transition-colors">
                  WhatsApp Marketing for {industry.title}
                </h3>
                <p className="text-ink-muted mb-4 text-sm leading-relaxed">{industry.description}</p>
                <ul className="space-y-2 mb-4">
                  {industry.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-brand mr-2 shrink-0" />
                      <span className="text-ink-muted">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center text-brand font-semibold text-sm group-hover:gap-2 transition-all">
                  Explore {industry.title} Solutions
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button to="/contact" size="lg" icon>Get Custom Industry Solution</Button>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="section-padding bg-surface-muted relative">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container-wide relative">
          <SectionHeader
            eyebrow="Use cases"
            title="Real-World WhatsApp Marketing Use Cases"
            description="See how businesses across different industries leverage Ask Meister's WhatsApp marketing platform for growth"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="feature-card text-center">
                <div className="w-14 h-14 rounded-2xl bg-gradient-brand flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-ink mb-2">{useCase.title}</h4>
                <div className="text-xs font-semibold uppercase tracking-wider text-brand mb-3">{useCase.industry}</div>
                <p className="text-ink-muted text-sm leading-relaxed">{useCase.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/tools" className="text-brand font-semibold hover:text-brand-dark inline-flex items-center gap-1 transition-colors">
              Explore more use cases <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeader
            eyebrow="How it works"
            title="How Our WhatsApp Marketing Platform Works"
            description="Get started with WhatsApp marketing automation in just 4 simple steps. No technical knowledge required for our chatbot builder and bulk messaging tools!"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step, index) => (
              <div key={index} className="relative">
                <div className="feature-card text-center">
                  <div className="w-16 h-16 rounded-2xl bg-brand/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-brand/20 transition-colors">
                    <step.icon className="w-8 h-8 text-brand" />
                  </div>
                  <div className="w-8 h-8 bg-gradient-brand text-white rounded-full flex items-center justify-center text-sm font-bold absolute top-4 right-4 shadow-glow-sm">
                    {step.step}
                  </div>
                  <h4 className="text-lg font-semibold text-ink mb-2">{step.title}</h4>
                  <p className="text-ink-muted text-sm">{step.description}</p>
                </div>
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-5 h-5 text-brand/50" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/whatsapp-api" className="text-brand font-semibold hover:text-brand-dark inline-flex items-center gap-1 transition-colors">
              Learn more about WhatsApp API integration <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-surface-muted relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container-wide relative">
          <SectionHeader
            eyebrow="Features"
            title="Powerful WhatsApp Marketing Features"
            description="Everything you need to create, manage, and optimize your WhatsApp marketing campaigns with our comprehensive business automation platform."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="feature-card group">
                <div className="aspect-video mb-5 rounded-xl overflow-hidden ring-1 ring-brand/10">
                  <img
                    src={feature.image}
                    alt={`${feature.title} - WhatsApp Marketing Feature`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="w-11 h-11 rounded-xl bg-brand/10 flex items-center justify-center mb-3 group-hover:bg-brand/20 transition-colors">
                  <feature.icon className="w-5 h-5 text-brand" />
                </div>
                <h4 className="text-lg font-semibold text-ink mb-2">{feature.title}</h4>
                <p className="text-ink-muted text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button to="/whatsapp-api" size="lg" icon>Explore All Features</Button>
          </div>
        </div>
      </section>

      {/* Honest use-case framing */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeader
            eyebrow="Teams"
            title="How teams use WhatsApp with Ask Meister"
            description="The examples below describe typical patterns—not guaranteed results. Every business must follow WhatsApp and Meta policies, obtain opt-in where required, and get templates approved."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {useCaseHighlights.map((item, index) => (
              <div key={index} className="feature-card">
                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-brand" />
                </div>
                <h3 className="text-lg font-semibold text-ink mb-3">{item.title}</h3>
                <p className="text-ink-muted text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/case-studies" className="text-brand font-semibold hover:text-brand-dark inline-flex items-center gap-1 transition-colors">
              Case studies & stories <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface border-y border-brand/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-ink-muted space-y-4 leading-relaxed">
          <h2 className="text-2xl font-bold text-white mb-4">WhatsApp marketing in Tamil Nadu &amp; Chennai</h2>
          <p>
            Customers in Chennai, Coimbatore, Madurai, and smaller towns already rely on WhatsApp for daily communication. For businesses, that means support, reminders, and marketing must respect user
            expectations: clear opt-in, transparent frequency, and messages that match approved WhatsApp categories (utility, authentication, marketing where allowed).
          </p>
          <p>
            Ask Meister focuses on the WhatsApp Business Platform—template workflows, team inbox behavior, automation that hands off to humans when needed, and reporting you can act on. We do not promise
            search rankings, viral reach, or specific revenue; those outcomes depend on your offer, operations, and compliance.
          </p>
          <p>
            If you serve retail, education, clinics, real estate, or services, start from our{' '}
            <Link to="/whatsapp-api" className="text-brand hover:text-brand-dark font-medium transition-colors">
              WhatsApp API overview
            </Link>
            ,{' '}
            <Link to="/whatsapp-bulk-messaging" className="text-brand hover:text-brand-dark font-medium transition-colors">
              bulk messaging
            </Link>
            , and{' '}
            <Link to="/contact" className="text-brand hover:text-brand-dark font-medium transition-colors">
              contact
            </Link>{' '}
            team for onboarding questions.
          </p>
        </div>
      </section>

      {/* Internal Links Section for SEO */}
      <section className="section-padding bg-surface-muted relative">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container-wide relative">
          <SectionHeader title="Explore More WhatsApp Marketing Resources" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Platform Features', links: [
                { label: 'Marketing Automation', to: '/whatsapp-marketing-automation' },
                { label: 'Analytics Dashboard', to: '/whatsapp-business-analytics' },
                { label: 'Live Chat Support', to: '/whatsapp-live-chat' },
                { label: 'Message Templates', to: '/whatsapp-message-templates' },
                { label: 'Bulk Messaging', to: '/whatsapp-bulk-messaging' },
              ]},
              { title: 'Chatbot Solutions', links: [
                { label: 'AI Chatbot Builder', to: '/chatbots' },
                { label: 'Education Chatbots', to: '/whatsapp-software-for-universities' },
                { label: 'Healthcare Bots', to: '/whatsapp-automation-for-healthcare' },
                { label: 'E-commerce Bots', to: '/whatsapp-automation-for-ecommerce' },
                { label: 'Real Estate Bots', to: '/whatsapp-automation-for-real-estate' },
              ]},
              { title: 'Business Resources', links: [
                { label: 'Contact Sales', to: '/contact' },
                { label: 'WhatsApp API', to: '/whatsapp-api' },
                { label: 'Chennai marketing', to: '/whatsapp-marketing-chennai' },
                { label: 'Tamil Nadu marketing', to: '/whatsapp-marketing-tamil-nadu' },
                { label: 'Marketing Tools', to: '/tools' },
                { label: 'Marketing Blog', to: '/blog' },
                { label: 'Help Center', to: '/help' },
              ]},
              { title: 'Company Info', links: [
                { label: 'About Ask Meister', to: '/about' },
                { label: 'Contact Sales', to: '/contact' },
                { label: 'Case studies', to: '/case-studies' },
                { label: 'Get started', to: '/free-trial' },
                { label: 'Careers', to: '/careers' },
                { label: 'Partner Program', to: '/affiliate' },
                { label: 'Privacy Policy', to: '/privacy' },
              ]},
            ].map((col) => (
              <div key={col.title} className="glass-card p-6">
                <h4 className="font-semibold text-ink mb-4">{col.title}</h4>
                <ul className="space-y-2.5 text-sm">
                  {col.links.map((link) => (
                    <li key={link.to}>
                      <Link to={link.to} className="text-ink-muted hover:text-brand-light transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-brand" />
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-black/10 rounded-full blur-3xl" />

        <div className="container-wide relative max-w-4xl text-center">
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Ready to Transform Your Business with WhatsApp Marketing?
          </h3>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Talk to us about WhatsApp broadcasts, chatbots, and analytics for your team—anchored in Chennai, serving businesses across Tamil Nadu and India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-brand-dark px-8 py-4 rounded-xl text-lg font-semibold hover:bg-brand-muted hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center justify-center shadow-card">
              Contact for demo
            </Link>
            <Link to="/free-trial" className="btn-outline px-8 py-4 text-lg inline-flex items-center justify-center">
              How trial &amp; onboarding work
            </Link>
          </div>
          <p className="mt-6 text-sm text-white/70 max-w-xl mx-auto">
            Demo and onboarding terms are confirmed when you speak with our team—nothing on this page is a binding commercial offer.
          </p>
        </div>
      </section>
    </div>
    </>
  );
};

export default Home;