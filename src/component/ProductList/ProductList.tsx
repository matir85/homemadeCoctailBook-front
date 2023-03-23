import React, {useEffect, useState} from "react";
import {ProductEntity} from "types";
import { ProductTable } from "./ProductTable";
import {ButtonLink} from "../Button/ButtonLink";

export const ProductList = () => {

    const [productList, setProductList] = useState<ProductEntity[] | null>(null)

    const refreshProductList = async () => {
        const res = await fetch('http://localhost:3001/product', {
            headers: {}
        })
        const data = await res.json()
        setProductList(data.productList)
    }

    useEffect(()=>{
        refreshProductList()
    },[])

    if(!productList) return <p>Pusty barek</p>

    return (
        <div className='productList'>
            <ProductTable products={productList} onProductChange={refreshProductList}/>
            <ButtonLink text={'Dodaj'} to={'/product/add'}/>
        </div>
    )
}
