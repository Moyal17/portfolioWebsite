import React from "react";

export const defaultLocale = 'en';
export const localeOptions = [
  { id: 'en', name: 'English', direction: 'ltr' },
  { id: 'he', name: 'Hebrew', direction: 'rtl' }
];
export const defaultDirection = 'ltr';

export const siteMetadata = (pageTitle, font, url) => ({
    url: `https://www.dormoyal.com${url ? `${url}` : '/'}`, // The URL of this page (eg https://google.com/about)
    title: `${pageTitle || ''}${pageTitle ? ' | ' : ''}Dor Moyal`, // Maximum 70 characters.
    // The original publication date. ISO 8601 timestamp eg "2019-10-06T13:56:03.123Z"
    // Don't know how useful for random webpages. Add it at least for blog posts.
    datePublished: '2022-03-22T08:00:03.123Z',
    description: 'Delivering highly impactful platforms while I develop & lead the way. a 7+ years experienced, Strategic and creative full-stack developer Optimizing performance as a web designer & developer.',
    // Maximum 200 characters.
    language: 'en-US', // Default "en-US" https://en.wikipedia.org/wiki/IETF_language_tag and https://datahub.io/core/language-codes
    image: 'https://res.cloudinary.com/moyalon17/image/upload/w_600,h_600,c_limit//v1541242571/dor_bahapo.jpg', // URL to the image, PNG, JPEG, or GIF recommended.
    site: {
      // "If your object is part of a larger web site, the name which should be displayed for the overall site. e.g., "IMDb"."
      siteName: 'Dor Moyal',
      // If your website has a search functionality, enter the URL with parameter here eg "https://www.google.com/search?q="
      searchUrl: `https://www.dormoyal.com${url ? `${url}` : '/'}`
    },
  images: [
    {
      url: 'https://res.cloudinary.com/moyalon17/image/upload/v1669900318/dorSeo_yrauvn.jpg',
      width: 800,
      height: 420,
      alt: 'Dor Moyal seo',
    },
    {
      url: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/dor/dor-about1.jpg',
      width: 500,
      height: 500,
      alt: 'Dor Moyal image',
    },
    {
      url: 'https://res.cloudinary.com/moyalon17/image/upload/w_250,h_250,c_limit//v1541242571/dor_bahapo.jpg',
      width: 250,
      height: 250,
      alt: 'Dor Moyal image',
    },
  ],
});

export const facebookProps = {
  title: siteMetadata.title, // The title of your article without any branding such as your site name.
  description: siteMetadata.description, // A brief description of the content, usually between 2 and 4 sentences.
  language: siteMetadata.language, // Used for og:locale. Default "en-US"
  // Facebook recommends 1200x630 size, ratio of 1.91:1. PNG, JPEG, or GIF.
  // Note the "minimum size constraint of 200px by 200px".
  image: siteMetadata.image,
  facebookAppId: '3005184189511063' // "Insights lets you view analytics for traffic to your site from Facebook."
}
export const blogPostProps = {
    // The canonical URL for your page. This should be the undecorated URL, without session
    // variables, user identifying parameters, or counters.
    url: `${siteMetadata.url}/blog`,
    title: 'ASPIRE Blog.', // Title of the post. Max 70 characters.
    description: 'Aspire Blog, a collection of articles made by professional trainers that are a part of the ASPIRE Community', // Should be a short description about the topic, <=200 words. Mainly for SEO purposes.
    image: siteMetadata.image, // You should add this. Just use the same image as og/twitter eg 1200x630 with 1.91:1 ratio in PNG, JPEG, or GIF.
    datePublished: siteMetadata.datePublished, // The original publication date. Don't change arbitrarily, Google might downrank you.
    dateModified: siteMetadata.datePublished, // Google prefers recent content in search results and also users are more likely to click a recent article
    tags:  '', // string[],
    /**
     * Technically either Person or Organization, but since it doesn't make any sense to not to credit this content to a human, use person.
     * From schema.org:
     * "Please note that author is special in that HTML 5 provides a special mechanism for indicating authorship
     * via the rel tag. That is equivalent to this and may be used interchangeably."
     * Which means.. something.
     */
    author: 'PersonProps',
    /**
     * You should add this since otherwise Google's structured-data tool will complain...
     * However https://webmasters.stackexchange.com/questions/110332/personal-blog-using-structured-data-fails-validation-on-publisher
     */
    publisher: {
      description: siteMetadata.description,
      name: siteMetadata.title,// Eg "Google"
      logo: siteMetadata.image,// URL to the logo image.
      // List of other webpages referencing this organization, eg Wikipedia, Facebook, Twitter, Instagram etc.
      // Will show these sites alongside your website in Google search results and probably boost your SEO rank too.
      sameAs: ['https://www.facebook.com/aspire.community', 'https://www.instagram.com/aspire.community'],
      url: siteMetadata.url // URL to the organization, eg "https://abc.xyz"
    },
    site: siteMetadata.site
}
