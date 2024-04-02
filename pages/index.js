import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>HMB Tech</title>
        <link rel="icon" href="/hmb.ico" />
      </Head>

      <main>
        <Header title="HMB Tech" />
        <p className="description">
          Coming Soon
        </p>
      </main>

      <Footer />
    </div>
  )
}
