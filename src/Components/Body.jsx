import React from 'react'

const Body = () => {
    return (
        <div className='space-y-4 lg:flex'>
            <div className='flex items-center justify-center'>
                <img src="./assets/Blue-Shape.svg" alt="1st" className='-rotate-45 h-64 md:h-72' />
                <img src="./assets/Pink-Shape.svg" alt="2nd" className='absolute -rotate-[30deg] h-64 md:h-72' />
                <img src="./assets/Purple-Shape.svg" alt="3rd" className='absolute -rotate-[15deg] h-64 md:h-72' />
                <img src="./assets/Hero-Model.png" alt="hero" className='absolute h-64 md:h-72' />
            </div>
            <div>
                <h1 className='text-5xl font-bold font-playfair leading-tight'>Host your Website less than 3 minutes</h1>
                <p className='font-lato text-gray-400'>With Hoster,get your website up and running in no less than 3 minutes with the best competitive running pacakages ..</p>
                <form action="" className='flex flex-col gap-3 placeholder:text-red-400'>
                    <input className='rounded-md px-5 py-4 placeholder:text-red-400' type="email" placeholder="Enter your email..@gmail.com" />
                    <button className='rounded-md px-4 py-3 bg-sky-800 hover:bg-blue-300 text-white'>Join Waitlist!!</button>
                </form><br></br>
                <div className='flex gap-2'>
                    <img src="./assets/Checkmark.svg" alt="check" />
                    <p className='font-lato text-green-400'>No spam,ever,Unsubscribe anytime..</p>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Body