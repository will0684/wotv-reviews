import Layout from '../../components/layout'
import Head from 'next/head'
import { getAllCardIds, getCardData } from '../../lib/cards'
import PropTypes from 'prop-types'
import Image from 'next/image'

export async function getStaticPaths() {
  const paths = getAllCardIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const cardData = await getCardData(params.id)
  return {
    props: {
      cardData
    }
  }
}

export default function CardDetails({ cardData }) {
  return (
    <Layout>
      <Head>
        <title>Card Details</title>
        <meta name="title" content="WOTV Card Details"></meta>
        <meta name="description" content="Card details"></meta>
      </Head>
      <header className="flex flex-col items-center pb-8">
        <h1 className="pb-6">{cardData.name}</h1>
      </header>
      <div className="flex flex-col items-center">
        <div className="pb-8">
          <Image
            src={cardData.imgPath}
            height={250}
            width={250}
          />
        </div>
        <div dangerouslySetInnerHTML={{ __html: cardData.content }} />
      </div>
    </Layout>
  )
}

CardDetails.propTypes = {
  cardData: PropTypes.shape({
    // String for id of unit or card
    id: PropTypes.string.isRequired,
    // String for unit or card name
    name: PropTypes.string.isRequired,
    // String for date value of when the unit or card was added
    date: PropTypes.string.isRequired,
    // String for rarity of unit or card
    rarity: PropTypes.string.isRequired,
    // String for image path
    imgPath: PropTypes.string.isRequired,
    // String for card or unit details content
    content: PropTypes.string.isRequired
  })
}