import React, {useEffect, useState} from "react";
import {ProductEntity} from "types";
import { ProductTable } from "./ProductTable";
import {ButtonLink} from "../Button/ButtonLink";
import {Spinner} from "../Spinner/Spinner";

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

    if(!productList) return <Spinner/>

    return (
        <div className='productList'>
            <h1 className='info__header_productList'>Lista dostępnych produktów do mieszania</h1>
            <ProductTable products={productList} onProductChange={refreshProductList}/>
            <ButtonLink text={'Dodaj'} to={'/product/add'}/>
        </div>
    )
}
