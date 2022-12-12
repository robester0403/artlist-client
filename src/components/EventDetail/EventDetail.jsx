import { Link } from "react-router-dom"
import "./EventDetail.scss"


function EventDetail({name, image, genre, location, venue, description, organization, googleMap, date, time, ticketLink, genreId, venueId, organizationId}){

    return(
        <>
            <p>{name}</p>
            <p>{image}</p>
            <Link to={`/genre/${genreId}`}>
            <p>{genre}</p>
            </Link>
            <p>{location}</p>
            <Link to={`/venue/${venueId}`}>
            <p>{venue}</p>
            </Link>
            <p>{description}</p>
            <Link to={`/organization/${organizationId}`}>
            <p>{organization}</p>
            </Link>
            <p>{googleMap}</p>
            <p>{date}</p>
            <p>{time}</p>
            <p>{ticketLink}</p>
        </>
    )
}

export default EventDetail