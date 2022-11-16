import React, { useEffect } from 'react';
import Button from '../../Shared/Button';
import CircleIcon from '@mui/icons-material/Circle';
import { FaCircle } from 'react-icons/fa';

const Corporate = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div className='p-5 lg:p-20 bg-white'>
            <h1 className='text-4xl font-bold pb-10'>Corporate</h1>
            <p>BE Bank's team of professional bankers is committed to supporting commercial customers to grow and prosper. Whether you're heading a start-up or a global venture, you can rely on us to be your trusted partner in this journey. <br /> <br /> The BE Corporate and Business package offers you a convenient and holistic banking experience powered by the Bank's wide array of products, services, and expertise. Focused on providing you with a whole range of banking services centered around your business needs, from maximizing deposit returns to various types of capital and financing options, a customer of BE Bank, will have access to the expertise and acumen of a team of dedicated professionals and you will have access to a differentiated service based upon customer-centricity and trust. Our Corporate Relationship Manager will contact you on a regular basis with the objective of better understanding your business operations and assessing your banking requirements. Following a comprehensive analysis of your business cycle and requirements, the Bank will propose a customized financial solution tailored to your needs.</p>
            <h3 className='text-xl font-bold pt-8 pb-4'>BE Flex Term Deposit</h3>
            <p>The BE Flex Term Deposit Account gives you the chance to deposit funds you may have in hand for a time period, with the flexibility of partial or full withdrawals during the term, for added flexibility, no questions asked!</p>
            <h3 className='text-xl font-bold pt-8 pb-4'>Key features:</h3>
            <ul>
                <li className='flex items-center'> <FaCircle className='pr-2' />available in 3, 6 and 12-month terms</li>
                <li className='flex items-center'> <FaCircle className='pr-2' />customers who avail themselves of the withdrawals prior to maturity can still earn interest on both the amount withdrawn and on the remaining amount kept in the Biz Flex Account</li>
                <li className='flex items-center'> <FaCircle className='pr-2' />the Account, denominated in euros, can be opened with a minimum balance of €100,000.</li>
            </ul>
            <h3 className='text-xl font-bold pt-8 pb-4'>Business Overdraft</h3>
            <p>Your business requires an element of financial flexibility in order to be prepared for unexpected eventualities. An overdraft facility operated as a limit on your BE Business Current Account, enables you to have funds available to meet your daily working capital requirements and help you manage changes to your cash flow. A business overdraft can help ensure that you have funds in place and available immediately, should the unexpected happen. <br /> <br /> Normally overdrafts are easy and quick to arrange and you will have access to the required funds in a short period of time. Your Customer Relationship Manager will be available to discuss your plans and needs and propose an overdraft limit and interest rate which best suits you.</p>
            <h3 className='text-xl font-bold pt-8 pb-4'>Key Features</h3>
            <ul>
                <li className='flex items-center'> <FaCircle className='pr-2' /> Help you to meet your working capital requirements</li>
                <li className='flex items-center'> <FaCircle className='pr-2' />Access to a limit that suits your cash flow management</li>
                <li className='flex items-center'> <FaCircle className='pr-2' />Pay for stock and other costs without waiting for your business proceeds</li>
                <li className='flex items-center'> <FaCircle className='pr-2' />The business proceeds are to be credited to the BE's Business Current Account on which the overdraft limit is set.</li>
            </ul>
            <div className='mt-5'>
                <Button>Login</Button> <span className='mr-3'></span>
                <Button>Register</Button>
            </div>
        </div>
    );
};

export default Corporate;