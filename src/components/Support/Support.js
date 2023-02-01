import React from 'react'
import {AiOutlinePhone} from 'react-icons/ai'
import {GrContact} from 'react-icons/gr'
import supportImg from '../../assets/support.jpg'
import {BiSupport,BiChip} from 'react-icons/bi'
const Support = () => {
  return (
    <div name='Support' className='w-full  mt-24 relative'>
            <div className='w-full h-[700px] bg-gray-900/90 absolute'>
                <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt=""/>
            </div>
            <div className='max-w-[1240px] mx-auto text-white relative'>
                <div className='px-4 py-12'>
                    <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>Support</h2>
                    <h1 className='text-5xl font-bold py-6 text-center'>Finding the right team</h1>
                    <p className='py-4 text-3xl text-slate-300'>Pellentesque eget quam pretium, efficitur dolor ut, mollis nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus porta vulputate massa, id vulputate ipsum porttitor vel.</p>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3  gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8 '>
                            <AiOutlinePhone size={"4rem"} className='bg-indigo-600 text-white p-4 rounded-lg mt-[-4rem]'/>
                            <h3 className='font-bold text-2xl my-6'>Sales</h3>
                            <p className='text-gray-600 text-xl'>Aliquam at libero et velit porta luctus. Fusce pulvinar orci scelerisque dolor finibus lacinia. Quisque feugiat, ex vel volutpat finibus, nulla sapien rutrum lacus, nec interdum quam magna nec diam</p>
                        </div>
                        <div className='bg-slate-100 pl-8 py-4 '>
                            <p className='flex items-center text-indigo-600'>Contact Us <GrContact size={"1.25rem"} className='ml-2'/></p>
                        </div>
                    </div>
                        <div className='bg-white rounded-xl shadow-2xl'>
                            <div className='p-8 '>
                                <BiSupport size={"4rem"} className='bg-indigo-600 text-white p-4 rounded-lg mt-[-4rem]'/>
                                <h3 className='font-bold text-2xl my-6'>Technical Support</h3>
                                <p className='text-gray-600 text-xl'>Aliquam at libero et velit porta luctus. Fusce pulvinar orci scelerisque dolor finibus lacinia. Quisque feugiat, ex vel volutpat finibus, nulla sapien rutrum lacus, nec interdum quam magna nec diam</p>
                            </div>
                            <div className='bg-slate-100 pl-8 py-4 '>
                                <p className='flex items-center text-indigo-600'>Contact Us <GrContact size={"1.25rem"} className='ml-2'/></p>
                            <div/>
                        </div>
                        
                    </div>
                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8 '>
                            <BiChip size={"4rem"} className='bg-indigo-600 text-white p-4 rounded-lg mt-[-4rem]'/>
                            <h3 className='font-bold text-2xl my-6'>Media Inquiries</h3>
                            <p className='text-gray-600 text-xl'>Aliquam at libero et velit porta luctus. Fusce pulvinar orci scelerisque dolor finibus lacinia. Quisque feugiat, ex vel volutpat finibus, nulla sapien rutrum lacus, nec interdum quam magna nec diam</p>
                        </div>
                        <div className='bg-slate-100 pl-8 py-4 '>
                            <p className='flex items-center text-indigo-600'>Contact Us <GrContact size={"1.25rem"} className='ml-2'/></p>
                        </div>
                    </div>
                </div>
            </div>  
    </div>
  )
}

export default Support