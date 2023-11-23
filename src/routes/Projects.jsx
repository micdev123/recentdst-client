import { useEffect, useState } from 'react'
import Contact from '../components/Contact';
import { Link } from 'react-router-dom';
import { client, urlFor } from '../client';

const Projects = () => {
    const [projects, setProjects] = useState(null);

    // Contact Modal State
    const [openContactModal, setOpenContactModal] = useState(false); // Contact form modal
    // Methods managing modal
    const handleOpenModal = () => setOpenContactModal(true);
    const handleCloseModal = () => setOpenContactModal(false);

    useEffect(() => {
        const getProjects = '*[_type =="portfolio"]';
        client.fetch(getProjects)
            .then((data) => setProjects(data))
            .catch(console.error)
    }, [])
    
    return (
        <div className='max-w-[90%] mx-auto sm:max-w-[90%] xl:max-w-[80%]'>
            <div className="head mt-[0.5rem] md:mt-[2rem]">
                <div className={openContactModal ? 'w-[100%] h-[100%] fixed top-0 left-0 bg-zinc-900 opacity-[0.2] z-10' : ''}></div>
                {openContactModal && (
                    <div className="contact_form w-[100%] absolute top-[4rem] right-0 left-0 mx-auto bg-white rounded-md p-[1rem]  z-20 md:w-fit md:p-[2rem] md:top-[2rem]">
                        <Contact onClose={handleCloseModal} />
                    </div>
                )}
                <h2 className='text-[1.2rem] font-medium'>
                    Our Portfolio
                </h2>
                <p className='text-[13px] my-[10px] md:w-[60%] '>
                    Our portfolio showcases a multitude of forward-thinking endeavors spanning diverse domains, each carefully crafted to address modern challenges and envision future possibilities.
                </p>
                <button
                    onClick={() => handleOpenModal()}
                    className='text-[11px] bg-zinc-800 text-white py-[6px] px-[15px] rounded-sm mt-2'
                >
                    Let's start a project
                </button>
            </div>
            {/* Projects Container */}
            <div className="grid grid-cols-1 gap-x-[1rem] gap-y-[2rem] my-[3rem] md:grid-cols-2 lg:grid-cols-3">
                {projects?.map((project) => (
                    <Link to={`/project/${project?._id}`} className="bg-zinc-100" key={project?._id}>
                        <div className="img h-[10rem] rounded-md mb-[5px]">
                            <img src={urlFor(project?.coverImg)} alt="" className='w-[100%] h-[100%] object-cover' />
                        </div>
                        <div className="p-2">
                            <h2 className='text-[1rem] font-medium line-clamp-1 my-[10px]'>
                                {project?.name}
                            </h2>
                            <p className='text-[12px] line-clamp-3'>
                                {project?.tagline}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Projects