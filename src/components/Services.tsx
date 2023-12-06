import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

const Services = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/services");
        const data = await response.json();
        if (data.success) {
          setServices(data.data);
        } else {
          console.error("Failed to fetch services:", data.message);
        }
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    }
    fetchData();
  }, []);

  const goNext = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  return (
    <div className="flex items-center justify-center flex-col mt-8">
      <div className="flex justify-between absolute w-[95%] mt-4">
        <button onClick={goPrev} className="rounded-full bg-primary text-white p-3 left-0 ml-4 navigation-button absolute z-10">
          <ArrowLeft size={24} />
        </button>
        <button onClick={goNext} className="rounded-full bg-primary text-white p-3 right-0 mr-4 navigation-button absolute z-10">
          <ArrowRight size={24} />
        </button>
      </div>
      <Swiper
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[80%] lg:max-w-[90%]"
      >
        {services.map((service) => (
          <SwiperSlide key={service.id}>
            <div className="bg-white rounded-lg h-56 border border-1-gray-100">
              <div className="p-8">
                <img
                  src={service.icon}
                  loading="lazy"
                  width="200"
                  height="200"
                  className="w-12 h-12"
                  alt={service.title}
                />
                <div className="space-y-2 mt-4">
                  <h5 className="text-xl font-semibold text-black">
                    {service.title}
                  </h5>
                  <p className="text-black" style={{ wordWrap: "break-word" }}>
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Services;
