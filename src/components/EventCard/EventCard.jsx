function EventCard({name, image, genre, location, date, time, distance}){
    return(
        <article>
            <p>{name}</p>
            <p>{image}</p>
            <p>{genre}</p>
            <p>{location}</p>
            <p>{date}</p>
            <p>{time}</p>
            <p>{distance}</p>

        </article>
    )
}

export default EventCard