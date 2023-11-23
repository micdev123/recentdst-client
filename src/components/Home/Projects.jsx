import { useEffect, useRef, useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import throttle from 'lodash.throttle';
import Project from '../Project';
import { client } from '../../client';
import Tabs from './Tabs';

const Projects = () => {
    const tabContentSlideRef = useRef(null);
    const [currService, setCurrService] = useState("all");
    const [projects, setProjects] = useState([])

    
    // End of Header Slider

    const slideContentNext = () => {
        tabContentSlideRef.current.scrollLeft += 150;
    }

    const slideContentPre = () => {
        tabContentSlideRef.current.scrollLeft -= 150;
    }

    // Fetch portfolio projects
    useEffect(() => {
        const getProjects = '*[_type =="portfolio"]';
        client.fetch(getProjects)
            .then((data) => setProjects(data))
            .catch(console.error)
    }, [])

    // The handleScroll function is a throttled function that calculates whether the back and forward buttons should be visible based on the current scroll position (scrollLeft), the width of the visible area (clientWidth), and the total width of the scrollable content (scrollWidth).
    const handleScroll = throttle(() => {
        // Get the current scroll position, client width, and total scrollable width

        const scrollContentLeft = tabContentSlideRef.current.scrollLeft;
        const contentClientWidth = tabContentSlideRef.current.clientWidth;
        const contentScrollWidth = tabContentSlideRef.current.scrollWidth;

        // Calculate whether to show or hide the buttons based on scroll position;

        const isContentBackButtonVisible = scrollContentLeft >= 15;
        const isContentForwardButtonVisible = scrollContentLeft < contentScrollWidth - contentClientWidth - 15;

        // Set the visibility of the buttons using DOM manipulation

        const contentBackButton = document.getElementById('contentBackButton');
        const contentForwardButton = document.getElementById('contentForwardButton');

        // Update the visibility of the back button based on the calculated condition
        if (contentBackButton) {
            contentBackButton.style.display = isContentBackButtonVisible ? 'block' : 'none';
        }

        // Update the visibility of the forward button based on the calculated condition
        if (contentForwardButton) {
            contentForwardButton.style.display = isContentForwardButtonVisible ? 'block' : 'none';
        }
    }, 200); // Throttle interval in milliseconds

    // The useEffect hook is used to attach the scroll event listener when the component mounts.
    // It also handles cleanup by removing the event listener when the component unmounts.
    useEffect(() => {
        const contentCurrentRef = tabContentSlideRef.current

        if (contentCurrentRef) {
            contentCurrentRef.addEventListener('scroll', handleScroll)
        }
        
        // Clean up the scroll event listener when component unmounts
        return () => {
            if (contentCurrentRef) {
                contentCurrentRef.removeEventListener('scroll', handleScroll);
            }
        };
    }, [handleScroll]);

    // console.log(projects);
    return (
        <section className="projects max-w-[90%] mx-auto mt-[3rem] sm:max-w-[90%] md:mt-[5rem] xl:max-w-[80%]">
            <div className="head">
                <h2 className='text-[1.8rem] font-medium'>
                    Our Portfolio
                </h2>
                <p className='text-[13px] mt-2 md:w-[60%]'>
                    Our portfolio showcases a multitude of forward-thinking endeavors spanning diverse domains, each carefully crafted to address contemporary challenges and envision future possibilities.
                </p>
                {/* Tabs */}
                <Tabs currService={currService} setCurrService={setCurrService} />
            </div>

            {/* Projects */}
            <div className="mt-[2rem] relative">
                
                <div className="tabs-contents flex">
                    <div className={`buttons items-center z-20 ${projects && projects?.filter((project) => project?.services === currService).length > 2 || currService == 'all' ? 'flex' : 'hidden'}`}>
                        <button
                            id="contentBackButton"
                            onClick={() => slideContentPre()}
                            className="hidden absolute left-0 bg-zinc-100 p-2 rounded-full"
                        >
                            <IoIosArrowBack className='text-[16px]' />
                        </button>
                        <button
                            id="contentForwardButton"
                            onClick={() => slideContentNext()}
                            className="absolute right-0 bg-zinc-100 p-2 rounded-full"
                        >
                            <IoIosArrowForward className='text-[16px]' />
                        </button>
                    </div>
                    <div className="overflow-x-scroll scrollbar scrollbar-w-[1px] scrollbar-h-[1px]" ref={tabContentSlideRef}>
                        <div className="flex items-center gap-x-[5px]">
                            {currService === "all" ? (projects && projects?.map((project) => (
                                <Project project={project} key={project?._id} />
                            ))) : (
                                projects && projects?.filter((project) => project?.services === currService).map((currProject) => (
                                    <Project project={currProject} key={currProject?._id} />
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects