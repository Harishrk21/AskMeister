import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import meta from '../assets/meta.webp';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const columns = [
    {
      title: 'Product',
      links: [
        { label: 'WhatsApp API', to: '/whatsapp-api' },
        { label: 'ChatBots', to: '/chatbots' },
        { label: 'Free Tools', to: '/tools' },
        { label: 'Contact Sales', to: '/contact' },
      ],
    },
    {
      title: 'Features',
      links: [
        { label: 'Live chat', to: '/whatsapp-live-chat' },
        { label: 'Marketing automation', to: '/whatsapp-marketing-automation' },
        { label: 'Business analytics', to: '/whatsapp-business-analytics' },
        { label: 'Message templates', to: '/whatsapp-message-templates' },
        { label: 'Bulk messaging', to: '/whatsapp-bulk-messaging' },
      ],
    },
    {
      title: 'Industry',
      links: [
        { label: 'Universities & colleges', to: '/whatsapp-software-for-universities' },
        { label: 'Healthcare', to: '/whatsapp-automation-for-healthcare' },
        { label: 'Ecommerce', to: '/whatsapp-automation-for-ecommerce' },
        { label: 'Travel & tourism', to: '/whatsapp-automation-for-travel-and-tourism' },
        { label: 'Real estate', to: '/whatsapp-automation-for-real-estate' },
        { label: 'Banking', to: '/whatsapp-banking-automation' },
        { label: 'Restaurants', to: '/whatsapp-for-restaurants' },
        { label: 'Logistics', to: '/whatsapp-for-logistics' },
        { label: 'Coaching centers', to: '/whatsapp-for-coaching-centers' },
      ],
    },
    {
      title: 'Integrations',
      links: [
        { label: 'Shopify', to: '/whatsapp-shopify-integration' },
        { label: 'WooCommerce', to: '/whatsapp-woocommerce-integration' },
        { label: 'Zoho', to: '/whatsapp-zoho-integration' },
        { label: 'Tally', to: '/whatsapp-tally-integration' },
        { label: 'HRMS', to: '/whatsapp-hrms-integration' },
        { label: 'ERP', to: '/whatsapp-erp-integration' },
        { label: 'Zapier', to: '/whatsapp-zapier-integration' },
        { label: 'HubSpot', to: '/whatsapp-hubspot-integration' },
        { label: 'All integrations', to: '/integrations' },
      ],
    },
    {
      title: 'Chennai',
      links: [
        { label: 'WhatsApp marketing', to: '/whatsapp-marketing-chennai' },
        { label: 'Business API', to: '/whatsapp-business-api-chennai' },
        { label: 'Bulk messaging', to: '/whatsapp-bulk-messaging-chennai' },
        { label: 'Chatbot', to: '/whatsapp-chatbot-chennai' },
        { label: 'Automation', to: '/whatsapp-automation-chennai' },
        { label: 'Anna Nagar', to: '/whatsapp-marketing-anna-nagar' },
        { label: 'OMR', to: '/whatsapp-marketing-omr' },
        { label: 'Shopify Chennai', to: '/whatsapp-shopify-integration-chennai' },
      ],
    },
    {
      title: 'Popular searches',
      links: [
        { label: 'Colleges', to: '/whatsapp-software-for-colleges' },
        { label: 'Hospital WhatsApp', to: '/hospital-whatsapp' },
        { label: 'Bank KYC automation', to: '/whatsapp-kyc-automation-for-banks' },
        { label: 'Education automation', to: '/education-whatsapp-automation' },
        { label: 'Zapier integration', to: '/whatsapp-zapier-integration' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', to: '/about' },
        { label: 'Blog', to: '/blog' },
        { label: 'Contact', to: '/contact' },
        { label: 'Help Center', to: '/help' },
        { label: 'Integrations', to: '/integrations' },
        { label: 'Chennai', to: '/whatsapp-marketing-chennai' },
        { label: 'Tamil Nadu', to: '/whatsapp-marketing-tamil-nadu' },
        { label: 'Case studies', to: '/case-studies' },
      ],
    },
  ];

  return (
    <footer className="relative bg-gradient-dark text-white overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent" />

      <div className="relative container-wide py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <img src="/favicon.png" alt="Ask Meister logo" className="w-11 h-11 object-contain" />
              <span className="text-2xl font-bold">
                Ask <span className="text-brand-light">Meister</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Transform your business communication with powerful WhatsApp marketing automation.
              Reach customers instantly with personalized messages.
            </p>
            <img src={meta} alt="Meta Partner" className="w-28 h-auto opacity-90 hover:opacity-100 transition-opacity" />
            <div className="flex gap-3">
              {[
                { href: 'https://www.facebook.com/profile.php?id=61578309674729', Icon: Facebook },
                { href: 'https://x.com/AskMeister', Icon: Twitter },
                { href: 'https://www.linkedin.com/in/ask-meister-42a0a4377/', Icon: Linkedin },
                { href: 'https://www.instagram.com/ask_meister?igsh=M2liNjdoZXY0dmhq&utm_source=qr', Icon: Instagram },
              ].map(({ href, Icon }) => (
                <a
                  key={href}
                  href={href}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-brand-light hover:border-brand/40 hover:bg-brand/10 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-8">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-light mb-4">{col.title}</h3>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.to}>
                      <Link to={link.to} className="footer-link inline-flex items-center gap-1 group">
                        {link.label}
                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contact strip */}
        <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center gap-3 text-sm text-slate-400">
            <div className="w-9 h-9 rounded-lg bg-brand/20 flex items-center justify-center shrink-0">
              <Mail className="w-4 h-4 text-brand-light" />
            </div>
            harishradhakrishnan2001@gmail.com
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-400">
            <div className="w-9 h-9 rounded-lg bg-brand/20 flex items-center justify-center shrink-0">
              <Phone className="w-4 h-4 text-brand-light" />
            </div>
            +91 7299817996
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-400">
            <div className="w-9 h-9 rounded-lg bg-brand/20 flex items-center justify-center shrink-0">
              <MapPin className="w-4 h-4 text-brand-light" />
            </div>
            4,3A, Asvini Amarisa, Ramapuram, Chennai-600089
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">© {currentYear} Ask Meister by Meister Solutions. All rights reserved.</p>
          <div className="flex flex-wrap gap-6">
            <Link to="/privacy" className="footer-link">Privacy Policy</Link>
            <Link to="/terms" className="footer-link">Terms of Service</Link>
            <Link to="/refund" className="footer-link">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
