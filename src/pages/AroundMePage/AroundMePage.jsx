import AddressForm from "../../components/AddressForm/AddressForm"
import {useRef, useState, useEffect} from "react";
import axios from "axios";
import {getCoord} from "../../utils/api-utils";

const { point } = require("@turf/helpers");
const distance = require("@turf/distance").default;

function AroundMePage(){
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
    const [test, setTest] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:8080/api/events/16").then((response) => {
        let longitude = response.data.longitude;
        let latitude = response.data.latitude;
        const from = point([longitude, latitude]);
        const to = point([userLongitude, userLatitude]);
        const options = { units: "kilometers" };
        const result = distance(from, to, options);
        setTest(result);
        });
    }, []);

    
    return (
        <>
            <p>{test}</p>
            <AddressForm formRef={formRef} handleAddressSubmit={handleAddressSubmit}/>
        </>
    )
}

export default AroundMePage;