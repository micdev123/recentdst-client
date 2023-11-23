import { useEffect, useRef, useState } from 'react'
import { TbStarsFilled } from "react-icons/tb"
import { PiCompassToolBold } from "react-icons/pi"
import { BsDot } from 'react-icons/bs'
import { BiShapeCircle } from "react-icons/bi"
import { MdShapeLine } from "react-icons/md"
import { projects } from '../../data'
import { Link } from 'react-router-dom'
import { client, urlFor } from '../../client'
import Slider from './Slider'

const Header = () => {
    const slideRef = useRef(null); // Header Slider Ref
    const autoSlide = true;
    const autoSlideInterval = 10000;
    const [projects, setProjects] = useState([]);
    const [current, setCurrent] = useState(0);
    const [featuredProjects, setFeaturedProjects] = useState([]);

    
    useEffect(() => {
        const getProjects = '*[_type == "portfolio"]';
        client.fetch(getProjects)
            .then((data) => {
                if (data.length > 3) {
                    setProjects(data)
                }
                else {
                    setFeaturedProjects(data);
                }

            })
            .catch(console.error)
    }, [])

    useEffect(() => {
        const selectRandomProjects = () => {
            if(projects.length > 0) {
                const shuffledProjects = projects.sort(() => 0.5 - Math.random());
                const selectedProjects = shuffledProjects.slice(0, 3);
                setFeaturedProjects(selectedProjects);
            }
        };

        selectRandomProjects(); // Initial selection of random projects

        const hourInterval = setInterval(selectRandomProjects, 3600000);
        return () => {
            clearInterval(hourInterval);
        }; 
    }, [projects]);


    useEffect(() => {
        const next = () => setCurrent((curr) => (curr + 1) % (featuredProjects.length || 1));

        if (autoSlide && featuredProjects.length > 0) {
            const intervalId = setInterval(next, autoSlideInterval);

            return () => {
                clearInterval(intervalId);
            }; 
        }
        
    }, [autoSlide, autoSlideInterval, featuredProjects]);

    // console.log(projects);
    

    return (
        <div className='header max-w-[90%] mx-auto sm:max-w-[90%] xl:max-w-[80%]'>
            <section className="header-container relative md:py-[3rem] md:pr-[3rem]">
                {/* Header Hero Text Content */}
                <div className="">
                    <Slider currentProject={featuredProjects[current]} />
                    <div className="flex items-center justify-center mt-[1rem]">
                        {featuredProjects && featuredProjects.map((_, index) => (
                            <BsDot
                                onClick={() => setCurrent(index)}
                                className={`text-[1.3rem] cursor-pointer ${current === index ? 'text-amber-600' : 'text-lightBlack dark:text-gray-400'}`}
                                key={index}
                            />
                        ))}
                    </div>
                </div>
                
                <div className="shapes_container">
                    <BiShapeCircle className='absolute top-0 right-0 text-[1.5rem] text-zinc-300 font-light md:top-[2rem] md:right-[3rem]' />
                    <MdShapeLine className='absolute bottom-[-1rem] left-0 text-[1.2rem] text-green-200 font-light' />
                    <TbStarsFilled className='hidden absolute text-[1.2rem] text-zinc-300 font-light md:block md:top-[20%] md:left-[30%]' />
                    <PiCompassToolBold className='absolute top-[10%] left-[-2%] text-[1rem] text-zinc-300' />
                </div>
                
            </section>
        </div>
    )
}

export default Header