import PropTypes from 'prop-types'
import { Parallax } from 'react-parallax';

// Application layout component
export default function Layout({children}) {
  return (
    <Parallax blur="5" bgImage="https://wotvffbe.com/images/mv.jpg" bgImageAlt="background" strength={600}>
      <div className="mt-12 mb-24 sm:px-4">
        <main>{children}</main>
      </div>
    </Parallax>
  )
}

Layout.propTypes = {
  // Layout children elements
  children: PropTypes.arrayOf(PropTypes.element)
}