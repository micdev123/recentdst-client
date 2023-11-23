import { useEffect, useState } from 'react'
import { client } from '../../client';

const OurVision = () => {
    const [vision, setVision] = useState(null);
    useEffect(() => {
        const getVision = '*[_type == "ourVision"]';
        client.fetch(getVision)
            .then((data) => setVision(...data))
            .catch(console.error)
    }, [])
    return (
        <section className="bg-zinc-200 p-4 rounded-sm md:bg-zinc-100">
            <h3 className="text-[1rem] font-medium mb-[10px]">
                {vision?.title}
            </h3>
            <p className="text-[12.5px]">
                {vision?.description}
            </p>
        </section>
    )
}

export default OurVision