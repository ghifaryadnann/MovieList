import { searchMoviesFilm } from "../apiSearch";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import axios from "axios";
import { useState, useEffect } from "react";
import Swal from "sweetalert2"

const NowPlaying = () => {

    const [movie, setMovie] = useState(null);

    useEffect(() => {
      axios
        .get(
          `${import.meta.env.VITE_BASE_URL}/movie/now_playing?page=1&api_key=${
            import.meta.env.VITE_APIKEY
          }`
        )
        .then((res) => {
          setMovie(res.data.results);
          console.log(res.data)
         
        })
        .catch((error) => {
          console.log(error);
        });
  
        axios.get
  
        
    }, []);
  
   
  
    const handleRating = (vote_average) => {
      if (vote_average >= 8){
        return '⭐⭐⭐⭐⭐'
      }else if(vote_average >=7 && vote_average < 8){
        return "⭐⭐⭐⭐"
      }else if(vote_average >=6 && vote_average <7){
        return "⭐⭐⭐"
      }else if(vote_average >=5 && vote_average <6){
        return "⭐⭐"
      }else{
        return "⭐"
      }
    }
  
    const loadingSearch = () => {
      let timerInterval;
  Swal.fire({
    title: "Film Kamu Lagi Di Cari Nih!",
    html: "sebentar lagiii <b></b> detik",
    timer: 4000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const timer = Swal.getPopup().querySelector("b");
      timerInterval = setInterval(() => {
        timer.textContent = `${Swal.getTimerLeft()}`;
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
    }
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log("I was closed by the timer");
    }
  });
    }
  
    const handleButton = () => {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "bg-blue-600 p-4 text-white ms-3 hover:bg-blue-400 rounded-2xl",
          cancelButton: "bg-red-600 hover:bg-red-400 p-4 text-white ms-3 rounded-2xl"
        },
        buttonsStyling: false
      });
      swalWithBootstrapButtons.fire({
        title: "Eitss, belum bisa nonton 😅",
        text: "Follow dulu ig aku ka @ghifaryadnan biar bisa nonton gratis hehe",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yaudah iya",
        cancelButtonText: "Enggah ah males",
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Masukin username instagram kamu",
            input: "text",
            inputAttributes: {
              autocapitalize: "off"
            },
            showCancelButton: true,
            confirmButtonText: "Cek Ombak",
            showLoaderOnConfirm: true,
            preConfirm: async (login) => {
              try {
                const githubUrl = `
                  https://instagram.com/${login}
                `;
                const response = await fetch(githubUrl);
                if (!response.ok) {
                  return Swal.showValidationMessage(`
                    ${JSON.stringify(await response.json())}
                  `);
                }
                return response.json();
              } catch (error) {
                Swal.showValidationMessage(`
                  Yah Ketauan : "belum follow ig @ghifaryadnan"
                `);
              }
            },
            allowOutsideClick: () => !Swal.isLoading()
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: `${result.value.login}'s avatar`,
                imageUrl: result.value.avatar_url
              });
            }
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Kenapa gamau follow ka😓",
            text: "Jadi gabisa nonton kan :)",
            icon: "error"
  
          });
        }
      });
    }
    
  

  return (
    <>
    <div className="container  m-auto   my-2">
        

        <h1 data-aos="fade-left" className="text-2xl ms-2 my-5">Now Playing</h1>

        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          
          onSwiper={(swiper) => console.log(swiper)}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          // navigation={{
          //   nextEl: ".swiper-button-next",
          //   prevEl: ".swiper-button-prev",
          //   clickable: true,
          // }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          {movie !== null &&
            movie.map((movie, index) => {
              return (
                <SwiperSlide 
                  className=" flex items-center justify-center"
                  key={index}
                >
                  <div className=" w-screen flex" data-aos="fade-right">
                    <img
                      src={`${import.meta.env.VITE_BASE_IMAGE}/${
                        movie.poster_path
                      }`}
                      alt="gambar"
                      className="rounded-xl"
                    />
                    <div className="absolute inset-0 flex sm:p-2 items-end ">
                      <div className="p-1">
                        <h1 className=" font-bold sm:text-[40px] shadow-xl">
                          {movie.title}
                        </h1>
                        <button onClick={handleButton} className="text-sm sm:p-2 sm:my-1 sm:text-xl rounded-2xl hover:duration-300 p-1 bg-red-400 hover:bg-red-700">
                          <span>
                            <h1 className="text-[10px] sm:text-xl">
                              Watch Now ▶
                            </h1>
                          </span>
                        </button>
                        <li className="text-[10px] sm:text-[20px]">
                          Rating : {handleRating(movie.vote_average)}
                        </li>
                        <li className="text-[10px] sm:text-[20px]">
                          Realse : {movie.release_date}
                        </li>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}

          <div className="slider-controler bg-black mt-[40px] ">
            <div data-aos="fade-left" className="swiper-pagination "></div>
          </div>
        </Swiper>
      </div>

    </>
  )
}

export default NowPlaying