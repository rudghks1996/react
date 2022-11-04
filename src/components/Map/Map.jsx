import React, {useState} from "react";
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
    return(
        <div className={classes.mapContainer}>
            
            <GoogleMapReact      
                bootstrapURLKeys={{key:'AIzaSyAoO8DMKYK_rm2ETp1_ji0dmFFE1y1Ia2k'}}
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

                
                <div
                        className={classes.markerContainer}
                        lat={coordinates.latitude}
                        lng={coordinates.longitude}
                        key={1}
                    >
                        <ImLocation2 color="primary" size="40"/>
                </div>
                

            </GoogleMapReact>
        </div>
    );
}

export default Map;