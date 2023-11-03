import { FiMenu } from "react-icons/fi"
import { RiSendPlaneFill } from "react-icons/ri"

const TopNav = ({ setContact }) => {
    return (
        <div className='top-nav pt-6 pb-4 relative'>
            <nav>
                <ul className='flex items-center justify-between'>
                    <div className="items-center gap-x-[2.5rem] md:flex">
                        <li>
                            <h2 className='logo text-[1rem]'>
                                ReCentDST
                            </h2>
                        </li>
                        <div className="hidden items-center gap-x-[1.8rem] text-[12px] font-medium md:flex">
                            
                        </div>
                        {/* <li className='border-[1px] border-zinc-500 rounded-md px-[10px] py-[2px] ml-[2rem]'>
                            Login
                        </li> */}
                    </div>
                    <div className="hidden text-[13px] items-center gap-x-[1.8rem] md:flex">
                        <li>
                            About Us
                        </li>
                        <li>
                            Services
                        </li>
                        <li>
                            Portfolio
                        </li>
                        <li>
                            Contact
                        </li>
                        <button
                            onClick={() => setContact(true)}
                            className='text-[11px] rounded-sm bg-zinc-700 text-white py-[5px] px-[15px] flex items-center gap-x-2 border-0 outline-none'
                        >
                            <RiSendPlaneFill className='text-[14px]' />
                            Let's Talk
                        </button>
                    </div>
                    <FiMenu className='sm:hidden' />
                </ul>
            </nav>
        </div>
    )
}

export default TopNav