import React from "react";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";
import RbA from "./rba/RbA";
import BreadCrumb from "./breadcrumb/BreadCrumb";
import Header from "./header/Header";
import Spoofer from "./spoofer/Spoofer";
import UserDetails from "../utils/UserDetails";
import TranslationButton from "./formInputs/buttons/TranslationButton";
import CardContainer from "./cardContainer/CardContainer";

import "../styles/Main.scss";

/**
 * Scaffolding page
 * @name Main
 * @return {JSX.Element}
 * @constructor
 */
const Main = () => {
    const allowedRolesArray =
        process.env.NODE_ENV !== "production"
            ? ["EMPLOYEE", "EXTERNAL_GUARDIAN", "GUARDIAN"]
            : ["ECHECKIN_ADMIN", "EXTERNAL_GUARDIAN", "GUARDIAN"];

    const userDetails = UserDetails();

    return (
        <RbA allowedRoles={allowedRolesArray} redirect="/notFound">
            <ToastContainer />
            <Header />
            <section className="translation-buttons-container">
                <TranslationButton
                    label="English"
                    onClick={() => {
                        dispatch({
                            type: "Lang",
                            lang: "en"
                        });
                    }}
                />
                <TranslationButton
                    label="Español"
                    onClick={() => {
                        dispatch({
                            type: "Lang",
                            lang: "es"
                        });
                    }}
                />
                <TranslationButton
                    label="普通話"
                    onClick={() => {
                        dispatch({
                            type: "Lang",
                            lang: "zh"
                        });
                    }}
                />
                <TranslationButton
                    label="Русский"
                    onClick={() => {
                        dispatch({
                            type: "Lang",
                            lang: "ru"
                        });
                    }}
                />
            </section>
            <BreadCrumb />
            <div className="gutter-guardian-dashboard">
                <CardContainer />
            </div>

            <hr />
            <br />
            {process.env.NODE_ENV !== "production" && <Spoofer />}
        </RbA>
    );
};

export default Main;
