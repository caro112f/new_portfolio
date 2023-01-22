import Head from 'next/head';
import Nav from '../components/site-layout/Nav';
import PageWrapper from '../components/site-layout/PageWrapper';
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-[#fefefe] text-black">
      <Nav />
      <PageWrapper>
        <Component {...pageProps} />
      </PageWrapper>
    </div>
  );
}
