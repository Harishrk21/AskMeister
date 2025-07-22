import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, MessageCircle, Mail, Phone } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
const Help = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    {
      category: 'Getting Started',
      questions: [
        {
          question: 'How do I get started with AskMeister?',
          answer: 'Getting started is easy! Sign up for a free account, connect your WhatsApp Business account, and you can start sending messages within minutes. Our onboarding guide will walk you through each step.'
        },
        {
          question: 'Do I need a WhatsApp Business account?',
          answer: 'Yes, you need a WhatsApp Business account to use our service. If you don\'t have one, we\'ll guide you through the setup process during onboarding.'
        },
        {
          question: 'How long does it take to set up?',
          answer: 'Most users can set up their account and send their first message within 10-15 minutes. The WhatsApp Business API approval process may take 1-2 business days.'
        }
      ]
    },
    {
      category: 'Features & Functionality',
      questions: [
        {
          question: 'Can I send messages to international numbers?',
          answer: 'Yes! You can send messages to WhatsApp users worldwide. Just make sure to include the country code when adding contacts.'
        },
        {
          question: 'What types of messages can I send?',
          answer: 'You can send text messages, images, documents, videos, and interactive messages with buttons. All messages must comply with WhatsApp\'s policies.'
        },
        {
          question: 'How do message templates work?',
          answer: 'Message templates are pre-approved message formats required by WhatsApp for business communications. We help you create and get approval for your templates.'
        }
      ]
    },
    {
      category: 'Pricing & Billing',
      questions: [
        {
          question: 'How much does it cost to send messages?',
          answer: 'We charge WhatsApp\'s official API rates with 0% markup. Pricing varies by country and message type. Check our pricing calculator for exact costs.'
        },
        {
          question: 'Can I upgrade or downgrade my plan?',
          answer: 'Yes, you can change your plan at any time. Upgrades take effect immediately, and downgrades take effect at your next billing cycle.'
        },
        {
          question: 'Do you offer refunds?',
          answer: 'We offer a 30-day money-back guarantee for all paid plans. Contact our support team if you\'re not satisfied with our service.'
        }
      ]
    },
    {
      category: 'Technical Support',
      questions: [
        {
          question: 'My messages are not being delivered. What should I do?',
          answer: 'Check that your phone number is verified, your message templates are approved, and you have sufficient credits. Contact support if the issue persists.'
        },
        {
          question: 'How do I integrate with my existing CRM?',
          answer: 'We offer integrations with popular CRMs like HubSpot, Salesforce, and others. You can also use our API for custom integrations.'
        },
        {
          question: 'Is my data secure?',
          answer: 'Yes, we use enterprise-grade security with end-to-end encryption. Your data is stored securely and never shared with third parties.'
        }
      ]
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const filteredFAQs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => 
        q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  const guides = [
    {
      title: 'Quick Start Guide',
      description: 'Get up and running with WhatsApp marketing in 10 minutes',
      time: '10 min read'
    },
    {
      title: 'API Integration Guide',
      description: 'Complete guide to integrating WhatsApp API with your systems',
      time: '15 min read'
    },
    {
      title: 'Automation Workflows',
      description: 'Set up automated sequences and triggers for maximum efficiency',
      time: '12 min read'
    },
    {
      title: 'Message Templates',
      description: 'Create and manage WhatsApp message templates',
      time: '8 min read'
    }
  ];

  return (
     <>
      <Helmet>
        <title>WhatsApp Marketing Help Center | Support & Guides | Meister Notify</title>
        <meta name="description" content="Get help with WhatsApp marketing, chatbots, and automation. Comprehensive guides, FAQs, and 24/7 support for all your business needs." />
        <meta name="keywords" content="whatsapp marketing help, customer support, whatsapp guides, chatbot help, automation support, technical support, user guides, faq" />
        <link rel="canonical" href="https://meisternotify.com/help" />
        <meta property="og:title" content="WhatsApp Marketing Help Center | Support & Guides" />
        <meta property="og:description" content="Comprehensive help and support for WhatsApp marketing, chatbots, and business automation." />
        <meta property="og:url" content="https://meisternotify.com/help" />
      </Helmet>
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#25D366]/10 via-white to-[#128C7E]/5 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#1C1C1C] mb-6">
            How Can We
            <span className="text-[#25D366] block">Help You?</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Find answers to your questions, browse our guides, or get in touch with our support team.
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for help..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-[#25D366] focus:border-transparent"
            />
          </div>
        </div>
      </section>

      {/* Quick Help Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-[#25D366]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-[#25D366]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1C1C1C] mb-2">Live Chat</h3>
              <p className="text-gray-600 mb-4">Get instant help from our support team</p>
              <button className="bg-[#25D366] text-white px-6 py-2 rounded-lg hover:bg-[#128C7E] transition-colors">
                Start Chat
              </button>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-[#1C1C1C] mb-2">Email Support</h3>
              <p className="text-gray-600 mb-4">Send us a detailed message</p>
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                Send Email
              </button>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-[#1C1C1C] mb-2">Phone Support</h3>
              <p className="text-gray-600 mb-4">Talk to our experts directly</p>
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                Call Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How-to Guides */}
      <section className="py-20 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-4">
              How-to Guides
            </h2>
            <p className="text-lg text-gray-600">
              Step-by-step guides to help you get the most out of AskMeister
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guides.map((guide, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <h3 className="text-lg font-semibold text-[#1C1C1C] mb-2">{guide.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{guide.description}</p>
                <span className="text-[#25D366] text-sm font-medium">{guide.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Find quick answers to common questions
            </p>
          </div>
          
          <div className="space-y-8">
            {filteredFAQs.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-xl font-semibold text-[#1C1C1C] mb-4 pb-2 border-b border-gray-200">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => {
                    const globalIndex = categoryIndex * 100 + faqIndex;
                    return (
                      <div key={faqIndex} className="bg-white rounded-lg shadow-md">
                        <button
                          onClick={() => toggleFAQ(globalIndex)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          <span className="font-medium text-[#1C1C1C]">{faq.question}</span>
                          {openFAQ === globalIndex ? (
                            <ChevronUp className="w-5 h-5 text-gray-500" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-500" />
                          )}
                        </button>
                        {openFAQ === globalIndex && (
                          <div className="px-6 pb-4">
                            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
          
          {filteredFAQs.length === 0 && searchTerm && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No results found for "{searchTerm}". Try a different search term or contact our support team.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 bg-[#25D366]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Still Need Help?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Our support team is here to help you succeed with WhatsApp marketing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#25D366] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Contact Support
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#25D366] transition-colors">
              Schedule Call
            </button>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Help;