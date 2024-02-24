// import Slider from 'react-slick'

// export default PlanetsSlider

import Slider from 'react-slick'

// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="slider-container" data-testid="planets">
      <h1 className="head">PLANETS</h1>
      <Slider {...settings} className="slide">
        {planetsList.map(plantItem => (
          <PlanetItem plantItems={plantItem} key={plantItem.id} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
