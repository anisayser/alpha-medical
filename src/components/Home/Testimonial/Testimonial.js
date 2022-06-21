import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import clientImg1 from '../../../images/test-image1.png';
import clientImg2 from '../../../images/test-image2.png';
import './Testimonial.css';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Testimonial = () => {


    return (
        <section className='testimonials bg-gray-100 py-32'>
            <div className="container mx-auto">
                <h1 className='text-3xl text-rose-600'>Testimonial</h1>
                <h1 className='text-3xl font-bold py-2'>What Our Client Say</h1>

                <div className="slider">
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        breakpoints={{
                            // when window width is >= 640px
                            
                            768: {
                              slidesPerView: 2,
                            },
                          }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                    >
                        <SwiperSlide className='pt-32'>
                            <div className='p-10 pt-20 border-8 rounded-lg transition linear duration-500 border-rose-300 hover:border-rose-600 hover:bg-orange-100 relative'>
                                <div className='absolute -top-20 z-50'>
                                    <img src={clientImg1} alt="" />
                                </div>
                                <p>
                                <FontAwesomeIcon className='text-yellow-400' icon={faStar}/>
                                <FontAwesomeIcon className='text-yellow-400' icon={faStar}/>
                                <FontAwesomeIcon className='text-yellow-400' icon={faStar}/>
                                <FontAwesomeIcon className='text-yellow-400' icon={faStar}/>
                                <FontAwesomeIcon className='text-yellow-400' icon={faStar}/>
                                </p>
                                <p className='text-gray-400 pt-3 font-light'>It is a long established fact that a reader will be distracted
                                 by the on
                                 readable content of a page when looking at its layout. The point of
                                 using Lorem Ipsum is that it has a more-or-less normal distribution.
                                 long established fact that a reader will be distracted.
                              </p>
                                <p className='text-rose-600 pt-5'>-Dwayne Johnson.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='pt-32'>
                            <div className='p-10 pt-20 border-8 rounded-lg transition linear duration-500 border-rose-300 hover:border-rose-600 hover:bg-orange-100 relative'>
                                <div className='absolute -top-20 z-50'>
                                    <img src={clientImg2} alt="" />
                                </div>
                                <p>
                                <FontAwesomeIcon className='text-yellow-400' icon={faStar}/>
                                <FontAwesomeIcon className='text-yellow-400' icon={faStar}/>
                                <FontAwesomeIcon className='text-yellow-400' icon={faStar}/>
                                <FontAwesomeIcon className='text-yellow-400' icon={faStar}/>
                                <FontAwesomeIcon className='text-yellow-400' icon={faStar}/>
                                </p>
                                <p className='text-gray-400 pt-3 font-light'>It is a long established fact that a reader will be distracted
                                 by the on
                                 readable content of a page when looking at its layout. The point of
                                 using Lorem Ipsum is that it has a more-or-less normal distribution.
                                 long established fact that a reader will be distracted.
                              </p>
                                <p className='text-rose-600 pt-5'>-Dwayne Johnson.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='pt-32'>
                            <div className='p-10 pt-20 border-8 rounded-lg transition linear duration-500 border-rose-300 hover:border-rose-600 hover:bg-orange-100 relative'>
                                <div className='absolute -top-20 z-50'>
                                    <img src={clientImg1} alt="" />
                                </div>
                                <p>
                                <FontAwesomeIcon className='text-yellow-400' icon={faStar}/>
                                <FontAwesomeIcon className='text-yellow-400' icon={faStar}/>
                                <FontAwesomeIcon className='text-yellow-400' icon={faStar}/>
                                <FontAwesomeIcon className='text-yellow-400' icon={faStar}/>
                                <FontAwesomeIcon className='text-yellow-400' icon={faStar}/>
                                </p>
                                <p className='text-gray-400 pt-3 font-light'>It is a long established fact that a reader will be distracted
                                 by the on
                                 readable content of a page when looking at its layout. The point of
                                 using Lorem Ipsum is that it has a more-or-less normal distribution.
                                 long established fact that a reader will be distracted.
                              </p>
                                <p className='text-rose-600 pt-5'>-Dwayne Johnson.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='pt-32'>
                            <div className='p-10 pt-20 border-8 rounded-lg transition linear duration-500 border-rose-300 hover:border-rose-600 hover:bg-orange-100 relative'>
                                <div className='absolute -top-20 z-50'>
                                    <img src={clientImg2} alt="" />
                                </div>
                                <p>
                                <FontAwesomeIcon className='text-yellow-400' icon={faStar}/>
                                <FontAwesomeIcon className='text-yellow-400' icon={faStar}/>
                                <FontAwesomeIcon className='text-yellow-400' icon={faStar}/>
                                <FontAwesomeIcon className='text-yellow-400' icon={faStar}/>
                                <FontAwesomeIcon className='text-yellow-400' icon={faStar}/>
                                </p>
                                <p className='text-gray-400 pt-3 font-light'>It is a long established fact that a reader will be distracted
                                 by the on
                                 readable content of a page when looking at its layout. The point of
                                 using Lorem Ipsum is that it has a more-or-less normal distribution.
                                 long established fact that a reader will be distracted.
                              </p>
                                <p className='text-rose-600 pt-5'>-Dwayne Johnson.</p>
                            </div>
                        </SwiperSlide>
                        
                    </Swiper>
                </div>

            </div>
        </section>
    );
};

export default Testimonial;