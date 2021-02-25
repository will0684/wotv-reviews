import Head from 'next/head'
import Card from '../components/card'
import CardList from '../components/cardList'
import Layout from '../components/layout'
import ListSection from '../components/listSection'
import { getSortedWOTVData } from '../lib/mdParser'

export async function getStaticProps() {
  const allUnitsData = getSortedWOTVData('units')
  const allCardsData = getSortedWOTVData('cards')
  return {
    props: {
      allUnitsData,
      allCardsData
    }
  }
}

// eslint-disable-next-line react/prop-types
export default function Home({ allUnitsData, allCardsData }) {
  return (
    <Layout>
      <Head>
        <title>WOTV Units and Vision Cards</title>
      </Head>
      <header className="flex flex-col items-center pb-8">
        <h1 className="pb-6">WOTV Unit and Vision Cards Reviews</h1>
        <span>Select a unit or vision card to see the review</span>
      </header>
      <ListSection heading="Units">
        <CardList
          data={allUnitsData}
        />
      </ListSection>
      <ListSection heading="Vision Cards">
        <CardList 
          data={allCardsData}
        />
      </ListSection>
    </Layout>
  )
}
