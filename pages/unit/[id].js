import Layout from '../../components/layout'
import Head from 'next/head'
import { getAllUnitIds, getUnitData } from '../../lib/units'
import PropTypes from 'prop-types'
import Image from 'next/image'

export async function getStaticPaths() {
  const paths = getAllUnitIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const unitData = await getUnitData(params.id)
  return {
    props: {
      unitData
    }
  }
}

export default function UnitDetails({ unitData }) {
  return (
    <Layout>
      <Head>
        <title>Unit Details</title>
        <meta name="title" content="WOTV Unit Details"></meta>
        <meta name="description" content="Unit details"></meta>
      </Head>
      <header className="flex flex-col items-center pb-8">
        <h1 className="pb-6">{unitData.name}</h1>
      </header>
      <div className="flex flex-col items-center">
        <div className="h-44 mb-16">
          <div className="relative w-36 h-full">
            <Image
              src={unitData.imgPath}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: unitData.content }} />
      </div>
    </Layout>
  )
}

UnitDetails.propTypes = {
  unitData: PropTypes.shape({
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