import React, {useEffect} from "react";
import {staticstaff} from "./Helpers.js"; 
import CardStaff from "../CardStaff/CardStaff.jsx";
import Style from "./Staff.module.css";

const Staff = () => {
    return (
        <div className={Style.mainwrapper}>
            <h1 className={Style.stafftittle}>Staff Técnico</h1>
            <div className={Style.cardswrapper}>
                {staticstaff?.map(staff => 
                    <CardStaff  key = {staff.hashPassword}
                                name = {staff.name}
                                linkedin = {staff.linkedin}
                                rating = {staff.rating}
                                img = {staff.picture}
                    />)
                }
            </div>
        </div>
    );
}
export default Staff;