import React from "react";
import { useParams } from "react-router-dom";
import BreadCrumb from "./breadcrumb/BreadCrumb";
import FormPage from "./formComponents/FormPage";
import Header from "./header/Header";
import StudentTile from "./studentTile/StudentTile";

/**
 * Scaffolding page
 * @name Main
 * @return {JSX.Element}
 * @constructor
 */
const Main = () => {
    const { studentNumber } = useParams();
    console.log("student number: " , studentNumber);
    return (
        <>
            <Header />
            <BreadCrumb />
            <StudentTile studentNumber={studentNumber} />
            <FormPage />
            <div className="App">
                <h1>Hello, World!</h1>
            </div>
            <p>Click the button below to see if you are connected</p>
            <form action="/post" method="post" className="form">
                <button type="submit">Connected?</button>
            </form>
        </>
    );
};

export default Main;
