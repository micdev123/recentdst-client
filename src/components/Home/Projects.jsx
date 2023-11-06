import { useEffect, useRef, useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import throttle from 'lodash.throttle';
import { projects, services } from '../../data';
import Project from '../Project';

const Projects = () => {
    const tabSlideRef = useRef(null);
    const [currService, setCurrService] = useState("all");
    // console.log(currService);

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
    return (
        <section className="projects mt-[3rem] md:mt-[5rem]">
            <div className="head max-w-[90%] mx-auto sm:max-w-[90%] xl:max-w-[80%]">
                <h2 className='text-[1.8rem] font-medium'>
                    Our Projects
                </h2>
                <p className='text-[13px] mt-2 md:w-[60%]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente laboriosam est aspernatur autem, numquam neque illum maxime, omnis aliquam ipsam porro! Praesentium odio ducimus.
                </p>
                {/* Tabs */}
                <div className="tab_container w-[100%] mt-[3rem] flex items-center justify-center relative">
                    {/* Navigation buttons */}
                    <div className="buttons flex items-center z-20 md:hidden">
                        <button
                            id="backButton"
                            onClick={() => slidePre()}
                            className="hidden absolute left-0 px-[5px] h-[100%] bg-gradient-to-r from-zinc-200 to-zinc-100"
                        >
                            <IoIosArrowBack className='text-[16px]' />
                        </button>
                        <button
                            id="forwardButton"
                            onClick={() => slideNext()}
                            className="absolute right-0 px-[5px] h-[100%] bg-gradient-to-r from-zinc-100 to-zinc-200"
                        >
                            <IoIosArrowForward className='text-[16px]' />
                        </button>
                    </div>
                    <div className="tabs w-[100%] flex items-center justify-between overflow-x-scroll scrollbar scrollbar-thumb-slate-800 scrollbar-track-slate-400 scrollbar-w-[0px] scrollbar-h-[0px] scroll-smooth md:w-[90%] md:mx-auto" ref={tabSlideRef}>
                        <button
                            onClick={() => setCurrService("all")}
                            className={`min-w-fit text-[13px] py-[5px] px-[15px] rounded-sm capitalize outline-none border-0 text-zinc-400 ${currService === 'all' && 'bg-zinc-200 text-zinc-900 font-medium'} md:text-[12px]`}
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
                            <Project project={project} key={project?.id} />
                        ))) : (
                            projects?.filter((project) => project.service === currService).map((currProject) => (
                                <Project project={currProject} key={currProject?.id} />
                            ))
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects