import React from "react";
import ReactStreetview from 'react-streetview';


const Street = ({coordinates}) => {
        const googleMapsApiKey = 'AIzaSyAMeiwDJo9-yn6tRqHJQNDaya99IKUaiLE';

		const streetViewPanoramaOptions = {
			position: {lat: 52.5186, lng: 13.4081},
			pov: {heading: 100, pitch: 0},
			zoom: 1
		};

		return (
			<div style={{
				width: '800px',
				height: '450px',
				backgroundColor: '#eeeeee'
			}}>
				<ReactStreetview
					apiKey={googleMapsApiKey}
					streetViewPanoramaOptions={streetViewPanoramaOptions}
				/>
			</div>
		);

}


export default Street;

