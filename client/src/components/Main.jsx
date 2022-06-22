import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { GlobalContext } from "./contextProvider/ContextProvider";
import RbA from "./rba/RbA";
import BreadCrumb from "./breadcrumb/BreadCrumb";
import FormPage from "./formComponents/FormPage";
import Header from "./header/Header";
import StudentTile from "./studentTile/StudentTile";

import "../styles/Main.scss";
import Spoofer from "./spoofer/Spoofer";

/**
 * Scaffolding page
 * @name Main
 * @return {JSX.Element}
 * @constructor
 */
const Main = () => {
    const { studentNumber } = useParams();

    const { dispatch, state } = useContext(GlobalContext);
    const { mapId, token, username } = state || {};

    const allowedRolesArray = ["EMPLOYEE", "EXTERNAL_GUARDIAN", "GUARDIAN"];

    /**
     * STUDENT NUMBER > CONTEXT
     * Push the studentNumber into context
     */
    useEffect(() => {
        if (studentNumber) {
            dispatch({
                type: "StudentNumber",
                studentNumber
            });
        }
    }, [dispatch, studentNumber]);

    return (
        <RbA allowedRoles={allowedRolesArray} redirect="/notFound">
            <ToastContainer />
            <Header />
            <BreadCrumb />
            <div className="gutter">
                <StudentTile />
                <FormPage />
            </div>
            <hr />
            <br />
            <a href="/echeckin/229523">echeckin with studentNumber</a>
            {process.env.NODE_ENV !== "production" && <Spoofer />}
        </RbA>
    );
};

export default Main;
