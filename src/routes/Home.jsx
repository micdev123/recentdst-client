import { useEffect, useRef, useState } from 'react'
import { BiCurrentLocation, BiSolidPhone } from "react-icons/bi"
import { MdEmail, MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md"

import { ImQuotesLeft } from "react-icons/im"
import { AiOutlinePlus, AiOutlineMinus, AiFillInstagram } from "react-icons/ai"
import { FaSquareXTwitter } from "react-icons/fa6"
import { FaFacebookSquare } from "react-icons/fa"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { accordions, orgs, projects, services } from '../data'
import throttle from 'lodash.throttle';
import Header from '../components/Home/Header'


const Home = () => {
    const [currService, setCurrService] = useState("all");

    // Accordions
    const [accordion, setAccordion] = useState(-1)
    const [dropInfo, setDropInfo] = useState(false);

   
    const services_container = useRef(null); // Services slider Ref
    const tabSlideRef = useRef(null);

    

    


    

    const handleLeftSlide = (e) => {
        e.preventDefault();
        services_container.current.scrollLeft -= services_container.current.offsetWidth;
    }

    const handleRightSlide = (e) => {
        e.preventDefault();
        services_container.current.scrollLeft += services_container.current.offsetWidth;
    }

    const slideNext = () => {
        tabSlideRef.current.scrollLeft += 150;
    }

    const slidePre = () => {
        tabSlideRef.current.scrollLeft -= 150;
    }
    // End of Header Slider

    // The handleScroll function is a throttled function that calculates whether the back and forward buttons should be visible based on the current scroll position (scrollLeft), the width of the visible area (clientWidth), and the total width of the scrollable content (scrollWidth).
    const handleScroll = throttle(() => {
        // Get the current scroll position, client width, and total scrollable width
        const scrollLeft = tabSlideRef.current.scrollLeft;
        const clientWidth = tabSlideRef.current.clientWidth;
        const scrollWidth = tabSlideRef.current.scrollWidth;

        // Calculate whether to show or hide the buttons based on scroll position
        const isBackButtonVisible = scrollLeft >= 15;
        const isForwardButtonVisible = scrollLeft < scrollWidth - clientWidth - 15;

        // Set the visibility of the buttons using DOM manipulation
        const backButton = document.getElementById('backButton');
        const forwardButton = document.getElementById('forwardButton');

        // Update the visibility of the back button based on the calculated condition
        if (backButton) {
            backButton.style.display = isBackButtonVisible ? 'block' : 'none';
        }

        // Update the visibility of the forward button based on the calculated condition
        if (forwardButton) {
            forwardButton.style.display = isForwardButtonVisible ? 'block' : 'none';
        }
    }, 200); // Throttle interval in milliseconds

    // The useEffect hook is used to attach the scroll event listener when the component mounts.
    // It also handles cleanup by removing the event listener when the component unmounts.
    useEffect(() => {
        const currentRef = tabSlideRef.current;

        if (currentRef) {
            // Attach the scroll event listener when component mounts
            currentRef.addEventListener('scroll', handleScroll);
        }
        
        // Clean up the scroll event listener when component unmounts
        return () => {
            currentRef.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    if (!services || !services.length) return null;

    return (
        <div className=''>
            {/* Main */}
            <main className='my-[5rem]'>
                {/* Services */}
                <section className='services my-[5rem] max-w-[90%] mx-auto sm:max-w-[90%] xl:max-w-[80%]'>
                    <div className="services-container">
                        <div className="services-right-text-content">
                            <p className='text-[12px] font-medium'>ReCentDST Ltd</p>
                            <h3 className='text-[1.8rem] font-medium'>Your Cutting-Edge Research Company</h3>
                            <p className='text-[12.5px] my-2 md:w-[50%]'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aperiam alias suscipit esse facilis officiis qui porro odio eos pariatur.
                            </p>
                            <button className='text-[11px] bg-zinc-800 text-white py-[6px] px-[15px] rounded-sm mt-2'>
                                Let's start a project
                            </button>
                        </div>
                        {/* View More Btn */}
                        <div className="view-more flex items-center justify-end mt-[2rem]">
                            <button
                                onClick={handleLeftSlide}
                                className='left-nav bg-zinc-200 py-[2px] px-[5px]'>
                                    <MdOutlineNavigateBefore />
                                </button>
                                <div className="w-[2px] h-[1rem] bg-zinc-300"></div>
                                <button
                                    onClick={handleRightSlide}
                                    className='right-nav bg-zinc-200 py-[2px] px-[5px]'>
                                    <MdOutlineNavigateNext />
                                </button>
                        </div>
                        {/* Services Cards */}
                        <div className="services-cards w-[100%] mt-[1rem] flex overflow-x-scroll scrollbar scrollbar-w-[1px] scrollbar-h-[1px] md:gap-x-[1rem]" ref={services_container}>
                            {services?.map((service) => {
                                const { id, name, icon, info } = service;
                                return (
                                    <div className="service-card min-w-[100%] bg-zinc-100 rounded-md p-[1.5rem] md:min-w-[20rem]" key={id}>
                                        <div className="icon w-[2rem] mb-4">
                                            <img src={icon} alt="" />
                                        </div>
                                        <h2 className='text-[15px] font-medium mb-3'>
                                            {name}
                                        </h2>
                                        <p className='text-[12.5px] line-clamp-3'>
                                            {info}
                                        </p>
                                        {/* <div className="image w-[100%] mt-4 bg-white p-3 rounded-md md:h-[15rem]">
                                            <img src={image} alt="" className='w-[100%] h-[100%] object-cover rounded-md' />
                                        </div> */}
                                    </div>
                                )
                            })}
                        </div>
                        
                    </div>
                </section>

                {/* Projects */}
                <section className="projects">
                    <div className="head max-w-[90%] mx-auto sm:max-w-[90%] xl:max-w-[80%]">
                        <h2 className='text-[1.8rem] font-medium'>
                            Our Projects
                        </h2>
                        <p className='text-[13px] mt-2 md:w-[60%]'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente laboriosam est aspernatur autem, numquam neque illum maxime, omnis aliquam ipsam porro! Praesentium odio ducimus.
                        </p>
                        {/* Tabs */}
                        <div className="tab_container w-[100%] flex items-center justify-center relative bg-red-500">
                            <div className="buttons flex items-center z-20 md:hidden">
                                <button
                                    id="backButton"
                                    onClick={() => slidePre()}
                                    className="hidden absolute left-0 px-[20px] h-[100%] bg-gradient-to-r from-zinc-200 to-zinc-100"
                                >
                                    <IoIosArrowBack className='text-[16px]' />
                                </button>
                                <button
                                    id="forwardButton"
                                    onClick={() => slideNext()}
                                    className="absolute right-0 px-[20px] h-[100%] bg-gradient-to-r from-zinc-50 to-zinc-100 flex items-center justify-center"
                                >
                                    <IoIosArrowForward className='text-[16px]' />
                                </button>
                            </div>
                            <div className="tabs w-[100%] flex items-center justify-center mt-[3rem] overflow-x-scroll scrollbar scrollbar-thumb-slate-800 scrollbar-track-slate-400 scrollbar-w-[0px] scrollbar-h-[0px] scroll-smooth" ref={tabSlideRef}>
                                <button
                                    onClick={() => setCurrService("all")}
                                    className={`min-w-fit text-[13px] py-[5px] px-[15px] rounded-sm font-medium capitalize outline-none border-0 ${currService === 'all' && 'bg-zinc-200'} md:text-[12px]`}
                                >
                                    All
                                </button>
                                {services?.map((service) => (
                                    <button
                                        onClick={() => setCurrService(service?.name)}
                                        className={`min-w-fit text-[13px] py-[5px] px-[15px] rounded-sm font-medium capitalize outline-none border-0 ${currService === service?.name ? 'bg-zinc-200 text-zinc-900' : "text-zinc-400"} hover:text-zinc-900 md:text-[12px]`} key={service?.id}
                                    >
                                        {service?.slug}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Projects */}
                    <div className={`mt-[2rem] overflow-x-scroll scrollbar scrollbar-w-[1px] scrollbar-h-[1px] ${projects?.filter((project) => project.service === currService).length > 3 || currService === "all" ? "null" : "w-[80%] mx-auto"}`}>
                        <div className="tabs-contents">
                        <div className={`flex items-center gap-x-[5px] ${projects?.filter((project) => project.service === currService).length > 2 || currService === "all" ? "animate-scroll" : null}`}>
                                {currService === "all" ? (projects?.map((project) => (
                                    <div className="content w-[25rem] h-[20rem] relative" key={project?.id}>
                                        <div className="img w-[25rem] h-[20rem] relative rounded-sm">
                                            <div className="w-[100%] h-[100%] bg-zinc-800 absolute rounded-sm opacity-70"></div>
                                            <img src={project?.cover_img} alt="" className='w-[100%] h-[100%] object-cover rounded-sm' />
                                        </div>
                                        <div className="text-content absolute bottom-[1rem] p-3 text-white font-medium">
                                            <p className="text-[11px]">
                                                {project?.service}
                                            </p>
                                            <h2 className='text-[16px]'>
                                                {project?.name}
                                            </h2>
                                        </div>
                                    </div>
                                ))) : (
                                    projects?.filter((project) => project.service === currService)
                                        .map((currProject) => (
                                            <div className="content w-[25rem] h-[20rem] relative" key={currProject?.id}>
                                                <div className="img w-[25rem] h-[20rem] relative rounded-sm">
                                                    {/* Overlay Background */}
                                                    <div className="w-[100%] h-[100%] bg-zinc-800 absolute rounded-sm opacity-60"></div>
                                                    {/* Current Project Image */}
                                                    <img src={currProject?.cover_img} alt="project image" className='w-[100%] h-[100%] object-cover rounded-sm' />
                                                </div>
                                                {/* Current Project Textual Content */}
                                                <div className="text-content absolute bottom-[1rem] p-3 text-white font-medium">
                                                    <p className="text-[11px]">
                                                        {currProject?.service}
                                                    </p>
                                                    <h2 className='text-[16px]'>
                                                        {currProject?.name}
                                                    </h2>
                                                </div>
                                            </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Trusted By */}
                <section className="trusted-by my-[5rem] max-w-[90%] mx-auto sm:max-w-[90%] xl:max-w-[80%]">
                    <h2 className='text-[1.8rem] font-medium text-center mb-[1rem]'>
                        Trusted By
                    </h2>
                    <p className='text-[12px] mx-auto mb-[2rem] text-center md:w-[50%]'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat nostrum earum inventore similique sit obcaecati facilis recusandae hic suscipit aspernatur!
                    </p>
                    {/* Organization */}
                    <div className="grid grid-cols-2 items-center gap-[1rem] md:grid-cols-5">
                        {orgs?.map((org) => (
                            <p className='min-w-[10rem] bg-zinc-200 text-zinc-500 flex items-center justify-center text-[0.9rem] font-bold rounded-md py-[18px] px-[10px]' key={org?.id}>
                                {org?.name}
                            </p>
                        ))}
                    </div>
                </section>

                {/* Testimonials */}
                <section className="my-[5rem] max-w-[90%] mx-auto sm:max-w-[90%] xl:max-w-[80%]">
                    <div className="flex flex-col items-center justify-between gap-x-[1.5rem] md:flex-row">
                        <div className="left md:w-[40%]">
                            <p className='text-[12px] font-medium'>
                                Not yet sure?
                            </p>
                            <h3 className='text-[2rem] font-medium leading-[2.5rem]'>
                                See what others are saying about us
                            </h3>
                        </div>

                        <div className="right flex gap-x-[2rem] md:w-[60%]">
                            <div className="badge-1">
                                <div className="saying my-[1.5rem]">
                                    <p className='text-[12px] border-l-[1.7px] border-zinc-300 pl-2 flex gap-x-1'>
                                        <span className='text-[1rem]'>
                                            <ImQuotesLeft />
                                        </span>
                                        <span className='mt-4'>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis minima necessitatibus voluptas provident illo minus impedit ipsam mollitia, dolorem obcaecati, ullam voluptatem? Consequatur accusamus porro veritatis eligendi deleniti est nihil!
                                        </span>
                                    </p>
                                    <div className="author text-[11.5px] flex items-center gap-x-2 mt-2 pl-2">
                                        <p className='font-medium'>
                                            Alusine Kamara.
                                        </p>
                                        <p className='text-[10px] text-zinc-500'>
                                            Wilberforce, Freetown
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="saying my-[1.5rem]">
                                    <p className='text-[12px] border-l-[1.7px] border-zinc-300 pl-2 flex gap-x-1'>
                                        <span className='text-[1rem]'>
                                            <ImQuotesLeft />
                                        </span>
                                        <span className='mt-4'>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis minima necessitatibus voluptas provident illo minus impedit ipsam mollitia, dolorem obcaecati, ullam voluptatem? Consequatur accusamus porro veritatis eligendi deleniti est nihil!
                                        </span>
                                    </p>
                                    <div className="author text-[11.5px] flex items-center gap-x-2 mt-2 pl-2">
                                        <p className='font-medium'>
                                            Alusine Kamara.
                                        </p>
                                        <p className='text-[10px] text-zinc-500'>
                                            Wilberforce, Freetown
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="badge-2 hidden mt-[7rem] md:block">
                                <div className="saying my-[1.5rem]">
                                    <p className='text-[12px] border-l-[1.7px] border-zinc-300 pl-2 flex gap-x-1'>
                                        <span className='text-[1rem]'>
                                            <ImQuotesLeft />
                                        </span>
                                        <span className='mt-4'>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis minima necessitatibus voluptas provident illo minus impedit ipsam mollitia, dolorem obcaecati, ullam voluptatem? Consequatur accusamus porro veritatis eligendi deleniti est nihil!
                                        </span>
                                    </p>
                                    <div className="author text-[11.5px] flex items-center gap-x-2 mt-2 pl-2">
                                        <p className='font-medium'>
                                            Alusine Kamara.
                                        </p>
                                        <p className='text-[10px] text-zinc-500'>
                                            Wilberforce, Freetown
                                        </p>
                                    </div>
                                </div>

                                <div className="saying my-[1.5rem]">
                                    <p className='text-[12px] border-l-[1.7px] border-zinc-300 pl-2 flex gap-x-1'>
                                        <span className='text-[1rem]'>
                                            <ImQuotesLeft />
                                        </span>
                                        <span className='mt-4'>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis minima necessitatibus voluptas provident illo minus impedit ipsam mollitia, dolorem obcaecati, ullam voluptatem? Consequatur accusamus porro veritatis eligendi deleniti est nihil!
                                        </span>
                                    </p>
                                    <div className="author text-[11.5px] flex items-center gap-x-2 mt-2 pl-2">
                                        <p className='font-medium'>
                                            Alusine Kamara.
                                        </p>
                                        <p className='text-[10px] text-zinc-500'>
                                            Wilberforce, Freetown
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact & Key Takeaway */}
                <div className="my-[5rem] max-w-[90%] mx-auto sm:max-w-[90%] xl:max-w-[80%]">
                    <div className="grid grid-cols-1 gap-[4rem] md:grid-cols-2">
                        {/* Key Takeaway */}
                        <div className="key-takeaways">
                            <h3 className='text-[1.8rem] font-medium mb-[1.5rem]'>
                                Key Takeaways
                            </h3>
                            {/* Accordions */}
                            <div className="">
                                {accordions?.map((data, index) => (
                                    <div key={data?.id} className="accordion my-5 border-b-[1px] border-zinc-200 pb-2 last:border-0">
                                        <div
                                            onClick={() => {
                                                setAccordion(index);
                                                setDropInfo(!dropInfo);
                                            }}
                                            className="flex items-center justify-between cursor-pointer">
                                            <h3 className='title text-[15.5px]'>
                                                {data?.title}
                                            </h3>
                                            {dropInfo && accordion === index ? (
                                                <AiOutlineMinus className="border-[1px]  border-dotted border-zinc-800 p-[2px] rounded-md" /> 
                                                
                                            ) : (
                                                <AiOutlinePlus className="text-[16px] cursor-pointer border-[1px]  border-dotted border-zinc-800 p-[2px] rounded-md" />  
                                            )}
                                            
                                            
                                        </div>
                                        <div className="body mt-2">
                                            {dropInfo && accordion === index && (
                                                <p className={` text-[13px]`}>
                                                    {data?.info}
                                                </p>
                                            )}
                                            
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                    </div>
                </div>
            </main>
            {/* Footer */}
            <footer className='max-w-[90%] mx-auto bg-zinc-100 pt-[3rem] px-[1rem] rounded-md sm:max-w-[90%] xl:max-w-[80%] md:px-[2rem]'>
                <div className="footer-container flex flex-col gap-[3rem] mb-[1rem] md:flex-row">
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
                <div className="footer-bottom border-t-[1px] border-zinc-200 py-[8px] flex flex-col justify-between items-center md:flex-row">
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
        </div>
    )
}

export default Home