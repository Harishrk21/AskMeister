import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import WhatsAppAPI from './pages/WhatsAppAPI';
import Pricing from './pages/Pricing';
import Tools from './pages/Tools';
import Chatbots from './pages/Chatbots';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Help from './pages/Help';
import About from './pages/About';
import Contact from './pages/Contact';
import Affiliate from './pages/Affiliate';
import Careers from './pages/Careers';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Refund from './pages/Refund';

// Feature Pages
import LiveChat from './pages/features/LiveChat';
import Automation from './pages/features/Automation';
import Analytics from './pages/features/Analytics';
// import TeamInbox from './pages/features/LiveChat';
import Templates from './pages/features/Templates';
import BulkMessaging from './pages/features/BulkMessaging';

// Industry Template Pages
import EducationTemplate from './pages/templates/EducationTemplate';
import HealthcareTemplate from './pages/templates/HealthcareTemplate';
import EcommerceTemplate from './pages/templates/EcommerceTemplate';
// import ConstructionTemplate from './pages/templates/TravelTourismTemplate';
// import AgricultureTemplate from './pages/templates/RealEstateTemplate';
import TravelTourismTemplate from './pages/templates/TravelTourismTemplate';
import FinancialTemplate from './pages/templates/FinancialTemplate';
import RealEstateTemplate from './pages/templates/RealEstateTemplate';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <ScrollToTop />
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
          {/* <Route path="/features/team-inbox" element={<TeamInbox />} /> */}
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
        <Footer />
      </div>
    </Router>
  );
}

export default App;