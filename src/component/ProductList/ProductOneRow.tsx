import React from "react";
import { ProductEntity } from 'types';

import './ProductList.css'

interface Props {
    product: ProductEntity
    onProductChange: () => void
}
export const ProductOneRow = (props: Props) => {

    return (
        <tr className='oneItemInRow'>
            <td className='oneItemInRow__name oneItemInRow'>{props.product.name}</td>
            <td className='oneItemInRow__quantity oneItemInRow'>{props.product.quantity}</td>
        </tr>
    )

}
