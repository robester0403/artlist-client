import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import EventsContainer from "../../components/EventsContainer/EventsContainer";
import { useEffect} from "react";
import axios from "axios";
import {getEvents} from "../../utils/api-utils"
import {getDateFormat, dateToNum, getEventsSorted} from "../../utils/calculations"

function ExplorePage ({userDate, setEventArr, eventArr}){
    useEffect(() => {
        axios
            .get(getEvents())
            .then((response) => {
            const events = response.data
            const eventArray = []
            events.forEach(event=>{
                event.date = getDateFormat(event)
                event.dateNum = dateToNum(event.date)
                if (event.dateNum > userDate){
                    eventArray.push(event)
                }
            })
            eventArray.sort(getEventsSorted)
            setEventArr(eventArray)
        })
},[]);

if (!eventArr){
    return(
        <h1>Loading..</h1>
    )
}
    return(
        <>
        <Header/>
        <EventsContainer eventArr={eventArr}/>
        <Footer/>
        </>
    )
}

export default ExplorePage