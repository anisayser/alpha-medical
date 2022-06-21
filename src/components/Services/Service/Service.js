import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight, faHeart } from '@fortawesome/free-solid-svg-icons';
import {useNavigate, Link} from 'react-router-dom';
import useServices from '../../../hooks/useServices';

const Service = (props) => {
    
    const {name, description, img, id} = props.services;
    /* const navigate = useNavigate();
    const goToService = ()=>{
        navigate(`/service/${id}`,{
            replace: true,
        });
    } */
    
    return (
        <div>
            
            {
            <div className='service bg-white pb-5 rounded-lg relative'>
                <div className='heart-icon bg-rose-200 absolute right-0 w-10 h-10 flex items-center justify-center rounded-bl-lg transition ease-linear duration-300'>
                    <FontAwesomeIcon className='h-icon text-rose-600' icon={faHeart} />
                </div>
                <img className='mx-auto w-full max-h-72 rounded-t-lg' src={img} alt="" />
                <h1 className='text-2xl py-4'>{name}</h1>
                <hr className='pb-2' />
                <p className='text-base text-gray-400 pb-5 px-2'>{description.slice(0, 150)}</p>

                <Link to={`/service/${id}`} className='w-48 bg-rose-600 hover:bg-rose-700 flex justify-between items-center text-white py-1 pl-6 pr-1 rounded-full text-base transition ease-in duration-300 mx-auto'>CHECK DETAILS <FontAwesomeIcon className='bg-rose-200 hover:bg-rose-500 text-rose-600 hover:text-white text-xs p-3 ml-3 rounded-full transition ease-in duration-300' icon={faAngleDoubleRight} /></Link>
            </div>
            }
        </div>
    );
};

export default Service;