import { useState } from "react";

const Input = () => {
  
  const [username, setUsername] = useState(''); // username (to store the input value).
  const [userData, setUserData] = useState(null); // userData (to store the fetched data)
  
  const handleUsername = (e) => {
    console.log(e.target.value)
    setUsername(e.target.value);   
};

// 
  
  return (
    <>
    <div className='w-full flex justify-center relative pb-4'>
        <input className=' p-4 pr-12 dark:bg-gray-800 bg-white drop-shadow-2xl rounded-lg outline-none text-gray-400 w-full sm:w-3/4 md:w-1/2 mt-5 placeholder:text-gray-500 '
        type="text"
        value={username}
        onChange={handleUsername}
        placeholder='Search Github username....'
         />
         <span
        className="dark:text-white  text-gray-600 absolute right-0 top-[40%] sm:right-1/4 px-8 cursor-pointer" >
         <i className="fas fa-search" ></i>
         </span>
   
    </div>
    </>
  )
}

export default Input