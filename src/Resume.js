import React from 'react'
import NITM from './assets/NITM.jpg'
import Chat from './assets/chat.png'
import Project from './assets/project.png'
import { FaExternalLinkAlt } from "react-icons/fa";
export default function Resume() {
  return (
    <div className='max-w-[1200px] mx-auto mt-[200px] h-[1000px] font-semibold p-10'>
        <h1 className='text-4xl font-semibold mb-36  text-center md:text-left'>Resume</h1>
        {/* education div */}
        <div>
            <h1 className='text-[28px] font-normal text-center md:text-left'>Education</h1>
            <div className='mt-8 max-w-[1000px] mx-auto block text-center md:text-left md:flex gap-[200px] items-start'>
                <img src={NITM} alt="logo" className='w-[250px] h-[250px] mx-auto' />
                <div className='mt-4'>
                    <h1 className='text-xl font-extrabold my-3'>National Insitute of Technology Meghalaya</h1>
                    <h2 className='font-normal'>B.Tech Computer Science and Engineering | 2022-2026</h2>
                </div>
            </div>
        </div>
        {/* projects */}
        <h1 className='text-[28px] font-normal mt-20 text-center md:text-left '>Some Projects</h1>
        <div className='mt-10 '>
            <div className='mt-8 max-w-[1000px] mx-auto block text-center md:text-left md:flex gap-[150px] items-start'>
                <img src={Project} alt="logo" className='w-[350px] h-[174px] lg:w-[400px] lg:h-[200px] mx-auto' />
                <div className='mt-0'>
                    <h1 className='text-xl font-extrabold my-3'>DOJO APP</h1>
                    <h2 className='font-normal'><span className='font-semibold'>Desc:</span> Webapp for assigning users projects. It comes with User authentication</h2>
                    <h2 className='font-normal'><span className='font-semibold mr-2'>Techstack</span>React Js, Firebasev8.5</h2>
                    <a target='_blank' href="https://github.com/rito3668/project-management" className='md:flex items-center gap-1 hover:text-blue-700 inline-flex mx-auto '>Github Repo <FaExternalLinkAlt size={15}/></a>
                </div>
            </div>
            <div className='mt-20 max-w-[1000px] mx-auto md:flex text-center md:text-left gap-[150px] items-start'>
                <img src={Chat} alt="logo" className='w-[350px] h-[174px] lg:w-[400px] lg:h-[200px] mx-auto' />
                <div className='mt-0'>
                    <h1 className='text-xl font-extrabold my-3'>CHAT APP</h1>
                    <h2 className='font-normal'><span className='font-semibold'>Desc:</span> Webapp for chatting. It has features like blocking users, deleting messages for self or everyone and user authentication</h2>
                    <h2 className='font-normal'><span className='font-semibold mr-2'>Techstack</span>NextJs, Firebasev9, TailwindCSS</h2>
                    <a target='_blank' href="https://github.com/rito3668/next-firebase-chatapp" className='md:flex items-center inline-flex mx-auto gap-1 hover:text-blue-700'>Github Repo <FaExternalLinkAlt size={15}/></a>
                </div>
            </div>
        </div>
        <div className='text-center font-light mt-20 mb-3 text-gray-600 text-[17px]'>Inspired by dank memes and big dreams :&#41; </div>
      <div className='text-center text-gray-600 font-light  text-[18px]'>	&#169; Ritabrata Pal 2024</div>
    </div>
  )
}
