import PropTypes from 'prop-types'

// Component for separate list sections
export default function ListSection({children, heading}) {
  return (
    <section className="mx-4 md:mx-auto md:w-4/5 xl:w-3/4 pb-16">
      <h2 className="my-4 mx-0">{heading}</h2>
      {children}
    </section>
  )
}

ListSection.propTypes = {
  // Listsection chlid elements
  children: PropTypes.element,
  // String for list heading
  heading: PropTypes.string
}