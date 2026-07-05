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
      <div className="page-wrap pb-24 flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <h1 className="text-4xl font-bold text-white mb-4">Page Not Found</h1>
        <p className="text-ink-muted mb-8">This page may have moved or no longer exists.</p>
        <Link
          to="/"
          className="bg-brand text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-dark transition-colors"
        >
          Go to Homepage
        </Link>
      </div>
    </>
  );
};

export default NotFound;
