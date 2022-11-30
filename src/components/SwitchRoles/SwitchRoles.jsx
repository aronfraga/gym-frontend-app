import React, { useState } from "react";
import { useGetAllUsersQuery, useSetNewRoleMutation } from "../../redux/query/api";
import { Link, useNavigate } from "react-router-dom";
import { uploadImage } from "../FormRoutines/uploadImage.js";
import Loading from '../Loading/Loading';
import { ToastContainer, toast } from "react-toastify";


export default function SwitchRoles(){

    const navigate = useNavigate()

    const {data,isLoading,isSuccess} = useGetAllUsersQuery();

    const [setNewRole] = useSetNewRoleMutation()

      if (isLoading) return <Loading />;

    const handlerChanged = () => {
        toast.error("¡Role cambiado!", {
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

    const handleChangeRole = (event,id,role) => {

        event.preventDefault();

        const newRole = role === "Staff" ? "User" : "Staff"

        setNewRole({
            idUser: id,
            newRole: newRole
        })

        handlerChanged()
		setTimeout(function(){
			window.location.reload()
		}, 2000)

    }

    return (
      <div>
      {data?.map( (e,idx) => {
        return(
        <div key={idx}>
            <p>{e.name} - {e.email} - Role Actual: {e.role}</p> <button onClick={(event) => handleChangeRole(event,e.id,e.role)} hidden={e.role === "Admin"? true : false}>Cambiar role a {e.role === "Staff" ? "usuario" : "que tal"}</button>
        </div>
        )
      })}
      <ToastContainer
				position='bottom-left'
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover={false}
				theme='colored'
			/>
  </div>
    )
}