import { Link } from "react-router-dom"


const AboutUs = () => {
    return (
        <div className="max-w-[90%] mx-auto sm:max-w-[90%] xl:max-w-[80%]">
            <header className="header">
                <div className="cover_img h-[20rem] rounded-sm mb-[2rem]">
                    <img src="/assets/project-2.jpg" alt="" className="w-[100%] h-[100%] object-cover rounded-dm" />
                </div>
                <p className="text-[12px]">About ReCentDST</p>
                <h2 className="text-[1.6rem] font-medium">Your Cutting-edge Research Company</h2>
                <p className="text-[12.5px] my-[1rem] leading-[1.3rem]">
                    ReCentDST is a Research Centre for Development in Science and Technology SL Ltd. A multi-disciplinary research, development and technology company.

                    Our services in qualitative and quantitative market research, market surveys and market intelligence can significantly inform your decision making and strategic business direction. We can also work with you to see how you can improve your bottom line and increase employee efficiency, loyalty and productivity.
                </p>
                <p className="text-[12.5px] my-[1rem] leading-[1.3rem]">
                    ReCentDST Ltd (Research Centre for Development in Science and Technology Ltd) was formed in 2017 borne out of the need for research and development as well as innovation in a developing country. It is a company of multidisciplinary science and engineering experts from the region and the Diaspora that was set up to cater for consulting in market, science research and engineering research. Our aim is to collaborate with organizations, governments and institutions to conduct scientific tests and guide policy and development to improve the quality of life for citizens in the country and region.
                </p>
                <Link to='/projects' className="text-[12px] bg-zinc-800 text-white py-[5px] px-[20px] rounded-sm">
                    View our Portfolio
                </Link>
            </header>
            <main className="mt-[2rem] mb-[3rem]">
                <div className="flex flex-col gap-[1rem] md:flex-row">
                    {/* Mission */}
                    <section className="bg-zinc-200 p-4 rounded-sm md:bg-zinc-100">
                        <h3 className="text-[1rem] font-medium mb-[10px]">
                            Our Mission
                        </h3>
                        <p className="text-[12.5px]">
                            To innovate and build a reliable data resource for both national and international development.
                        </p>
                    </section>
                    {/* Vision */}
                    <section className="bg-zinc-200 p-4 rounded-sm md:bg-zinc-100">
                        <h3 className="text-[1rem] font-medium mb-[10px]">
                            Our Vision
                        </h3>
                        <p className="text-[12.5px]">
                            To be the most reliable source of results-based data and information to steer national development.
                        </p>
                    </section>
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