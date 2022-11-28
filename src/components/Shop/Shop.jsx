import React, { useEffect, useState } from "react";
import { useGetAllProductsQuery } from "../../redux/query/ApiEcommerce";
import HeaderBtn from "../HeaderBtn/HeaderBtn";
import NavBar from "../NavBar/NavBar";
import Products from "../Products/Products";
import style from "./Shop.module.css";
import Loading from "../Loading/Loading";
import { setPurchase } from "../../redux/actions/defaultAction";
import { seterItem } from "../../redux/actions/defaultAction";
import { useDispatch, useSelector } from "react-redux";
import { Productos, Price, Size } from "./DatosFilter";
import {
  Button,
  createTheme,
  FormControlLabel,
  Pagination,
  Radio,
  RadioGroup,
  ThemeProvider,
} from "@mui/material";
import style2 from "./Filters.module.css";
import { useFilterShop } from "./FiltersShopContext";

const Shop = () => {
  const dispatch = useDispatch();
  const { itemCheckOut } = useSelector((state) => state.itemCheckOut);
  const [renderShop, setRenderShop] = useState("");

  const urlChanged = window.location.search;
  const urlParams = new URLSearchParams(urlChanged);
  const purchaseStatus = {
    payed: urlParams.get("status"),
    paymentMethod: urlParams.get("payment_type"),
    purchaseId: urlParams.get("preference_id"),
  };

  useEffect(() => {
    if (purchaseStatus.payed === "approved") {
      dispatch(setPurchase(purchaseStatus));
      handlerClearCheckOut();
    }
  }, []);

  function handerRenderShop(data) {
    setRenderShop(data);
  }

  function handlerClearCheckOut() {
    for (var i = 0; i < itemCheckOut.length; i++) {
      localStorage.removeItem(`item_${itemCheckOut[i].title}`);
    }
    dispatch(seterItem(localStorage));
  }

  /* ACA EMPIEZAN LOS FILTROS, SORRY POR EL LIO*/

  const { shopFilters, setShopFilters } = useFilterShop();

  const [input, setInput] = useState({
    category: "",
    min: 0,
    max: 0,
    size: 10,
    page: 1,
    letra: "",
  });

  const handlerCheck = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    name === "category" && setInput({ ...input, [name]: value, page: 1 });
    name === "category" &&
      setShopFilters({ ...shopFilters, [name]: value, page: 1 });
    if (name === "price") {
      value === "a" &&
        setInput({ ...input, min: 0, max: 1000, page: 1, letra: "a" });
      value === "b" &&
        setInput({ ...input, min: 1000, max: 1500, page: 1, letra: "b" });
      value === "c" &&
        setInput({ ...input, min: 1500, max: 2000, page: 1, letra: "c" });
      value === "d" &&
        setInput({ ...input, min: 2000, max: 3000, page: 1, letra: "d" });
      value === "e" &&
        setInput({ ...input, min: 3000, max: Infinity, page: 1, letra: "e" });
      /********************** CONTEXT *****************************************/
      value === "a" &&
        setShopFilters({
          ...shopFilters,
          min: 0,
          max: 1000,
          page: 1,
          letra: "a",
        });
      value === "b" &&
        setShopFilters({
          ...shopFilters,
          min: 1000,
          max: 1500,
          page: 1,
          letra: "b",
        });
      value === "c" &&
        setShopFilters({
          ...shopFilters,
          min: 1500,
          max: 2000,
          page: 1,
          letra: "c",
        });
      value === "d" &&
        setShopFilters({
          ...shopFilters,
          min: 2000,
          max: 3000,
          page: 1,
          letra: "d",
        });
      value === "e" &&
        setShopFilters({
          ...shopFilters,
          min: 3000,
          max: Infinity,
          page: 1,
          letra: "e",
        });
    }
  };

  const aux = {};
  for (const a in shopFilters) {
    if (a === "page" || a === "size" || a === "letra") {
      continue;
    } else if (shopFilters[a].length > 0 || shopFilters[a] > 0)
      aux[a] = shopFilters[a];
  }

  for (const a in input) {
    if (a === "page" || a === "size" || a === "letra") {
      continue;
    } else if (input[a].length > 0 || input[a] > 0) aux[a] = input[a];
  }
  /***********************************/
  /*************PAGINADO**************/
  /***********************************/

  const handlerSize = (e) => {
    let size = parseInt(e.target.value);
    let name = e.target.name;
    setInput({ ...input, [name]: size });
    setShopFilters({ ...shopFilters, [name]: size });
  };
  const handlerPage = (e, p) => {
    setInput({ ...input, page: p });
    setShopFilters({ ...shopFilters, page: p });
  };

  const clear = (e) => {
    setInput({
      category: "",
      min: 0,
      max: 0,
      letra: "",
      size: 10,
      page: 1,
    });
    setShopFilters({
      category: "",
      min: 0,
      max: 0,
      letra: "",
      size: 10,
      page: 1,
    });
  };

  let page = 0;
  let size = 0;
  input.page !== shopFilters.page
    ? (page = shopFilters.page - 1)
    : (page = input.page - 1);
  input.size !== shopFilters.size
    ? (size = shopFilters.size)
    : (size = input.size);
  const { data, isLoading, isSuccess } = useGetAllProductsQuery({
    data: aux,
    page,
    size,
  });

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
                        sx={{
                          padding: "6px",
                          color: "#0d0d6b",
                          "&.Mui-checked": {
                            color: "#0d0d6b",
                          },
                        }}
                        value={checkboxes}
                        onChange={handlerCheck}
                      />
                    }
                    checked={
                      input.category === checkboxes ||
                      shopFilters.category === checkboxes
                    }
                    label={checkboxes}
                    name={Productos.name}
                    sx={{
                      marginRight: "0px",
                      marginLeft: "-10px",
                      color: "#2d2d2d",
                    }}
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
                        sx={{
                          padding: "6px",
                          color: "#0d0d6b",
                          "&.Mui-checked": {
                            color: "#0d0d6b",
                          },
                        }}
                        value={checkboxes}
                        onChange={handlerCheck}
                      />
                    }
                    checked={
                      input.letra === checkboxes ||
                      shopFilters.letra === checkboxes
                    }
                    label={Price.label[i]}
                    name={Price.name}
                    sx={{
                      marginRight: "0px",
                      marginLeft: "-10px",
                      color: "#2d2d2d",
                    }}
                  />
                ))}
              </RadioGroup>
            </div>
          </div>
          <div className={style2.allContainer}>
            {/* FILTRO DE SIZE*/}
            <div className={style2.mainContainer}>
              <div className={style2.titleContainer}>
                <h3>{Size.title}</h3>
              </div>
              <div className={style2.checksContainer}>
                <RadioGroup>
                  {Size.value.map((checkboxes, i) => (
                    <FormControlLabel
                      key={i}
                      control={
                        <Radio
                          sx={{
                            padding: "6px",
                            color: "#0d0d6b",
                            "&.Mui-checked": {
                              color: "#0d0d6b",
                            },
                          }}
                          value={checkboxes}
                          onChange={handlerSize}
                        />
                      }
                      checked={
                        input.size !== shopFilters.size
                          ? shopFilters.size === checkboxes
                          : input.size === checkboxes
                      }
                      label={Size.label[i]}
                      name={Size.name}
                      sx={{
                        marginRight: "0px",
                        marginLeft: "-10px",
                        color: "#2d2d2d",
                      }}
                    />
                  ))}
                </RadioGroup>
              </div>
            </div>
          </div>
          <Button
            variant="contained"
            onClick={clear}
            sx={{
              background: "#0d0d6b",
              "&:hover": {
                backgroundColor: "#62629f",
                transition: "0.4s",
              },
            }}
          >
            Limpiar Filtros
          </Button>
        </div>
        <div className={style.cardsContainer}>
          <HeaderBtn title={"Tienda virtual"} />
          <Products products={data.products} render={handerRenderShop} />
        </div>
      </div>
      <div className={style.pagintionContainer}>
        <ThemeProvider theme={theme}>
          <Pagination
            count={data.totalPages}
            color="primary"
            size="large"
            page={input.page && shopFilters.page}
            onChange={handlerPage}
          />
        </ThemeProvider>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

const theme = createTheme({
  palette: {
    primary: {
      main: "#0d0d6b",
      darker: "#053e85",
    },
  },
});

export default Shop;
