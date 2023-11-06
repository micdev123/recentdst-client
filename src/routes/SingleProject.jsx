import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { projects } from '../data';

const SingleProject = () => {
    const params = useParams(); // getting url params
    const { id } = params;

    const [project, setProject] = useState([])
    const [activeImg, setActiveImg] = useState(0);

    // Fetching Current project
    useEffect(() => {
        const fetchCurrentProject = () => {
            const targetProject = projects.filter((project) => `${project?.id}` === id);
            
             if (targetProject.length > 0) {
                setProject(targetProject[0]);
            }
        }
        fetchCurrentProject()
    }, [id])

    // console.log(project);
    return (
        <div className='max-w-[90%] mx-auto sm:max-w-[90%] xl:max-w-[80%]'>
            <header className='w-[100%] h-[100%] grid grid-cols-1 gap-1 md:grid-cols-3'>
                <div className="active_img w-[100%] h-[20rem] col-span-2">
                    <img src={project.photos && project.photos[activeImg]} alt="" className='w-[100%] h-[100%] object-cover rounded-sm' />
                </div>

                <div className="w-[100%] imgs col-span-1">
                    <div className="w-[100%] grid grid-cols-2 gap-1">
                        {project.photos && project.photos.length > 0 && project.photos.map((photo, index) => (
                            <div
                                onClick={() => setActiveImg(index)}
                                className={`relative rounded-md cursor-pointer ${index === activeImg && "border-[2px] border-amber-700"}`} key={index}>
                                <div className={`w-[100%] h-[100%] bg-zinc-800 absolute rounded-sm ${index === activeImg ? 'opacity-[0.1]' : 'opacity-[0.7]'}`}></div>
                                <img src={photo} alt="" className={`rounded-sm h-[8rem] object-cover`} />
                            </div>
                        ))}
                    </div>
                </div>
            </header>
            <main className='my-[2rem]'>
                <h2 className='text-[1.5rem] font-medium'>
                    {project?.name}
                </h2>
                <p className='text-[12px] mt-[10px]'>
                    {project?.tagline}
                </p>
                <p className='text-[12px] mt-[1rem]'>
                    {project?.description}
                </p>
            </main>
        </div>
    )
}

export default SingleProject