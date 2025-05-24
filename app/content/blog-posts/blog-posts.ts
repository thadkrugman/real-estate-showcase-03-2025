import type { BlogPost } from '@/types';

export const posts: BlogPost[] = [
  {
    id: '1',
    title: "First-Time Home Buyer's Guide: 10 Essential Tips for Success",
    slug: 'first-time-home-buyer-guide-essential-tips',
    description:
      'Navigate the home buying process with confidence. From pre-approval to closing, discover the insider tips that will help you secure your dream home while avoiding common pitfalls.',
    imageUrl:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', // Comment: Use image of happy young couple holding house keys in front of a beautiful home
    date: 'Mar 15, 2025',
    datetime: '2025-03-15',
    category: 'Home Buying',
    author: {
      name: 'Sarah Brooks',
      role: 'Senior Real Estate Advisor',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80', // Comment: Professional headshot of Asian woman in business attire
    },
    bodySections: [
      {
        id: '1',
        type: 'image',
        image: {
          url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', // Comment: Hero image of diverse couple celebrating with house keys
          alt: 'Happy couple holding house keys',
        },
      },
      {
        id: '2',
        type: 'text',
        content: {
          title: 'Get Your Finances in Order First',
          text: [
            {
              id: '1',
              text: "Before you start browsing listings, it's crucial to understand your financial position. Check your credit score, gather financial documents, and determine how much you can realistically afford. A good rule of thumb is to spend no more than 28% of your gross monthly income on housing costs.",
            },
            {
              id: '2',
              text: "Getting pre-approved for a mortgage gives you a clear budget and shows sellers you're serious. Our platform connects you with trusted lenders who can streamline this process, often getting you pre-approved within 24 hours.",
            },
          ],
        },
      },
      {
        id: '3',
        type: 'text',
        content: {
          title: 'Research Neighborhoods Like a Pro',
          text: [
            {
              id: '1',
              text: "Location is everything in real estate. Use our advanced neighborhood analytics to explore crime rates, school ratings, commute times, and future development plans. Don't just visit during the day – drive through potential neighborhoods at different times and days of the week.",
            },
            {
              id: '2',
              text: 'Consider factors beyond the house itself: proximity to work, quality of schools, access to amenities, and resale potential. Our heat map feature shows you exactly how properties appreciate over time in different areas.',
            },
          ],
        },
      },
      {
        id: '4',
        type: 'image',
        image: {
          url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', // Comment: Modern office building or city skyline representing research and data
          alt: 'Real estate market research and analytics',
        },
      },
      {
        id: '5',
        type: 'text',
        content: {
          title: "Don't Skip the Home Inspection",
          text: [
            {
              id: '1',
              text: "A professional home inspection can save you thousands down the road. It reveals potential issues with plumbing, electrical, HVAC, and structural components that aren't visible during a casual walkthrough.",
            },
            {
              id: '2',
              text: 'Our platform includes a network of certified inspectors and provides digital inspection reports with photos and priority rankings for any issues found. Remember, you can often negotiate repairs or price reductions based on inspection findings.',
            },
          ],
        },
      },
    ],
  },
  {
    id: '2',
    title:
      '2025 Real Estate Market Outlook: What Buyers and Sellers Need to Know',
    slug: '2025-real-estate-market-outlook-buyers-sellers',
    description:
      'Get ahead of the market with our comprehensive analysis of 2025 real estate trends. Discover emerging opportunities, pricing predictions, and strategic insights for making informed decisions.',
    imageUrl:
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', // Comment: Charts, graphs, or data visualization showing real estate trends
    date: 'Mar 12, 2025',
    datetime: '2025-03-12',
    category: 'Market Analysis',
    author: {
      name: 'Marcus Rodriguez',
      role: 'Market Research Director',
      imageUrl:
        'https://images.unsplash.com/photo-1639747280804-dd2d6b3d88ac?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80', // Comment: Professional headshot of Hispanic man in business suit
    },
    bodySections: [
      {
        id: '1',
        type: 'text',
        content: {
          title: 'Interest Rates Stabilizing Creates Opportunities',
          text: [
            {
              id: '1',
              text: 'After years of volatility, mortgage rates are showing signs of stabilization in 2025. Current rates hovering around 6.5-7% are creating a more predictable environment for both buyers and sellers to make informed decisions.',
            },
            {
              id: '2',
              text: 'This stability is encouraging more inventory to hit the market as sellers who were "rate-locked" in their current homes are now more willing to move. Our platform data shows a 23% increase in new listings compared to this time last year.',
            },
          ],
        },
      },
      {
        id: '3',
        type: 'image',
        image: {
          url: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', // Comment: Professional real estate market data dashboard or charts
          alt: 'Real estate market trends and data analysis',
        },
      },
      {
        id: '4',
        type: 'text',
        content: {
          title: 'Regional Variations Tell the Real Story',
          text: [
            {
              id: '1',
              text: 'While national headlines focus on broad trends, successful real estate decisions happen at the local level. Our proprietary analytics reveal significant variations even within the same metropolitan areas.',
            },
            {
              id: '2',
              text: 'Suburban markets are experiencing renewed interest as remote work policies solidify, while urban condos in tech hubs are seeing price corrections. Use our micro-market analysis tools to identify pockets of opportunity in your target area.',
            },
          ],
        },
      },
    ],
  },
  {
    id: '3',
    title: 'Rental Property Investment: Building Wealth Through Real Estate',
    slug: 'rental-property-investment-building-wealth',
    description:
      'Discover how to build long-term wealth through rental property investment. Learn about cash flow analysis, property selection criteria, and tax advantages that savvy investors use.',
    imageUrl:
      'https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', // Comment: Modern apartment building or duplex representing rental property investment
    date: 'Mar 8, 2025',
    datetime: '2025-03-08',
    category: 'Investment',
    author: {
      name: 'Jennifer Walsh',
      role: 'Investment Property Specialist',
      imageUrl:
        'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80', // Comment: Professional headshot of confident woman with blonde hair in business attire
    },
    bodySections: [
      {
        id: '1',
        type: 'text',
        content: {
          title: 'The Power of Passive Income',
          text: [
            {
              id: '1',
              text: 'Rental properties offer one of the most reliable paths to building passive income and long-term wealth. Unlike stocks or bonds, real estate provides monthly cash flow while building equity through appreciation and loan paydown.',
            },
            {
              id: '2',
              text: 'Our investment calculator shows that a well-chosen rental property can generate 8-12% annual returns when you factor in cash flow, appreciation, and tax benefits. Plus, you maintain control over your investment unlike other asset classes.',
            },
          ],
        },
      },
      {
        id: '2',
        type: 'image',
        image: {
          url: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', // Comment: Beautiful multi-unit property or modern apartment complex
          alt: 'Multi-unit rental property investment opportunity',
        },
      },
      {
        id: '3',
        type: 'text',
        content: {
          title: 'Finding the Right Investment Properties',
          text: [
            {
              id: '1',
              text: "Successful rental property investment starts with thorough market analysis. Look for areas with strong job growth, population increases, and limited housing supply. Our platform's investment tools highlight markets with the best rent-to-price ratios.",
            },
            {
              id: '2',
              text: 'Focus on properties that generate positive cash flow from day one. Use the 1% rule as a starting point: monthly rent should equal at least 1% of the purchase price. Our rental estimator uses local market data to predict accurate rental income for any property.',
            },
          ],
        },
      },
    ],
  },
  {
    id: '4',
    title: 'Home Staging Secrets: Sell Your Property 38% Faster',
    slug: 'home-staging-secrets-sell-property-faster',
    description:
      'Professional staging techniques that help properties sell faster and for higher prices. Learn cost-effective strategies to make your home irresistible to potential buyers.',
    imageUrl:
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', // Comment: Beautifully staged living room with modern furniture and decor
    date: 'Mar 5, 2025',
    datetime: '2025-03-05',
    category: 'Home Selling',
    author: {
      name: 'Marcus Rodriguez',
      role: 'Market Research Director',
      imageUrl:
        'https://images.unsplash.com/photo-1639747280804-dd2d6b3d88ac?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
    },
    bodySections: [
      {
        id: '1',
        type: 'image',
        image: {
          url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', // Comment: Stunning before/after staging transformation or perfectly staged room
          alt: 'Professionally staged modern living room',
        },
      },
      {
        id: '2',
        type: 'text',
        content: {
          title: 'First Impressions Matter More Than Ever',
          text: [
            {
              id: '1',
              text: "In today's competitive market, buyers form opinions within the first 30 seconds of entering a home. Professional staging can increase your sale price by 6-10% while reducing time on market by an average of 38 days.",
            },
            {
              id: '2',
              text: 'Our platform connects you with certified staging professionals and provides virtual staging options for online listings. Studies show that staged homes receive 40% more online views and generate more serious inquiries.',
            },
          ],
        },
      },
      {
        id: '3',
        type: 'text',
        content: {
          title: 'DIY Staging Tips That Actually Work',
          text: [
            {
              id: '1',
              text: 'Start with decluttering and deep cleaning – these cost nothing but make the biggest impact. Remove personal items, family photos, and excess furniture to help buyers envision themselves in the space.',
            },
            {
              id: '2',
              text: 'Focus on lighting and neutral colors. Open all curtains, add lamps to dark corners, and consider repainting bold walls in warm, neutral tones. Fresh flowers and subtle scents can create an welcoming atmosphere that buyers remember.',
            },
          ],
        },
      },
      {
        id: '4',
        type: 'image',
        image: {
          url: 'https://images.unsplash.com/photo-1593136573819-c3b57b8caf29?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', // Comment: Clean, minimalist kitchen or bedroom showing effective staging principles
          alt: 'Clean and decluttered staged kitchen',
        },
      },
      {
        id: '5',
        type: 'text',
        content: {
          title: 'ROI of Professional Staging',
          text: [
            {
              id: '1',
              text: 'While staging costs typically range from $2,000-$5,000, the return on investment averages 586%. Staged homes sell for an average of $40,000 more than non-staged properties in comparable markets.',
            },
            {
              id: '2',
              text: 'Our seller dashboard tracks the performance of staged vs. non-staged listings in real-time, giving you data-driven insights into what works best in your specific market. Contact our staging partners for a free consultation and ROI estimate.',
            },
          ],
        },
      },
    ],
  },
];
