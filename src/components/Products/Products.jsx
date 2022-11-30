import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import style from "./Products.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Products = ({ products, render, role }) => {
  const handlerAlertSuccess = () => {
    toast.success("¡Producto agregado al carrito!", {
      position: "bottom-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const handlerAlertError = () => {
    toast.error("El producto no se pudo agregar porque ya está en el carrito", {
      position: "bottom-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <>
      <div className={style.mainContainer}>
        {products?.map((product, i) => (
          <ProductCard
            key={i}
            id={product.id}
            title={product.title}
            unit_price={product.unit_price}
            description={product.description}
            picture_url={product.imgUrl}
            stock={product.stock}
            quantity={1}
            render={render}
            handlerAlertSuccess={handlerAlertSuccess}
            handlerAlertError={handlerAlertError}
            role={role}
          />
        ))}
      </div>
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="colored"
      />
    </>
  );
};

export default Products;
