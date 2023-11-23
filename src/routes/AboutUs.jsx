import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { client } from "../client"
import OurMission from "../components/AboutUs/OurMission";
import OurVision from "../components/AboutUs/OurVision";


const AboutUs = () => {
    const [about, setAbout] = useState(null);
    
    useEffect(() => {
        const getAboutUsContent = '*[_type == "aboutUs"]';
        client.fetch(getAboutUsContent)
            .then((data) => setAbout(...data))
            .catch(console.error)
    }, [])
    // console.log(about);
    return (
        <div className="max-w-[90%] mx-auto sm:max-w-[90%] xl:max-w-[80%]">
            <header className="header">
                <div className="cover_img h-[20rem] rounded-sm mb-[2rem]">
                    <img src="/assets/project-2.jpg" alt="" className="w-[100%] h-[100%] object-cover rounded-dm" />
                </div>
                <p className="text-[12px]">About ReCentDST</p>
                <h2 className="text-[1.6rem] font-medium">
                    {about?.title}
                </h2>
                {/* Tagline */}
                <p className="text-[12.5px] my-[1rem] leading-[1.3rem]">
                    {about?.tagline}
                </p>
                {/* Body */}
                <p className="text-[12.5px] my-[1rem] leading-[1.3rem]">
                    {about?.body}
                </p>
                <Link to='/projects' className="text-[12px] bg-zinc-800 text-white py-[5px] px-[20px] rounded-sm">
                    View our Portfolio
                </Link>
            </header>
            <main className="mt-[2rem] mb-[3rem]">
                <div className="flex flex-col gap-[1rem] md:flex-row">
                    {/* Mission */}
                    <OurMission />
                    {/* Vision */}
                    <OurVision />
                    {/* Expertise */}
                    {/* <section className="">
                        <h3>
                            Our Expertise
                        </h3>
                        <p>
                            A highly qualified team of experts
                            16+ years of Marketing expertise and branding
                            40+ years of Scientific research
                            10+ years of Quality Systems
                            20+ years of ICT experience
                            7 years of experience in Electrical Power Systems, Certified Quality Engineer
                        </p>
                    </section> */}
                </div>
            </main>
        </div>
    )
}

export default AboutUs