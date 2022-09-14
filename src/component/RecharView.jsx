import React from 'react';
import Louder from "../assets/Video/Loader.mp4"


const RecharView = () => {
    return (
        <div className='ContLoader'>
            <div className='Loader'>
                <video src={Louder} autoPlay muted loop/>   
            </div>
        </div>
    );
};

export default RecharView;