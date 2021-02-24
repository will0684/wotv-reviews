import Head from 'next/head'
import Layout from '../components/layout'
import ListSection from '../components/listSection'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>WOTV Units and Vision Cards</title>
      </Head>
      <header className="flex flex-col items-center pb-16">
        <h1>WOTV Units and Vision Cards</h1>
      </header>
      <ListSection heading="Units"></ListSection>
      <ListSection heading="Vision Cards"></ListSection>
    </Layout>
  )
}
