import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Bot, Clock, CheckCircle, ArrowRight, MessageCircle, Users, Target, Settings, Workflow } from 'lucide-react';
import automation from '../../assets/Automation-2.webp';
import { Helmet } from 'react-helmet-async';
const Automation = () => {
  const features = [
    {
      icon: Bot,
      title: 'AI-Powered Chatbots',
      description: 'Create intelligent chatbots that understand customer queries and respond naturally.',
      benefits: ['Natural language processing', '24/7 availability', 'Multi-language support']
    },
    {
      icon: Workflow,
      title: 'Visual Workflow Builder',
      description: 'Design complex automation workflows with our intuitive drag-and-drop builder.',
      benefits: ['No coding required', 'Visual flow design', 'Conditional logic']
    },
    {
      icon: Clock,
      title: 'Smart Triggers',
      description: 'Set up automated responses based on time, user behavior, or specific events.',
      benefits: ['Time-based triggers', 'Behavior triggers', 'Event-based automation']
    },
    {
      icon: Target,
      title: 'Personalized Sequences',
      description: 'Create personalized message sequences that adapt to customer responses.',
      benefits: ['Dynamic personalization', 'Response-based flows', 'Custom variables']
    },
    {
      icon: Users,
      title: 'Lead Nurturing',
      description: 'Automatically nurture leads through the sales funnel with targeted messaging.',
      benefits: ['Automated follow-ups', 'Lead scoring', 'Conversion tracking']
    },
    {
      icon: Settings,
      title: 'Integration Hub',
      description: 'Connect with your favorite tools and automate data flow between platforms.',
      benefits: ['CRM integration', 'E-commerce sync', 'Custom webhooks']
    }
  ];

  const automationTypes = [
    {
      title: 'Welcome Series',
      description: 'Automatically greet new subscribers and introduce your brand',
      icon: '👋',
      example: 'New subscriber → Welcome message → Company intro → Product showcase → Special offer'
    },
    {
      title: 'Abandoned Cart Recovery',
      description: 'Win back customers who left items in their cart',
      icon: '🛒',
      example: 'Cart abandoned → Reminder after 1 hour → Discount offer after 24 hours → Final reminder'
    },
    {
      title: 'Customer Support',
      description: 'Provide instant support with AI-powered responses',
      icon: '🎧',
      example: 'Support query → AI analysis → Automated response → Escalate to human if needed'
    },
    {
      title: 'Birthday Campaigns',
      description: 'Send personalized birthday wishes with special offers',
      icon: '🎂',
      example: 'Birthday detected → Personalized message → Special discount → Follow-up reminder'
    }
  ];

  const benefits = [
    {
      metric: '80%',
      description: 'Reduction in response time',
      icon: Clock
    },
    {
      metric: '24/7',
      description: 'Automated availability',
      icon: Bot
    },
    {
      metric: '3x',
      description: 'Increase in conversions',
      icon: Target
    },
    {
      metric: '90%',
      description: 'Customer satisfaction',
      icon: Users
    }
  ];

  return (
     <>
      <Helmet>
        <title>WhatsApp Marketing Automation | AI-Powered Workflows | AskMeister</title>
        <meta name="description" content="Automate WhatsApp marketing with AI-powered workflows. 24/7 customer engagement, lead nurturing, and business automation for maximum ROI." />
        <meta name="keywords" content="whatsapp automation, marketing automation, whatsapp workflows, ai automation, business automation, customer engagement automation, lead nurturing, automated messaging" />
        <link rel="canonical" href="https://askmeister.com/features/automation" />
        <meta property="og:title" content="WhatsApp Marketing Automation | AI-Powered Workflows" />
        <meta property="og:description" content="Automate your WhatsApp marketing with intelligent workflows and AI-powered customer engagement." />
        <meta property="og:url" content="https://askmeister.com/features/automation" />
      </Helmet>
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                  <Zap className="w-4 h-4 mr-2" />
                  Automation Feature
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Automate Your WhatsApp
                  <span className="text-green-600 block">Marketing Workflows</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Create intelligent automation workflows that engage customers, nurture leads, 
                  and drive conversions 24/7 without manual intervention.
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
                src={automation}
                alt="Automation Dashboard"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-green-600 text-white p-3 rounded-full animate-pulse">
                <Zap className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Automation Workflows
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pre-built automation templates for common business scenarios
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {automationTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-4">{type.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-900">{type.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm font-medium text-gray-700 mb-2">Example Flow:</div>
                  <div className="text-sm text-gray-600">{type.example}</div>
                </div>
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
              Advanced Automation Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Powerful tools to create sophisticated automation workflows
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
            Ready to Automate Your WhatsApp Marketing?
          </h2>
          <p className="text-lg text-green-100 mb-8">
            Start creating intelligent automation workflows that work 24/7 to grow your business.
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

export default Automation;