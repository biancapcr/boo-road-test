import React, { useState } from "react";
import DefaultLayout from "../layouts/DefaultLayout";

const destinations = [
  // europa
  {
    id: 1,
    continent: "Europa",
    city: "Londra",
    start: "24/05/2025",
    end: "13/06/2025",
    image: "/imgs/Londra.jpeg",
  },
  {
    id: 2,
    continent: "Europa",
    city: "Roma",
    start: "03/06/2025",
    end: "22/06/2025",
    image: "/imgs/roma.jpg",
  },
  {
    id: 3,
    continent: "Europa",
    city: "Parigi",
    start: "10/07/2025",
    end: "20/07/2025",
    image: "/imgs/parigi.jpg",
  },
  {
    id: 4,
    continent: "Europa",
    city: "Amsterdam",
    start: "24/07/2025",
    end: "05/08/2025",
    image: "/imgs/Amsterdam.jpeg",
  },
  {
    id: 5,
    continent: "Europa",
    city: "Berlino",
    start: "15/08/2025",
    end: "28/08/2025",
    image: "/imgs/berlino.jpg",
  },

  // america
  {
    id: 6,
    continent: "America",
    city: "New York",
    start: "22/05/2025",
    end: "10/06/2025",
    image: "/imgs/New-York.jpeg",
  },
  {
    id: 7,
    continent: "America",
    city: "Los Angeles",
    start: "20/06/2025",
    end: "30/06/2025",
    image: "/imgs/Los-Angeles.jpeg",
  },
  {
    id: 8,
    continent: "America",
    city: "San Francisco",
    start: "05/07/2025",
    end: "18/07/2025",
    image: "/imgs/san-francisco.jpg",
  },
  {
    id: 9,
    continent: "America",
    city: "Miami",
    start: "25/07/2025",
    end: "05/08/2025",
    image: "/imgs/miami.jpg",
  },

  // africa
  {
    id: 10,
    continent: "Africa",
    city: "Il Cairo",
    start: "12/05/2025",
    end: "30/05/2025",
    image: "/imgs/Il-Cairo.jpeg",
  },
  {
    id: 11,
    continent: "Africa",
    city: "Marrakech",
    start: "10/06/2025",
    end: "20/06/2025",
    image: "/imgs/marrakech.jpg",
  },
  {
    id: 12,
    continent: "Africa",
    city: "Città del Capo",
    start: "01/07/2025",
    end: "15/07/2025",
    image: "/imgs/capetown.jpg",
  },

  // asia
  {
    id: 13,
    continent: "Asia",
    city: "Tokyo",
    start: "05/07/2025",
    end: "20/07/2025",
    image: "/imgs/tokyo.jpg",
  },
  {
    id: 14,
    continent: "Asia",
    city: "Bangkok",
    start: "10/08/2025",
    end: "25/08/2025",
    image: "/imgs/bangkok.jpg",
  },
  {
    id: 15,
    continent: "Asia",
    city: "Pechino",
    start: "01/09/2025",
    end: "12/09/2025",
    image: "/imgs/pechino.jpg",
  },
  {
    id: 16,
    continent: "Asia",
    city: "Dubai",
    start: "20/09/2025",
    end: "30/09/2025",
    image: "/imgs/dubai.jpg",
  },

  // sud america
  {
    id: 17,
    continent: "Sud America",
    city: "Rio de Janeiro",
    start: "10/10/2025",
    end: "25/10/2025",
    image: "/imgs/rio.jpg",
  },
  {
    id: 18,
    continent: "Sud America",
    city: "Buenos Aires",
    start: "28/10/2025",
    end: "12/11/2025",
    image: "/imgs/buenos-aires.jpg",
  },
];

// estraggo i continenti automaticamente
const continents = [...new Set(destinations.map((d) => d.continent))];

const DetailTripsPage = () => {
  const [showTrips, setShowTrips] = useState(false);

  return (
    <DefaultLayout>
      <div className="trips-page">
        {/* hero */}
        <section className="trips-hero">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1>Un Viaggio Straordinario Intorno al Mondo</h1>
            <p>
              Parti per un’avventura unica e scopri le città più affascinanti
              d’Europa, America, Africa e Asia. Con BooRoad ogni viaggio diventa
              un’esperienza indimenticabile, ricca di emozioni e scoperte.
            </p>
            <button
              className="btn btn-outline-light mt-4 toggle-trips-btn"
              onClick={() => setShowTrips(!showTrips)}
            >
              {showTrips ? "Nascondi viaggi" : "Mostra viaggi disponibili"}
            </button>
          </div>
        </section>

        {/* continenti + destinazioni */}
        {showTrips && (
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="trips-title text-center">Viaggi disponibili</h2>
              </div>

              {continents.map((continent) => (
                <div className="col-12" key={continent}>
                  <h2 className="continent-title">{continent}</h2>
                  <div className="trips-row-horizontal">
                    {destinations
                      .filter((d) => d.continent === continent)
                      .map((destination) => (
                        <div className="trip-card" key={destination.id}>
                          <img src={destination.image} alt={destination.city} />
                          <div className="trip-overlay">
                            <span className="destination">
                              {destination.city}
                            </span>
                            <span className="duration">
                              {destination.start} - {destination.end}
                            </span>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </DefaultLayout>
  );
};

export default DetailTripsPage;
