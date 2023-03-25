import React from "react";
import { CoctailEntity } from "types";

interface Props {
    coctails: CoctailEntity
}
export const CoctailCard = (props: Props) => {

    return(
        <div className="coctailCard">
            {props.coctails.name}
        </div>
    )
}
