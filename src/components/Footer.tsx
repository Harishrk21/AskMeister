import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import meta from '../assets/meta.webp';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#075E54] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="space-y-4 lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#25D366] rounded-lg flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Ask Meister</span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Transform your business communication with powerful WhatsApp marketing automation. 
              Reach customers instantly with personalized messages and grow your business effortlessly.
            </p>
            
            {/* Meta Partner Image */}
            <div className="mt-4">
              <img 
                src={meta} 
                alt="Meta Partner" 
                className="w-32 h-auto opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
            
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61578309674729" className="text-gray-300 hover:text-[#25D366] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://x.com/AskMeister" className="text-gray-300 hover:text-[#25D366] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/ask-meister-42a0a4377/" className="text-gray-300 hover:text-[#25D366] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/ask_meister?igsh=M2liNjdoZXY0dmhq&utm_source=qr" className="text-gray-300 hover:text-[#25D366] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link to="/whatsapp-api" className="text-gray-300 hover:text-[#25D366] transition-colors text-sm">WhatsApp API</Link></li>
              <li><Link to="/chatbots" className="text-gray-300 hover:text-[#25D366] transition-colors text-sm">ChatBots</Link></li>
              <li><Link to="/tools" className="text-gray-300 hover:text-[#25D366] transition-colors text-sm">Free Tools</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-[#25D366] transition-colors text-sm">Contact Sales</Link></li>
              {/* <li><Link to="/affiliate" className="text-gray-300 hover:text-[#25D366] transition-colors text-sm">Affiliate Program</Link></li> */}
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Features</h3>
            <ul className="space-y-2">
              <li><Link to="/whatsapp-live-chat" className="text-gray-300 hover:text-[#25D366] transition-colors text-sm">WhatsApp live chat</Link></li>
              <li><Link to="/whatsapp-marketing-automation" className="text-gray-300 hover:text-[#25D366] transition-colors text-sm">WhatsApp marketing automation</Link></li>
              <li><Link to="/whatsapp-business-analytics" className="text-gray-300 hover:text-[#25D366] transition-colors text-sm">WhatsApp business analytics</Link></li>
              <li><Link to="/whatsapp-message-templates" className="text-gray-300 hover:text-[#25D366] transition-colors text-sm">WhatsApp message templates</Link></li>
              <li><Link to="/whatsapp-bulk-messaging" className="text-gray-300 hover:text-[#25D366] transition-colors text-sm">WhatsApp bulk messaging</Link></li>
            </ul>
          </div>

          {/* Industry Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Industry</h3>
            <ul className="space-y-2">
              <li><Link to="/whatsapp-software-for-universities" className="text-gray-300 hover:text-[#25D366] transition-colors text-sm">Universities & colleges</Link></li>
              <li><Link to="/whatsapp-automation-for-healthcare" className="text-gray-300 hover:text-[#25D366] transition-colors text-sm">Healthcare automation</Link></li>
              <li><Link to="/whatsapp-automation-for-ecommerce" className="text-gray-300 hover:text-[#25D366] transition-colors text-sm">Ecommerce automation</Link></li>
              <li><Link to="/whatsapp-automation-for-travel-and-tourism" className="text-gray-300 hover:text-[#25D366] transition-colors text-sm">Travel & tourism</Link></li>
              <li><Link to="/whatsapp-automation-for-real-estate" className="text-gray-300 hover:text-[#25D366] transition-colors text-sm">Real estate automation</Link></li>
              <li><Link to="/whatsapp-banking-automation" className="text-gray-300 hover:text-[#25D366] transition-colors text-sm">Banking automation</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Popular searches</h3>
            <ul className="space-y-2">
              <li><Link to="/whatsapp-software-for-colleges" className="text-gray-300 hover:text-[#25D366] transition-colors text-sm">Colleges</Link></li>
              <li><Link to="/hospital-whatsapp" className="text-gray-300 hover:text-[#25D366] transition-colors text-sm">Hospital WhatsApp</Link></li>
              <li><Link to="/whatsapp-kyc-automation-for-banks" className="text-gray-300 hover:text-[#25D366] transition-colors text-sm">Bank KYC automation</Link></li>
              <li><Link to="/education-whatsapp-automation" className="text-gray-300 hover:text-[#25D366] transition-colors text-sm">Education automation</Link></li>
            </ul>
          </div>

          {/* Company & Contact Info */}
          <div className="space-y-6">
            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-300 hover:text-[#25D366] transition-colors text-sm">About Us</Link></li>
                <li><Link to="/blog" className="text-gray-300 hover:text-[#25D366] transition-colors text-sm">Blog</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-[#25D366] transition-colors text-sm">Contact</Link></li>
                <li><Link to="/help" className="text-gray-300 hover:text-[#25D366] transition-colors text-sm">Help Center</Link></li>
                <li><Link to="/whatsapp-marketing-chennai" className="text-gray-300 hover:text-[#25D366] transition-colors text-sm">Chennai</Link></li>
                <li><Link to="/whatsapp-marketing-tamil-nadu" className="text-gray-300 hover:text-[#25D366] transition-colors text-sm">Tamil Nadu</Link></li>
                <li><Link to="/case-studies" className="text-gray-300 hover:text-[#25D366] transition-colors text-sm">Case studies</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-[#25D366]" />
                  <span className="text-gray-300 text-sm">harishradhakrishnan2001@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-[#25D366]" />
                  <span className="text-gray-300 text-sm">+91 7299817996</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-[#25D366]" />
                  <span className="text-gray-300 text-sm">4,3A , Asvini Amarisa, Ramapuram,Chennai-600089</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © {currentYear} Ask Meister by Meister Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-300 hover:text-[#25D366] transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-300 hover:text-[#25D366] transition-colors text-sm">
              Terms of Service
            </Link>
            <Link to="/refund" className="text-gray-300 hover:text-[#25D366] transition-colors text-sm">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;