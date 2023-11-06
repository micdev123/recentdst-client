import { ImQuotesLeft } from 'react-icons/im'

const Testimonials = () => {
    return (
        <section className="mt-[3rem] max-w-[90%] mx-auto sm:max-w-[90%] md:mt-[5rem] xl:max-w-[80%]">
            <div className="flex flex-col items-center justify-between gap-x-[1.5rem] md:flex-row">
                <div className="left md:w-[40%]">
                    <p className='text-[12px] font-medium'>
                        Not yet sure?
                    </p>
                    <h3 className='text-[2rem] font-medium leading-[2.5rem]'>
                        See what others are saying about us
                    </h3>
                </div>

                <div className="right flex gap-x-[2rem] md:w-[60%]">
                    <div className="badge-1">
                        <div className="saying my-[1.5rem]">
                            <p className='text-[12px] border-l-[1.7px] border-zinc-300 pl-2 flex gap-x-1'>
                                <span className='text-[1rem]'>
                                    <ImQuotesLeft />
                                </span>
                                <span className='mt-4'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis minima necessitatibus voluptas provident illo minus impedit ipsam mollitia, dolorem obcaecati, ullam voluptatem? Consequatur accusamus porro veritatis eligendi deleniti est nihil!
                                </span>
                            </p>
                            <div className="author text-[11.5px] flex items-center gap-x-2 mt-2 pl-2">
                                <p className='font-medium'>
                                    Alusine Kamara.
                                </p>
                                <p className='text-[10px] text-zinc-500'>
                                    Wilberforce, Freetown
                                </p>
                            </div>
                        </div>
                        
                        <div className="saying my-[1.5rem]">
                            <p className='text-[12px] border-l-[1.7px] border-zinc-300 pl-2 flex gap-x-1'>
                                <span className='text-[1rem]'>
                                    <ImQuotesLeft />
                                </span>
                                <span className='mt-4'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis minima necessitatibus voluptas provident illo minus impedit ipsam mollitia, dolorem obcaecati, ullam voluptatem? Consequatur accusamus porro veritatis eligendi deleniti est nihil!
                                </span>
                            </p>
                            <div className="author text-[11.5px] flex items-center gap-x-2 mt-2 pl-2">
                                <p className='font-medium'>
                                    Alusine Kamara.
                                </p>
                                <p className='text-[10px] text-zinc-500'>
                                    Wilberforce, Freetown
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="badge-2 hidden mt-[7rem] md:block">
                        <div className="saying my-[1.5rem]">
                            <p className='text-[12px] border-l-[1.7px] border-zinc-300 pl-2 flex gap-x-1'>
                                <span className='text-[1rem]'>
                                    <ImQuotesLeft />
                                </span>
                                <span className='mt-4'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis minima necessitatibus voluptas provident illo minus impedit ipsam mollitia, dolorem obcaecati, ullam voluptatem? Consequatur accusamus porro veritatis eligendi deleniti est nihil!
                                </span>
                            </p>
                            <div className="author text-[11.5px] flex items-center gap-x-2 mt-2 pl-2">
                                <p className='font-medium'>
                                    Alusine Kamara.
                                </p>
                                <p className='text-[10px] text-zinc-500'>
                                    Wilberforce, Freetown
                                </p>
                            </div>
                        </div>

                        <div className="saying my-[1.5rem]">
                            <p className='text-[12px] border-l-[1.7px] border-zinc-300 pl-2 flex gap-x-1'>
                                <span className='text-[1rem]'>
                                    <ImQuotesLeft />
                                </span>
                                <span className='mt-4'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis minima necessitatibus voluptas provident illo minus impedit ipsam mollitia, dolorem obcaecati, ullam voluptatem? Consequatur accusamus porro veritatis eligendi deleniti est nihil!
                                </span>
                            </p>
                            <div className="author text-[11.5px] flex items-center gap-x-2 mt-2 pl-2">
                                <p className='font-medium'>
                                    Alusine Kamara.
                                </p>
                                <p className='text-[10px] text-zinc-500'>
                                    Wilberforce, Freetown
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials