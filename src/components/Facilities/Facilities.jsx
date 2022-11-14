import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {fetchImages} from  "../../redux/actions/defaultAction";
import Style from "./Facilities.module.css";
import Loading from "../Loading/Loading";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import {Button} from "@mui/material";
import Dropzone from "react-dropzone";
import axios from "axios";

const Facilities = () => {

    const dispatch = useDispatch();
    const {facilitiesImages} = useSelector(state => state.facilitiesImages);
    const [image,setImage] = useState({array: []});
    const [loading,setLoading] = useState("");
    const [isShown, setIsShown] = useState(false);
    const handlerbutton = (event) => {
        setIsShown(current => !current)
    }

    useEffect(() => {dispatch(fetchImages('/api/'))},[dispatch]);

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
                setImage(newobj);
                console.log(image);
                console.log(fileURL)});
        });
        axios.all(upLoaders).then(()=>{
            setLoading("false")
        });
        ;
    };

    function imagePreview(){
        if(loading === "true") {
            return <h3>Cargando Imagenes...</h3>
        }
        if(loading === "false") {
            return (
                <>
                    {image.array?.map(item =>
                        <img alt = "img"
                             key = {item}
                             className = {Style.imgPreview} 
                             src = {item}/>)
                    }
                </>
            )}
    }

    return (
        <div>
            <NavBar/>
            <div className={Style.titleButtonWrapper}>
                <h2 className={Style.tittle}>Nuestras Instalaciones</h2>
                <Button onClick={handlerbutton} className={Style.UploadButton} variant="outlined">SUBIR FOTOS</Button>
            </div>
            <div>
                {(facilitiesImages.length && !isShown)?
                    facilitiesImages.map(image=>
                    <div className={Style.photoContainer} key={image.asset_id}>
                        <p className={Style.facilitiename}>
                            Imagen: {facilitiesImages.indexOf(image)+1}
                        </p>
                        <img 
                        className={Style.photos}
                        src={image.url} alt="img"/>
                    </div>
                ):isShown?
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
                        {imagePreview()}
                    </div>
                :<Loading/>}  
            </div>
            <Footer/>                   
        </div>
)};

export default Facilities;