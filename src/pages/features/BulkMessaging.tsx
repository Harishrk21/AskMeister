import React from 'react';
import { Link } from 'react-router-dom';
import {
  MessageCircle,
  Users,
  Zap,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Clock,
  Target,
  Send,
  Filter
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

// Import local images
import promoImage from '../../assets/bulks.webp';
import eventImage from '../../assets/image3.png';

const BulkMessaging = () => {
  const features = [
    {
      icon: Send,
      title: 'Instant Broadcasting',
      description: 'Send messages to thousands of contacts instantly with our high-speed delivery engine.',
      benefits: ['99.9% delivery rate', 'Real-time sending', 'No delays or queues']
    },
    {
      icon: Target,
      title: 'Smart Targeting',
      description: 'Target specific audience segments based on demographics, behavior, and preferences.',
      benefits: ['Advanced segmentation', 'Custom filters', 'Behavioral targeting']
    },
    {
      icon: Filter,
      title: 'Contact Management',
      description: 'Organize and manage your contacts with tags, custom fields, and smart lists.',
      benefits: ['Unlimited contacts', 'Custom fields', 'Smart filtering']
    },
    {
      icon: BarChart3,
      title: 'Delivery Analytics',
      description: 'Track message delivery, read rates, and engagement with detailed analytics.',
      benefits: ['Real-time tracking', 'Engagement metrics', 'Performance insights']
    },
    {
      icon: Clock,
      title: 'Scheduled Campaigns',
      description: 'Schedule your broadcast campaigns for optimal timing and maximum engagement.',
      benefits: ['Time zone optimization', 'Recurring campaigns', 'Smart scheduling']
    },
    {
      icon: Zap,
      title: 'Template Management',
      description: 'Create, manage, and get approval for WhatsApp message templates easily.',
      benefits: ['Pre-approved templates', 'Rich media support', 'Template library']
    }
  ];

  const useCases = [
    {
      title: 'Product Launch Campaign',
      description: 'Announce new products to your entire customer base',
      steps: [
        'Create engaging product announcement template',
        'Segment customers by purchase history',
        'Schedule campaign for optimal timing',
        'Track engagement and conversions',
        'Follow up with interested customers'
      ],
      image: 'https://www.wati.io/wp-content/uploads/2024/11/Broadcast-new1.webp' // Keep as-is
    },
    {
      title: 'Promotional Offers',
      description: 'Send time-sensitive offers and discounts',
      steps: [
        'Design attractive offer templates',
        'Target high-value customer segments',
        'Set up urgency-driven messaging',
        'Monitor real-time performance',
        'Optimize based on response rates'
      ],
      image: promoImage
    },
    {
      title: 'Event Invitations',
      description: 'Invite customers to events and webinars',
      steps: [
        'Create compelling event invitations',
        'Segment by location and interests',
        'Send reminder sequences',
        'Track RSVPs and attendance',
        'Follow up with attendees'
      ],
      image: eventImage
    }
  ];

  const benefits = [
    {
      metric: '10,000+',
      description: 'Messages per minute',
      icon: Send
    },
    {
      metric: '99.9%',
      description: 'Delivery success rate',
      icon: Target
    },
    {
      metric: '5x',
      description: 'Higher engagement than email',
      icon: BarChart3
    },
    {
      metric: '24/7',
      description: 'Campaign monitoring',
      icon: Clock
    }
  ];

  return (
      <>
      <Helmet>
        <title>WhatsApp Bulk Messaging | Send Thousands of Messages Instantly | Ask Meister</title>
        <meta name="description" content="Bulk WhatsApp messaging: send thousands of messages instantly. WhatsApp bulk sender with 99.9% delivery, templates & analytics. Start free trial." />
        <meta name="keywords" content="whatsapp bulk messaging, bulk whatsapp sender, mass whatsapp messaging, whatsapp broadcast, bulk messaging software, whatsapp marketing campaigns, promotional messages" />
        <link rel="canonical" href="https://www.askmeister.com/features/bulk-messaging" />
        <meta property="og:title" content="WhatsApp Bulk Messaging | Send Thousands Instantly" />
        <meta property="og:description" content="Professional bulk messaging solution with 99.9% delivery rate and smart targeting." />
        <meta property="og:url" content="https://www.askmeister.com/features/bulk-messaging" />
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
                  Bulk Messaging Feature
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Reach Thousands with
                  <span className="text-green-600 block">Bulk WhatsApp Messages</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Send personalized messages to thousands of contacts instantly. Our powerful bulk messaging 
                  engine ensures high delivery rates and maximum engagement for your campaigns.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center justify-center"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/pricing"
                  className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 hover:text-white transition-colors"
                >
                  See Pricing
                </Link>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <benefit.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="text-2xl font-bold text-green-600">{benefit.metric}</div>
                    <div className="text-sm text-gray-600">{benefit.description}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="https://www.wati.io/wp-content/uploads/2024/11/Broadcast-new1.webp"
                alt="Bulk Messaging Dashboard"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-green-600 text-white p-3 rounded-full animate-bounce">
                <Send className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Bulk Messaging Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to create and manage successful bulk messaging campaigns
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

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Bulk Messaging Use Cases
            </h2>
            <p className="text-lg text-gray-600">
              See how businesses use bulk messaging to drive engagement and sales
            </p>
          </div>

          <div className="space-y-16">
            {useCases.map((useCase, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                  <p className="text-lg text-gray-600 mb-6">{useCase.description}</p>

                  <div className="space-y-3">
                    {useCase.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-center">
                        <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                          {stepIndex + 1}
                        </div>
                        <span className="text-gray-700">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <img
                    src={useCase.image}
                    alt={useCase.title}
                    className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Bulk Messaging?
          </h2>
          <p className="text-lg text-green-100 mb-8">
            Join thousands of businesses already using our bulk messaging feature to grow their customer engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Free Trial
            </Link>
            <Link
              to="/pricing"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default BulkMessaging;
