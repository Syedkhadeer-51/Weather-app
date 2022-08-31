import React from 'react';
import loader from '../public/spinner.gif'

const Spinner = () => {
  return (
    <>
        <Image className='w-[200px] m-auto block' src ={loader} alt='spinner_icon'/>
    </>
  )
}

export default Spinner