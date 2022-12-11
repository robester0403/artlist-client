import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import GenreDetail from "../../components/GenreDetail/GenreDetail"
import EventsContainer from "../../components/EventsContainer/EventsContainer"

import {getDateFormat, dateToNum, getEventsSorted} from "../../utils/calculations"
import {getGenreEvents, getSingleGenre} from "../../utils/api-utils"
import { useEffect } from "react"
import {useParams} from "react-router-dom"
import axios from "axios"

function GenrePage ({setEventArr, eventArr, userDate, genre, setGenre}){
    const {id} = useParams();

    useEffect(() => {
        axios
            .get(getGenreEvents(id))
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
            .get(getSingleGenre(id))
            .then((response)=>{
                setGenre(response.data[0])
            });
    }, []);


    if (!eventArr || !genre){
        return(
            <h1>Loading...</h1>
        )
    }
    return(
        <>
        <Header/>
        <GenreDetail genre={genre}/>
        <EventsContainer eventArr={eventArr}/>
        <Footer/>

            
        </>
    )
}

export default GenrePage