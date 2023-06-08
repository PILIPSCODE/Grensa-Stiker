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
const [nama,setNama] = useState("")
  
  return (
    <>
    <dialog id="my_modal_5" className="modal ">
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
          className="flex  gap-3 justify-center  max-md:w-full items-center font-popins max-md:flex-col"
        >
          <div className="w-60 h-60 flex justify-center">
            <img src="/projectAi.jpg" className="h-max-full w-max-full" />
          </div>
          <div className="flex-col flex items-start max-md:items-center  w-5/12 max-md:w-full">
            <h1 className="text-4xl font-bold">Poster</h1>
            <p className="text-start text-lg max-md:text-center  ">
              Poster ini adalah tugas setelah saya membuat logo,untuk Mempromosikan Brand saya
            </p>
            <button onClick={()=>{
              window.my_modal_5.showModal()
              setNama("projectAi.jpg")
            }}  className="border px-10 mt-3 text-center font-popins text-bold border-blue-400 rounded-md bg-transparent p-2 text-blue-400 hover:bg-blue-400 hover:text-slate-950">
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
            <img src="/ProjectAi2.jpg" className="h-max-full w-max-full" />
          </div>
          <div className="flex-col flex items-start max-md:items-center  w-5/12 max-md:w-full">
            <h1 className="text-4xl font-bold">Packaging</h1>
            <p className="text-start text-lg max-md:text-center  ">
              Saya membuat Packaging dengan bentuk yang simple dan Desain yang Minimalis
            </p>
            <button 
            onClick={()=>{
              window.my_modal_5.showModal()
              setNama("ProjectAi2.jpg")
            }} 
             className="border px-10 mt-3 text-center font-popins text-bold border-blue-400 rounded-md bg-transparent p-2 text-blue-400 hover:bg-blue-400 hover:text-slate-950">
              View
            </button>
          </div>
        </motion.div>
      </SwiperSlide>
      
     
    </Swiper>
    </>
  );
};
