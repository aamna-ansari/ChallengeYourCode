import React, { useEffect, useState } from 'react'

const Input = () => {
  const [userName, setUserName]= useState ('aamna-ansari')

  useEffect(()=>{

  },[]);

  const handleSearch = () => {
    // Trigger the card re-render by passing the username
  };

  return (
    <>

    <div className='w-full flex justify-center relative pb-4'>
        <input className=' p-4 pr-12 bg-gray-800 shadow-md rounded-lg outline-none text-gray-400 w-full sm:w-3/4 md:w-1/2 mt-5 placeholder:text-gray-500 '
        type="text"
        placeholder='Search Github username....'
        onChange={e => setUserName(e.target.value)}
         />
         <span
         onClick={handleSearch}
        className="text-white absolute right-0 top-[40%] sm:right-1/4 px-8 cursor-pointer" >
         <i className="fas fa-search" ></i>
         </span>
   
    </div>
    <Card username={userName} />
    </>
  )
}

export default Input