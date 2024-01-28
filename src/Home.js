import React from 'react'
import {Link} from 'react-router-dom'
import { FaGithub,FaTwitter,FaLinkedin,FaInstagram,FaEma } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
// import banner from './assets/banner.jpg'
export default function Home() {
  return (
    <div className='w-full h-[1000px]'>
      <div className=''>
        <div>
        <img src="https://cdn.logojoy.com/wp-content/uploads/20210831173828/1167448_YoutubeBannerInfographic_082721_Option1-600x338.png" alt="" className='w-full h-[650px]' />
        </div> 
      </div>
      {/* main content */}
      <div className='max-w-[1100px] mx-auto mt-5  grid grid-cols-2 gap-20'>
          {/* left div */}
          <div className=''>
            <h2 className='text-3xl mb-4'>Hi there!</h2>
            <p>My name is Ritabrata Pal. I am currently pursuing BE/BTECH from National Institute of Technolodgy, Meghalaya  and have been working on Fullstack Development on Mern Stack. I am passionate about Development, ML, and web3. Eventually, I plan to establish a YouTube channel dedicated to AI, in order to fund a self-sustaining AI research lab.</p>
          </div>
          {/* right  div */}
          <div className=''>
            <h1 className='text-3xl mb-4'>Links</h1>
            <div className='flex gap-6'>
              <Link><FaGithub size={24}/></Link>
              <Link><FaLinkedin size={24}/></Link>
              <Link><FaTwitter size={24}/></Link>
              <Link><FaInstagram size={24}/></Link>
            </div>
            <p className='flex items-center gap-5 mt-5'>
              <MdEmail size={24} className='cursor-pointer'/>
                <span className='font-extralight text-xl'>rito3668@gmail.com</span>
            </p>
          </div>
      </div>


      {/* nav small */}
      <div className='fixed top-10 left-40 text-[17px] text-gray-500 font-extralight'>
          <Link><span className='hover:font-semibold   duration-200 ease-out'>01 &nbsp;:&nbsp; Home &nbsp;</span>|</Link>
          <Link><span className='hover:font-semibold  duration-200 ease-out'>&nbsp; 02 &nbsp;: &nbsp;Resume &nbsp;</span></Link>
      </div>
      {/* footer */}
      <div className='text-center mt-10'>Inspired by dank memes and big dreams :')</div>
      <div className='text-center'>	&#169; Ritabrata Pal 2024</div>
    </div>
  )
}
