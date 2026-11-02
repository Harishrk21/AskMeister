import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import InternalLinksHub from '../components/InternalLinksHub';
import PageHero from '../components/ui/PageHero';

const CONTACT_EMAIL = 'contact@askmeister.com';
const WEB3FORMS_ACCESS_KEY = '90c5d995-7526-4d8e-a491-fb5f05af273d';
const WHATSAPP_NUMBER_E164 = '917299817996';

const Contact = () => {
  const [result, setResult] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult('sending');
    setErrorMessage('');

    const form = e.currentTarget;
    const payload = new FormData(form);
    payload.append('access_key', WEB3FORMS_ACCESS_KEY);
    payload.append('subject', `Ask Meister – ${formData.subject || 'Contact form'}`);
    payload.append('from_name', 'Ask Meister Website');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: payload
      });
      const data = (await response.json()) as { success?: boolean; message?: string };

      if (data.success) {
        setResult('success');
        setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
        form.reset();
      } else {
        setResult('error');
        setErrorMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setResult('error');
      setErrorMessage('Unable to send right now. Please email us or try again.');
    }
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
      details: '4, 3A, Asvini Amarisa, Ramapuram, Chennai 600089, Tamil Nadu, India',
      description: 'Schedule an appointment at our Chennai office'
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
    description:
      'WhatsApp marketing company in Chennai, Tamil Nadu, India: bulk messaging, WhatsApp Business API & AI chatbot. Serving businesses across India and worldwide.',
    url: 'https://askmeister.com/contact',
    telephone: '+917299817996',
    email: CONTACT_EMAIL,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '4, 3A, Asvini Amarisa, Ramapuram',
      addressLocality: 'Chennai',
      addressRegion: 'Tamil Nadu',
      postalCode: '600089',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 13.0339,
      longitude: 80.1819
    },
    areaServed: [
      { '@type': 'City', name: 'Chennai' },
      { '@type': 'State', name: 'Tamil Nadu' },
      { '@type': 'Country', name: 'India' },
      'Worldwide'
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00'
    },
    sameAs: [
      'https://www.facebook.com/profile.php?id=61578309674729',
      'https://x.com/AskMeister',
      'https://www.linkedin.com/company/ask-meister',
      'https://www.instagram.com/ask_meister'
    ]
  };

  return (
     <>
      <Helmet>
        <title>Contact Ask Meister | WhatsApp Marketing Chennai, Tamil Nadu &amp; India</title>
        <meta name="description" content="Contact Ask Meister in Ramapuram, Chennai, Tamil Nadu, India for WhatsApp Business API, bulk messaging, and chatbot support. Serving India and worldwide. Mon–Fri 9am–6pm IST." />
        <meta name="keywords" content="ask meister contact chennai, whatsapp marketing chennai, whatsapp marketing tamil nadu, whatsapp business api india, whatsapp marketing company chennai, chatbot support chennai, free demo chennai, whatsapp automation india, ramapuram chennai office" />
        <link rel="canonical" href="https://askmeister.com/contact" />
        <meta property="og:title" content="Contact Ask Meister | Chennai, Tamil Nadu &amp; India" />
        <meta property="og:description" content="Reach our Chennai, Tamil Nadu office for WhatsApp marketing, Business API, and chatbot help. Serving India and worldwide." />
        <meta property="og:url" content="https://askmeister.com/contact" />
        <meta property="og:locale" content="en_IN" />
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      </Helmet>
    <div className="page-wrap">
      <PageHero
        eyebrow="Contact · Chennai, Tamil Nadu, India"
        title="Get in Touch with Ask Meister"
        description="Registered office in Ramapuram, Chennai. We help businesses across Tamil Nadu, India, and worldwide with WhatsApp marketing, Business API, and chatbots."
        compact
      />

      {/* Contact Form & Info */}
      <section className="section-padding -mt-8">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="glass-card p-6 md:p-8">
              {result === 'success' && (
                <div className="mb-6 p-4 bg-brand/10 border border-brand/30 rounded-lg text-brand-light font-medium">
                  Thank you! We&apos;ll get back to you within 24 hours.
                </div>
              )}
              {result === 'error' && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-300 font-medium">
                  {errorMessage}
                </div>
              )}
              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-ink-muted mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink-muted mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-ink-muted mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink-muted mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-ink-muted mb-2">
                    How can we help you? *
                  </label>
                  <select
                    name="inquiry_type"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="input-field"
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
                  <label className="block text-sm font-medium text-ink-muted mb-2">
                    Tell us more about your requirements *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="input-field"
                    placeholder="Describe your business needs, expected message volume, team size, etc."
                  />
                </div>

                <button
                  type="submit"
                  disabled={result === 'sending'}
                  className="w-full bg-brand text-white py-3 px-6 rounded-lg font-semibold hover:bg-brand-dark transition-colors flex items-center justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5 mr-2" />
                  {result === 'sending' ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mr-4">
                        <info.icon className="w-6 h-6 text-brand" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">{info.title}</h3>
                        <p className="text-brand font-medium mb-1">{info.details}</p>
                        <p className="text-ink-muted text-sm">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* What We Offer */}
              <div className="bg-brand/10 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">What We Offer</h3>
                <div className="grid grid-cols-1 gap-2">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-brand mr-2" />
                      <span className="text-ink-muted text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Chat */}
              <div className="glass-card p-6">
                <div className="flex items-center mb-4">
                  <MessageCircle className="w-6 h-6 text-brand mr-3" />
                  <h3 className="text-lg font-semibold text-white">Need Immediate Help?</h3>
                </div>
                <p className="text-ink-muted mb-4">
                  Chat with our WhatsApp marketing experts for instant assistance.
                </p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER_E164}?text=${encodeURIComponent("Hi, I'm interested in Ask Meister WhatsApp marketing solutions")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand text-white px-6 py-2 rounded-lg hover:bg-brand-dark transition-colors inline-flex items-center"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local SEO: Chennai / Tamil Nadu / India */}
      <section className="py-16 bg-surface border-y border-brand/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-ink-muted space-y-4 leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ask Meister office in Chennai, Tamil Nadu, India
          </h2>
          <p>
            Our registered office is at 4, 3A, Asvini Amarisa, Ramapuram, Chennai 600089, Tamil Nadu, India.
            Teams across Chennai, Coimbatore, Madurai, and the rest of Tamil Nadu—and businesses elsewhere in India and abroad—can book a demo, ask about WhatsApp Business API onboarding, or get help with bulk messaging and chatbots.
          </p>
          <p>
            Prefer a city-focused page? Visit{' '}
            <Link to="/whatsapp-marketing-chennai" className="text-brand hover:text-brand-dark font-medium transition-colors">
              WhatsApp marketing in Chennai
            </Link>
            {' '}or{' '}
            <Link to="/whatsapp-marketing-tamil-nadu" className="text-brand hover:text-brand-dark font-medium transition-colors">
              WhatsApp marketing in Tamil Nadu
            </Link>
            . Business hours: Monday–Friday, 9am–6pm IST. Call +91 7299817996 or use the form above.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-surface-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Ask Meister?
            </h2>
            <p className="text-lg text-ink-muted max-w-2xl mx-auto">
              We're not just another WhatsApp marketing tool. We're your growth partner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Quick Setup</h3>
              <p className="text-ink-muted">Get started in minutes with our easy onboarding process</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Flexible Plans</h3>
              <p className="text-ink-muted">Talk to our team for a plan recommendation based on your business needs.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Proven Results</h3>
              <p className="text-ink-muted">Our clients see 3x increase in customer engagement</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand">
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
              className="bg-white text-brand px-8 py-4 rounded-lg text-lg font-semibold hover:bg-surface-elevated transition-colors"
            >
              Start Your Free Demo
            </a> */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER_E164}?text=${encodeURIComponent('Hi, I want to know more about Ask Meister plans')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-brand transition-colors"
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