import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery, usePutProductMutation, useGetAllProductsQuery } from "../../redux/query/ApiEcommerce";
import s from './FormProducts.module.css';
import { Link, useNavigate } from "react-router-dom";
import { uploadImage } from "../FormRoutines/uploadImage.js";
import Loading from '../Loading/Loading';


export default function EditProduct(){

    const navigate = useNavigate()

    const { id } = useParams()

    const [putProduct] = usePutProductMutation()

    const {data: allProducts} = useGetAllProductsQuery({data:{},page:0,size:5000});

    const {data,isLoading,isSuccess} = useGetProductByIdQuery(id);

    const [flag,setFlag] = useState(false)

    const [input, setInput] = useState({
      title: "",
      unit_price: 0,
      stock: 0,
      category: "",
      description: "",
      imgUrl: "",
    });

    const productTitle = data?data.title:""

    if(isSuccess && flag === false) {
        
        setInput({
            title: data.title, unit_price: data.unit_price, stock: data.stock, category: data.category, description: data.description, imgUrl: data.imgUrl
        })
        setFlag(true)
    }

    const [errors, setErrors] = useState({
    });

    function validate(input) {
      let errors = {};
      if (!input.title) errors.title = "Debe ingresar nombre del producto";
      if (input.unit_price == 0) errors.unit_price = "El precio debe ser mayor que 0";
      if(input.title){
        allProducts.products.map(el => {
        const string1 = el.title
        const string2 = input.title
        if(string1 === string2 && string2 !== productTitle) errors.title = "Producto ya existente";
      })
    }
    return errors;
    }  

    const handleSubmit = async (e) => {
        e.preventDefault();

        await putProduct({id, payload:{
            title: input.title,
            unit_price: input.unit_price,
            stock: input.stock,
            category: input.category,
            description: input.description,
            imgUrl: input.imgUrl,
          }}).unwrap();

        setInput({
          title: "",
          unit_price: 0,
          stock: 0,
          category: "",
          description: "",
          imgUrl: "",
        });

        alert("Producto Modificado");
        
        navigate("/tienda");

        window.location.reload();
      };

      const handleInputChange = function (e) {
          setInput({ ...input, [e.target.name]: e.target.value });
          setErrors(validate({ ...input, [e.target.name]: e.target.value }));
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
      <div>
      <br></br>
      <div>
          <Link to="/tienda">
            <button type="button">Back</button>
          </Link>
      </div>
      <div>
      <form onSubmit={(e) => handleSubmit(e)}>
      <div>
        
        <br/>
  
        <div>
        <label>Nombre del producto:</label>
        <input
          type="text"
          name="title"
          placeholder="Ingrese el nombre del producto"
          value={input.title}
          onChange={handleInputChange}
        />
        {errors.title && <p className={s.errors}>{errors.title}</p>}
        </div>

        <div>
        <label>Precio:</label>
        <input
          type="number"
          name="unit_price"
          min="0"
          placeholder="Ingrese valor del producto"
          value={input.unit_price}
          onChange={handleInputChange}
        />
        <br></br>
        {errors.unit_price && <p className={s.errors}>{errors.unit_price}</p>}
        </div>

        <div>
        <label>Stock:</label>
        <input
          type="number"
          name="stock"
          min="0"
          placeholder="Stock disponible"
          value={input.stock}
          onChange={handleInputChange}
        />
        <br></br>
        </div>

        <div>
        <label>Categoria:</label>
        <input
          type="text"
          name="category"
          placeholder="Ingrese categoria"
          value={input.category}
          onChange={handleInputChange}
        />
        <br></br>
        </div>

        <div>
        <label>Descripcion:</label>
        <input
          type="text"
          name="description"
          placeholder="Descripcion del producto"
          value={input.description}
          onChange={handleInputChange}
        />
        <br></br>
        </div>

        <div>
        <label>Imagen:</label>
        <input
          type="file"
          name="imgUrl"
          accept="image/png, image/jpeg"
          onChange={handlerImage}
        />
        <br></br>
        </div>

        <div>
        <input
          type="submit"
          value="submit"
          disabled={Object.entries(errors).length !== 0}
        />
        </div>
      </div>
    </form>
    
    </div>

  </div>
    )
}