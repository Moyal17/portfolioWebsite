import { ThemeProvider } from 'next-themes';
import Router from "next/router";
import { NextSeo } from 'next-seo';
import NProgress from 'nprogress';
import AppProvider from '../context/AppContext';
import '../index.scss';
import {siteMetadata} from "../services/defaultValues";
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

NProgress.configure({ easing: 'ease', speed: 400 });
Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme='light'>
      <AppProvider>
        <NextSeo
          title={`${pageTitle} | Dor Moyal`}
          titleTemplate="Dor Moyal"
          defaultTitle="Dor Moyal"
          description={siteMetadata(pageTitle, null, url).description}
          canonical={siteMetadata(pageTitle, null, url).url}
          openGraph={{
            url: siteMetadata(pageTitle, null, url).url,
            title: siteMetadata(pageTitle, null, url).title,
            description: siteMetadata(pageTitle, null, url).description,
            images: [
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
              },
              {
                url: 'https://res.cloudinary.com/moyalon17/image/upload/v1669900318/dorSeo_yrauvn.jpg',
                width: 800,
                height: 420,
                alt: 'Dor Moyal seo',
              }
            ],
          }}
        />
        <Component {...pageProps} />
      </AppProvider>
    </ThemeProvider>
  )
}

export default MyApp
