import { useEffect, useState } from "react"
import axios from "axios"
import { FaArrowAltCircleLeft, FaArrowAltCircleRight} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";



const Trailers = () => {

    const [videos, setVideos] = useState([]);

   useEffect(() => {
    axios.get(`${import.meta.env.VITE_BASE_URL}/movie/572802/videos?api_key=${import.meta.env.VITE_APIKEY}`)
    .then((res) => {
       setVideos(res.data.results)
    })
    .catch((err) => {
        console.log(err)
    })
   },[])

   const params = {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEle: '.swiper-button-next',
      prevEle: '.swiper-button-prev',
    },
    loop: true,
    grabCursor: true, // Enable the "grab" cursor style
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    
  };

   

  return (
    <div className="container  m-auto    my-2">
        <h1 className="text-2xl ms-2 my-5">Lastest Trailer Movies</h1>
    
    <Swiper
        //   spaceBetween={20}
        //   slidesPerView={3}
        //   onSwiper={(swiper) => console.log(swiper)}
        //   grabCursor={true}
        //   centeredSlides={true}
        //   loop={true}
          pagination={{ el: ".swiper-pagination", clickable: true }}
        //   navigation={{
        //     nextEl: ".swiper-button-next",
        //     prevEl: ".swiper-button-prev",
        //     clickable: true,
        //   }}
          modules={[EffectCoverflow, Pagination, Navigation]}
        //   className="swiper_container"

        {...params}
        >
    <div>
      <h2>Movie Video Carousel</h2>
      
        {videos.map((video) => (
           
          <SwiperSlide className=" flex items-center justify-center" key={video.id}>
            <iframe
              title={video.name}
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${video.key}`}
             
              allowFullScreen
            ></iframe>
          </SwiperSlide>
        ))}
     
    </div>
    <div className="slider-controler  mt-[40px] ">
            <div className="swiper-pagination "></div>
          </div>
     </Swiper>
    </div>
    
  )
}

export default Trailers