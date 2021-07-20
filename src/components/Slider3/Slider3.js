import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Scrollbar, Autoplay} from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "./Slidernew.css";

SwiperCore.use([Navigation, Scrollbar, Autoplay]);

const Slider3 = ({ data }) => {
  console.log("slider3data", data);
  const classs = data[0].classs;

  return (
    <>
      <div className={`topmost-cont3 ${classs}`}>

        <Swiper
          // spaceBetween={50}
          slidesPerView={1}
          scrollbar={{ draggable: true }}
          navigation
          autoplay={true}
          loop={true} 
          autoplay= {{
            delay: 2500,
            disableOnInteraction: false
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {data.map((dat) => {
            const { id, image, title, desc } = dat;
            return (
              <SwiperSlide>
                <section className="card-cont3" key={id}>
                  <div className="card-img-cont3">
                    <img className="card-img3" src={image} alt={image} />
                  </div>

                  <h1 className="card-title3">{title}</h1>
                  <p className="card-desc3">{desc}</p>
                </section>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      {/* </div>  */}
    </>
  );
};

export default Slider3;
