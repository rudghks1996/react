import React, {useState} from "react";
import GoogleStreetview from "react-google-streetview";
import { GoogleMap } from "@react-google-maps/api";
import { LoadScript } from "@react-google-maps/api";
import { StreetViewPanorama } from "@react-google-maps/api";



const Strview = ({coordinates}) => {
  const APIkey = "";

  const center = {
    lat: 36.5247596,
    lng: -122.2583719
  };

  const [map,setMap] = useState(null);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return(
    <LoadScript googleMapsApiKey={""}>
  <GoogleMap
    mapContainerStyle={{width: "70%", height: "30%"}}
    center={center}
    zoom={10}
    options = {''}
  >
    <StreetViewPanorama position={center} visible={true}/>
  </GoogleMap>
</LoadScript>
  )
    
}

export default Strview