import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SubHeader from "../../components/SubHeader/SubHeader";

import { useEffect} from "react";
import axios from "axios";
import {getEvents} from "../../utils/api-utils"
import {getDistance, getDateFormat, getTimeFormat, dateToNum, getEventsSorted, getShortDescription} from "../../utils/calculations"
import EventsContainer from "../../components/EventsContainer/EventsContainer"

import "./AroundMePage.scss"
function AroundMePage({userLatitude, userLongitude, setEventArr, eventArr}){

    useEffect(() => {
        axios
        .get(getEvents())
        .then((response) => {
            const events = response.data.map((event=>{
                const formatEvent = {};
                formatEvent.id = event.event_id;
                formatEvent.name = event.event_name;
                formatEvent.image = event.event_image;
                formatEvent.long_description = getShortDescription(event.long_description);
                formatEvent.latitude = event.latitude;
                formatEvent.longitude = event.longitude;
                formatEvent.date = getDateFormat(event.start_time);
                formatEvent.time = getTimeFormat(event.start_time);
                formatEvent.distance = getDistance(userLatitude, userLongitude, event.latitude, event.longitude);
                formatEvent.dateNum = dateToNum(formatEvent.date)
                return formatEvent;
            }))
            events.sort(getEventsSorted)
            setEventArr(events)
        });
    }, []);

    if (!eventArr){
        return <h1>Loading...</h1>
    }
    
    return (
        <section className="around-me">  
            <Header/>
            <SubHeader title={`Around Me`}/>
            <EventsContainer eventArr ={eventArr}/>
            <Footer/>
        </section>
    )
}

export default AroundMePage;