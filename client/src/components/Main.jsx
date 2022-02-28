import React from "react";
import { useParams } from "react-router-dom";
import BreadCrumb from "./breadcrumb/BreadCrumb";
import FormPage from "./formComponents/FormPage";
import Header from "./header/Header";
import StudentTile from "./studentTile/StudentTile";

import "../styles/Main.scss";

/**
 * Scaffolding page
 * @name Main
 * @return {JSX.Element}
 * @constructor
 */
const Main = () => {
    const { studentNumber } = useParams();
    //  console.log("student number: " , studentNumber);
    return (
        <>
            <Header />
            <BreadCrumb />
            <div className="gutter">
                <StudentTile studentNumber={studentNumber} />
                <FormPage />
            </div>
        </>
    );
};

export default Main;
