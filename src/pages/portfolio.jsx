import React from 'react';
import PortfolioMain from '../components/Portfolio';
import SEO from '../components/seo';

const portfolio = () => {
  return (
    <>
      <SEO pageTitle="Portfolio" url="/portfolio" />
      <PortfolioMain />
    </>
  );
};

export default portfolio;
