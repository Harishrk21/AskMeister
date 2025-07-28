import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Users, Clock, CheckCircle, ArrowRight, MessageCircle, BarChart3, Zap, FileText, Calendar, Bell, BookOpen, Award, UserCheck } from 'lucide-react';
import edus from '../../assets/edus.webp';
import pta from '../../assets/pta.jpeg';
import edusample from '../../assets/edusample.webp';
import { Helmet } from 'react-helmet-async';

const EducationTemplate = () => {
  const features = [
    {
      icon: UserCheck,
      title: 'Quick Admission Forms',
      description: 'Streamline the admission process with automated WhatsApp forms that collect student information instantly.',
      benefits: ['Reduce paperwork by 80%', 'Instant form submission', 'Automated follow-ups']
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
    {
      metric: '85%',
      description: 'Increase in parent engagement',
      icon: Users
    },
    {
      metric: '60%',
      description: 'Reduction in administrative work',
      icon: Clock
    },
    {
      metric: '95%',
      description: 'Student satisfaction rate',
      icon: GraduationCap
    },
    {
      metric: '40%',
      description: 'Faster admission process',
      icon: Zap
    }
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
        <title>WhatsApp for Education | Student Communication & Admission Automation |Ask Meister</title>
        <meta name="description" content="Transform education with WhatsApp automation. Quick admission forms, parent notifications, student engagement, and automated communication for schools and universities." />
        <meta name="keywords" content="whatsapp for education, student communication, admission automation, parent notifications, educational chatbot, school automation, university messaging, student engagement" />
        <link rel="canonical" href="https://askmeister.com/solutions/education" />
        <meta property="og:title" content="WhatsApp for Education | Student Communication Automation" />
        <meta property="og:description" content="Streamline education communication with WhatsApp automation for admissions, student support, and parent engagement." />
        <meta property="og:url" content="https://askmeister.com/solutions/education" />
      </Helmet>
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  Education Solution
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Transform Education with
                  <span className="text-green-600 block">WhatsApp Automation</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Streamline admissions, enhance parent communication, and improve student engagement 
                  with our specialized WhatsApp automation platform for educational institutions.
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
                src={edus}
                alt="Education WhatsApp Automation"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-green-600 text-white p-3 rounded-full animate-bounce">
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Education Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to modernize your educational institution's communication
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real-World Use Cases
            </h2>
            <p className="text-lg text-gray-600">
              See how educational institutions are transforming their operations
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
      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Educators Say
            </h2>
            <p className="text-lg text-gray-600">
              Hear from educational leaders who transformed their institutions
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
                    <div className="text-sm text-gray-500">{testimonial.school}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Educational Institution?
          </h2>
          <p className="text-lg text-green-100 mb-8">
            Join hundreds of schools and universities already using Ask Meister to enhance their communication.
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

export default EducationTemplate;