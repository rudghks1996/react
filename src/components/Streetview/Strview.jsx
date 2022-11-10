import React, { useEffect, useState } from "react";
import ReactStreetview from "react-streetview";

const Strview = ({coordinates}) => {
  const googleMapsApiKey = "AIzaSyAMeiwDJo9-yn6tRqHJQNDaya99IKUaiLE";
  const [positions, setpositions] = useState({
    lat: 52.5186,
    lng: 13.4081
  });
  
  useEffect(() => {
    setpositions(coordinates.lat, coordinates.lng);

  }, coordinates);
  const streetViewPanoramaOptions = {
    position: { lat: positions.lat, lng: positions.lng },
    pov: { heading: 100, pitch: 0 },
    zoom: 1,
    addressControl: true,
    showRoadLabels: true,
    zoomControl: true
  };

    return (
        <div
      style={{
        width: "350px",
        height: "350px",
        
      }}
    >
        <br/>
      <ReactStreetview
        apiKey={googleMapsApiKey}
        streetViewPanoramaOptions={streetViewPanoramaOptions}
      />
    </div>

    )
}

export default Strview