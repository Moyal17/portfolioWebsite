import React from 'react';
import BrandArea from '../common/BrandArea';
import Footer from '../common/Footers/Footer';
import FooterThree from '../common/Footers/FooterThree';
import Header from '../common/Header';
import AboutFour from './AboutFour';
import BlogFour from './BlogFour';
import CtaFour from './CtaFour';
import CtaTwo from './CtaTwo';
import HeroSliderFour from './HeroSliderFour';
import PortfolioFour from './PortfolioFour';
import PortfolioTwo from './PortfolioTwo';
import ServicesFour from './ServicesFour';
import TestimonialFour from './TestimonialFour';
import VideoAreaFour from './VideoAreaFour';

const HomeFourMain = () => {
  return (
    <>
      <Header/>
      <HeroSliderFour/>
      <AboutFour/>
      <ServicesFour/>
      <VideoAreaFour/>
      <PortfolioTwo/>
      <CtaFour/>
      <BrandArea hideTopBar={true} />
      <CtaTwo/>
      {/*<BlogFour/>*/}
      <FooterThree/>
    </>
  );
};

export default HomeFourMain;
