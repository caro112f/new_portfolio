import Head from 'next/head';
import Footer from '../components/site-layout/Footer';
import Nav from '../components/site-layout/Nav';
import PageWrapper from '../components/site-layout/PageWrapper';
import "../styles/globals.css";


export default function App({ Component, pageProps }) {
  return (
    <div className=" text-black">
      <Nav />
      <PageWrapper>
        <Component {...pageProps} />
      </PageWrapper>
      <Footer/>
    </div>
  );
}
//bg-[#fefefe]