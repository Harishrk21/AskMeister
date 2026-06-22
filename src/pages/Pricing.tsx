import { Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Pricing = () => {
  return (
    <>
      <Helmet>
        <title>Contact Ask Meister | Chennai & Tamil Nadu</title>
        <meta name="description" content="Connect with Ask Meister for WhatsApp API onboarding, automation setup, and campaign guidance for Chennai and Tamil Nadu teams." />
        <meta name="keywords" content="whatsapp business api onboarding, whatsapp automation setup, chatbot implementation support, whatsapp campaign guidance india" />
        <meta name="robots" content="noindex,follow" />
        <link rel="canonical" href="https://www.askmeister.com/contact" />
        <meta property="og:title" content="Contact Ask Meister | WhatsApp Business Support" />
        <meta property="og:description" content="Get help from Ask Meister for WhatsApp onboarding and implementation support." />
        <meta property="og:url" content="https://www.askmeister.com/contact" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Ask Meister | WhatsApp Business Support" />
        <meta name="twitter:description" content="Talk to Ask Meister for WhatsApp onboarding and implementation details." />
      </Helmet>
      <Navigate to="/contact" replace />
    </>
  );
};

export default Pricing;