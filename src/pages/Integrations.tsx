import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, ExternalLink } from 'lucide-react';

const Integrations = () => {
  const integrations = [
    {
      name: 'WooCommerce',
      description: 'Send order confirmations, shipping updates, and abandoned cart reminders directly through WhatsApp.',
      logo: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=100',
      category: 'E-commerce',
      features: ['Order notifications', 'Shipping tracking', 'Abandoned cart recovery', 'Customer support'],
      popular: true
    },
    {
      name: 'Shopify',
      description: 'Integrate with your Shopify store to automate customer communications and boost sales.',
      logo: 'https://images.pexels.com/photos/3985062/pexels-photo-3985062.jpeg?auto=compress&cs=tinysrgb&w=100',
      category: 'E-commerce',
      features: ['Product updates', 'Order tracking', 'Inventory alerts', 'Customer reviews'],
      popular: true
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
      name: 'Zapier',
      description: 'Connect with 5000+ apps through Zapier to create powerful automation workflows.',
      logo: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=100',
      category: 'Automation',
      features: ['Multi-app integration', 'Custom workflows', 'Trigger-based actions', 'Data synchronization'],
      popular: true
    },
    {
      name: 'HubSpot',
      description: 'Sync your CRM data and automate marketing campaigns with WhatsApp integration.',
      logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100',
      category: 'CRM',
      features: ['Contact sync', 'Deal updates', 'Marketing automation', 'Sales notifications'],
      popular: false
    },
    {
      name: 'Salesforce',
      description: 'Enterprise CRM integration for large-scale customer communication and automation.',
      logo: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=100',
      category: 'CRM',
      features: ['Lead management', 'Opportunity tracking', 'Custom objects', 'Workflow automation'],
      popular: false
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

  const categories = ['All', 'E-commerce', 'CRM', 'Forms', 'Automation', 'CMS', 'Productivity', 'Scheduling'];
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
        <title>WhatsApp Integrations | WooCommerce, Shopify, Zapier & CRM | Ask Meister</title>
        <meta name="description" content="WhatsApp API integrations: WooCommerce, Shopify, Zapier, HubSpot, Salesforce. Connect bulk messaging & chatbot to your CRM & store. Free trial." />
        <link rel="canonical" href="https://www.askmeister.com/integrations" />
        <meta property="og:title" content="WhatsApp Integrations | E-commerce, CRM & Automation | Ask Meister" />
        <meta property="og:description" content="Integrate WhatsApp with your e-commerce, CRM, and automation tools. One-click connections." />
        <meta property="og:url" content="https://www.askmeister.com/integrations" />
      </Helmet>
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#25D366]/10 via-white to-[#128C7E]/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-[#1C1C1C] mb-6">
              Powerful Integrations for
              <span className="text-[#25D366] block">Every Business</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Connect Ask Meister with your favorite tools and platforms. 
              Automate your workflows and create seamless customer experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/pricing"
                className="bg-[#25D366] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#128C7E] transition-colors"
              >
                Start Integrating
              </Link>
              <Link
                to="/contact"
                className="border-2 border-[#25D366] text-[#25D366] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#25D366] hover:text-white transition-colors"
              >
                Request Integration
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-4">
              How Integrations Work
            </h2>
            <p className="text-lg text-gray-600">
              Get started with integrations in just 3 simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-[#1C1C1C] mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-4">
              Available Integrations
            </h2>
            <p className="text-lg text-gray-600 mb-8">
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
                      ? 'bg-[#25D366] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredIntegrations.map((integration, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 relative">
                {integration.popular && (
                  <div className="absolute -top-3 -right-3 bg-[#25D366] text-white px-3 py-1 rounded-full text-xs font-medium">
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
                    <h3 className="text-xl font-semibold text-[#1C1C1C]">{integration.name}</h3>
                    <span className="text-sm text-gray-500">{integration.category}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{integration.description}</p>
                
                <div className="space-y-2 mb-6">
                  {integration.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#25D366] mr-2" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className="w-full bg-[#25D366] text-white py-2 rounded-lg font-medium hover:bg-[#128C7E] transition-colors flex items-center justify-center">
                  Connect Now
                  <ExternalLink className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Integration */}
      <section className="py-20 bg-[#F7F7F7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-6">
            Don't See Your Tool?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We're constantly adding new integrations. Request a custom integration or use our API to build your own.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-[#25D366] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#128C7E] transition-colors"
            >
              Request Integration
            </Link>
            <Link
              to="/whatsapp-api"
              className="border-2 border-[#25D366] text-[#25D366] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#25D366] hover:text-white transition-colors"
            >
              Explore API
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Integrations;