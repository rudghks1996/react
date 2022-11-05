import React, {useEffect, useState} from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import {BsFillArrowUpCircleFill} from 'react-icons/bs'
import {ImLocation2} from 'react-icons/im'
import useStyles from './styles';
import * as BsIcons from 'react-icons/bs';

/*
 상:BsFillArrowUpCircleFill
 하:BsFillArrowDownCircleFill
 좌:BsFillArrowLeftCircleFill
 우:BsFillArrowRightCircleFill
 상좌:BsFillArrowUpLeftCircleFill
 상우:BsFillArrowUpRightCircleFill
 하좌:BsFillArrowDownLeftCircleFill
 하우:BsFillArrowDownRightCircleFill
 */


const Map=({setCoordinates, coordinates})=>{
    const classes = useStyles();

    const [mapMarkers, setMapMarkers] = useState([]);

    useEffect(()=>{
        setMapMarkers([...mapMarkers, coordinates]);
    },[coordinates])
    
    const direction = [
        {
            lat: 52.5186,
            lng: 13.4081,
            dir: "up"
        },
        {
            lat: 52.5185,
            lng: 13.4081,
            dir: "right"
        },
        {   
            lat: 52.5185,
            lng: 13.4082,
            dir: "up"
        },
        
    ]

    const markers = direction &&
        direction.map((item,index)=>{
            if(item.dir == "up"){
                return(
                    <div
                    className="classes.markerContainer"
                    lat={item.lat}
                    lng={item.lng}
                    key={index}
                >
                    <BsFillArrowUpCircleFill color="primary" size="40"/>
                </div>
                ) 
            }
            else if(item.dir == "right"){
                return(
                    <div
                    className="classes.markerContainer"
                    lat={item.lat}
                    lng={item.lng}
                    key={index}
                >
                    <BsIcons.BsFillArrowRightCircleFill color="primary" size="40"/>
                </div>
                )  
            }
        })

    {/* const markers = mapMarkers &&
         mapMarkers.map((item, index)=>{
            if((index%8) == 0) {
                return(
                    <div
                    className="classes.markerContainer"
                    lat={item.lat}
                    lng={item.lng}
                    key={index}
                >
                    <BsFillArrowUpCircleFill color="primary" size="40"/>
                </div>
                ) 
            }
            else if((index%8) == 1){
                return(
                    <div
                    className="classes.markerContainer"
                    lat={item.lat}
                    lng={item.lng}
                    key={index}
                >
                    <BsIcons.BsFillArrowUpRightCircleFill color="primary" size="40"/>
                </div>
                )
            }
            else if((index%8) == 2){
                return(
                    <div
                    className="classes.markerContainer"
                    lat={item.lat}
                    lng={item.lng}
                    key={index}
                >
                    <BsIcons.BsFillArrowRightCircleFill color="primary" size="40"/>
                </div>
                )
            }
            else if((index%8) == 3){
                return(
                    <div
                    className="classes.markerContainer"
                    lat={item.lat}
                    lng={item.lng}
                    key={index}
                >
                    <BsIcons.BsFillArrowDownRightCircleFill color="primary" size="40"/>
                </div>
                )
            }
            else if((index%8) == 4){
                return(
                    <div
                    className="classes.markerContainer"
                    lat={item.lat}
                    lng={item.lng}
                    key={index}
                >
                    <BsIcons.BsFillArrowDownCircleFill color="primary" size="40"/>
                </div>
                )
            }
            else if((index%8) == 5){
                return(
                    <div
                    className="classes.markerContainer"
                    lat={item.lat}
                    lng={item.lng}
                    key={index}
                >
                    <BsIcons.BsFillArrowDownLeftCircleFill color="primary" size="40"/>
                </div>
                )
            }
            else if((index%8) == 6){
                return(
                    <div
                    className="classes.markerContainer"
                    lat={item.lat}
                    lng={item.lng}
                    key={index}
                >
                    <BsIcons.BsFillArrowLeftCircleFill color="primary" size="40"/>
                </div>
                )
            }
            else{
                return(
                    <div
                        className="classes.markerContainer"
                        lat={item.lat}
                        lng={item.lng}
                        key={index}
                    >
                        <BsIcons.BsFillArrowUpLeftCircleFill color="primary" size="40"/>
                    </div>
                )

            } 
            
        }) */}

    return(
        <div className={classes.mapContainer}>
            
            <GoogleMapReact      
                bootstrapURLKeys={{key:''}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={19}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={(e)=>{
                    setCoordinates({lat:e.center.lat, lng:e.center.lng});
                }}
                onChildClick={''}
            >

                {markers}
                

            </GoogleMapReact>
        </div>
    );
}

export default Map;