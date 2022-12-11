import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import OrganizationDetail from "../../components/OrganizationDetail/OrganizationDetail"
import EventsContainer from "../../components/EventsContainer/EventsContainer"

import {getDateFormat, dateToNum, getEventsSorted} from "../../utils/calculations"
import {getOrganizationEvents, getSingleOrganization} from "../../utils/api-utils"
import { useEffect } from "react"
import {useParams} from "react-router-dom"
import axios from "axios"

function OrganizationPage ({setEventArr, eventArr, userDate, organization, setOrganization}){
    const {id} = useParams();

    useEffect(() => {
        axios
            .get(getOrganizationEvents(id))
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
            .get(getSingleOrganization(id))
            .then((response)=>{
                setOrganization(response.data[0])
            });
    }, []);


    if (!eventArr || !organization){
        return(
            <h1>Loading...</h1>
        )
    }
    return(
        <>
        <Header/>
        <OrganizationDetail organization={organization}/>
        <EventsContainer eventArr={eventArr}/>
        <Footer/>

            
        </>
    )
}

export default OrganizationPage