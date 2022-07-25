import React, { useEffect } from "react";
import "@fontsource/montserrat";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import "./App.scss";
import Main from "./components/Main";
import NotFound from "./components/NotFound";
import PrivateRoute from "./components/privateRoute/PrivateRoute";

const App = () => {
    const { studentNumber } = useParams();
    const navigate = useNavigate();
    const sessionStudentNumber = JSON.parse(
        sessionStorage.getItem("student-number")
    );

    useEffect(() => {
        if (!studentNumber && sessionStudentNumber) {
            navigate(`/transportation/${sessionStudentNumber}`);
        }
    }, [navigate, sessionStudentNumber, studentNumber]);

    return (
        <Routes>
            <Route path="/" exact element={<PrivateRoute />}>
                <Route path="/" exact element={<Main />} />
            </Route>
            <Route path="/transportation" exact element={<PrivateRoute />}>
                <Route path="/transportation" exact element={<Main />} />
            </Route>
            <Route
                path="/transportation/:studentNumber"
                element={<PrivateRoute />}
            >
                <Route
                    path="/transportation/:studentNumber"
                    element={<Main />}
                />
            </Route>
            <Route path="/notFound" exact element={<NotFound />} />
            <Route default element={<NotFound />} />
        </Routes>
    );
};

export default App;
