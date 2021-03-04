import PropTypes from 'prop-types'

// Application layout component
export default function Layout({children}) {
  return (
    <div className="mt-12 mb-24 sm:px-4">
      <main>{children}</main>
    </div>
  )
}

Layout.propTypes = {
  // Layout children elements
  children: PropTypes.arrayOf(PropTypes.element)
}