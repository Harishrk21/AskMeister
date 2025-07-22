import React from 'react';
import { Link } from 'react-router-dom';

const Privacy = () => {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-[#F7F7F7] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-[#1C1C1C] mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600">
            Last updated: January 1, 2024
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2>1. Introduction</h2>
            <p>
              Meister Solutions ("we," "our," or "us") operates AskMeister, a WhatsApp marketing automation platform. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service.
            </p>

            <h2>2. Information We Collect</h2>
            
            <h3>2.1 Information You Provide</h3>
            <ul>
              <li><strong>Account Information:</strong> Name, email address, phone number, company details</li>
              <li><strong>Payment Information:</strong> Billing address, payment method details (processed securely by our payment processors)</li>
              <li><strong>Contact Data:</strong> Contact lists, phone numbers, and names you upload to our platform</li>
              <li><strong>Message Content:</strong> Templates and messages you create and send through our platform</li>
            </ul>

            <h3>2.2 Information We Collect Automatically</h3>
            <ul>
              <li><strong>Usage Data:</strong> How you interact with our service, features used, time spent</li>
              <li><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers</li>
              <li><strong>Log Data:</strong> Server logs, error reports, performance data</li>
              <li><strong>Cookies:</strong> We use cookies and similar technologies to enhance your experience</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send administrative information and service updates</li>
              <li>Respond to your comments, questions, and customer service requests</li>
              <li>Monitor and analyze usage patterns and trends</li>
              <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>4. How We Share Your Information</h2>
            <p>We may share your information in the following situations:</p>
            
            <h3>4.1 Service Providers</h3>
            <p>We share information with third-party service providers who perform services on our behalf, including:</p>
            <ul>
              <li>WhatsApp Business API providers</li>
              <li>Cloud hosting services</li>
              <li>Payment processors</li>
              <li>Analytics providers</li>
              <li>Customer support tools</li>
            </ul>

            <h3>4.2 Legal Requirements</h3>
            <p>We may disclose your information if required by law or in response to valid legal requests.</p>

            <h3>4.3 Business Transfers</h3>
            <p>In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</p>

            <h2>5. WhatsApp Integration</h2>
            <p>
              Our service integrates with WhatsApp Business API. When you send messages through our platform:
            </p>
            <ul>
              <li>Messages are transmitted through WhatsApp's infrastructure</li>
              <li>WhatsApp's privacy policy and terms apply to message delivery</li>
              <li>We do not store message content after delivery unless required for service functionality</li>
              <li>Delivery reports and engagement metrics are collected for analytics</li>
            </ul>

            <h2>6. Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your information:
            </p>
            <ul>
              <li>Encryption in transit and at rest</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication</li>
              <li>Employee training on data protection</li>
              <li>Incident response procedures</li>
            </ul>

            <h2>7. Data Retention</h2>
            <p>
              We retain your information for as long as necessary to provide our services and comply with legal obligations:
            </p>
            <ul>
              <li>Account information: Until account deletion plus 30 days</li>
              <li>Contact data: Until you delete it or close your account</li>
              <li>Usage data: Up to 2 years for analytics purposes</li>
              <li>Financial records: As required by law (typically 7 years)</li>
            </ul>

            <h2>8. Your Rights and Choices</h2>
            <p>You have the following rights regarding your personal information:</p>
            <ul>
              <li><strong>Access:</strong> Request a copy of your personal information</li>
              <li><strong>Correction:</strong> Update or correct inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
              <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
            </ul>

            <h2>9. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers, including:
            </p>
            <ul>
              <li>Standard contractual clauses</li>
              <li>Adequacy decisions by relevant authorities</li>
              <li>Certification schemes</li>
            </ul>

            <h2>10. Children's Privacy</h2>
            <p>
              Our service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
            </p>

            <h2>11. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any material changes by:
            </p>
            <ul>
              <li>Posting the updated policy on our website</li>
              <li>Sending an email notification</li>
              <li>Providing notice through our service</li>
            </ul>

            <h2>12. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <ul>
              <li>Email: privacy@meisternotify.com</li>
              <li>Address: 123 Business Ave, San Francisco, CA 94105</li>
              <li>Phone: +1 (555) 123-4567</li>
            </ul>

            <h2>13. Regional Privacy Rights</h2>
            
            <h3>13.1 California Residents (CCPA)</h3>
            <p>California residents have additional rights under the California Consumer Privacy Act, including the right to know, delete, and opt-out of the sale of personal information.</p>

            <h3>13.2 European Residents (GDPR)</h3>
            <p>European residents have rights under the General Data Protection Regulation, including the right to access, rectify, erase, restrict processing, and data portability.</p>
          </div>

          <div className="mt-12 p-6 bg-[#F7F7F7] rounded-lg">
            <h3 className="text-lg font-semibold text-[#1C1C1C] mb-4">Questions About Privacy?</h3>
            <p className="text-gray-600 mb-4">
              We're committed to protecting your privacy. If you have any questions or concerns about how we handle your data, please don't hesitate to reach out.
            </p>
            <Link
              to="/contact"
              className="bg-[#25D366] text-white px-6 py-2 rounded-lg hover:bg-[#128C7E] transition-colors inline-block"
            >
              Contact Privacy Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;