import Head from "next/head";
import { NextSeo } from 'next-seo';
import { siteMetadata, facebookProps } from '../services/defaultValues'

const SEO = ({pageTitle, font, url}) => (
  <>
    <Head>
      <title>{pageTitle} | Dor Moyal</title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
      <meta property="og:type" content="website"/>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link href={font} rel="stylesheet"/>
      <link rel="icon" href="/favicon.ico"/>
    </Head>
    <NextSeo
      title={`${pageTitle} | Dor Moyal`}
      description={siteMetadata(pageTitle, font, url).description}
      canonical={siteMetadata(pageTitle, font, url).url}
      openGraph={{
        url: siteMetadata(pageTitle, font, url).url,
        title: siteMetadata(pageTitle, font, url).title,
        description: siteMetadata(pageTitle, font, url).description,
        images: siteMetadata(pageTitle, font, url).images,
      }}
    />
  </>
);

export default SEO;
