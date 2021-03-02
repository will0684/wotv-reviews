import Card from "./card"
import PropTypes from 'prop-types'

// eslint-disable-next-line react/prop-types
export default function CardList({data}) {
  // eslint-disable-next-line react/prop-types
  const listItems = data.map((item) => 
    <Card 
      key={item.name}
      name={item.name}
      rarity={item.rarity}
      imgPath={item.imgPath}
    />
  )
  return (
    <ul>{listItems}</ul>
  )
}

CardList.propTypes = {
  // Data used to populate the cards in the list
  data: PropTypes.array.isRequired
}