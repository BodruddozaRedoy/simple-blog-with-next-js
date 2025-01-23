import Link from 'next/link';
import React from 'react';

const HomePage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts = await res.json()
  // console.log(posts);
  
  // console.log(posts[0]);
  
  return (
    <div className='mx-10'>
      <h1 className='text-3xl font-bold text-center my-5'>Blogs</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-center'>
        {
          posts.map((post, index) => (
            <div key={index} className='bg-white rounded-xl shadow-md text-black p-10 space-y-4 flex flex-col items-center'>
              <Link href={`/blog/${post.id}`}><h1 className='font-bold text-xl text-center'>{post.title}</h1></Link>
              <p className='text-gray-400 text-center '>{post.body}</p>
              <Link href={`/blog/${post.id}`}><button className='btn text-center'>Details</button></Link>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default HomePage;