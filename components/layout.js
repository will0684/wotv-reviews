import Head from 'next/head'
import PropTypes from 'prop-types'

// Application layout component
export default function Layout({children}) {
  return (
    <div className="mt-12 mb-24 lg:mx-40 xl:mx-54 2xl:mx-80 px-4">
      <Head>
        <meta
          name="description"
          content="view information on wotv units and vision cards"
        />
      </Head>
      <main>{children}</main>
    </div>
  )
}

Layout.propTypes = {
  // Layout children elements
  children: PropTypes.arrayOf(PropTypes.element)
}