import React from 'react';
import { MessageCircle, BarChart3, Calendar, Users, Zap, FileText, Image, Video, Bot, User, ArrowRight, Clock, Shield, Settings, Bell, Eye, Send, CheckCircle } from 'lucide-react';
import live from '../../assets/live.png';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const LiveChat = () => {
  const features = [
    {
      icon: BarChart3,
      title: 'Live Analytics Dashboard',
      description: 'Real-time insights into your WhatsApp campaigns with sent, delivered, read, and failed message analytics.',
      benefits: ['Live delivery tracking', 'Read receipt analytics', 'Failure analysis', 'Performance metrics']
    },
    {
      icon: Calendar,
      title: 'Campaign Scheduling',
      description: 'Schedule your WhatsApp campaigns for any date and time to reach customers at the perfect moment.',
      benefits: ['Flexible scheduling', 'Time zone optimization', 'Campaign automation', 'Batch scheduling']
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp-Style Interface',
      description: 'Familiar WhatsApp Web interface with contact lists and conversation threads for seamless communication.',
      benefits: ['Intuitive design', 'Contact management', 'Thread organization', 'Quick access']
    },
    {
      icon: Bot,
      title: 'Chatbot Integration',
      description: 'Seamlessly switch between automated chatbot responses and live human intervention when needed.',
      benefits: ['Smart automation', 'Human takeover', 'Conversation continuity', 'AI assistance']
    },
    {
      icon: FileText,
      title: 'Rich Media Support',
      description: 'Send documents, images, videos, and files just like WhatsApp with full media support.',
      benefits: ['Document sharing', 'Image attachments', 'Video messages', 'File transfers']
    },
    {
      icon: Users,
      title: 'Contact Management',
      description: 'Organize and manage all your WhatsApp contacts with template history and conversation tracking.',
      benefits: ['Contact organization', 'Template tracking', 'Conversation history', 'Customer profiles']
    }
  ];

  const liveFeatures = [
    {
      title: 'Real-Time Messaging',
      description: 'Instant messaging with customers',
      icon: '💬',
      details: ['Live conversations', 'Instant responses', 'Typing indicators', 'Message status']
    },
    {
      title: 'Template Management',
      description: 'Access pre-approved templates instantly',
      icon: '📝',
      details: ['Quick templates', 'Template library', 'Custom messages', 'Approval status']
    },
    {
      title: 'Human Takeover',
      description: 'Switch from bot to human seamlessly',
      icon: '🤝',
      details: ['Bot intervention', 'Smooth transition', 'Context preservation', 'Manual override']
    },
    {
      title: 'Media Sharing',
      description: 'Send files like native WhatsApp',
      icon: '📎',
      details: ['Image sharing', 'Document upload', 'Video messages', 'Audio clips']
    }
  ];

  const analyticsMetrics = [
    {
      metric: '99.9%',
      description: 'Message delivery rate',
      icon: Send
    },
    {
      metric: '24/7',
      description: 'Live monitoring',
      icon: Eye
    },
    {
      metric: '85%',
      description: 'Read rate tracking',
      icon: CheckCircle
    },
    {
      metric: '3x',
      description: 'Response speed',
      icon: Zap
    }
  ];

  return (
     <>
      <Helmet>
        <title>WhatsApp Live Chat | Collaborative Customer Support | Ask Meister</title>
        <meta name="description" content="Manage WhatsApp conversations as a team with shared inbox, agent assignment, and collaboration tools. Perfect for customer support teams and businesses." />
        <meta name="keywords" content="whatsapp team inbox, shared inbox, team collaboration, customer support, agent assignment, whatsapp support, team messaging, collaborative support" />
        <link rel="canonical" href="https://askmeister.com/features/livechat" />
        <meta property="og:title" content="WhatsApp LiveChat| Collaborative Customer Support" />
        <meta property="og:description" content="Collaborate seamlessly with team inbox for WhatsApp customer support and messaging." />
        <meta property="og:url" content="https://askmeister.com/features/livechat" />
      </Helmet>
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Live Chat Feature
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  WhatsApp Live Chat
                  <span className="text-green-600 block">Dashboard</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Manage WhatsApp conversations in real-time with live analytics, campaign scheduling, 
                  and seamless chatbot integration. Experience WhatsApp Web reimagined for business.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center justify-center">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 hover:text-white transition-colors">
                  Schedule Demo
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                {analyticsMetrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <metric.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="text-2xl font-bold text-green-600">{metric.metric}</div>
                    <div className="text-sm text-gray-600">{metric.description}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src={live}
                alt="Live Chat Dashboard"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-green-600 text-white p-3 rounded-full animate-bounce">
                <MessageCircle className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Chat Interface Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              WhatsApp-Style Live Interface
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the familiar WhatsApp interface with powerful business features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {liveFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="text-center mb-4">
                  <span className="text-4xl mb-2 block">{feature.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 text-sm mt-2">{feature.description}</p>
                </div>
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete WhatsApp Marketing Suite
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage WhatsApp campaigns and customer conversations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Chat Layout Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Familiar WhatsApp Interface
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Left panel shows contacts who received templates, right panel for live conversations
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 h-96">
              {/* Left Panel - Contacts */}
              <div className="bg-gray-50 p-6 border-r border-gray-200">
                <div className="flex items-center mb-6">
                  <Users className="w-6 h-6 text-green-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Contact List</h3>
                </div>
                <div className="space-y-3">
                  {[
                    { name: "John Customer", message: "Template sent", time: "2:30 PM", status: "delivered" },
                    { name: "Sarah Johnson", message: "Campaign delivered", time: "2:25 PM", status: "read" },
                    { name: "Mike Wilson", message: "Bot conversation", time: "2:20 PM", status: "active" },
                    { name: "Lisa Brown", message: "Template opened", time: "2:15 PM", status: "read" }
                  ].map((contact, index) => (
                    <div key={index} className="flex items-center p-3 bg-white rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                        <User className="w-5 h-5 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-gray-900">{contact.name}</span>
                          <span className="text-xs text-gray-500">{contact.time}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">{contact.message}</span>
                          <div className={`w-2 h-2 rounded-full ${
                            contact.status === 'read' ? 'bg-blue-500' :
                            contact.status === 'delivered' ? 'bg-gray-400' :
                            'bg-green-500'
                          }`}></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Panel - Chat */}
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <MessageCircle className="w-6 h-6 text-green-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Live Chat</h3>
                  <div className="ml-auto flex items-center">
                    <Bot className="w-5 h-5 text-blue-500 mr-2" />
                    <span className="text-sm text-gray-600">Bot Active</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                      <p className="text-sm text-gray-800">Hello! How can I help you today?</p>
                      <span className="text-xs text-gray-500 mt-1 block">Template sent</span>
                    </div>
                  </div>
                  <div className="flex items-start justify-end">
                    <div className="bg-green-500 text-white rounded-lg p-3 max-w-xs">
                      <p className="text-sm">I need information about your services</p>
                      <span className="text-xs text-green-200 mt-1 block">Customer</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-lg p-3 max-w-xs">
                      <p className="text-sm text-gray-800">I'd be happy to help! Let me connect you with a specialist.</p>
                      <span className="text-xs text-blue-600 mt-1 block">Bot → Human takeover</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex items-center space-x-2">
                  <Image className="w-5 h-5 text-gray-400" />
                  <Video className="w-5 h-5 text-gray-400" />
                  <FileText className="w-5 h-5 text-gray-400" />
                  <div className="flex-1 bg-gray-100 rounded-full px-4 py-2">
                    <span className="text-sm text-gray-500">Type a message...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your WhatsApp Marketing?
          </h2>
          <p className="text-lg text-green-100 mb-8">
            Experience the power of live chat with analytics, scheduling, and seamless bot integration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
  <Link to="/contact">
    <button className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
      Start Free Trial
    </button>
  </Link>
  <Link to="/pricing">
    <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
      View Pricing
    </button>
  </Link>
</div>
        </div>
      </section>
    </div>
    </>
  );
};

export default LiveChat;