import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Header} from "./component/Hrader/Header";

import {ProductList} from "./component/ProductList/ProductList";
import {AddProduct} from "./component/AddProduct/AddProduct";
import {CoctailList} from "./component/CoctailList/CoctailList";
import {AddCoctail} from "./component/AddCoctail/AddCoctail";
import './App.css';

export function App() {
    return (
        <>
            <Header/>
            <div className="App">
                <Routes>
                    <Route path='/product' element={<ProductList/>}/>
                    <Route path='/product/add' element={<AddProduct/>}/>
                    <Route path='/coctail' element={<CoctailList/>}/>
                    <Route path='/coctail/add' element={<AddCoctail/>}/>
                </Routes>
            </div>
        </>
    );
}
