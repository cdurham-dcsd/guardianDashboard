import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Main from "./components/Main";
import NotFound from "./components/NotFound";
//import PrivateRoute from "./components/privateRoute/PrivateRoute";

const App = () => {
    return (
        <Router>
            <Routes>
                {/*<Route path="/" exact element={<PrivateRoute />}>*/}
                    <Route path="/" exact element={<Main />} />
                {/*</Route>}*/}
                <Route path="/transportation" exact element={<Main />}>
                    <Route path=":studentNumber" element={<Main />}>
                        <Route path=":mapId" element={<Main />}>
                            <Route path=":status" element={<Main />} />  
                        </Route>
                    </Route>
                </Route>
                <Route path="/notFound" exact element={<NotFound />} />
                <Route default element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default App;
