import React from 'react';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';

const Sidebar = () => {
    return (
        <section className='sidebar'>
            <div className='open-hours'>
                <div className='bg-rose-600 text-white p-4 rounded-t-lg'>
                    <h1>Open Hour</h1>
                </div>
                <div className='w-full bg-slate-100 text-lg p-5'>
                    <table className='w-full'>
                        <tbody>
                            <tr>
                                <td>Monday : </td>
                                <td className='text-right'>08.00 - 10.00</td>
                            </tr>
                            <tr>
                                <td>Tuesday : </td>
                                <td className='text-right'>08.00 - 10.00</td>
                            </tr>
                            <tr>
                                <td>Wednesday : </td>
                                <td className='text-right'>08.00 - 10.00</td>
                            </tr>
                            <tr>
                                <td>Thrusday : </td>
                                <td className='text-right'>08.00 - 10.00</td>
                            </tr>
                            <tr>
                                <td>Friday : </td>
                                <td className='text-right'>08.00 - 10.00</td>
                            </tr>
                            <tr>
                                <td>Saturday : </td>
                                <td className='text-right'>08.00 - 10.00</td>
                            </tr>
                            <tr>
                                <td>Sunday : </td>
                                <td className='text-right'>08.00 - 10.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="location mt-10">
                <div className='bg-rose-600 text-white p-4 rounded-t-lg'>
                    <h1>Location</h1>
                </div>
                <div className=''>
                    
                </div>
            </div>
        </section>
    );
};

export default Sidebar;