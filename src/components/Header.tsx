import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../assets/ask.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (window.innerWidth >= 768) {
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
      // Only close dropdowns on desktop when clicking outside
      if (!isMobile) {
        const target = event.target as HTMLElement;
        if (!target.closest('.dropdown-container')) {
          setActiveDropdown(null);
        }
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobile]);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'WhatsApp API', href: '/whatsapp-api' },
    { name: 'Chatbots', href: '/chatbots' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
    { name: 'Tools', href: '/tools' },
    // { name: 'Templates', href: '/features/templates' },
  ];

  const features = [
    { name: 'Bulk Messaging', href: '/features/bulk-messaging', description: 'Send messages to thousands instantly', icon: '📢' },
    { name: 'Automation', href: '/features/automation', description: 'Automate your WhatsApp workflows', icon: '🤖' },
    { name: 'Analytics', href: '/features/analytics', description: 'Track performance and engagement', icon: '📊' },
    { name: 'Live Chat', href: '/features/LiveChat', description: 'Collaborate with your team', icon: '💬' },
    { name: 'Templates', href: '/features/templates', description: 'Pre-approved message templates', icon: '📝' },
  ];

  const industries = [
    { name: 'Education', href: '/solutions/education', description: 'Streamline admissions and student communication', icon: '🎓' },
    { name: 'Healthcare', href: '/solutions/healthcare', description: 'Automate appointments and patient care', icon: '🏥' },
    { name: 'E-commerce', href: '/solutions/ecommerce', description: 'Boost sales with order updates and support', icon: '🛒' },
    { name: 'Travel & Tourism', href: '/solutions/travel-and-tourism', description: 'Coordinate projects and safety alerts', icon: '✈️' },
    { name: 'RealEstate', href: '/solutions/real-estate', description: 'Weather alerts and farming assistance', icon: '🏡' },
    { name: 'Financial Services', href: '/solutions/financial', description: 'Secure banking and transaction alerts', icon: '💰' },
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

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setActiveDropdown(null);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
            <img
              src={logo}
              alt="Ask Meister Logo"
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain"
            />
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold tracking-tight leading-tight">
              <span className="text-[#1C1C1C]">Ask</span>
              <span className="text-[#25D366]">Meister</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            {/* Features Dropdown */}
            <div className="relative dropdown-container">
              <button
                onClick={(e) => handleDropdownClick('features', e)}
                className={`flex items-center text-sm font-medium hover:text-[#25D366] transition-colors ${
                  activeDropdown === 'features' || location.pathname.includes('/features') 
                    ? 'text-[#25D366]' 
                    : 'text-[#1C1C1C]'
                }`}
              >
                Features <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${activeDropdown === 'features' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'features' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 py-4 z-50">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <h3 className="font-semibold text-[#1C1C1C] text-sm">WhatsApp Features</h3>
                    <p className="text-xs text-gray-500">Powerful tools for your business</p>
                  </div>
                  {features.map((feature) => (
                    <Link key={feature.name} to={feature.href} onClick={handleDropdownItemClick}
                      className="flex items-center px-4 py-3 hover:bg-gray-50 transition-colors">
                      <span className="text-xl mr-3">{feature.icon}</span>
                      <div>
                        <div className="font-medium text-[#1C1C1C] text-sm">{feature.name}</div>
                        <div className="text-xs text-gray-500">{feature.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div className="relative dropdown-container">
              <button
                onClick={(e) => handleDropdownClick('industries', e)}
                className={`flex items-center text-sm font-medium hover:text-[#25D366] transition-colors ${
                  activeDropdown === 'industries' || location.pathname.includes('/solutions') 
                    ? 'text-[#25D366]' 
                    : 'text-[#1C1C1C]'
                }`}
              >
                Industries <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${activeDropdown === 'industries' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'industries' && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-xl shadow-2xl border border-gray-100 py-4 z-50">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <h3 className="font-semibold text-[#1C1C1C] text-sm">Industry Solutions</h3>
                    <p className="text-xs text-gray-500">Tailored for your industry</p>
                  </div>
                  {industries.map((industry) => (
                    <Link key={industry.name} to={industry.href} onClick={handleDropdownItemClick}
                      className="flex items-center px-4 py-3 hover:bg-gray-50 transition-colors">
                      <span className="text-xl mr-3">{industry.icon}</span>
                      <div>
                        <div className="font-medium text-[#1C1C1C] text-sm">{industry.name}</div>
                        <div className="text-xs text-gray-500">{industry.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Regular Navigation Items */}
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium hover:text-[#25D366] transition-colors ${
                  location.pathname === item.href ? 'text-[#25D366]' : 'text-[#1C1C1C]'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Tablet Nav (md to lg) */}
          <nav className="hidden md:flex lg:hidden items-center space-x-3">
            {navigation.slice(0, 4).map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium hover:text-[#25D366] transition-colors ${
                  location.pathname === item.href ? 'text-[#25D366]' : 'text-[#1C1C1C]'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <Link 
              to="/contact" 
              className="bg-[#25D366] text-white px-3 py-2 lg:px-4 lg:py-2 rounded-lg text-xs lg:text-sm font-medium hover:bg-[#128C7E] transition-colors whitespace-nowrap"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5 text-[#1C1C1C]" /> : <Menu className="w-5 h-5 text-[#1C1C1C]" />}
          </button>
        </div>

        {/* Mobile & Tablet dropdown menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="px-3 py-4 space-y-2">
              {/* Features Dropdown */}
              <div className="space-y-1">
                <button
                  onClick={(e) => handleMobileDropdownToggle('features', e)}
                  className="flex items-center justify-between w-full text-left text-base font-medium text-[#1C1C1C] hover:text-[#25D366] px-3 py-2 rounded-md transition-colors"
                >
                  Features
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'features' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'features' && (
                  <div className="pl-4 space-y-1 bg-gray-50 rounded-md py-2">
                    {features.map((feature) => (
                      <Link
                        key={feature.name}
                        to={feature.href}
                        onClick={handleDropdownItemClick}
                        className="flex items-start px-3 py-2 text-sm text-gray-600 hover:text-[#25D366] hover:bg-white rounded-md transition-colors"
                      >
                        <span className="mr-3 text-base mt-0.5">{feature.icon}</span>
                        <div>
                          <div className="font-medium text-[#1C1C1C]">{feature.name}</div>
                          <div className="text-xs text-gray-500 leading-relaxed">{feature.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Industries Dropdown */}
              <div className="space-y-1">
                <button
                  onClick={(e) => handleMobileDropdownToggle('industries', e)}
                  className="flex items-center justify-between w-full text-left text-base font-medium text-[#1C1C1C] hover:text-[#25D366] px-3 py-2 rounded-md transition-colors"
                >
                  Industries
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'industries' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'industries' && (
                  <div className="pl-4 space-y-1 bg-gray-50 rounded-md py-2">
                    {industries.map((industry) => (
                      <Link
                        key={industry.name}
                        to={industry.href}
                        onClick={handleDropdownItemClick}
                        className="flex items-start px-3 py-2 text-sm text-gray-600 hover:text-[#25D366] hover:bg-white rounded-md transition-colors"
                      >
                        <span className="mr-3 text-base mt-0.5">{industry.icon}</span>
                        <div>
                          <div className="font-medium text-[#1C1C1C]">{industry.name}</div>
                          <div className="text-xs text-gray-500 leading-relaxed">{industry.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Regular Navigation Items */}
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block text-base font-medium rounded-md px-3 py-2 transition-colors ${
                    location.pathname === item.href 
                      ? 'text-[#25D366] bg-[#25D366]/10' 
                      : 'text-[#1C1C1C] hover:text-[#25D366] hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile CTA */}
              <Link
                to="/contact"
                className="block mt-4 px-3 py-3 text-base font-medium bg-[#25D366] text-white rounded-md hover:bg-[#128C7E] transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;