import React, { useEffect, useState } from 'react'
import { client } from '../../client';

const OurMission = () => {
    const [mission, setMission] = useState(null);
    useEffect(() => {
        const getMission = '*[_type == "ourMission"]';
        client.fetch(getMission)
            .then((data) => setMission(...data))
            .catch(console.error)
    }, [])
    return (
        <section className="bg-zinc-200 p-4 rounded-sm md:bg-zinc-100">
            <h3 className="text-[1rem] font-medium mb-[10px]">
                {mission?.title}
            </h3>
            <p className="text-[12.5px]">
                {mission?.description}
            </p>
        </section>
    )
}

export default OurMission