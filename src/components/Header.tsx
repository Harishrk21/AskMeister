import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronDown,
  Megaphone,
  Bot,
  BarChart3,
  MessageCircle,
  FileText,
  GraduationCap,
  Stethoscope,
  ShoppingCart,
  Plane,
  Home,
  Landmark,
  Sparkles,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type NavItem = { name: string; href: string; description: string; icon: LucideIcon };

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
        setActiveDropdown(null);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!isMobile) {
        const target = event.target as HTMLElement;
        if (!target.closest('.dropdown-container')) setActiveDropdown(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobile]);

  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const navigation = [
    { name: 'WhatsApp API', href: '/whatsapp-api' },
    { name: 'Chatbots', href: '/chatbots' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Tools', href: '/tools' },
    { name: 'Contact', href: '/contact' },
  ];

  const features: NavItem[] = [
    { name: 'Bulk Messaging', href: '/whatsapp-bulk-messaging', description: 'Broadcasts with approved templates', icon: Megaphone },
    { name: 'Automation', href: '/whatsapp-marketing-automation', description: 'Automate your WhatsApp workflows', icon: Bot },
    { name: 'Analytics', href: '/whatsapp-business-analytics', description: 'Track performance and engagement', icon: BarChart3 },
    { name: 'Live Chat', href: '/whatsapp-live-chat', description: 'Collaborate with your team', icon: MessageCircle },
    { name: 'Templates', href: '/whatsapp-message-templates', description: 'Pre-approved message templates', icon: FileText },
  ];

  const industries: NavItem[] = [
    { name: 'Education', href: '/whatsapp-software-for-universities', description: 'Admissions and student communication', icon: GraduationCap },
    { name: 'Healthcare', href: '/whatsapp-automation-for-healthcare', description: 'Appointments and patient care', icon: Stethoscope },
    { name: 'E-commerce', href: '/whatsapp-automation-for-ecommerce', description: 'Order updates and support', icon: ShoppingCart },
    { name: 'Travel & Tourism', href: '/whatsapp-automation-for-travel-and-tourism', description: 'Bookings and travel assistance', icon: Plane },
    { name: 'Real Estate', href: '/whatsapp-automation-for-real-estate', description: 'Lead engagement and follow-ups', icon: Home },
    { name: 'Financial Services', href: '/whatsapp-banking-automation', description: 'Banking and transaction alerts', icon: Landmark },
  ];

  const handleDropdownClick = (dropdown: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleDropdownItemClick = () => {
    setActiveDropdown(null);
    setIsMenuOpen(false);
  };

  const handleMobileDropdownToggle = (dropdown: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const isActive = (href: string) => location.pathname === href;

  const MegaDropdown = ({ id, label, items }: { id: string; label: string; items: NavItem[] }) => (
    <div
      className="relative dropdown-container"
      onMouseEnter={() => !isMobile && setActiveDropdown(id)}
      onMouseLeave={() => !isMobile && setActiveDropdown(null)}
    >
      <button
        onClick={(e) => handleDropdownClick(id, e)}
        className={`nav-link flex items-center gap-1 ${activeDropdown === id ? 'nav-link-active text-brand' : ''}`}
      >
        {label}
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === id ? 'rotate-180' : ''}`} />
      </button>
      <div className={`mega-menu ${activeDropdown === id ? 'mega-menu-open' : ''}`}>
        <div className="px-4 py-3 border-b border-brand/10 mb-1">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-dark">{label}</p>
        </div>
        <div className="grid grid-cols-1 gap-0.5 px-1 pb-1">
          {items.map((item) => (
            <Link key={item.name} to={item.href} onClick={handleDropdownItemClick} className="mega-item group">
              <div className="mega-icon">
                <item.icon className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-white text-sm group-hover:text-brand-light transition-colors">{item.name}</div>
                <div className="text-xs text-ink-muted mt-0.5">{item.description}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-dark shadow-soft border-b border-white/10'
          : 'bg-surface-soft/80 backdrop-blur-md border-b border-transparent'
      }`}
    >
      <div className="container-wide">
        <div className="flex justify-between items-center h-16 lg:h-[4.5rem]">
          <Link to="/" className="flex items-center gap-2.5 flex-shrink-0 group">
            <div className="relative">
              <div className="absolute inset-0 bg-brand/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img
                src="/favicon.png"
                alt="Ask Meister logo"
                className="relative w-10 h-10 sm:w-11 sm:h-11 object-contain"
              />
            </div>
            <span className="text-xl sm:text-2xl font-extrabold tracking-tight">
              <span className="text-white">Ask</span>
              <span className="gradient-text">Meister</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link to="/" className={`nav-link px-3 ${isActive('/') ? 'nav-link-active' : ''}`}>
              Home
            </Link>
            <MegaDropdown id="features" label="Features" items={features} />
            <MegaDropdown id="industries" label="Industries" items={industries} />
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`nav-link px-3 ${isActive(item.href) ? 'nav-link-active' : ''}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link to="/contact" className="btn-primary px-5 py-2.5 text-sm inline-flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Get Started
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl glass hover:bg-brand/5 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-out ${
            isMenuOpen ? 'max-h-[85vh] opacity-100 pb-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="glass-dark rounded-2xl mt-2 p-4 space-y-1 max-h-[calc(85vh-5rem)] overflow-y-auto border border-white/10">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-3 rounded-xl font-medium transition-colors ${
                isActive('/') ? 'bg-brand/15 text-brand-light' : 'text-ink-soft hover:bg-white/5'
              }`}
            >
              Home
            </Link>

            {(['features', 'industries'] as const).map((key) => (
              <div key={key}>
                <button
                  onClick={(e) => handleMobileDropdownToggle(key, e)}
                  className="flex items-center justify-between w-full px-4 py-3 rounded-xl font-medium text-ink-soft hover:bg-white/5 transition-colors"
                >
                  {key === 'features' ? 'Features' : 'Industries'}
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === key ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === key && (
                  <div className="pl-2 space-y-1 pb-2">
                    {(key === 'features' ? features : industries).map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={handleDropdownItemClick}
                        className="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-brand/5 transition-colors"
                      >
                        <div className="w-9 h-9 rounded-lg bg-gradient-brand flex items-center justify-center text-white shrink-0">
                          <item.icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-medium text-sm text-white">{item.name}</div>
                          <div className="text-xs text-ink-muted">{item.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl font-medium transition-colors ${
                  isActive(item.href) ? 'bg-brand/15 text-brand-light' : 'text-ink-soft hover:bg-white/5'
                }`}
              >
                {item.name}
              </Link>
            ))}

            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="btn-primary w-full mt-3 text-center justify-center"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
