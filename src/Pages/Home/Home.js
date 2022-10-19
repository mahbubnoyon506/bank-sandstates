import React from 'react';
import Agency from '../../Components/Agency';
import BacktoTop from '../../Components/BacktoTop/BacktoTop';
import Banner from '../../Components/Banner';
import HowITWork from '../../Components/HowITWork';
import QualityHome from '../../Components/QualityHome';
import SupportiveBrands from '../../Components/SupportiveBrands';

const home = () => {
    return (
        <div>
            <Banner/>
            <SupportiveBrands/>
            <Agency/>
            <QualityHome/>
            <HowITWork/>
            {/* <Banner />
            <SupportiveBrands />
            <Agency />
            <QualityHome />
<<<<<<< HEAD
            <HowITWork /> */}

=======
            <HowITWork />
>>>>>>> 8a2cd34211b54cee37a779750ccdc9b2edd82e72
        </div>
    );
};

export default home;