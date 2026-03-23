import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

const Refund = () => {
  const refundTimeline = [
    {
      step: '1',
      title: 'Request Refund',
      description: 'Contact our support team within 30 days of purchase',
      timeframe: 'Within 30 days'
    },
    {
      step: '2',
      title: 'Review Process',
      description: 'We review your request and usage to determine eligibility',
      timeframe: '1-2 business days'
    },
    {
      step: '3',
      title: 'Refund Processing',
      description: 'If approved, refund is processed to your original payment method',
      timeframe: '3-5 business days'
    }
  ];

  const eligibleScenarios = [
    'Service is not working as described',
    'Technical issues preventing service use',
    'Billing errors or duplicate charges',
    'Cancellation within 30 days of initial purchase'
  ];

  const ineligibleScenarios = [
    'Change of mind after 30 days',
    'Violation of Terms of Service',
    'Excessive usage of free trial',
    'Request after significant service usage'
  ];

  return (
    <>
      <Helmet>
        <title>Refund Policy | 30-Day Money-Back Guarantee | Ask Meister</title>
        <meta name="description" content="Ask Meister refund policy. 30-day money-back guarantee. Learn how to request a refund and eligibility criteria." />
        <link rel="canonical" href="https://www.askmeister.com/refund" />
      </Helmet>
    <div className="pt-16">
      {/* Header */}
      <section className="bg-[#F7F7F7] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-[#1C1C1C] mb-4">Refund Policy</h1>
          <p className="text-lg text-gray-600">
            Last updated: January 1, 2026
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#25D366]/10 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-[#1C1C1C] mb-4">30-Day Money-Back Guarantee</h2>
            <p className="text-gray-700 text-lg">
              We stand behind our service with a 30-day money-back guarantee. If you're not satisfied with Ask Meister, 
              we'll refund your subscription fee when requested within 30 days of your initial purchase.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2>1. Refund Eligibility</h2>
            <p>
              To be eligible for a refund, your request must meet the following criteria:
            </p>
            <ul>
              <li>Request must be made within 30 days of your initial subscription purchase</li>
              <li>Account must be in good standing with no violations of our Terms of Service</li>
              <li>Refund requests for technical issues must include documentation of the problem</li>
              <li>Only the initial subscription fee is eligible for refund (not renewal payments)</li>
            </ul>

            <h2>2. What's Covered</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose mb-8">
              <div className="bg-green-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-2" />
                  <h3 className="text-lg font-semibold text-green-800">Eligible for Refund</h3>
                </div>
                <ul className="space-y-2">
                  {eligibleScenarios.map((scenario, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-green-700">{scenario}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-red-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <XCircle className="w-6 h-6 text-red-600 mr-2" />
                  <h3 className="text-lg font-semibold text-red-800">Not Eligible for Refund</h3>
                </div>
                <ul className="space-y-2">
                  {ineligibleScenarios.map((scenario, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-red-700">{scenario}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <h2>3. Refund Process</h2>
            <p>
              Our refund process is designed to be simple and transparent:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
            {refundTimeline.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-[#1C1C1C] mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-2">{item.description}</p>
                <div className="flex items-center justify-center text-sm text-[#25D366] font-medium">
                  <Clock className="w-4 h-4 mr-1" />
                  {item.timeframe}
                </div>
              </div>
            ))}
          </div>

          <div className="prose prose-lg max-w-none">
            <h2>4. How to Request a Refund</h2>
            <p>
              To request a refund, please contact our support team with the following information:
            </p>
            <ul>
              <li>Your account email address</li>
              <li>Reason for the refund request</li>
              <li>Any relevant documentation (screenshots, error messages, etc.)</li>
              <li>Date of original purchase</li>
            </ul>

            <h2>5. Refund Methods</h2>
            <p>
              Refunds will be processed using the same payment method used for the original purchase:
            </p>
            <ul>
              <li><strong>Credit/Debit Cards:</strong> 3-5 business days</li>
              <li><strong>PayPal:</strong> 1-2 business days</li>
              <li><strong>Bank Transfer:</strong> 5-7 business days</li>
            </ul>

            <h2>6. Partial Refunds</h2>
            <p>
              In certain circumstances, we may offer partial refunds:
            </p>
            <ul>
              <li>Pro-rated refunds for annual subscriptions cancelled mid-term</li>
              <li>Refunds minus usage fees for high-volume accounts</li>
              <li>Partial refunds for service disruptions</li>
            </ul>

            <h2>7. WhatsApp API Credits</h2>
            <p>
              Please note that WhatsApp API credits (message costs) are non-refundable as these are charged directly by WhatsApp. 
              Only our platform subscription fees are eligible for refund.
            </p>

            <h2>8. Chargebacks and Disputes</h2>
            <p>
              We encourage customers to contact us directly before initiating chargebacks or payment disputes. 
              We're committed to resolving issues fairly and quickly. Chargebacks may result in account suspension 
              until the matter is resolved.
            </p>

            <h2>9. Free Trial and Free Plan</h2>
            <p>
              Our free trial and free plan are provided at no cost and are not eligible for refunds. 
              However, if you upgrade to a paid plan during or after your free trial, the paid subscription 
              is covered by our refund policy.
            </p>

            <h2>10. Contact Information</h2>
            <p>
              For refund requests or questions about this policy, please contact us:
            </p>
            <ul>
              <li>Email: billing@meisternotify.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Support Portal: Available 24/7 through your account dashboard</li>
            </ul>
          </div>

          <div className="mt-12 p-6 bg-yellow-50 rounded-lg border border-yellow-200">
            <div className="flex items-start">
              <AlertCircle className="w-6 h-6 text-yellow-600 mr-3 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Note</h3>
                <p className="text-yellow-700">
                  This refund policy applies only to Ask Meister subscription fees. Third-party charges, 
                  including WhatsApp API message costs, payment processing fees, and integration costs, 
                  are subject to the respective provider's refund policies.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-[#F7F7F7] rounded-lg">
            <h3 className="text-lg font-semibold text-[#1C1C1C] mb-4">Need Help with a Refund?</h3>
            <p className="text-gray-600 mb-4">
              Our customer success team is here to help resolve any issues and process refund requests quickly and fairly.
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
    </>
  );
};

export default Refund;