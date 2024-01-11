import {Link} from "react-scroll"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import dr from "../assets/img/dr.png"

const Header = () => {
  return (
    <div id='home' className="px-4 sm:px-14 xl:px-40 py-14 bg-primary text-white pt-48 flex">
        <div className="lg:size-1/2 flex flex-col gap-3">
            <p className="text-2xl"> Hello, <span className="text-teal">I'm</span> </p>
            <p className="text-3xl text-teal font-bold"> David Richard</p>
            <p className="text-2xl">Developer Full Stack</p>
            <p>A seasoned Full Stack Developer with a passion for crafting robust and innovative digital solutions. With a comprehensive skill set that spans both frontend and backend development, I bring a holistic approach to creating seamless and efficient digital applications.</p>
            <Link to="contact"  spy={true} smooth={true} offset={-90} duration={500} className="lets-talk w-48 rounded py-3 my-12 text-center cursor-pointer text-xl hover:opacity-80">Let's talk</Link>
            <div className='flex gap-3 items-center'>
                <span>Check out my</span>
                <span className='text-xl flex gap-3 relative'>
                    <a href='https://web.facebook.com/profile.php?id=100003537838780' target="_blank" className='hexagon transition-all hover:-translate-y-3 hover:opacity-80 bg-teal-1 flex justify-center items-center w-12 h-14'><FontAwesomeIcon icon={faFacebookF} /></a>
                    <a href='#' className='hexagon hover:-translate-y-3 hover:opacity-80 bg-teal-1 flex justify-center items-center w-12 h-14'><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    <a href='#' className='hexagon hover:-translate-y-3 hover:opacity-80 bg-teal-1 flex justify-center items-center w-12 h-14'><FontAwesomeIcon icon={faGithub} /></a>
                </span>
            </div>
        </div>
        <div className='hidden size-1/2 lg:flex justify-end '>
            <div className='hexagon profil'>
                <img src={dr} alt="" className="pt-8 opacity-90 w-full scale-125" />
            </div>
        </div>
    </div>
  )
}

export default Header