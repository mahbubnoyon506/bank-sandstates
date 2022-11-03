import React, { useEffect } from 'react';
import Agency from '../../Components/Agency';
import BacktoTop from '../../Components/BacktoTop/BacktoTop';
import Banner from '../../Components/Banner';
import HowITWork from '../../Components/HowITWork';
import QualityHome from '../../Components/QualityHome';
import SupportiveBrands from '../../Components/SupportiveBrands';
import Footer from '../../Shared/Footer';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])

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