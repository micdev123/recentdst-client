import { useEffect, useState } from 'react'
import { client, urlFor } from "../../client";

const TrustedBy = () => {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        const getClients = '*[_type == "clients"]';
        client.fetch(getClients)
            .then((data) => setClients(data))
            .catch(console.error)
    }, [])
    return (
        <section className="trusted-by mt-[3rem] max-w-[90%] mx-auto sm:max-w-[90%] md:mt-[5rem] xl:max-w-[80%]">
            <h2 className='text-[1.8rem] font-medium text-center mb-[1rem]'>
                Trusted By
            </h2>
            <p className='text-[13px] mx-auto mb-[2rem] text-center md:w-[50%]'>
                We prioritize understanding the unique needs and aspirations of each partner, ensuring that our solutions are tailor-made to address their specific challenges and goals.
            </p>
            {/* Organization */}
            <div className={`${clients && clients.length > 5 ? 'grid grid-cols-2 md:grid-cols-6' : 'grid grid-cols-2 md:flex'} items-start gap-[1rem]`}>
                {clients && clients?.map((org) => (
                    <p className='w-full h-[5rem] bg-zinc-100 text-zinc-500 flex items-center justify-center text-[0.9rem] font-bold rounded-md py-[18px] px-[10px]' key={org?._id}>
                        <img src={urlFor(org?.clientImg)} alt="" className='h-[4rem] object-cover' />
                    </p>
                ))}
            </div>
        </section>
    )
}

export default TrustedBy