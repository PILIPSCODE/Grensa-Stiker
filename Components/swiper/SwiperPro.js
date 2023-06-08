"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { motion } from "framer-motion";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useState } from "react";

export default () => {
const [nama,setNama] = useState('')
  return (
    <>
    {/* You can open the modal using ID.showModal() method */}

<dialog id="my_modal_4" className="modal ">
  <form method="dialog" className="modal-box overflow-hidden">
    <div className="modal-action flex flex-col">
      <button className="btn">Close</button>
      <img className="max-w-full max-h-full" src={`${nama}`}/>
    </div>

  </form>
</dialog>
    <Swiper
      // install Swiper modules
      centeredSlides={true}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      className="categoryslide"
    >
      <SwiperSlide>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            duration: 2.5,
            stiffness: 260,
          }}
          className="flex gap-3 justify-center  max-md:w-full items-center font-popins max-md:flex-col"
        >
          <div className="w-60 h-60 flex items-center justify-center">
            <img src="/Projectcorel1.jpg" className="h-max-full w-max-full" />
          </div>
          <div className="flex-col flex items-start max-md:items-center  w-5/12 max-md:w-full">
            <h1 className="text-4xl font-bold">Typografy</h1>
            <p className="text-start text-lg max-md:text-center  ">
              Saat Belajar disekolah saya diberikan tugas untuk membuat personal
              branding dan ini typografy dari produk Coffee Aza
            </p>
            <button onClick={()=>{
              window.my_modal_4.showModal()
              setNama("Projectcorel1.jpg")
            }} className="border px-10 mt-3 text-center font-popins text-bold border-blue-400 rounded-md bg-transparent p-2 text-blue-400 hover:bg-blue-400 hover:text-slate-950">
              View
            </button>
          </div>
        </motion.div>
      </SwiperSlide>
      <SwiperSlide>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            duration: 2.5,
            stiffness: 260,
          }}
          className="flex  gap-3 justify-center  max-md:w-full items-center font-popins max-md:flex-col"
        >
          <div className="w-60 h-60 flex justify-center">
            <img src="/Projectcorel2.jpg" className="h-max-full w-max-full" />
          </div>
          <div className="flex-col flex items-start max-md:items-center  w-5/12 max-md:w-full">
            <h1 className="text-4xl font-bold">logo</h1>
            <p className="text-start text-lg max-md:text-center  ">
              KOPI AZA atau dari kata KOPI AJA yang dapat memberikan kesan
              ketertarikan tersendiri untuk anak remaja untuk merasakan kopi ini
              karena memiliki unsur nama yang modern di zaman ini
            </p>
            <button onClick={()=>{
              window.my_modal_4.showModal()
              setNama("Projectcorel2.jpg")
            }} className="border px-10 mt-3 text-center font-popins text-bold border-blue-400 rounded-md bg-transparent p-2 text-blue-400 hover:bg-blue-400 hover:text-slate-950">
              View
            </button>
          </div>
        </motion.div>
      </SwiperSlide>
    </Swiper>
    </>
  );
};
