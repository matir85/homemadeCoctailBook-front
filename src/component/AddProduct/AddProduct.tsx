import React, {FormEvent, useState} from "react";
import {CreateProduct, ProductEntity} from "types";
import { Spinner } from "../Spinner/Spinner";

import './AddProduct.css'

export const AddProduct = () => {

    const [form, setForm] = useState<CreateProduct>({
        name: '',
        quantity: 0
    })

    const [loading, setLoading] = useState<boolean>(false);

    const [resultAdd, setResultAdd] = useState<string | null>(null)

    const updateForm = (key: string, value: any) => {
        setForm(form => ({
            ...form,
            [key]: value
        }))
    }
    const sendForm = async (e: FormEvent) => {
        e.preventDefault()
        setLoading(true);
        const resData = await fetch('http://localhost:3001/product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })

        const data: ProductEntity = await resData.json()

        setResultAdd(`Dodano produkt ${data.name} w ilości ${data.quantity} ml`);
        setLoading(false);
    }

    if(loading) {
        return <Spinner/>
    }

    if(resultAdd !== null) {
        return <div>
            <p className='info__add_success'>
                <strong>{resultAdd}</strong>
            </p>
                <a href="/product" className='btn link' onClick={() => setResultAdd(null)}>Lista produktów</a>
        </div>
    }


    return <form onSubmit={sendForm}>
        <h2>Dodaj produkt</h2>
        <p className='single_label'>
            <label>
                Nazwa <br/>
                <input type="text" value={form.name} onChange={e => updateForm('name', e.target.value)}/>
            </label>
        </p>
        <p className='single_label'>
            <label>
                Ilość mililitrów <br/>
                <input type="number" value={form.quantity} onChange={e => updateForm('quantity', Number(e.target.value))}/>
            </label>
        </p>
        <button type='submit' className='btn btnSubmit'>Dodaj</button>
    </form>
}
