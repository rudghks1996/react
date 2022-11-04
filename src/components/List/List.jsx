import React, {useState, useEffect, createRef} from "react";
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from "@material-ui/core";


import useStyles from './styles';
import axios from "axios";
import "./UploadForm.css";


const List = ({setCoordinates}) => {
    const classes = useStyles();   // 스타일 설정
    
    const defaultFileName= "Drag an image here or upload a file"
    const [file, setFile] = useState(null);
    const [imgSrc, setImgSrc] = useState(null);
    const [fileName, setFileName] = useState(defaultFileName);
    const [exist, setExist] = useState(false);

    const imageSelectHandler = (event) => {   {/* 이미지 입력 핸들러 */}
        const imageFile = event.target.files[0];
        setFile(imageFile);
        setFileName(imageFile.name);
        const fileReader = new FileReader();
        fileReader.readAsDataURL(imageFile);
        fileReader.onload = e => setImgSrc(e.target.result);
        setExist(true);
    };

    const onSubmit = async (e) => {  
        e.preventDefault();   {/* 새로고침 방지 */}
       const formData = new FormData();
       formData.append("image", file)    
       try{
            const res = await axios.post("/upload", formData, {
                headers: { "Content-Type" : "multipart/form-data"}, 
            });
            setTimeout(() =>{
              setFileName(defaultFileName);
              setImgSrc(null);
              setExist(false);
            }, 3000);
       }catch(err){ 
        setFileName(defaultFileName);
        setImgSrc(null);
        console.error(err);
        setExist(false);
       }
    };
 
   

    return (
        <div className={classes.container}>
            <form onSubmit={onSubmit}>
                <div className="file-dropper">
                    {/* <img width="100%" height="100%" src={imgSrc} className={`{image-preview ${imgSrc && "image-preview-show"}}`} alt="사진" title={fileName}/> */}
                    {exist ? (<img width="100%" height="100%" src={imgSrc} className={`{image-preview ${imgSrc && "image-preview-show"}}`} alt="사진" title={fileName}/>) : (<div>{fileName}</div>)}
                    <input id="image" type="file" accept="image/*" onChange={imageSelectHandler} /> 
                </div>
                <div>
                <button type="submit" style={{width: "95%", height:40, borderRadius:"3px", cursor:"pointer", marginBottom:"10px"}}>search</button>
                </div>
            </form> 
            


        


        </div>
    )
}

export default List