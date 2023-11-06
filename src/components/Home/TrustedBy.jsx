import { orgs } from '../../data'

const TrustedBy = () => {
    return (
        <section className="trusted-by mt-[3rem] max-w-[90%] mx-auto sm:max-w-[90%] md:mt-[5rem] xl:max-w-[80%]">
            <h2 className='text-[1.8rem] font-medium text-center mb-[1rem]'>
                Trusted By
            </h2>
            <p className='text-[12px] mx-auto mb-[2rem] text-center md:w-[50%]'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat nostrum earum inventore similique sit obcaecati facilis recusandae hic suscipit aspernatur!
            </p>
            {/* Organization */}
            <div className="grid grid-cols-2 items-center gap-[1rem] md:grid-cols-5">
                {orgs?.map((org) => (
                    <p className='min-w-[10rem] bg-zinc-200 text-zinc-500 flex items-center justify-center text-[0.9rem] font-bold rounded-md py-[18px] px-[10px]' key={org?.id}>
                        {org?.name}
                    </p>
                ))}
            </div>
        </section>
    )
}

export default TrustedBy