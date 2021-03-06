import PropTypes from 'prop-types'

// Component for separate list sections
export default function ListSection({children, heading}) {
  return (
    <section className="mx-4 sm:mx-auto sm:w-5/6 xl:w-3/4 mb-16">
      <h2 className="my-4 p-2 bg-white rounded w-min whitespace-nowrap font-bold">{heading}</h2>
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