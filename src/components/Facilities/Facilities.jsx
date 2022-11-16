import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {fetchGetImages, fetchDeleteImages} from  "../../redux/actions/defaultAction";
import Style from "./Facilities.module.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Loading from "../Loading/Loading";
import {Button} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import Dropzone from "react-dropzone";
import axios from "axios";

const Facilities = () => {

    const dispatch = useDispatch();
    const {facilitiesImages} = useSelector(state => state.facilitiesImages);
    const [image,setImage] = useState({array: []});
    const [loading,setLoading] = useState("");
    const [isShown, setIsShown] = useState(false);
    const [activeUpload, setActiveUpload]= useState(false);
  
    useEffect(() => {dispatch(fetchGetImages())},[dispatch]);

    const handlerbutton = (event) => {
        setIsShown(current => !current)
    };

    const handlerUpLoadbutton = (event) => {
        setActiveUpload(current => !current)
        
    };

    const handlerGoBackButton = (event) => {
        window.location.reload(false);
    };

    const handlerDeletebutton = (event) => {
        dispatch(fetchDeleteImages(event.target.value));
        alert(`La imagen ${event.target.value.split('/')[1]} fue eliminada correctamente`);
    }

    const handlerDrop = (files) =>{
        const upLoaders = files.map((file)=>{
            const formData = new FormData();
            formData.append("file", file);
            formData.append("tags",`codeinfuse, medium, gist`);
            formData.append("upload_preset", "AppGym-facilities");
            formData.append("api_key","528937882136667");
            formData.append("timestamp", (Date.now()/1000)|0);
            setLoading("true");
            return axios.post("https://api.cloudinary.com/v1_1/diapwgajv/image/upload", formData, {
                headers: {"X-Requested-With": "XMLHttpRequest"},
            }).then((response)  =>  {
                const data = response.data;
                const fileURL = data.secure_url;
                let specificArrinObj = image.array;
                specificArrinObj.push(fileURL);
                const newobj = {...image, specificArrinObj};
                setImage(newobj)});
        });
        axios.all(upLoaders).then(()=>{setLoading("false")});
    };

    function imagePreview(){
        if(loading === "true") 
            return (
                <div>
                    <p className={Style.tittlePreview}>Cargando Imágenes 🕐</p>
                    <Loading/>
                </div>)
        if(loading === "false") 
            return (
                <div>
                    <p className={Style.tittlePreview}>Imágenes subidas correctamente✔️</p>  
                    <div className={Style.allcardsPreview}>
                        {image.array?.map(item =>
                            <img alt = "img"
                                key = {item}
                                className={Style.imgPreview} 
                                src = {item}/>)}
                    </div>
                </div>)
    }

    return (
        <div>
            <NavBar/>
            <div className={Style.titleButtonWrapper}>
                <h2 className={Style.tittle}>Nuestras Instalaciones</h2>
                <Button disabled={isShown} onClick={handlerbutton} className={Style.UploadButton} variant="contained">EDITAR</Button>
                {isShown && <Button disabled={activeUpload} onClick={handlerUpLoadbutton} className={Style.UploadButton} variant="outlined">SUBIR FOTOS</Button>}
                {isShown && <Button onClick={handlerGoBackButton} className={Style.UploadButton} variant="outlined">VOLVER ATRÁS</Button>}
            </div>
            <hr className={Style.divisionline}></hr>
            <div>
                {(facilitiesImages.length && !activeUpload)?
                    facilitiesImages.map(image=>
                    <div className={Style.photoContainer} key={image.asset_id}>
                        <p className={isShown?Style.facilitiename2:Style.facilitiename1}>
                            {image.public_id.split('/')[1]}
                        </p>
                        <img className={isShown?Style.photos2:Style.photos1}
                            src={image.url} alt="img"/>
                        {isShown && 
                        <Button 
                            className={Style.deleteButton}
                            style={{
                                backgroundColor: '#da6e6e',
                                color:"beige",
                                border: "none",
                            }}
                            value={image.public_id} 
                            variant="outlined" 
                            startIcon={<DeleteIcon/>}
                            onClick={handlerDeletebutton}>
                            Delete
                            </Button>}
                    </div>   
                ):activeUpload?
                    <div>
                        <Dropzone  
                            classname={Style.dropzone}
                            onDrop={handlerDrop}
                            onChange={(e)=>setImage(e.target.value)}
                            value={image}>
                            {({getRootProps,getInputProps})=>(
                                <section>
                                    <div {...getRootProps({className:Style.dropzone})}>
                                        <input {...getInputProps()}/>
                                        <span className={Style.folder}>📁</span>
                                        <p className={Style.textboxdrop}>Arrastra o haz click para subir imágenes</p>
                                    </div>
                                </section>
                            )}
                        </Dropzone>
                        <div>{imagePreview()}</div>
                    </div>
                :<Loading/>}  
            </div>
            <Footer/>                   
        </div>
)};

export default Facilities;