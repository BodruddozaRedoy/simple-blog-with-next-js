import React from 'react';

const BlogDetailsPage = async ({params}) => {
    const {id} = params
    console.log(id);
    
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const singlePost = await res.json()
    return (
        <div className='mt-10 min-h-screen flex-col justify-center items-center'>
            <p className='text-center'>User id: {singlePost.userId}</p>
             <h1 className='font-bold text-xl text-center'>Post Title: {singlePost.title}</h1>
             <p className='text-gray-400 text-center '>Details: {singlePost.body}</p>
        </div>
    );
};

export default BlogDetailsPage;