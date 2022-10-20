import React, { useState } from 'react';
import secImage from '../../assets/images/sec-1.png'
import support from '../../assets/images/1.png'
import discuss from '../../assets/images/3.png'
import video from '../../assets/images/video.jpg'
import member1 from '../../assets/images/1.jpg';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import AddIcon from '@mui/icons-material/Add';
import CountUp from 'react-countup';
import {FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

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
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', color: '#ED1D27' }} />}
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

const About = () => {
    const [expanded, setExpanded] = React.useState('panel1');
    const [show, setShow] = useState(false);

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const members = [
        {
            'id' : '1',
            'name': 'Georgie Haynes',
            'designation': 'Business Expert',
            'image': '',
            'facebook' : 'https://www.facebook.com/',
            'twitter' : 'https://twitter.com/',
            'linkedin' : 'https://linkedin.com/'
        },
        {
            'id' : '2',
            'name': 'Lara Maleon',
            'designation': 'Managment',
            'image': '',
            'facebook' : 'https://www.facebook.com/',
            'twitter' : 'https://twitter.com/',
            'linkedin' : 'https://linkedin.com/'
        },
        {
            'id' : '3',
            'name': 'Adam Delaua',
            'designation': 'Founder',
            'image': '',
            'facebook' : 'https://www.facebook.com/',
            'twitter' : 'https://twitter.com/',
            'linkedin' : 'https://linkedin.com/'
        },
        {
            'id' : '4',
            'name': 'Jizz Merkel',
            'designation': 'Consultant',
            'image': '',
            'facebook' : 'https://www.facebook.com/',
            'twitter' : 'https://twitter.com/',
            'linkedin' : 'https://linkedin.com/'
        },
    ]


    return (
        <div className='p-5 md:p-10 lg:p-20 bg-base-100'>
            <div className='lg:grid grid-cols-2 gap-10 '>
                <div>
                    <div><img src={secImage} alt="" /></div>
                </div>
                <div className='my-auto p-5'>
                    <p className='text-primary font-medium text-xl'> <HorizontalRuleIcon />Welcome To Our Company</p>
                    <h2 className='text-3xl lg:text-5xl font-bold py-5 leading-normal'>Build Your Business With Right Way</h2>
                    <p className='text-[#74777C]'>
                        Accounting departments are usually responsible for keeping track of all purchase orders that have been placed for stock (products to be sold by the business) and all other assets and services.</p>
                    <div className='flex items-center py-5'>
                        <img src={support} alt="" />
                        <div className='ml-2'>
                            <p className='text-primary font-medium text-xl'> Need help? Contact Us</p>
                            <h3 className='text-accent text-2xl font-semibold py-2'>(625)-1251-6677</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:grid grid-cols-2 gap-5 py-20'>
                <div>
                    <div><img className='w-full' src={video} alt="" /></div>
                </div>
                <div className='md:grid grid-cols-2 gap-5 md:mt-10 lg:mt-0'>
                    <div className='shadow-lg p-10 my-5 md:my-0 '>
                        <p className='font-bold text-xl'>Projects With 100% Satisfaction</p>
                        <h3 className='flex text-6xl font-extrabold text-primary py-5'> <CountUp end={2.5} duration={1} decimals={1} /> k</h3>
                        <p className='text-[#74777C]'>A typical business holds many different...</p>
                    </div>
                    <div className='shadow-lg p-10'>
                        <p className='font-bold text-xl'>Projects With 100% Satisfaction</p>
                        <h3 className='flex text-6xl font-extrabold text-primary py-5'> <CountUp end={2.5} duration={1} decimals={1} /> k</h3>
                        <p className='text-[#74777C]'>A typical business holds many different...</p>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <p className='text-primary font-medium text-xl text-center'> <HorizontalRuleIcon />Our Members<HorizontalRuleIcon /></p>
                    <h2 className='text-3xl lg:text-6xl font-extrabold py-5 leading-normal text-center'>Expert <span className='text-primary'>Team</span> </h2>
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 py-10 '>
                    {
                        members.map((member, index) =>
                            <div key={index} className='text-center'>
                                <img className='w-full' src={member1} alt="" />
                                <div className='w-[100px] h-[100px] bg-slate-500 flex items-center justify-center mx-auto mt-[-100px]'>

                                {
                                   show &&  
                                   <div className='flex justify-center items-center'>
                                      <a className='w-[30px] h-[30px] rounded-full bg-base-100 flex items-center justify-center text-neutral mr-2 hover:text-white hover:bg-primary' href={member.facebook}> <FaFacebookF/> </a>
                                      <a className='w-[30px] h-[30px] rounded-full bg-base-100 flex items-center justify-center text-neutral mr-2 hover:text-white hover:bg-primary' href={member.linkedin}> <FaLinkedinIn/> </a>
                                      <a className='w-[30px] h-[30px] rounded-full bg-base-100 flex items-center justify-center text-neutral  hover:text-white hover:bg-primary' href={member.twitter}> <FaTwitter/> </a>
                                   </div>
                                }
                                </div>
                                <button onClick={() => setShow(!show)} className='btn btn-link rounded-t-full text-primary mt-[-50px] bg-base-100 hover:bg-base-100'><AddIcon /></button>
                                <h2 className='text-2xl text-bold hover:text-primary'>{member.name}</h2>
                                <p className='text-primary'>{member.designation}</p>
                            </div>
                        )
                    }
                </div>
            </div>
            <div>
                <div className='lg:grid grid-cols-2 gap-10 bg-base-100 py-10 p-5'>
                    <div className='my-auto mb-10 lg:mb-0'>
                        <p className='text-primary font-medium text-xl'> <HorizontalRuleIcon />Why Choose Us</p>
                        <h2 className='text-3xl lg:text-5xl font-bold py-5 leading-normal'>Get Every Answer</h2>
                        <div>
                            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                    <Typography>Collapsible Group Item #1</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                                        sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                        sit amet blandit leo lobortis eget.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                    <Typography>Collapsible Group Item #2</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                                        sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                        sit amet blandit leo lobortis eget.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                                    <Typography>Collapsible Group Item #3</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                                        sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                        sit amet blandit leo lobortis eget.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                    <div>
                        <div><img src={discuss} alt="" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;




