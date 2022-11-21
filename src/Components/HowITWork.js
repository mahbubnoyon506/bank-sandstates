import React, { useEffect, useState } from 'react';
import "./howitwork.css";
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import AssistantIcon from '@mui/icons-material/Assistant';
import FlagCircleIcon from '@mui/icons-material/FlagCircle';
import HandshakeIcon from '@mui/icons-material/Handshake';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import CarouselMangement from './CarouselMangement';
import CountUp from 'react-countup';
import FolderIcon from '@mui/icons-material/Folder';
import PersonIcon from '@mui/icons-material/Person';
import { FaFacebookF, FaHands, FaLinkedinIn, FaPhoneAlt, FaRegLightbulb, FaTwitter } from 'react-icons/fa';
import Button from '../Shared/Button';
import { GiProgression } from "react-icons/gi";
import { MdCall, MdSupportAgent } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { TfiEmail } from "react-icons/tfi";
import { TbMessages } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";
import { BiChevronDown } from "react-icons/bi";


import AOS from 'aos';
import 'aos/dist/aos.css';

//Accordion MUI
const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', color: '#ED1B24' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const HowITWork = () => {
    const [expanded, setExpanded] = React.useState('panel1');
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    useEffect(() => {
        AOS.init({
            duration: 1000
        });

    })

    return (
        <div>

            {/* *************** */}
            {/* How We Works */}
            {/* ***************** */}

            <div className="processSection01">
                <div className="">
                    <div data-aos="fade-up" className="">
                        <div className="text-center">
                            <div className="subTitle">
                                <span className="bleft"></span>
                                Process
                                <span className="bright"></span>
                            </div>

                            <h2 className="secTitle ">
                                How We <span>Work</span>
                            </h2>
                        </div>
                    </div>

                    <div className="md:grid grid-cols-4 gap-4 px-10 md:px-24">

                        <div data-aos="fade-up" className=" text-center">
                            <div className="icon_box_03">
                                <div className="ib_box hover:bg-primary">
                                    <i className="icon-local_1 ">
                                        <img

                                            src="https://img.icons8.com/bubbles/500/improvement.png"
                                            alt=""
                                            style={{
                                                width: "80px",
                                                height: "80px",
                                                marginTop: "-120px",
                                                marginLeft: '35px'
                                            }}
                                        />
                                    </i>
                                    <span>01</span>
                                </div>
                                <h3>Improvement</h3>
                                <p>
                                    Fessionally fabricate strategic platform without corporate
                                    before fully tested
                                </p>
                            </div>
                        </div>
                        <div data-aos="fade-up" className=" text-center">
                            <div className="icon_box_03">
                                <div className="ib_box hover:bg-primary">
                                    <i className="icon-local_1">
                                        <img
                                            src="https://www.kindpng.com/picc/m/211-2112492_an-enter-icon-is-a-rectangle-shape-and.png"
                                            alt=""
                                            style={{
                                                width: "80px",
                                                height: "80px",
                                                marginTop: "-120px",
                                                marginLeft: '35px'
                                            }}
                                        />
                                    </i>
                                    <span>02</span>
                                </div>
                                <h3>Create Idea</h3>
                                <p>
                                    Fessionally fabricate strategic platform without corporate
                                    before fully tested
                                </p>
                            </div>
                        </div>
                        <div data-aos="fade-up" className=" text-center">
                            <div className="icon_box_03">
                                <div className="ib_box hover:bg-primary">
                                    <i className="icon-local_1">
                                        <img
                                            src="https://cdn-icons-png.flaticon.com/512/5234/5234091.png"
                                            alt=""
                                            style={{
                                                width: "80px",
                                                height: "80px",
                                                marginTop: "-120px",
                                                marginLeft: '35px'
                                            }}
                                        />
                                    </i>
                                    <span>03</span>
                                </div>
                                <h3>Consultancy</h3>
                                <p>
                                    Fessionally fabricate strategic platform without corporate
                                    before fully tested
                                </p>
                            </div>
                        </div>
                        <div data-aos="fade-up" className=" text-center">
                            <div className="icon_box_03">
                                <div className="ib_box hover:bg-primary">
                                    <i className="icon-local_1">
                                        <img
                                            src="https://cdn-icons-png.flaticon.com/512/4406/4406358.png"
                                            alt=""
                                            style={{
                                                width: "80px",
                                                height: "80px",
                                                marginTop: "-120px",
                                                marginLeft: '35px'
                                            }}
                                        />
                                    </i>
                                    <span>04</span>
                                </div>
                                <h3>Success</h3>
                                <p>
                                    Fessionally fabricate strategic platform without corporate
                                    before fully tested
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* *************** */}
            {/*  testmonial*/}
            {/* ***************** */}


            <div className="appoinmentSection01">
                <div className="funfactArea">
                    <div data-aos="zoom-in" className="fact_01">
                        <h2 className='md:text-center lg:text-left'>
                            <CountUp end={2.5} duration={1} decimals={1} /><i style={{ fontStyle: "normal" }}>k</i>
                        </h2>
                        <p>
                            Power of choices when nothing what
                            <br /> we like best principle
                        </p>
                    </div>
                    <div data-aos="zoom-in" className="fact_01 py-10 lg:py-0">
                        <h2 className='md:text-center lg:text-left'>
                            <CountUp end={138} duration={3} /><i style={{ fontStyle: "normal" }}>+</i>
                        </h2>
                        <p>
                            Power of choices when nothing what
                            <br /> we like best principle
                        </p>
                    </div>
                    <div data-aos="zoom-in" className="fact_01">
                        <h2 className='md:text-center lg:text-left'>
                            <CountUp end={9.8} duration={3} /><i style={{ fontStyle: "normal" }}>%</i>
                        </h2>
                        <p>
                            Power of choices when nothing what
                            <br /> we like best principle
                        </p>
                    </div>
                </div>

                {/* Whay choose us starts */}
                <div className="">
                    <div className="lg:grid grid-cols-2 gap-x-5 md:px-10">
                        <div className="">
                            <div data-aos="fade-up" className="appointment_form">
                                <p className='text-primary mb-1'>Do it right now!</p>
                                <h3 className='mt-5'>Make an Appointment</h3>
                                <form action="#" className="w-full" id="contact_form">
                                    <div className='md:grid grid-cols-2 gap-3'>
                                        <div class=" flex items-center relative input-field group">
                                            <span className='absolute top-6 left-5 text-[#74777c]'><AiOutlineUser /></span>

                                            <input
                                                className="required w-sm"
                                                type="text"
                                                name="con_name"
                                                placeholder="Your Name"
                                            />
                                        </div>

                                        <div className="flex align-middle  input-field w-full">
                                            <span className='absolute top-6 left-5 text-[#74777c]'><TfiEmail /></span>

                                            <input
                                                className="required"
                                                type="email"
                                                name="con_email"
                                                placeholder="Email Address"
                                            />
                                        </div>

                                    </div>

                                    <div className='md:grid grid-cols-2 gap-3'>

                                        <div class="input-field">
                                            {/* <i class="twi-map-marker-alt2"></i> */}
                                            <span className='absolute top-6 left-5 text-[#74777c]'><CiLocationOn /></span>

                                            <input
                                                className="required w-full"
                                                type="text"
                                                name="con_location"
                                                placeholder="Your Location"
                                            />
                                        </div>

                                        <div class="input-field w-full">
                                            <span className='absolute top-6 left-5 text-[#74777c]'><BiChevronDown /></span>

                                            <select class="required" name="con_subject">
                                                <option selected="selected">Subjects</option>
                                                <option>Finance Consultant</option>
                                                <option>Business Consultant</option>
                                                <option>Financial Advices</option>
                                                <option>Business Growth</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="input-field ">
                                        <span className='absolute top-6 left-7 text-[#74777c]'><TbMessages /></span>

                                        <textarea
                                            className="required textarea w-sm"
                                            name="con_message"
                                            placeholder="Your Message"
                                        ></textarea>
                                    </div>
                                    <div class="input-field ">
                                        <div className='text-center md:text-left'>
                                            <button type="submit" class="qu_btn mx-auto w-sm text-center">Get A Quote </button>
                                        </div>

                                        <div class="con_message"></div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div data-aos="fade-up" class="pdAcc pt-10">
                            <div class="subTitle">
                                <span class="bleft"></span>Why Choose Us
                            </div>
                            <h2 class="secTitle px-2 text-sm md:text-2xl lg:text-4xl">
                                Get Every <span>Answer</span>
                            </h2>
                            <div className='px-2'>
                                <div>
                                    <h3 className='text-accent text-2xl font-semibold pt-2'>Build your own portfolio</h3>
                                    <p className='text-[#74777C]'>Take advantage of flexible, easy-to-use tools with <br /> Self-Directed Investing</p>
                                </div>
                                <div>
                                    <h3 className='text-accent text-2xl font-semibold pt-3'>Get a professionally managed portfolio</h3>
                                    <p className='text-[#74777C]'>Investment professionals design and manage <br /> a portfolio aligned to your goals with Banks Estates Investing</p>
                                </div>
                                <div>
                                    <h3 className='text-accent text-2xl font-semibold pt-3'>Work with a dedicated advisor</h3>
                                    <p className='text-[#74777C]'>Get one-on-one guidance and develop a comprehensive <br /> strategy with banks Estates Wealth Management</p>
                                </div>
                                <div>
                                    <h3 className='text-accent text-2xl font-semibold pt-3'>Preferred Rewards</h3>
                                    <p className='text-[#74777C]'>Your Banks estates deposits and Merrill investing balances <br /> get you more with Preferred Rewards</p>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>
                {/* Whay choose us end */}
            </div>


            {/* Portfolio starts */}
            <div class="portfolioSection01">
                <CarouselMangement />
            </div>
            {/* Portfolio ends */}



            {/* Team section starts */}
            <section class="teamSection01">
                <div class="">
                    <div class="">
                        <div class="text-center">
                            <div class="subTitle">
                                <span class="bleft"></span>Our Memebers
                                <span class="bright"></span>
                            </div>
                            <h2 data-aos="zoom-in" class="secTitle">
                                Expert <span>Teams</span>
                            </h2>
                        </div>
                    </div>
                    <div class="md:grid grid-cols-4 gap-5 md:px-20 p-5 pr-0">


                        <div data-aos="fade-up" class="">
                            <div class="team_01 text-center mb-5 md:mb-0">
                                <div class="tm_thumb">
                                    <img
                                        className='mx-auto'
                                        src="https://i.ibb.co/hR8XcJf/manager01.jpg"
                                        // style={{ width: "93%" }}
                                        alt=""
                                    />
                                    <div className='w-[100px] h-[100px] bg-slate-500 flex items-center justify-center mx-auto mt-[-100px]'>

                                        {
                                            show &&
                                            <div data-aos="fade-up"
                                                data-aos-offset="200"
                                                data-aos-duration="1000"
                                                className='flex justify-center items-center mt-[-20px] transition-all duration-500'>
                                                <a className='w-[30px] h-[30px] rounded-full bg-base-100 flex items-center justify-center text-neutral mr-2 hover:text-white hover:bg-primary' href=""> <FaFacebookF /> </a>
                                                <a className='w-[30px] h-[30px] rounded-full bg-base-100 flex items-center justify-center text-neutral mr-2 hover:text-white hover:bg-primary' href=""> <FaLinkedinIn /> </a>
                                                <a className='w-[30px] h-[30px] rounded-full bg-base-100 flex items-center justify-center text-neutral  hover:text-white hover:bg-primary' href=""> <FaTwitter /> </a>
                                            </div>
                                        }
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        <button onClick={() => setShow(!show)} class="tmsToggle" href="">+</button>
                                    </div>
                                </div>
                                <h3>
                                    <a href="single-team.html">Georgie Haynes</a>
                                </h3>
                                <p>Business Expert</p>
                            </div>
                        </div>

                        <div data-aos="fade-up" class="">
                            <div class="team_01 text-center mb-5 md:mb-0">
                                <div class="tm_thumb">
                                    <img
                                        className='mx-auto'
                                        src="https://i.ibb.co/QnkWNTK/manager02.jpg"
                                        // style={{ width: "93%" }}
                                        alt=""
                                    />
                                    <div className='w-[100px] h-[100px] bg-slate-500 flex items-center justify-center mx-auto mt-[-100px]'>

                                        {
                                            show2 &&
                                            <div
                                                data-aos="fade-up"
                                                data-aos-offset="200"
                                                data-aos-duration="1000"

                                                className='flex justify-center items-center mt-[-20px]'>
                                                <a className='w-[30px] h-[30px] rounded-full bg-base-100 flex items-center justify-center text-neutral mr-2 hover:text-white hover:bg-primary' href=""> <FaFacebookF /> </a>
                                                <a className='w-[30px] h-[30px] rounded-full bg-base-100 flex items-center justify-center text-neutral mr-2 hover:text-white hover:bg-primary' href=""> <FaLinkedinIn /> </a>
                                                <a className='w-[30px] h-[30px] rounded-full bg-base-100 flex items-center justify-center text-neutral  hover:text-white hover:bg-primary' href=""> <FaTwitter /> </a>
                                            </div>
                                        }
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        <button onClick={() => setShow2(!show2)} class="tmsToggle" href="">+</button>
                                    </div>
                                </div>
                                <h3>
                                    <a href="single-team.html">Lara Maleon</a>
                                </h3>
                                <p>Managment</p>
                            </div>
                        </div>
                        <div data-aos="fade-up" class="">
                            <div class="team_01 text-center mb-5 md:mb-0">
                                <div class="tm_thumb">
                                    <img
                                        className='mx-auto'
                                        src="https://i.ibb.co/47tQQQn/manager03.jpg"
                                        // style={{ width: "93%" }}
                                        alt=""
                                    />
                                    <div className='w-[100px] h-[100px] bg-slate-500 flex items-center justify-center mx-auto mt-[-100px]'>

                                        {
                                            show3 &&
                                            <div
                                                data-aos="fade-up"
                                                data-aos-offset="200"
                                                data-aos-duration="1000"

                                                className='flex justify-center items-center mt-[-20px]'>
                                                <a className='w-[30px] h-[30px] rounded-full bg-base-100 flex items-center justify-center text-neutral mr-2 hover:text-white hover:bg-primary' href=""> <FaFacebookF /> </a>
                                                <a className='w-[30px] h-[30px] rounded-full bg-base-100 flex items-center justify-center text-neutral mr-2 hover:text-white hover:bg-primary' href=""> <FaLinkedinIn /> </a>
                                                <a className='w-[30px] h-[30px] rounded-full bg-base-100 flex items-center justify-center text-neutral  hover:text-white hover:bg-primary' href=""> <FaTwitter /> </a>
                                            </div>
                                        }
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        <button onClick={() => setShow3(!show3)} class="tmsToggle" href="">+</button>
                                    </div>
                                </div>
                                <h3>
                                    <a href="single-team.html">Adam Delaua</a>
                                </h3>
                                <p>Founder</p>
                            </div>
                        </div>
                        <div data-aos="fade-up" class="">
                            <div class="team_01 text-center">
                                <div class="tm_thumb">
                                    <img
                                        className='mx-auto'
                                        src="https://i.ibb.co/1QVtsL7/manager04.jpg"
                                        // style={{ width: "93%" }}
                                        alt=""
                                    />
                                    <div className='w-[100px] h-[100px] bg-slate-500 flex items-center justify-center mx-auto mt-[-100px]'>

                                        {
                                            show4 &&
                                            <div
                                                data-aos="fade-up"
                                                data-aos-offset="200"
                                                data-aos-duration="1000"

                                                className='flex justify-center items-center mt-[-20px]'>
                                                <a className='w-[30px] h-[30px] rounded-full bg-base-100 flex items-center justify-center text-neutral mr-2 hover:text-white hover:bg-primary' href=""> <FaFacebookF /> </a>
                                                <a className='w-[30px] h-[30px] rounded-full bg-base-100 flex items-center justify-center text-neutral mr-2 hover:text-white hover:bg-primary' href=""> <FaLinkedinIn /> </a>
                                                <a className='w-[30px] h-[30px] rounded-full bg-base-100 flex items-center justify-center text-neutral  hover:text-white hover:bg-primary' href=""> <FaTwitter /> </a>
                                            </div>
                                        }
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        <button onClick={() => setShow4(!show4)} class="tmsToggle" href="">+</button>
                                    </div>
                                </div>
                                <h3>
                                    <a href="single-team.html">Jizz Merkel</a>
                                </h3>
                                <p>Consultant</p>
                            </div>
                        </div>
                    </div>
                    {/* <div class="md:grid grid-cols-3 gap-10 py-10">
                        <div class="col-span-2">
                            <div class="support">
                                <div class="spIcon flex items-center mb-2">
                                    <i class="  text-center">
                                        <span className='flex  text-lg justify-center mt-6 '>
                                            <MdCall />
                                        </span>
                                    </i>
                                    <img className='md:ml-[-20px]' src="https://i.ibb.co/vXgYBS6/phn1.jpg" alt="" />
                                </div>
                                <p>
                                    We are one of the highest graded company in United State. For
                                    any Kind of help please contact our{" "}
                                    <span>24/7 hotline call services.</span> we are ready for you
                                </p>
                            </div>
                        </div>
                        <div class="sm:pl-10 md:pl-0 sm:mt-5 md:pt-0">
                            <div class="icon_box_04">
                                <div class="ib_box p-4 pt-0">
                                    <PermPhoneMsgIcon />
                                </div>
                                <p>Have any Questions?</p>
                                <h3>2569 25 21589</h3>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>
            {/* Team section ends */}
            {/* Feature section starts */}


            {/* <section class="chooseSection ">
                <div class="lg:grid grid-cols-2 gap-5 md:px-20 px-5">
                    <div class="">
                        <div class="subTitle">
                            <span class="bleft"></span>Why Choose Us
                        </div>
                        <h2 class="secTitle white">
                            Find Out More Our <span>Features</span>
                        </h2>
                        <p class="secDesc">
                            In addition to payroll cheques, a business writes many other
                            cheques during the course of a year to pay for a wide variety of
                            items including local business taxes,
                        </p>
                        <button href="" className="btn rounded-full bg-white text-primary mb-10 md:mb-3 hover:bg-primary hover:text-white">
                            View All
                        </button>
                    </div>
                    <div class="">
                        <div class="md:grid grid-cols-2 gap-5 py-5">
                            <div class="">
                                <div class="icon_box_05">
                                    <div class="ib_box flex justify-center items-center hover:bg-gradient-to-r from-[#ED1C24] to-[#ED521C]">
                                        <GiProgression />
                                    </div>
                                    <h3>Improvement</h3>
                                    <p>
                                        All cash received from sales and from all other sources
                                        has to be carefully identified....
                                    </p>
                                </div>
                            </div>
                            <div class="">
                                <div class="icon_box_05">
                                    <div class="ib_box flex justify-center items-center hover:bg-gradient-to-r from-[#ED1C24] to-[#ED521C]">
                                        <FaRegLightbulb />
                                    </div>
                                    <h3>Idea Generate</h3>
                                    <p>
                                        All cash received from sales and from all other sources
                                        has to be carefully identified....
                                    </p>
                                </div>
                            </div>
                            <div class="">
                                <div class="icon_box_05">
                                    <div class="ib_box flex justify-center items-center hover:bg-gradient-to-r from-[#ED1C24] to-[#ED521C]">
                                        <MdSupportAgent />
                                    </div>
                                    <h3>Consultancy</h3>
                                    <p>
                                        All cash received from sales and from all other sources
                                        has to be carefully identified....
                                    </p>
                                </div>
                            </div>
                            <div class="">
                                <div class="icon_box_05">
                                    <div class="ib_box flex justify-center items-center hover:bg-gradient-to-r from-[#ED1C24] to-[#ED521C]">
                                        <FaHands />
                                    </div>
                                    <h3>Success Business</h3>
                                    <p>
                                        All cash received from sales and from all other sources
                                        has to be carefully identified....
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}


            {/* Feature section ends */}

            {/* Feedback section starts */}

            {/* <section class="testimonialSection01">
                <div class="">
                    <div class="testimonial-sec mx-0 md:mx-20">
                        <div class="">
                            <div class="cta">
                                <div class="lg:flex justify-between items-center">
                                    <div data-aos="fade-up" class="">
                                        <div class="icon_box_06">
                                            <div class="ib_box">
                                                <HandshakeIcon />
                                            </div>
                                            <h3>Small / Growing Business!</h3>
                                            <p>
                                                Choose one channel and be great at it. Work toward the
                                                goal of being the leading provider
                                            </p>
                                        </div>
                                    </div>
                                    <div data-aos="zoom-in" class="text-center px-10 py-5 lg:py-0">
                                        <div class="orcta">
                                            <p>or</p>
                                        </div>
                                    </div>
                                    <div data-aos="fade-up" class=" text-right">
                                        <div class="icon_box_06">
                                            <div class="ib_box">
                                                <CrisisAlertIcon />
                                            </div>
                                            <h3>Enterprise Level Organization</h3>
                                            <p>
                                                Choose one channel and be great at it. Work toward the
                                                goal of being the leading provider
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="p-5">
                        <div class=" text-center">
                            <div class="subTitle">
                                <span class="bleft"></span>Testimonial
                                <span class="bright"></span>
                            </div>
                            <h2 class="secTitle">
                                Client's <span>Feedback</span>
                            </h2>
                        </div>
                    </div>
                    <div class="lg:px-20 ">
                        <div
                            className="lg:grid grid-cols-3 testimonialslider01"
                            style={{ gap: "1.5rem" }}
                        >
                            <div data-aos="fade-up" class="testiItem01">
                                <img src="https://i.ibb.co/thWggTM/quote.png" alt="" />
                                <p class="quotation">
                                    Grow tactical "outside the box" thinking whereas principle
                                    entered internal or "organic" sources. roductize tailers
                                    before
                                </p>
                                <div class="ts_author">
                                    <img src="https://i.ibb.co/0KS9LQL/t1.jpg" alt="" />
                                    <h5>David Smith</h5>
                                    <span>CEO & Founder</span>
                                </div>
                            </div>
                            <div data-aos="zoom-in" class="testiItem01">
                                <img src="https://i.ibb.co/thWggTM/quote.png" alt="" />
                                <p class="quotation">
                                    Grow tactical "outside the box" thinking whereas principle
                                    entered internal or "organic" sources. roductize tailers
                                    before
                                </p>
                                <div class="ts_author">
                                    <img src="https://i.ibb.co/F5cfSSK/t2.jpg" alt="" />
                                    <h5>Jasmine Dola</h5>
                                    <span>Founder</span>
                                </div>
                            </div>
                            <div data-aos="fade-up" class="testiItem01">
                                <img src="https://i.ibb.co/thWggTM/quote.png" alt="" />
                                <p class="quotation">
                                    Grow tactical "outside the box" thinking whereas principle
                                    entered internal or "organic" sources. roductize tailers
                                    before
                                </p>
                                <div class="ts_author">
                                    <img src="https://i.ibb.co/TMwmVbC/t3.jpg" alt="" />
                                    <h5>Mark Smith</h5>
                                    <span>Co Founder</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* Feedback section endss */}
            {/* Blog section starts */}

            {/* <section class="blogSectiont01">
                <div class="md:px-20">
                    <div class="lg:grid grid-cols-3 gap-5">
                        <div class="col-span-2 noPaddingRight">
                            <div class="md:grid grid-cols-2 gap-5">
                                <div data-aos="fade-up" class="">
                                    <div class="blogItem01">
                                        <div class="blogThumb">
                                            <img src="https://i.ibb.co/VmBXR9Q/vt1.jpg" alt="" />
                                        </div>
                                        <div class="blogContent">
                                            <div class="bmeta">
                                                <span>
                                                    <FolderIcon className="mr-2" />
                                                    <a href="blog1.html">Develop</a>
                                                </span>
                                                |
                                                <span>
                                                    <PersonIcon className="mr-2" />
                                                    <a href="blog1.html">David Smith</a>
                                                </span>
                                            </div>
                                            <h3 className='hover:text-primary'>
                                                <a href="single-blog.html">
                                                    ITAM joins the financial, inventory...
                                                </a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div data-aos="zoom-in" class="">
                                    <div class="blogItem01">
                                        <div class="blogThumb">
                                            <img src="https://i.ibb.co/z8ZstW8/vt2.jpg" alt="" />
                                        </div>
                                        <div class="blogContent">
                                            <div class="bmeta">
                                                <span >

                                                    <FolderIcon className="mr-2" />
                                                    <a href="blog1.html">Marketing</a>
                                                </span>
                                                |
                                                <span >

                                                    <PersonIcon className="mr-2" />
                                                    <a href="blog1.html">David Smith</a>
                                                </span>
                                            </div>
                                            <h3 className='hover:text-primary'>
                                                <a href="single-blog.html">
                                                    How To Scale a Dropshipping Business...
                                                </a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" class="">
                            <div class="ctaBcon">
                                <div class="subTitle">
                                    <span class="bleft"></span>News Feed
                                </div>
                                <h2 class="secTitle" style={{ marginBottom: "1.5rem" }}>
                                    Latest <span>News</span>
                                </h2>
                                <p class="secDesc" style={{ color: "#74777c", marginBottom: '2rem' }}>
                                    Trusted by the world’s best organizations, for 15 years and
                                    running, it has been delivering smiles to hundreds of IT
                                    advisors, developers...
                                </p>
                                <Button>
                                    View All News
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

        </div>
    );
};

export default HowITWork;