import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import InternalLinksHub from '../components/InternalLinksHub';

/**
 * FormSubmit.co — use a literal `https://formsubmit.co/your@email.com` action (not %40 encoding).
 * First time: check inbox for FormSubmit’s “Confirm your form” link or you won’t receive mail.
 * https://formsubmit.co
 */
const CONTACT_EMAIL = 'harishradhakrishnan2001@gmail.com';
const FORM_SUBMIT_ACTION = 'https://formsubmit.co/harishradhakrishnan2001@gmail.com';
const WHATSAPP_NUMBER_E164 = '917299817996';

const Contact = () => {
  const [searchParams] = useSearchParams();
  const showThankYou = searchParams.get('thankyou') === '1';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    // Form submits to FormSubmit.co – no preventDefault so POST goes through
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: CONTACT_EMAIL,
      description: 'Get support within 24 hours'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 7299817996'],
      description: 'Mon-Fri from 9am to 6pm IST'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: '4,3A, Asvini Amarisa ,Ramapuram,Chennai-600089',
      description: 'Schedule an appointment'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon-Fri: 9am-6pm IST',
      description: 'We\'re here to help during business hours'
    }
  ];

  const features = [
    'WhatsApp Business API Integration',
    'Bulk Message Broadcasting',
    'Powerful Chatbots',
    'Marketing Automation',
    'Real-time Analytics',
    'Team Collaboration Tools',
    '24/7 Customer Support',
    
  ];

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Ask Meister',
    description: 'WhatsApp marketing platform: bulk messaging, WhatsApp Business API & AI chatbot. Free demo and support.',
    url: 'https://askmeister.com',
    telephone: '+917299817996',
    email: CONTACT_EMAIL,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '4, 3A, Asvini Amarisa, Ramapuram',
      addressLocality: 'Chennai',
      postalCode: '600089',
      addressCountry: 'IN'
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00'
    },
    sameAs: [
      'https://www.facebook.com/profile.php?id=61578309674729',
      'https://x.com/AskMeister',
      'https://www.linkedin.com/in/ask-meister-42a0a4377/',
      'https://www.instagram.com/ask_meister'
    ]
  };

  return (
     <>
      <Helmet>
        <title>Contact Ask Meister | WhatsApp Marketing Chennai &amp; Tamil Nadu</title>
        <meta name="description" content="Contact Ask Meister in Chennai: WhatsApp Business API, bulk messaging, and chatbot support. We reply to business inquiries as soon as we can during working hours." />
        <meta name="keywords" content="whatsapp marketing contact, chatbot support, whatsapp api help, business consultation, marketing experts, customer support, free demo, whatsapp automation help" />
        <link rel="canonical" href="https://askmeister.com/contact" />
        <meta property="og:title" content="Contact WhatsApp Marketing Experts | Ask Meister" />
        <meta property="og:description" content="Get expert help with WhatsApp marketing, chatbots, and business automation. Free consultation available." />
        <meta property="og:url" content="https://askmeister.com/contact" />
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      </Helmet>
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#25D366]/10 via-white to-[#128C7E]/5 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#1C1C1C] mb-6">
            Get in Touch with
            <span className="text-[#25D366] block">Ask Meister</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Ready to transform your business communication with WhatsApp marketing? 
            Let's discuss how we can help you grow your business.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              {showThankYou && (
                <div className="mb-6 p-4 bg-[#25D366]/10 border border-[#25D366]/30 rounded-lg text-[#128C7E] font-medium">
                  Thank you! We&apos;ll get back to you within 24 hours.
                </div>
              )}
              <h2 className="text-2xl font-bold text-[#1C1C1C] mb-6">Send us a Message</h2>
              <form
                action={FORM_SUBMIT_ACTION}
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <input type="hidden" name="_next" value="https://askmeister.com/contact?thankyou=1" />
                <input type="hidden" name="_subject" value="Ask Meister – New contact form submission" />
                {/* Omit _captcha so FormSubmit default reCAPTCHA applies (disabling it can limit or block delivery). */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#25D366] focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#25D366] focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#25D366] focus:border-transparent"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#25D366] focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    How can we help you? *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#25D366] focus:border-transparent"
                  >
                    <option value="">Select an option</option>
                    <option value="demo">Request a Demo</option>
                    <option value="plans">Plan Information</option>
                    <option value="integration">Custom Integration</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tell us more about your requirements *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#25D366] focus:border-transparent"
                    placeholder="Describe your business needs, expected message volume, team size, etc."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-[#25D366] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#128C7E] transition-colors flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[#1C1C1C] mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-12 h-12 bg-[#25D366]/10 rounded-lg flex items-center justify-center mr-4">
                        <info.icon className="w-6 h-6 text-[#25D366]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#1C1C1C] mb-1">{info.title}</h3>
                        <p className="text-[#25D366] font-medium mb-1">{info.details}</p>
                        <p className="text-gray-600 text-sm">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* What We Offer */}
              <div className="bg-[#25D366]/10 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-[#1C1C1C] mb-4">What We Offer</h3>
                <div className="grid grid-cols-1 gap-2">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#25D366] mr-2" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Chat */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <MessageCircle className="w-6 h-6 text-[#25D366] mr-3" />
                  <h3 className="text-lg font-semibold text-[#1C1C1C]">Need Immediate Help?</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Chat with our WhatsApp marketing experts for instant assistance.
                </p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER_E164}?text=${encodeURIComponent("Hi, I'm interested in Ask Meister WhatsApp marketing solutions")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white px-6 py-2 rounded-lg hover:bg-[#128C7E] transition-colors inline-flex items-center"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-4">
              Why Choose Ask Meister?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're not just another WhatsApp marketing tool. We're your growth partner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#25D366]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-[#1C1C1C] mb-2">Quick Setup</h3>
              <p className="text-gray-600">Get started in minutes with our easy onboarding process</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#25D366]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold text-[#1C1C1C] mb-2">Flexible Plans</h3>
              <p className="text-gray-600">Talk to our team for a plan recommendation based on your business needs.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#25D366]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-[#1C1C1C] mb-2">Proven Results</h3>
              <p className="text-gray-600">Our clients see 3x increase in customer engagement</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#25D366]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Join hundreds of businesses already growing with Ask Meister WhatsApp marketing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <a
              href="#contact-form"
              className="bg-white text-[#25D366] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Free Demo
            </a> */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER_E164}?text=${encodeURIComponent('Hi, I want to know more about Ask Meister plans')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#25D366] transition-colors"
            >
              Chat on WhatsApp
            </a>

          </div>
        </div>
      </section>

      <InternalLinksHub currentPath="/contact" title="Explore WhatsApp solutions before you contact us" />
    </div>
    </>
  );
};

export default Contact;