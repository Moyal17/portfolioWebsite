import React from 'react';
import SEO from '../../components/seo';
import BlogDetailsMain from '../../components/Blog-details';

const index = () => {
  return (
    <>
      <SEO pageTitle="Blog Details" url="/about"/>
      <BlogDetailsMain/>
    </>
  );
};

export default index;
