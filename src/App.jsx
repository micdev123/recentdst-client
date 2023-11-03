import { useState } from "react";
import Home from "./routes/Home"
import { AiOutlineClose } from "react-icons/ai";
import TopNav from "./components/TopNav";
import Header from "./components/Home/Header";

function App() {
  const [contact, setContact] = useState(false); // Contact form modal
  const sendMessage = (e) => {
    e.preventDefault();
  }
  return (
    <div className="App relative">
      {/* Overlay Background */}
      <div className={contact ? 'w-[100%] h-[100%] fixed bg-zinc-900 opacity-[0.2] z-10' : ''}></div>
      {contact && (
        <div className="contact_form w-[90%] absolute top-[3rem] right-0 left-0 mx-auto bg-white rounded-md p-[2rem] z-10 md:w-fit">
          <div className="contact w-[100%] relative">
            {/* Close contact modal */}
            <AiOutlineClose
              onClick={() => setContact(false)}
              className="absolute right-0 top-[-1.5rem] cursor-pointer"
            />
            <h3 className='text-[1.5rem] font-medium md:text-center mt-[1rem]'>
                Let's discuss collaboration!
            </h3>
            <form action="">
              <div className="form-group my-[1.2rem]">
                  <label htmlFor="name" className='text-[13.5px] font-medium'>Name</label>
                  <input type="text" placeholder='Enter fullname' className='w-[100%] text-[11px] py-[7px] px-[10px] border-b-[1.5px] outline-none' />
              </div>
              <div className="form-group my-[1.2rem]">
                  <label htmlFor="email" className='text-[13.5px]'>Email</label>
                  <input type="email" placeholder='Enter email' className='w-[100%] text-[11px] py-[7px] px-[10px] border-b-[1.5px] outline-none' />
              </div>
              <div className="form-group my-[1.2rem]">
                  <label htmlFor="subject" className='text-[13.5px]'>Subject</label>
                  <input type="text" placeholder='Enter subject' className='w-[100%] text-[11px] py-[7px] px-[10px] border-b-[1.5px] outline-none' />
              </div>
              <div className="form-group my-[1.2rem]">
                  <label htmlFor="name" className='text-[13.5px]'>Message</label>
                  <textarea name="" id="" cols="30" rows="10" placeholder='Message' className='w-[100%] text-[11px] p-[10px] border-[1.5px] outline-none'></textarea>
              </div>
              <button
                onClick={() => {
                  sendMessage,
                  setContact(false)
                }}
                className="text-[11px] rounded-sm mt-[1rem] bg-zinc-700 text-white py-[5px] px-[15px] flex items-center gap-x-2 border-0">
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
      <header className="header max-w-[90%] h-[100%]  mx-auto sm:max-w-[90%] xl:max-w-[80%]">
        <TopNav setContact={setContact} />
        <Header />
      </header>
      <Home />
    </div>
  )
}

export default App
