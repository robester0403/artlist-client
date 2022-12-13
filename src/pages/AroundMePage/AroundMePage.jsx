import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SubHeader from "../../components/SubHeader/SubHeader";

import { useEffect} from "react";
import axios from "axios";
import {getEvents} from "../../utils/api-utils"
import {getDistance, getDateFormat, dateToNum, getEventsSorted, getShortDescription} from "../../utils/calculations"
import EventsContainer from "../../components/EventsContainer/EventsContainer"

import "./AroundMePage.scss"
function AroundMePage({userLatitude, userLongitude, userDate, setEventArr, eventArr}){

    useEffect(() => {
        axios.get(getEvents()).then((response) => {
            const events = response.data
            const eventArray = []
            events.forEach(event=>{
                console.log(event)
                event.long_description = getShortDescription(event.long_description);
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
        <section className="around-me">  
            <Header/>
            <SubHeader title={`Around Me`}/>
            <EventsContainer eventArr ={eventArr}/>
            <Footer/>
        </section>
    )
}

export default AroundMePage;