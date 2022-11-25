import Head from "next/head";

const SEO = ({ pageTitle,font }) => (
  <>
    <Head>
      <title>
        {pageTitle} || Dor Moyal
      </title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content="Delivering highly impactful platforms while I develop & lead the way. a 7+ years experienced, Strategic and creative full-stack developer Optimizing performance as a web designer & developer." />
      <meta name="robots" content="noindex, follow" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link href={font} rel="stylesheet" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  </>
);

export default SEO;
