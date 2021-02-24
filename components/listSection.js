/* eslint-disable react/prop-types */

export default function ListSection({children, heading}) {
  return (
    <section className="sm:mx-4 md:mx-16 pb-16">
      <h2 className="my-4 mx-0">{heading}</h2>
      {children}
    </section>
  )
}