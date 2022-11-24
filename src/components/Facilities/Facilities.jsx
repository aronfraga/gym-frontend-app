import React, { useEffect, useState } from 'react';
import {useAuth0} from 'auth0/auth0-react'
import { useSelector, useDispatch } from 'react-redux';
import {fetchGetImages, fetchDeleteImages, fetchGetAdmins} from '../../redux/actions/defaultAction';
import Style from './Facilities.module.css';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Loading from '../Loading/Loading';
import { Button } from '@mui/material';
import { FormControl, Input } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import DeleteIcon from '@mui/icons-material/Delete';
import Dropzone from 'react-dropzone';
import axios from 'axios';

const Facilities = () => {
	const dispatch = useDispatch();
	const { facilitiesImages } = useSelector((state) => state.facilitiesImages);
	const [image, setImage] = useState({ array: [] });
    const dispatch = useDispatch();
    const {user} = useAuth0();
    const {facilitiesImages} = useSelector(state => state.facilitiesImages);
    const {isAdminLogged} = useSelector(state => state.isAdminLogged);
    const [image,setImage] = useState({array: []});

    const [input,setInput] = useState({
        name_1: "",
    })

    const [loading,setLoading] = useState("");
    const [isShown, setIsShown] = useState(false);
    const [activeUpload, setActiveUpload]= useState(false);
  
    useEffect(() => {dispatch(fetchGetImages())},[dispatch]);
    useEffect(() => {dispatch(fetchGetAdmins("tony@gmail.com"))},[dispatch]);
    /* Esto se descomentará para la entrega final
    useEffect(() => {dispatch(fetchGetAdmins(user.email))},[dispatch]); */


	const handlerUpLoadbutton = (event) => {
		setActiveUpload((current) => !current);
	};

	const handlerGoBackButton = (event) => {
		window.location.reload(false);
	};

	const handlerDeletebutton = (event) => {
		dispatch(fetchDeleteImages(event.target.value));
		alert(
			`La imagen ${
				event.target.value.split('/')[1]
			} fue eliminada correctamente`
		);
	};

	const handlerInputChange = (event) => {
		setInput({ ...input, [event.target.name]: event.target.value });
	};

	const handlerDrop = (files) => {
		const upLoaders = files.map((file, index) => {
			const formData = new FormData();
			formData.append('file', file);
			formData.append('tags', `codeinfuse, medium, gist`);
			formData.append('upload_preset', 'AppGym-facilities');
			formData.append('api_key', '528937882136667');
			formData.append('public_id', `${input[`name_${index + 1}`]}`);
			formData.append('timestamp', (Date.now() / 1000) | 0);
			setLoading('true');
			return axios
				.post(
					'https://api.cloudinary.com/v1_1/diapwgajv/image/upload',
					formData,
					{
						headers: { 'X-Requested-With': 'XMLHttpRequest' },
					}
				)
				.then((response) => {
					const data = response.data;
					const fileURL = data.secure_url;
					let specificArrinObj = image.array;
					specificArrinObj.push(fileURL);
					const newobj = { ...image, specificArrinObj };
					setImage(newobj);
				});
		});
		axios.all(upLoaders).then(() => {
			setLoading('false');
		});
	};

	function imagePreview() {
		if (loading === 'true')
			return (
				<div>
					<p className={Style.tittlePreview}>Cargando Imágenes 🕐</p>
					<Loading />
				</div>
			);
		if (loading === 'false')
			return (
				<div>
					<p className={Style.tittlePreview}>
						Imágenes subidas correctamente✔️
					</p>
					<div className={Style.allcardsPreview}>
						{image.array?.map((item) => (
							<img
								alt='img'
								key={item}
								className={Style.imgPreview}
								src={item}
							/>
						))}
					</div>
				</div>
			);
	}
	return (
	<>
		<NavBar />
		<div className={Style.mainContainer}>
			<div className={Style.titleContainer}>
				<div className={Style.titleButtonWrapper}>
					<h2 className={Style.tittle}>Nuestras Instalaciones</h2>
					<div className={Style.buttonsContainer}>						
						{isAdminLogged && 
						<Button 
						disabled={isShown}
						onClick={handlerbutton} 
						className={Style.UploadButton} 
						variant="contained"
						sx={{
							background: '#0d0d6b',
							'&:hover': {
								backgroundColor: '#62629f',
								transition: '0.4s',
							},
						}}
						>
							EDITAR
						</Button>
						}
						{isShown && (
							<Button
								disabled={activeUpload}
								onClick={handlerUpLoadbutton}
								className={Style.UploadButton}
								variant='outlined'
								sx={{
									color: '#0d0d6b',
									borderColor: '#0d0d6b',
									'&:hover': {
										backgroundColor: '#62629f1b',
										transition: '0.4s',
									},
								}}
							>
								SUBIR FOTOS
							</Button>
						)}
						{isShown && (
							<Button
								onClick={handlerGoBackButton}
								className={Style.UploadButton}
								variant='outlined'
								sx={{
									color: '#0d0d6b',
									borderColor: '#0d0d6b',
									'&:hover': {
										backgroundColor: '#62629f1b',
										transition: '0.4s',
									},
								}}
							>
								VOLVER ATRÁS
							</Button>
						)}
					</div>
				</div>
				<hr></hr>
			</div>
			<div className={Style.photosContainer}>
				{facilitiesImages.length && !activeUpload ? (
					facilitiesImages.map((image) => (
						<div className={Style.photoContainer} key={image.asset_id}>
							<div className={Style.imgContainer}>
								<p
									className={
										isShown ? Style.facilitiename2 : Style.facilitiename1
									}
								>
									{image.public_id.split('/')[1]}
								</p>
								<img
									className={isShown ? Style.photos2 : Style.photos1}
									src={image.url}
									alt='img'
								/>
								{isShown && (
									<Button
										className={Style.deleteButton}
										style={{
											position: 'absolute',
											backgroundColor: '#da6e6e',
											color: 'beige',
											border: 'none',
										}}
										value={image.public_id}
										variant='outlined'
										startIcon={<DeleteIcon />}
										onClick={handlerDeletebutton}
									>
										Delete
									</Button>
								)}
							</div>
						</div>
					))
				) : activeUpload ? (
					<div>
						<div className={Style.wrapperDropnInput}>
							<div>
								<Dropzone
									disabled={!input.name_1}
									classname={Style.dropzone}
									onDrop={handlerDrop}
									onChange={(e) => setImage(e.target.value)}
									value={image}
								>
									{({ getRootProps, getInputProps }) => (
										<section>
											<div {...getRootProps({ className: Style.dropzone })}>
												<input {...getInputProps()} />
												<span className={Style.folder}>📁</span>
												<p className={Style.textboxdrop}>
													Arrastra o haz click para subir imágenes
												</p>
											</div>
										</section>
									)}
								</Dropzone>
							</div>
							<div className={Style.wrapperForm}>
								<FormControl>
									<InputLabel htmlFor='my-input'>Image Name</InputLabel>
									<Input
										id='my-input'
										aria-describedby='my-helper-text'
										name='name_1'
										onChange={handlerInputChange}
										value={input.name_1}
									/>
								</FormControl>
								{!input.name_1 && (
									<p className={Style.error}>
										Ingresa el nombre de la imagen para poder usar el Dropzone
									</p>
								)}
							</div>
						</div>
						<div>{imagePreview()}</div>
					</div>
				) : (
					<Loading />
				)}
			</div>
		</div>
		<Footer />
	</>
);
};
export default Facilities;
