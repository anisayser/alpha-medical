import React from 'react';
import useServices from '../../hooks/useServices';
import About from '../About/About';
import Achievement from '../Achievement/Achievement';
import Blogs from '../Blogs/Blogs';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Categories from '../Services/Categories/Categories';
import Service from '../Services/Service/Service';
import ServiceLoading from '../Services/ServiceLoading/ServiceLoading';
import Services from '../Services/Services';
import Banner from './Banner/Banner';
import Emergency from './Emergency/Emergency';
import './Home.css';
import Partners from './Partners/Partners';
import Team from './Team/Team';
import Testimonial from './Testimonial/Testimonial';
const Home = () => {
    const [services] = useServices();
    const serviceSample = services.slice(0,4);
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <About></About>
            <div className="container mx-auto py-32 text-center">
                <h1 className='text-3xl text-rose-600'>Our Services</h1>
                <h1 className='text-3xl font-bold py-2'>Special High-quality Services</h1>
                <p className='text-base text-gray-400'>It is a long established fact that a reader will be distracted by the readable <br /> content of a page when looking at its layout.</p>
                {
                    serviceSample.length === 0 ?
                        <div className="loading pt-14">
                            <ServiceLoading></ServiceLoading>
                        </div>

                        :
                        <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 gap-4 pt-14">
                            {serviceSample.map(service => <Service key={service.id} services={service}></Service>)}
                        </div>
                }
            </div>
            <Emergency></Emergency>
            <Team></Team>
            <Testimonial></Testimonial>
            <Blogs></Blogs>
            <Achievement></Achievement>
            <Partners></Partners>
        </div>
    );
};

export default Home;