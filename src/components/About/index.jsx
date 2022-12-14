import React from 'react';
import BrandArea from '../common/BrandArea';
import Breadcrumb from '../common/Breadcrumb';
import FooterTwo from '../common/Footers/FooterTwo';
import Header from '../common/Header';
import TestimonialFour from '../Home-four/TestimonialFour';
import AboutArea from './AboutArea';
import AboutCounter from './AboutCounter';
import CtaImages from './CtaImages';
import SEO from "../seo";

const index = () => {
  return (
    <>
      <SEO pageTitle="About Me" />
      <Header/>
      <Breadcrumb title="About Me" subtitle="Dor Moyal" />
      <AboutArea/>
      <AboutCounter/>
      <CtaImages/>
{/*
      <BrandArea brand="-2" about="about-brand" />
*/}
      <FooterTwo/>
    </>
  );
};

export default index;
