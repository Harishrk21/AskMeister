import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { OG_IMAGE } from '../utils/seoDefaults';
import InternalLinksHub from '../components/InternalLinksHub';
import { ArrowRight, CheckCircle, ExternalLink } from 'lucide-react';

import { SEO_ROUTES } from '../data/seoRoutes';

const Integrations = () => {
  const integrations: Array<{
    name: string;
    description: string;
    logo: string;
    category: string;
    features: string[];
    popular: boolean;
    slug?: string;
  }> = [
    {
      name: 'Shopify',
      description: 'Integrate with your Shopify store to automate customer communications and boost sales.',
      logo: 'https://images.pexels.com/photos/3985062/pexels-photo-3985062.jpeg?auto=compress&cs=tinysrgb&w=100',
      category: 'E-commerce',
      features: ['Product updates', 'Order tracking', 'Inventory alerts', 'Customer reviews'],
      popular: true,
      slug: SEO_ROUTES.shopify,
    },
    {
      name: 'WooCommerce',
      description: 'Send order confirmations, shipping updates, and abandoned cart reminders directly through WhatsApp.',
      logo: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=100',
      category: 'E-commerce',
      features: ['Order notifications', 'Shipping tracking', 'Abandoned cart recovery', 'Customer support'],
      popular: true,
      slug: SEO_ROUTES.woocommerce,
    },
    {
      name: 'Zoho',
      description: 'Connect Zoho CRM, Books, Desk, and Recruit to WhatsApp for leads, invoices, and support tickets.',
      logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100',
      category: 'CRM',
      features: ['CRM lead alerts', 'Invoice reminders', 'Desk ticket updates', 'Recruit scheduling'],
      popular: true,
      slug: SEO_ROUTES.zoho,
    },
    {
      name: 'Tally',
      description: 'Send invoice alerts, payment reminders, and ledger notifications from Tally Prime / ERP 9.',
      logo: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=100',
      category: 'ERP',
      features: ['Invoice dispatch', 'Payment due reminders', 'Party statements', 'Distributor alerts'],
      popular: true,
      slug: SEO_ROUTES.tally,
    },
    {
      name: 'HRMS',
      description: 'Payroll alerts, leave approvals, attendance reminders, and onboarding via WhatsApp.',
      logo: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=100',
      category: 'HR',
      features: ['Payslip notifications', 'Leave status', 'Onboarding checklists', 'Policy updates'],
      popular: true,
      slug: SEO_ROUTES.hrms,
    },
    {
      name: 'ERP',
      description: 'Order status, inventory alerts, dispatch updates, and vendor communication from your ERP.',
      logo: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=100',
      category: 'ERP',
      features: ['Sales order alerts', 'Stock notifications', 'Dispatch updates', 'Vendor PO status'],
      popular: true,
      slug: SEO_ROUTES.erp,
    },
    {
      name: 'Zapier',
      description: 'Connect with 5000+ apps through Zapier to create powerful automation workflows.',
      logo: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=100',
      category: 'Automation',
      features: ['Multi-app integration', 'Custom workflows', 'Trigger-based actions', 'Data synchronization'],
      popular: true,
      slug: SEO_ROUTES.zapier,
    },
    {
      name: 'HubSpot',
      description: 'Sync your CRM data and automate marketing campaigns with WhatsApp integration.',
      logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100',
      category: 'CRM',
      features: ['Contact sync', 'Deal updates', 'Marketing automation', 'Sales notifications'],
      popular: false,
      slug: SEO_ROUTES.hubspot,
    },
    {
      name: 'WordPress',
      description: 'Connect your WordPress site to send notifications, updates, and engage with your audience.',
      logo: 'https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=100',
      category: 'CMS',
      features: ['Blog updates', 'Contact forms', 'User notifications', 'Comment alerts'],
      popular: false
    },
    {
      name: 'Gravity Forms',
      description: 'Automatically send WhatsApp messages when users submit forms on your website.',
      logo: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=100',
      category: 'Forms',
      features: ['Form submissions', 'Lead notifications', 'Auto-responses', 'Data collection'],
      popular: false
    },
    {
      name: 'Salesforce',
      description: 'Enterprise CRM integration for large-scale customer communication and automation.',
      logo: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=100',
      category: 'CRM',
      features: ['Lead management', 'Opportunity tracking', 'Custom objects', 'Workflow automation'],
      popular: false,
    },
    {
      name: 'Google Sheets',
      description: 'Connect your spreadsheets to send bulk messages and manage contact lists easily.',
      logo: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=100',
      category: 'Productivity',
      features: ['Bulk messaging', 'Contact management', 'Data import/export', 'Real-time sync'],
      popular: false
    },
    {
      name: 'Calendly',
      description: 'Send appointment confirmations and reminders via WhatsApp automatically.',
      logo: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=100',
      category: 'Scheduling',
      features: ['Appointment reminders', 'Booking confirmations', 'Reschedule notifications', 'No-show alerts'],
      popular: false
    }
  ];

  const categories = ['All', 'E-commerce', 'CRM', 'ERP', 'HR', 'Forms', 'Automation', 'CMS', 'Productivity', 'Scheduling'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredIntegrations = selectedCategory === 'All' 
    ? integrations 
    : integrations.filter(integration => integration.category === selectedCategory);

  const steps = [
    {
      step: '1',
      title: 'Choose Integration',
      description: 'Select the app you want to connect with WhatsApp from our extensive library.'
    },
    {
      step: '2',
      title: 'Configure Settings',
      description: 'Set up your integration preferences and map the data fields as needed.'
    },
    {
      step: '3',
      title: 'Test & Activate',
      description: 'Test your integration and activate it to start receiving automated messages.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>WhatsApp Integrations | Shopify, WooCommerce, Zoho, Tally, HRMS & ERP | Ask Meister</title>
        <meta name="description" content="WhatsApp integrations for Shopify, WooCommerce, Zoho, Tally, HRMS, ERP, Zapier, and HubSpot. Connect bulk messaging and chatbots to your store, CRM, and finance stack. Chennai support." />
        <meta name="keywords" content="whatsapp integrations, shopify whatsapp integration, woocommerce whatsapp, zoho whatsapp integration, tally whatsapp integration, hrms whatsapp, erp whatsapp integration, zapier whatsapp, hubspot whatsapp, chennai whatsapp integration" />
        <link rel="canonical" href="https://askmeister.com/integrations" />
        <meta property="og:title" content="WhatsApp Integrations | E-commerce, CRM & Automation | Ask Meister" />
        <meta property="og:description" content="Integrate WhatsApp with your e-commerce, CRM, and automation tools. One-click connections." />
        <meta property="og:url" content="https://askmeister.com/integrations" />
        <meta property="og:image" content={OG_IMAGE} />
        <meta name="twitter:image" content={OG_IMAGE} />
      </Helmet>
    <div className="page-wrap">
      {/* Hero Section */}
      <section className="page-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Powerful Integrations for
              <span className="text-brand block">Every Business</span>
            </h1>
            <p className="text-xl text-ink-muted mb-8 leading-relaxed">
              Connect Ask Meister with your favorite tools and platforms. 
              Automate your workflows and create seamless customer experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-brand text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-brand-dark transition-colors"
              >
                Start Integrating
              </Link>
              <Link
                to="/contact"
                className="border-2 border-brand text-brand px-8 py-4 rounded-lg text-lg font-semibold hover:bg-brand hover:text-white transition-colors"
              >
                Request Integration
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-surface-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How Integrations Work
            </h2>
            <p className="text-lg text-ink-muted">
              Get started with integrations in just 3 simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-brand text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-ink-muted">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Available Integrations
            </h2>
            <p className="text-lg text-ink-muted mb-8">
              Connect with the tools your business already uses
            </p>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-brand text-white'
                      : 'bg-surface-elevated text-ink-muted hover:bg-surface-elevated'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredIntegrations.map((integration, index) => (
              <div key={index} className="glass-card p-6 relative">
                {integration.popular && (
                  <div className="absolute -top-3 -right-3 bg-brand text-white px-3 py-1 rounded-full text-xs font-medium">
                    Popular
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  <img
                    src={integration.logo}
                    alt={integration.name}
                    className="w-12 h-12 rounded-lg mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-white">{integration.name}</h3>
                    <span className="text-sm text-slate-400">{integration.category}</span>
                  </div>
                </div>
                
                <p className="text-ink-muted mb-4">{integration.description}</p>
                
                <div className="space-y-2 mb-6">
                  {integration.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-brand mr-2" />
                      <span className="text-sm text-ink-muted">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {integration.slug ? (
                  <Link
                    to={integration.slug}
                    className="w-full bg-brand text-white py-2 rounded-lg font-medium hover:bg-brand-dark transition-colors flex items-center justify-center"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                ) : (
                  <Link
                    to="/contact"
                    className="w-full bg-brand text-white py-2 rounded-lg font-medium hover:bg-brand-dark transition-colors flex items-center justify-center"
                  >
                    Connect Now
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Integration */}
      <section className="py-20 bg-surface-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Don't See Your Tool?
          </h2>
          <p className="text-lg text-ink-muted mb-8">
            We're constantly adding new integrations. Request a custom integration or use our API to build your own.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-brand text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-brand-dark transition-colors"
            >
              Request Integration
            </Link>
            <Link
              to="/whatsapp-api"
              className="border-2 border-brand text-brand px-8 py-4 rounded-lg text-lg font-semibold hover:bg-brand hover:text-white transition-colors"
            >
              Explore API
            </Link>
          </div>
        </div>
      </section>

      <InternalLinksHub currentPath="/integrations" />
    </div>
    </>
  );
};

export default Integrations;