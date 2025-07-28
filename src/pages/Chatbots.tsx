import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bot, MessageCircle, Zap, Brain, CheckCircle, Play, ArrowRight, Building, ShoppingCart, GraduationCap, Stethoscope, Hammer, Wheat, Banknote, Truck, Users, Clock, BarChart3, Shield, ChevronRight, ExternalLink,Home,Plane } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
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
    description: 'Easily send messages to thousands of customers using pre-approved WhatsApp templates.'
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
      useCases: ['Reduce cart abandonment by 40%', 'Automate 80% of customer queries', 'Increase sales conversion by 25%'],
      link: '/solutions/ecommerce'
    },
    {
      id: 'healthcare',
      icon: Stethoscope,
      title: 'Healthcare & Hospitals',
      description: 'Streamline patient care with automated appointment booking and medical assistance',
      image: hc,
      features: ['Multi-department appointment booking', 'Symptom checker & triage', 'Prescription reminders'],
      useCases: ['Reduce appointment no-shows by 60%', 'Handle 90% of routine inquiries', 'Improve patient satisfaction scores'],
      link: '/solutions/healthcare'
    },
    {
      id: 'education',
      icon: GraduationCap,
      title: 'Education',
      description: 'Enhance learning experience with automated student support and communication',
      image: edusample,
      features: ['Course enrollment assistance', 'Assignment & exam reminders', 'Grade notifications'],
      useCases: ['Increase student engagement by 50%', 'Automate administrative tasks', 'Improve parent communication'],
      link: '/solutions/education'
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
    'Boost lead conversions by 40%',
    'Streamline agent-customer communication',
    'Close property deals faster'
  ],
  link: '/solutions/real-estate'
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
    'Increase tour bookings by 35%',
    'Enhance customer experience',
    'Automate repetitive travel agent tasks'
  ],
  link: '/solutions/travel-and-tourism'
}
,
    {
      id: 'financial',
      icon: Banknote,
      title: 'Financial Services',
      description: 'Provide secure banking assistance and financial guidance to customers',
      image: bankoverview,
      features: ['Account balance inquiries', 'Transaction notifications', 'Loan application assistance'],
      useCases: ['Reduce call center load by 70%', 'Improve customer satisfaction', 'Enhance security monitoring'],
      link: '/solutions/financial'
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
      company: 'RetailMax',
      industry: 'E-commerce Platform',
      icon: ShoppingCart,
      color: 'green-500',
      quote: 'Our chatbot handles 85% of customer inquiries automatically, reducing response time from hours to seconds.',
      metric: '↑ 40% Sales Increase',
      timeframe: '3 months'
    },
    {
      company: 'CityHealth',
      industry: 'Healthcare Network',
      icon: Stethoscope,
      color: 'red-500',
      quote: 'Appointment booking is now seamless with 95% accuracy. Patient satisfaction scores improved significantly.',
      metric: '↓ 60% No-shows',
      timeframe: '2 months'
    },
    {
      company: 'EduTech Institute',
      industry: 'Online Education',
      icon: GraduationCap,
      color: 'yellow-500',
      quote: 'Student engagement increased by 50% with automated reminders and instant support availability.',
      metric: '↑ 50% Engagement',
      timeframe: '4 months'
    }
  ];

  return (
     <>
      <Helmet>
        <title>AI WhatsApp Chatbots | No.1 Chatbot Builder for Business | Ask Meister</title>
        <meta name="description" content="Build intelligent WhatsApp chatbots with our no.1 chatbot builder. AI-powered automation for top companies across industries. Trusted by businesses worldwide for customer engagement." />
        <meta name="keywords" content="whatsapp chatbot, ai chatbot, chatbot builder, no.1 chatbot, intelligent chatbots, whatsapp automation, business chatbot, customer engagement, top companies using chatbot, chatbot for business" />
        <link rel="canonical" href="https://askmeister/chatbots" />
        <meta property="og:title" content="AI WhatsApp Chatbots | No.1 Chatbot Builder for Business" />
        <meta property="og:description" content="Build intelligent WhatsApp chatbots with our no.1 chatbot builder. Trusted by top companies worldwide." />
        <meta property="og:url" content="https://askmeister.com/chatbots" />
      </Helmet>
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#25D366]/10 via-white to-[#128C7E]/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center bg-[#25D366]/10 text-[#25D366] px-4 py-2 rounded-full text-sm font-medium">
                  <Bot className="w-4 h-4 mr-2" />
                  AI-Powered WhatsApp Chatbots
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-[#1C1C1C] leading-tight">
                  Intelligent Chatbots for
                  <span className="text-[#25D366] block">Every Industry</span>
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Transform your customer service with AI-powered WhatsApp chatbots. 
                  Automate conversations, boost engagement, and provide 24/7 support across any industry.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/Contact" className="bg-[#25D366] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#128C7E] transition-colors inline-flex items-center justify-center">
                  Build Your Bot
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link to="/pricing" className="border-2 border-[#25D366] text-[#25D366] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#25D366] hover:text-white transition-colors inline-flex items-center justify-center">
                  {/* <Play className="w-5 h-5 mr-2" /> */}
                  See Pricing
                </Link>
              </div>

              <div className="flex flex-wrap gap-8 pt-4">
                {[
                  { value: '99%', label: 'Accuracy Rate' },
                  { value: '24/7', label: 'Availability' },
                  { value: '80%', label: 'Cost Reduction' }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-[#25D366]">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-md mx-auto relative z-10">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#1C1C1C]">Ask Meister</div>
                    <div className="text-sm text-gray-500">Online • Typing...</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-[#25D366]/10 p-3 rounded-lg">
                    <p className="text-sm">👋 Hi! I'm your Chatbot assistant. How can I help you today?</p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-lg ml-8">
                    <p className="text-sm">I need help with my order</p>
                  </div>
                  <div className="bg-[#25D366]/10 p-3 rounded-lg">
                    <p className="text-sm">I'd be happy to help! Please share your order number and I'll check the status for you 📦</p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="bg-[#25D366] text-white px-3 py-1 rounded text-xs">Track Order</button>
                    <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-xs">Cancel Order</button>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-[#25D366] text-white p-3 rounded-full animate-bounce">
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
<section className="py-20 bg-gradient-to-br from-[#F7F7F7] via-white to-[#25D366]/5 relative overflow-hidden">
  {/* Background Elements */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-20 left-10 w-72 h-72 bg-[#25D366] rounded-full blur-3xl"></div>
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#128C7E] rounded-full blur-3xl"></div>
  </div>
  
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    {/* Section Header */}
    <div className="text-center mb-20">
      <div className="inline-flex items-center bg-[#25D366]/10 text-[#25D366] px-6 py-3 rounded-full text-sm font-medium mb-6">
        <MessageCircle className="w-5 h-5 mr-2" />
        AI-Powered Conversations
      </div>
      <h2 className="text-4xl md:text-6xl font-bold text-[#1C1C1C] mb-6">
        See AI Chatbots in 
        <span className="text-[#25D366] block">Action</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Discover how our intelligent chatbots transform customer interactions across different industries with seamless automation and human-like conversations
      </p>
    </div>

    {/* Main Featured Demo */}
    <div className="mb-20">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div className="p-8 lg:p-12">
            <div className="inline-flex items-center bg-[#25D366]/10 text-[#25D366] px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Zap className="w-4 h-4 mr-2" />
              Featured Demo
            </div>
            <h3 className="text-3xl font-bold text-[#1C1C1C] mb-4">
              E-commerce Order Assistant
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
               Our AI handles complex order inquiries, provides real-time tracking, and offers personalized product recommendations with human-like understanding.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-700">
                <CheckCircle className="w-5 h-5 text-[#25D366] mr-3" />
                <span>Instant order status updates</span>
              </div>
              <div className="flex items-center text-gray-700">
                <CheckCircle className="w-5 h-5 text-[#25D366] mr-3" />
                <span>Smart product recommendations</span>
              </div>
              <div className="flex items-center text-gray-700">
                <CheckCircle className="w-5 h-5 text-[#25D366] mr-3" />
                <span>24/7 customer support</span>
              </div>
            </div>
            {/* <button className="bg-[#25D366] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#128C7E] transition-all duration-300 transform hover:scale-105 shadow-lg">
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
            <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
              {/* <div className="flex items-center text-sm font-medium text-gray-700">
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
      <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-[#25D366]/30">
        <div className="relative h-48 overflow-hidden">
          <img
            src={hc}
            alt="Healthcare Chatbot"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-2">
            <Stethoscope className="w-6 h-6 text-[#25D366]" />
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
          <h3 className="text-xl font-bold text-[#1C1C1C] mb-3">Healthcare Assistant</h3>
          <p className="text-gray-600 mb-4">
            Streamline patient interactions with appointment booking, symptom checking, and medication reminders.
          </p>
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">
              <span className="font-medium text-[#25D366]">95%</span> patient satisfaction
            </div>
            <ArrowRight className="w-5 h-5 text-[#25D366] group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>

      {/* Education Demo */}
      <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-[#25D366]/30">
        <div className="relative h-48 overflow-hidden">
          <img
            src={edusample}
            alt="Education Chatbot"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-2">
            <GraduationCap className="w-6 h-6 text-[#25D366]" />
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
          <h3 className="text-xl font-bold text-[#1C1C1C] mb-3">Education Hub</h3>
          <p className="text-gray-600 mb-4">
            Enhance learning experience with instant answers, assignment reminders, and academic support.
          </p>
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">
              <span className="font-medium text-[#25D366]">87%</span> engagement boost
            </div>
            <ArrowRight className="w-5 h-5 text-[#25D366] group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>

      {/* Construction Demo */}
      <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-[#25D366]/30">
        <div className="relative h-48 overflow-hidden">
          <img
            src={construction}
            alt="Construction Chatbot"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-2">
            <Hammer className="w-6 h-6 text-[#25D366]" />
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
          <h3 className="text-xl font-bold text-[#1C1C1C] mb-3">Construction Control</h3>
          <p className="text-gray-600 mb-4">
            Coordinate teams, track equipment, and ensure safety compliance with intelligent automation.
          </p>
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">
              <span className="font-medium text-[#25D366]">92%</span> efficiency gain
            </div>
            <ArrowRight className="w-5 h-5 text-[#25D366] group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </div>

    {/* WhatsApp Chatbot Capabilities Showcase */}
{/* Chatbot Features Showcase */}
<div className="bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-3xl p-8 lg:p-12 text-white mb-20">
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


    {/* Success Stories */}
    <div className="text-center">
      <h3 className="text-3xl font-bold text-[#1C1C1C] mb-8">Trusted by Leading Businesses</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="text-3xl font-bold text-[#25D366] mb-2">99.9%</div>
          <div className="text-sm text-gray-600">Message Delivery</div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="text-3xl font-bold text-[#25D366] mb-2">50k+</div>
          <div className="text-sm text-gray-600">Active Chatbots</div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="text-3xl font-bold text-[#25D366] mb-2">24/7</div>
          <div className="text-sm text-gray-600">Support Available</div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="text-3xl font-bold text-[#25D366] mb-2">95%</div>
          <div className="text-sm text-gray-600">Customer Satisfaction</div>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-4">Powerful AI Features</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our chatbots are powered by advanced AI technology to deliver human-like conversations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-12 h-12 bg-[#25D366]/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-[#25D366]" />
                </div>
                <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bot Types */}
      <section className="py-20 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-4">Choose Your Bot Type</h2>
            <p className="text-lg text-gray-600">Pre-built chatbot templates for common business use cases</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {botTypes.map((bot, index) => (
              <div key={index} className="relative">
                <div 
                  className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                    selectedBotType === bot.id ? 'ring-2 ring-[#25D366] shadow-2xl' : ''
                  }`}
                  onClick={() => setSelectedBotType(selectedBotType === bot.id ? null : bot.id)}
                >
                  <div className="text-center">
                    <div className={`w-16 h-16 ${bot.color} rounded-full flex items-center justify-center mx-auto mb-4 transition-colors`}>
                      <bot.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#1C1C1C] mb-2">{bot.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{bot.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="text-sm font-medium text-[#25D366]">{bot.price}</div>
                      <div className="text-xs text-gray-500">Setup in {bot.setupTime}</div>
                    </div>
                    
                    {/* <button className="bg-[#25D366] text-white px-4 py-2 rounded-lg hover:bg-[#128C7E] transition-colors text-sm w-full mb-2">
                      Select Template
                    </button>
                    
                    <button className="text-[#25D366] text-sm hover:text-[#128C7E] transition-colors flex items-center justify-center w-full">
                      View Details
                      <ChevronRight className={`w-4 h-4 ml-1 transition-transform ${selectedBotType === bot.id ? 'rotate-90' : ''}`} />
                    </button> */}
                  </div>
                </div>
                
                {selectedBotType === bot.id && (
                  <div className="absolute top-full left-0 right-0 z-10 mt-2 bg-white rounded-xl p-6 shadow-xl border border-gray-100">
                    <h4 className="font-semibold text-[#1C1C1C] mb-3">Key Features:</h4>
                    <ul className="space-y-2 mb-4">
                      {bot.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-[#25D366] mr-2 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-2">
                      <button className="bg-[#25D366] text-white px-4 py-2 rounded-lg hover:bg-[#128C7E] transition-colors text-sm flex-1">
                        Get Started
                      </button>
                      <button className="border border-[#25D366] text-[#25D366] px-4 py-2 rounded-lg hover:bg-[#25D366] hover:text-white transition-colors text-sm flex items-center">
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-4">Industry-Specific Solutions</h2>
            <p className="text-lg text-gray-600">Tailored chatbot solutions designed for your industry's unique needs</p>
          </div>

          <div className="space-y-20">
            {industries.map((industry, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#25D366]/10 rounded-lg flex items-center justify-center mr-4">
                      <industry.icon className="w-6 h-6 text-[#25D366]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1C1C1C]">{industry.title}</h3>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-6">{industry.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-[#1C1C1C] mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {industry.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm">
                            <CheckCircle className="w-4 h-4 text-[#25D366] mr-2 flex-shrink-0" />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-[#1C1C1C] mb-3">Benefits:</h4>
                      <ul className="space-y-2">
                        {industry.useCases.map((useCase, useCaseIndex) => (
                          <li key={useCaseIndex} className="flex items-center text-sm">
                            <CheckCircle className="w-4 h-4 text-[#25D366] mr-2 flex-shrink-0" />
                            <span className="text-gray-600">{useCase}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <Link to={industry.link} className="bg-[#25D366] text-white px-6 py-3 rounded-lg hover:bg-[#128C7E] transition-colors inline-flex items-center">
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
      <section className="py-20 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600">See how businesses are transforming their operations with our AI chatbots</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-${story.color}/10 rounded-lg flex items-center justify-center mr-4`}>
                    <story.icon className={`w-6 h-6 text-${story.color}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1C1C1C]">{story.company}</h3>
                    <p className="text-sm text-gray-600">{story.industry}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">"{story.quote}"</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#25D366] font-medium">{story.metric}</span>
                  <span className="text-gray-500">{story.timeframe}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#25D366]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Build Your AI Chatbot?</h2>
          <p className="text-lg text-white/90 mb-8">
            Start automating your customer conversations today with our intelligent WhatsApp chatbots.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/pricing" className="bg-white text-[#25D366] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center">
              Start Building
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link to="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#25D366] transition-colors">
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
