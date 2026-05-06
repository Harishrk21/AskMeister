import { Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Pricing = () => {
  return (
    <>
      <Helmet>
        <title>WhatsApp API Pricing Plans Tamil Nadu | Ask Meister</title>
        <meta name="description" content="Affordable WhatsApp API and platform options for Chennai and Tamil Nadu teams. We route pricing to contact so plans match your volume and use case." />
        <meta name="keywords" content="whatsapp marketing software pricing, whatsapp business pricing india, affordable whatsapp api pricing, whatsapp pricing per message, whatsapp bulk messaging cost, whatsapp chatbot pricing, whatsapp crm pricing, whatsapp automation pricing, whatsapp marketing subscription, whatsapp software pricing india, cost of whatsapp api india, whatsapp campaign pricing" />
        <meta name="robots" content="noindex,follow" />
        <link rel="canonical" href="https://www.askmeister.com/contact" />
        <meta property="og:title" content="WhatsApp Marketing Software Pricing | Ask Meister" />
        <meta property="og:description" content="Explore Ask Meister WhatsApp marketing software pricing options. Contact us for the right plan for your business." />
        <meta property="og:url" content="https://www.askmeister.com/contact" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="WhatsApp Marketing Software Pricing | Ask Meister" />
        <meta name="twitter:description" content="Talk to Ask Meister for WhatsApp marketing software pricing and onboarding details." />
      </Helmet>
      <Navigate to="/contact" replace />
    </>
  );
};

export default Pricing;