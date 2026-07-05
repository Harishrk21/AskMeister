import React from 'react';
import { Link } from 'react-router-dom';
import { Banknote, Shield, CreditCard, CheckCircle, ArrowRight, MessageCircle, BarChart3, Zap, Bell, Lock, TrendingUp, Users, Clock, AlertTriangle } from 'lucide-react';
import banks from '../../assets/banks.webp';
import banking from '../../assets/banking.jpg';
import bankoverview from '../../assets/bankoverview.jpg';
import insurance from '../../assets/insurance.webp';
import checking from '../../assets/checking.webp';
import { Helmet } from 'react-helmet-async';
import InternalLinksHub from '../../components/InternalLinksHub';
import SeoBreadcrumbs from '../../components/SeoBreadcrumbs';
import { faqPageSchema } from '../../utils/seoSchema';
const FinancialTemplate = () => {
  const financialFaq = [
    {
      question: 'What is WhatsApp banking automation?',
      answer:
        'It uses the WhatsApp Business Platform for transaction alerts, payment reminders, KYC nudges, and support—via approved templates and opt-in where required.',
    },
    {
      question: 'Can banks use WhatsApp for KYC follow-up?',
      answer:
        'Yes, for reminders and status updates. Sensitive document collection is usually handled on a secure portal, with WhatsApp guiding the customer through the process.',
    },
  ];
  const faqSchema = faqPageSchema(
    financialFaq.map((f) => ({ question: f.question, answer: f.answer }))
  );

  const features = [
    {
      icon: Bell,
      title: 'Transaction Alerts',
      description: 'Instant notifications for all account transactions, payments, and balance updates.',
      benefits: ['Real-time alerts', 'Fraud detection', 'Balance updates']
    },
    {
      icon: CreditCard,
      title: 'Payment Reminders',
      description: 'Automated reminders for loan payments, credit card bills, and other financial obligations.',
      benefits: ['Payment due alerts', 'Late fee prevention', 'Auto-pay setup']
    },
    {
      icon: TrendingUp,
      title: 'Investment Updates',
      description: 'Portfolio performance updates, market insights, and investment recommendations.',
      benefits: ['Portfolio tracking', 'Market insights', 'Investment tips']
    },
    {
      icon: Shield,
      title: 'Security Alerts',
      description: 'Immediate notifications for suspicious activities and security-related events.',
      benefits: ['Fraud alerts', 'Login notifications', 'Security tips']
    },
    {
      icon: BarChart3,
      title: 'Financial Planning',
      description: 'Personalized financial advice, budgeting tips, and goal tracking assistance.',
      benefits: ['Budget tracking', 'Goal setting', 'Financial advice']
    },
    {
      icon: Users,
      title: 'Customer Support',
      description: '24/7 automated customer support for banking queries and account assistance.',
      benefits: ['24/7 support', 'Quick resolutions', 'Account assistance']
    }
  ];

  const services = [
    {
      name: 'Personal Banking',
      description: 'Account management and personal finance assistance',
      features: ['Account balance inquiries', 'Transaction history', 'Fund transfers', 'Bill payments']
    },
    {
      name: 'Business Banking',
      description: 'Corporate banking solutions and business finance',
      features: ['Business accounts', 'Payroll services', 'Trade finance', 'Cash management']
    },
    {
      name: 'Loans & Credit',
      description: 'Loan applications and credit management',
      features: ['Loan applications', 'EMI reminders', 'Credit score updates', 'Pre-approved offers']
    },
    {
      name: 'Investment Services',
      description: 'Investment portfolio and wealth management',
      features: ['Portfolio tracking', 'Market updates', 'Investment advice', 'SIP management']
    },
    {
      name: 'Insurance',
      description: 'Insurance products and claim assistance',
      features: ['Policy updates', 'Premium reminders', 'Claim status', 'New products']
    },
    {
      name: 'Digital Payments',
      description: 'Mobile payments and digital wallet services',
      features: ['Payment confirmations', 'Wallet balance', 'Cashback offers', 'QR payments']
    }
  ];

  const useCases = [
    {
      title: 'Complete Banking Assistant',
      description: 'Comprehensive banking support through WhatsApp',
      steps: [
        'Account balance and transaction inquiries',
        'Fund transfer and bill payment assistance',
        'Loan and credit card management',
        'Investment portfolio updates',
        'Customer support and query resolution'
      ],
      image: banks
    },
    {
      title: 'Fraud Prevention System',
      description: 'Advanced security and fraud detection alerts',
      steps: [
        'Real-time transaction monitoring',
        'Suspicious activity alerts',
        'Account security notifications',
        'Fraud prevention tips',
        'Emergency account blocking'
      ],
      image: bankoverview
    },
    {
      title: 'Investment Advisory',
      description: 'Personalized investment guidance and updates',
      steps: [
        'Portfolio performance tracking',
        'Market trend analysis',
        'Investment recommendations',
        'Risk assessment alerts',
        'Goal-based planning advice'
      ],
      image: checking
    }
  ];

  const benefits = [
    {
      metric: 'Secure',
      description: 'Template-based utility messaging',
      icon: Shield
    },
    {
      metric: '24/7',
      description: 'Automated customer notifications',
      icon: Clock
    },
    {
      metric: 'Compliant',
      description: 'Workflows aligned with bank policies',
      icon: Users
    },
    {
      metric: 'Audit-ready',
      description: 'Conversation history for teams',
      icon: TrendingUp
    }
  ];

  return (
     <>
      <Helmet>
        <title>WhatsApp for Finance Solutions | Banking Automation Platform | Ask Meister</title>
        <meta name="description" content="WhatsApp for finance solutions with banking automation: transaction alerts, KYC reminders, payment follow-ups, and secure customer messaging for banks and financial firms." />
        <meta name="keywords" content="whatsapp for finance, whatsapp banking automation, whatsapp finance automation platform, whatsapp for financial industry, whatsapp messaging for finance, whatsapp for financial firms, whatsapp for finance professionals, whatsapp kyc automation for banks" />
        <link rel="canonical" href="https://askmeister.com/whatsapp-banking-automation" />
        <meta property="og:title" content="WhatsApp for Banking & Finance | Secure Automation" />
        <meta property="og:description" content="Secure financial services automation with WhatsApp for banking, payments, and customer support." />
        <meta property="og:url" content="https://askmeister.com/whatsapp-banking-automation" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
    <div className="page-wrap">
      <SeoBreadcrumbs items={[{ name: 'WhatsApp banking automation', path: '/whatsapp-banking-automation' }]} />
      {/* Hero Section */}
      <section className="page-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                  <Banknote className="w-4 h-4 mr-2" />
                  Financial Services Solution
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                  Secure Banking with
                  <span className="text-brand block">WhatsApp Automation</span>
                </h1>
                <p className="text-xl text-ink-muted leading-relaxed">
                  Transform financial services with secure WhatsApp banking. Provide instant account updates, 
                  fraud alerts, payment assistance, and 24/7 customer support through encrypted messaging.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-brand text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-brand-dark transition-colors inline-flex items-center justify-center"
                >
                  Start Free Trial
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
                src={banking}
                alt="Financial Services WhatsApp Automation"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-brand text-white p-3 rounded-full animate-pulse">
                <Lock className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Financial Services Coverage
            </h2>
            <p className="text-lg text-ink-muted max-w-2xl mx-auto">
              Automate all aspects of financial services through WhatsApp
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="glass-card p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{service.name}</h3>
                <p className="text-ink-muted mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-ink-muted">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-surface-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Financial Features
            </h2>
            <p className="text-lg text-ink-muted max-w-2xl mx-auto">
              Secure and compliant financial automation tools
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
              Financial Service Automation
            </h2>
            <p className="text-lg text-ink-muted">
              See how financial institutions are transforming customer experience
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

      {/* Security & Compliance */}
      <section className="py-20 bg-surface-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Bank-Grade Security & Compliance
            </h2>
            <p className="text-lg text-ink-muted">
              Your financial data is protected with the highest security standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-brand" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">End-to-End Encryption</h3>
              <p className="text-ink-muted text-sm">All messages are encrypted with bank-grade security</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-brand" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">PCI DSS Compliant</h3>
              <p className="text-ink-muted text-sm">Meets all payment card industry standards</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-brand" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Fraud Detection</h3>
              <p className="text-ink-muted text-sm">Advanced AI-powered fraud detection and prevention</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-brand" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Audit Trails</h3>
              <p className="text-ink-muted text-sm">Complete audit trails for compliance and reporting</p>
            </div>
          </div>
        </div>
      </section>

      {/* Honest use-case note */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-ink-muted leading-relaxed">
          <h2 className="text-2xl font-bold text-white mb-4">Built for regulated financial messaging</h2>
          <p>
            Ask Meister supports template workflows and team hand-off for banks and fintechs. We do not guarantee fraud prevention outcomes, call-center reductions, or revenue—those depend on your policies, integrations, and operations.
          </p>
          <p className="mt-4">
            <Link to="/whatsapp-kyc-automation-for-banks" className="text-brand font-semibold hover:underline">
              WhatsApp KYC automation for banks →
            </Link>
          </p>
        </div>
      </section>

      <InternalLinksHub currentPath="/whatsapp-banking-automation" />

      {/* CTA Section */}
      <section className="py-20 bg-brand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Financial Services?
          </h2>
          <p className="text-lg text-green-100 mb-8">
            Join leading financial institutions already using Ask Meister to enhance customer experience and security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-brand px-8 py-4 rounded-lg text-lg font-semibold hover:bg-surface-elevated transition-colors"
            >
              Start Free Trial
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

export default FinancialTemplate;