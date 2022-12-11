import EventCard from "../EventCard/EventCard"


function EventsContainer({eventArr}){
    console.log(eventArr)
    return(
        <section>
        {eventArr.map(event =>{
            return(
                    <EventCard 
                    key = {event.event_id}

                    name = {event.event_name}
                    image={event.event_image}
                    description = {event.long_description}
                    date={event.date}
                    time={event.time}
                    distance = {event.distance}
                    />
            )
        }) }

        </section>
    )
}

export default EventsContainer