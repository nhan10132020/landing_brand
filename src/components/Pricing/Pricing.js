import React from 'react'
import {BsCheckLg} from 'react-icons/bs'


const Pricing = () => {
  return (
    <div name='Pricing' className='w-full text-white my-24 relative'>
        <div className='w-full h-[800px] bg-slate-900 absolute '></div>
        
        
        <div className='relative max-w-[1240px] mx-auto py-12 '>
            <div className='text-center py-8 text-slate-300'>
                <h2 className='text-3xl uppercase'>Pricing</h2>
                <h className='text-5xl font-bold text-white py-8'>The right price for yout research.</h>
                <p className='text-3xl'>Lorem ispum dolor,sit amet consectetur adipisicing elit.Distinctio soluta recusandae praesentium magno reprehenderit volptatibus.</p>
            </div>

            <div className='grid md:grid-cols-2'>
                <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl'>
                    <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>STANDARD</span>
                    <div>
                        <p className='text-6xl font-bold py-4 '>$49<span className='text-xl text-slate-500'>/mo</span></p>
                    </div>
                    <p className='text-2xl py-8 text-slate-500'>
                        Lorem ispum dolor,sit amet consectetur adipisicing elit
                    </p>
                    <div className='text-2xl'>
                        <p className='flex py-4'><BsCheckLg size={"2rem"} className='mr-5 text-green-600' /> Lorem,ispum dolor.</p>
                        <p className='flex py-4'><BsCheckLg size={"2rem"} className='mr-5 text-green-600' /> Lorem,ispum dolor.</p>
                        <p className='flex py-4'><BsCheckLg size={"2rem"} className='mr-5 text-green-600' /> Lorem,ispum dolor.</p>
                        <p className='flex py-4'><BsCheckLg size={"2rem"} className='mr-5 text-green-600' /> Lorem,ispum dolor.</p>
                        <p className='flex py-4'><BsCheckLg size={"2rem"} className='mr-5 text-green-600' /> Lorem,ispum dolor.</p>
                        
                        <button className='w-full py-4 my-4'>Get Started</button>
                    </div>
                </div>
                <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl'>
                    <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>PREMIUM</span>
                    <div>
                        <p className='text-6xl font-bold py-4 '>$99<span className='text-xl text-slate-500'>/mo</span></p>
                    </div>
                    <p className='text-2xl py-8 text-slate-500'>
                        Lorem ispum dolor,sit amet consectetur adipisicing elit
                    </p>
                    <div className='text-2xl'>
                        <p className='flex py-4'><BsCheckLg size={"2rem"} className='mr-5 text-green-600' /> Lorem,ispum dolor.</p>
                        <p className='flex py-4'><BsCheckLg size={"2rem"} className='mr-5 text-green-600' /> Lorem,ispum dolor.</p>
                        <p className='flex py-4'><BsCheckLg size={"2rem"} className='mr-5 text-green-600' /> Lorem,ispum dolor.</p>
                        <p className='flex py-4'><BsCheckLg size={"2rem"} className='mr-5 text-green-600' /> Lorem,ispum dolor.</p>
                        <p className='flex py-4'><BsCheckLg size={"2rem"} className='mr-5 text-green-600' /> Lorem,ispum dolor.</p>
                        
                        <button className='w-full py-4 my-4'>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pricing