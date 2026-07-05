import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Target, Award, Globe, MessageCircle, Zap, Heart, TrendingUp } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import InternalLinksHub from '../components/InternalLinksHub';

const About = () => {
  const stats = [
    { number: 'IN', label: 'India & Tamil Nadu focus', icon: Globe },
    { number: 'API', label: 'WhatsApp Business platform', icon: MessageCircle },
    { number: '2024', label: 'Ask Meister launch', icon: Users },
    { number: 'CS', label: 'Chennai registered office', icon: Award }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Your success drives every product decision we make.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We engineer solutions that simplify communication and engagement.'
    },
    {
      icon: Target,
      title: 'Purpose Driven',
      description: 'From hospital bots to Ask Meister™, we build products with impact.'
    },
    {
      icon: TrendingUp,
      title: 'Growth Together',
      description: 'As we grow, we empower you to grow smarter and more affordably.'
    }
  ];

  const timeline = [
    {
      year: '2019',
      title: 'Meister Solutions Founded',
      description: 'Started as a consulting firm specializing in Sitecore (XP/XM) and BigCommerce implementations'  // adjust if 2019 or 2020
    },
    {
      year: '2020',
      title: 'Expanded to Hospital Chatbots',
      description: 'Built appointment, scheduling, follow-up & dashboard bots for hospitals, dynamically backed by databases.'
    },
    {
      year: '2023',
      title: 'Ask Meister™ Concept Realized',
      description: 'Realized that small businesses struggle with expensive Meta/Google ads – WhatsApp could be the answer.'
    },
    {
      year: '2024',
      title: 'Launched Ask Meister™',
      description: 'Released our WhatsApp marketing platform with pre-approved templates, click-to-action forms & no spam flags.'
    },
    {
      year: '2026',
      title: 'Early Traction',
      description: 'Ask Meister™ adopted by businesses seeking high-impact marketing via WhatsApp.'
    }
  ];

  return (
     <>
      <Helmet>
        <title>About Ask Meister | WhatsApp Platform for Tamil Nadu | Ask Meister</title>
        <meta name="description" content="About Ask Meister: WhatsApp marketing software from Meister Solutions. Built for bulk messaging, Business API, and chatbots—Chennai HQ, customers across India." />
        <meta name="keywords" content="about Ask Meister, whatsapp marketing company, whatsapp business platform, business communication, company story, meister solutions" />
        <link rel="canonical" href="https://askmeister.com/about" />
        <meta property="og:title" content="About Ask Meister | WhatsApp Platform for Tamil Nadu" />
        <meta property="og:description" content="How Ask Meister helps businesses use the WhatsApp Business Platform for bulk messaging, API campaigns, and chatbots." />
        <meta property="og:url" content="https://askmeister.com/about" />
      </Helmet>
    <div className="page-wrap">
      {/* Hero */}
      <section className="page-hero py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-brand block">Ask Meister™</span>
          </h1>
          <p className="text-xl text-ink-muted mb-8 leading-relaxed">
            Product of <strong>Meister Solutions</strong>, initially focused on enterprise consulting for Sitecore & BigCommerce. We then built hospital chatbots before launching Ask Meister™ in 2024 — making affordable WhatsApp marketing accessible to growing businesses.
          </p>
          <p className="text-ink-muted italic">
            Check out our parent company at <a href="https://meistersolutions.net" className="text-brand underline">meistersolutions.net</a> to learn more.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-brand" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-ink-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-surface-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Story</h2>
            <div className="space-y-4 text-ink-muted leading-relaxed">
              <p>
                Meister Solutions launched in 2019–2020 offering end-to-end software consulting, with specialization in Sitecore XP/XM and BigCommerce solutions.
              </p>
              <p>
                In 2020, we expanded into healthcare automation, building dynamic hospital chatbots for scheduling, appointments, follow-ups, and adopting database integrations.
              </p>
              <p>
                Seeing the high pressure of Meta and Google ads for small businesses, we recognized WhatsApp as an affordable marketing channel—and so Ask Meister™ was born.
              </p>
              <p>
                Since our 2024 launch, Ask Meister™ lets businesses send pre-approved templates, include forms, links, and click-to-call features without spam risk. We’re growing with a community focused on high-impact messaging.
              </p>
            </div>
          </div>
          <div>
            <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Our team working together" className="rounded-xl shadow-lg" />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="glass-card p-8">
            <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-brand" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-ink-muted leading-relaxed">
              Empower small and mid‑sized businesses worldwide with WhatsApp marketing tools that are affordable, reliable, and results‑oriented.
            </p>
          </div>
          <div className="glass-card p-8">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <Globe className="w-6 h-6 text-brand" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-ink-muted leading-relaxed">
              To be the trusted platform for businesses seeking meaningful customer engagement—without breaking the bank on ads.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-surface-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Values</h2>
          <p className="text-lg text-ink-muted">Fundamentals that guide every milestone</p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <div key={i} className="glass-card p-6 text-center">
              <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <v.icon className="w-6 h-6 text-brand" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{v.title}</h3>
              <p className="text-ink-muted">{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Journey</h2>
          <p className="text-lg text-ink-muted">Milestones shaping our evolution</p>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {timeline.map((t, i) => (
            <div key={i} className="flex items-start">
              <div className="w-24 text-right text-2xl font-bold text-brand mr-8">{t.year}</div>
              <div className="w-4 h-4 bg-brand rounded-full mt-2 mr-8"></div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-2">{t.title}</h3>
                <p className="text-ink-muted">{t.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Grow with Ask Meister™?</h2>
          <p className="text-lg text-white/90 mb-8">
            Join early adopters using WhatsApp to market smarter, engage better, and spend less.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-brand px-8 py-4 rounded-lg text-lg font-semibold hover:bg-surface-elevated transition-colors">Get Started Free</Link>
            <Link to="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-brand transition-colors">Contact Us</Link>
          </div>
        </div>
      </section>

      <InternalLinksHub currentPath="/about" />
    </div>
    </>
  );
};

export default About;
