import React from "react";

interface Props {
    ingradient: string,
    quantity: number
}
export const SingleRowComponent = (props: Props) => {

    return (
<table>
    <tbody>
<tr className='ingradientRow'>
    <td className='ingradientRow__ingradient'>{props.ingradient}</td>
    <td className='ingradientRow__quantity'>{props.quantity}</td>

</tr>
    </tbody>
</table>
    )
}
