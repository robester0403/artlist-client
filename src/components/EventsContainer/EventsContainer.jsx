import EventCard from "../EventCard/EventCard"
import { Link } from "react-router-dom"
import "./EventsContainer.scss"


function EventsContainer({eventArr}){
    
    return(
        <section className="events-container">
        {eventArr.map(event =>{
            return(
                <Link to ={`/event/${event.id}`} key = {event.id}>
                    <EventCard 
                    name = {event.name}
                    image={event.image}
                    description = {event.long_description}
                    
                    date={event.date}
                    time={event.time}
                    distance = {event.distance}
                    />
                    </Link>
            )
        }) }

        </section>
    )
}

export default EventsContainer