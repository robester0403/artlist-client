function VenueDetail ({venue}){
    console.log(venue)
    return(
        <>
        <p>{venue.venue_name}</p>
        <p>{venue.venue_image}</p>
        <p>{venue.website_link}</p>
        <p>{venue.location}</p>
        <p>{venue.location_map}</p>
        </>
    )
}

export default VenueDetail