import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';
import Integrations from './pages/Integrations';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Refund from './pages/Refund';
import NotFound from './pages/NotFound';
import { KEYWORD_PAGE_PATHS } from './data/keywordPages';

// Lazy load heavy components
const WhatsAppAPI = lazy(() => import('./pages/WhatsAppAPI'));
const Tools = lazy(() => import('./pages/Tools'));
const Chatbots = lazy(() => import('./pages/Chatbots'));
const BlogDetail = lazy(() => import('./pages/BlogDetail'));
const Help = lazy(() => import('./pages/Help'));
const Affiliate = lazy(() => import('./pages/Affiliate'));
const Careers = lazy(() => import('./pages/Careers'));
const WatiAlternative = lazy(() => import('./pages/alternatives/WatiAlternative'));
const AisensyAlternative = lazy(() => import('./pages/alternatives/AisensyAlternative'));
const InteraktAlternative = lazy(() => import('./pages/alternatives/InteraktAlternative'));
const GallaboxAlternative = lazy(() => import('./pages/alternatives/GallaboxAlternative'));
const Chennai = lazy(() => import('./pages/locations/Chennai'));
const TamilNadu = lazy(() => import('./pages/locations/TamilNadu'));
const LocalCityLanding = lazy(() => import('./pages/locations/LocalCityLanding'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const FreeTrial = lazy(() => import('./pages/FreeTrial'));
const WhatsAppMarketingForEcommerce = lazy(() => import('./pages/WhatsAppMarketingForEcommerce'));
const RestaurantsChennai = lazy(() => import('./pages/verticals/RestaurantsChennai'));
const RealEstateChennai = lazy(() => import('./pages/verticals/RealEstateChennai'));
const KeywordLanding = lazy(() => import('./pages/KeywordLanding'));

// Feature Pages - Lazy loaded
const LiveChat = lazy(() => import('./pages/features/LiveChat'));
const Automation = lazy(() => import('./pages/features/Automation'));
const Analytics = lazy(() => import('./pages/features/Analytics'));
const Templates = lazy(() => import('./pages/features/Templates'));
const BulkMessaging = lazy(() => import('./pages/features/BulkMessaging'));

// Industry Template Pages - Lazy loaded
const EducationTemplate = lazy(() => import('./pages/templates/EducationTemplate'));
const HealthcareTemplate = lazy(() => import('./pages/templates/HealthcareTemplate'));
const EcommerceTemplate = lazy(() => import('./pages/templates/EcommerceTemplate'));
const TravelTourismTemplate = lazy(() => import('./pages/templates/TravelTourismTemplate'));
const FinancialTemplate = lazy(() => import('./pages/templates/FinancialTemplate'));
const RealEstateTemplate = lazy(() => import('./pages/templates/RealEstateTemplate'));

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-surface-soft">
        <Header />
        <ScrollToTop />
        <Suspense fallback={
          <div className="flex flex-col items-center justify-center min-h-screen gap-4">
            <div className="relative">
              <div className="w-14 h-14 rounded-full border-2 border-brand/20" />
              <div className="absolute inset-0 w-14 h-14 rounded-full border-2 border-transparent border-t-brand animate-spin" />
            </div>
            <p className="text-sm text-ink-muted font-medium">Loading…</p>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/whatsapp-marketing-chennai" element={<Chennai />} />
            <Route path="/whatsapp-marketing-tamil-nadu" element={<TamilNadu />} />
            <Route path="/whatsapp-marketing-coimbatore" element={<LocalCityLanding />} />
            <Route path="/whatsapp-marketing-madurai" element={<LocalCityLanding />} />
            <Route path="/whatsapp-marketing-trichy" element={<LocalCityLanding />} />
            <Route path="/whatsapp-marketing-salem" element={<LocalCityLanding />} />
            <Route path="/whatsapp-marketing-tiruppur" element={<LocalCityLanding />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/free-trial" element={<FreeTrial />} />
            <Route path="/whatsapp-marketing-for-ecommerce" element={<WhatsAppMarketingForEcommerce />} />
            <Route path="/whatsapp-marketing-for-restaurants-chennai" element={<RestaurantsChennai />} />
            <Route path="/whatsapp-marketing-for-real-estate-chennai" element={<RealEstateChennai />} />
            <Route path="/locations/chennai" element={<Navigate to="/whatsapp-marketing-chennai" replace />} />
            <Route path="/locations/tamil-nadu" element={<Navigate to="/whatsapp-marketing-tamil-nadu" replace />} />
            <Route path="/whatsapp-chatbot" element={<Navigate to="/chatbots" replace />} />
            <Route path="/whatsapp-api-integration" element={<Navigate to="/whatsapp-api" replace />} />
            <Route path="/whatsapp-api" element={<WhatsAppAPI />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/chatbots" element={<Chatbots />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/help" element={<Help />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/integrations" element={<Integrations />} />
            <Route path="/affiliate" element={<Affiliate />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/alternatives/wati-alternative" element={<WatiAlternative />} />
            <Route path="/alternatives/aisensy-alternative" element={<AisensyAlternative />} />
            <Route path="/alternatives/interakt-alternative" element={<InteraktAlternative />} />
            <Route path="/alternatives/gallabox-alternative" element={<GallaboxAlternative />} />
            <Route path="/wati-alternative" element={<Navigate to="/alternatives/wati-alternative" replace />} />
            <Route path="/aisensy-alternative" element={<Navigate to="/alternatives/aisensy-alternative" replace />} />
            <Route path="/interakt-alternative" element={<Navigate to="/alternatives/interakt-alternative" replace />} />
            <Route path="/gallabox-alternative" element={<Navigate to="/alternatives/gallabox-alternative" replace />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/refund" element={<Refund />} />
            
            {/* Feature Pages — keyword URLs */}
            <Route path="/whatsapp-live-chat" element={<LiveChat />} />
            <Route path="/whatsapp-marketing-automation" element={<Automation />} />
            <Route path="/whatsapp-business-analytics" element={<Analytics />} />
            <Route path="/whatsapp-message-templates" element={<Templates />} />
            <Route path="/whatsapp-bulk-messaging" element={<BulkMessaging />} />

            {/* Industry pages — keyword URLs */}
            <Route path="/whatsapp-software-for-universities" element={<EducationTemplate />} />
            <Route path="/whatsapp-automation-for-healthcare" element={<HealthcareTemplate />} />
            <Route path="/whatsapp-automation-for-ecommerce" element={<EcommerceTemplate />} />
            <Route path="/whatsapp-automation-for-travel-and-tourism" element={<TravelTourismTemplate />} />
            <Route path="/whatsapp-automation-for-real-estate" element={<RealEstateTemplate />} />
            <Route path="/whatsapp-banking-automation" element={<FinancialTemplate />} />

            {/* Long-tail & SEO keyword landing pages */}
            {KEYWORD_PAGE_PATHS.map((path) => (
              <Route key={path} path={path} element={<KeywordLanding />} />
            ))}
            <Route path="/whatsapp-for-finance" element={<Navigate to="/whatsapp-banking-automation" replace />} />

            {/* Redirects from legacy /features/* and /solutions/* URLs */}
            <Route path="/features/livechat" element={<Navigate to="/whatsapp-live-chat" replace />} />
            <Route path="/features/automation" element={<Navigate to="/whatsapp-marketing-automation" replace />} />
            <Route path="/features/analytics" element={<Navigate to="/whatsapp-business-analytics" replace />} />
            <Route path="/features/templates" element={<Navigate to="/whatsapp-message-templates" replace />} />
            <Route path="/features/bulk-messaging" element={<Navigate to="/whatsapp-bulk-messaging" replace />} />
            <Route path="/solutions/education" element={<Navigate to="/whatsapp-software-for-universities" replace />} />
            <Route path="/solutions/healthcare" element={<Navigate to="/whatsapp-automation-for-healthcare" replace />} />
            <Route path="/solutions/ecommerce" element={<Navigate to="/whatsapp-automation-for-ecommerce" replace />} />
            <Route path="/solutions/travel-and-tourism" element={<Navigate to="/whatsapp-automation-for-travel-and-tourism" replace />} />
            <Route path="/solutions/real-estate" element={<Navigate to="/whatsapp-automation-for-real-estate" replace />} />
            <Route path="/solutions/financial" element={<Navigate to="/whatsapp-banking-automation" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;