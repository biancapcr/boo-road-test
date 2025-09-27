import React from 'react'
const destinations = [
  {
    id: 1,
    continent: "Europa",
    city: "Londra",
    start: "24/05/2025",
    end: "13/06/2025",
    image: "../../imgs/Londra.jpeg"
  },
  {
    id: 2,
    continent: "America",
    city: "New York",
    start: "22/05/2025",
    end: "10/06/2025",
    image: "../../imgs/New-York.jpeg"
  },
  {
    id: 3,
    continent: "Africa",
    city: "Il Cairo",
    start: "12/05/2025",
    end: "30/05/2025",
    image: "../../imgs/Il-Cairo.jpeg"
  },
  {
    id: 4,
    continent: "Europa",
    city: "Amsterdam",
    start: "24/05/2025",
    end: "13/06/2025",
    image: "../../imgs/Amsterdam.jpeg"
  },
  {
    id: 5,
    continent: "Europa",
    city: "Roma",
    start: "03/06/2025",
    end: "22/06/2025",
    image: "../../imgs/Roma.jpeg"
  },
  {
    id: 6,
    continent: "America",
    city: "Los Angeles",
    start: "20/06/2025",
    end: "30/06/2025",
    image: "../../imgs/Los-Angeles.jpeg"
  },
]



const DetailTripsPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2 className='text-warning text-center'>Viaggi in tutto il mondo </h2>

        </div>
        <div className="col-12">
          <h2>Europa</h2>
          <div className="d-flex my-5">
            {destinations.map((destination) => {
              if (destination.continent == "Europa")
                return (
                  <div className='circle' key={destination.id}>
                    <img src={destination.image} alt={destination.city} />
                    <div className='infoPreview'>
                      <span className='destination'>{destination.city}</span>
                      <span className='duration'>{destination.start} - {destination.end}</span>
                    </div>
                  </div>
                )
            })};
          </div>
        </div>
        <div className="col-12">
          <h2>America</h2>
          <div className="d-flex my-5">
            {destinations.map((destination) => {
              if (destination.continent == "America")
                return (
                  <div className='circle' key={destination.id}>
                    <img src={destination.image} alt={destination.city} />
                    <div className='infoPreview'>
                      <span className='destination'>{destination.city}</span>
                      <span className='duration'> {destination.start} - {destination.end}</span>
                    </div>
                  </div>
                )
            })};
          </div>
        </div>
        <div className="col-12">
          <h2>Africa</h2>
          <div className="d-flex my-5">
            {destinations.map((destination) => {
              if (destination.continent == "Africa")
                return (
                  <div className='circle' key={destination.id}>
                    <img src={destination.image} alt={destination.city} />
                    <div className='infoPreview'>
                      <span className='destination'>{destination.city}</span>
                      <span className='duration'>{destination.start} - {destination.end}</span>
                    </div>
                  </div>
                )
            })};
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailTripsPage
