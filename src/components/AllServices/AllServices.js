import React from 'react';
import Achievement from '../Achievement/Achievement';
import Partners from '../Home/Partners/Partners';
import Team from '../Home/Team/Team';
import Categories from '../Services/Categories/Categories';
import Services from '../Services/Services';
import ShortBanner from '../ShortBanner/ShortBanner';

const AllServices = () => {
    return (
        <div>
            <ShortBanner></ShortBanner>
            <Categories></Categories>
            <Services></Services>
            <Achievement></Achievement>
            <Team></Team>
            <Partners></Partners>
        </div>
    );
};

export default AllServices;