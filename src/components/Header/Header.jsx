import React, {useState} from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './styles'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import './Header.css'
import List from "../List/List";


const Header=({setCoordinates})=>{
    
    const classes = useStyles();
    const [autocomplete, setAutocomplete] = useState(null);

    const onLoad = (autoC) => setAutocomplete(autoC);
    const onPlaceChanged = () => {
        const lat = autocomplete.getPlace().geometry.location.lat();
        const lng = autocomplete.getPlace().geometry.location.lng();        
        setCoordinates({lat, lng});
    }  // 검색 장소에 따른 이동 함수 (위도, 경도 변경)

    const [sidebar, setSidebar] = useState(false);  
    const showSidebar = () => setSidebar(!sidebar);   // 사이드 바 on <-> off
  
    return(
        <AppBar position="fixed">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" className={classes.title}>
                    <div className='menu-bars'>   {/* 토글 메뉴바, 이미지 입력 폼 나옴 */}
                        <FaIcons.FaBars onClick={showSidebar}/>
                        &nbsp; &nbsp; Navigation Direction Correction
                        
                    </div>
                    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                        <ul className='nav-menu-items'>
                            <li className='navbar-toggle'>
                                <div className='menu-bars'> 
                                    <AiIcons.AiOutlineClose onClick={showSidebar}/>   
                                </div>
                            </li>
                            ∎ Query Image
                            <List 
                                setCoordinates={setCoordinates}
                            />   {/* 이미지 입력 폼은 List에서 작성 */}
                            ∎ Street View
                        </ul>
                    </nav>             
                    
                </Typography>
                
                <Box display="flex">    {/* 주소를 통한 검색 (위도 경도 이동) */}
                    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>   
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase placeholder="Search ..." classes={{root:classes.inputRoot, input:classes.inputInput}}/>
                        </div>
                    </Autocomplete>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;