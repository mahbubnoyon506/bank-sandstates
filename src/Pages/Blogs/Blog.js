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
            'category' : 'Marketing',
            'author' : 'David Smith',
            'title' : 'The accounting department also keeps detailed records',
            'thumbnail' : '',
            'date' : '13 Oct 2022'
        },
        {
            'category' : 'Marketing',
            'author' : 'David Smith',
            'title' : 'The accounting department also keeps detailed records',
            'thumbnail' : '',
            'date' : '13 Oct 2022'
        },
        {
            'category' : 'Marketing',
            'author' : 'David Smith',
            'title' : 'The accounting department also keeps detailed records',
            'thumbnail' : '',
            'date' : '13 Oct 2022'
        },
        {
            'category' : 'Marketing',
            'author' : 'David Smith',
            'title' : 'The accounting department also keeps detailed records',
            'thumbnail' : '',
            'date' : '13 Oct 2022'
        },
        {
            'category' : 'Marketing',
            'author' : 'David Smith',
            'title' : 'The accounting department also keeps detailed records',
            'thumbnail' : '',
            'date' : '13 Oct 2022'
        },
        {
            'category' : 'Marketing',
            'author' : 'David Smith',
            'title' : 'The accounting department also keeps detailed records',
            'thumbnail' : '',
            'date' : '13 Oct 2022'
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
            <div className='md:grid grid-cols-2 gap-10'>
                <div className='md:grid grid-cols-2 gap-5'>
                    {
                        posts.map((post, index) => 
                        
                    <div key={index}>
                        <div class="card bg-base-100 shadow-xl z-0">
                            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                            <div class="card-body">
                                <p className='text-[#74777C]'><FolderIcon />{post.category } | <PersonIcon /> {post.author }</p>
                                <h2 class="card-title">{post.title}</h2>
                            </div>
                        </div>
                        <button class="btn btn-link rounded-full no-underline bg-base-100  hover:bg-primary hover:text-white hover:no-underline shadow-md">Read More</button>
                    </div>
                        )
                    }
                    <Stack spacing={2}>
                        <Pagination count={10} variant="outlined" />
                    </Stack>
                </div>
                
                {/* sidebar starts */}
                <div>
                    <div className='bg-[#FFEFF0] p-10'> <input type="text" placeholder="Type here" class="input w-full max-w-xs rounded-full p-5" /> <SearchIcon className='text-primary cursor-pointer' /> </div>
                    <div className='bg-[#FFEFF0] p-10 mt-10'>
                        <h2 className='text-2xl font-semibold mb-2'>Categories</h2>
                        {
                            categories.map((category, index) =>
                                <div className='flex justify-between items-center bg-base-100 p-2 mt-2'><ArrowForwardIosIcon className='text-primary' /> <p className='text-xl font-medium text-left text-[#74777C]'>{category.name}</p> <button className='rounded-full px-4 py-2 bg-primary text-base-100 text-xl'>{category.posts}</button></div>
                            )
                        }
                    </div>
                    <div className='bg-[#FFEFF0] p-10 mt-10'>
                        <h2 className='text-2xl font-semibold mb-2'>Popular Posts</h2>
                        {
                            posts.map((post, index) => 
                            
                        <div key={index} className='flex items-center py-5 border-b-2'>
                            <img src={support} alt="" />
                            <div className='ml-2'>
                                <p className='font-medium text-xl'> {post.title}</p>
                                <p className='font-medium text-md'> <CalendarMonthIcon />{post.date} </p>
                            </div>
                        </div>
                            )
                        }
                    </div>
                    <div className='bg-[#FFEFF0] p-10 mt-10'>
                        <h2 className='text-2xl font-semibold mb-2'>Tags</h2>
                        <div className='grid grid-cols-4 gap-5 py-5'>
                            <button className='btn btn-link rounded-full no-underline bg-base-100 hover:bg-primary hover:text-white hover:no-underline'>UI/UX</button>
                            <button className='btn btn-link rounded-full no-underline bg-base-100 hover:bg-primary hover:text-white hover:no-underline'>Services</button>
                            <button className='btn btn-link rounded-full no-underline bg-base-100 hover:bg-primary hover:text-white hover:no-underline'>Tools</button>
                            <button className='btn btn-link rounded-full no-underline bg-base-100 hover:bg-primary hover:text-white hover:no-underline'>Products</button>
                            <button className='btn btn-link rounded-full no-underline bg-base-100 hover:bg-primary hover:text-white hover:no-underline'>Solutions</button>
                            <button className='btn btn-link rounded-full no-underline bg-base-100 hover:bg-primary hover:text-white hover:no-underline'>Combo</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;