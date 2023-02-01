import React from 'react'
import lgImg from '../../assets/cyber-bg.png'
import {BsFillCloudUploadFill} from 'react-icons/bs'
import {ImDatabase} from 'react-icons/im'
import {HiServer} from 'react-icons/hi'
import {SiFastapi} from 'react-icons/si'
const Hero = () => {
  return (
    <div name='Home' className='relative w-full h-screen bg-zinc-200 flex'>
      <div className  ='grid md:grid-cols-2 max-w-[1240px] m-auto'>
          <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
            <p className='text-2xl'>Unique Sequencing & Production</p>
            <h1 className='py-3 text-5xl md:text-7xl font-bold'>Cloud Management</h1>
            <p className='text-2xl'>This is our Tech brand.</p>
            <button className='py-3 px-6 md:w-[60%] my-4'>Get Started</button>
          </div>
          <div className='md:flex'>
            <img className='w-full md:my-auto' src={lgImg} alt=''/>
          </div>
          <div className='absolute flex flex-col py-8 md:min-w-[760px] 
          bottom-[2%] mx-1 transform md:-translate-x-1/2 md:left-1/2
         bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl'>
            <p>Data Services</p>
            <div className='flex justify-between flex-wrap px-4'>
                <p className='flex px-4 py-2 text-slate-500'><BsFillCloudUploadFill size={"24px"} className='text-indigo-600 mr-2'/> App Security</p>
                <p className='flex px-4 py-2 text-slate-500'><ImDatabase size={"24px"} className='text-indigo-600 mr-2'/> App Dashboard Design</p>
                <p className='flex px-4 py-2 text-slate-500'><HiServer size={"24px"} className='text-indigo-600 mr-2'/> Cloud Data</p>
                <p className='flex px-4 py-2 text-slate-500'><SiFastapi size={"24px"} className='text-indigo-600 mr-2'/> API Services</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Hero