import dynamic from 'next/dynamic';
import HomeMain from '../components/Home-four';
import {NextSeo} from "next-seo";
import {siteMetadata} from "../services/defaultValues";

const index = () => {
  return (
    <>
      <NextSeo
        title={`Dor Moyal`}
        titleTemplate="Dor Moyal"
        defaultTitle="Dor Moyal"
        description={siteMetadata().description}
        canonical={siteMetadata().url}
        openGraph={{
          url: siteMetadata().url,
          title: siteMetadata().title,
          description: siteMetadata().description,
          images: [
            {
              url: 'https://res.cloudinary.com/moyalon17/image/upload/v1669900318/dorSeo_yrauvn.jpg',
              width: 800,
              height: 420,
              alt: 'Dor Moyal seo',
            },
            {
              url: 'https://res.cloudinary.com/moyalon17/image/upload/w_600,h_600,c_limit//v1541242571/dor_bahapo.jpg',
              width: 600,
              height: 600,
              alt: 'Dor Moyal image',
            },
            {
              url: 'https://dor-portfolio-assets.s3.eu-central-1.amazonaws.com/dor/dor-about1.jpg',
              width: 500,
              height: 500,
              alt: 'Dor Moyal image',
            }
          ],
        }}
      />
      <HomeMain/>
    </>
  );
};

export default dynamic(()=> Promise.resolve(index), {ssr: false});
