import React from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, Users, TrendingUp, Gift, CheckCircle, ArrowRight } from 'lucide-react';

const Affiliate = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: 'High Commissions',
      description: 'Earn up to 30% recurring commission on every referral that converts to a paid plan.'
    },
    {
      icon: Users,
      title: 'Lifetime Earnings',
      description: 'Get paid for as long as your referrals remain active customers - no limits!'
    },
    {
      icon: TrendingUp,
      title: 'Growing Market',
      description: 'WhatsApp marketing is exploding. Join the fastest-growing communication channel.'
    },
    {
      icon: Gift,
      title: 'Marketing Materials',
      description: 'Access professional banners, landing pages, and marketing materials to boost conversions.'
    }
  ];

  const commissionTiers = [
    {
      referrals: '1-10',
      commission: '20%',
      bonus: 'Welcome bonus: $50'
    },
    {
      referrals: '11-25',
      commission: '25%',
      bonus: 'Performance bonus: $200'
    },
    {
      referrals: '26+',
      commission: '30%',
      bonus: 'Elite bonus: $500'
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
      answer: 'You can earn up to 30% recurring commission on every paid customer you refer. Top affiliates earn $5,000+ per month.'
    },
    {
      question: 'When do I get paid?',
      answer: 'Commissions are paid monthly via PayPal or bank transfer. Minimum payout is $100.'
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

  const testimonials = [
    {
      name: 'Mark Thompson',
      role: 'Digital Marketing Consultant',
      earnings: '$3,200/month',
      quote: 'Ask Meister\'s affiliate program has been a game-changer for my business. The commissions are generous and the product sells itself.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Sarah Johnson',
      role: 'Business Coach',
      earnings: '$2,800/month',
      quote: 'I love recommending tools that actually help my clients grow. Ask Meister delivers results, and the affiliate program is fantastic.',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#25D366]/10 via-white to-[#128C7E]/5 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#1C1C1C] mb-6">
            Earn with Our
            <span className="text-[#25D366] block">Affiliate Program</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of partners earning recurring commissions by promoting 
            the #1 WhatsApp marketing platform.
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
              Earn generous commissions while helping businesses grow
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

      {/* Testimonials */}
      <section className="py-20 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              See what our top affiliates are saying
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-[#1C1C1C]">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                    <div className="text-[#25D366] font-bold text-sm">{testimonial.earnings}</div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
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
  );
};

export default Affiliate;