import "./VenueDetail.scss"

function VenueDetail ({venue}){
    return(
        <section className="venue-detail">
            <div className="venue-detail__hero-container">
                <img src={venue.venue_image} alt={venue.venue_name} className="venue-detail__hero"/>
            </div>
            <div className="venue-detail__title-container">
                <h1 className="venue-detail__title">{venue.venue_name}</h1>
            </div>
            <div className="venue-detail__body">
                <div className="venue-detail__map-container">
                    <iframe className="venue-detail__map" src={`https://www.google.com/maps/embed?pb=${venue.location_map}`} title="venue-map"></iframe>
                </div>
                <div className="venue-detail__link-container">
                    <a href={venue.venue_website_link} className="venue-detail__link">
                        <p className="venue-detail__link-text">Website</p>
                    </a>
                </div>
            </div>
            <div className="venue-detail__subtitle-container">
                <h2 className="venue-detail__subtitle">Events</h2>
            </div>
        </section>
    )
}

export default VenueDetail