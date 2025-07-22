import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Share2, BookOpen, Tag, Clock } from 'lucide-react';

const BlogDetail = () => {
  const { slug } = useParams();

  // Mock blog post data - in real app, this would come from an API
  const blogPost = {
    slug: 'whatsapp-marketing-automation-guide',
    title: '10 WhatsApp Marketing Automation Strategies That Actually Work',
    excerpt: 'Discover proven automation strategies that can boost your customer engagement and sales. Learn from real case studies and best practices.',
    content: `
      <h2>Introduction</h2>
      <p>WhatsApp marketing automation has revolutionized how businesses communicate with their customers. With over 2 billion active users worldwide, WhatsApp provides an unparalleled opportunity to reach customers where they are most active.</p>
      
      <h2>Why WhatsApp Marketing Automation Matters</h2>
      <p>In today's fast-paced digital world, customers expect instant responses and personalized experiences. WhatsApp marketing automation allows businesses to:</p>
      <ul>
        <li>Provide 24/7 customer support</li>
        <li>Send personalized messages at scale</li>
        <li>Automate repetitive tasks</li>
        <li>Increase customer engagement rates</li>
        <li>Drive more sales and conversions</li>
      </ul>
      
      <h2>10 Proven WhatsApp Marketing Automation Strategies</h2>
      
      <h3>1. Welcome Message Automation</h3>
      <p>Set up automated welcome messages for new subscribers. This creates a great first impression and sets expectations for future communications.</p>
      
      <h3>2. Abandoned Cart Recovery</h3>
      <p>Automatically send reminders to customers who have left items in their shopping cart. Include product images and a direct checkout link.</p>
      
      <h3>3. Order Confirmation and Updates</h3>
      <p>Keep customers informed about their orders with automated messages for confirmation, shipping updates, and delivery notifications.</p>
      
      <h3>4. Birthday and Anniversary Messages</h3>
      <p>Send personalized birthday wishes and anniversary messages with special offers to make customers feel valued.</p>
      
      <h3>5. Lead Nurturing Sequences</h3>
      <p>Create automated sequences to nurture leads based on their interests and behavior. Provide valuable content and gradually introduce your products.</p>
      
      <h3>6. Customer Feedback Collection</h3>
      <p>Automatically ask for feedback after purchases or service interactions. Use this data to improve your offerings.</p>
      
      <h3>7. Appointment Reminders</h3>
      <p>Send automated reminders for appointments, bookings, or scheduled services to reduce no-shows.</p>
      
      <h3>8. Reactivation Campaigns</h3>
      <p>Automatically reach out to inactive customers with special offers or updates to re-engage them.</p>
      
      <h3>9. Educational Content Drip</h3>
      <p>Share valuable educational content automatically to position your brand as an expert in your field.</p>
      
      <h3>10. Event and Promotion Announcements</h3>
      <p>Automatically notify customers about upcoming events, sales, or new product launches.</p>
      
      <h2>Best Practices for WhatsApp Automation</h2>
      <ul>
        <li>Always get explicit consent before adding contacts</li>
        <li>Keep messages concise and valuable</li>
        <li>Personalize messages using customer data</li>
        <li>Test different message timings</li>
        <li>Monitor engagement metrics regularly</li>
        <li>Provide easy opt-out options</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>WhatsApp marketing automation is a powerful tool that can significantly boost your business growth when implemented correctly. Start with these proven strategies and gradually expand your automation as you learn what works best for your audience.</p>
      
      <p>Ready to implement these strategies? <a href="/pricing">Get started with AskMeister</a> and take your WhatsApp marketing to the next level.</p>
    `,
    image: 'https://images.pexels.com/photos/3985062/pexels-photo-3985062.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Sarah Johnson',
    date: '2024-01-15',
    category: 'Marketing Tips',
    readTime: '8 min read',
    tags: ['automation', 'marketing', 'whatsapp', 'strategy']
  };

  const relatedPosts = [
    {
      slug: 'whatsapp-business-api-complete-guide',
      title: 'WhatsApp Business API: Complete Guide for 2024',
      image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'API',
      readTime: '12 min read'
    },
    {
      slug: 'broadcast-messages-best-practices',
      title: 'WhatsApp Broadcast Messages: Best Practices',
      image: 'https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'Broadcasts',
      readTime: '6 min read'
    },
    {
      slug: 'chatbot-ecommerce-sales',
      title: 'How to Build a WhatsApp Chatbot for E-commerce',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'Chatbots',
      readTime: '10 min read'
    }
  ];

  return (
    <div className="pt-16">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          to="/blog"
          className="inline-flex items-center text-[#25D366] hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <div className="flex items-center mb-4">
            <Tag className="w-4 h-4 text-[#25D366] mr-2" />
            <span className="text-[#25D366] font-medium text-sm">{blogPost.category}</span>
            <span className="mx-2 text-gray-300">•</span>
            <Clock className="w-4 h-4 text-gray-400 mr-2" />
            <span className="text-gray-600 text-sm">{blogPost.readTime}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-4 leading-tight">
            {blogPost.title}
          </h1>
          
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            {blogPost.excerpt}
          </p>
          
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <User className="w-5 h-5 text-gray-400 mr-2" />
              <span className="text-gray-700 font-medium mr-4">{blogPost.author}</span>
              <Calendar className="w-5 h-5 text-gray-400 mr-2" />
              <span className="text-gray-600">{blogPost.date}</span>
            </div>
            
            <button className="flex items-center text-[#25D366] hover:underline">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </button>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-8">
          <img
            src={blogPost.image}
            alt={blogPost.title}
            className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Article Content */}
        <div 
          className="prose prose-lg max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: blogPost.content }}
          style={{
            color: '#1C1C1C',
            lineHeight: '1.8'
          }}
        />

        {/* Tags */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-[#1C1C1C] mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {blogPost.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-[#25D366]/10 text-[#25D366] px-3 py-1 rounded-full text-sm font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Author Bio */}
        <div className="bg-[#F7F7F7] rounded-xl p-6 mb-12">
          <h3 className="text-lg font-semibold text-[#1C1C1C] mb-2">About the Author</h3>
          <div className="flex items-center">
            <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center mr-4">
              <User className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="font-medium text-[#1C1C1C]">{blogPost.author}</div>
              <div className="text-gray-600 text-sm">
                Marketing Expert at AskMeister with 5+ years of experience in WhatsApp marketing automation.
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-20 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1C1C1C] mb-12 text-center">
            Related Articles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((post, index) => (
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
                  <h3 className="text-lg font-bold text-[#1C1C1C] mb-4">
                    {post.title}
                  </h3>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-[#25D366] hover:underline font-medium text-sm"
                  >
                    Read More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#25D366]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Implement These Strategies?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Start your WhatsApp marketing automation journey with AskMeister today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/pricing"
              className="bg-white text-[#25D366] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Free
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#25D366] transition-colors"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;