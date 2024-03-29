import {useNavigate } from "react-router-dom";
import {useRef, useState} from "react";
import axios from "axios";
import {getCoord} from "../../utils/api-utils";
import { getCurrentDate } from "../../utils/calculations";
import AddressForm from "../../components/AddressForm/AddressForm";

import "./HomePage.scss"

function HomePage({setUserLatitude, setUserLongitude}){
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
                    <img src="http://localhost:8080/logos/logo-transparent.png" alt="logo" className="home-page__logo"/>
                </div>
                <div className="home-page__link-container">
                    <button type="click" onClick = {onClick} className="home-page__link">
                        Around Me
                    </button>
                    <button type="click" onClick = {onClickExplore} className="home-page__link">
                        Explore
                    </button>
                </div>
            </section>
    )
    }else{
        return(
            <section className="home-page">
                <div className="home-page__logo-container">
                    <img src="http://localhost:8080/logos/logo-transparent.png" alt="logo" className="home-page__logo"/>
                </div>
                <div className="home-page__link-container">
                    <AddressForm formRef={formRef} handleAddressSubmit={handleAddressSubmit} onClickBack={onClickBack}/>
                </div>
            </section>
        )
    }
}

export default HomePage;