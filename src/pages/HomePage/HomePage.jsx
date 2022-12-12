import {useNavigate } from "react-router-dom";
import {useRef, useState} from "react";
import axios from "axios";
import {getCoord} from "../../utils/api-utils";
import { getCurrentDate } from "../../utils/calculations";
import AddressForm from "../../components/AddressForm/AddressForm";

import "./HomePage.scss"

function HomePage({setUserLatitude, setUserLongitude, setUserDate}){
    const [clicked, setClicked] = useState(false);
    const formRef = useRef();
    const navigate = useNavigate();

    const handleAddressSubmit = (e)=>{
        e.preventDefault();
        const form = formRef.current;
        const inputAddress = form.user_address.value;
        if(inputAddress){
        const dateClicked = getCurrentDate();
        const inputCity = form.user_city.value;
        const address = inputAddress.concat(" ", inputCity)
        setUserDate(dateClicked)
        sessionStorage.setItem("userDate", dateClicked)
        axios   
            .get(getCoord(address))
            .then((response)=>{
                const userCoord = (response.data.features[0].geometry.coordinates)
                setUserLongitude(userCoord[0])
                setUserLatitude(userCoord[1])
                sessionStorage.setItem("userLongitude", userCoord[0])
                sessionStorage.setItem("userLatitude", userCoord[1])
                navigate("/aroundme")
            })
        }
    }

    const onClickExplore = (e)=>{
        e.preventDefault();
        const dateClicked = getCurrentDate();
        setUserDate(dateClicked);
        sessionStorage.setItem("userDate", dateClicked)
        // sessionStorage.removeItem("")
        navigate("/explore")
    }
    const onClick = (e)=>{
        e.preventDefault();
        setClicked(true)
    }
    const onClickBack = (e) =>{
        e.preventDefault();
        setClicked(false);
    }

    if(!clicked){
        return(
        <section className="home-page">
            <div className="home-page__logo-container">
                <p>Where the logo goes</p>
            </div>
            <div className="home-page__link-container">
                <div>
                <button type="click" onClick = {onClick} className="home-page__link">
                    <p>Around Me</p>
                </button>
                <button type="click" onClick = {onClickExplore} className="home-page__link">
                    <p>Explore</p>
                </button>
                </div>
            </div>
        </section>
    )
    }else{
        return(
            <section className="home-page">
            <div className="home-page__logo-container">
                <p>Where the logo goes</p>
            </div>
            <div className="home-page__link-container">
                <AddressForm formRef={formRef} handleAddressSubmit={handleAddressSubmit} onClickBack={onClickBack}/>
            </div>
        </section>
        )
    }
}

export default HomePage;