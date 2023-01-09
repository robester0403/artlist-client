import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import SubHeader from "../../components/SubHeader/SubHeader";
import EventsContainer from "../../components/EventsContainer/EventsContainer";
import { useEffect} from "react";
import axios from "axios";
import {getEvents} from "../../utils/api-utils"
import { getDateFormat, getTimeFormat, getShortDescription } from "../../utils/calculations";
import "./ExplorePage.scss"


function ExplorePage ({setEventArr, eventArr}){
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
                    formatEvent.date = getDateFormat(event.start_time);
                    formatEvent.time = getTimeFormat(event.start_time);
                    return formatEvent;
                }))
            setEventArr(events)
            
        })
},[]);
if (!eventArr){
    return(
        <h1>Loading..</h1>
    )
}
    return(
        <section className="explore">
            <Header/>
            <SubHeader title={`Explore`}/>
            <EventsContainer eventArr={eventArr}/>
            <Footer/>
        </section>
    )
}

export default ExplorePage