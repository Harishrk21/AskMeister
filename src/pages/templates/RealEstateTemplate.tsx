import React from 'react';
import { Home, MessageCircle, TrendingUp, CheckCircle, ArrowRight, Bot, BarChart3, Zap, Calendar, Bell, MapPin, Users, Phone, Building } from 'lucide-react';
import realestate from '../../assets/realestate.webp';
import rc from '../../assets/rc.png';
import re1 from '../../assets/re1.webp';
import re2 from '../../assets/re2.webp';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import InternalLinksHub from '../../components/InternalLinksHub';
import SeoBreadcrumbs from '../../components/SeoBreadcrumbs';
const RealEstateTemplate = () => {
  const features = [
    {
      icon: MessageCircle,
      title: 'Bulk WhatsApp Messaging',
      description: 'Send property listings, market updates, and promotional messages to opted-in leads using approved templates.',
      benefits: ['Mass property broadcasts', 'Personalized messaging', 'Automated follow-ups']
    },
    {
      icon: Bot,
      title: 'Property Chatbot',
      description: 'Intelligent chatbot that answers property queries, schedules viewings, and qualifies leads 24/7.',
      benefits: ['Property search assistance', 'Viewing scheduling', 'Lead qualification']
    },
    {
      icon: TrendingUp,
      title: 'Market Analytics',
      description: 'Real-time property market insights and investment opportunities.',
      benefits: ['Market reports', 'Price analytics', 'Investment insights']
    },
    {
      icon: Calendar,
      title: 'Viewing Management',
      description: 'Automated scheduling and reminders for property viewings and client meetings.',
      benefits: ['Automated scheduling', 'Viewing reminders', 'Follow-up sequences']
    },
    {
      icon: Bell,
      title: 'Lead Nurturing',
      description: 'Automated lead nurturing campaigns to convert prospects into buyers.',
      benefits: ['Drip campaigns', 'Lead scoring', 'Conversion tracking']
    },
    {
      icon: MapPin,
      title: 'Location-Based Alerts',
      description: 'Send targeted property alerts based on client location preferences and budget.',
      benefits: ['Location targeting', 'Budget filtering', 'Preference matching']
    }
  ];

  const useCases = [
    {
      title: 'Bulk Property Broadcasting',
      description: 'Reach interested buyers with property listings (subject to opt-in and policies)',
      steps: [
        'Upload property listings with photos and details',
        'Segment audience by budget and location',
        'Send personalized property broadcasts',
        'Track engagement and responses',
        'Follow up with interested prospects'
      ],
      image: realestate
    },
    {
      title: 'Powered Property Chatbot',
      description: 'Automate property inquiries and lead qualification',
      steps: [
        'Deploy intelligent chatbot on WhatsApp',
        'Handle property search queries automatically',
        'Schedule viewings and appointments',
        'Qualify leads based on budget and needs',
        'Transfer hot leads to sales team'
      ],
      image: re1
    },
    {
      title: 'Lead Nurturing Campaigns',
      description: 'Convert prospects into buyers with automated sequences',
      steps: [
        'Create targeted nurturing sequences',
        'Send market updates and property alerts',
        'Share success stories and testimonials',
        'Provide financing and legal guidance',
        'Close deals with personalized offers'
      ],
      image: re2
    }
  ];

  const benefits = [
    {
      metric: 'Speed',
      description: 'Faster first replies',
      icon: TrendingUp
    },
    {
      metric: 'Follow-up',
      description: 'Templates & reminders',
      icon: Zap
    },
    {
      metric: 'Routing',
      description: 'Qualify before site visits',
      icon: BarChart3
    },
    {
      metric: 'Admin',
      description: 'Less repetitive typing',
      icon: Calendar
    }
  ];

  const propertyTypes = [
    { name: 'Residential', icon: '🏠' },
    { name: 'Commercial', icon: '🏢' },
    { name: 'Luxury', icon: '🏰' },
    { name: 'Apartments', icon: '🏬' },
    { name: 'Villas', icon: '🏡' },
    { name: 'Land', icon: '🌍' }
  ];

  return (
    <>
  <Helmet>
    <title>WhatsApp for Real Estate | Automate Inquiries & Follow-ups | Ask Meister</title>
    <meta
      name="description"
      content="WhatsApp for real estate: lead follow-up, visit reminders, and brochures—subject to RERA/ad rules in your region and WhatsApp policies."
    />
    <meta
      name="keywords"
      content="property leads whatsapp, real estate whatsapp automation, whatsapp marketing for real estate, real estate lead nurturing"
    />
    <link rel="canonical" href="https://askmeister.com/whatsapp-automation-for-real-estate" />
    <meta property="og:title" content="WhatsApp for Real Estate | Automate Inquiries & Follow-ups" />
    <meta
      property="og:description"
      content="Use WhatsApp automation to convert real estate leads faster. Automate inquiries, schedule visits, and engage clients easily."
    />
    <meta property="og:url" content="https://askmeister.com/whatsapp-automation-for-real-estate" />
  </Helmet>


    <div className="pt-16">
      <SeoBreadcrumbs items={[{ name: 'WhatsApp automation for real estate', path: '/whatsapp-automation-for-real-estate' }]} />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                  <Home className="w-4 h-4 mr-2" />
                  Real Estate Solution
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Transform Real Estate
                  <span className="text-green-600 block">with WhatsApp API</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Use WhatsApp for faster replies, structured follow-ups, and chatbots where appropriate. Sales outcomes depend on inventory, process, and compliance—not messaging alone.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
  <Link to="/contact">
    <button
      className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center justify-center"
    >
      Start Free Trial
      <ArrowRight className="w-5 h-5 ml-2" />
    </button>
  </Link>
  
  <Link to="/contact">
    <button
      className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 hover:text-white transition-colors"
    >
      Schedule Demo
    </button>
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
                src={rc}
                alt="Real Estate WhatsApp Automation"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-green-600 text-white p-3 rounded-full animate-bounce">
                <MessageCircle className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              All Property Types Covered
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our solution works for all types of real estate properties and markets
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {propertyTypes.map((property, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-green-100 transition-colors">
                  <span className="text-3xl">{property.icon}</span>
                </div>
                <div className="font-semibold text-gray-900 text-sm">{property.name}</div>
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
              Powerful Real Estate Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to dominate your real estate market
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real Estate Solutions That Work
            </h2>
            <p className="text-lg text-gray-600">
              See how agents and developers are scaling their business with WhatsApp
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

      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">No fabricated broker stories</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We do not display unaudited sales claims. WhatsApp is best used for timely responses, document sharing, and visit coordination alongside your existing CRM and legal workflow.
          </p>
        </div>
      </section>

      <InternalLinksHub currentPath="/whatsapp-automation-for-real-estate" />

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Scale Your Real Estate Business?
          </h2>
          <p className="text-lg text-green-100 mb-8">
            Ask Meister supports brokers and developers who want structured WhatsApp follow-up—without promising transaction counts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link
                        to="/contact"
                        className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
                      >
                        Contact for demo
                      </Link>
                      <Link
                        to="/contact"
                        className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
                      >
                        Schedule Demo
                      </Link>
                    </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default RealEstateTemplate;