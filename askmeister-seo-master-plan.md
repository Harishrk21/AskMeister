# 🚀 GOD-LEVEL SEO MASTER PLAN — askmeister.com
### WhatsApp Marketing Platform | Target: Tamil Nadu & Chennai
> Last Updated: May 2026 | Priority: HIGH → MEDIUM → LOW

---

## 📋 TABLE OF CONTENTS
1. [Technical SEO (Foundation)](#1-technical-seo-foundation)
2. [On-Page SEO](#2-on-page-seo)
3. [Content Strategy](#3-content-strategy)
4. [Local SEO — Tamil Nadu / Chennai Focus](#4-local-seo--tamil-nadu--chennai-focus)
5. [Off-Page SEO](#5-off-page-seo)
6. [Schema Markup](#6-schema-markup)
7. [Core Web Vitals & Performance](#7-core-web-vitals--performance)
8. [Keyword Master List](#8-keyword-master-list)
9. [Competitor Analysis Targets](#9-competitor-analysis-targets)
10. [Monthly SEO Checklist](#10-monthly-seo-checklist)

---

## 1. TECHNICAL SEO (Foundation)

### 1.1 Site Structure & Crawlability
- [ ] Ensure `sitemap.xml` exists at `https://askmeister.com/sitemap.xml`
- [ ] Submit sitemap to **Google Search Console** and **Bing Webmaster Tools**
- [ ] Create/update `robots.txt` at `https://askmeister.com/robots.txt`
  ```
  User-agent: *
  Allow: /
  Sitemap: https://askmeister.com/sitemap.xml
  ```
- [ ] Implement **dynamic sitemap** that auto-updates when new pages/blogs are added
- [ ] Set canonical URLs on every page to avoid duplicate content
- [ ] Fix all **broken links** (404s) — use tools like Screaming Frog or Ahrefs
- [ ] Ensure all pages are **indexed** — check via `site:askmeister.com` in Google
- [ ] Implement **breadcrumb navigation** on all inner pages
- [ ] Set preferred domain (www vs non-www) and 301 redirect the other
- [ ] Ensure **HTTPS** is enabled and all HTTP → HTTPS 301 redirects are in place
- [ ] Fix **mixed content** warnings (HTTP assets on HTTPS pages)

### 1.2 URL Structure
- [ ] Use clean, keyword-rich URLs (no IDs, no special chars)
  - ✅ Good: `/whatsapp-marketing-chennai`
  - ❌ Bad: `/page?id=123&cat=2`
- [ ] Keep URLs lowercase, hyphen-separated
- [ ] Max URL depth: 3 levels (`/blog/category/post-title`)

### 1.3 Mobile Optimization
- [ ] Ensure site is **fully mobile responsive** (Google's mobile-first indexing)
- [ ] Test with [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [ ] Avoid intrusive pop-ups on mobile
- [ ] Tap targets ≥ 48x48px
- [ ] Font size ≥ 16px on mobile

### 1.4 Indexing & Crawl Budget
- [ ] Block non-essential pages from indexing (thank-you pages, admin, login) via `noindex`
- [ ] Use **hreflang** tags if adding Tamil language pages (`lang="ta"`)
- [ ] Add `rel="alternate"` for Tamil and English versions of pages
- [ ] Check crawl errors weekly in Google Search Console

---

## 2. ON-PAGE SEO

### 2.1 Title Tags
> Format: `Primary Keyword | Brand Name` | Max 60 characters

| Page | Recommended Title Tag |
|------|-----------------------|
| Home | WhatsApp Marketing Platform in Chennai \| AskMeister |
| Pricing | WhatsApp API Pricing Plans Tamil Nadu \| AskMeister |
| Features | WhatsApp Business API Features \| AskMeister |
| Blog | WhatsApp Marketing Tips & Guides \| AskMeister Blog |
| Contact | Contact AskMeister - WhatsApp Marketing Chennai |
| About | About AskMeister - Best WhatsApp Platform Tamil Nadu |

- [ ] Every page has a **unique title tag** (no duplicates)
- [ ] Primary keyword appears near the beginning of title
- [ ] Include location "Chennai" or "Tamil Nadu" in key pages

### 2.2 Meta Descriptions
> Max 155-160 characters | Include CTA + Keyword + Location

| Page | Meta Description |
|------|-----------------------|
| Home | AskMeister is Tamil Nadu's leading WhatsApp Marketing Platform. Send bulk messages, automate campaigns & boost sales. Try free today! |
| Pricing | Affordable WhatsApp API pricing for Chennai businesses. No hidden fees. Start free and scale your WhatsApp marketing with AskMeister. |
| Features | Explore powerful features: bulk messaging, chatbots, analytics & more. AskMeister is the #1 WhatsApp platform for Tamil Nadu businesses. |

- [ ] Every page has a **unique meta description**
- [ ] Include a call-to-action (Try Free, Get Started, Learn More)
- [ ] Don't stuff keywords — write naturally

### 2.3 Heading Structure (H1–H6)
- [ ] Each page has **exactly ONE H1 tag**
- [ ] H1 must contain the primary keyword
- [ ] Use H2 for main sections, H3 for subsections
- [ ] Never skip heading levels (H1 → H3 without H2)

**Example for Home Page:**
```html
<h1>WhatsApp Marketing Platform for Tamil Nadu Businesses</h1>
  <h2>Why Choose AskMeister?</h2>
    <h3>Bulk WhatsApp Messaging</h3>
    <h3>Automated Chatbots</h3>
  <h2>How It Works</h2>
  <h2>Pricing Plans</h2>
  <h2>Trusted by Chennai Businesses</h2>
```

### 2.4 Image Optimization
- [ ] Every image has a descriptive **alt text** with keywords
  - ✅ `alt="WhatsApp marketing dashboard for Chennai businesses"`
  - ❌ `alt="img1"` or empty alt
- [ ] Compress all images (use WebP format)
- [ ] Use descriptive **file names**: `whatsapp-marketing-platform-chennai.webp`
- [ ] Implement **lazy loading** for below-the-fold images
- [ ] Add images to sitemap (`image:image` tags)

### 2.5 Internal Linking
- [ ] Every page links to at least 2–3 other relevant pages
- [ ] Use **keyword-rich anchor text** (not "click here")
  - ✅ `<a href="/features">WhatsApp bulk messaging features</a>`
  - ❌ `<a href="/features">Click here</a>`
- [ ] Link blog posts to relevant product/service pages
- [ ] Create a **pillar page + cluster model**:
  - Pillar: "WhatsApp Marketing Guide"
  - Clusters: Bulk SMS, Chatbots, API Integration, Analytics, Pricing

### 2.6 Content Quality
- [ ] Home page content: minimum **800 words**
- [ ] Blog posts: minimum **1500 words** for competitive keywords
- [ ] Use keywords naturally — **keyword density 1–2%**
- [ ] Add **FAQ sections** on product pages (also helps for featured snippets)
- [ ] Use **bullet points, numbered lists, tables** for readability
- [ ] Add a **Table of Contents** on long blog posts

### 2.7 Open Graph & Twitter Cards
```html
<!-- Add to <head> of every page -->
<meta property="og:title" content="WhatsApp Marketing Platform Chennai | AskMeister" />
<meta property="og:description" content="Tamil Nadu's top WhatsApp marketing tool..." />
<meta property="og:image" content="https://askmeister.com/images/og-image.jpg" />
<meta property="og:url" content="https://askmeister.com" />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="AskMeister - WhatsApp Marketing" />
<meta name="twitter:image" content="https://askmeister.com/images/twitter-card.jpg" />
```
- [ ] OG image size: **1200x630px**
- [ ] Test with [Facebook Debugger](https://developers.facebook.com/tools/debug/)

---

## 3. CONTENT STRATEGY

### 3.1 Core Pages to Create (if not existing)
- [ ] `/whatsapp-marketing-tamil-nadu` — Geo-targeted landing page
- [ ] `/whatsapp-marketing-chennai` — City-specific page
- [ ] `/whatsapp-bulk-messaging` — Feature page
- [ ] `/whatsapp-chatbot` — Chatbot feature page
- [ ] `/whatsapp-api-integration` — Technical/API page
- [ ] `/whatsapp-marketing-for-ecommerce` — Vertical-specific page
- [ ] `/whatsapp-marketing-for-restaurants-chennai` — Niche vertical
- [ ] `/whatsapp-marketing-for-real-estate-chennai` — Niche vertical
- [ ] `/alternatives/wati-alternative` — Comparison page
- [ ] `/alternatives/aisensy-alternative` — Comparison page
- [ ] `/alternatives/interakt-alternative` — Comparison page
- [ ] `/pricing` — Clear pricing page
- [ ] `/case-studies` — Tamil Nadu business success stories
- [ ] `/free-trial` — CTA landing page optimized for conversions

### 3.2 Blog Content Calendar (First 3 Months)

**Month 1 — Foundation Content**
- [ ] "What is WhatsApp Marketing? Complete Guide for Tamil Nadu Businesses (2026)"
- [ ] "WhatsApp Business API vs Regular WhatsApp: Which One Do You Need?"
- [ ] "Top 10 WhatsApp Marketing Strategies for Chennai Retailers"
- [ ] "How to Get WhatsApp Business API Approved in India (Step-by-Step)"
- [ ] "WhatsApp Marketing vs SMS Marketing: Which Wins for Tamil Nadu?"

**Month 2 — Comparison & Commercial Content**
- [ ] "AskMeister vs WATI: Which WhatsApp Platform is Better for Tamil Nadu?"
- [ ] "AskMeister vs AiSensy: Honest Comparison (2026)"
- [ ] "Best WhatsApp Marketing Tools in India 2026 [Tamil Nadu Review]"
- [ ] "WhatsApp Marketing ROI: Case Study from a Chennai Clothing Store"
- [ ] "How to Send Bulk WhatsApp Messages Without Getting Banned"

**Month 3 — Local & Vertical Content**
- [ ] "WhatsApp Marketing for Real Estate Agents in Chennai"
- [ ] "How Chennai Restaurants Are Using WhatsApp to Boost Orders"
- [ ] "WhatsApp Chatbots for Tamil Nadu Educational Institutes"
- [ ] "WhatsApp Marketing for Jewellery Shops in Tamil Nadu"
- [ ] "Top WhatsApp Marketing Mistakes Tamil Nadu Businesses Make"

### 3.3 Content Optimization Rules
- [ ] Every blog post targets **one primary keyword** + 2–3 secondary keywords
- [ ] Include **real Tamil Nadu business examples** and case studies
- [ ] Add author bio with expertise (E-E-A-T signals)
- [ ] Update old posts every 6 months with fresh data
- [ ] Add **"Last Updated"** date on all posts

---

## 4. LOCAL SEO — TAMIL NADU / CHENNAI FOCUS

### 4.1 Google Business Profile (GBP)
- [ ] Create/claim **Google Business Profile** for AskMeister
- [ ] Set primary category: "Software Company" or "Marketing Agency"
- [ ] Add secondary categories: "Internet Marketing Service"
- [ ] Add **Chennai address** (even if remote/virtual office)
- [ ] Upload 10+ high-quality photos (office, team, product screenshots)
- [ ] Write a keyword-rich business description (mention WhatsApp, Chennai, Tamil Nadu)
- [ ] Add business hours, phone number, website
- [ ] Enable **messaging** on GBP
- [ ] Post on GBP weekly (offers, updates, blog posts)
- [ ] Add all **products/services** to GBP listing

### 4.2 Local Citations (NAP Consistency)
> NAP = Name, Address, Phone — must be IDENTICAL everywhere

- [ ] Submit to **Justdial** (critical for Tamil Nadu)
- [ ] Submit to **Sulekha** (huge in Chennai)
- [ ] Submit to **IndiaMART**
- [ ] Submit to **TradeIndia**
- [ ] Submit to **Clutch.co** (B2B software)
- [ ] Submit to **G2** (software reviews)
- [ ] Submit to **Capterra**
- [ ] Submit to **Software Suggest** (popular in India)
- [ ] Submit to **Crunchbase**
- [ ] Submit to **Yelp India**
- [ ] Submit to local Chennai business directories

### 4.3 Local Landing Pages
Create dedicated pages for key Tamil Nadu cities:
- [ ] `/whatsapp-marketing-chennai`
- [ ] `/whatsapp-marketing-coimbatore`
- [ ] `/whatsapp-marketing-madurai`
- [ ] `/whatsapp-marketing-trichy`
- [ ] `/whatsapp-marketing-salem`
- [ ] `/whatsapp-marketing-tiruppur`

**Each local page must include:**
- [ ] City name in H1, title tag, meta description
- [ ] Local business examples or testimonials from that city
- [ ] Embedded Google Map
- [ ] LocalBusiness schema markup
- [ ] Local phone number (or WhatsApp number)
- [ ] Mention of local industries (e.g., "textile businesses in Tiruppur")

### 4.4 Reviews Strategy
- [ ] Ask every customer to leave a **Google Review**
- [ ] Respond to ALL reviews (positive and negative) within 24 hours
- [ ] Aim for **50+ Google reviews** in first 6 months
- [ ] Get reviews on G2, Capterra, Software Suggest
- [ ] Create a review collection system (post-onboarding email asking for review)

### 4.5 Tamil Language SEO
- [ ] Create Tamil versions of key pages (use `hreflang="ta"`)
- [ ] Target Tamil keywords: 
  - "வாட்ஸ்அப் மார்க்கெட்டிங்" (WhatsApp marketing)
  - "சென்னை வணிகம்" (Chennai business)
- [ ] Add Tamil content to GBP description
- [ ] Create at least 2 blog posts per month in Tamil

---

## 5. OFF-PAGE SEO

### 5.1 Link Building Strategy

#### Tier 1 — High Authority Links (Priority)
- [ ] **HARO (Help a Reporter Out)** — respond to journalist queries about WhatsApp marketing/India tech
- [ ] **Guest posts** on Indian marketing blogs:
  - Social Samosa
  - Digital Vidya Blog
  - Marketing Mindset
  - YourStory (startup stories)
  - Inc42 (startup coverage)
- [ ] **Product Hunt launch** — create a Product Hunt page for AskMeister
- [ ] **SaaS directories**: G2, Capterra, Software Suggest, GetApp — these give dofollow links

#### Tier 2 — Industry Links
- [ ] Get listed in **"Best WhatsApp Marketing Tools"** roundup articles
- [ ] Reach out to bloggers who wrote "WATI alternatives" or "AiSensy alternatives"
- [ ] **Partner pages** — integrate with complementary tools (CRMs, Shopify apps, etc.)
- [ ] Tamil Nadu tech/startup communities — get mentioned in local startup newsletters

#### Tier 3 — Content-Driven Links
- [ ] Create a **free WhatsApp ROI calculator** (link bait tool)
- [ ] Publish **original research**: "State of WhatsApp Marketing in Tamil Nadu 2026"
- [ ] Create **free WhatsApp message templates** page (gets linked naturally)
- [ ] Publish **WhatsApp marketing statistics** post (data pages attract links)
- [ ] Create an **infographic**: "WhatsApp vs Email vs SMS for Indian Businesses"

### 5.2 Social Media for SEO Signals
- [ ] Create and actively maintain:
  - [ ] LinkedIn Company Page (target B2B Chennai businesses)
  - [ ] Twitter/X (@askmeister)
  - [ ] Facebook Business Page
  - [ ] Instagram (before/after case studies, Tamil Nadu business wins)
  - [ ] YouTube (tutorial videos — "How to use AskMeister")
- [ ] Share every blog post on all platforms
- [ ] Join and participate in:
  - [ ] Tamil Nadu Entrepreneurs Facebook groups
  - [ ] Chennai Startups LinkedIn groups
  - [ ] Reddit: r/India, r/startups, r/digital_marketing

### 5.3 PR & Brand Mentions
- [ ] Reach out to **YourStory** for a startup feature article
- [ ] Submit to **Inc42** startup coverage
- [ ] Get featured in **local Chennai newspapers** online editions (The Hindu, Dinamalar)
- [ ] Participate in **Tamil Nadu startup events** and get mentioned in event coverage
- [ ] Apply for **startup awards** (recognition sites link back)

### 5.4 Forum & Community Building
- [ ] Answer questions on **Quora** related to WhatsApp marketing in India
- [ ] Participate in **Reddit threads** about WhatsApp Business API
- [ ] Be active in **Facebook Groups** for Tamil Nadu business owners
- [ ] Post helpful content in **LinkedIn communities**
- [ ] Answer questions on **IndiaMART forums**

---

## 6. SCHEMA MARKUP

### 6.1 Organization Schema (Add to Homepage)
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "AskMeister",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "url": "https://askmeister.com",
  "description": "WhatsApp Marketing Platform for Tamil Nadu businesses",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "INR"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "120"
  }
}
```

### 6.2 LocalBusiness Schema (Add to Contact/Chennai Pages)
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "AskMeister",
  "url": "https://askmeister.com",
  "telephone": "+91-XXXXXXXXXX",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Chennai",
    "addressRegion": "Tamil Nadu",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 13.0827,
    "longitude": 80.2707
  },
  "areaServed": ["Chennai", "Tamil Nadu", "India"],
  "priceRange": "₹₹"
}
```

### 6.3 FAQ Schema (Add to Product Pages)
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is WhatsApp Marketing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "WhatsApp Marketing is the use of WhatsApp Business API to send promotional messages, automate customer support, and engage customers through the world's most popular messaging app."
      }
    },
    {
      "@type": "Question",
      "name": "Is AskMeister available in Tamil Nadu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! AskMeister serves thousands of businesses across Tamil Nadu including Chennai, Coimbatore, Madurai and more."
      }
    }
  ]
}
```

### 6.4 Breadcrumb Schema
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://askmeister.com"},
    {"@type": "ListItem", "position": 2, "name": "Features", "item": "https://askmeister.com/features"},
    {"@type": "ListItem", "position": 3, "name": "WhatsApp Chatbot", "item": "https://askmeister.com/features/whatsapp-chatbot"}
  ]
}
```

### 6.5 Article Schema (Add to all Blog Posts)
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Your Blog Post Title Here",
  "author": {
    "@type": "Person",
    "name": "Author Name"
  },
  "publisher": {
    "@type": "Organization",
    "name": "AskMeister",
    "logo": {
      "@type": "ImageObject",
      "url": "https://askmeister.com/logo.png"
    }
  },
  "datePublished": "2026-05-01",
  "dateModified": "2026-05-04",
  "image": "https://askmeister.com/blog/image.jpg"
}
```

---

## 7. CORE WEB VITALS & PERFORMANCE

### 7.1 Speed Targets (Google's Standards)
| Metric | Target | Tool to Check |
|--------|--------|---------------|
| LCP (Largest Contentful Paint) | < 2.5 seconds | PageSpeed Insights |
| FID/INP (Interaction to Next Paint) | < 200ms | PageSpeed Insights |
| CLS (Cumulative Layout Shift) | < 0.1 | PageSpeed Insights |
| TTFB (Time to First Byte) | < 600ms | GTmetrix |
| Page Size | < 2MB | GTmetrix |

### 7.2 Performance Checklist
- [ ] Enable **Gzip/Brotli compression** on server
- [ ] Use a **CDN** (Cloudflare free tier works) for static assets
- [ ] Minify **CSS, JavaScript, HTML**
- [ ] Defer non-critical JavaScript (`defer` / `async` attributes)
- [ ] Preload **LCP image** with `<link rel="preload">`
- [ ] Convert all images to **WebP format**
- [ ] Implement **browser caching** (Cache-Control headers)
- [ ] Remove unused CSS (use PurgeCSS)
- [ ] Avoid **render-blocking resources**
- [ ] Use **font-display: swap** for Google Fonts
- [ ] Host fonts locally (reduce external requests)
- [ ] Implement **Critical CSS** inline for above-the-fold content

### 7.3 Server & Hosting
- [ ] Use a server located in **India** (Mumbai/Chennai) for lower TTFB
- [ ] Enable **HTTP/2 or HTTP/3**
- [ ] Use **server-side rendering (SSR)** or **static generation** for key pages

---

## 8. KEYWORD MASTER LIST

### 8.1 Primary Keywords (High Priority — Target in Core Pages)
| Keyword | Monthly Search Est. | Difficulty | Target Page |
|---------|-------------------|------------|-------------|
| whatsapp marketing platform | High | Medium | Home |
| whatsapp marketing chennai | Medium | Low | /whatsapp-marketing-chennai |
| whatsapp marketing tamil nadu | Medium | Low | /whatsapp-marketing-tamil-nadu |
| whatsapp business api india | High | High | /whatsapp-api |
| bulk whatsapp messaging | High | Medium | /features/bulk-messaging |
| whatsapp chatbot india | Medium | Medium | /features/chatbot |
| wati alternative | Medium | Medium | /alternatives/wati |
| aisensy alternative | Medium | Medium | /alternatives/aisensy |

### 8.2 Long-tail Keywords (Easier to Rank — Target in Blog)
- "how to do whatsapp marketing in tamil"
- "whatsapp marketing for small business chennai"
- "whatsapp bulk message sender tamil nadu"
- "best whatsapp marketing tool for indian businesses"
- "how to get whatsapp business api in india"
- "whatsapp marketing for ecommerce tamil nadu"
- "whatsapp automation tool chennai"
- "free whatsapp marketing tool india"
- "whatsapp crm integration india"
- "whatsapp marketing cost india"

### 8.3 Competitor Brand Keywords (Comparison Pages)
- "wati vs [your brand]"
- "aisensy vs askmeister"
- "interakt alternative india"
- "yellow.ai alternative"
- "gupshup alternative india"
- "whatsapp business api providers india"

### 8.4 Tamil Language Keywords
- "வாட்ஸ்அப் மார்க்கெட்டிங்" (WhatsApp marketing)
- "வாட்ஸ்அப் தொழில்" (WhatsApp business)
- "சென்னை டிஜிட்டல் மார்க்கெட்டிங்" (Chennai digital marketing)
- "வாட்ஸ்அப் chatbot"
- "தமிழ்நாடு வணிகம்" (Tamil Nadu business)

---

## 9. COMPETITOR ANALYSIS TARGETS

Track these competitors monthly:
| Competitor | Website | What to Monitor |
|------------|---------|-----------------|
| WATI | wati.io | Keywords, backlinks, content |
| AiSensy | aisensy.com | Features pages, pricing |
| Interakt | interakt.shop | Blog topics, local targeting |
| Gupshup | gupshup.io | Enterprise content strategy |
| Yellow.ai | yellow.ai | Technical content |
| Zoko | zoko.io | Ecommerce targeting |

**Action Items:**
- [ ] Set up **Google Alerts** for each competitor name
- [ ] Monitor competitor backlinks monthly (Ahrefs/SEMrush)
- [ ] Check competitor's top-performing pages (SEMrush → Organic Pages)
- [ ] Create **better versions** of their top content (Skyscraper Technique)
- [ ] Identify keywords competitors rank for that you don't → create content

---

## 10. MONTHLY SEO CHECKLIST

### Week 1 — Content
- [ ] Publish 2 new blog posts (targeting keywords from the list)
- [ ] Update 1 old blog post with fresh data/links
- [ ] Post 2x on LinkedIn with insights about WhatsApp marketing
- [ ] Share blog posts on all social platforms

### Week 2 — Technical Checks
- [ ] Check Google Search Console for crawl errors
- [ ] Check Core Web Vitals report in GSC
- [ ] Fix any new 404 errors
- [ ] Monitor page speed scores

### Week 3 — Link Building
- [ ] Reach out to 5 websites for guest post opportunities
- [ ] Answer 3 Quora questions about WhatsApp marketing
- [ ] Submit to 2 new directories/listings
- [ ] Monitor brand mentions and claim unlinked ones

### Week 4 — Analytics & Reporting
- [ ] Review Google Analytics for top pages, bounce rate, conversions
- [ ] Check keyword ranking changes (SEMrush/Ahrefs)
- [ ] Review competitor changes
- [ ] Plan next month's content calendar

---

## 🛠 RECOMMENDED SEO TOOLS

| Tool | Purpose | Cost |
|------|---------|------|
| Google Search Console | Monitor indexing, errors, performance | Free |
| Google Analytics 4 | Traffic & conversion tracking | Free |
| Ahrefs / SEMrush | Keyword research, backlinks, competitors | Paid |
| Screaming Frog | Technical SEO crawling | Free (up to 500 URLs) |
| PageSpeed Insights | Core Web Vitals | Free |
| GTmetrix | Page speed analysis | Free |
| Schema Markup Validator | Test structured data | Free |
| Rank Math / Yoast SEO | On-page SEO (if using WordPress) | Free/Paid |
| Ubersuggest | Budget keyword tool | Free/Paid |
| Google My Business | Local SEO management | Free |

---

## 📌 QUICK WINS (Do These First!)

1. ✅ **Set up Google Search Console + submit sitemap**
2. ✅ **Claim Google Business Profile with Chennai address**
3. ✅ **Fix all title tags and meta descriptions** on existing pages
4. ✅ **Add FAQ schema** to homepage and product pages
5. ✅ **Create the Chennai landing page** (`/whatsapp-marketing-chennai`)
6. ✅ **Publish first comparison post** (e.g., "AskMeister vs WATI")
7. ✅ **List on G2, Capterra, Software Suggest** (free backlinks!)
8. ✅ **Set up Cloudflare** for CDN + performance boost
9. ✅ **Compress all images to WebP**
10. ✅ **Get 10 Google reviews** from existing customers

---

> 💡 **Pro Tip for Cursor:** When implementing schema markup, add it inside a `<script type="application/ld+json">` tag inside the `<head>` of each page. Use Next.js `next/head` or a dedicated SEO component to dynamically inject page-specific metadata.

---

*Document created for askmeister.com | WhatsApp Marketing Platform | Tamil Nadu & Chennai SEO Strategy*
