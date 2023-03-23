import React, {FormEvent, useState} from "react";
import {CreateProduct, ProductEntity} from "types";

import './AddProduct.css'

export const AddProduct = () => {

    const [form, setForm] = useState<CreateProduct>({
        name: '',
        quantity: 0
    })
    const updateForm = (key: string, value: any) => {
        setForm(form => ({
            ...form,
            [key]: value
        }))
    }
    const sendForm = async (e: FormEvent) => {
        e.preventDefault()


        const resData = await fetch('http://localhost:3001/product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
        const data: ProductEntity = await resData.json()


        // setResultInfo(`Dodano prezent ${data.name}, który otrzymał ID: ${data.id}`);

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
                <input type="number" value={form.quantity} onChange={e => updateForm('count', Number(e.target.value))}/>
            </label>
        </p>
        <button type='submit' className='btn btnSubmit'>Dodaj</button>
    </form>
}
