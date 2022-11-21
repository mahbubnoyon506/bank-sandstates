import React from 'react';
import { useEffect } from 'react';

const AboutUs = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className='p-5 lg:p-20 bg-white pt-16'>
            <div className=''>
                <h1 className='text-4xl font-bold pb-5'>ABOUT</h1>
                <div className=''>
                    <p className='pb-2'>As a key player in the global financial sector, BE Bank strives to be the bank of choice for businesses and individuals. We are driven by the highest principles of ethical and social responsibility. </p>
                    <p>We offer our personal and business clients products and services, catering to their individual needs. BE Bank's long-term strategic objective is to strengthen its position and reinforce its values whilst making sure that the Bank is ready for future trends and challenges. Our experienced team of customer service officers and financial advisors are motivated to serve you with proffesionalism and dedication. </p>
                </div>
                <h2 className='text-xl font-bold pt-8 pb-4'> Our Values</h2>
                <div className='pb-4'>
                    <p className='pt-2'>We are a team of inspired people who believe that opportunities start with a conversation, through which we strive to understand your aspirations for tomorrow.</p>
                    <p className='pt-2'>The values that guide our daily behaviour are at the basis of everything we do: Ambition, Responsibility and Empathy.</p>
                    <p className='pt-2'>Ambition to us represents a strong desire to do and achieve. We embrace change and face challenges head on, while continually looking for solutions.</p>
                    <p className='pt-2'>We take personal responsibility for growth and development, keeping in mind the community in which we operate. We want to share our knowledge and experience with our customers, who know they can count and depend on us, and who trust our word.</p>
                    <p className='pt-2'>We are empathic because we have the ability to understand and share the feelings of others. We understand our customers’ needs to deliver quality service. Let’s start new conversations and create new opportunities. Let’s build a new future together.</p>
                </div>
            </div>
            <div className='bg-gradient-to-r from-[rgba(237,28,35,0.9)] to-[#ed541ce6] text-white font-semibold py-5 mt-10 rounded-sm'>
                <p className='text-xl px-4'>Whatever challenges and opportunities lay ahead, BE Bank will be of help every step of the way. Choosing BE Bank to plan for life's greatest milestones is the smart choice.</p>
            </div>
        </div>
    );
};

export default AboutUs;