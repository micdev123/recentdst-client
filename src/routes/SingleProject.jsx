import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { projects } from '../data';
import { client, urlFor } from '../client';

const SingleProject = () => {
    const params = useParams(); // getting url params
    const { id } = params;

    // console.log(id);

    const [project, setProject] = useState(null)
    const [activeImg, setActiveImg] = useState(0);

    // Update active image when clicking on thumbnails
    const handleThumbnailClick = (index) => {
        setActiveImg(index);
    };

    // Fetching Current project
    useEffect(() => {
        const getProject = `*[_type == "portfolio" && _id == "${id}"]`;

        client.fetch(getProject)
            .then((data) => {
                if (Array.isArray(data) && data.length > 0) {
                    setProject(data[0]);
                } else {
                    setProject(null);
                }
            })
            .catch(console.error);
    }, [id])

    // console.log(project);
    return (
        <div className='max-w-[90%] mx-auto sm:max-w-[90%] xl:max-w-[80%]'>
            <header className='w-[100%] h-[100%] grid grid-cols-1 gap-1 md:grid-cols-3'>
                <div className="active_img w-[100%] h-[20rem] col-span-2">
                    {project && project.photos && project.photos.length > 0 && (
                        <img src={urlFor(project.photos[activeImg])} alt="" className='w-[100%] h-[100%] object-cover rounded-sm' />
                    )}
                </div>

                <div className="w-[100%] imgs col-span-1">
                    <div className="w-[100%] grid grid-cols-2 gap-1">
                        {project && project.photos && project.photos.length > 0 && project.photos.map((photo, index) => (
                            <div
                                onClick={() => handleThumbnailClick(index)}
                                className={`relative rounded-md cursor-pointer ${index === activeImg && "border-[2px] border-amber-700"}`} key={index}>
                                <div className={`w-[100%] h-[100%] bg-zinc-800 absolute rounded-sm ${index === activeImg ? 'opacity-[0.1]' : 'opacity-[0.7]'}`}></div>
                                <img src={urlFor(photo)} alt="" className={`rounded-sm h-[8rem] object-cover`} />
                            </div>
                        ))}
                    </div>
                </div>
            </header>
            <main className='my-[2rem]'>
                <h2 className='text-[1.5rem] font-medium'>
                    {project?.name}
                </h2>
                <p className='text-[12.5px] mt-[10px]'>
                    {project?.tagline}
                </p>
                <p className='text-[12.5px] mt-[1rem]'>
                    {project?.description}
                </p>
            </main>
        </div>
    )
}

export default SingleProject