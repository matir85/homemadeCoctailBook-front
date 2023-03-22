import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Header} from "./component/Hrader/Header";

import './App.css';
import {ProductList} from "./component/ProductList/ProductList";

export function App() {
    return (
        <>
            <Header/>
            <div className="App">
                <Routes>
                    <Route path='/product' element={<ProductList/>}/>
                </Routes>
            </div>
        </>
    );
}
