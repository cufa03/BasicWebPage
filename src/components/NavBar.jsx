import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
      <ul className='hidden md:flex'>
        <li className='p-4'>
          <span className='cursor-pointer'> Home</span>
        </li>
        <li className='p-4'>
          <span className='cursor-pointer'> Company</span>
        </li>
        <li className='p-4'>
          <span className='cursor-pointer'> Resources</span>
        </li>
        <li className='p-4'>
          <span className='cursor-pointer'> About</span>
        </li>
        <li className='p-4'>
          <span className='cursor-pointer'> Contact</span>
        </li>
      </ul>
      <div onClick={handleNav} className='cursor-pointer block md:hidden'>
        {nav ? <AiOutlineClose size={23} /> : <AiOutlineMenu size={23} />}
      </div>

      <div
        className={
          nav
            ? 'fixed left-0 top-0 w-[60%] border-r border-r-gray-100 h-full bg-[#000300] ease-in-out duration-300'
            : 'fixed left-[-100%]'
        }
      >
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4 pt-3'>
          REACT.
        </h1>

        <ul className='uppercase p-3'>
          <li className='p-4 border-b border-gray-600 '>
            <span className='cursor-pointer'>Home</span>
          </li>
          <li className='p-4 border-b border-gray-600'>
            <span className='cursor-pointer'>Company </span>
          </li>
          <li className='p-4 border-b border-gray-600'>
            <span className='cursor-pointer'>Resources </span>
          </li>
          <li className='p-4 border-b border-gray-600'>
            <span className='cursor-pointer'>About </span>
          </li>
          <li className='p-4'>
            <span className='cursor-pointer'>Contact </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
