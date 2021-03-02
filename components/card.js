import Image from 'next/image'
import PropTypes from 'prop-types'

export default function Card({ name, rarity, imgPath }) {
  return (
    <div className="border-black border-2 rounded p-2 flex mb-2">
      <div className="pr-4 border-black border-r-2">
        <Image
          src={imgPath}
          height={150}
          width={150}
        />
      </div>
      <div className="flex flex-row justify-start flex-auto">
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
  )
}

Card.propTypes = {
  // String for unit or card name
  name: PropTypes.string.isRequired,
  // String for rarity of unit or card
  rarity: PropTypes.string.isRequired,
  // String for image path
  imgPath: PropTypes.string.isRequired
}