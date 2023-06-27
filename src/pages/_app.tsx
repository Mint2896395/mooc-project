import { type AppType } from "next/dist/shared/lib/utils";
import "~/styles/globals.css";
import { Noto_Sans_Thai } from 'next/font/google';
import Script from "next/script";
import Layout from '../../components/layout'
 
const roboto = Noto_Sans_Thai({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  style: ['normal']
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={roboto.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js" defer />
    </main>
  );
};

export default MyApp;
