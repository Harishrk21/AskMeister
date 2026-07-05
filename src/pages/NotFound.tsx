import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Ask Meister</title>
        <meta name="description" content="The page you are looking for could not be found." />
        <meta name="robots" content="noindex,follow" />
        <link rel="canonical" href="https://askmeister.com/" />
      </Helmet>
      <div className="pt-20 pb-24 px-4 text-center">
        <h1 className="text-4xl font-bold text-[#1C1C1C] mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-8">This page may have moved or no longer exists.</p>
        <Link
          to="/"
          className="bg-[#25D366] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#128C7E] transition-colors"
        >
          Go to Homepage
        </Link>
      </div>
    </>
  );
};

export default NotFound;
