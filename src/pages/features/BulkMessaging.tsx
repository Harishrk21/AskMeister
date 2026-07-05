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
import InternalLinksHub from '../../components/InternalLinksHub';
import SeoBreadcrumbs from '../../components/SeoBreadcrumbs';

// Import local images
import promoImage from '../../assets/bulks.webp';
import eventImage from '../../assets/image3.png';

const BulkMessaging = () => {
  const features = [
    {
      icon: Send,
      title: 'Instant Broadcasting',
      description: 'Send messages to thousands of contacts instantly with our high-speed delivery engine.',
      benefits: ['Delivery visibility in-product', 'Real-time sending where supported', 'Queue-friendly batching']
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
      metric: 'Templates',
      description: 'Approved WhatsApp template workflows',
      icon: Send
    },
    {
      metric: 'Lists',
      description: 'Segments built from opted-in contacts',
      icon: Target
    },
    {
      metric: 'Reports',
      description: 'Delivery & engagement visibility',
      icon: BarChart3
    },
    {
      metric: 'Compliance',
      description: 'Designed around Meta policies',
      icon: Clock
    }
  ];

  return (
      <>
      <Helmet>
        <title>WhatsApp Bulk Messaging | Broadcasts & Templates | Ask Meister</title>
        <meta name="description" content="Bulk WhatsApp messaging with templates, segmentation, and reporting. Actual throughput depends on WhatsApp limits, approvals, and list quality—contact us to scope volume." />
        <meta name="keywords" content="whatsapp bulk messaging software, bulk whatsapp sender, send whatsapp messages in bulk, whatsapp broadcast tool, whatsapp mass messaging, whatsapp campaign sender" />
        <link rel="canonical" href="https://askmeister.com/whatsapp-bulk-messaging" />
        <meta property="og:title" content="WhatsApp Bulk Messaging | Ask Meister" />
        <meta property="og:description" content="Broadcast campaigns using approved WhatsApp templates, segmentation, and analytics." />
        <meta property="og:url" content="https://askmeister.com/whatsapp-bulk-messaging" />
      </Helmet>
    <div className="page-wrap">
      <SeoBreadcrumbs items={[{ name: 'WhatsApp bulk messaging', path: '/whatsapp-bulk-messaging' }]} />
      {/* Hero Section */}
      <section className="page-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Bulk Messaging Feature
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                  Bulk WhatsApp messaging
                  <span className="text-brand block">Broadcasts &amp; campaigns</span>
                </h1>
                <p className="text-xl text-ink-muted leading-relaxed">
                  Send template-based messages to opted-in audiences. Delivery and engagement depend on Meta policies, template approval, and list quality—not guaranteed rates.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-brand text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-brand-dark transition-colors inline-flex items-center justify-center"
                >
                  Request demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-brand text-brand px-8 py-4 rounded-lg text-lg font-semibold hover:bg-brand hover:text-white transition-colors"
                >
                  Contact Sales
                </Link>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <benefit.icon className="w-6 h-6 text-brand" />
                    </div>
                    <div className="text-2xl font-bold text-brand">{benefit.metric}</div>
                    <div className="text-sm text-ink-muted">{benefit.description}</div>
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
              <div className="absolute -top-4 -right-4 bg-brand text-white p-3 rounded-full animate-bounce">
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Bulk Messaging Features
            </h2>
            <p className="text-lg text-ink-muted max-w-2xl mx-auto">
              Everything you need to create and manage successful bulk messaging campaigns
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="glass-card p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-brand" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-ink-muted mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-ink-muted">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-surface-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Bulk Messaging Use Cases
            </h2>
            <p className="text-lg text-ink-muted">
              See how businesses use bulk messaging to drive engagement and sales
            </p>
          </div>

          <div className="space-y-16">
            {useCases.map((useCase, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
                  <p className="text-lg text-ink-muted mb-6">{useCase.description}</p>

                  <div className="space-y-3">
                    {useCase.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-center">
                        <div className="w-6 h-6 bg-brand text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                          {stepIndex + 1}
                        </div>
                        <span className="text-ink-muted">{step}</span>
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

      <InternalLinksHub currentPath="/whatsapp-bulk-messaging" />

      {/* CTA Section */}
      <section className="py-20 bg-brand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Bulk Messaging?
          </h2>
          <p className="text-lg text-green-100 mb-8">
            Ask Meister helps teams in Tamil Nadu and India run compliant bulk messaging flows—scope fit on a call.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-brand px-8 py-4 rounded-lg text-lg font-semibold hover:bg-surface-elevated transition-colors"
            >
              Contact sales
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-brand transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default BulkMessaging;
