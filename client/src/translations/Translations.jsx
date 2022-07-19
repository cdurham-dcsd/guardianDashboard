import { useContext } from "react";
import PropTypes from "prop-types";
import { GlobalContext } from "../components/contextProvider/ContextProvider";
import { data as en } from "./en/data";
import { data as es } from "./es/data";
import { data as ru } from "./ru/data";
import { data as zh } from "./zh/data";

/**
 * Translator engine
 * @name T
 * @param key
 * @returns {*}
 * @constructor
 */
const T = ({ key }) => {
    const { state } = useContext(GlobalContext);
    const { lang } = state || {};

    const myLang = lang || "en";
    switch (myLang) {
        case "en":
            if (en[key]) {
                return en[key];
            }
            break;
        case "es":
            if (es[key]) {
                return es[key];
            }
            break;
        case "ru":
            if (ru[key]) {
                return ru[key];
            }
            break;
        case "zh":
            if (zh[key]) {
                return zh[key];
            }
            break;
        default:
            break;
    }

    return en[key] ? en[key] : key;
};

T.propTypes = {
    key: PropTypes.string
};

T.defaultProps = {
    key: null
};

export default T;
