import React, {useEffect, useState} from "react";
import {CoctailEntity, GetCoctailRecipe} from "types";

interface Props {
    coctails: CoctailEntity
}

export const CoctailCard = (props: Props) => {

    const [ingredients, setIngradients] = useState<GetCoctailRecipe[] | null>(null)

    const cocktailIngredients = async () => {
        const res = await fetch(`http://localhost:3001/cocktail-recipe/${props.coctails.id}`, {
            headers: {}
        })
        const data = await res.json()
        console.log(data)
        setIngradients(data)
    }

    useEffect(() => {
        cocktailIngredients()
    }, [])

    if (!ingredients) {
        return (
            <div className="coctailCard">
                <p>{props.coctails.name}</p>
                <p>Brak składników tego koktajlu</p>
            </div>
            )
    }

    return (
        <div className="coctailCard">
            <p>{props.coctails.name}</p>
            {ingredients.map(ingradient => <p className='ingradientRow'>{`${ingradient. name} ${ingradient.quantity}ml`}</p>)}
            <p className='descriptionCocktail'>{props.coctails.description}</p>
        </div>
    )
}
