import { ThemeProvider } from 'next-themes';
import Router from "next/router";
import Head from "next/head";
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
        <Head>
          <title>Dor Moyal</title>
          <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
          <meta property="og:type" content="website"/>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
          <link rel="icon" href="/favicon.ico"/>
        </Head>
        <Component {...pageProps} />
      </AppProvider>
    </ThemeProvider>
  )
}

export default MyApp
