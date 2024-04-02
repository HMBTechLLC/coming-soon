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
        <Header title="HMB Tech Coming Soon" />
        <p className="description">
          September 2024
        </p>
      </main>

      <Footer />
    </div>
  )
}
