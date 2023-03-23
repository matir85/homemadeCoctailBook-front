import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Header} from "./component/Hrader/Header";

import './App.css';
import {ProductList} from "./component/ProductList/ProductList";
import {AddProduct} from "./component/AddProduct/AddProduct";

export function App() {
    return (
        <>
            <Header/>
            <div className="App">
                <Routes>
                    <Route path='/product' element={<ProductList/>}/>
                    <Route path='/product/add' element={<AddProduct/>}/>
                </Routes>
            </div>
        </>
    );
}
