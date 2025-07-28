import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-[#F7F7F7] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-[#1C1C1C] mb-4">Terms of Service</h1>
          <p className="text-lg text-gray-600">
            Last updated: January 1, 2024
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using Ask Meister ("Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>

            <h2>2. Description of Service</h2>
            <p>
              Ask Meister is a WhatsApp marketing automation platform that allows businesses to send messages, create automated workflows, and manage customer communications through the WhatsApp Business API.
            </p>

            <h2>3. User Accounts</h2>
            <p>
              To access certain features of the Service, you must register for an account. You agree to:
            </p>
            <ul>
              <li>Provide accurate, current, and complete information during registration</li>
              <li>Maintain and update your information to keep it accurate and complete</li>
              <li>Maintain the security of your password and account</li>
              <li>Accept responsibility for all activities under your account</li>
            </ul>

            <h2>4. Acceptable Use</h2>
            <p>
              You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to:
            </p>
            <ul>
              <li>Send spam, unsolicited messages, or violate anti-spam laws</li>
              <li>Violate WhatsApp's Terms of Service or Business Policy</li>
              <li>Send messages containing illegal, harmful, or offensive content</li>
              <li>Attempt to gain unauthorized access to the Service or other users' accounts</li>
              <li>Use the Service to harass, abuse, or harm others</li>
            </ul>

            <h2>5. WhatsApp Compliance</h2>
            <p>
              You acknowledge that the Service integrates with WhatsApp Business API and you must comply with:
            </p>
            <ul>
              <li>WhatsApp Business Policy</li>
              <li>WhatsApp Terms of Service</li>
              <li>All applicable messaging and privacy laws</li>
              <li>Opt-in requirements for message recipients</li>
            </ul>

            <h2>6. Payment Terms</h2>
            <p>
              For paid services:
            </p>
            <ul>
              <li>Fees are charged in advance on a monthly or annual basis</li>
              <li>All fees are non-refundable except as required by law</li>
              <li>We may change our fees with 30 days' notice</li>
              <li>You're responsible for all taxes related to your use of the Service</li>
            </ul>

            <h2>7. Data and Privacy</h2>
            <p>
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices.
            </p>

            <h2>8. Intellectual Property</h2>
            <p>
              The Service and its original content, features, and functionality are owned by Meister Solutions and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>

            <h2>9. Termination</h2>
            <p>
              We may terminate or suspend your account and access to the Service immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
            </p>

            <h2>10. Limitation of Liability</h2>
            <p>
              In no event shall Meister Solutions be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
            </p>

            <h2>11. Disclaimer</h2>
            <p>
              The Service is provided on an "AS IS" and "AS AVAILABLE" basis. We make no warranties, expressed or implied, and hereby disclaim all other warranties including implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
            </p>

            <h2>12. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will notify users of any material changes via email or through the Service. Your continued use of the Service after such modifications constitutes acceptance of the updated Terms.
            </p>

            <h2>13. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.
            </p>

            <h2>14. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <ul>
              <li>Email: legal@meisternotify.com</li>
              <li>Address: 123 Business Ave, San Francisco, CA 94105</li>
              <li>Phone: +1 (555) 123-4567</li>
            </ul>
          </div>

          <div className="mt-12 p-6 bg-[#F7F7F7] rounded-lg">
            <h3 className="text-lg font-semibold text-[#1C1C1C] mb-4">Need Help?</h3>
            <p className="text-gray-600 mb-4">
              If you have questions about these terms or need clarification on any point, we're here to help.
            </p>
            <Link
              to="/contact"
              className="bg-[#25D366] text-white px-6 py-2 rounded-lg hover:bg-[#128C7E] transition-colors inline-block"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;