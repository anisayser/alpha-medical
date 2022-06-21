import React from 'react';
import error404 from '../../images/404-error.jpg';

const NotFound = () => {
    return (
        <div>
            <img className='w-full h-screen' src={error404} alt="Page-Not-Found" />
        </div>
    );
};

export default NotFound;