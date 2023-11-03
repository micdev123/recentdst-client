import React from 'react'
import { FiMenu } from "react-icons/fi"
import { IoNotifications } from "react-icons/io5"

const TopNav = () => {
    return (
        <div className='top-nav pt-6 pb-4'>
            <nav>
                <ul className='flex items-center justify-between'>
                    <div className="items-center gap-x-[2.5rem] md:flex">
                        <li>
                            <h2 className='logo text-[1rem]'>
                                ReCentDST
                            </h2>
                        </li>
                        <div className="hidden items-center gap-x-[1.8rem] text-[12px] font-medium md:flex">
                            <li>
                                About Us
                            </li>
                            <li>
                                Services
                            </li>
                            <li>
                                Portfolio
                            </li>
                            <li>
                                Contact
                            </li>
                        </div>
                        {/* <li className='border-[1px] border-zinc-500 rounded-md px-[10px] py-[2px] ml-[2rem]'>
                            Login
                        </li> */}
                    </div>
                    <div className="hidden items-center gap-x-[1rem] md:flex">
                        <li className='text-[10px] font-medium border-[1px] border-zinc-400 rounded-md py-[5px] px-[10px]'>
                            Login
                        </li>
                        <li className='flex items-center gap-x-1 text-[10px] font-medium border-[1px] bg-zinc-800 text-white rounded-md py-[5px] px-[10px]'>
                            <IoNotifications className='text-[13px]' />
                            Subscribe
                        </li>
                    </div>
                    <FiMenu className='sm:hidden' />
                </ul>
            </nav>
        </div>
    )
}

export default TopNav