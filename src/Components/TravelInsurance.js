import React from 'react'
import Button from '../Shared/Button'

function TravelInsurance() {
    return (
        <div className='py-10 px-5 lg:px-10 bg-[#eee]' >
            <h1 className=' text-2xl lg:text-4xl py-2'>Travel Insurance</h1>

            <div className='grid grid-cols-1  md:grid-cols-2'>
                <div className=''>
                    <p>Enjoy your trip - Fuss free, knowing you are covered! </p>
                    <p>BE Travel & Medical Insurance</p>
                    <p>BE Trip Cancellation & Trip Interruption Plan</p>
                    <p>BE Comprehensive Travel Insurance Plan</p>
                    <p>BE Enhanced family Travel Plan</p>
                </div>
            </div>

            <div>
                <h2 className='text-2xl lg:text-4xl mt-5'>Creditor Insurance</h2>
                <div className=''>
                    <p className='pt-2'>Need help with paying off, reducing your balance or making your payments in the event of death, disability or job loss?</p>

                    <p className='max-w-[80%]'>Include insurance as part of your overall financial plan and choose from our range of solutions for your BE Mortgage Loan, Personal Credit Line, Credit Card or Personal Loan to protect you and your family with your loan payments in the event of disability, job loss, critical illness or in the event of death.</p>
                    <div className='pt-3'>
                        <li>Creditor Insurance for BE Mortgages</li>
                        <li>Creditor Insurance for BE Personal Credit Line</li>
                        <li>Creditor Insurance for BE Personal Loans</li>
                        <li>BE Payment Protector™ Insurance for Credit Cards</li>
                    </div>

                </div>
            </div>

            <div>
                <h2 className="text-2xl lg:text-4xl mt-5 pb-2">Submit A Claim</h2>

                <div>
                    <p className=''>With BE Banks’s creditor protection insurance, you may be eligible to submit a job loss, disability, critical illness or life insurance claim.</p>
                    <h4 className='text-xl mt-2'>For creditor Protection Insurance for BE Mortgages, BE Personal Credit Line and BE Personal Loans, contact us today!</h4>

                    <div className='pt-3 '>
                        <li>Disability insurance claim form</li>
                        <li>Critical illness insurance claim form</li>
                        <li>Life insurance claim form</li>
                    </div>
                </div>

                <div className='flex gap-3 py-2'>
                    <Button>Login</Button>
                    <Button>Register</Button>
                </div>

            </div>

            <div className='bg-gradient-to-r from-[#ed1c23e6] to-[#ed541ce6] text-white font-semibold py-5 mt-4 rounded-sm'>
                <p className='text-xl px-4'>We offer you a one stop solution at the right time, with speed and efficiency, for your maximum benefit.</p>
            </div>

        </div>
    )
}

export default TravelInsurance