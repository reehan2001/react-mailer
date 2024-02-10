import React from 'react';
import { Link } from 'react-router-dom';

const Content = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#FC2E20] text-2xl font-bold p-2'>
          Email for developers
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          send email campaigns without code.
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Fast, Flexible, Quality
          </p>
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>
          The best way to reach humans instead of spam folders.
        </p>
        <Link to="/app">
          <button className='bg-[#FC2E20] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Content;
