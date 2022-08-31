import React from 'react';
import Image from 'next/image';

const weather = ({data}) => {
  return (
    <div className='relative flex flex-col justify-between max-w-[500] w-full h-[90vh] m-auto p-4 text-gray-300 z-10'>
        <div className='relative flex justify-between pt-12'>
            <div className='flex flex-col items-center'>
                <Image src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt='/' width='100' height='100' />
                <p className='text-2xl'>{data.weather[0].main}</p>
            </div>
            <p className='text-9xl'>{data.main.temp.toFixed(0)}&#176;</p>
        </div>
        {/* bottom card */}
        <div className='bg-black/50 p-8 rounded-md'>
        <p className='text-center text-2xl pb-6'>Weather in {data.name}</p>
        <div className='flex justify-between text-center'>
            <div>
                <p className='font-semibold text-xl'>{data.main.feels_like.toFixed(0)}&#176;</p>
                <p>Feels like</p>
            </div>
            <div>
                <p className='font-semibold text-xl'>{data.main.humidity}%</p>
                <p>Humidity</p>
            </div>
            <div>
                <p className='font-semibold text-xl'>{data.wind.speed.toFixed(0)} MPH</p>
                <p>Wind</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default weather