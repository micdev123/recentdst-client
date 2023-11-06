import { useState } from "react";
import { FiMenu } from "react-icons/fi"
import { RiSendPlaneFill } from "react-icons/ri"
import Contact from "./Contact";
import { Link } from "react-router-dom";

const TopNav = () => {
    const [openContactModal, setOpenContactModal] = useState(false); // Contact form modal
    const [mobileNav, setMobileNav] = useState(false)
    // Methods managing modal
    const handleOpenModal = () => setOpenContactModal(true);
    const handleCloseModal = () => setOpenContactModal(false);
    return (
        <div className='top-nav pt-6 pb-4 relative'>
            <div className={openContactModal | mobileNav ? 'w-[100%] h-[100%] fixed top-0 left-0 bg-zinc-900 opacity-[0.2] z-10' : ''}></div>
            {openContactModal && (
                <div className="contact_form w-[100%] absolute top-[3rem] right-0 left-0 mx-auto bg-white rounded-md p-[2rem] z-10 md:w-fit">
                    <Contact onClose={handleCloseModal} />
                </div>
            )}
            <nav>
                <ul className='flex items-center justify-between'>
                    <div className="items-center gap-x-[2.5rem] md:flex">
                        <Link to="/">
                            <h2 className='logo text-[1rem]'>
                                ReCentDST
                            </h2>
                        </Link>
                        <div className="hidden items-center gap-x-[1.8rem] text-[12px] font-medium md:flex">
                            
                        </div>
                        {/* <li className='border-[1px] border-zinc-500 rounded-md px-[10px] py-[2px] ml-[2rem]'>
                            Login
                        </li> */}
                    </div>
                    <div className="hidden text-[13px] items-center gap-x-[1.8rem] md:flex">
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
                        <button
                            onClick={() => handleOpenModal()}
                            className='text-[11px] rounded-sm bg-zinc-700 text-white py-[5px] px-[15px] flex items-center gap-x-2 border-0 outline-none'
                        >
                            <RiSendPlaneFill className='text-[14px]' />
                            Let's Talk
                        </button>
                    </div>
                    <FiMenu
                        onClick={() => setMobileNav(!mobileNav)}
                        className='sm:hidden cursor-pointer z-40'
                    />
                    {/* Mobile Nav */}
                    {mobileNav && (
                        <div className="mobile_nav w-[100%] absolute top-[3.5rem] bg-white p-[2rem] text-[14px] rounded-md z-30">
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
                            <button
                                onClick={() => {
                                    handleOpenModal();
                                    setMobileNav(false)
                                }}
                                className='w-[100%] text-[11px] rounded-sm bg-zinc-700 text-white py-[6px] flex items-center justify-center mt-[1rem] border-0 outline-none'
                            >
                                <RiSendPlaneFill className='text-[14px]' />
                                Let's Talk
                            </button>
                        </div>
                    )}
                </ul>
            </nav>
        </div>
    )
}

export default TopNav