import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import FooterTwo from '../common/Footers/FooterTwo';
import Header from '../common/Header';
import PortfolioArea from './PortfolioArea';

const index = () => {
  return (
    <>
      <Header/>
      <Breadcrumb title="My Portfolio" subtitle="My Portfolio" />
      <PortfolioArea/>
      <FooterTwo/>
    </>
  );
};

export default index;
