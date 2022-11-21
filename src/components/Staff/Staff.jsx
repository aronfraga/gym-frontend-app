import React, { useEffect } from "react";
import { staticstaff } from "./Helpers.js";
import { fetchGetAllStaff } from "../../redux/actions/defaultAction.js";
import { useSelector, useDispatch } from "react-redux";
import CardStaff from "../CardStaff/CardStaff.jsx";
import Style from "./Staff.module.css";
import NavBar from "../NavBar/NavBar.jsx";
import Footer from "../Footer/Footer.jsx";

const Staff = () => {
  const dispatch = useDispatch();
  const { staff } = useSelector((state) => state.staff);
  useEffect(() => {
    dispatch(fetchGetAllStaff());
  }, [dispatch]);
  return (
    <>
      <NavBar />
      <div className={Style.mainwrapper}>
        {/* {console.log(staff)} */}
        <h1 className={Style.stafftittle}>Staff Técnico</h1>
        <hr className={Style.divisionline}></hr>
        <div className={Style.cardswrapper}>
          {staticstaff?.map((staff) => (
            <CardStaff
              key={staff.hashPassword}
              name={staff.name}
              linkedin={staff.linkedin}
              rating={staff.rating}
              img={staff.picture}
              mail={staff.email}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Staff;
