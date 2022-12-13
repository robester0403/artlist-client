import "./EventCard.scss"

function EventCard({name, image, description, date, time, distance}){
    if (!distance){
        return(
            <article className="eventcard">
            <div className="eventcard__image-container">
                <img src={image} alt={name} className="eventcard__image"/>
            </div>
            <div className="eventcard__information-container">

                <p className="eventcard__title">{name}</p>
                <p className="eventcard__date">{date}</p>
                <p className="eventcard__time">{time}</p>
                <p className="eventcard__description">{description}</p>
            </div>
        </article>

        )
    }else{
    return(
        <article className="eventcard">
            <div className="eventcard__image-container">
                <img src={image} alt={name} className="eventcard__image"/>
            </div>
            <div className="eventcard__information-container">

                <p className="eventcard__title">{name}</p>
                <p className="eventcard__date">{date}</p>
                <p className="eventcard__time">{time}</p>
                <p className="eventcard__distance">{distance}km</p>
                <p className="eventcard__description">{description}</p>
            </div>
        </article>
    )
}}

export default EventCard