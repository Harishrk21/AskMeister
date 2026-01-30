import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { MessageCircle, Users, Zap, BarChart3, CheckCircle, Star, ArrowRight, Play, Shield, Clock, TrendingUp, Bot, Globe, Award } from 'lucide-react';
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
      description: 'Send personalized messages to thousands of contacts instantly with our powerful broadcast engine.',
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

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'TechStart Inc.',
      content: 'Ask Meister transformed our customer communication. We saw 300% increase in engagement rates within the first month!',
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Michael Chen',
      role: 'E-commerce Owner',
      company: 'Fashion Forward',
      content: 'The AI chatbots saved us 20 hours per week. Our sales increased by 45% in just 3 months with automated follow-ups.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Digital Marketer',
      company: 'Growth Agency',
      content: 'Best WhatsApp marketing tool we\'ve used. The ROI is incredible and the chatbot features are game-changing.',
      rating: 5,
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150'
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
    icon: '💬',
    industry: 'Real Estate',
    description: 'Convert web visitors into leads using instant WhatsApp replies.'
  },
  {
    title: 'Bulk Promotions to Donors',
    icon: '📣',
    industry: 'NGOs',
    description: 'Engage past donors with timely updates and appeals automatically.'
  },
  {
    title: 'Appointment Reminders',
    icon: '📅',
    industry: 'Clinics & Hospitals',
    description: 'Reduce no-shows by automating appointment reminders via WhatsApp.'
  },
  {
    title: 'WhatsApp Shopping Assistant',
    icon: '🛍️',
    industry: 'Retail',
    description: 'Guide customers from inquiry to checkout with automated flows.'
  }
];

  const industries = [
    {
      title: 'Education',
      description: 'Streamline admissions, student communication, and parent engagement',
      link: '/solutions/education',
      icon: '🎓',
      benefits: ['Quick admission forms', 'Parent notifications', 'Student support']
    },
    {
      title: 'Healthcare',
      description: 'Automate appointments, patient care, and medical communications',
      link: '/solutions/healthcare',
      icon: '🏥',
      benefits: ['Appointment booking', 'Patient reminders', 'Department coordination']
    },
    {
      title: 'E-commerce',
      description: 'Boost sales with order updates, cart recovery, and customer support',
      link: '/solutions/ecommerce',
      icon: '🛒',
      benefits: ['Order tracking', 'Cart recovery', 'Product recommendations']
    },
   {
  title: 'Real Estate',
  description: 'Promote properties, engage leads, and automate client interactions',
  link: '/solutions/real-estate',
  icon: '🏠',
  benefits: ['Property listings', 'Lead engagement', 'Automated follow-ups']
},
{
  title: 'Travel & Tourism',
  description: 'Share tour packages, send booking alerts, and assist travelers instantly',
  link: '/solutions/travel-and-tourism',
  icon: '🌍',
  benefits: ['Tour packages', 'Booking alerts', 'Travel assistance']
}
,
    {
      title: 'Financial Services',
      description: 'Secure banking, transaction alerts, and customer support',
      link: '/solutions/financial',
      icon: '💰',
      benefits: ['Transaction alerts', 'Account updates', 'Secure banking']
    }
  ];

  // Quick navigation links for better internal linking
  const quickLinks = [
    { title: 'WhatsApp API Integration', link: '/whatsapp-api' },
    { title: 'Pricing Plans', link: '/pricing' },
    { title: 'Marketing Tools', link: '/tools' },
    { title: 'WhatsApp Chatbots', link: '/chatbots' },
    { title: 'Analytics Dashboard', link: '/features/analytics' },
    { title: 'Bulk Messaging', link: '/features/bulk-messaging' },
    { title: 'Templates Library', link: '/features/templates' },
    { title: 'Live Chat Support', link: '/features/livechat' }
  ];

  return (
    <>
    <Helmet>
        <title>Best WhatsApp Marketing Platform 2026 | AI Chatbot Builder & Bulk Messaging Tool - Ask Meister</title>
        <meta name="description" content="WhatsApp marketing platform: bulk messaging, WhatsApp Business API & AI chatbot builder. Send bulk messages, automate campaigns. Free trial – trusted by 10,000+ businesses." />
        <meta name="keywords" content="whatsapp marketing, whatsapp chatbot, bulk messaging, ai chatbot builder, whatsapp api, business automation, customer engagement, whatsapp business solution, marketing automation platform, chatbot platform" />
        <link rel="canonical" href="https://www.askmeister.com/" />
        <meta property="og:title" content="Best WhatsApp Marketing Platform 2026 | AI Chatbot Builder - Ask Meister" />
        <meta property="og:description" content="WhatsApp marketing platform: bulk messaging, WhatsApp Business API & AI chatbot. Automate campaigns. Free trial – trusted by 10,000+ businesses." />
        <meta property="og:url" content="https://www.askmeister.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best WhatsApp Marketing Platform 2026 | AI Chatbot Builder" />
        <meta name="twitter:description" content="WhatsApp marketing platform: bulk messaging, WhatsApp Business API & AI chatbot. Free trial – trusted by 10,000+ businesses." />
      </Helmet>
      
    <div className="pt-16">
      {/* Hero Section - WATI Inspired */}
      <section className="bg-gradient-to-br from-[#25D366]/10 via-white to-[#128C7E]/5 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center bg-[#25D366]/10 text-[#25D366] px-4 py-2 rounded-full text-sm font-medium">
                  <Award className="w-4 h-4 mr-2" />
                  #1 WhatsApp Marketing Platform 2024
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-[#1C1C1C] leading-tight">
                  Best WhatsApp Marketing Platform with 
                  <span className="text-[#25D366] block">AI Chatbot Builder</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Transform your business with our WhatsApp marketing platform. Send bulk messages, 
                  build AI chatbots, automate customer engagement, and grow sales with the world's 
                  leading WhatsApp business solution trusted by 10,000+ companies.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-[#25D366] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#128C7E] transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <button
                  onClick={() => {
                    const demoSection = document.getElementById('demo-video');
                    demoSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="border-2 border-[#25D366] text-[#25D366] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#25D366] hover:text-white transition-all duration-300 inline-flex items-center justify-center"
                >
                  Watch Demo
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-[#25D366]/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <stat.icon className="w-6 h-6 text-[#25D366]" />
                    </div>
                    <div className="text-2xl font-bold text-[#25D366]">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              {/* Main Hero Image from WATI */}
              <div className="relative z-10">
                <img
                  src={home}
                  alt="WhatsApp Marketing Dashboard - Bulk Messaging and Chatbot Platform"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-[#25D366] text-white p-3 rounded-full animate-bounce">
                <Bot className="w-6 h-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-green-500 text-white p-3 rounded-full animate-pulse">
                <BarChart3 className="w-6 h-6" />
              </div>
              
              {/* Background Decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#25D366]/20 to-transparent rounded-2xl transform rotate-3 scale-105 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation Links for SEO */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-[#1C1C1C] mb-2">
              Explore WhatsApp Marketing Solutions
            </h2>
            <p className="text-gray-600">Quick access to our key features and services</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                to={link.link}
                className="text-center p-3 rounded-lg border border-gray-200 hover:border-[#25D366] hover:bg-[#25D366]/5 transition-all duration-300 group"
              >
                <span className="text-sm font-medium text-gray-700 group-hover:text-[#25D366]">
                  {link.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section id="demo-video" className="py-20 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-4">
              See Our WhatsApp Marketing Dashboard in Action
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Watch how easy it is to manage your WhatsApp marketing campaigns, build chatbots, and send bulk messages with our intuitive dashboard.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                <img 
                  src={uploadingcontacts}
                  alt="WhatsApp Marketing Dashboard Demo - Contact Upload and Bulk Messaging" 
                  className="w-full h-full object-cover rounded-lg" 
                />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-xl font-semibold text-[#1C1C1C] mb-2">
                 One-Step Drag & Drop Contact Upload for Bulk WhatsApp Marketing
                </h3>
                <p className="text-gray-600">
                  See how easy it is to import contacts and send bulk WhatsApp messages instantly with our marketing automation platform
                </p>
                <div className="mt-4">
                  <Link
                    to="/features/bulk-messaging"
                    className="text-[#25D366] hover:underline font-medium"
                  >
                    Learn more about bulk messaging features →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-4">
              WhatsApp Marketing Solutions for Every Industry
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tailored WhatsApp business solutions with industry-specific chatbot templates, automation workflows, and marketing strategies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Link
                key={index}
                to={industry.link}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3 group-hover:text-[#25D366] transition-colors">
                  WhatsApp Marketing for {industry.title}
                </h3>
                <p className="text-gray-600 mb-4">{industry.description}</p>
                <ul className="space-y-2 mb-4">
                  {industry.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-[#25D366] mr-2" />
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center text-[#25D366] font-medium group-hover:underline">
                  Explore {industry.title} Solutions
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="bg-[#25D366] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#128C7E] transition-colors inline-flex items-center"
            >
              Get Custom Industry Solution
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-4">
              Real-World WhatsApp Marketing Use Cases
            </h3>
            <p className="text-lg text-gray-600">
              See how businesses across different industries leverage Ask Meister's WhatsApp marketing platform for growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2">
                <div className="text-4xl mb-4 text-center">{useCase.icon}</div>
                <h4 className="text-lg font-semibold text-[#1C1C1C] mb-2 group-hover:text-[#25D366] transition-colors">
                  {useCase.title}
                </h4>
                <div className="text-sm text-[#25D366] font-medium mb-3">{useCase.industry}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{useCase.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/tools"
              className="text-[#25D366] hover:underline font-medium"
            >
              Explore more WhatsApp marketing use cases →
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-4">
              How Our WhatsApp Marketing Platform Works
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get started with WhatsApp marketing automation in just 4 simple steps. 
              No technical knowledge required for our chatbot builder and bulk messaging tools!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-2">
                  <div className="w-16 h-16 bg-[#25D366]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#25D366]/20 transition-colors">
                    <step.icon className="w-8 h-8 text-[#25D366]" />
                  </div>
                  <div className="w-8 h-8 bg-[#25D366] text-white rounded-full flex items-center justify-center text-sm font-bold absolute -top-3 -right-3">
                    {step.step}
                  </div>
                  <h4 className="text-xl font-semibold text-[#1C1C1C] mb-2">{step.title}</h4>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-[#25D366]" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/whatsapp-api"
              className="text-[#25D366] hover:underline font-medium"
            >
              Learn more about WhatsApp API integration →
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-4">
              Powerful WhatsApp Marketing Features for Modern Businesses
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to create, manage, and optimize your WhatsApp marketing campaigns with our comprehensive business automation platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1">
                <div className="aspect-video mb-6 rounded-lg overflow-hidden">
                  <img
                    src={feature.image}
                    alt={`${feature.title} - WhatsApp Marketing Feature`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="w-12 h-12 bg-[#25D366]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#25D366]/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-[#25D366]" />
                </div>
                <h4 className="text-xl font-semibold text-[#1C1C1C] mb-3">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/whatsapp-api"
              className="bg-[#25D366] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#128C7E] transition-colors inline-flex items-center"
            >
              Explore All WhatsApp Marketing Features
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-4">
              Why 10,000+ Businesses Trust Our WhatsApp Marketing Platform
            </h3>
            <p className="text-lg text-gray-600">
              See what our customers are saying about Ask Meister's WhatsApp marketing and chatbot solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name} - ${testimonial.company} WhatsApp Marketing Success Story`}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-[#1C1C1C]">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role} at {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/about"
              className="text-[#25D366] hover:underline font-medium"
            >
              Read more customer success stories →
            </Link>
          </div>
        </div>
      </section>

      {/* Internal Links Section for SEO */}
      <section className="py-16 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-[#1C1C1C] mb-4">
              Explore More WhatsApp Marketing Resources
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-[#1C1C1C] mb-3">Platform Features</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/features/automation" className="text-gray-600 hover:text-[#25D366]">Marketing Automation</Link></li>
                <li><Link to="/features/analytics" className="text-gray-600 hover:text-[#25D366]">Analytics Dashboard</Link></li>
                <li><Link to="/features/livechat" className="text-gray-600 hover:text-[#25D366]">Live Chat Support</Link></li>
                <li><Link to="/features/templates" className="text-gray-600 hover:text-[#25D366]">Message Templates</Link></li>
                <li><Link to="/features/bulk-messaging" className="text-gray-600 hover:text-[#25D366]">Bulk Messaging</Link></li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-[#1C1C1C] mb-3">Chatbot Solutions</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/chatbots" className="text-gray-600 hover:text-[#25D366]">AI Chatbot Builder</Link></li>
                <li><Link to="/solutions/education" className="text-gray-600 hover:text-[#25D366]">Education Chatbots</Link></li>
                <li><Link to="/solutions/healthcare" className="text-gray-600 hover:text-[#25D366]">Healthcare Bots</Link></li>
                <li><Link to="/solutions/ecommerce" className="text-gray-600 hover:text-[#25D366]">E-commerce Bots</Link></li>
                <li><Link to="/solutions/real-estate" className="text-gray-600 hover:text-[#25D366]">Real Estate Bots</Link></li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-[#1C1C1C] mb-3">Business Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/pricing" className="text-gray-600 hover:text-[#25D366]">Pricing Plans</Link></li>
                <li><Link to="/whatsapp-api" className="text-gray-600 hover:text-[#25D366]">WhatsApp API</Link></li>
                <li><Link to="/tools" className="text-gray-600 hover:text-[#25D366]">Marketing Tools</Link></li>
                <li><Link to="/blog" className="text-gray-600 hover:text-[#25D366]">Marketing Blog</Link></li>
                <li><Link to="/help" className="text-gray-600 hover:text-[#25D366]">Help Center</Link></li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-[#1C1C1C] mb-3">Company Info</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="text-gray-600 hover:text-[#25D366]">About Ask Meister</Link></li>
                <li><Link to="/contact" className="text-gray-600 hover:text-[#25D366]">Contact Sales</Link></li>
                <li><Link to="/careers" className="text-gray-600 hover:text-[#25D366]">Careers</Link></li>
                <li><Link to="/affiliate" className="text-gray-600 hover:text-[#25D366]">Partner Program</Link></li>
                <li><Link to="/privacy" className="text-gray-600 hover:text-[#25D366]">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#25D366]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business with WhatsApp Marketing?
          </h3>
          <p className="text-lg text-white/90 mb-8">
            Join 10,000+ businesses already using Ask Meister's WhatsApp marketing platform to grow their revenue through automated messaging, AI chatbots, and customer engagement tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-[#25D366] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Start Free Trial - No Credit Card Required
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#25D366] transition-colors inline-flex items-center justify-center"
            >
              Schedule Demo Call
            </Link>
          </div>
          <div className="mt-6 text-sm text-white/80">
            ✅ Free 14-day trial • ✅ No setup fees • ✅ Cancel anytime
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Home;