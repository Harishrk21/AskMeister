import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, Calendar, Clock, CheckCircle, ArrowRight, MessageCircle, BarChart3, Zap, FileText, Bell, Heart, Shield, Users, Activity } from 'lucide-react';
import hc from '../../assets/hc.webp';
import healthcare1 from '../../assets/healthcare1.jpg'
import healthcare from '../../assets/healthcare.webp';
import healthcare2 from '../../assets/healthcare2.jpg';
import { Helmet } from 'react-helmet-async';
const HealthcareTemplate = () => {
  const features = [
    {
      icon: Calendar,
      title: 'Multi-Department Appointment Booking',
      description: 'Allow patients to book appointments across all departments through a single WhatsApp interface.',
      benefits: ['24/7 booking availability', 'Real-time slot updates', 'Automated confirmations']
    },
    {
      icon: Bell,
      title: 'Appointment Reminders',
      description: 'Reduce no-shows with automated appointment reminders sent via WhatsApp.',
      benefits: ['Reduce no-shows by 60%', 'Customizable reminder timing', 'Rescheduling options']
    },
    {
      icon: FileText,
      title: 'Lab Results Delivery',
      description: 'Securely deliver lab results and medical reports directly to patients via WhatsApp.',
      benefits: ['Secure document sharing', 'Instant delivery', 'Read receipts']
    },
    {
      icon: Heart,
      title: 'Patient Care Automation',
      description: 'Automate patient care workflows including medication reminders and follow-ups.',
      benefits: ['Medication reminders', 'Follow-up scheduling', 'Care plan updates']
    },
    {
      icon: Shield,
      title: 'HIPAA Compliant',
      description: 'Ensure patient data privacy with our HIPAA-compliant WhatsApp integration.',
      benefits: ['End-to-end encryption', 'Audit trails', 'Compliance reporting']
    },
    {
      icon: Activity,
      title: 'Emergency Alerts',
      description: 'Send critical health alerts and emergency notifications to patients and staff.',
      benefits: ['Instant emergency alerts', 'Mass notifications', 'Priority messaging']
    }
  ];

  const departments = [
    {
      name: 'Cardiology',
      description: 'Heart specialist appointments and follow-ups',
      features: ['ECG scheduling', 'Post-surgery care', 'Medication reminders']
    },
    {
      name: 'Orthopedics',
      description: 'Bone and joint care appointments',
      features: ['X-ray scheduling', 'Physical therapy', 'Surgery follow-ups']
    },
    {
      name: 'Pediatrics',
      description: 'Child healthcare and vaccination schedules',
      features: ['Vaccination reminders', 'Growth tracking', 'Parent communication']
    },
    {
      name: 'Gynecology',
      description: 'Women\'s health and maternity care',
      features: ['Prenatal appointments', 'Health screenings', 'Delivery updates']
    },
    {
      name: 'Emergency',
      description: 'Emergency department coordination',
      features: ['Triage notifications', 'Wait time updates', 'Discharge instructions']
    },
    {
      name: 'Laboratory',
      description: 'Lab test scheduling and results',
      features: ['Test scheduling', 'Result delivery', 'Report explanations']
    }
  ];

  const useCases = [
    {
      title: 'Appointment Management System',
      description: 'Complete automation of appointment booking and management',
      steps: [
        'Patient selects department via WhatsApp',
        'Available slots displayed in real-time',
        'Appointment confirmation with details',
        'Automated reminders before appointment',
        'Post-visit follow-up and feedback'
      ],
      image: healthcare1
    },
    {
      title: 'Patient Care Workflow',
      description: 'Comprehensive patient care from admission to discharge',
      steps: [
        'Admission process automation',
        'Treatment plan communication',
        'Medication reminders',
        'Progress updates to family',
        'Discharge instructions and follow-up'
      ],
      image: healthcare
    },
    {
      title: 'Emergency Response System',
      description: 'Rapid response and communication during emergencies',
      steps: [
        'Emergency alert broadcasting',
        'Staff coordination messages',
        'Patient status updates',
        'Family notifications',
        'Resource allocation updates'
      ],
      image: healthcare2
    }
  ];

  const benefits = [
    {
      metric: '60%',
      description: 'Reduction in no-shows',
      icon: Calendar
    },
    {
      metric: '80%',
      description: 'Faster appointment booking',
      icon: Clock
    },
    {
      metric: '95%',
      description: 'Patient satisfaction rate',
      icon: Heart
    },
    {
      metric: '50%',
      description: 'Reduction in admin work',
      icon: Zap
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Emily Chen',
      role: 'Chief Medical Officer',
      hospital: 'Metropolitan General Hospital',
      content: 'Ask Meister revolutionized our patient communication. Appointment no-shows dropped by 60% and patient satisfaction increased significantly.',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Dr. Robert Martinez',
      role: 'Head of Emergency',
      hospital: 'City Medical Center',
      content: 'The emergency alert system helped us coordinate better during critical situations. Staff response time improved by 40%.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  return (
     <>
      <Helmet>
        <title>WhatsApp for Healthcare | Hospital Appointment Booking & Patient Care | Ask Meister</title>
        <meta name="description" content="Revolutionize healthcare with WhatsApp automation. Multi-department appointment booking, patient care, HIPAA-compliant messaging for hospitals and clinics." />
        <meta name="keywords" content="whatsapp for healthcare, hospital automation, appointment booking, patient care, medical chatbot, healthcare messaging, hospital communication, patient engagement" />
        <link rel="canonical" href="https://askmeister.com/solutions/healthcare" />
        <meta property="og:title" content="WhatsApp for Healthcare | Hospital Automation" />
        <meta property="og:description" content="Transform patient care with WhatsApp automation for appointments, communication, and healthcare management." />
        <meta property="og:url" content="https://askmeister.com/solutions/healthcare" />
      </Helmet>
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                  <Stethoscope className="w-4 h-4 mr-2" />
                  Healthcare Solution
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Revolutionize Healthcare with
                  <span className="text-green-600 block">WhatsApp Automation</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Streamline patient care, automate appointments across all departments, and enhance 
                  communication between patients, families, and medical staff with our HIPAA-compliant platform.
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
                src={healthcare1}
                alt="Healthcare WhatsApp Automation"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-green-600 text-white p-3 rounded-full animate-pulse">
                <Heart className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Coverage */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Department Coverage
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Automate appointments and communication across all hospital departments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((department, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{department.name}</h3>
                <p className="text-gray-600 mb-4">{department.description}</p>
                <ul className="space-y-2">
                  {department.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Healthcare Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive tools designed specifically for healthcare institutions
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
              Healthcare Automation Workflows
            </h2>
            <p className="text-lg text-gray-600">
              See how hospitals are transforming patient care with automation
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
              What Healthcare Leaders Say
            </h2>
            <p className="text-lg text-gray-600">
              Hear from medical professionals who transformed their patient care
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
                    <div className="text-sm text-gray-500">{testimonial.hospital}</div>
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
            Ready to Transform Patient Care?
          </h2>
          <p className="text-lg text-green-100 mb-8">
            Join leading hospitals and clinics already using Ask Meister to enhance patient communication and care.
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

export default HealthcareTemplate;