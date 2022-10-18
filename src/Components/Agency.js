import React from 'react';
import AgencyBg from '../assets/images/agency-bg.png'
import AgencySubBG from '../assets/images/agency-sub-bg.png'
import CardBG from '../assets/images/card-bg.jpg'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

const Agency = () => {

    const services = [

        {
            'image': '',
            'title': 'Market Research',
            'description': 'A typical business holds many different assets called capital, including office...'
        },
        {
            'image': '',
            'title': 'Market Research',
            'description': 'A typical business holds many different assets called capital, including office...'
        },
        {
            'image': '',
            'title': 'Market Research',
            'description': 'A typical business holds many different assets called capital, including office...'
        },
        {
            'image': '',
            'title': 'Market Research',
            'description': 'A typical business holds many different assets called capital, including office...'
        },
        {
            'image': '',
            'title': 'Market Research',
            'description': 'A typical business holds many different assets called capital, including office...'
        },
    ]


    return (
        <div className=' px-2 md:px-5 lg:px-8 ' style={{ backgroundImage: `url(${AgencyBg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', }}>

            <div className=''>

                <div className='grid grid-cols-1 lg:grid-cols-2'>

                    <div className='bg-auto w-50  ' style={{ backgroundImage: `url(${AgencySubBG})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', }}>
                        <div className='px-7 py-10 sm:mb-2' >
                            <h2 className='text-3xl md:text-3xl lg:text-5xl  font-bold leading-normal pb-10'>We Make Your <br /> Agency <span className='text-primary'>Full <br /> Bright</span> </h2>
                            <p className=' pr-10'>This Cheat Sheet offers tips and advice to help you get the essentials right. here's a list of the most important tasks of business accounting and their meaning.</p>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 justify-items-center mt-5'>
                        {
                            services.slice(0, 2).map((service, index) =>
                                <div key={index} className='sm:mb-2 sm:flex justify-center '>
                                    <Card sx={{ maxWidth: 345, padding: 5 }} >
                                        <CardActionArea>
                                            <AcUnitIcon className='text-primary text-center' />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {service.title}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {service.description}
                                                </Typography>
                                            </CardContent>
                                            <button className='text-lg text-primary'>Read More <ArrowForwardIcon /></button>
                                        </CardActionArea>
                                    </Card>
                                </div>
                            )
                        }

                    </div>

                </div>


                <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center'>
                    {
                        services.slice(1, 5).map((service, index) =>
                            <div className=''

                            >
                                <Card className='relative bg-no-repeat bg-center mt-5  hover:bg-[#202124]  mx-auto hover:z-20 hover:text-white'
                                    sx={{ maxWidth: 345, padding: 5 }}
                                >
                                    <div className='absolute inset-0 opacity-40 '
                                        style={{ backgroundImage: `url(${CardBG})`, backgroundPosition: 'center', backgroundSize: 'cover', zIndex: "-10" }}
                                    ></div>

                                    <CardActionArea>
                                        <AcUnitIcon className='text-primary text-center' />
                                        <CardContent>
                                            <Typography className='hover:text-red-600' gutterBottom variant="h5" component="div">
                                                {service.title}
                                            </Typography>
                                            <Typography variant="body2" color="text-gray">
                                                {service.description}
                                            </Typography>
                                        </CardContent>
                                        <button className='text-lg text-primary'>Read More <ArrowForwardIcon /></button>
                                    </CardActionArea>
                                </Card>
                            </div>
                        )
                    }
                </div>


                <p className='text-lg text-center my-20'>You can also find our <br /> <Link to='#' className='text-primary'> Consultant Service to contact for the consulting</Link></p>
            </div >
        </div>
    );
};

export default Agency;