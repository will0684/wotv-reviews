import Head from 'next/head'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>WOTV Units and Vision Cards</title>
      </Head>
      <header className="flex flex-col items-center">
        <h1>WOTV Units and Vision Cards</h1>
      </header>
    </Layout>
  )
}
