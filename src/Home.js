import React from 'react'
import {} from 'react-router-dom'
import { FaGithub,FaTwitter,FaLinkedin,FaInstagram,FaEma } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import {useTypewriter,Cursor} from 'react-simple-typewriter'
// import banner from './assets/banner.jpg'
import html from './assets/HTML5_logo_and_wordmark.svg.png'
export default function Home() {
  const [text] = useTypewriter({
    words:['Ritabrata','a Frontend Developer','an Engineering Student'],
    loop:{}
  })
  
  return (
    <div className='w-full h-[1000px] text-[18px]'>
      <div className=''>
        <div className='relative'>
        <img src="https://img.freepik.com/free-vector/stylish-glowing-digital-red-lines-banner_1017-23964.jpg" alt="" className='w-full h-[300px] md:h-[400px] lg:h-[650px]' />
        <div  className='absolute top-1/3 left-10 md:left-[150px] flex items-center text-[30px] sm:text-4xl md:text-6xl  text-white font-bold'>
        <h1>
        Hello, I am &nbsp;
       <div className=' md:mt-5'>
       <span>{text}</span>
        <Cursor/>
       </div>
      </h1>
        </div>
        </div> 
      </div>
      {/* main content */}
      <div className='max-w-[1100px] mx-auto mt-5  grid grid-cols-1 md:grid-cols-2 gap-20'>
          {/* left div */}
          <div className='p-4'>
            <h2 className='text-2xl md:text-3xl mb-4 font-medium'>Hi there!</h2>
            <p className='text-[15px] md:text-[18px]'>My name is Ritabrata Pal. I am currently pursuing B.Tech in Computer Science and Engineering from National Institute of Technology, Meghalaya  and have been working on Fullstack Development on Mern Stack. I am passionate about Development, Data Structures and Algorithms. I love to work with NextJs and TailwindCSS.</p>
            <div>
              <p className='mb-2'>Currently, I am:</p>
              <ul className='ml-4 text-[15px] md:text-[18px]'>
                <li>Learning NextJs</li>
                <li>Learning about Fullstack development</li>
                <li>Learning about Data strcutures and algorithms</li>
              </ul>
            </div>
          </div>
          {/* right  div */}
          <div className='mx-auto mt-3'>
            <h1 className='text-3xl mb-4'>Links</h1>
            <div className='flex gap-6'>
              <FaGithub size={21} onClick={()=>window.open('https://github.com/rito3668','_blank')} className='cursor-pointer'/>
              <FaLinkedin size={22} onClick={()=>window.open('https://www.linkedin.com/in/ritabrata-pal-6a728a229/','_blank')} className='cursor-pointer text-blue-800'/>
              <FaTwitter size={21}onClick={()=>window.open('https://twitter.com/unknown13668','_blank')} className='cursor-pointer text-blue-400'/>
              <FaInstagram size={21}onClick={()=>window.open('https://instagram.com/rit.2084','_blank')} className='cursor-pointer '/>
            </div>
            <p className='flex items-center gap-3 mt-5'>
              <CiMail size={24} className='cursor-pointer'/>
                <span className='font-medium text-lg cursor-pointer'>rito3668@gmail.com</span>
            </p>
            {/* Skills */}
          </div>
      </div>


      {/* nav small */}
      
      {/* footer */}
      <div className='text-center mt-10 mb-3 text-gray-600 text-[17px]'>Inspired by dank memes and big dreams :&#41; </div>
      <div className='text-center text-gray-600 text-[18px]'>	&#169; Ritabrata Pal 2024</div>
      
    </div>
  )
}
