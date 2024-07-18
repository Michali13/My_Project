import './Eula.css';
import React, { useState } from 'react'
import close1 from './assets/close1.png'

function Eula(props) {

    

    return (
        <>
            <div className='overlay'></div>
            <div className='Eula_cont'>
                <img src={close1} className='close' onClick={() => {props.close_popup_func(false)}} />

                <div className='eula_text'>bvcbcvbcvb</div>
            </div>
        </>
    );

}
export default Eula;
