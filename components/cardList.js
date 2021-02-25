import Card from "./card"

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