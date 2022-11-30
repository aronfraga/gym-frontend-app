import React, { useState } from "react";
import { useGetAllProductsQuery, usePostProductMutation, useDeleteProductMutation } from "../../redux/query/ApiEcommerce";
import style from './FormProducts.module.css';
import { Link, useNavigate } from "react-router-dom";
import { uploadImage } from "../FormRoutines/uploadImage.js";
import Loading from '../Loading/Loading';
import FormControl from "@mui/material/FormControl";
import { TextField } from '@mui/material';
import { FormLabel,IconButton,} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import Button from "@mui/material/Button";


export default function FormProducts(){

    const navigate = useNavigate()

    const [createProducts] = usePostProductMutation();

    const [deleteProduct] = useDeleteProductMutation();

    const {data,isLoading} = useGetAllProductsQuery({data:{},page:0,size:5000});

    const [input, setInput] = useState({
      title: "",
      unit_price: 0,
      stock: 0,
      category: "",
      description: "",
      imgUrl: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        await createProducts({
          title: input.title,
          unit_price: input.unit_price,
          stock: input.stock,
          category: input.category,
          description: input.description,
          imgUrl: input.imgUrl,
        }).unwrap();

        setInput({
          title: "",
          unit_price: 0,
          stock: 0,
          category: "",
          description: "",
          imgUrl: "",
        });

        alert("Producto Creado");
        
        navigate("/tienda");
      };

      const handleInputChange = function (e) {
          setInput({ ...input, [e.target.name]: e.target.value });
      };

      const handlerImage = async (e) => {
        e.preventDefault();
        const url = await uploadImage(e.target.files);
        setInput({
          ...input,
          imgUrl: url,
        });
      };

      if (isLoading) return <Loading />;
    

    return (
      <div className={style.mainContainer}>
      <br></br>
      <div>
      <Link style={{ textDecoration: 'none'}} to='/tienda'>
                    <Button
                        variant="contained"
                        sx={{
                            background: "#0d0d6b",
                            "&:hover": {
                            backgroundColor: "#62629f",
                                transition: "0.4s",
                            },
                        }}
                    >
                        Volver a tienda
                    </Button>
                </Link>
      </div>
      <div className={style.mainContainerForm}>
      <form onSubmit={(e) => handleSubmit(e)}>
      <div>
      <FormControl>
        
        <br/>
  
        <div className={style.textField}>
        <TextField
        required
        sx={{ width: 300 }}
        key="standard-name"
        label="Ingrese el nombre del producto"
        name="title"
        value={input.title}
        onChange={handleInputChange}
        />
        </div>

        <div className={style.textField}>
        <TextField
        required
        sx={{ width: 300 }}
        key="standard-name"
        label="Ingrese valor del producto"
        name="unit_price"
        value={input.unit_price}
        onChange={handleInputChange}
        type="number"
        InputProps={{
          inputProps: { min: 0 }
        }}
        />
        <br></br>
        </div>

        <div className={style.textField}>
        <TextField
        required
        sx={{ width: 300 }}
        key="standard-name"
        label="Stock disponible"
        name="stock"
        min="0"
        value={input.stock}
        onChange={handleInputChange}
        type="number"
        InputProps={{
          inputProps: { min: 0 }
        }}
        />
        <br></br>
        </div>

        <div className={style.textField}>
        <TextField
        sx={{ width: 300 }}
        key="standard-name"
        label="Ingrese categoria"
        name="category"
        value={input.category}
        onChange={handleInputChange}
        />
        <br></br>
        </div>

        <div className={style.textField}>
        <TextField
        sx={{ width: 300 }}
        key="standard-name"
        label="Descripcion del producto"
        name="description"
        value={input.description}
        onChange={handleInputChange}
        />
        <br></br>
        </div>

        <div>
        <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="label"
                  >
                    <FormLabel id="img-label">Imagen</FormLabel>
                    <input
                      accept="image/*"
                      type="file"
                      name="imgUrl"
                      onChange={handlerImage}
                    />
                    <PhotoCamera />
                  </IconButton>
        <br></br>
        </div>
        <div className={style.textField}>
        <Button
                                type='submit' sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    paddingRight: '25px',
                                    paddingLeft: '25px',
                                    marginBottom: '10px',
                                    marginLeft: '73px',
                                    marginTop: '10px',
                                    width: 150,
                                    color: 'white',
                                    borderRadius: '6px',
                                    background: '#2779ff',
                                    alignItems: 'center',
                                    '&:hover': {
                                        backgroundColor: '#5151519c',
                                        transition: '1s',
                                    },
                                }}>
                                Submit
                            </Button>
        </div>
      </FormControl>
      </div>
    </form>
    
    </div>

  </div>
    )
}