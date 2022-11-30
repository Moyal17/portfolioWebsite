import React from 'react';
import BrandArea from '../common/BrandArea';
import Breadcrumb from '../common/Breadcrumb';
import FooterTwo from '../common/Footers/FooterTwo';
import Header from '../common/Header';
import ServiceContact from './ServiceContact';
import ServiceDetailsArea from './ServiceDetailsArea';

const index = () => {
  return (
    <>
      <Header/>
      <Breadcrumb title="MY SERVICES" subtitle="My Services" />
      <ServiceDetailsArea/>
      <FooterTwo/>
    </>
  );
};

export default index;
