import React, {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {CoctailDescription, CoctailIngredients, ProductEntity} from "types";

import {Spinner} from "../Spinner/Spinner";
import {ChoiceOfIngredient} from "./ChoiceOfIngredient";
import {TextField} from "@mui/material";
import {SelectChangeEvent} from "@mui/material/Select/SelectInput";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import './AddCoctail.css';

export const AddCoctail = () => {

    const [formIngredient, setFormIngredient] = useState<CoctailIngredients[]>([
        {
            ingredient: '',
            quantity: 0,
        },
    ])

    const [formName, setFormName] = useState<CoctailDescription>({
        name: '',
        description: ''
    })


    const handleIngredientFormChange = (index: number, event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>) => {
        let newFormIngredient = formIngredient.map((singleRow, i) => {
            if (index === i) {
                return {...singleRow, [event.target.name]: event.target.value}
            } else return singleRow
        })
        setFormIngredient(newFormIngredient)
    }

    const handleNameFormChange = (key: string, value: string) => {
        setFormName(formName => ({
            ...formName,
            [key]: value
        }))
    }


    const addRowIngredient = () => {
        let newRowIngredient = {ingredient: '', quantity: 0}
        setFormIngredient([...formIngredient, newRowIngredient])
    }


    const [productList, setProductList] = useState<ProductEntity[] | null>(null)

    const refreshProductList = async () => {
        const res = await fetch('http://localhost:3001/product', {
            headers: {}
        })
        const data = await res.json()
        setProductList(data.productList)
    }

    useEffect(() => {
        refreshProductList()
    }, [])


    const sendForm = async (e: FormEvent) => {
        e.preventDefault()
        console.log(formName.name)
        console.log(formIngredient)
        console.log(formName.description)
        // const resData = await fetch('http://localhost:3001/coctail/add', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(form)
        // })

        // const data: ProductEntity = await resData.json()

    }
    if (!productList) return <Spinner/>


    return (
        <form onSubmit={sendForm}>
            <h2>Stwórz koktail</h2>
            <p className='ingredient__p'>
                <TextField
                    sx={{width: '400px'}}
                    id="outlined-basic"
                    label="Nazwa"
                    name='name'
                    variant="outlined"
                    onChange={e => handleNameFormChange('name', e.target.value)}
                />
            </p>
            {formIngredient.map((form, index) => {
                return (
                    <p className='ingredient__single__input'>
                        <ChoiceOfIngredient
                            productList={productList}
                            handleIngredientFormChange={handleIngredientFormChange}
                            index={index} inputRow={form}/>
                    </p>
                )
            })}
            <p>
                <AddCircleOutlineOutlinedIcon
                    className='btnPlus'
                    onClick={addRowIngredient}
                    sx={{fontSize: 30}}/>
            </p>
            <p className='ingredient__description'>
                <TextField
                    sx={{width: 400}}
                    id="outlined-multiline-static"
                    label="Opis"
                    multiline
                    rows={4}
                    onChange={e => handleNameFormChange('description', e.target.value)}
                />
            </p>
            <button type='submit' className='btn btnSubmit'>Dodaj</button>
        </form>
    )
}
