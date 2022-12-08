import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Routines from "./components/Routines/Routines";
import Staff from "./components/Staff/Staff";
import FeedBack from "./components/FeedBack/FeedBack";
import FormRoutines from "./components/FormRoutines/FormRoutines";
import DetailRoutine from "./components/DetailRoutine/DetailRoutine";
import Facilities from "./components/Facilities/Facilities";
import Shop from "./components/Shop/Shop";
import Shopping from "./components/Shopping/Shopping";
import Calendar from "./components/Calendar/Calendar";
import Dashboard from "./components/Dashboard/Dashboard";
import ProductsDetail from "./components/ProductsDetail/ProductsDetail";
import Profile from "./components/Profile/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import { getToken } from "./services/cookies";
import { ProtectedRoute } from "./components/ProtectedRoute";
import FormProducts from "./components/FormProducts/FormProducts";
import EditProduct from "./components/FormProducts/EditProduct";
import FormCalendar from "./components/Calendar/FormCalendar";
import PutClasses from "./components/Calendar/PutClasses";
import GetFeedbacks from "./components/FeedBack/GetFeedbacks";

import SelectPlan from "./components/SelectPlan/SelectPlan";
import SwitchRoles from "./components/SwitchRoles/SwitchRoles";

function App() {
  const { isAuthenticated } = useAuth0();
  const [role, setRole] = useState();

  useEffect(() => {
    if (isAuthenticated) {
      if (getToken()) setRole(getToken().userRole);
      else setRole("TimeOut");
      if (role === "TimeOut") setRole("");
    }
  }, [isAuthenticated, getToken(), role]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="/tienda" element={<Shop />} />
        <Route path="/tienda/:status" element={<Shop />} />
        <Route path="/tienda/carrito" element={<Shopping />} />
        <Route path="/tienda/producto/:id" element={<ProductsDetail />} />
        <Route path="/agenda/crear" element={<FormCalendar />} />
        <Route path="/instalaciones" element={<Facilities />} />
        <Route path="/agenda" element={<Calendar />} />
        <Route path="/rutinas" element={<Routines />} />
        <Route path="/rutinas/:id" element={<DetailRoutine />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/feedback" element={<FeedBack />} />
        <Route path="/planes" element={<SelectPlan />} />
        <Route
          element={
            <ProtectedRoute
              isAllowed={!!role && (role === "Admin" || role === "Staff")}
              redirecrTo={"/*"}
            />
          }
        >
          <Route path="/classes/:id" element={<PutClasses />} />
          <Route path="/rutinas/crear" element={<FormRoutines />} />
        </Route>
        <Route
          element={
            <ProtectedRoute
              isAllowed={!!role && role === "Admin"}
              redirecrTo={"/*"}
            />
          }
        >
          <Route path="/admdashboard/products/:id" element={<EditProduct />} />
          <Route path="/admdashboard/products" element={<FormProducts />} />
          <Route path="/admdashboard/feedbacks" element={<GetFeedbacks />} />
          <Route path="/admdashboard/roles" element={<SwitchRoles />} />
          <Route path="/admdashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
