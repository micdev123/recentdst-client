import { FaSquareXTwitter } from "react-icons/fa6"
import { FaFacebookSquare } from "react-icons/fa"
import { BiCurrentLocation, BiSolidPhone } from "react-icons/bi"
import { MdEmail } from "react-icons/md"
import { AiFillInstagram } from "react-icons/ai"

const Footer = () => {
    return (
        <footer className='max-w-[100%] mx-auto bg-zinc-100 pt-[3rem] rounded-md '>
            <div className="footer-container max-w-[90%] flex flex-col gap-[3rem] mb-[1rem] mx-auto md:flex-row sm:max-w-[90%] xl:max-w-[80%]">
                <div className="">
                    <h2 className='text-[1.2rem] font-medium'>
                        ReCentDST Ltd
                    </h2>
                    <p className='text-[14px] my-1'>
                        Your one-stop, cutting-edge research company.
                    </p>
                    <div className="mt-[1rem]">
                        <p className='flex items-center gap-x-1 text-[14px] my-2'>
                            <BiCurrentLocation />
                            51A Main Road Wilbeforce Freetown, Sierra Leone
                        </p>
                        <p className='flex items-center gap-x-1 text-[14px] my-2'>
                            <BiSolidPhone />
                            +232 76 803154 / +232 76 328067
                        </p>
                        <p className='flex items-center gap-x-1 text-[14px] my-2'>
                            <MdEmail />
                            info@recentdst.com
                        </p>
                    </div>
                </div>
                <div className="links flex flex-col gap-y-[1.5rem] gap-x-[4rem] md:flex-row">
                    <section className="information">
                        <h2 className='text-[0.9rem] font-medium'>
                            Information
                        </h2>
                        <p className='text-[13.5px] my-[8px]'>About Us</p>
                        <p className='text-[13.5px] my-[8px]'>Projects</p>
                        <p className='text-[13.5px] my-[8px]'>Blog</p>
                        <p className='text-[13.5px] my-[8px]'>Career</p>
                        <p className='text-[13.5px] my-[8px]'>Testimonials</p>
                    </section>
                    <section className="our-services">
                        <h2 className='text-[0.9rem] font-medium'>
                            Services
                        </h2>
                        <p className='text-[13.5px] my-[8px]'>Market Research</p>
                        <p className='text-[13.5px] my-[8px]'>Engineering & Technology</p>
                        <p className='text-[13.5px] my-[8px]'>Scientific Research</p>
                        <p className='text-[13.5px] my-[8px]'>ICT & Facilities</p>
                    </section>
                    <section className="helpful-links">
                        <h2 className='text-[0.9rem] font-medium'>
                            Helpful Links
                        </h2>
                        <p className='text-[13.5px] my-[8px]'>Services</p>
                        <p className='text-[13.5px] my-[8px]'>Support</p>
                        <p className='text-[13.5px] my-[8px]'>Contact</p>
                    </section>
                </div>
            </div>
            <div className="footer-bottom border-t-[1px] border-zinc-200 py-[8px] flex flex-col justify-between items-center mx-auto md:flex-row sm:max-w-[90%] xl:max-w-[80%]">
                <p className='text-[12.5px]'>
                    &copy;{new Date().getFullYear()} ReCentDST SL Ltd All rights reserved.
                </p>
                <div className="socials flex items-center gap-x-2">
                    <AiFillInstagram className='text-[1.2rem]' />
                    <FaSquareXTwitter className='text-[1rem]'  />
                    <FaFacebookSquare className='text-[1rem]'  />
                </div>
            </div>
        </footer>
    )
}

export default Footer