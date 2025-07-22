import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, MessageCircle, Users, Zap, BarChart3, Bot, Shield } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
const Pricing = () => {
  const features = [
    { icon: MessageCircle, text: 'Unlimited WhatsApp Messages' },
    { icon: Users, text: 'Unlimited Contacts' },
    { icon: Bot, text: 'AI-Powered Chatbots' },
    { icon: Zap, text: 'Marketing Automation' },
    { icon: BarChart3, text: 'Advanced Analytics & Reports' },
    { icon: Shield, text: 'WhatsApp Business API Access' },
    { icon: Users, text: 'Team Collaboration Tools' },
    { icon: MessageCircle, text: 'Bulk Broadcasting' },
    { icon: Zap, text: 'Custom Integrations' },
    { icon: BarChart3, text: 'Real-time Delivery Tracking' },
    { icon: Bot, text: 'Template Management' },
    { icon: Shield, text: '24/7 Priority Support' }
  ];

  const faqs = [
    {
      question: 'What\'s included in the ₹8,000/month plan?',
      answer: 'Everything! Unlimited messages, contacts, AI chatbots, automation, analytics, team collaboration, and 24/7 support. No hidden costs or usage limits.'
    },
    {
      question: 'Are there any setup fees?',
      answer: 'No setup fees! We provide free onboarding, WhatsApp API setup, and training to get you started quickly.'
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes, you can cancel anytime. No long-term contracts or cancellation fees. We believe in earning your business every month.'
    },
    {
      question: 'Do you provide WhatsApp API approval?',
      answer: 'Yes, we handle the complete WhatsApp Business API approval process for you, including documentation and verification.'
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes! We offer a 7-day free trial with full access to all features. No credit card required to start.'
    },
    {
      question: 'What kind of support do you provide?',
      answer: '24/7 priority support via WhatsApp, email, and phone. Plus free training sessions and dedicated account manager.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>WhatsApp Marketing Pricing | ₹8,000/month All Features | Trusted WhatsApp API</title>
        <meta name="description" content="Simple pricing for WhatsApp marketing platform. ₹8,000/month includes AI chatbots, bulk messaging, automation, analytics. Trusted WhatsApp API with no hidden costs." />
        <meta name="keywords" content="whatsapp marketing pricing, whatsapp api pricing, chatbot pricing, bulk messaging cost, whatsapp automation pricing, business messaging rates, affordable whatsapp marketing" />
        <link rel="canonical" href="https://askmeister.com/pricing" />
        <meta property="og:title" content="WhatsApp Marketing Pricing | ₹8,000/month All Features" />
        <meta property="og:description" content="Simple, transparent pricing for complete WhatsApp marketing solution. All features included." />
        <meta property="og:url" content="https://askmeister.com/pricing" />
      </Helmet>
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#25D366]/10 via-white to-[#128C7E]/5 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#1C1C1C] mb-6">
            Simple, All-Inclusive
            <span className="text-[#25D366] block">Pricing</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            One plan, all features. No hidden costs, no usage limits. 
            Everything you need to grow your business with WhatsApp marketing.
          </p>
        </div>
      </section>

      {/* Pricing Card */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl border-2 border-[#25D366] relative overflow-hidden">
            {/* Popular Badge */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-[#25D366] text-white px-6 py-2 rounded-b-lg text-sm font-medium">
              Most Popular Plan
            </div>
            
            <div className="p-12 text-center">
              <h2 className="text-3xl font-bold text-[#1C1C1C] mb-4">Standard Plan</h2>
              <p className="text-gray-600 mb-8">Perfect for businesses of all sizes</p>
              
              <div className="mb-8">
                <span className="text-6xl font-bold text-[#25D366]">₹8,000</span>
                <span className="text-xl text-gray-500 ml-2">/Year</span>
              </div>
              
              <div className="mb-8">
                <Link
                  to="/contact"
                  className="bg-[#25D366] text-white px-12 py-4 rounded-lg text-xl font-semibold hover:bg-[#128C7E] transition-colors inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Start Free Trial
                  <ArrowRight className="w-6 h-6 ml-2" />
                </Link>
              </div>
              
              <p className="text-sm text-gray-500 mb-8">
                7-day free trial • No credit card required • Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-4">
              Everything Included
            </h2>
            <p className="text-lg text-gray-600">
              All features, no limits, no extra costs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#25D366]/10 rounded-lg flex items-center justify-center mr-4">
                    <feature.icon className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <span className="font-medium text-[#1C1C1C]">{feature.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-4">
              Why Our Pricing is Different
            </h2>
            <p className="text-lg text-gray-600">
              We believe in transparent, value-based pricing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✅</span>
              </div>
              <h3 className="text-xl font-semibold text-[#1C1C1C] mb-2">No Hidden Costs</h3>
              <p className="text-gray-600">₹8,000/month includes everything. No surprise charges, no usage limits, no extra fees.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-[#1C1C1C] mb-2">All Features Included</h3>
              <p className="text-gray-600">Get enterprise-level features at a fraction of the cost. No need to upgrade for advanced features.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💪</span>
              </div>
              <h3 className="text-xl font-semibold text-[#1C1C1C] mb-2">Unlimited Usage</h3>
              <p className="text-gray-600">Send unlimited messages to unlimited contacts. Scale your business without worrying about costs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 bg-[#F7F7F7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[#1C1C1C] mb-4">
                Calculate Your ROI
              </h2>
              <p className="text-lg text-gray-600">
                See how much you can save and earn with AskMeister
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-[#25D366]/10 p-6 rounded-lg">
                <div className="text-3xl font-bold text-[#25D366] mb-2">₹8,000</div>
                <div className="text-sm text-gray-600">Monthly Investment</div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">3x</div>
                <div className="text-sm text-gray-600">Average ROI Increase</div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">₹24,000+</div>
                <div className="text-sm text-gray-600">Average Monthly Returns</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about our pricing
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-[#1C1C1C] mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#25D366]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Start your 7-day free trial today. No credit card required, no setup fees.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-[#25D366] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a
              href="https://wa.me/919876543210?text=Hi, I want to know more about AskMeister pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#25D366] transition-colors inline-flex items-center justify-center"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Pricing;