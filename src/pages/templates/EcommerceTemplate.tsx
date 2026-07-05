import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Package, TrendingUp, CheckCircle, ArrowRight, MessageCircle, BarChart3, Zap, CreditCard, Truck, Star, Gift, Users, Clock } from 'lucide-react';
import atoz from '../../assets/atoz.png';
import cartabandoned from '../../assets/cartabandoned.webp';
import crprogram from '../../assets/crprogram.webp';
import { Helmet } from 'react-helmet-async';
import InternalLinksHub from '../../components/InternalLinksHub';
import SeoBreadcrumbs from '../../components/SeoBreadcrumbs';
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
      metric: 'Orders',
      description: 'Shipping & delivery updates',
      icon: TrendingUp
    },
    {
      metric: 'Cart',
      description: 'Recovery prompts (opt-in)',
      icon: ShoppingCart
    },
    {
      metric: 'Support',
      description: 'FAQs before human agents',
      icon: Star
    },
    {
      metric: 'Speed',
      description: 'Chat-first assistance',
      icon: Clock
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
        <title>WhatsApp for E-commerce | Boost Online Sales & Customer Support | Ask Meister</title>
        <meta name="description" content="WhatsApp for e-commerce: order updates, cart reminders for opted-in shoppers, and support chat—integrations depend on your stack; contact us to confirm." />
        <meta name="keywords" content="whatsapp shopify integration, abandoned cart whatsapp, ecommerce whatsapp automation, whatsapp ecommerce marketing" />
        <link rel="canonical" href="https://askmeister.com/whatsapp-automation-for-ecommerce" />
        <meta property="og:title" content="WhatsApp for E-commerce | Boost Online Sales" />
        <meta property="og:description" content="Transform your online store with WhatsApp automation for sales, support, and customer engagement." />
        <meta property="og:url" content="https://askmeister.com/whatsapp-automation-for-ecommerce" />
      </Helmet>
    <div className="page-wrap">
      <SeoBreadcrumbs items={[{ name: 'WhatsApp automation for ecommerce', path: '/whatsapp-automation-for-ecommerce' }]} />
      {/* Hero Section */}
      <section className="page-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  E-commerce Solution
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                  Boost E-commerce Sales with
                  <span className="text-brand block">WhatsApp Automation</span>
                </h1>
                <p className="text-xl text-ink-muted leading-relaxed">
                  Transform your online store with WhatsApp marketing automation. Recover abandoned carts, 
                  automate order updates, and provide instant customer support to boost sales and satisfaction.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-brand text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-brand-dark transition-colors inline-flex items-center justify-center"
                >
                  Contact for demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-brand text-brand px-8 py-4 rounded-lg text-lg font-semibold hover:bg-brand hover:text-white transition-colors"
                >
                  Schedule Demo
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
                src={cartabandoned}
                alt="E-commerce WhatsApp Automation"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-brand text-white p-3 rounded-full animate-bounce">
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Seamless Platform Integrations
            </h2>
            <p className="text-lg text-ink-muted max-w-2xl mx-auto">
              Connect with your existing e-commerce platform in minutes
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {integrations.map((integration, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-surface-elevated rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-green-100 transition-colors">
                  <span className="text-3xl">{integration.logo}</span>
                </div>
                <div className="font-semibold text-white text-sm">{integration.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Features Section */}
      <section className="py-20 bg-surface-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              E-commerce Automation Features
            </h2>
            <p className="text-lg text-ink-muted max-w-2xl mx-auto">
              Everything you need to automate your online store communication
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              E-commerce Success Stories
            </h2>
            <p className="text-lg text-ink-muted">
              See how online stores are boosting sales with WhatsApp automation
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

      {/* Honest note instead of unaudited testimonials */}
      <section className="py-20 bg-surface-muted">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            Results vary by store
          </h2>
          <p className="text-lg text-ink-muted leading-relaxed">
            WhatsApp can speed up order updates and support, but revenue still depends on product, operations, and logistics. We do not publish named customer metrics unless they are verified and approved—ask
            our team for implementation guidance instead of relying on invented success stories.
          </p>
        </div>
      </section>

      <InternalLinksHub currentPath="/whatsapp-automation-for-ecommerce" />

      {/* CTA Section */}
      <section className="py-20 bg-brand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Boost Your E-commerce Sales?
          </h2>
          <p className="text-lg text-green-100 mb-8">
            Talk to us about WhatsApp order updates, cart reminders (where permitted), and support workflows for your storefront.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-brand px-8 py-4 rounded-lg text-lg font-semibold hover:bg-surface-elevated transition-colors"
            >
              Contact for demo
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-brand transition-colors"
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