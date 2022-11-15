import React, { useEffect } from 'react';
import qualityBg from '../assets/images/qualitysec-bg.jpg'
import person from '../assets/images/quality.png'
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import FlareIcon from '@mui/icons-material/Flare';
import CountUp from 'react-countup';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './QualityHome.css'
import { RiHandCoinFill } from "react-icons/ri";


const QualityHome = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    })

    return (
        <div className='md:flex flex-row items-center pt-20 p-5 pb-0' style={{ backgroundImage: `url(${qualityBg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
            <div className='basis-1/2 md:pl-20 z-10'>
                <p className='text-primary font-medium text-xl'> <HorizontalRuleIcon />Timely Service Delivery & Incident Resolutions!!</p>
                <h2 className='text-3xl md:text-5xl font-bold py-5 leading-normal'>Fearlessly scale to
                    <span className='text-primary'> new heights</span> </h2>
                <p className='text-[#74777C]'>
                    You don’t have to go it alone
                    Surround yourself with the community and resources to help bring your vision to life.
                </p>
                <div className='md:flex justify-between items-center pb-20'>
                    <div>
                        <div data-aos="fade-up" className='flex items-center py-5'>
                            <div className='mr-5 flex justify-center items-center'>
                                <FlareIcon className='text-primary' />
                            </div>
                            <div >
                                <h3 className='text-accent text-2xl font-semibold py-2'>Finance Consultant</h3>
                                <p className='text-[#74777C]'>Our financial consultant helps a business increase <br /> shareholder value and improve capital efficiency
                                </p>
                            </div>
                        </div>
                        <div data-aos="fade-up" className='flex items-center'>
                            <div className='mr-5 flex justify-center items-center'>
                                <RiHandCoinFill className='text-2xl text-primary' />
                            </div>
                            <div>
                                <h3 className='text-accent text-2xl font-semibold py-2'>Investment consultant</h3>
                                <p className='text-[#74777C]'>Global Institutional Consulting includes experienced <br /> investment advisors who specialize in serving <br /> institutional clients.</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" className='px-10 w-64 py-5 text-base-100 bg-gradient-to-r from-[rgba(237,28,35,0.9)] to-[rgba(237,84,28,0.9)] md:mr-[-150px] mt-5 mb-[-50px]'>
                        <h4 className='z-20 text-6xl font-extrabold'><CountUp end={39} duration={2} />+</h4>
                        <p className='text-2xl font-semibold'>Years Of <br /> Experience</p>
                    </div>
                </div>
            </div>
            <div className='basis-1/2 z-0'>
                <img className='w-75 md:ml-[-100px]' src={person} alt="" />
            </div>
        </div>
    );
};

export default QualityHome;