import { Link } from "react-router-dom";
import {useRef, useState, useEffect} from "react";
import axios from "axios";
import {getCoord} from "../../utils/api-utils";
import AddressForm from "../../components/AddressForm/AddressForm";
import "./HomePage.scss"
function HomePage(){
    const [userLatitude, setUserLatitude] = useState(43.65363);
    const [userLongitude, setUserLongitude] = useState(-79.38417);
    const formRef = useRef();
    const handleAddressSubmit = (e)=>{
        e.preventDefault();
        const form = formRef.current;
        const inputAddress = form.user_address.value
        const inputCity = form.user_city.value;
        const address = inputAddress.concat(" ", inputCity)
        axios   
            .get(getCoord(address))
            .then((response)=>{
                const userCoord = (response.data.features[0].geometry.coordinates)
                setUserLongitude(userCoord[0])
                setUserLatitude(userCoord[1])

            })
    }
    const [clicked, setClicked] = useState(false);
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
                <Link to="/explore" className="home-page__link">
                    <p>Explore</p>
                </Link>
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