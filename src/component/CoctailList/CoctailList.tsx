import React, {useEffect, useState} from "react";
import { CoctailEntity } from "types";
import { CoctailCard } from "./CoctailCard";

import './CoctailList.css'
import {ButtonLink} from "../Button/ButtonLink";
export const CoctailList = () => {

    const [coctailList, setCoctailList] = useState<CoctailEntity[] | null>(null);

    const refreshCoctailList = async () => {
        const res = await fetch('http://localhost:3001/coctail', {
            headers: {}
        })
        const data = await res.json()
        setCoctailList(data.coctailList)
    }

    useEffect(()=>{
        refreshCoctailList()
    },[])

    if(coctailList === null) {
        return <div>
            <h1>Brak koktajli w bazie danych</h1>
            <nav className='navigation'>
                <ButtonLink text='Dodaj koktajl' to='/coctail/add'/>
                <ButtonLink text={'Strona głowna'} to={'/'}/>
            </nav>
        </div>
    }
    return (
        <div>
            <div className='coctaiList'>
                {coctailList.map(coctail => <CoctailCard key={coctail.id} coctails={coctail}/>)}
            </div>
            <nav className='navigation'>
                <ButtonLink text='Dodaj koktajl' to='/coctail/add'/>
                <ButtonLink text={'Strona głowna'} to={'/'}/>
            </nav>

        </div>
    )
}
