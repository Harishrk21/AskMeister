import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, X, ArrowRight, MessageCircle, Zap, Shield, BarChart3, Users, Clock, Play, Building, GraduationCap, ShoppingCart, Stethoscope, Hammer, Wheat } from 'lucide-react';
import allinone from '../assets/allinone.png';
import chatbot from '../assets/chatbot.png';
import bulks from '../assets/bulks.webp';
import analytics from '../assets/analytics.png';
import ecomm from '../assets/ecomm.webp';
import hc from '../assets/hc.webp';
import edusample from '../assets/edusample.webp';
import construction from '../assets/construction.webp';
import agri from '../assets/agri.jpeg';
import banking from '../assets/banking.jpg';

const WhatsAppAPI = () => {
  const benefits = [
    {
      icon: Shield,
      title: 'Official WhatsApp Business API',
      description: 'Direct integration with WhatsApp Business API for maximum reliability and compliance.'
    },
    {
      icon: Zap,
      title: '0% Markup on API Costs',
      description: 'Pay only WhatsApp\'s official rates. No hidden fees or markup on conversation costs.'
    },
    {
      icon: BarChart3,
      title: 'Real-time Delivery Tracking',
      description: 'Monitor message delivery, read receipts, and engagement metrics in real-time.'
    },
    {
      icon: Users,
      title: 'Advanced Contact Management',
      description: 'Organize contacts with tags, custom fields, and smart segmentation capabilities.'
    },
    {
      icon: MessageCircle,
      title: 'Rich Message Templates',
      description: 'Create interactive messages with buttons, images, documents, and quick replies.'
    },
    {
      icon: Clock,
      title: 'Automated Workflows',
      description: 'Set up chatbots, auto-replies, and complex automation sequences.'
    }
  ];

  const comparison = [
    {
      feature: 'Message Delivery Rate',
      official: '99.9%',
      unofficial: '60-80%',
      description: 'Official API ensures highest delivery rates'
    },
    {
      feature: 'Account Safety',
      official: 'Completely Safe',
      unofficial: 'Risk of Ban',
      description: 'No risk of WhatsApp account suspension'
    },
    {
      feature: 'Message Templates',
      official: 'Pre-approved Templates',
      unofficial: 'Any Message',
      description: 'Compliance with WhatsApp policies'
    },
    {
      feature: 'Support & Reliability',
      official: '24/7 Enterprise Support',
      unofficial: 'Limited Support',
      description: 'Direct support from WhatsApp team'
    },
    {
      feature: 'Business Verification',
      official: 'Green Tick Verified',
      unofficial: 'No Verification',
      description: 'Official business verification badge'
    }
  ];

  const industries = [
    {
      icon: ShoppingCart,
      title: 'E-commerce & Retail',
      description: 'Order confirmations, shipping updates, abandoned cart recovery, product recommendations',
      image: ecomm,
      route: '/solutions/ecommerce',
      chatbots: [
        'Product catalog browsing',
        'Order tracking and updates',
        'Customer support automation',
        'Personalized recommendations'
      ]
    },
    {
      icon: Stethoscope,
      title: 'Healthcare & Hospitals',
      description: 'Appointment booking, test results, medication reminders, department coordination',
      image: hc,
      route: '/solutions/healthcare',
      chatbots: [
        'Appointment scheduling for all departments',
        'Symptom checker and triage',
        'Prescription reminders',
        'Lab results delivery'
      ]
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Course updates, assignment reminders, parent communication, student support',
      image: edusample,
      route: '/solutions/education',
      chatbots: [
        'Course enrollment assistance',
        'Assignment and exam reminders',
        'Grade notifications',
        'Parent-teacher communication'
      ]
    },
    {
      icon: Hammer,
      title: 'Construction',
      description: 'Project updates, safety alerts, equipment tracking, team coordination',
      image: construction,
      route: '/solutions/construction',
      chatbots: [
        'Project status updates',
        'Safety protocol reminders',
        'Equipment booking system',
        'Worker attendance tracking'
      ]
    },
    {
      icon: Wheat,
      title: 'Agriculture',
      description: 'Weather alerts, crop monitoring, market prices, farming tips',
      image: agri,
      route: '/solutions/agriculture',
      chatbots: [
        'Weather and crop advisories',
        'Market price updates',
        'Farming best practices',
        'Equipment rental assistance'
      ]
    },
    {
      icon: Building,
      title: 'Financial Services',
      description: 'Transaction alerts, payment reminders, account updates, investment tips',
      image: banking,
      route: '/solutions/financial',
      chatbots: [
        'Account balance inquiries',
        'Transaction notifications',
        'Loan application assistance',
        'Investment portfolio updates'
      ]
    }
  ];

  return (
     <>
      <Helmet>
        <title>Trusted WhatsApp Business API | Official WhatsApp API Partner | Meister Notify</title>
        <meta name="description" content="Official WhatsApp Business API integration with 99.9% delivery rate. Trusted WhatsApp API for business messaging, chatbots, and marketing automation." />
        <meta name="keywords" content="trusted whatsapp api, whatsapp business api, official whatsapp api, whatsapp api integration, business messaging api, whatsapp cloud api, reliable whatsapp api" />
        <link rel="canonical" href="https://meisternotify.com/whatsapp-api" />
        <meta property="og:title" content="Trusted WhatsApp Business API | Official Partner" />
        <meta property="og:description" content="Get access to official WhatsApp Business API with maximum reliability and compliance." />
        <meta property="og:url" content="https://meisternotify.com/whatsapp-api" />
      </Helmet>
    <div className="pt-16">
      {/* Hero Section */}
     <section className="bg-gradient-to-br from-[#25D366]/10 via-white to-[#128C7E]/5 py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
      {/* Left Content */}
      <div className="text-center md:text-left">
        <div className="inline-flex items-center bg-[#25D366]/10 text-[#25D366] px-4 py-2 rounded-full text-sm font-medium mb-6">
          <Shield className="w-4 h-4 mr-2" />
          Official WhatsApp Business API Partner
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-[#1C1C1C] mb-6">
          WhatsApp Business API
          <span className="text-[#25D366] block">Made Simple</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Connect with your customers through the official WhatsApp Business API. 
          Enjoy maximum deliverability, enhanced security, and zero markup on API costs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Link
            to="/pricing"
            className="bg-[#25D366] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#128C7E] transition-colors"
          >
            Get API Access
          </Link>
          <Link
            to="/contact"
            className="border-2 border-[#25D366] text-[#25D366] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#25D366] hover:text-white transition-colors"
          >
            Schedule Demo
          </Link>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex justify-center md:justify-end">
        <img
          src={allinone}
          alt="AskMeister Dashboard"
          className="w-full max-w-md md:max-w-lg rounded-2xl shadow-2xl"
        />
      </div>
    </div>
  </div>
</section>

      {/* Demo Videos Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-4">
              See Our Platform in Action
            </h2>
            <p className="text-lg text-gray-600">
              Watch how businesses use our WhatsApp Cloud API integration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                <img 
                  src={bulks}
                  alt="API Setup Demo"
                  className="w-full h-full object-cover"
                />
                {/* <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <button className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center hover:bg-[#128C7E] transition-colors">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </button>
                </div> */}
              </div>
              <h3 className="text-lg font-semibold text-[#1C1C1C] mb-2">Bulk Messaging</h3>
              <p className="text-gray-600 text-sm">Connect your WhatsApp Business account in under 5 minutes</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                <img 
                  src={chatbot}
                  alt="Chatbot Demo"
                  className="w-full h-full object-cover"
                />
                {/* <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <button className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center hover:bg-[#128C7E] transition-colors">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </button>
                </div> */}
              </div>
              <h3 className="text-lg font-semibold text-[#1C1C1C] mb-2">Smart Chatbots</h3>
              <p className="text-gray-600 text-sm">Build intelligent chatbots for any industry or use case</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                <img 
                  src={analytics}
                  alt="Analytics Demo"
                  className="w-full h-full object-cover"
                />
                {/* <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <button className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center hover:bg-[#128C7E] transition-colors">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </button>
                </div> */}
              </div>
              <h3 className="text-lg font-semibold text-[#1C1C1C] mb-2">Real-time Analytics</h3>
              <p className="text-gray-600 text-sm">Track performance with detailed insights and reporting</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-4">
              Why Choose Official WhatsApp API?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the full power of WhatsApp Business API with enterprise-grade features and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-12 h-12 bg-[#25D366]/10 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-[#25D366]" />
                </div>
                <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry-Specific Chatbots */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-4">
              Industry-Specific Chatbot Solutions
            </h2>
            <p className="text-lg text-gray-600">
              Tailored chatbots for every industry with specialized features and workflows
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 rounded-lg flex items-center justify-center">
                    <industry.icon className="w-6 h-6 text-[#25D366]" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#1C1C1C] mb-2">{industry.title}</h3>
                  <p className="text-gray-600 mb-4">{industry.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-[#1C1C1C] text-sm">Chatbot Features:</h4>
                    {industry.chatbots.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-[#25D366] mr-2 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to={industry.route}
                    className="w-full mt-4 bg-[#25D366] text-white py-2 rounded-lg hover:bg-[#128C7E] transition-colors inline-flex items-center justify-center"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-4">
              Official API vs Unofficial Tools
            </h2>
            <p className="text-lg text-gray-600">
              See why businesses choose the official WhatsApp Business API
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-[#25D366]">Official API</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Unofficial Tools</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {comparison.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div>
                          <div className="font-medium text-gray-900">{item.feature}</div>
                          <div className="text-sm text-gray-500">{item.description}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-[#25D366] mr-2" />
                          <span className="font-medium text-[#25D366]">{item.official}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center">
                          <X className="w-5 h-5 text-red-500 mr-2" />
                          <span className="font-medium text-red-500">{item.unofficial}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#25D366]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started with WhatsApp API?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Join thousands of businesses using our official WhatsApp Business API integration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/pricing"
              className="bg-white text-[#25D366] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Get API Access Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#25D366] transition-colors"
            >
              Talk to Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default WhatsAppAPI;