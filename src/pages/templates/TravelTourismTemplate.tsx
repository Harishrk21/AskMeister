import React from 'react';
import { MapPin, Plane, Camera, CheckCircle, ArrowRight, MessageCircle, BarChart3, Zap, Calendar, Bell, Shield, Users, Clock, AlertTriangle, Globe, Star } from 'lucide-react';
import travel1 from '../../assets/travel1.webp';
import travel2 from '../../assets/travel2.webp';
import travel3 from '../../assets/travel3.png';
import travel4 from '../../assets/travel4.png';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const TravelTourismTemplate = () => {
  const features = [
    {
      icon: Calendar,
      title: 'Booking & Itinerary Updates',
      description: 'Keep travelers informed with automated booking confirmations and real-time itinerary updates.',
      benefits: ['Instant booking confirmations', 'Itinerary modifications', 'Flight delay notifications']
    },
    {
      icon: Shield,
      title: 'Travel Safety Alerts',
      description: 'Ensure traveler safety with automated safety alerts and emergency notifications.',
      benefits: ['Weather warnings', 'Local safety updates', 'Emergency contacts']
    },
    {
      icon: Globe,
      title: 'Multi-Language Support',
      description: 'Communicate with international travelers in their preferred language automatically.',
      benefits: ['50+ languages', 'Cultural preferences', 'Local customs info']
    },
    {
      icon: Users,
      title: 'Group Travel Coordination',
      description: 'Coordinate group tours, activities, and transportation with automated messaging.',
      benefits: ['Group notifications', 'Activity reminders', 'Transportation updates']
    },
    {
      icon: AlertTriangle,
      title: 'Emergency Assistance',
      description: 'Provide instant support for travel emergencies and urgent situations.',
      benefits: ['24/7 emergency support', 'Local emergency contacts', 'Medical assistance']
    },
    {
      icon: BarChart3,
      title: 'Guest Experience Analytics',
      description: 'Track guest satisfaction and improve services with automated feedback collection.',
      benefits: ['Real-time feedback', 'Review management', 'Service improvements']
    }
  ];

  const useCases = [
    {
      title: 'Complete Travel Experience',
      description: 'Enhance every step of the traveler journey with automation',
      steps: [
        'Pre-arrival travel tips and requirements',
        'Check-in reminders and digital keys',
        'Local recommendations and attractions',
        'Activity bookings and confirmations',
        'Post-stay feedback collection'
      ],
      image: travel4
    },
    {
      title: 'Tour Guide Automation',
      description: 'Streamline tour operations and enhance guest experiences',
      steps: [
        'Tour schedule and meeting point notifications',
        'Real-time location sharing and updates',
        'Historical facts and cultural insights',
        'Photo opportunities and tips',
        'Tour completion and review requests'
      ],
      image: travel2
    },
    {
      title: 'Hotel Guest Services',
      description: 'Provide seamless hospitality services through WhatsApp',
      steps: [
        'Welcome messages and check-in instructions',
        'Room service and concierge requests',
        'Local dining and entertainment recommendations',
        'Housekeeping and maintenance requests',
        'Check-out process and transportation'
      ],
      image: travel3
    }
  ];

  const benefits = [
    {
      metric: '45%',
      description: 'Increase in guest satisfaction',
      icon: Star
    },
    {
      metric: '60%',
      description: 'Faster response times',
      icon: Zap
    },
    {
      metric: '35%',
      description: 'More repeat bookings',
      icon: Users
    },
    {
      metric: '50%',
      description: 'Reduction in manual tasks',
      icon: Clock
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Hotel Manager',
      company: 'Paradise Resort & Spa',
      content: 'Guest satisfaction scores increased by 45% after implementing WhatsApp automation. Our guests love the instant communication and personalized service.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Carlos Rodriguez',
      role: 'Tour Operations Director',
      company: 'Adventure Tours International',
      content: 'Managing group tours became effortless. Real-time updates and multilingual support helped us serve international travelers much better.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
    }
  ];

  const travelTypes = [
    { name: 'Hotels & Resorts', icon: '🏨' },
    { name: 'Tour Operators', icon: '🚌' },
    { name: 'Travel Agencies', icon: '✈️' },
    { name: 'Adventure Tourism', icon: '🏔️' },
    { name: 'Cruise Lines', icon: '🚢' },
    { name: 'Vacation Rentals', icon: '🏠' }
  ];

  return (
    <>
  <Helmet>
    <title>WhatsApp for Travel & Tourism | Automate Bookings & Support | Ask Meister</title>
    <meta
      name="description"
      content="WhatsApp for travel & tourism: booking automation, itinerary updates, bulk messaging for hotels & tours. 24/7 support. Free trial."
    />
    <meta
      name="keywords"
      content="whatsapp for travel, travel chatbot, tour booking automation, itinerary updates, customer support, tourism marketing, holiday packages"
    />
    <link rel="canonical" href="https://www.askmeister.com/solutions/travel-and-tourism" />
    <meta property="og:title" content="WhatsApp for Travel & Tourism | Automate Bookings & Support" />
    <meta
      property="og:description"
      content="Automate bookings, respond to queries instantly, and provide seamless travel support via WhatsApp for your tourism business."
    />
    <meta property="og:url" content="https://www.askmeister.com/solutions/travel-and-tourism" />
  </Helmet>


    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                  <Plane className="w-4 h-4 mr-2" />
                  Travel & Tourism Solution
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Transform Travel with
                  <span className="text-green-600 block">WhatsApp Automation</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Enhance guest experiences, streamline operations, and boost satisfaction with our specialized 
                  WhatsApp automation platform designed for travel and tourism businesses.
                </p>
              </div>
              
               <div className="flex flex-col sm:flex-row gap-4">
                              <Link
                                to="/pricing"
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
                src={travel1}
                alt="Travel WhatsApp Automation"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-green-600 text-white p-3 rounded-full animate-bounce">
                <MapPin className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              All Travel & Tourism Businesses
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our solution works for all types of travel and tourism businesses
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {travelTypes.map((type, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-green-100 transition-colors">
                  <span className="text-3xl">{type.icon}</span>
                </div>
                <div className="font-semibold text-gray-900 text-sm">{type.name}</div>
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
              Travel Experience Enhancement Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive tools designed for exceptional travel and tourism experiences
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
              Travel Experience Automation
            </h2>
            <p className="text-lg text-gray-600">
              See how travel businesses are enhancing guest experiences with automation
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

      {/* Testimonials */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Travel Professionals Say
            </h2>
            <p className="text-lg text-gray-600">
              Hear from hospitality leaders who transformed their guest experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <p className="text-gray-600 mb-6 italic text-lg">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-green-600">{testimonial.role}</div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Travel Business?
          </h2>
          <p className="text-lg text-green-100 mb-8">
            Join travel companies already using Ask Meister to enhance guest experiences and streamline operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Free Trial
            </button>
            <button
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default TravelTourismTemplate;