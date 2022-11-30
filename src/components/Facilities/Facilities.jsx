import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import {
	fetchGetImages,
	fetchDeleteImages,
	fetchGetAdmins,
} from '../../redux/actions/defaultAction';
import { postImages } from './Helpers';
import Style from './Facilities.module.css';
import NavBar from '../NavBar/NavBar';
import Loading from '../Loading/Loading';
import swal from 'sweetalert';
import { Button } from '@mui/material';
import { FormControl, Input } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import DeleteIcon from '@mui/icons-material/Delete';
import Dropzone from 'react-dropzone';
import axios from 'axios';

const Facilities = () => {
	const dispatch = useDispatch();
	const [image, setImage] = useState({ array: [] });

  	const {user} = useAuth0();
	const email = user?.email;
  	const {facilitiesImages} = useSelector(state => state.facilitiesImages);
  	const {isAdminLogged} = useSelector(state => state.isAdminLogged);
  	const [input,setInput] = useState({ name_1: "" });
    const [loading,setLoading] = useState("");
    const [isShown, setIsShown] = useState(false);
    const [activeUpload, setActiveUpload]= useState(false);
  
    useEffect(() => {dispatch(fetchGetImages())},[dispatch]);
   	dispatch(fetchGetAdmins(email)); 
	

	const handlerbutton = (event) => {
		setIsShown((current) => !current);
	};

	const handlerUpLoadbutton = (event) => {
		setActiveUpload((current) => !current);
	};

	const handlerGoBackButton = (event) => {
		window.location.reload(false);
	};

	const handlerDeletebutton = (event) => {
		swal({
			title: 'Estás seguro?',
			text: 'Una vez borrado, no recuperarás el archivo!',
			icon: 'warning',
			buttons: true,
			dangerMode: true,
		}).then((willDelete) => {
			if (willDelete) {
				dispatch(fetchDeleteImages(event.target.value));
				swal('Poof! Hemos borrado la imagen seleccionada!', {
					icon: 'success',
				});
			} else {
				swal('Tu imagen está a salvo!');
			}
		});
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
			postImages(formData, image, setImage);
		});
		axios.all(upLoaders).then(() => {
			setLoading('false');
		});
	};

	function imagePreview() {
		if (loading === 'true')
			return (
				<div className={Style.wrapperpreview}>
					<p className={Style.tittlePreview}>Cargando Imágenes 🕐</p>
					<Loading />
				</div>
			);
		if (loading === 'false')
			return (
				<div className={Style.wrapperpreview}>
					<p className={Style.tittlePreview}>Imagen subida correctamente✔️</p>
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
							{isAdminLogged && !isShown && (
								<Button
									onClick={handlerbutton}
									className={Style.UploadButton}
									variant='contained'
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
							)}
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
											value={image.public_id}
											variant='outlined'
											onClick={handlerDeletebutton}
											style={{
												position: 'absolute',
												backgroundColor: '#da6e6e',
												color: 'beige',
												border: 'none',
											}}
											startIcon={<DeleteIcon />}
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
								<div className={Style.wrapperDropandForm}>
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
												Ingresa el nombre de la imagen para poder usar el
												Dropzone
											</p>
										)}
									</div>
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
															Arrastra o haz click para subir la imagen
														</p>
													</div>
												</section>
											)}
										</Dropzone>
									</div>
								</div>
								<div>{imagePreview()}</div>
							</div>
						</div>
					) : (
						<Loading />
					)}
				</div>
			</div>
		</>
	);
};
export default Facilities;
