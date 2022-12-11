function EventDetail({name, image, genre, location, venue, description, organization, googleMap, date, time, ticketLink}){


    return(
        <>
        <p>{name}</p>
        <p>{image}</p>
    <p>{genre}</p>
    <p>{location}</p>
    <p>{venue}</p>
    <p>{description}</p>
    <p>{organization}</p>
    <p>{googleMap}</p>
    <p>{date}</p>
    <p>{time}</p>
    <p>{ticketLink}</p>
        </>
    )
}

export default EventDetail