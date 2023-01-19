import Head from 'next/head';
import Nav from '../components/Nav';
import PageWrapper from '../components/PageWrapper';
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-[#fefefe] text-black">
      <Head>
        <title>My App</title>
      </Head>
      <Nav />
      <PageWrapper>
        <Component {...pageProps} />
      </PageWrapper>
    </div>
  );
}
