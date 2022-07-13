import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { GlobalContext } from "../components/contextProvider/ContextProvider";
import { data as en } from "./en/data";

/**
 * Translator engine
 * @name T
 * @param key
 * @returns {*}
 * @constructor
 */
const T = ({ key }) => {
    const { dispatch, state } = useContext(GlobalContext);
    const { lang } = state || {};

    const [data, setData] = useState(null);

    /**
     * Default the selected language to English
     */
    useEffect(() => {
        if (!lang) {
            dispatch({
                type: "Lang",
                lang: "en"
            });
        }
    }, [dispatch, lang]);

    /**
     * If something other than English is selected, load that data file
     */
    useEffect(() => {
        if (lang && lang !== "en") {
            import(`./${lang}/data.jsx`)
                .then((res) => setData(res.data))
                .catch(() => {
                    toast.error("Unable to load translation", {
                        autoClose: false
                    });
                });
        }
    }, [lang]);

    if (lang === "en") {
        if (en[key]) {
            return en[key];
        }

        return key;
    }
    if (data) {
        if (data[key]) {
            return data[key];
        }
        if (en[key]) {
            return en[key];
        }
    }

    return key;
};

T.propTypes = {
    key: PropTypes.string.isRequired
};

export default T;
