

import Accordions from '../components/Home/Accordions'
import Projects from '../components/Home/Projects'
import TrustedBy from '../components/Home/TrustedBy'
import Testimonials from '../components/Home/Testimonials'
import Header from '../components/Home/Header'
import Services from '../components/Home/Services'


const Home = ({ setContact }) => {
    return (
        <div className=''>
            <Header />
            {/* Main */}
            <main className='my-[3rem] md:my-[5rem]'>
                
                {/* Services */}
                <div className="" id="services">
                    <Services setContact={setContact} />
                </div>

                {/* Projects */}
                <Projects />

                {/* Trusted By */}
                <TrustedBy />

                {/* Testimonials */}
                <div className="" id='testimonials'>
                    <Testimonials />
                </div>

                {/* Key Takeaway */}
                <Accordions />
            </main>
            
        </div>
    )
}

export default Home