import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-scroll"

const ScrollTop = () => {
  return (
    <Link to="home" spy={true} smooth={true} offset={-90} duration={500} className='scroll-top transition-all hover:scale-125 fixed z-50 bottom-5 right-5 rounded-full w-12 h-12 bg-teal text-white flex justify-center items-center cursor-pointer opacity-70'>
        <FontAwesomeIcon icon={faArrowUp} />
    </Link>
  )
}

export default ScrollTop