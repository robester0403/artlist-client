import { useEffect} from "react";
import axios from "axios";
import {getEvents} from "../../utils/api-utils"
import {getDistance, getDateFormat, dateToNum, getEventsSorted} from "../../utils/calculations"
import EventsContainer from "../../components/EventsContainer/EventsContainer"

function AroundMePage({userLatitude, userLongitude, userDate, setEventArr, eventArr}){

    useEffect(() => {
        axios.get(getEvents()).then((response) => {
            const events = response.data
            console.log(events)
            const eventArray = []
            events.forEach(event=>{
                event.distance = getDistance(userLatitude, userLongitude, event.latitude, event.longitude)
                event.userClick = userDate
                event.date = getDateFormat(event)
                event.dateNum = dateToNum(event.date)
                if (event.dateNum > event.userClick){
                    eventArray.push(event)
                }
            })
            eventArray.sort(getEventsSorted)
            setEventArr(eventArray)
        });
    }, []);

    if (!eventArr){
        return <h1>Loading...</h1>
    }
    
    return (
        <>  
            <p>{userLatitude}</p>
            <p>{userLongitude}</p>
            <p>{userDate}</p>
            <EventsContainer eventArr ={eventArr}/>
        </>
    )
}

export default AroundMePage;