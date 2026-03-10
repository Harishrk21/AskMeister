import React, { Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Refund from './pages/Refund';

// Lazy load heavy components
const WhatsAppAPI = lazy(() => import('./pages/WhatsAppAPI'));
const Tools = lazy(() => import('./pages/Tools'));
const Chatbots = lazy(() => import('./pages/Chatbots'));
const BlogDetail = lazy(() => import('./pages/BlogDetail'));
const Help = lazy(() => import('./pages/Help'));
const Affiliate = lazy(() => import('./pages/Affiliate'));
const Careers = lazy(() => import('./pages/Careers'));

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
      <HelmetProvider>
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <ScrollToTop />
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/whatsapp-api" element={<WhatsAppAPI />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/chatbots" element={<Chatbots />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/help" element={<Help />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/affiliate" element={<Affiliate />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/refund" element={<Refund />} />
            
            {/* Feature Pages */}
            <Route path="/features/livechat" element={<LiveChat />} />
            <Route path="/features/automation" element={<Automation />} />
            <Route path="/features/analytics" element={<Analytics />} />
            <Route path="/features/templates" element={<Templates />} />
            <Route path="/features/bulk-messaging" element={<BulkMessaging />} />
            
            {/* Industry Template Pages */}
            <Route path="/solutions/education" element={<EducationTemplate />} />
            <Route path="/solutions/healthcare" element={<HealthcareTemplate />} />
            <Route path="/solutions/ecommerce" element={<EcommerceTemplate />} />
            <Route path="/solutions/travel-and-tourism" element={<TravelTourismTemplate />} />
            <Route path="/solutions/real-estate" element={<RealEstateTemplate/>} />
            <Route path="/solutions/financial" element={<FinancialTemplate />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
    </HelmetProvider>
  );
}

export default App;