import React from 'react';
import Agency from '../../Components/Agency';
import BacktoTop from '../../Components/BacktoTop/BacktoTop';
import Banner from '../../Components/Banner';
import HowITWork from '../../Components/HowITWork';
import QualityHome from '../../Components/QualityHome';
import SupportiveBrands from '../../Components/SupportiveBrands';

const Home = () => {
    return (
        <div>
            <Banner />
            <SupportiveBrands />
            <Agency />
            <QualityHome />
            <HowITWork />
        </div>
    );
};

export default Home;