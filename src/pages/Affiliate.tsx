import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { DollarSign, Users, TrendingUp, Gift, CheckCircle, ArrowRight } from 'lucide-react';

const Affiliate = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Partner commissions',
      description: 'Commission structure is shared with approved affiliates—terms depend on your agreement and geography.'
    },
    {
      icon: Users,
      title: 'Recurring potential',
      description: 'Where contracts allow, partners may earn on ongoing subscriptions—exact duration is defined in your affiliate agreement.'
    },
    {
      icon: TrendingUp,
      title: 'Growing channel',
      description: 'WhatsApp is widely used for business messaging in India—help teams adopt it responsibly.'
    },
    {
      icon: Gift,
      title: 'Marketing Materials',
      description: 'Access professional banners, landing pages, and marketing materials to boost conversions.'
    }
  ];

  const commissionTiers = [
    {
      referrals: 'Early referrals',
      commission: 'Rate on approval',
      bonus: 'Outlined in partner agreement'
    },
    {
      referrals: 'Growing volume',
      commission: 'Tier review',
      bonus: 'Based on qualified conversions'
    },
    {
      referrals: 'Established partners',
      commission: 'Custom discussion',
      bonus: 'Subject to compliance & caps'
    }
  ];

  const steps = [
    {
      step: '1',
      title: 'Sign Up',
      description: 'Join our affiliate program for free and get your unique referral link.'
    },
    {
      step: '2',
      title: 'Promote',
      description: 'Share Ask Meister with your audience using our marketing materials.'
    },
    {
      step: '3',
      title: 'Earn',
      description: 'Get paid monthly for every customer you refer who signs up for a paid plan.'
    }
  ];

  const faqs = [
    {
      question: 'How much can I earn?',
      answer: 'Rates and caps are shared only after your application is reviewed. Earnings depend on referred customers, plan types, and your executed affiliate agreement.'
    },
    {
      question: 'When do I get paid?',
      answer: 'Commissions are paid monthly via PayPal or bank transfer. Reach out to confirm current payout terms.'
    },
    {
      question: 'How do I track my referrals?',
      answer: 'You\'ll have access to a comprehensive dashboard showing clicks, conversions, and earnings in real-time.'
    },
    {
      question: 'Can I promote on social media?',
      answer: 'Yes! You can promote on any platform including social media, blogs, YouTube, and email marketing.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Affiliate Program | Ask Meister</title>
        <meta name="description" content="Apply to the Ask Meister affiliate program. Commission terms and materials are provided to approved partners after review." />
        <meta name="keywords" content="ask meister affiliate program, whatsapp marketing affiliate, recurring commission affiliate, saas affiliate program, referral partner program, affiliate marketing whatsapp tools" />
        <link rel="canonical" href="https://www.askmeister.com/affiliate" />
        <meta property="og:title" content="Affiliate Program | Earn with Ask Meister" />
        <meta property="og:description" content="Affiliate program for Ask Meister—commission details provided when you apply and qualify." />
        <meta property="og:url" content="https://www.askmeister.com/affiliate" />
      </Helmet>
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#25D366]/10 via-white to-[#128C7E]/5 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#1C1C1C] mb-6">
            Earn with Our
            <span className="text-[#25D366] block">Affiliate Program</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Promote Ask Meister’s WhatsApp marketing platform. Commission structure and eligibility are shared when you apply—we avoid exaggerated income claims.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#25D366] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#128C7E] transition-colors">
              Join Affiliate Program
            </button>
            <Link
              to="/contact"
              className="border-2 border-[#25D366] text-[#25D366] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#25D366] hover:text-white transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-4">
              Why Join Our Affiliate Program?
            </h2>
            <p className="text-lg text-gray-600">
              Commission details are shared after your application is reviewed
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-12 h-12 bg-[#25D366]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-[#25D366]" />
                </div>
                <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commission Structure */}
      <section className="py-20 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-4">
              Commission Structure
            </h2>
            <p className="text-lg text-gray-600">
              The more you refer, the more you earn
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {commissionTiers.map((tier, index) => (
              <div key={index} className={`bg-white rounded-xl p-8 shadow-lg text-center ${
                index === 1 ? 'ring-2 ring-[#25D366] scale-105' : ''
              }`}>
                {index === 1 && (
                  <div className="bg-[#25D366] text-white px-4 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                    Most Popular
                  </div>
                )}
                <div className="text-3xl font-bold text-[#1C1C1C] mb-2">{tier.commission}</div>
                <div className="text-gray-600 mb-4">Commission Rate</div>
                <div className="text-lg font-semibold text-[#25D366] mb-4">{tier.referrals} Referrals</div>
                <div className="text-sm text-gray-500 mb-6">{tier.bonus}</div>
                <ul className="text-left space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#25D366] mr-2" />
                    <span className="text-sm">Recurring monthly payments</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#25D366] mr-2" />
                    <span className="text-sm">Real-time tracking</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#25D366] mr-2" />
                    <span className="text-sm">Marketing materials</span>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600">
              Start earning in just 3 simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-4 transform translate-x-1/2">
                    <ArrowRight className="w-6 h-6 text-[#25D366]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F7F7F7]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-700">
          <h2 className="text-3xl font-bold text-[#1C1C1C] mb-4">Partner stories</h2>
          <p>
            We only publish named affiliate earnings with written consent. Ask us for the current partner overview and agreement terms after you apply.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about our affiliate program
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
            Ready to Start Earning?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Join our affiliate program today and start earning recurring commissions from day one.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#25D366] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Join Now - It's Free
            </button>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#25D366] transition-colors"
            >
              Have Questions?
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Affiliate;