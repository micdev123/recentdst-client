import { useEffect, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { client } from "../../client";

const Accordions = () => {
    const [accordions, setAccordions] = useState([]);
    const [accordion, setAccordion] = useState(-1)
    const [dropInfo, setDropInfo] = useState(false);

    useEffect(() => {
        const getAccordions = '*[_type == "accordions"]';
        client.fetch(getAccordions)
            .then((data) => setAccordions(data))
            .catch(console.error)
    }, [])
    // console.log(accordions);
    return (
       <div className="mt-[3rem] max-w-[90%] mx-auto sm:max-w-[90%] md:mt-[5rem] xl:max-w-[80%]">
            <div className="key-takeaways">
                <h3 className='text-[1.8rem] font-medium mb-[1.5rem]'>
                    Key Takeaways
                </h3>
                {/* Accordions */}
                <div className="">
                    {accordions && accordions?.map((data, index) => (
                        <div key={data?._id} className="accordion my-5 border-b-[1px] border-zinc-200 pb-2 last:border-0">
                            <div
                                onClick={() => {
                                    setAccordion(index);
                                    setDropInfo(!dropInfo);
                                }}
                                className="flex items-center justify-between cursor-pointer">
                                <h3 className='title text-[15.5px]'>
                                    {data?.question}
                                </h3>
                                {dropInfo && accordion === index ? (
                                    <AiOutlineMinus className="border-[1px]  border-dotted border-zinc-800 p-[2px] rounded-md" /> 
                                    
                                ) : (
                                    <AiOutlinePlus className="text-[16px] cursor-pointer border-[1px]  border-dotted border-zinc-800 p-[2px] rounded-md" />  
                                )}
                                
                                
                            </div>
                            <div className="body mt-2">
                                {dropInfo && accordion === index && (
                                    <p className={` text-[13px]`}>
                                        {data?.answer}
                                    </p>
                                )}
                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Accordions