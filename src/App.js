import React, {useState, useEffect} from "react";
import { CssBaseline, Grid} from "@material-ui/core";
import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import List from "./components/List/List";
import Street from "./Street";
const App = () => {      
    const[coordinates, setCoordinates] = useState({});  // 위도, 경도 설정
    
    useEffect(()=>{ 
        setCoordinates({lat:52.5186, lng:13.4081});
    },[])   //첫 위치 위도, 경도 베를린으로 설정 (베를린 위도 : 52.5186, 경도 : 13.4081) 

    return (
        <>
            <CssBaseline />
            <Header 
              setCoordinates = {setCoordinates}
            />
            <Grid container spacing={3} style={{width : '100%'}}>
                
                <Map 
                    setCoordinates = {setCoordinates}
                    coordinates = {coordinates}
                />
            </Grid>
        </>
    )
}

export default App;