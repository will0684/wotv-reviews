import Card from "./card"
import PropTypes from 'prop-types'

// Component for the list of cards
export default function CardList({data}) {
  // eslint-disable-next-line react/prop-types
  const listItems = data.map((item) => 
    <Card 
      key={item.id}
      id={item.id}
      name={item.name}
      rarity={item.rarity}
      imgPath={item.imgPath}
      type={item.type}
    />
  )
  return (
    <ul>{listItems}</ul>
  )
}

CardList.propTypes = {
  // Data used to populate the cards in the list
  data: PropTypes.arrayOf(
    PropTypes.shape({
      // String ID used to build links to detail pages
      id: PropTypes.string.isRequired,
      // String used to populate name of the unit or card
      name: PropTypes.string.isRequired,
      // String used to populate the rarity of the unit or card
      rarity: PropTypes.string.isRequired,
      // String used to create img path
      imgPath: PropTypes.string.isRequired,
      // String used to build links to detail pages
      type: PropTypes.string.isRequired
    })
  )
}