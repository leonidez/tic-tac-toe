import Head from 'next/head'

import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='preload' href='/fonts/NYTCheltenhamExtraBold.otf' as='font' crossOrigin='' />
        <link rel='preload' href='/fonts/NYTFranklinBold.otf' as='font' crossOrigin='' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
