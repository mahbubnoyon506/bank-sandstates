import React from 'react';
import AgencyBg from '../assets/images/agency-bg.png'
import AgencySubBG from '../assets/images/agency-sub-bg.png'
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
        <div className='md:p-20' style={{ backgroundImage: `url(${AgencyBg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
            <div className='md:flex justify-between items-center'>
                <div className='p-20 sm:mb-2' style={{ backgroundImage: `url(${AgencySubBG})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                    <h2 className='text-5xl font-bold leading-normal pb-10'>We Make Your <br /> Agency <span className='text-primary'>Full <br /> Bright</span> </h2>
                    <p className='text-[#74777C] pr-10'>This Cheat Sheet offers tips and advice to help you get the essentials right. here's a list of the most important tasks of business accounting and their meaning.</p>
                </div>
                <div className='md:grid grid-cols-2 gap-3 '>
                    {
                        services.slice(0, 2).map((service, index) =>
                            <div key={index} className='sm:mb-2 sm:flex justify-center'>
                                <Card sx={{ maxWidth: 345, padding: 5 }}>
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
            <div className='md:grid grid-cols-4 gap-5 py-10'>
                {
                    services.slice(1, 5).map((service, index) =>
                        <div className='sm:flex justify-center'>
                            <Card sx={{ maxWidth: 345, padding: 5 }}>
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
            <p className='text-lg text-center'>You can also find our <Link to='#' className='text-primary'> Consultant Service to contact for the consulting</Link></p>
        </div>
    );
};

export default Agency;