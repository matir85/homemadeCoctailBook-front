import React from "react";

import LocalBarRoundedIcon from '@mui/icons-material/LocalBarRounded';
import LiquorRoundedIcon from '@mui/icons-material/LiquorRounded';

import './Home.css'

export const Home = () => {

    return (
        <div className='homeSite'>
            <a className='btnNav' href='/product'>
                <LiquorRoundedIcon
                    sx={{fontSize: 200, color: '#ffd700',}}
                />
                <p className='buttonSignature'>
                    Składniki
                </p>
            </a>
            <a className='btnNav' href='/coctail'>
                <LocalBarRoundedIcon
                    sx={{fontSize: 200, color: '#ffd700'}}
                />
                <p className='buttonSignature'>
                    Koktajle
                </p>
            </a>
        </div>
    )
}
