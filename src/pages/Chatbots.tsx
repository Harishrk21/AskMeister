import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bot, MessageCircle, Zap, Brain, CheckCircle, Play, ArrowRight, Building, ShoppingCart, GraduationCap, Stethoscope, Hammer, Wheat, Banknote, Truck, Users, Clock, BarChart3, Shield, ChevronRight, ExternalLink,Home,Plane } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import InternalLinksHub from '../components/InternalLinksHub';
import ecomm from '../assets/ecomm.webp';
import hc from '../assets/hc.webp';
import edusample from '../assets/edusample.webp';
import construction from '../assets/construction.webp';
import analytics from '../assets/analytics.png';
import chatbot from '../assets/chatbot.png';
import bulks from '../assets/bulks.webp';
import agri from '../assets/agri.jpeg';
import healthcare1 from '../assets/healthcare1.jpg';
import realestate from '../assets/realestate.webp';
import travel2 from '../assets/travel2.webp';
import bankoverview from '../assets/bankoverview.jpg';

const Chatbots = () => {
  const [selectedBotType, setSelectedBotType] = useState(null);

  const features = [
  {
    icon: MessageCircle,
    title: 'Bulk Message Sending',
    description: 'Send template messages to opted-in customers using WhatsApp-approved templates.'
  },
  {
    icon: Zap,
    title: 'Scheduled Campaigns',
    description: 'Schedule WhatsApp campaigns ahead of time and let the system handle the delivery automatically.'
  },
  {
    icon: Users,
    title: 'Contact Management',
    description: 'Upload, segment, and manage all your customer contacts in one place.'
  },
  {
    icon: BarChart3,
    title: 'Campaign Analytics',
    description: 'Monitor delivery reports, read rates, and responses to optimize your message performance.'
  },
  {
    icon: Shield,
    title: 'Verified Sender Support',
    description: 'Send messages from your official WhatsApp Business account with compliance and trust.'
  },
  {
    icon: Clock,
    title: 'Quick Integration',
    description: 'Get started fast with a plug-and-play dashboard—no technical skills needed.'
  }
];


  const botTypes = [
    {
      id: 'customer-support',
      title: 'Customer Support Bot',
      description: 'Handle common queries, troubleshooting, and ticket creation',
      icon: MessageCircle,
      color: 'bg-green-500',
      features: ['Automated FAQ responses', 'Ticket creation & routing', 'Live agent handoff', 'Sentiment analysis', 'Multi-channel support'],
      setupTime: '5 minutes'
    },
    {
      id: 'sales-assistant',
      title: 'Sales Assistant Bot',
      description: 'Qualify leads, provide product info, and schedule demos',
      icon: Building,
      color: 'bg-green-500',
      features: ['Lead qualification', 'Product recommendations', 'Demo scheduling', 'Quote generation', 'CRM integration'],
      setupTime: '10 minutes'
    },
    {
      id: 'booking-appointment',
      title: 'Booking & Appointment Bot',
      description: 'Schedule appointments, send reminders, and manage calendars',
      icon: Clock,
      color: 'bg-green-500',
      features: ['Real-time scheduling', 'Automated reminders', 'Calendar integration', 'Rescheduling handling', 'No-show management'],
      setupTime: '7 minutes'
    },
    {
      id: 'order-management',
      title: 'Order Management Bot',
      description: 'Process orders, track shipments, and handle returns',
      icon: Truck,
      color: 'bg-green-500',
      features: ['Order processing', 'Shipment tracking', 'Return management', 'Inventory updates', 'Payment processing'],
      setupTime: '12 minutes'
    }
  ];

  const industries = [
    {
      id: 'ecommerce',
      icon: ShoppingCart,
      title: 'E-commerce & Retail',
      description: 'Boost sales with intelligent product recommendations and order management',
      image: ecomm,
      features: ['Product catalog browsing', 'Order tracking & updates', 'Abandoned cart recovery'],
      useCases: ['Cart recovery nudges for opted-in shoppers', 'FAQ automation with agent hand-off', 'Order status self-service'],
      link: '/whatsapp-automation-for-ecommerce'
    },
    {
      id: 'healthcare',
      icon: Stethoscope,
      title: 'Healthcare & Hospitals',
      description: 'Streamline patient care with automated appointment booking and medical assistance',
      image: hc,
      features: ['Multi-department appointment booking', 'Symptom checker & triage', 'Prescription reminders'],
      useCases: ['Appointment reminder templates', 'Routine FAQ routing to departments', 'Staff hand-off for clinical questions'],
      link: '/whatsapp-automation-for-healthcare'
    },
    {
      id: 'education',
      icon: GraduationCap,
      title: 'Education',
      description: 'Enhance learning experience with automated student support and communication',
      image: edusample,
      features: ['Course enrollment assistance', 'Assignment & exam reminders', 'Grade notifications'],
      useCases: ['Admission inquiry capture', 'Administrative FAQ automation', 'Parent update broadcasts'],
      link: '/whatsapp-software-for-universities'
    },
  {
  id: 'real-estate',
  icon: Home, // You can import an appropriate icon like `Home` from Lucide or your icon library
  title: 'Real Estate',
  description: 'Automate property inquiries, site visit scheduling, and lead follow-ups',
  image: realestate,
  features: [
    'Automated property inquiries',
    'Site visit scheduling',
    'Lead nurturing campaigns'
  ],
  useCases: [
    'Property inquiry auto-replies',
    'Site visit scheduling flows',
    'Agent follow-up reminders',
  ],
  link: '/whatsapp-automation-for-real-estate'
},
{
  id: 'travel-tourism',
  icon: Plane, // You can import `Plane` icon or similar from your icon pack
  title: 'Travel & Tourism',
  description: 'Simplify bookings, itinerary updates, and customer engagement via WhatsApp',
  image: travel2,
  features: [
    'Tour inquiry automation',
    'Real-time itinerary updates',
    'WhatsApp booking confirmations'
  ],
  useCases: [
    'Tour package inquiry bots',
    'Itinerary update templates',
    'Booking confirmation messages',
  ],
  link: '/whatsapp-automation-for-travel-and-tourism'
}
,
    {
      id: 'financial',
      icon: Banknote,
      title: 'Financial Services',
      description: 'Provide secure banking assistance and financial guidance to customers',
      image: bankoverview,
      features: ['Account balance inquiries', 'Transaction notifications', 'Loan application assistance'],
      useCases: ['Balance inquiry bots (policy permitting)', 'Transaction alert templates', 'Secure escalation to agents'],
      link: '/whatsapp-banking-automation'
    }
  ];

  const demoImages = [
    {
      title: 'Healthcare Appointment Bot',
      description: 'See how patients book appointments across multiple departments seamlessly',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop'
    },
    {
      title: 'E-commerce Sales Bot',
      description: 'Watch how customers browse products and complete purchases through chat',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop'
    },
    {
      title: 'Customer Support Bot',
      description: 'Experience instant customer service with AI-powered support automation',
      image: 'https://images.unsplash.com/photo-1553775282-20af80779df7?w=400&h=250&fit=crop'
    }
  ];

  const successStories = [
    {
      company: 'Retail support pattern',
      industry: 'E-commerce / retail',
      icon: ShoppingCart,
      color: 'green-500',
      quote:
        'Illustrative: many shops start with FAQs, order status, and hand-off to agents—results depend on catalog complexity and staffing.',
      metric: 'Goal: faster replies',
      timeframe: 'Varies'
    },
    {
      company: 'Clinic coordination pattern',
      industry: 'Healthcare',
      icon: Stethoscope,
      color: 'red-500',
      quote:
        'Illustrative: clinics may automate reminders and intake steps where regulations allow; medical advice still belongs with licensed staff.',
      metric: 'Goal: fewer missed slots',
      timeframe: 'Varies'
    },
    {
      company: 'Education updates pattern',
      industry: 'Schools / coaching',
      icon: GraduationCap,
      color: 'yellow-500',
      quote:
        'Illustrative: institutes use WhatsApp for schedules and announcements to opted-in parents—always alongside official channels you already use.',
      metric: 'Goal: clearer comms',
      timeframe: 'Varies'
    }
  ];

  return (
     <>
      <Helmet>
        <title>WhatsApp Chatbot Builder &amp; Automation | Ask Meister</title>
        <meta name="description" content="WhatsApp chatbot builder for businesses in India: flows, automation, and handoff to humans. No fabricated rankings—see if Ask Meister fits your use case." />
        <meta name="keywords" content="whatsapp chatbot software, ai whatsapp chatbot, automated whatsapp chatbot, best whatsapp chatbot builder, chatbot for whatsapp business, create whatsapp chatbot, chatbot automation whatsapp, no code whatsapp chatbot, whatsapp ai automation, whatsapp chatbot for sales, whatsapp chatbot integration, whatsapp chatbot marketing, whatsapp chatbot platform, whatsapp chatbot service, whatsapp chatbot software india" />
        <link rel="canonical" href="https://askmeister.com/chatbots" />
        <meta property="og:title" content="WhatsApp Chatbot Builder &amp; Automation | Ask Meister" />
        <meta property="og:description" content="Build WhatsApp chatbots and automation with Ask Meister. Results depend on your flows and compliance." />
        <meta property="og:url" content="https://askmeister.com/chatbots" />
      </Helmet>
    <div className="page-wrap">
      {/* Hero Section */}
      <section className="page-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center bg-brand/10 text-brand px-4 py-2 rounded-full text-sm font-medium">
                  <Bot className="w-4 h-4 mr-2" />
                  AI-Powered WhatsApp Chatbots
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                  Intelligent Chatbots for
                  <span className="text-brand block">Every Industry</span>
                </h1>
                <p className="text-lg text-ink-muted leading-relaxed">
                  Transform your customer service with AI-powered WhatsApp chatbots. 
                  Automate conversations, boost engagement, and provide 24/7 support across any industry.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="bg-brand text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-brand-dark transition-colors inline-flex items-center justify-center">
                  Build Your Bot
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link to="/contact" className="border-2 border-brand text-brand px-8 py-4 rounded-lg text-lg font-semibold hover:bg-brand hover:text-white transition-colors inline-flex items-center justify-center">
                  {/* <Play className="w-5 h-5 mr-2" /> */}
                  Contact Sales
                </Link>
              </div>

              <div className="flex flex-wrap gap-8 pt-4">
                {[
                  { value: 'Official API', label: 'Meta Platform' },
                  { value: '24/7', label: 'Bot availability' },
                  { value: 'Human', label: 'Hand-off built in' }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-brand">{stat.value}</div>
                    <div className="text-sm text-ink-muted">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="glass-card p-6 max-w-md mx-auto relative z-10">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-brand rounded-full flex items-center justify-center">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Ask Meister</div>
                    <div className="text-sm text-slate-400">Online • Typing...</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-brand/10 p-3 rounded-lg">
                    <p className="text-sm">👋 Hi! I'm your Chatbot assistant. How can I help you today?</p>
                  </div>
                  <div className="bg-surface-elevated p-3 rounded-lg ml-8">
                    <p className="text-sm">I need help with my order</p>
                  </div>
                  <div className="bg-brand/10 p-3 rounded-lg">
                    <p className="text-sm">I'd be happy to help! Please share your order number and I'll check the status for you 📦</p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="bg-brand text-white px-3 py-1 rounded text-xs">Track Order</button>
                    <button className="bg-surface-elevated text-ink-muted px-3 py-1 rounded text-xs">Cancel Order</button>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-brand text-white p-3 rounded-full animate-bounce">
                <Brain className="w-6 h-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-green-500 text-white p-3 rounded-full animate-pulse">
                <BarChart3 className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Demo Section */}
<section className="py-20 bg-surface-muted relative overflow-hidden">
  {/* Background Elements */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-20 left-10 w-72 h-72 bg-brand rounded-full blur-3xl"></div>
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-dark rounded-full blur-3xl"></div>
  </div>
  
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    {/* Section Header */}
    <div className="text-center mb-20">
      <div className="inline-flex items-center bg-brand/10 text-brand px-6 py-3 rounded-full text-sm font-medium mb-6">
        <MessageCircle className="w-5 h-5 mr-2" />
        AI-Powered Conversations
      </div>
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
        See AI Chatbots in 
        <span className="text-brand block">Action</span>
      </h2>
      <p className="text-xl text-ink-muted max-w-3xl mx-auto leading-relaxed">
        Discover how our intelligent chatbots transform customer interactions across different industries with seamless automation and human-like conversations
      </p>
    </div>

    {/* Main Featured Demo */}
    <div className="mb-20">
      <div className="glass-card overflow-hidden border border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div className="p-8 lg:p-12">
            <div className="inline-flex items-center bg-brand/10 text-brand px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Zap className="w-4 h-4 mr-2" />
              Featured Demo
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
              E-commerce Order Assistant
            </h3>
            <p className="text-ink-muted mb-6 text-lg">
               Our AI handles complex order inquiries, provides real-time tracking, and offers personalized product recommendations with human-like understanding.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-ink-muted">
                <CheckCircle className="w-5 h-5 text-brand mr-3" />
                <span>Instant order status updates</span>
              </div>
              <div className="flex items-center text-ink-muted">
                <CheckCircle className="w-5 h-5 text-brand mr-3" />
                <span>Smart product recommendations</span>
              </div>
              <div className="flex items-center text-ink-muted">
                <CheckCircle className="w-5 h-5 text-brand mr-3" />
                <span>24/7 customer support</span>
              </div>
            </div>
            {/* <button className="bg-brand text-white px-8 py-4 rounded-xl font-semibold hover:bg-brand-dark transition-all duration-300 transform hover:scale-105 shadow-lg">
              Try Demo Now
            </button> */}
          </div>
          <div className="relative h-96 lg:h-full">
            <img
              src={ecomm}
              alt="E-commerce Chatbot Demo"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            <div className="absolute top-6 right-6 glass rounded-lg px-4 py-2">
              {/* <div className="flex items-center text-sm font-medium text-ink-muted">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                Live Demo
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Interactive Demo Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
      {/* Healthcare Demo */}
      <div className="group glass-card shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/10 hover:border-brand/30">
        <div className="relative h-48 overflow-hidden">
          <img
            src={hc}
            alt="Healthcare Chatbot"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute top-4 left-4 glass rounded-lg p-2">
            <Stethoscope className="w-6 h-6 text-brand" />
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
              <div className="text-white text-sm font-medium">
                "Book appointment with Dr. Smith"
              </div>
              <div className="text-white/80 text-xs mt-1">
                AI instantly checks availability
              </div>
            </div>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-3">Healthcare Assistant</h3>
          <p className="text-ink-muted mb-4">
            Streamline patient interactions with appointment booking, symptom checking, and medication reminders.
          </p>
          <div className="flex items-center justify-between">
            <div className="text-sm text-slate-400">
              Appointment &amp; FAQ flows
            </div>
            <ArrowRight className="w-5 h-5 text-brand group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>

      {/* Education Demo */}
      <div className="group glass-card shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/10 hover:border-brand/30">
        <div className="relative h-48 overflow-hidden">
          <img
            src={edusample}
            alt="Education Chatbot"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute top-4 left-4 glass rounded-lg p-2">
            <GraduationCap className="w-6 h-6 text-brand" />
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
              <div className="text-white text-sm font-medium">
                "What's my assignment deadline?"
              </div>
              <div className="text-white/80 text-xs mt-1">
                Instant academic support
              </div>
            </div>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-3">Education Hub</h3>
          <p className="text-ink-muted mb-4">
            Enhance learning experience with instant answers, assignment reminders, and academic support.
          </p>
          <div className="flex items-center justify-between">
            <div className="text-sm text-slate-400">
              Student FAQ &amp; reminders
            </div>
            <ArrowRight className="w-5 h-5 text-brand group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>

      {/* Construction Demo */}
      <div className="group glass-card shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/10 hover:border-brand/30">
        <div className="relative h-48 overflow-hidden">
          <img
            src={construction}
            alt="Construction Chatbot"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute top-4 left-4 glass rounded-lg p-2">
            <Hammer className="w-6 h-6 text-brand" />
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
              <div className="text-white text-sm font-medium">
                "Safety protocol for Site A"
              </div>
              <div className="text-white/80 text-xs mt-1">
                Real-time safety updates
              </div>
            </div>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-3">Construction Control</h3>
          <p className="text-ink-muted mb-4">
            Coordinate teams, track equipment, and ensure safety compliance with intelligent automation.
          </p>
          <div className="flex items-center justify-between">
            <div className="text-sm text-slate-400">
              Site safety &amp; coordination
            </div>
            <ArrowRight className="w-5 h-5 text-brand group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </div>

    {/* WhatsApp Chatbot Capabilities Showcase */}
{/* Chatbot Features Showcase */}
<div className="bg-gradient-brand rounded-3xl p-8 lg:p-12 text-white mb-20">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    <div>
      <h3 className="text-3xl font-bold mb-6">Dynamic WhatsApp Chatbots</h3>
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <MessageCircle className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2">Industry-Ready Conversations</h4>
            <p className="text-white/80">
              Build chatbot flows for healthcare, education, real estate, travel, and more using pre-configured logic.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <BarChart3 className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2">Database-Driven Actions</h4>
            <p className="text-white/80">
              Integrate chatbots with your system to fetch live data like available appointment slots or order status.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2">Multi-Purpose Use Cases</h4>
            <p className="text-white/80">
              Use the same chatbot framework for booking, reminders, lead generation, feedback, and much more.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Single Image Display */}
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
      <img
        src={healthcare1}
        alt="Generic Chatbot"
        className="w-full h-64 object-cover rounded-lg"
      />
      <h4 className="font-semibold text-sm text-white mt-3 text-center">Smart WhatsApp Chatbots</h4>
    </div>
  </div>
</div>


    {/* Capabilities (no fabricated benchmark stats) */}
    <div className="text-center">
      <h3 className="text-3xl font-bold text-white mb-8">What you can build</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="glass-card p-6">
          <div className="text-xl font-bold text-brand mb-2">Flows</div>
          <div className="text-sm text-ink-muted">FAQ, routing, handoff</div>
        </div>
        <div className="glass-card p-6">
          <div className="text-xl font-bold text-brand mb-2">Templates</div>
          <div className="text-sm text-ink-muted">Aligned with WhatsApp rules</div>
        </div>
        <div className="glass-card p-6">
          <div className="text-xl font-bold text-brand mb-2">Team inbox</div>
          <div className="text-sm text-ink-muted">Collaborate on chats</div>
        </div>
        <div className="glass-card p-6">
          <div className="text-xl font-bold text-brand mb-2">India focus</div>
          <div className="text-sm text-ink-muted">Tamil Nadu &amp; nationwide</div>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Powerful AI Features</h2>
            <p className="text-lg text-ink-muted max-w-2xl mx-auto">
              Our chatbots are powered by advanced AI technology to deliver human-like conversations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="glass-card p-6">
                <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-brand" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-ink-muted">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bot Types */}
      <section className="py-20 bg-surface-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Choose Your Bot Type</h2>
            <p className="text-lg text-ink-muted">Pre-built chatbot templates for common business use cases</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {botTypes.map((bot, index) => (
              <div key={index} className="relative">
                <div 
                  className={`glass-card p-6 hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                    selectedBotType === bot.id ? 'ring-2 ring-[#25D366] shadow-2xl' : ''
                  }`}
                  onClick={() => setSelectedBotType(selectedBotType === bot.id ? null : bot.id)}
                >
                  <div className="text-center">
                    <div className={`w-16 h-16 ${bot.color} rounded-full flex items-center justify-center mx-auto mb-4 transition-colors`}>
                      <bot.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{bot.title}</h3>
                    <p className="text-ink-muted text-sm mb-4">{bot.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="text-sm font-medium text-brand">{bot.tagline}</div>
                      <div className="text-xs text-slate-400">Setup in {bot.setupTime}</div>
                    </div>
                    
                    {/* <button className="bg-brand text-white px-4 py-2 rounded-lg hover:bg-brand-dark transition-colors text-sm w-full mb-2">
                      Select Template
                    </button>
                    
                    <button className="text-brand text-sm hover:text-brand-light transition-colors flex items-center justify-center w-full">
                      View Details
                      <ChevronRight className={`w-4 h-4 ml-1 transition-transform ${selectedBotType === bot.id ? 'rotate-90' : ''}`} />
                    </button> */}
                  </div>
                </div>
                
                {selectedBotType === bot.id && (
                  <div className="absolute top-full left-0 right-0 z-10 mt-2 glass-card p-6 shadow-xl border border-white/10">
                    <h4 className="font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2 mb-4">
                      {bot.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-brand mr-2 flex-shrink-0" />
                          <span className="text-ink-muted">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-2">
                      <button className="bg-brand text-white px-4 py-2 rounded-lg hover:bg-brand-dark transition-colors text-sm flex-1">
                        Get Started
                      </button>
                      <button className="border border-brand text-brand px-4 py-2 rounded-lg hover:bg-brand hover:text-white transition-colors text-sm flex items-center">
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Industry-Specific Solutions</h2>
            <p className="text-lg text-ink-muted">Tailored chatbot solutions designed for your industry's unique needs</p>
          </div>

          <div className="space-y-20">
            {industries.map((industry, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mr-4">
                      <industry.icon className="w-6 h-6 text-brand" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{industry.title}</h3>
                  </div>
                  
                  <p className="text-lg text-ink-muted mb-6">{industry.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-white mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {industry.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm">
                            <CheckCircle className="w-4 h-4 text-brand mr-2 flex-shrink-0" />
                            <span className="text-ink-muted">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-white mb-3">Benefits:</h4>
                      <ul className="space-y-2">
                        {industry.useCases.map((useCase, useCaseIndex) => (
                          <li key={useCaseIndex} className="flex items-center text-sm">
                            <CheckCircle className="w-4 h-4 text-brand mr-2 flex-shrink-0" />
                            <span className="text-ink-muted">{useCase}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <Link to={industry.link} className="bg-brand text-white px-6 py-3 rounded-lg hover:bg-brand-dark transition-colors inline-flex items-center">
                    Get {industry.title} Bot
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-surface-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Typical patterns (not guarantees)</h2>
            <p className="text-lg text-ink-muted">
              Examples only—your outcomes depend on flows, compliance, and operations. We do not publish unaudited performance claims as facts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="glass-card p-6">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-${story.color}/10 rounded-lg flex items-center justify-center mr-4`}>
                    <story.icon className={`w-6 h-6 text-${story.color}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{story.company}</h3>
                    <p className="text-sm text-ink-muted">{story.industry}</p>
                  </div>
                </div>
                <p className="text-ink-muted mb-4">"{story.quote}"</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-brand font-medium">{story.metric}</span>
                  <span className="text-slate-400">{story.timeframe}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InternalLinksHub currentPath="/chatbots" />

      {/* CTA Section */}
      <section className="py-20 bg-brand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Build Your AI Chatbot?</h2>
          <p className="text-lg text-white/90 mb-8">
            Start automating your customer conversations today with our intelligent WhatsApp chatbots.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-brand px-8 py-4 rounded-lg text-lg font-semibold hover:bg-surface-elevated transition-colors inline-flex items-center justify-center">
              Start Building
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link to="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-brand transition-colors">
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Chatbots;
