import { useRef, useState } from "react";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md"
import { services } from "../../data";
import Contact from "../Contact";

const Services = () => {
    const services_container = useRef(null); // Services slider Ref

    // Contact Modal State
    const [openContactModal, setOpenContactModal] = useState(false); // Contact form modal
    // Methods managing modal
    const handleOpenModal = () => setOpenContactModal(true);
    const handleCloseModal = () => setOpenContactModal(false);

    // Handling navigation | scrolling services
    const handleLeftSlide = (e) => {
        e.preventDefault();
        services_container.current.scrollLeft -= services_container.current.offsetWidth;
    }

    const handleRightSlide = (e) => {
        e.preventDefault();
        services_container.current.scrollLeft += services_container.current.offsetWidth;
    }

    if (!services || !services.length) return null;
    return (
        <section className='services max-w-[90%] mx-auto relative sm:max-w-[90%] xl:max-w-[80%]'>
            <div className={openContactModal ? 'w-[100%] h-[100%] fixed top-0 left-0 bg-zinc-900 opacity-[0.2] z-10' : ''}></div>
            {openContactModal && (
                <div className="contact_form w-[100%] absolute top-[-12rem] right-0 left-0 mx-auto bg-white rounded-md p-[1rem]  z-20 md:w-fit md:p-[2rem]">
                    <Contact onClose={handleCloseModal} />
                </div>
            )}
            <div className="services-container">
                <div className="services-right-text-content">
                    <p className='text-[12px] font-medium'>ReCentDST Ltd</p>
                    <h3 className='text-[1.8rem] font-medium'>Your Cutting-Edge Research Company</h3>
                    <p className='text-[12.5px] my-2 md:w-[50%]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aperiam alias suscipit esse facilis officiis qui porro odio eos pariatur.
                    </p>
                    <button
                       onClick={() => handleOpenModal()}
                        className='text-[11px] bg-zinc-800 text-white py-[6px] px-[15px] rounded-sm mt-2'
                    >
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
                            <div className="service-card min-w-[100%] bg-zinc-200 rounded-md p-[1.5rem] md:min-w-[20rem] md:bg-zinc-100" key={id}>
                                <div className="icon w-[2rem] mb-4">
                                    <img src={icon} alt="" />
                                </div>
                                <h2 className='text-[15px] font-medium mb-3'>
                                    {name}
                                </h2>
                                <p className='text-[12.5px] line-clamp-3'>
                                    {info}
                                </p>
                            </div>
                        )
                    })}
                </div>
                
            </div>
        </section>
    )
}

export default Services