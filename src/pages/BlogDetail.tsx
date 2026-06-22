import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, ArrowLeft, Share2, BookOpen, Tag, Clock } from 'lucide-react';

const BlogDetail = () => {
  const { slug } = useParams();

  const postsBySlug = {
    'whatsapp-marketing-automation-guide': {
      slug: 'whatsapp-marketing-automation-guide',
      title: '10 WhatsApp Marketing Automation Strategies That Actually Work',
      excerpt: 'Discover proven automation strategies that can boost your customer engagement and sales. Learn from real case studies and best practices.',
      content: `
        <h2>Why automation matters for modern WhatsApp marketing</h2>
        <p>Customers expect fast, personalized communication. WhatsApp automation helps teams deliver that experience without increasing manual workload. The goal is not to remove human support, but to free your team for high-value conversations.</p>
        <h2>10 strategies that consistently improve performance</h2>
        <h3>1. Welcome flow with segmentation</h3>
        <p>Use the first interaction to collect intent, product interest, and preferred language. This creates cleaner lists and better campaign targeting.</p>
        <h3>2. Abandoned cart reminders</h3>
        <p>Trigger reminders based on cart events. Include dynamic product info and one-click checkout links for recovery.</p>
        <h3>3. Order lifecycle notifications</h3>
        <p>Automate payment confirmations, shipping updates, and delivery alerts to reduce support tickets.</p>
        <h3>4. Lead qualification chatbot</h3>
        <p>Ask 3-5 key questions and route qualified leads to sales instantly.</p>
        <h3>5. Re-engagement campaigns</h3>
        <p>Create inactivity-based automations to bring back dormant contacts with relevant offers.</p>
        <h3>6. Feedback loop after purchase</h3>
        <p>Collect NPS or star ratings and trigger follow-up actions based on satisfaction level.</p>
        <h3>7. Appointment reminders</h3>
        <p>Reduce no-shows using scheduled reminders and reschedule quick actions.</p>
        <h3>8. Educational drip sequences</h3>
        <p>Send structured learning content to nurture leads over time.</p>
        <h3>9. Event and launch broadcasts</h3>
        <p>Use targeted lists to announce webinars, launches, or offers with better relevance.</p>
        <h3>10. Human takeover automation</h3>
        <p>Define intent-based handoff rules so high-intent chats move to an agent without delay.</p>
        <h2>Execution checklist</h2>
        <ul>
          <li>Collect clear opt-in before campaigns.</li>
          <li>Map events to workflows before building automations.</li>
          <li>Track conversion and response time by campaign.</li>
          <li>Review automation outcomes weekly and optimize.</li>
        </ul>
      `,
      image: 'https://images.pexels.com/photos/3985062/pexels-photo-3985062.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Ask Meister Team',
      date: '2026-01-15',
      category: 'Marketing Tips',
      readTime: '8 min read',
      tags: ['automation', 'marketing', 'whatsapp', 'strategy']
    },
    'whatsapp-business-api-complete-guide': {
      slug: 'whatsapp-business-api-complete-guide',
      title: 'WhatsApp Business API: Complete Guide for 2026',
      excerpt: 'Everything you need to know about WhatsApp Business API, from setup to advanced features. Maximize your business communication potential.',
      content: `
        <h2>What the WhatsApp Business API is</h2>
        <p>The API enables scalable business messaging on WhatsApp with template messaging, webhook-based events, and automation support. It is built for teams that need reliability, governance, and integration with CRM and backend systems.</p>
        <h2>Core capabilities you should use first</h2>
        <ul>
          <li>Template messaging for outbound notifications and campaigns.</li>
          <li>Webhook events for delivery, read receipts, and replies.</li>
          <li>Conversation routing to support and sales teams.</li>
          <li>Contact segmentation and campaign analytics.</li>
        </ul>
        <h2>Implementation roadmap</h2>
        <h3>Step 1: Business verification and onboarding</h3>
        <p>Complete business setup and number verification to avoid delays later.</p>
        <h3>Step 2: Template strategy</h3>
        <p>Prepare category-specific templates (utility, authentication, marketing) with clear CTA flow.</p>
        <h3>Step 3: CRM integration</h3>
        <p>Connect customer attributes and lifecycle stages for personalized messaging.</p>
        <h3>Step 4: Automation triggers</h3>
        <p>Use events such as cart abandonment, payment success, and support ticket status changes.</p>
        <h3>Step 5: Monitoring and optimization</h3>
        <p>Track quality rating, delivery rates, and response outcomes to maintain performance.</p>
        <h2>Common mistakes to avoid</h2>
        <ul>
          <li>Sending broad messages without segmentation.</li>
          <li>Using long, unclear templates with weak CTA.</li>
          <li>Not setting up escalation from bot to human.</li>
          <li>Ignoring analytics after deployment.</li>
        </ul>
      `,
      image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Ask Meister Team',
      date: '2026-01-12',
      category: 'API',
      readTime: '12 min read',
      tags: ['whatsapp api', 'integration', 'automation', 'business']
    },
    'broadcast-messages-best-practices': {
      slug: 'broadcast-messages-best-practices',
      title: 'WhatsApp Broadcast Messages: Best Practices for Higher Engagement',
      excerpt: 'Learn how to create compelling broadcast messages that your customers actually want to read. Increase open rates and drive more conversions.',
      content: `
        <h2>Broadcast performance depends on relevance</h2>
        <p>The strongest broadcast campaigns are segmented, short, and timing-aware. Generic messaging causes lower replies and can reduce quality outcomes.</p>
        <h2>Best practices for campaigns that convert</h2>
        <h3>Segment before sending</h3>
        <p>Build audiences by behavior, purchase stage, geography, and language.</p>
        <h3>Write clear CTA-first copy</h3>
        <p>Use one objective per campaign and one CTA per message.</p>
        <h3>Optimize timing windows</h3>
        <p>Test send times by segment and avoid over-frequency.</p>
        <h3>Use templates with dynamic fields</h3>
        <p>Personalization improves relevance and click-through performance.</p>
        <h3>Measure and iterate</h3>
        <p>Track delivery, read rate, replies, clicks, and downstream conversions.</p>
        <h2>Quick campaign QA checklist</h2>
        <ul>
          <li>Audience and message intent match.</li>
          <li>Template is approved and personalized.</li>
          <li>CTA destination is mobile friendly.</li>
          <li>UTM tags and attribution are in place.</li>
        </ul>
      `,
      image: 'https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Ask Meister Team',
      date: '2026-01-10',
      category: 'Broadcasts',
      readTime: '6 min read',
      tags: ['broadcast', 'campaigns', 'engagement', 'messaging']
    },
    'chatbot-ecommerce-sales': {
      slug: 'chatbot-ecommerce-sales',
      title: 'How to Build a WhatsApp Chatbot That Increases E-commerce Sales',
      excerpt: 'Step-by-step guide to creating a WhatsApp chatbot that helps customers, answers questions, and drives more sales for your online store.',
      content: `
        <h2>Why ecommerce chatbots drive revenue</h2>
        <p>WhatsApp chatbots can handle high-intent conversations in real time, reduce friction in buying journeys, and improve repeat purchases.</p>
        <h2>Blueprint for a conversion-focused ecommerce bot</h2>
        <h3>Intent-based entry points</h3>
        <p>Start with order tracking, product discovery, and support intents.</p>
        <h3>Catalog and recommendation flow</h3>
        <p>Use preference questions to recommend SKUs and bundles.</p>
        <h3>Abandoned cart recovery</h3>
        <p>Trigger personalized reminders with direct checkout links.</p>
        <h3>Post-purchase support</h3>
        <p>Automate delivery updates and reorder prompts.</p>
        <h3>Agent handoff rules</h3>
        <p>Route complex queries or high-value buyers to a live agent.</p>
        <h2>Metrics that matter</h2>
        <ul>
          <li>Conversation-to-checkout conversion rate.</li>
          <li>Recovered cart value.</li>
          <li>Support response time reduction.</li>
          <li>Repeat order rate after bot interactions.</li>
        </ul>
      `,
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Ask Meister Team',
      date: '2026-01-08',
      category: 'Chatbots',
      readTime: '10 min read',
      tags: ['ecommerce', 'chatbot', 'sales', 'conversion']
    },
    'customer-support-whatsapp': {
      slug: 'customer-support-whatsapp',
      title: 'Transforming Customer Support with WhatsApp: A Complete Guide',
      excerpt: 'Learn how to provide exceptional customer support through WhatsApp. Reduce response times and improve customer satisfaction.',
      content: `
        <h2>Support teams need speed and context</h2>
        <p>WhatsApp support works best when teams combine automation for repetitive tasks and human agents for complex issues.</p>
        <h2>Support framework that scales</h2>
        <h3>Unified inbox and assignment logic</h3>
        <p>Distribute conversations by queue, language, and priority.</p>
        <h3>Auto-responses for first touch</h3>
        <p>Share acknowledgement, expected response time, and self-help options.</p>
        <h3>Knowledge shortcuts for agents</h3>
        <p>Use template snippets and macros for common issues.</p>
        <h3>SLA and escalation rules</h3>
        <p>Promote unresolved conversations to senior agents automatically.</p>
        <h2>Key support outcomes</h2>
        <ul>
          <li>Lower first response time.</li>
          <li>Higher resolution within SLA.</li>
          <li>Improved CSAT via faster updates.</li>
          <li>Reduced repetitive support workload.</li>
        </ul>
      `,
      image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Ask Meister Team',
      date: '2026-01-05',
      category: 'Marketing Tips',
      readTime: '7 min read',
      tags: ['support', 'customer experience', 'whatsapp', 'operations']
    },
    'automation-workflows-setup': {
      slug: 'automation-workflows-setup',
      title: 'Setting Up WhatsApp Automation Workflows for Maximum ROI',
      excerpt: 'Create automated workflows that nurture leads, onboard customers, and drive repeat sales. Boost your ROI with smart automation.',
      content: `
        <h2>Workflow design drives ROI</h2>
        <p>High-performing workflows map directly to lifecycle stages: acquisition, activation, retention, and expansion.</p>
        <h2>Workflow architecture for business impact</h2>
        <h3>Lead capture to qualification</h3>
        <p>Use short qualification paths and branch based on intent.</p>
        <h3>Onboarding sequences</h3>
        <p>Guide users through setup milestones with timed nudges.</p>
        <h3>Retention and win-back</h3>
        <p>Trigger campaigns based on inactivity or churn indicators.</p>
        <h3>Upsell and cross-sell paths</h3>
        <p>Promote relevant offers from behavior and purchase history.</p>
        <h2>How to optimize monthly</h2>
        <ul>
          <li>Audit drop-off points in each flow branch.</li>
          <li>Run message-copy A/B tests.</li>
          <li>Refine trigger timing by segment.</li>
          <li>Link campaign outcomes to revenue events.</li>
        </ul>
      `,
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Ask Meister Team',
      date: '2026-01-03',
      category: 'Automation',
      readTime: '9 min read',
      tags: ['workflow', 'automation', 'roi', 'lifecycle']
    }
  } as const;

  const blogPost = postsBySlug[slug as keyof typeof postsBySlug] || postsBySlug['whatsapp-marketing-automation-guide'];
  const hasMatchedSlug = Boolean(slug && postsBySlug[slug as keyof typeof postsBySlug]);
  const relatedPosts = Object.values(postsBySlug).filter((post) => post.slug !== blogPost.slug).slice(0, 3);

  const canonicalSlug = hasMatchedSlug ? slug! : blogPost.slug;
  const canonicalUrl = `https://www.askmeister.com/blog/${canonicalSlug}`;
  const keywordContent = [
    'whatsapp marketing',
    'whatsapp automation',
    'whatsapp business api',
    'chatbot marketing',
    ...blogPost.tags
  ].join(', ');

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: blogPost.title,
    description: blogPost.excerpt,
    image: blogPost.image,
    datePublished: blogPost.date,
    dateModified: blogPost.date,
    author: { '@type': 'Person', name: blogPost.author },
    publisher: {
      '@type': 'Organization',
      name: 'Ask Meister',
      logo: { '@type': 'ImageObject', url: 'https://www.askmeister.com/og-banner.webp' }
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl }
  };

  return (
    <>
      <Helmet>
        <title>{blogPost.title} | Ask Meister Blog</title>
        <meta name="description" content={blogPost.excerpt} />
        <meta name="keywords" content={keywordContent} />
        {!hasMatchedSlug && <meta name="robots" content="noindex,follow" />}
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={`${blogPost.title} | Ask Meister`} />
        <meta property="og:description" content={blogPost.excerpt} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={blogPost.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blogPost.title} />
        <meta name="twitter:description" content={blogPost.excerpt} />
        <meta name="twitter:image" content={blogPost.image} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>
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
                Marketing Expert at Ask Meister with 5+ years of experience in WhatsApp marketing automation.
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
            Start your WhatsApp marketing automation journey with Ask Meister today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
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
    </>
  );
};

export default BlogDetail;