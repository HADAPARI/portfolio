import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import ProjectCard from "./ProjectCard";
import chat from "../assets/img/simple-chat.jpg";
import social from "../assets/img/social-networks.png";
import ecommerce from "../assets/img/e-commerce.jpg";
import streaming from "../assets/img/streaming.png";

const Projects = () => {
  return (
    <div id="projects" className="px-4 sm:px-14 xl:px-40 py-14 bg-primary text-white">
      <div className="flex flex-col gap-5 items-center">
        <p className="text-5xl">
          Recent <span className="text-teal">Projects</span>
        </p>
        <p>Some Things l've built so far</p>
      </div>
      <div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[EffectCoverflow, Navigation]}
          className="py-8"
        >
          <SwiperSlide>
            <ProjectCard
              img={chat}
              title="Simple chat"
              techo={["MongoDB", "Express", "React", "NodeJS"]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard
              img={social}
              title="Social networks"
              techo={["MongoDB", "Express", "React", "NodeJS"]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard
              img={ecommerce}
              title="E-commerce"
              techo={["MongoDB", "Express", "React", "NodeJS"]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard
              img={streaming}
              title="Streaming"
              techo={["MongoDB", "Express", "React", "NodeJS"]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard
              img={social}
              title="Social networks"
              techo={["MongoDB", "Express", "React", "NodeJS"]}
            />
          </SwiperSlide>
          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow after:content-none w-14 h-14 bg-secondary text-teal rounded-full p-5 opacity-70 transition-opacity hover:opacity-90">
              <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <div className="swiper-button-next slider-arrow after:content-none w-14 h-14 bg-secondary text-teal rounded-full p-5 opacity-70 transition-opacity hover:opacity-90">
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
