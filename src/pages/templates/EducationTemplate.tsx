import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Users, Clock, CheckCircle, ArrowRight, MessageCircle, BarChart3, Zap, FileText, Calendar, Bell, BookOpen, Award, UserCheck } from 'lucide-react';
import edus from '../../assets/edus.webp';
import pta from '../../assets/pta.jpeg';
import edusample from '../../assets/edusample.webp';
import { Helmet } from 'react-helmet-async';
import InternalLinksHub from '../../components/InternalLinksHub';
import SeoBreadcrumbs from '../../components/SeoBreadcrumbs';
import { faqPageSchema } from '../../utils/seoSchema';

const EducationTemplate = () => {
  const educationFaq = [
    {
      question: 'What is WhatsApp software for universities?',
      answer:
        'It is a messaging layer on the WhatsApp Business Platform for admissions, student services, and parent updates—using approved templates and opt-in lists.',
    },
    {
      question: 'Can colleges integrate WhatsApp with an ERP?',
      answer:
        'Many institutions pair WhatsApp automation with an ERP via exports, APIs, or manual uploads. Ask Meister focuses on the messaging and workflow side.',
    },
  ];
  const faqSchema = faqPageSchema(
    educationFaq.map((f) => ({ question: f.question, answer: f.answer }))
  );

  const features = [
    {
      icon: UserCheck,
      title: 'Quick Admission Forms',
      description: 'Streamline the admission process with automated WhatsApp forms that collect student information instantly.',
      benefits: ['Reduce manual paperwork', 'Instant form submission', 'Automated follow-ups']
    },
    {
      icon: Bell,
      title: 'Parent Notifications',
      description: 'Keep parents informed with automated updates about their child\'s progress, events, and important announcements.',
      benefits: ['Real-time updates', 'Event reminders', 'Progress reports']
    },
    {
      icon: Calendar,
      title: 'Class Scheduling',
      description: 'Automate class schedules, exam timetables, and event notifications to students and parents.',
      benefits: ['Automated scheduling', 'Exam reminders', 'Event notifications']
    },
    {
      icon: BookOpen,
      title: 'Assignment Reminders',
      description: 'Send automated reminders for assignments, homework, and project deadlines to improve submission rates.',
      benefits: ['Deadline reminders', 'Submission tracking', 'Grade notifications']
    },
    {
      icon: Award,
      title: 'Student Support',
      description: 'Provide 24/7 student support with AI chatbots that can answer common questions and guide students.',
      benefits: ['24/7 availability', 'Instant responses', 'Multi-language support']
    },
    {
      icon: BarChart3,
      title: 'Attendance Tracking',
      description: 'Automate attendance notifications to parents and track student participation in real-time.',
      benefits: ['Real-time tracking', 'Parent notifications', 'Attendance reports']
    }
  ];

  const useCases = [
    {
      title: 'Admission Process Automation',
      description: 'Automate the entire admission process from inquiry to enrollment',
      steps: [
        'Student inquiry through WhatsApp',
        'Automated admission form sharing',
        'Document collection and verification',
        'Interview scheduling',
        'Admission confirmation and fee payment'
      ],
      image: edus
    },
    {
      title: 'Parent-Teacher Communication',
      description: 'Enhance communication between parents and teachers',
      steps: [
        'Daily progress updates',
        'Behavioral reports',
        'Meeting scheduling',
        'Event notifications',
        'Emergency alerts'
      ],
      image: pta
    },
    {
      title: 'Student Engagement',
      description: 'Keep students engaged with interactive learning support',
      steps: [
        'Assignment reminders',
        'Study material sharing',
        'Doubt clearing sessions',
        'Exam preparation tips',
        'Career guidance'
      ],
      image: edusample
    }
  ];

  const benefits = [
    { metric: 'Opt-in', description: 'List-based messaging', icon: Users },
    { metric: 'Templates', description: 'Meta-approved flows', icon: Clock },
    { metric: 'Inbox', description: 'Team hand-off', icon: GraduationCap },
    { metric: 'ERP-ready', description: 'Export & API paths', icon: Zap },
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Wilson',
      role: 'Principal',
      school: 'Greenwood International School',
      content: 'Ask Meister transformed our parent communication. We now have 95% parent engagement compared to 40% with traditional methods.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Antony Raj',
      role: 'Admissions Director',
      school: 'Tech Valley Academy',
      content: 'Our admission process is now 3x faster. Students can complete forms and submit documents through WhatsApp in minutes.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  return (
      <>
      <Helmet>
        <title>WhatsApp Software for Universities & Colleges | Education Automation | Ask Meister</title>
        <meta name="description" content="WhatsApp software for universities, colleges, and schools: educational admissions automation, parent communication, and ERP-integrated student workflows." />
        <meta name="keywords" content="whatsapp software for universities, whatsapp software for colleges, whatsapp software for higher ed, whatsapp automation for educational admissions, education whatsapp automation, school erp with whatsapp integration" />
        <link rel="canonical" href="https://askmeister.com/whatsapp-software-for-universities" />
        <meta property="og:title" content="WhatsApp for Education | Student Communication Automation" />
        <meta property="og:description" content="Streamline education communication with WhatsApp automation for admissions, student support, and parent engagement." />
        <meta property="og:url" content="https://askmeister.com/whatsapp-software-for-universities" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
    <div className="page-wrap">
      <SeoBreadcrumbs items={[{ name: 'WhatsApp software for universities', path: '/whatsapp-software-for-universities' }]} />
      {/* Hero Section */}
      <section className="page-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  Education Solution
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                  Transform Education with
                  <span className="text-brand block">WhatsApp Automation</span>
                </h1>
                <p className="text-xl text-ink-muted leading-relaxed">
                  Streamline admissions, enhance parent communication, and improve student engagement 
                  with our specialized WhatsApp automation platform for educational institutions.
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
                src={edus}
                alt="Education WhatsApp Automation"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-brand text-white p-3 rounded-full animate-bounce">
                <GraduationCap className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Education Features
            </h2>
            <p className="text-lg text-ink-muted max-w-2xl mx-auto">
              Everything you need to modernize your educational institution's communication
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
      <section className="py-20 bg-surface-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Real-World Use Cases
            </h2>
            <p className="text-lg text-ink-muted">
              See how educational institutions are transforming their operations
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

      {/* Testimonials */}
      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Educators Say
            </h2>
            <p className="text-lg text-ink-muted">
              Hear from educational leaders who transformed their institutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass-card p-8">
                <p className="text-ink-muted mb-6 italic text-lg">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-brand">{testimonial.role}</div>
                    <div className="text-sm text-slate-400">{testimonial.school}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <InternalLinksHub currentPath="/whatsapp-software-for-universities" />

      {/* CTA Section */}
      <section className="py-20 bg-brand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Educational Institution?
          </h2>
          <p className="text-lg text-green-100 mb-4">
            Talk to us about WhatsApp for admissions, parent communication, and student support.
          </p>
          <p className="text-sm text-green-100/90 mb-8">
            Also see{' '}
            <Link to="/whatsapp-software-for-colleges" className="underline font-medium text-white">
              WhatsApp software for colleges
            </Link>{' '}
            and{' '}
            <Link to="/education-whatsapp-automation" className="underline font-medium text-white">
              education WhatsApp automation
            </Link>
            .
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

export default EducationTemplate;