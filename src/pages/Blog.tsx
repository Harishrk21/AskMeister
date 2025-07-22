import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
const Blog = () => {
  const categories = ['All', 'API', 'Marketing Tips', 'Broadcasts', 'Chatbots', 'Automation'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const blogPosts = [
    {
      slug: 'whatsapp-marketing-automation-guide',
      title: '10 WhatsApp Marketing Automation Strategies That Actually Work',
      excerpt: 'Discover proven automation strategies that can boost your customer engagement and sales. Learn from real case studies and best practices.',
      image: 'https://images.pexels.com/photos/3985062/pexels-photo-3985062.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      category: 'Marketing Tips',
      readTime: '8 min read',
      featured: true
    },
    {
      slug: 'whatsapp-business-api-complete-guide',
      title: 'WhatsApp Business API: Complete Guide for 2024',
      excerpt: 'Everything you need to know about WhatsApp Business API, from setup to advanced features. Maximize your business communication potential.',
      image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Michael Chen',
      date: '2024-01-12',
      category: 'API',
      readTime: '12 min read',
      featured: false
    },
    {
      slug: 'broadcast-messages-best-practices',
      title: 'WhatsApp Broadcast Messages: Best Practices for Higher Engagement',
      excerpt: 'Learn how to create compelling broadcast messages that your customers actually want to read. Increase open rates and drive more conversions.',
      image: 'https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Emily Rodriguez',
      date: '2024-01-10',
      category: 'Broadcasts',
      readTime: '6 min read',
      featured: false
    },
    {
      slug: 'chatbot-ecommerce-sales',
      title: 'How to Build a WhatsApp Chatbot That Increases E-commerce Sales',
      excerpt: 'Step-by-step guide to creating a WhatsApp chatbot that helps customers, answers questions, and drives more sales for your online store.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'David Kim',
      date: '2024-01-08',
      category: 'Chatbots',
      readTime: '10 min read',
      featured: false
    },
    {
      slug: 'customer-support-whatsapp',
      title: 'Transforming Customer Support with WhatsApp: A Complete Guide',
      excerpt: 'Learn how to provide exceptional customer support through WhatsApp. Reduce response times and improve customer satisfaction.',
      image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Lisa Wang',
      date: '2024-01-05',
      category: 'Marketing Tips',
      readTime: '7 min read',
      featured: false
    },
    {
      slug: 'automation-workflows-setup',
      title: 'Setting Up WhatsApp Automation Workflows for Maximum ROI',
      excerpt: 'Create automated workflows that nurture leads, onboard customers, and drive repeat sales. Boost your ROI with smart automation.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Robert Taylor',
      date: '2024-01-03',
      category: 'Automation',
      readTime: '9 min read',
      featured: false
    }
  ];

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
     <>
      <Helmet>
        <title>WhatsApp Marketing Blog | Business Insights & Tips | AskMeister</title>
        <meta name="description" content="Latest WhatsApp marketing insights, business tips, automation strategies, and industry trends. Learn from experts and grow your business with proven techniques." />
        <meta name="keywords" content="whatsapp marketing blog, business insights, marketing tips, automation strategies, whatsapp trends, marketing guides, business growth, customer engagement tips" />
        <link rel="canonical" href="https://askmeister.com/blog" />
        <meta property="og:title" content="WhatsApp Marketing Blog | Business Insights & Tips" />
        <meta property="og:description" content="Expert insights and tips for WhatsApp marketing, automation, and business growth strategies." />
        <meta property="og:url" content="https://askmeister.com/blog" />
      </Helmet>
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#25D366]/10 via-white to-[#128C7E]/5 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#1C1C1C] mb-6">
            WhatsApp Marketing
            <span className="text-[#25D366] block">Blog</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Insights, tips, and strategies to master WhatsApp marketing. 
            Stay updated with the latest trends and best practices.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-[#25D366] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === 'All' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="order-2 lg:order-1 p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-[#25D366] text-white px-3 py-1 rounded-full text-xs font-medium">
                      Featured
                    </span>
                    <span className="ml-3 text-sm text-gray-500">{featuredPost.readTime}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-[#1C1C1C] mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <User className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-600 mr-4">{featuredPost.author}</span>
                      <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-600">{featuredPost.date}</span>
                    </div>
                    <Link
                      to={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center text-[#25D366] font-semibold hover:underline"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-20 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(selectedCategory === 'All' ? regularPosts : filteredPosts).map((post, index) => (
              <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <Tag className="w-4 h-4 text-[#25D366] mr-2" />
                    <span className="text-sm text-[#25D366] font-medium">{post.category}</span>
                    <span className="ml-auto text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1C1C1C] mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <User className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-600 mr-4">{post.author}</span>
                      <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-600">{post.date}</span>
                    </div>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-[#25D366] hover:underline font-medium text-sm"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-[#25D366]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated with WhatsApp Marketing Insights
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Get the latest tips, strategies, and updates delivered to your inbox weekly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#25D366]"
            />
            <button className="bg-white text-[#25D366] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Blog;