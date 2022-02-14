import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import Main from "./formPages/main/Main";
import NotFound from "./formPages/notFound/NotFound";

const App = () => {
    return (
        <Router>
            <Routes>
                {/* <Route path="/" exact element={<PrivateRoute />}> */}
                <Route path="/" exact element={<Main />} />
                {/* </Route> */}
                {/* <Route path="/transportation" element={<PrivateRoute />}> */}
                <Route path="/transportation" exact element={<Main />}>
                    <Route path=":studentNumber" element={<Main />}>
                        <Route path=":mapId" element={<Main />} />
                    </Route>
                </Route>
                {/* </Route> */}
                <Route path="/notFound" exact element={<NotFound />} />
                <Route default element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default App;
