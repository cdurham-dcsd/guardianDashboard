import React from "react";
import Header from "../../components/header/Header";

/**
 * Scaffolding page
 * @name Main
 * @return {JSX.Element}
 * @constructor
 */
const Main = () => {
    return (
        <>
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
