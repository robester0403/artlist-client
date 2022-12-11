import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import EventDetail from "../../components/EventDetail/EventDetail"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {getEvent} from "../../utils/api-utils"
import { getDateFormat } from "../../utils/calculations";

function EventDetailPage (){
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [genre, setGenre] = useState("");
    const [location, setLocation] = useState("");
    const [venue, setVenue] = useState("");
    const [description, setDescription] = useState("");
    const [organization, setOrganization] = useState("");
    const [date, setDate] = useState(null);
    const [googleMap, setGoogleMap] = useState(null);
    const [time, setTime] = useState("");
    const [ticketLink, setTicketLink] = useState("");
    const [venueId, setVenueId] = useState(null);
    const [genreId, setGenreId] = useState(null);
    const [organizationId, setOrganizationId] = useState(null);
    const {id} = useParams();

    useEffect(()=>{
        axios
            .get(getEvent(id))
            .then((response)=>{
                const information = response.data;
                const eventDate = getDateFormat(information)
                setName(information.event_name);
                setImage(information.event_image);
                setGenre(information.genre_name);
                setLocation(information.location);
                setVenue(information.venue_name);
                setDescription(information.long_description);
                setOrganization(information.organization_name);
                setGoogleMap(information.venue_map);
                setDate(eventDate);
                setTime(information.time);
                setTicketLink(information.ticket_link);
                setGenreId(information.genre_id);
                setVenueId(information.venue_id);
                setOrganizationId(information.organization_id);
            })
    },[])
    return(
        <>
            <Header/>
                <EventDetail 
                name = {name}
                image={image}
                genre={genre}
                location= {location}
                venue={venue}
                description = {description}
                organization = {organization}
                googleMap = {googleMap}
                date= {date}
                time= {time}
                ticketLink = {ticketLink}
                genreId = {genreId}
                organizationId = {organizationId}
                venueId = {venueId}
                />
            <Footer/>
        </>
    )
}

export default EventDetailPage