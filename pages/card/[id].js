import Layout from '../../components/layout'
import Head from 'next/head'
import { getAllCardIds, getCardData } from '../../lib/cards'
import PropTypes from 'prop-types'
import Image from 'next/image'
import Link from 'next/link'

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
      <header className="ml-4 md:ml-20 lg:ml-48 2xl:ml-96">
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      </header>
      <div className="flex flex-col items-center">
        <article className="prose md:prose-lg">
          <div className="flex flex-col items-center pb-8">
            <h2>{cardData.name}</h2>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-44 mb-16">
              <div className="relative w-36 h-full">
                <Image
                  src={cardData.imgPath}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="mx-4 md:mx-0" dangerouslySetInnerHTML={{ __html: cardData.content }} />
          </div>
        </article>
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