import React from 'react';
import support from '../../assets/images/1.png'
import SearchIcon from '@mui/icons-material/Search';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FolderIcon from '@mui/icons-material/Folder';
import PersonIcon from '@mui/icons-material/Person';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Blog = () => {
    const posts = [
        {
            'category': 'Marketing',
            'author': 'David Smith',
            'title': 'The accounting department also keeps detailed records',
            'thumbnail': 'https://i.ibb.co/WvK4BsY/login-signup.jpg',
            'date': '13 Oct 2022'
        },
        {
            'category': 'Marketing',
            'author': 'David Smith',
            'title': 'The accounting department also keeps detailed records',
            'thumbnail': 'https://i.ibb.co/WvK4BsY/login-signup.jpg',
            'date': '13 Oct 2022'
        },
        {
            'category': 'Marketing',
            'author': 'David Smith',
            'title': 'The accounting department also keeps detailed records',
            'thumbnail': 'https://i.ibb.co/WvK4BsY/login-signup.jpg',
            'date': '13 Oct 2022'
        },
        {
            'category': 'Marketing',
            'author': 'David Smith',
            'title': 'The accounting department also keeps detailed records',
            'thumbnail': 'https://i.ibb.co/WvK4BsY/login-signup.jpg',
            'date': '13 Oct 2022'
        },
        {
            'category': 'Marketing',
            'author': 'David Smith',
            'title': 'The accounting department also keeps detailed records',
            'thumbnail': 'https://i.ibb.co/WvK4BsY/login-signup.jpg',
            'date': '13 Oct 2022'
        },
        {
            'category': 'Marketing',
            'author': 'David Smith',
            'title': 'The accounting department also keeps detailed records',
            'thumbnail': 'https://i.ibb.co/WvK4BsY/login-signup.jpg',
            'date': '13 Oct 2022'
        }
    ]
    const categories = [
        {
            'name': 'SEO Marketing',
            'posts': '10'
        },
        {
            'name': 'Financial Work',
            'posts': '15'
        },
        {
            'name': 'Business Growth',
            'posts': '20'
        },
        {
            'name': 'Market Strategy',
            'posts': '5'
        }
    ]
    return (
        <div className='md:p-20 bg-base-100'>
            {/* posts */}
            <div className='md:grid grid-cols-3 gap-10'>
                <div className='col-span-2 '>
                    <div className='md:grid grid-cols-2 gap-5'>
                    {
                        posts.map((post, index) =>
                            <div className='border shadow-md'>
                                <img src={post.thumbnail} alt="" />
                                <p className='text-[#74777C] px-5 p-5'> <FolderIcon /> {post.category} | <PersonIcon /> {post.author} </p>
                                <h2 className='font-medium text-xl px-5'>{post.title}</h2>
                                <p className='px-5'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quisquam voluptas unde nulla quas voluptatibus eos, itaque minus rem! Consectetur ullam, aut expedita tenetur consequatur corrupti natus quibusdam nemo repudiandae sequi saepe repellat, ad officiis. Quas ducimus quis deserunt repudiandae ad voluptate consequuntur?</p>
                                <button className='mb-5 ml-5 btn btn-link no-underline shadow-md rounded-full mt-5 hover:bg-primary hover:text-base-100 hover:no-underline'>Read More</button>
                            </div>
                        )
                    }
                    </div>
                    <div className='flex justify-center items-center sm:my-5'>
                        <Stack spacing={2}>
                            <Pagination count={10} variant="outlined" />
                        </Stack>
                    </div>
                </div>

                {/* sidebar starts */}
                <div>
                    <div className='bg-[#FFEFF0] p-10 flex justify-center items-center'> <input type="text" placeholder="Type here" class="input w-full max-w-xs rounded-full p-5" /> <SearchIcon className='text-primary cursor-pointer ml-[-40px]' /> </div>
                    <div className='bg-[#FFEFF0] p-10 mt-10'>
                        <h2 className='text-2xl font-semibold mb-2'>Categories</h2>
                        {
                            categories.map((category, index) =>
                                <div className='flex justify-between items-center bg-base-100 p-2 mt-2'><ArrowForwardIosIcon className='text-primary' /> <p className='text-xl font-medium text-left text-[#74777C]'>{category.name}</p> <button className='rounded-full px-4 py-2 bg-primary text-base-100'>{category.posts}</button></div>
                            )
                        }
                    </div>
                    <div className='bg-[#FFEFF0] p-10 mt-10'>
                        <h2 className='text-2xl font-semibold mb-2'>Popular Posts</h2>
                        {
                            posts.map((post, index) =>

                                <div key={index} className='md:flex items-center py-5 border-b-2'>
                                    <img className='md:w-[8vw]' src={post.thumbnail} alt="" />
                                    <div className='ml-2'>
                                        <p className='font-bold'> {post.title}</p>
                                        <p className=' text-[#74777C]'> <CalendarMonthIcon />{post.date} </p>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className='bg-[#FFEFF0] p-10 mt-10'>
                        <h2 className='text-2xl font-semibold mb-2'>Tags</h2>
                        <div className='grid grid-cols-3 gap-5 py-5'>
                            <p className='text-[11px] btn btn-link rounded-full no-underline bg-base-100 hover:bg-primary hover:text-white hover:no-underline'>Services</p>
                            <p className='text-[11px] btn btn-link rounded-full no-underline bg-base-100 hover:bg-primary hover:text-white hover:no-underline'>Tools</p>
                            <p className='text-[11px] btn btn-link rounded-full no-underline bg-base-100 hover:bg-primary hover:text-white hover:no-underline'>Products</p>
                            <p className='text-[11px] btn btn-link rounded-full no-underline bg-base-100 hover:bg-primary hover:text-white hover:no-underline'>Solutions</p>
                            <p className='text-[11px] btn btn-link rounded-full no-underline bg-base-100 hover:bg-primary hover:text-white hover:no-underline'>UI/UX</p>
                            <p className='text-[11px] btn btn-link rounded-full no-underline bg-base-100 hover:bg-primary hover:text-white hover:no-underline'>Combo</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;