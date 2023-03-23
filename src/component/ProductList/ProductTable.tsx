import React from "react";
import { ProductEntity } from "types";
import { ProductOneRow } from "./ProductOneRow";

interface Props {
    products: ProductEntity[]
    onProductChange: () => void
}
export const ProductTable = (props: Props) => {

    return (
        <table className='tableProduct'>
            <thead>
            <tr>
                <th className='oneItemInRow__name oneItemInRow tableHead'>Produkt</th>
                <th className='oneItemInRow__quantity oneItemInRow tableHead'>Ilość w ml</th>
                <th className='oneItemInRow__delete oneItemInRow tableHead'>Usuń</th>
            </tr>
            </thead>
            <tbody>
            {
                props.products.map(product => <ProductOneRow key={product.id} product={product} onProductChange={props.onProductChange} />)
            }
            </tbody>
        </table>
    )
}
