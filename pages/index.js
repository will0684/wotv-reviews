import Head from 'next/head'
import CardList from '../components/cardList'
import Layout from '../components/layout'
import ListSection from '../components/listSection'
import { getSortedWOTVData } from '../lib/mdParser'
import PropTypes from 'prop-types'

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

// Homepage component
export default function Home({ allUnitsData, allCardsData }) {
  return (
    <Layout>
      <Head>
        <title>WOTV Units and Vision Cards</title>
        <meta name="title" content="WOTV Unit and Vision Card Reviews"></meta>
        <meta name="description" content="Reviews for Units and Vision Cards written by Ragnarok X and Y Members"></meta>
      </Head>
      <header className="flex flex-col items-center mx-6 pb-8">
        <h1 className="mb-6 p-3 rounded-xl bg-white">WOTV Unit and Vision Cards Reviews</h1>
        <span className="p-3 rounded-xl bg-white">Select a unit or vision card to see the review</span>
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

Home.propTypes = {
  // Unit data
  allUnitsData: PropTypes.array.isRequired,
  // Vision cards data
  allCardsData: PropTypes.array.isRequired
}