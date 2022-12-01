import { ThemeProvider } from 'next-themes';
import Router from "next/router";
import { NextSeo } from 'next-seo';
import NProgress from 'nprogress';
import AppProvider from '../context/AppContext';
import '../index.scss';
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
          title="Avneesh Agarwal"
          titleTemplate="Avneesh Agarwal"
          defaultTitle="Avneesh Agarwal"
          description="A full stack web developer, who loves to design and develop beautiful websites. I have been coding for over a year now. One of my hobbies is writing, I love to document my journey by writing blog posts and also teach others through them."
          canonical="https://www.avneesh.tech/"
          openGraph={{
            url: "https://www.avneesh.tech/",
            title: "Avneesh Agarwal",
            description: "A full stack web developer, who loves to design and develop beautiful websites. I have been coding for over a year now. One of my hobbies is writing, I love to document my journey by writing blog posts and also teach others through them.",
            images: [
              {
                url: "/og-image.png",
                width: 800,
                height: 420,
                alt: "Avneesh Agarwal",
              },
            ],
          }}
          twitter={{
            handle: "@avneesh0612",
            site: "@avneesh0612",
            cardType: "summary_large_image",
          }}
        />
        <Component {...pageProps} />
      </AppProvider>
    </ThemeProvider>
  )
}

export default MyApp
