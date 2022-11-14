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
const Map=({setCoordinates, coordinates, mapMarkers, setMapMarkers})=>{
    const classes = useStyles();
    const [paper, setPaper] = useState(false);
     
    useEffect(()=>{
        console.log(coordinates);
    },[coordinates])

    const markers = mapMarkers && mapMarkers.map((item,index)=>{
        if(item.dir == "upleft"){
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
        }else if(item.dir == "up"){
            return(
                <div
                className="classes.markerContainer"
                lat={item.lat}
                lng={item.lng}
                key={index}
                >
                <BsIcons.BsFillArrowUpCircleFill color="primary" size="40"/>
                </div>
            )
        }else if(item.dir == "upright"){
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
        }else if(item.dir == "right"){
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
        }else if(item.dir == "downright"){
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
        }else if(item.dir == "down"){
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
        }else if(item.dir == "downleft"){
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
        }else if(item.dir == "left"){
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


    })


    
    /* const direction = [
        {
            lat: 52.5181,
            lng: 13.4078,
            dir: "upleft"
        },
        {   
            lat: 52.5182,
            lng: 13.40766,
            dir: "upleft"
        },
        {   
            lat: 52.5183,
            lng: 13.40752,
            dir: "upleft"
        },
        {   
            lat: 52.5184,
            lng: 13.40738,
            dir: "upleft"
        },
        {   
            lat: 52.51853,
            lng: 13.40751,
            dir: "upright"
        },
        {   
            lat: 52.51862,
            lng: 13.4077,
            dir: "upright"
        },
        {   
            lat: 52.51872,
            lng: 13.4079,
            dir: "upright"
        }
        
    ]

    const markers = direction &&
        direction.map((item,index)=>{
            if(item.dir == "upleft"){
                if(paper == true){
                    return(
                        
                            <div
                            className="classes.markerContainer"
                            lat={item.lat}
                            lng={item.lng}
                            key={index}
                            >
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography classname={classes.Typography} variant="subtitle2" gutterBottom>
                                        Details..
                                    </Typography>
                                        <div>
                                            lat : {item.lat}
                                        </div>
                                            lng : {item.lng}
                                    
                                    
                                </Paper>
                            </div>
                        
                    )
                }
                else if(paper==false){
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
                
                 
            }
            else if(item.dir == "upright"){
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
        }) */

        const markerhandler = (event) => {   {/* 이미지 입력 핸들러 */}
            if(paper){
                setPaper(false);
            }else{
                setPaper(true);
            }
            console.log(paper);
        };

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
                onChildClick={markerhandler}
            >

                {markers}
                <div
                    className="classes.markerContainer"
                    lat={coordinates.lat}
                    lng={coordinates.lng}
                    key={0}
                >
                    <ImLocation2 color="primary" size="20"/>
                </div>
                

            </GoogleMapReact>
        </div>
    );
}

export default Map;