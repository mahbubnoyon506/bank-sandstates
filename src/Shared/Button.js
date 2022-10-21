import React from 'react'

const Button = (props) => {
    return (
        <>
            <button className='bg-gradient-to-r from-[rgba(237,28,35,0.5)] to-[#ed541ce6]   btn btn-primary  rounded-full'>
                {props.children}
            </button>
        </>
    )
}

export default Button