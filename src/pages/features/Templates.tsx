import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, CheckCircle, ArrowRight, MessageCircle, Zap, Shield, Edit, Copy, Globe } from 'lucide-react';
import template from '../../assets/templates.png'
import { Helmet } from 'react-helmet-async';
const Templates = () => {
  const [copiedTemplate, setCopiedTemplate] = useState<string | null>(null);

  const copyToClipboard = (text: string, templateId: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedTemplate(templateId);
      setTimeout(() => setCopiedTemplate(null), 2000);
    });
  };

  const features = [
    {
      icon: FileText,
      title: 'Pre-approved Templates',
      description: 'Use WhatsApp-approved message templates that comply with business policies.',
      benefits: ['WhatsApp compliance', 'Faster approval', 'Policy adherence']
    },
    {
      icon: Edit,
      title: 'Template Builder',
      description: 'Create custom templates with our intuitive drag-and-drop template builder.',
      benefits: ['Visual editor', 'Custom variables', 'Rich media support']
    },
    {
      icon: Copy,
      title: 'Template Library',
      description: 'Access hundreds of pre-built templates for different industries and use cases.',
      benefits: ['Industry-specific', 'Ready to use', 'Regularly updated']
    },
    {
      icon: Globe,
      title: 'Multi-language Support',
      description: 'Create templates in multiple languages to reach global audiences.',
      benefits: ['50+ languages', 'Localization', 'Cultural adaptation']
    },
    {
      icon: Zap,
      title: 'Dynamic Variables',
      description: 'Personalize templates with dynamic variables like name, order details, and more.',
      benefits: ['Personalization', 'Dynamic content', 'Custom fields']
    },
    {
      icon: Shield,
      title: 'Approval Management',
      description: 'Streamlined approval process for new templates with status tracking.',
      benefits: ['Status tracking', 'Quick approval', 'Compliance check']
    }
  ];

  const templateCategories = [
    {
      title: 'Welcome Messages',
      description: 'Greet new customers and subscribers',
      icon: '👋',
      templates: [
        {
          id: 'welcome-1',
          name: 'Basic Welcome',
          content: `Hi {{name}}! 👋

Welcome to {{company_name}}! We're excited to have you on board.

Here's what you can expect:
✅ Exclusive offers and updates
✅ 24/7 customer support
✅ Latest product announcements

Reply STOP to unsubscribe anytime.

Best regards,
{{company_name}} Team`
        },
        {
          id: 'welcome-2',
          name: 'Service Welcome',
          content: `Hello {{name}}! 🎉

Thank you for choosing {{company_name}}!

Your account is now active and ready to use. Here are your next steps:

1️⃣ Complete your profile
2️⃣ Explore our features
3️⃣ Contact support if needed

Need help? Reply to this message anytime.

Welcome aboard!
{{company_name}}`
        }
      ]
    },
    {
      title: 'Order Updates',
      description: 'Keep customers informed about their orders',
      icon: '📦',
      templates: [
        {
          id: 'order-1',
          name: 'Order Confirmation',
          content: `Hi {{customer_name}}! ✅

Your order has been confirmed!

📋 Order Details:
• Order ID: {{order_id}}
• Amount: ₹{{amount}}
• Items: {{item_count}} items

📅 Expected Delivery: {{delivery_date}}
🚚 Tracking: {{tracking_url}}

Questions? Reply to this message.

Thank you for shopping with {{company_name}}!`
        },
        {
          id: 'order-2',
          name: 'Shipping Update',
          content: `Great news {{customer_name}}! 🚚

Your order #{{order_id}} is on its way!

📦 Shipped via: {{courier_name}}
📍 Tracking ID: {{tracking_id}}
📅 Expected delivery: {{delivery_date}}

Track your order: {{tracking_link}}

We'll notify you once it's delivered.

{{company_name}} Team`
        }
      ]
    },
    {
      title: 'Promotional Offers',
      description: 'Share deals and special offers',
      icon: '🎉',
      templates: [
        {
          id: 'promo-1',
          name: 'Flash Sale',
          content: `🔥 FLASH SALE ALERT! 🔥

Hi {{name}}!

Get {{discount}}% OFF on all products!

⏰ Limited time offer - Only {{hours}} hours left!
🛒 Use code: {{promo_code}}
💰 Save up to ₹{{max_savings}}

Shop now: {{shop_link}}

Don't miss out!
{{company_name}}`
        },
        {
          id: 'promo-2',
          name: 'Exclusive Discount',
          content: `🎁 Exclusive offer for {{name}}!

We have a special {{discount}}% discount just for you!

✨ Valid on: {{product_category}}
⏳ Expires: {{expiry_date}}
🏷️ Code: {{discount_code}}

Claim your discount: {{claim_link}}

Happy shopping!
{{company_name}} Team`
        }
      ]
    },
    {
      title: 'Appointment Reminders',
      description: 'Remind customers about upcoming appointments',
      icon: '📅',
      templates: [
        {
          id: 'appointment-1',
          name: 'Appointment Reminder',
          content: `📅 Appointment Reminder

Hi {{patient_name}},

This is a reminder for your appointment:

🏥 Doctor: Dr. {{doctor_name}}
📅 Date: {{appointment_date}}
⏰ Time: {{appointment_time}}
📍 Location: {{clinic_address}}

Please arrive 15 minutes early.

Need to reschedule? Reply RESCHEDULE
Cancel? Reply CANCEL

See you soon!
{{clinic_name}}`
        },
        {
          id: 'appointment-2',
          name: 'Service Appointment',
          content: `🔧 Service Reminder

Hello {{customer_name}},

Your {{service_type}} appointment is scheduled for:

📅 Date: {{service_date}}
⏰ Time: {{service_time}}
📍 Address: {{service_address}}
👨‍🔧 Technician: {{technician_name}}

Estimated duration: {{duration}}

Questions? Call {{phone_number}}

{{company_name}} Services`
        }
      ]
    },
    {
      title: 'Support Messages',
      description: 'Provide customer support and assistance',
      icon: '🎧',
      templates: [
        {
          id: 'support-1',
          name: 'Issue Acknowledgment',
          content: `Hi {{customer_name}},

Thank you for contacting us regarding your issue.

🎫 Ticket ID: {{ticket_id}}
📝 Issue: {{issue_description}}
⏱️ Priority: {{priority_level}}

Our team is working on it and will update you within {{response_time}}.

Need urgent help? Call {{support_phone}}

{{company_name}} Support Team`
        },
        {
          id: 'support-2',
          name: 'Issue Resolution',
          content: `✅ Issue Resolved!

Hi {{customer_name}},

Great news! Your issue has been resolved.

🎫 Ticket ID: {{ticket_id}}
✅ Status: Resolved
📝 Solution: {{solution_summary}}

Is everything working fine now? Please reply YES or NO.

Rate our support: {{feedback_link}}

Thank you for your patience!
{{company_name}} Support`
        }
      ]
    },
    {
      title: 'Event Invitations',
      description: 'Invite customers to events and webinars',
      icon: '🎪',
      templates: [
        {
          id: 'event-1',
          name: 'Webinar Invitation',
          content: `🎯 You're Invited!

Hi {{name}},

Join our exclusive webinar on "{{webinar_topic}}"

📅 Date: {{event_date}}
⏰ Time: {{event_time}}
🎤 Speaker: {{speaker_name}}
💻 Platform: {{platform_name}}

What you'll learn:
• {{learning_point_1}}
• {{learning_point_2}}
• {{learning_point_3}}

Register now: {{registration_link}}

Limited seats available!
{{company_name}}`
        },
        {
          id: 'event-2',
          name: 'Product Launch',
          content: `🚀 Product Launch Event!

Hello {{name}},

You're invited to the launch of our latest {{product_name}}!

🎉 Event: {{event_name}}
📅 Date: {{launch_date}}
⏰ Time: {{launch_time}}
📍 Venue: {{venue_name}}

🎁 Special launch offers
🍽️ Refreshments included
🎪 Live demonstrations

RSVP: {{rsvp_link}}

See you there!
{{company_name}} Team`
        }
      ]
    }
  ];

  const benefits = [
    {
      metric: '500+',
      description: 'Ready-to-use templates',
      icon: FileText
    },
    {
      metric: '50+',
      description: 'Supported languages',
      icon: Globe
    },
    {
      metric: '99%',
      description: 'Approval success rate',
      icon: CheckCircle
    },
    {
      metric: '24h',
      description: 'Average approval time',
      icon: Zap
    }
  ];

  return (
      <>
      <Helmet>
        <title>WhatsApp Message Templates | Pre-approved Templates & Builder | AskMeister</title>
        <meta name="description" content="Access 500+ WhatsApp message templates for business. Pre-approved templates for promotions, notifications, and customer engagement. Easy template builder included." />
        <meta name="keywords" content="whatsapp templates, message templates, whatsapp business templates, pre-approved templates, template builder, promotional templates, notification templates" />
        <link rel="canonical" href="https://askmeister.com/features/templates" />
        <meta property="og:title" content="WhatsApp Message Templates | Pre-approved Templates" />
        <meta property="og:description" content="Professional WhatsApp message templates for business communication and marketing campaigns." />
        <meta property="og:url" content="https://askmeister.com/features/templates" />
      </Helmet>
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                  <FileText className="w-4 h-4 mr-2" />
                  Templates Feature
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  WhatsApp Message
                  <span className="text-green-600 block">Templates Made Easy</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Create, manage, and get approval for WhatsApp message templates with ease. 
                  Access hundreds of pre-built templates or create custom ones for your business.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
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

            <div className="relative max-w-6xl mx-auto">
  <img
    src={template}
    alt="Templates Dashboard"
    className="w-full max-h-[600px] object-contain rounded-2xl shadow-2xl"
  />
  <div className="absolute -top-4 -right-4 bg-green-600 text-white p-3 rounded-full animate-bounce">
    <FileText className="w-6 h-6" />
  </div>
</div>

          </div>
        </div>
      </section>

      {/* Template Categories with Copyable Templates */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready-to-Use Templates
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Copy and customize these professional templates for your business needs
            </p>
          </div>

          <div className="space-y-16">
            {templateCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center mb-8">
                  <span className="text-4xl mr-4">{category.icon}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {category.templates.map((template, templateIndex) => (
                    <div key={templateIndex} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-lg font-semibold text-gray-900">{template.name}</h4>
                        <button
                          onClick={() => copyToClipboard(template.content, template.id)}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                            copiedTemplate === template.id
                              ? 'bg-green-100 text-green-700'
                              : 'bg-green-100 text-green-700 hover:bg-green-200'
                          }`}
                        >
                          {copiedTemplate === template.id ? 'Copied!' : 'Copy Template'}
                        </button>
                      </div>
                      
                      <div className="bg-gray-50 rounded-lg p-4">
                        <pre className="text-sm text-gray-700 whitespace-pre-wrap font-sans leading-relaxed">
                          {template.content}
                        </pre>
                      </div>
                      
                      <div className="mt-4 text-xs text-gray-500">
                        {/* Variables like {{name}}, {{company_name}} will be automatically replaced with actual values */}
                      </div>
                    </div>
                  ))}
                </div>
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
              Advanced Template Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Powerful tools to create, manage, and optimize your message templates
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

      {/* How to Use Templates */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How to Use These Templates
            </h2>
            <p className="text-lg text-gray-600">
              Simple steps to customize and use our templates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Copy Template</h3>
              <p className="text-gray-600">Click the "Copy Template" button to copy the template to your clipboard</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Customize Variables</h3>
               <p className="text-gray-600">Replace variables like "Name" and "CompanyName" with your actual values</p> 
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Send Messages</h3>
              <p className="text-gray-600">Use the customized template in your WhatsApp marketing campaigns</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Create Professional Templates?
          </h2>
          <p className="text-lg text-green-100 mb-8">
            Start using our template library and builder to create engaging WhatsApp messages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Free Trial
            </Link>
            <Link
              to="/pricing"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Templates;