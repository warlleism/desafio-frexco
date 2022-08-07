import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const Main = React.lazy(() => import("../view/body"));
const Info = React.lazy(() => import("../view/info"));


export default function Rotas() {
    return (
        <Router>

            <Routes>

                <Route path="/"
                    exact
                    element={
                        <React.Suspense fallback='Carregando...'>
                            <Main />
                        </React.Suspense>
                    } />

                <Route path="/info"
                    exact
                    element={
                        <React.Suspense fallback='Carregando...'>
                            <Info />
                        </React.Suspense>
                    } />

            </Routes>

        </Router >
    )
}