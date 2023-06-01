"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { data } from "../data/categoriImages";
import Image from "next/image";
import Overlay from "./Overlay";
import SectionTitle from "./SectionTitle";
import CategorySliderItem from "./CategorySliderItem";

const Catagory = () => {
  return (
    <section className="py-20">
      <SectionTitle subTitle="Categories" title="Browse our all categories" />

      <div className="w-full h-[50vh]">
        <Swiper
          grabCursor={true}
          speed={750}
          loop={true}
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper w-full h-full"
        >
          {data.map((item: any) => (
            <SwiperSlide key={item.id}>
              <CategorySliderItem
                image={item.src}
                alt={item.alt}
                name={item.name}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Catagory;
