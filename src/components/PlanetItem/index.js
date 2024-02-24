import './index.css'

const PlanetItem = props => {
  const {plantItems} = props

  const {name, imageUrl, description} = plantItems
  return (
    <div>
      <div className="img-con">
        <img src={imageUrl} alt={`planet ${name}`} className="slide-img" />
      </div>

      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  )
}

export default PlanetItem
