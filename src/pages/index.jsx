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
          images: siteMetadata().images
        }}
      />
      <HomeMain/>
    </>
  );
};

export default dynamic(()=> Promise.resolve(index), {ssr: false});
