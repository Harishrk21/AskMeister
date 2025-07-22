import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, DollarSign, Users, Heart, Zap, Target, Coffee } from 'lucide-react';

const Careers = () => {
  const jobs = [
    {
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      salary: '$120,000 - $160,000',
      description: 'Join our engineering team to build scalable WhatsApp marketing solutions. Work with React, Node.js, and modern cloud technologies.',
      requirements: [
        '5+ years of full-stack development experience',
        'Proficiency in React, Node.js, and TypeScript',
        'Experience with cloud platforms (AWS/GCP)',
        'Strong understanding of API design and microservices'
      ]
    },
    {
      title: 'Product Marketing Manager',
      department: 'Marketing',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$90,000 - $120,000',
      description: 'Drive product marketing strategy for our WhatsApp marketing platform. Lead go-to-market initiatives and customer success stories.',
      requirements: [
        '3+ years of product marketing experience',
        'Experience in B2B SaaS marketing',
        'Strong analytical and communication skills',
        'Knowledge of marketing automation tools'
      ]
    },
    {
      title: 'Customer Success Manager',
      department: 'Customer Success',
      location: 'Remote',
      type: 'Full-time',
      salary: '$70,000 - $90,000',
      description: 'Help our customers achieve success with WhatsApp marketing. Build relationships and drive customer retention and growth.',
      requirements: [
        '2+ years of customer success experience',
        'Excellent communication and problem-solving skills',
        'Experience with SaaS platforms',
        'Passion for helping customers succeed'
      ]
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      salary: '$110,000 - $140,000',
      description: 'Build and maintain our infrastructure to support millions of WhatsApp messages. Focus on scalability, reliability, and security.',
      requirements: [
        '4+ years of DevOps/Infrastructure experience',
        'Experience with Kubernetes, Docker, and CI/CD',
        'Knowledge of monitoring and logging tools',
        'Strong scripting skills (Python, Bash)'
      ]
    },
    {
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$85,000 - $110,000',
      description: 'Design intuitive and beautiful user experiences for our WhatsApp marketing platform. Work closely with product and engineering teams.',
      requirements: [
        '3+ years of UX/UI design experience',
        'Proficiency in Figma, Sketch, or similar tools',
        'Strong portfolio showcasing B2B SaaS design',
        'Understanding of user research and testing'
      ]
    },
    {
      title: 'Sales Development Representative',
      department: 'Sales',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      salary: '$50,000 - $70,000 + Commission',
      description: 'Generate and qualify leads for our sales team. Be the first point of contact for potential customers interested in WhatsApp marketing.',
      requirements: [
        '1+ years of sales or business development experience',
        'Excellent communication and interpersonal skills',
        'Experience with CRM tools (HubSpot, Salesforce)',
        'Self-motivated and goal-oriented'
      ]
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance plus wellness stipend'
    },
    {
      icon: DollarSign,
      title: 'Competitive Salary',
      description: 'Market-competitive salaries with equity options and performance bonuses'
    },
    {
      icon: Clock,
      title: 'Flexible Schedule',
      description: 'Flexible working hours and unlimited PTO policy'
    },
    {
      icon: Users,
      title: 'Remote-First',
      description: 'Work from anywhere with quarterly team meetups and retreats'
    },
    {
      icon: Zap,
      title: 'Learning Budget',
      description: '$2,000 annual learning and development budget for courses and conferences'
    },
    {
      icon: Coffee,
      title: 'Great Perks',
      description: 'Free lunch, snacks, and coffee plus home office setup allowance'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Customer Obsession',
      description: 'We put our customers at the center of everything we do'
    },
    {
      icon: Zap,
      title: 'Move Fast',
      description: 'We iterate quickly and learn from our mistakes'
    },
    {
      icon: Users,
      title: 'Team First',
      description: 'We succeed together and support each other'
    },
    {
      icon: Heart,
      title: 'Be Authentic',
      description: 'We bring our whole selves to work and value diversity'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#25D366]/10 via-white to-[#128C7E]/5 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#1C1C1C] mb-6">
            Join Our
            <span className="text-[#25D366] block">Amazing Team</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Help us revolutionize business communication through WhatsApp marketing. 
            Build the future of customer engagement with a passionate team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#open-positions"
              className="bg-[#25D366] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#128C7E] transition-colors"
            >
              View Open Positions
            </a>
            <Link
              to="/about"
              className="border-2 border-[#25D366] text-[#25D366] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#25D366] hover:text-white transition-colors"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600">
              The principles that guide how we work and grow together
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#25D366]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-[#25D366]" />
                </div>
                <h3 className="text-xl font-semibold text-[#1C1C1C] mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-4">
              Why Work With Us?
            </h2>
            <p className="text-lg text-gray-600">
              We offer competitive benefits and a great work environment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-[#25D366]/10 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-[#25D366]" />
                </div>
                <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-4">
              Open Positions
            </h2>
            <p className="text-lg text-gray-600">
              Find your next opportunity with us
            </p>
          </div>
          
          <div className="space-y-6">
            {jobs.map((job, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-[#1C1C1C] mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {job.department}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {job.type}
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="w-4 h-4 mr-1" />
                        {job.salary}
                      </div>
                    </div>
                  </div>
                  <button className="bg-[#25D366] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#128C7E] transition-colors mt-4 lg:mt-0">
                    Apply Now
                  </button>
                </div>
                
                <p className="text-gray-600 mb-6">{job.description}</p>
                
                <div>
                  <h4 className="font-semibold text-[#1C1C1C] mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {job.requirements.map((requirement, reqIndex) => (
                      <li key={reqIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-[#25D366] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-600">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-[#F7F7F7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-8">
            Our Hiring Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-[#1C1C1C] mb-2">Apply</h3>
              <p className="text-gray-600 text-sm">Submit your application and resume</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-[#1C1C1C] mb-2">Screen</h3>
              <p className="text-gray-600 text-sm">Initial phone/video screening</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-[#1C1C1C] mb-2">Interview</h3>
              <p className="text-gray-600 text-sm">Technical and cultural fit interviews</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-semibold text-[#1C1C1C] mb-2">Offer</h3>
              <p className="text-gray-600 text-sm">Reference check and job offer</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#25D366]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Don't See the Right Role?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            We're always looking for talented people to join our team. 
            Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-[#25D366] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Send Your Resume
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#25D366] transition-colors"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;