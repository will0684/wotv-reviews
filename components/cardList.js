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
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      rarity: PropTypes.string.isRequired,
      imgPath: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired
    })
  )
}