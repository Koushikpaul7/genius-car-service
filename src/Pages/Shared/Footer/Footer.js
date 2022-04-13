import React from 'react';

const Footer = () => {
    const today =new Date();
    const year= today.getFullYear();
    return (
       <footer className='text-center mt-5 text-white bg-dark p-3 '>
           <p className='mt-3'><small> &copy; The car doctor {year} </small></p>
       </footer>
    );
};

export default Footer;