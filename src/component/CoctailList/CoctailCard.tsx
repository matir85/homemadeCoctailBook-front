import React, {useEffect, useState} from "react";
import {CoctailEntity, GetCoctailRecipe} from "types";
import {Card, CardActions, CardContent, CardHeader, Collapse, IconButton, Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {SingleRowComponent} from "./SingleRowComponent";

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


    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    if (!ingredients) {
        return (
            <div className="coctailCard">
                <p>{props.coctails.name}</p>
                <p>Brak składników tego koktajlu</p>
            </div>
        )
    }

    return (
        <div>
            <Card
                className='coctailCard'
                sx={{
                    backgroundColor: 'antiquewhite',
                    borderRadius: 5,
                }}
            >
<header className='coctailCard__header'>
    <h1>{props.coctails.name}</h1>
</header>
                <CardActions
                    disableSpacing
                    sx={{padding: '2px 0 0 10px'}}
                >
                    <IconButton
                        sx={[
                            {
                                transform: 'rotate(0deg)',
                                transition: (theme) => theme.transitions.create('all', {
                                    duration: theme.transitions.duration.shortest,
                                })
                            },
                            expanded && {
                                transform: 'rotate(180deg)'
                            },
                        ]
                        }
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon/>
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography>
                            {ingredients.map((ingradient, index) => <SingleRowComponent key={index} ingradient={ingradient.name} quantity={ingradient.quantity}/>)}
                        </Typography>
                        <Typography>
                            <p className='descriptionCocktail'>{props.coctails.description}</p>
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </div>
    )
}
