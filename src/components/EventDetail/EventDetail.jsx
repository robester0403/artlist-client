import { Link } from "react-router-dom"
import "./EventDetail.scss"


function EventDetail({name, image, genre, location, venue, description, organization, googleMap, date, time, ticketLink, genreId, venueId, organizationId}){

    return(
        <article className="event-detail">

            <div className="event-detail__hero-container">
                <img src={image} alt={name} className="event-detail__image"/>
            </div>

            <div className="event-detail__main">
                <div className="event-detail__title-container">
                    <p className="event-detail__title">{name}</p>
                </div>
                <div className="event-detail__datetime-container">
                    <p className="event-detail__date">{date}</p>
                    <p className="event-detail__time">{time}</p>
                </div>
            </div>
            <div className="event-detail__wrap">
                <div className="event-detail__description-container">
                        <p className="event-detail__description">{description}</p>
                </div>
                <div className="event-detail__detail">
                    <p className="event-detail__detail-title">PLAN TO GO</p>
                    <div className="event-detail__detail-container">
                        <Link to={`/genre/${genreId}`} className="event-detail__genre event-detail__hover">{genre}</Link>
                        <Link to={`/organization/${organizationId}`} className="event-detail__text event-detail__hover">{organization}</Link>
                        <p className="event-detail__text">{location}</p>
                        <Link to={`/venue/${venueId}`} className="event-detail__text event-detail__hover">{venue}</Link>

                    </div>
                    <div className="event-detail__link-container">
                        <a href={ticketLink} className="event-detail__link">Ticket</a>
                    </div>
                </div>
                <div className="event-detail__map-container">
                    <iframe className="event-detail__map" src={`https://www.google.com/maps/embed?pb=${googleMap}`} title="event-map"></iframe>
                </div>
            </div>
        </article>
    )
}

export default EventDetail