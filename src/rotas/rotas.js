import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const Main = React.lazy(() => import("../view/body"));
const Nutrition = React.lazy(() => import("../view/nutrition"));


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

                <Route path="/nutrition"
                    exact
                    element={
                        <React.Suspense fallback='Carregando...'>
                            <Nutrition />
                        </React.Suspense>
                    } />
                    
            </Routes>

        </Router >
    )
}