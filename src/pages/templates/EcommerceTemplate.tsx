import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Package, TrendingUp, CheckCircle, ArrowRight, MessageCircle, BarChart3, Zap, CreditCard, Truck, Star, Gift, Users, Clock } from 'lucide-react';
import atoz from '../../assets/atoz.png';
import cartabandoned from '../../assets/cartabandoned.webp';
import crprogram from '../../assets/crprogram.webp';
import { Helmet } from 'react-helmet-async';
const EcommerceTemplate = () => {
  const features = [
    {
      icon: Package,
      title: 'Order Management Automation',
      description: 'Automate order confirmations, shipping updates, and delivery notifications through WhatsApp.',
      benefits: ['Real-time order tracking', 'Automated confirmations', 'Delivery notifications']
    },
    {
      icon: ShoppingCart,
      title: 'Abandoned Cart Recovery',
      description: 'Recover lost sales with personalized WhatsApp messages for abandoned carts.',
      benefits: ['Increase conversion by 25%', 'Personalized reminders', 'Product recommendations']
    },
    {
      icon: Star,
      title: 'Product Recommendations',
      description: 'Send AI-powered product recommendations based on customer behavior and preferences.',
      benefits: ['Personalized suggestions', 'Cross-sell opportunities', 'Upsell automation']
    },
    {
      icon: CreditCard,
      title: 'Payment Reminders',
      description: 'Automate payment reminders and facilitate easy payment through WhatsApp.',
      benefits: ['Reduce payment delays', 'Multiple payment options', 'Secure transactions']
    },
    {
      icon: Gift,
      title: 'Promotional Campaigns',
      description: 'Launch targeted promotional campaigns and flash sales through WhatsApp.',
      benefits: ['Higher engagement rates', 'Instant notifications', 'Exclusive offers']
    },
    {
      icon: Users,
      title: 'Customer Support',
      description: 'Provide 24/7 customer support with AI chatbots for common queries.',
      benefits: ['24/7 availability', 'Instant responses', 'Escalation to humans']
    }
  ];

  const useCases = [
    {
      title: 'Complete Order Journey',
      description: 'Automate the entire customer journey from browse to delivery',
      steps: [
        'Product catalog sharing via WhatsApp',
        'Order placement and confirmation',
        'Payment processing and receipt',
        'Shipping updates and tracking',
        'Delivery confirmation and feedback'
      ],
      image: atoz
    },
    {
      title: 'Cart Abandonment Recovery',
      description: 'Win back customers who left items in their cart',
      steps: [
        'Detect cart abandonment',
        'Send personalized reminder message',
        'Offer discount or incentive',
        'Provide easy checkout link',
        'Follow up with related products'
      ],
      image: cartabandoned
    },
    {
      title: 'Customer Retention Program',
      description: 'Keep customers engaged with personalized communication',
      steps: [
        'Welcome new customers',
        'Share exclusive offers',
        'Birthday and anniversary wishes',
        'Loyalty program updates',
        'Win-back campaigns for inactive users'
      ],
      image: crprogram
    }
  ];

  const benefits = [
    {
      metric: '45%',
      description: 'Increase in sales conversion',
      icon: TrendingUp
    },
    {
      metric: '25%',
      description: 'Cart recovery rate',
      icon: ShoppingCart
    },
    {
      metric: '80%',
      description: 'Customer satisfaction',
      icon: Star
    },
    {
      metric: '60%',
      description: 'Faster order processing',
      icon: Clock
    }
  ];

  const testimonials = [
    {
      name: 'Karthika',
      role: 'E-commerce Manager',
      company: 'Fashion Forward Store',
      content: 'Our cart abandonment recovery improved by 40% after implementing WhatsApp automation. Sales increased by 35% in just 2 months.',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'David Kumar',
      role: 'Founder',
      company: 'TechGadgets Online',
      content: 'Customer support became so much easier. Our chatbot handles 80% of queries automatically, and customers love the instant responses.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const integrations = [
    { name: 'Shopify', logo: '🛍️' },
    { name: 'WooCommerce', logo: '🛒' },
    { name: 'Magento', logo: '🏪' },
    { name: 'BigCommerce', logo: '🏬' },
    { name: 'PrestaShop', logo: '🛍️' },
    { name: 'OpenCart', logo: '🛒' }
  ];

  return (
     <>
      <Helmet>
        <title>WhatsApp for E-commerce | Boost Online Sales & Customer Support | AskMeister</title>
        <meta name="description" content="Boost e-commerce sales with WhatsApp automation. Order management, abandoned cart recovery, customer support, and promotional campaigns for online stores." />
        <meta name="keywords" content="whatsapp for ecommerce, online store automation, abandoned cart recovery, order tracking, ecommerce chatbot, customer support, promotional campaigns, sales automation" />
        <link rel="canonical" href="https://askmeister.com/solutions/ecommerce" />
        <meta property="og:title" content="WhatsApp for E-commerce | Boost Online Sales" />
        <meta property="og:description" content="Transform your online store with WhatsApp automation for sales, support, and customer engagement." />
        <meta property="og:url" content="https://meisternotify.com/solutions/ecommerce" />
      </Helmet>
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  E-commerce Solution
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Boost E-commerce Sales with
                  <span className="text-green-600 block">WhatsApp Automation</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Transform your online store with WhatsApp marketing automation. Recover abandoned carts, 
                  automate order updates, and provide instant customer support to boost sales and satisfaction.
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
                src={cartabandoned}
                alt="E-commerce WhatsApp Automation"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-green-600 text-white p-3 rounded-full animate-bounce">
                <ShoppingCart className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Integrations */}
      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Seamless Platform Integrations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Connect with your existing e-commerce platform in minutes
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {integrations.map((integration, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-green-100 transition-colors">
                  <span className="text-3xl">{integration.logo}</span>
                </div>
                <div className="font-semibold text-gray-900 text-sm">{integration.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              E-commerce Automation Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to automate your online store communication
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
              E-commerce Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              See how online stores are boosting sales with WhatsApp automation
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What E-commerce Owners Say
            </h2>
            <p className="text-lg text-gray-600">
              Hear from store owners who transformed their business with WhatsApp
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
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Boost Your E-commerce Sales?
          </h2>
          <p className="text-lg text-green-100 mb-8">
            Join thousands of online stores already using AskMeister to increase sales and customer satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/pricing"
              className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Free Trial
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

export default EcommerceTemplate;