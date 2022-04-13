import React from 'react';
import sleeping from '../../../images/sleeping.png'
const NotFound = () => {
    return (
        <div>
            <h2 className='mt-5 text-primary text-center'>Sleepy mechanic</h2>
            <img className='w-100 ' src={sleeping} alt="" />
        </div>
    );
};

export default NotFound;