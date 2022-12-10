import {useState, useEffect} from "react";
import axios from "axios";
import {getEvents} from "../../utils/api-utils"
import {getDistance} from "../../utils/calculations"

function AroundMePage({userLatitude, userLongitude, userDate}){
    const [eventDistance, setEventDistance] = useState(null);
    const [eventArr, setEventArr] = useState(null);
    useEffect(() => {
        axios.get(getEvents()).then((response) => {
            const events = response.data
            const eventsDistance = [];
            events.forEach(event=>{
                const eventLongitude = event.longitude;
                const eventLatitude = event.latitude;
                eventsDistance.push(getDistance(userLatitude, userLongitude, eventLatitude, eventLongitude))
            })
            setEventDistance(eventsDistance)

        });
    }, []);
            console.log(eventDistance)
    
    return (
        <>
            
            <p>{userLatitude}</p>
            <p>{userLongitude}</p>
            <p>{userDate}</p>
        </>
    )
}

export default AroundMePage;