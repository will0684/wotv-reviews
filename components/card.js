import Image from 'next/image'
import PropTypes from 'prop-types'
import Link from 'next/link'

// Card component for displaying unit and vision card names, rarity and an accompanying image
export default function Card({ type, id, name, rarity, imgPath }) {
  return (
    <Link href={`/${encodeURIComponent(type)}/${encodeURIComponent(id)}`}>
      <div className="border-black border-2 rounded p-2 m-1 flex flex-col items-center mb-2 h-64 w-full sm:w-64">
        <div className="relative w-full h-3/4 md:w-36 p-2">
          <Image
            src={imgPath}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="flex flex-row justify-between md:justify-center flex-auto">
          <div className="flex flex-col px-6 md:px-12">
            <p className="mt-4 mb-6">Name</p>
            <p className="text-lg font-bold">{name}</p>
          </div>
          <div className="flex flex-col px-6 md:px-12">
            <p className="mt-4 mb-6">Rarity</p>
            <p className="text-lg font-bold">{rarity}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

Card.propTypes = {
  // String for unit or card ID used for routing
  id: PropTypes.string.isRequired,
  // String for unit or card name
  name: PropTypes.string.isRequired,
  // String for rarity of unit or card
  rarity: PropTypes.string.isRequired,
  // String for image path
  imgPath: PropTypes.string.isRequired,
  // String for the type of data
  type: PropTypes.string.isRequired
}