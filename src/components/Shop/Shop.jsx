import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGetAllProductsQuery } from "../../redux/query/ApiEcommerce";
import HeaderBtn from "../HeaderBtn/HeaderBtn";
import ContainerFilters from "../ContainerFilters/ContainerFilters";
import NavBar from "../NavBar/NavBar";
import Products from "../Products/Products";
import style from "./Shop.module.css";
import Loading from "../Loading/Loading";
import { productToPay, checkOutProduct } from "../../redux/actions/defaultAction";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { Productos, Price } from "./DatosFilter";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import style2 from "./Filters.module.css";

const Shop = () => {

  const dispatch = useDispatch();

  function handlerCheckOutBuy(event) {
    event.preventDefault();
    let items = [];
    let keys = Object.keys(localStorage);
    let index = keys.length;
    while (index--) {
      items.push(JSON.parse(localStorage.getItem(keys[index])));
    }
    const checkOut = {
      // array no puede ser vacio, reveer notification, pagina thankyou
      items: items,
      auto_return: "approved",
      notification_url: "https://www.success.com/",
      back_urls: {
        success: "http://127.0.0.1:5173/approve",
        failure: "http://www.facebook.com/",
        pending: "http://www.pending.com/",
      },
    };
    dispatch(productToPay(checkOut));
  }

  function handlerDirectBuy(event, data) {
    event.preventDefault();
    const checkOut = {
      items: [data[0]],
      auto_return: "approved",
      notification_url: "https://www.success.com/",
      back_urls: {
        success: "http://127.0.0.1:5173/approve",
        failure: "http://www.facebook.com/",
        pending: "http://www.pending.com/",
      },
    };
    dispatch(productToPay(checkOut));
  }

  /* ACA EMPIEZAN LOS FILTROS, SORRY POR EL LIO*/

  // const { routinesFilters, setRoutinesFilters } = useFilter();
  const location = useLocation().state;
  const baseFilter = location
    ? routinesFilters
    : {
        category: "",
        min: 0,
        max: 0,
        letra: "",
      };
  const [input, setInput] = useState(baseFilter);

  const handlerCheck = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    name === "category" && setInput({ ...input, [name]: value });
    if (name === "price") {
      value === "a" && setInput({ ...input, max: 1000, letra: "a" });
      value === "b" && setInput({ ...input, min: 1000, max: 1500, letra: "b" });
      value === "c" && setInput({ ...input, min: 1500, max: 2000, letra: "c" });
      value === "d" && setInput({ ...input, min: 2000, max: 3000, letra: "d" });
      value === "e" && setInput({ ...input, min: 3000, letra: "e" });

      /*
 Menos de 1000", a
  "1000 - 1500", b
  "1500 - 2000", c
  "2000 - 3000", d
  "Mas de 3000", e
*/
    }
  };

  const aux = {};


  for (const a in input) {
    if (input[a].length > 0 || input[a] > 0) aux[a] = input[a];
  }

  const { data, isLoading } = useGetAllProductsQuery(aux);

  if (isLoading) return <Loading />;

  return (
    <div>
      <NavBar />
      <div className={style.mainContainer}>
        {/* <ContainerFilters filters={allFilters} /> */}
        {/* FILTROS */}
        <div className={style2.allContainer}>
          {/* FILTRO DE PRODUCTOS*/}
          <div className={style2.mainContainer}>
            <div className={style2.titleContainer}>
              <h3>{Productos.title}</h3>
            </div>
            <div className={style2.checksContainer}>
              <RadioGroup>
                {Productos.value.map((checkboxes, i) => (
                  <FormControlLabel
                    key={i}
                    control={
                      <Radio
                        sx={{ padding: "6px" }}
                        value={checkboxes}
                        onChange={handlerCheck}
                      />
                    }
                    checked={input.category === checkboxes}
                    label={checkboxes}
                    name={Productos.name}
                    sx={{ marginRight: "0px", marginLeft: "-10px" }}
                  />
                ))}
              </RadioGroup>
            </div>
          </div>
          {/* FILTRO DE PRECIO*/}
          <div className={style2.mainContainer}>
            <div className={style2.titleContainer}>
              <h3>{Price.title}</h3>
            </div>
            <div className={style2.checksContainer}>
              <RadioGroup>
                {Price.value.map((checkboxes, i) => (
                  <FormControlLabel
                    key={i}
                    control={
                      <Radio
                        sx={{ padding: "6px" }}
                        value={checkboxes}
                        onChange={handlerCheck}
                      />
                    }
                    checked={input.letra === checkboxes}
                    label={Price.label[i]}
                    name={Price.name}
                    sx={{ marginRight: "0px", marginLeft: "-10px" }}
                  />
                ))}
              </RadioGroup>
            </div>
          </div>
          <Button variant="contained" onClick={() => setInput()}>
            {" "}
            Limpiar Filtros{" "}
          </Button>
        </div>
        <div className={style.cardsContainer}>
          <HeaderBtn title={"Tienda virtual"} />
          <Products products={data} />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />    
      <button onClick={(event) => handlerDirectBuy(event, data)}>
        Compra Directa
      </button>
    </div>
  );
};

export default Shop;
