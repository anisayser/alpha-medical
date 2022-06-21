import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../../firebaseInit';

const YourAppoinment = () => {

    const [user] = useAuthState(auth);

    const {service, date, time, phone, msg} = useParams();



    return (
        <section className='your-appoinment my-20'>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-8 px-1">
                    <div className='col-span-2'></div>
                    <div className='col-span-4'>
                        <div className='bg-rose-600 p-4 rounded-t-lg text-white'>
                            <h1 className='text-2xl'>Your Appoitnment for ( {service} )</h1>
                        </div>
                        <div className='bg-slate-50 p-5'>
                            <table className='w-full table-auto'>
                                <tbody>
                                    <tr>
                                        <th className='text-left py-2 border-b'>Name : </th>
                                        <td className='text-left py-2 border-b'>{user.displayName}</td>
                                    </tr>
                                    <tr>
                                        <th className='text-left py-2 border-b'>Appointment Date : </th>
                                        <td className='text-left py-2 border-b'>{date}</td>
                                    </tr>
                                    <tr>
                                        <th className='text-left py-2 border-b'>Time : </th>
                                        <td className='text-left py-2 border-b'>{time}</td>
                                    </tr>
                                    <tr>
                                        <th className='text-left py-2 border-b'>Phone : </th>
                                        <td className='text-left py-2 border-b'>{phone}</td>
                                    </tr>

                                    <tr>
                                        <th className='text-left py-2 border-b'>Your Message : </th>
                                        <td className='text-left py-2 border-b'>{msg}</td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                        <div className='bg-rose-600 p-4 rounded-b-lg text-white'>
                            <h1 className='text-2xl'>Thank You</h1>
                        </div>
                    </div>
                    <div className='col-span-2'></div>
                </div>
            </div>
        </section>
    );
};

export default YourAppoinment;