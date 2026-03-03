/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Service, JournalArticle } from './types';

export const SERVICES: Service[] = [
  // Web Design
  {
    id: 's1',
    name: 'The One-Pager',
    tagline: 'Compact and focused.',
    description: 'Does what it needs to, looks good doing it.',
    longDescription: 'Compact and focused. Does what it needs to, looks good doing it. Perfect for a clear, concise message.',
    price: 500,
    category: 'Design',
    imageUrl: '/images/one-page.png',
    features: ['Single Page Design', 'Mobile Responsive', 'Contact Form', 'Fast Loading']
  },
  {
    id: 's2',
    name: 'Full Site',
    tagline: 'Built for the business that\'s going places.',
    description: 'SEO-ready, well-structured, made to last.',
    longDescription: 'Built for the business that\'s going places. SEO-ready, well-structured, made to last. A comprehensive digital home.',
    price: 1500,
    category: 'Design',
    imageUrl: '/images/full-site(2).png',
    features: ['Custom Pages', 'SEO Ready', 'Content Management', 'Analytics Integration']
  },
  {
    id: 's3',
    name: 'E-Comm Site',
    tagline: 'A reliable digital shopfront.',
    description: 'Clean, secure, and easier to run than you\'d expect.',
    longDescription: 'Clean, secure, and easier to run than you\'d expect. Built for conversion and ease of use.',
    price: 2000,
    category: 'Design',
    imageUrl: '/images/ecomm.png',
    features: ['Product Management', 'Secure Checkout', 'Inventory Tracking', 'Payment Gateway']
  },
  // SEO
  {
    id: 's4',
    name: 'Starter Local SEO Package',
    tagline: 'Get found by your neighbors.',
    description: 'Essential SEO fundamentals to ensure your local community can find you online.',
    longDescription: 'Essential SEO fundamentals to ensure your local community can find you online. Focuses on local search visibility and foundational optimization.',
    price: 299,
    category: 'SEO',
    imageUrl: '/images/seo-starter.png',
    features: ['Keyword Research', 'Local Citations', 'On-Page Optimization', 'Monthly Reporting']
  },
  {
    id: 's5',
    name: 'Full SEO Package',
    tagline: 'Dominate the search results.',
    description: 'Comprehensive SEO strategy for businesses looking to grow their reach and authority.',
    longDescription: 'Comprehensive SEO strategy for businesses looking to grow their reach and authority. Includes advanced optimization and ongoing content strategy.',
    price: 799,
    category: 'SEO',
    imageUrl: '/images/seo-package(2).png',
    features: ['Advanced Keyword Strategy', 'Backlink Building', 'Content Optimization', 'Detailed Analytics']
  },
  // GBP
  {
    id: 's6',
    name: 'One time set up',
    tagline: 'Get on the map.',
    description: 'Professional setup and optimization of your Google Business Profile.',
    longDescription: 'Professional setup and optimization of your Google Business Profile to ensure you appear correctly in local searches and maps.',
    price: 199,
    category: 'Google Business',
    imageUrl: '/images/gbp-one-time.png',
    features: ['Profile Setup', 'Keyword Optimization', 'Photo Uploads', 'Business Info Verification']
  },
  {
    id: 's7',
    name: 'Monthly GBP Management',
    tagline: 'Stay relevant on the map.',
    description: 'Ongoing management of your Google Business Profile to keep it active and engaging.',
    longDescription: 'Ongoing management of your Google Business Profile to keep it active and engaging. Includes regular posts, review management, and profile updates.',
    price: 149,
    category: 'Google Business',
    imageUrl: '/images/gbp-monthly(2).png',
    features: ['Weekly Posts', 'Review Responses', 'Q&A Management', 'Monthly Performance Reports']
  },
  // Website Care
  {
    id: 's8',
    name: 'Hosting',
    tagline: 'Reliable home for your site.',
    description: 'Fast, secure, and reliable hosting tailored for small business needs.',
    longDescription: 'Fast, secure, and reliable hosting tailored for small business needs. We handle the technical side so you don\'t have to.',
    price: 30,
    category: 'Site Hosting',
    imageUrl: '/images/hosting.png',
    features: ['SSL Certificate', 'Daily Backups', '99.9% Uptime', 'Technical Support']
  },
  {
    id: 's9',
    name: 'Maintenance',
    tagline: 'Keep your site running smooth.',
    description: 'Regular updates and security checks to keep your website in top shape.',
    longDescription: 'Regular updates and security checks to keep your website in top shape. Includes software updates, security monitoring, and minor content tweaks.',
    price: 75,
    category: 'Site Monitoring',
    imageUrl: '/images/hosting-maint.png',
    features: ['Software Updates', 'Security Monitoring', 'Performance Optimization', 'Content Updates']
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
    {
        id: 1,
        title: "The Case for \"Quiet\" Design",
        date: "May 15, 2025",
        excerpt: "Why the loudest websites are usually the most annoying.",
        image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=1000",
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6 text-[#5D5A53]" },
                "We believe in design that respects the user's time and attention. In a world of digital noise, clarity is a competitive advantage."
            )
        )
    },
    {
        id: 2,
        title: "Sustainable Code",
        date: "April 20, 2025",
        excerpt: "Building digital tools that don't end up in the \"e-waste\" pile next year.",
        image: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&q=80&w=1000",
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6 text-[#5D5A53]" },
                "Code should be built to last. We focus on clean, maintainable architectures that grow with your business, rather than disposable solutions."
            )
        )
    }
];

export const BRAND_NAME = 'RezTek Digital';
export const PRIMARY_COLOR = 'zinc-900'; 
export const ACCENT_COLOR = 'red-600';