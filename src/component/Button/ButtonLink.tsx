import React from "react";
import {Link} from "react-router-dom";

import './Button.css'

interface Props {
    text: string
    to: string
}
export const ButtonLink = (props: Props) => {

    return (
        <Link to={props.to} className='btn link'>{props.text}</Link>
    )
}
