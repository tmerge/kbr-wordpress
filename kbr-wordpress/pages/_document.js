import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap" rel="stylesheet"/>
        </Head>
        <body className='overflow-y-scroll bg-white dark:bg-gray-700'>
          <Main/>
          <NextScript />
        </body>
      </Html>
    )
  }
}