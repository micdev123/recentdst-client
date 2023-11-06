import { Link } from "react-router-dom"


const Project = ({ project }) => {
    return (
        <Link to={`/project/${project?.id}`} className="content w-[25rem] h-[20rem] relative" key={project?.id}>
            <div className="img w-[25rem] h-[20rem] relative rounded-sm">
                <div className="w-[100%] h-[100%] bg-zinc-800 absolute rounded-sm opacity-70"></div>
                <img src={project?.cover_img} alt="" className='w-[100%] h-[100%] object-cover rounded-sm' />
            </div>
            <div className="text-content absolute bottom-[1rem] p-3 text-white font-medium">
                <p className="text-[11px]">
                    {project?.service}
                </p>
                <h2 className='text-[16px]'>
                    {project?.name}
                </h2>
            </div>
        </Link>
    )
}

export default Project