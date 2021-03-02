import PropTypes from 'prop-types'

// Component for separate list sections
export default function ListSection({children, heading}) {
  return (
    <section className="sm:mx-4 md:mx-16 pb-16">
      <h2 className="my-4 mx-0">{heading}</h2>
      {children}
    </section>
  )
}

ListSection.propTypes = {
  // Listsection chlid elements
  children: PropTypes.string.isRequired,
  // String for list heading
  heading: PropTypes.string.isRequired
}