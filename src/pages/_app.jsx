import { ThemeProvider } from 'next-themes';
import Router from "next/router";
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
        <Component {...pageProps} />
      </AppProvider>
    </ThemeProvider>
  )
}

export default MyApp
