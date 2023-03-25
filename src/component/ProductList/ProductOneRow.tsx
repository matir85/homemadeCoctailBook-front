import React, {MouseEvent} from "react";
import { ProductEntity } from 'types';

import './ProductList.css'

interface Props {
    product: ProductEntity
    onProductChange: () => void
}
export const ProductOneRow = (props: Props) => {

    const deleteProduct = async (e: MouseEvent) => {
        e.preventDefault()

        if (!window.confirm(`Czy aby na pewno chcesz usunąć ${props.product.name}`)) {
            return
        }

        const res = await fetch(`http://localhost:3001/product/${props.product.id}`, {
            method: 'DELETE',
        });


        if ([400, 500].includes(res.status)) {
            const error = await res.json()
            alert(error.message)
            return
        }

        props.onProductChange()

    };
    return (
        <tr className='oneItemInRow'>
            <td className='oneItemInRow__name oneItemInRow'>{props.product.name}</td>
            <td className='oneItemInRow__quantity oneItemInRow'>{props.product.quantity}</td>
            <td className='oneItemInRow__delete'>
                <a href="#"  onClick={deleteProduct} className='link btn_delete'>🗑️</a>
            </td>
        </tr>
    )

}
