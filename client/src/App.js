import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Main from "./formPages/main/Main";
import NotFound from "./formPages/notFound/NotFound";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Main />} />
                <Route path="/transportation" exact element={<Main />}>
                    <Route path=":studentNumber" element={<Main />}>
                        <Route path=":mapId" element={<Main />} />
                    </Route>
                </Route>
                <Route path="/notFound" exact element={<NotFound />} />
                <Route default element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default App;
