import "./EventCard.scss"

function EventCard({name, image, description, date, time, distance}){
    return(
        <article className="eventcard">
            <div className="eventcard__container-image">
                <img src={image} alt={name} className="eventcard__image"/>
            </div>
            <div className="eventcard__container-information">

                <p className="eventcard__title">{name}</p>
                <p className="eventcard__date">{date}</p>
                <p className="eventcard__time">{time}</p>
                <p className="eventcard__distance">{distance}km</p>
                <p className="eventcard__description">{description}</p>
            </div>
        </article>
    )
}

export default EventCard