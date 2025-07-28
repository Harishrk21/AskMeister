import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, TrendingUp, Eye, CheckCircle, ArrowRight, MessageCircle, Users, Target, Clock, PieChart } from 'lucide-react';
import analytics from '../../assets/analytics.png';
import { Helmet } from 'react-helmet-async';
const Analytics = () => {
  const features = [
    {
      icon: BarChart3,
      title: 'Real-time Dashboard',
      description: 'Monitor your WhatsApp campaigns with live data and instant insights.',
      benefits: ['Live campaign tracking', 'Real-time metrics', 'Instant notifications']
    },
    {
      icon: TrendingUp,
      title: 'Performance Analytics',
      description: 'Track delivery rates, open rates, click-through rates, and conversion metrics.',
      benefits: ['Delivery tracking', 'Engagement metrics', 'Conversion analysis']
    },
    {
      icon: Users,
      title: 'Audience Insights',
      description: 'Understand your audience behavior, preferences, and engagement patterns.',
      benefits: ['Demographic analysis', 'Behavior tracking', 'Engagement patterns']
    },
    {
      icon: PieChart,
      title: 'Campaign Reports',
      description: 'Generate detailed reports for individual campaigns and overall performance.',
      benefits: ['Custom reports', 'Export options', 'Scheduled reports']
    },
    {
      icon: Target,
      title: 'ROI Tracking',
      description: 'Measure return on investment and track revenue generated from campaigns.',
      benefits: ['Revenue tracking', 'ROI calculation', 'Cost analysis']
    },
    {
      icon: Clock,
      title: 'Historical Data',
      description: 'Access historical data and trends to make informed marketing decisions.',
      benefits: ['Data retention', 'Trend analysis', 'Historical comparisons']
    }
  ];

  const metrics = [
    {
      title: 'Message Delivery',
      description: 'Track successful message deliveries',
      icon: '📨',
      value: '99.9%'
    },
    {
      title: 'Open Rates',
      description: 'Monitor message open and read rates',
      icon: '👁️',
      value: '95%'
    },
    {
      title: 'Response Rate',
      description: 'Measure customer engagement',
      icon: '💬',
      value: '45%'
    },
    {
      title: 'Conversion Rate',
      description: 'Track sales and conversions',
      icon: '🎯',
      value: '12%'
    }
  ];

  const benefits = [
    {
      metric: '360°',
      description: 'Complete campaign visibility',
      icon: Eye
    },
    {
      metric: 'Real-time',
      description: 'Live data updates',
      icon: Clock
    },
    {
      metric: '50+',
      description: 'Analytics metrics',
      icon: BarChart3
    },
    {
      metric: '24/7',
      description: 'Continuous monitoring',
      icon: TrendingUp
    }
  ];

  return (
      <>
      <Helmet>
        <title>WhatsApp Marketing Analytics | Business Insights & Performance Tracking | Ask Meister</title>
        <meta name="description" content="Get deep business insights with WhatsApp marketing analytics. Track performance, engagement metrics, ROI, and campaign success with real-time reporting." />
        <meta name="keywords" content="whatsapp analytics, business insights, marketing analytics, performance tracking, whatsapp metrics, campaign analytics, roi tracking, engagement analytics, marketing reports" />
        <link rel="canonical" href="https://askmeister.com/features/analytics" />
        <meta property="og:title" content="WhatsApp Marketing Analytics | Business Insights" />
        <meta property="og:description" content="Advanced analytics and business insights for WhatsApp marketing campaigns and customer engagement." />
        <meta property="og:url" content="https://askmeister.com/features/analytics" />
      </Helmet>
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Analytics Feature
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Advanced WhatsApp
                  <span className="text-green-600 block">Analytics & Insights</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Get deep insights into your WhatsApp marketing performance with comprehensive 
                  analytics, real-time tracking, and actionable data to optimize your campaigns.
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
                  to="/contact"
                  className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 hover:text-white transition-colors"
                >
                  Schedule Demo
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
                src={analytics}
                alt="Analytics Dashboard"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-green-600 text-white p-3 rounded-full animate-pulse">
                <BarChart3 className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Performance Metrics
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Track the metrics that matter most for your WhatsApp marketing success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 text-center">
                <div className="text-4xl mb-4">{metric.icon}</div>
                <div className="text-3xl font-bold text-green-600 mb-2">{metric.value}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{metric.title}</h3>
                <p className="text-gray-600 text-sm">{metric.description}</p>
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
              Comprehensive Analytics Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to measure and optimize your WhatsApp marketing performance
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

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Deep Insights?
          </h2>
          <p className="text-lg text-green-100 mb-8">
            Start tracking your WhatsApp marketing performance with our advanced analytics platform.
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

export default Analytics;