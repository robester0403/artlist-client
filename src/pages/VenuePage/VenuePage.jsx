import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import VenueDetail from "../../components/VenueDetail/VenueDetail"
import EventsContainer from "../../components/EventsContainer/EventsContainer"

import {getDateFormat, dateToNum, getEventsSorted} from "../../utils/calculations"
import {getVenueEvents, getSingleVenue} from "../../utils/api-utils"
import { useEffect } from "react"
import {useParams} from "react-router-dom"
import axios from "axios"

function VenuePage ({setEventArr, eventArr, userDate, venue, setVenue}){
    const {id} = useParams();

    useEffect(() => {
        axios
            .get(getVenueEvents(id))
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
        axios
            .get(getSingleVenue(id))
            .then((response)=>{
                setVenue(response.data[0])
            });
    }, []);


    if (!eventArr || !venue){
        return(
            <h1>Loading...</h1>
        )
    }
    return(
        <>
        <Header/>
        <VenueDetail venue={venue}/>
        <EventsContainer eventArr={eventArr}/>
        <Footer/>
        </>
    )
}
export default VenuePage