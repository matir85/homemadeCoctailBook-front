import React, {ChangeEvent} from "react";
import {CoctailIngredients, ProductEntity} from "types";
import {FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";

import './AddCoctail.css'
import {SelectChangeEvent} from "@mui/material/Select/SelectInput";

interface Props {
    productList: ProductEntity[];
    handleIngredientFormChange: (index: number, event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement > |  SelectChangeEvent<string> ) => void;
    index: number;
    inputRow: CoctailIngredients;
}

export const ChoiceOfIngredient = (props: Props) => {

    return (
        <div className='ingredient__p'>
            <FormControl fullWidth sx={{mr: 2}} key={props.index}>
                <InputLabel id="demo-simple-select-label">Składnik {props.index + 1}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="ingredient"
                    name='ingredient'
                    value={props.inputRow.ingredient}
                    onChange={event => props.handleIngredientFormChange(props.index, event)}
                >
                    {
                        props.productList.map(product =>
                            <MenuItem
                                key={product.id}
                                value={product.id}
                            >{product.name}</MenuItem>
                        )
                    }
                </Select>
            </FormControl>
            <TextField
                id="outlined-number"
                label="ml"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                name='quantity'
                value={props.inputRow.quantity}
                onChange={event => props.handleIngredientFormChange(props.index, event)}
            />
        </div>
    )
}

