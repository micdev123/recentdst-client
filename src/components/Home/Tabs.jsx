import { useEffect, useRef, useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import throttle from 'lodash.throttle';
import { client } from '../../client';
// import { client } from '/'

const Tabs = ({ currService, setCurrService }) => {
    const [services, setServices] = useState([])
    const tabSlideRef = useRef(null);

    const slideNext = () => {
        tabSlideRef.current.scrollLeft += 150;
    }

    const slidePre = () => {
        tabSlideRef.current.scrollLeft -= 150;
    }

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
    }, 200);


    useEffect(() => {
        const getServices = '*[_type =="services"]';
        client.fetch(getServices)
            .then((data) => setServices(data))
            .catch(console.error)
    }, [])


    useEffect(() => {
        const currentRef = tabSlideRef.current;

        if (currentRef) {
            // Attach the scroll event listener when component mounts
            currentRef.addEventListener('scroll', handleScroll);
        }
        
        // Clean up the scroll event listener when component unmounts
        return () => {
            if (currentRef) {
                currentRef.removeEventListener('scroll', handleScroll);
            }
        };
    }, [handleScroll]);
    return (
        <div>
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
                <div className="tabs w-[100%] flex items-center justify-between overflow-x-scroll scrollbar scrollbar-thumb-slate-800 scrollbar-track-slate-400 scrollbar-w-[0px] scrollbar-h-[0px] scroll-smooth md:w-[90%] md:mx-auto md:justify-start" ref={tabSlideRef}>
                    <button
                        onClick={() => setCurrService("all")}
                        className={`min-w-fit text-[13px] py-[5px] px-[15px] rounded-sm capitalize outline-none border-0 text-zinc-400 ${currService === 'all' && 'bg-zinc-200 text-zinc-900 font-medium'} md:text-[12px]`}
                    >
                        All
                    </button>
                    {services ? services?.map((service) => (
                        <button
                            onClick={() => setCurrService(service?.name)}
                            className={`min-w-fit text-[13px] py-[5px] px-[15px] rounded-sm font-medium capitalize outline-none border-0 ${currService === service?.name ? 'bg-zinc-200 text-zinc-900' : "text-zinc-400"} hover:text-zinc-900 md:text-[12px]`} key={service?._id}
                        >
                            {service?.slug}
                        </button>
                    )) : null}
                </div>
            </div>
        </div>
    )
}

export default Tabs