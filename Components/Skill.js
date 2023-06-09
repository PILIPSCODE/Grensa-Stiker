"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BsPencilFill, BsXCircle } from "react-icons/bs";
import SwiperPRO from "./swiper/SwiperPro";
import SwiperproAi from "./swiper/SwiperproAi";

const Skill = ({ligtmode}) => {
  const [corelpro, setcorelpro] = useState(false);
  const variants ={
    masuk:{
      opacity:1,
      x:0,
      transition:{
         type: "spring",
         stiffness: 100,
         duration:2.5,
         delay:1,
       }
    },
    keluar:{
      opacity:0,
      x:-300
    }
  }



  const [Aipro, setAipro] = useState(false);
  return (
    <AnimatePresence>

    <section id="skill" className={`font-popins pt-10  overflow-x-hidden ${ligtmode ?"bg-slate-300 text-slate-950":" bg-slate-950 text-white" }`}>
      <div className="flex justify-center md:ms-6 md:justify-start ">
        <motion.h1 
         initial={{ x:-100,opacity:0 }}
         whileInView={{ x:0 ,opacity:1}}
         transition={{
           type: "spring",
           duration:2.5,
           stiffness: 260,
         }}
         viewport={{once:true}}
        className={`text-5xl font-bold flex gap-2 border ${ligtmode ? "border-black" :""} rounded-lg p-2`}>
          <BsPencilFill />
          Skill
        </motion.h1>
      </div>
      <div className="pt-10 text-center">
        <motion.h1
         initial={{ y:200,opacity:0 }}
         whileInView={{ y:0 ,opacity:1}}
         transition={{
           type: "spring",
           duration:2.5,
           stiffness: 260,
         }}
         viewport={{once:true}} 
         className="text-2xl">Skillku ini Di Pelajari selama Disekolah</motion.h1>
        <div className="mt-5">
          <motion.div 
          variants={variants}
          initial="keluar"
          whileInView="masuk"
          viewport={{once:true}}
           className={`flex  max-md:w-full gap-3 max-md:items-center p-10 max-md:flex-col ${ligtmode ? "bg-gradient-to-r from-slate-200 to-slate-300" : "bg-gradient-to-r from-slate-800 to-slate-950"} `}>
            <div className="w-full">
              <motion.div 
              initial={false}
              animate={corelpro ? {opacity:1,x:0} : {opacity:0,x:-100}}
              transition={
               {
                type: "spring",
                stiffness: 100,
                duration:1.5,
               }
              }
               className={corelpro ? "project-corel " : " hidden"}>
                <BsXCircle
                  onClick={() => {
                    setcorelpro(false);
                  }}
                  className="text-start ms-2 -translate-y-6 absolute text-3xl z-30"
                />

                <SwiperPRO />
              </motion.div>

              <motion.div
               initial={false}
               animate={corelpro ?{opacity:0,x:100} : {opacity:1,x:0}}
               transition={
                {
                 type: "spring",
                 stiffness: 100,
                 duration:1.5,
                }
               }
                className={
                  corelpro
                    ? "hidden"
                    : " flex max-md:items-center  max-md:flex-col"
                }
              >
                <img src="/corel.png" className="w-60 h-60" />
                <div className="flex-col flex items-start max-md:items-center ms-2">
                  <p className="text-start text-xl max-md:text-center">
                    {" "}
                    CorelDRAW adalah perangkat lunak desain vektor yang sangat
                    populer yang digunakan oleh banyak desainer grafis
                    profesional di seluruh dunia. Dengan CorelDRAW, Anda dapat
                    membuat berbagai macam desain, termasuk ilustrasi, logo,
                    brosur, poster, dan banyak lagi.
                  </p>
                  <button
                    onClick={() => {
                      setcorelpro(true);
                    }}
                    className="border px-10 mt-3 text-center font-popins text-bold border-green-400 rounded-md bg-transparent p-2 text-green-400 hover:bg-green-400 hover:text-slate-950"
                  >
                    My Project
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
          <motion.div 
            variants={variants}
            initial="keluar"
            whileInView="masuk"
            viewport={{once:true}}
           className={`flex  gap-3  max-md:w-full max-md:items-center p-10 max-md:flex-col ${ligtmode ? "bg-gradient-to-r from-slate-300 to-slate-200" : "bg-gradient-to-r from-slate-950 to-slate-800"}`}>
            <div className="w-full">
              <motion.div
               initial={false}
               animate={Aipro ? {opacity:1,x:0} : {opacity:0,x:-100}}
               transition={
                {
                 type: "spring",
                 stiffness: 100,
                 
                 duration:1.5,
                }
               }
               className={Aipro ? "project-corel " : " hidden"}>
                <BsXCircle
                  onClick={() => {
                    setAipro(false);
                  }}
                  className="text-start ms-2 -translate-y-6 absolute text-3xl z-30"
                />

                <SwiperproAi />
              </motion.div>

              <motion.div
              initial={false}
              animate={Aipro ?{opacity:0,x:100} : {opacity:1,x:0}}
              transition={
               {
                type: "spring",
                stiffness: 100,
                duration:1.5,
               }
              }
                className={
                  Aipro
                    ? "hidden"
                    : " flex max-md:items-center max-md:flex-col"
                }
              >
                <img src="/a-i.png" className="w-60 h-60" />
                <div className="flex-col flex items-start max-md:items-center ms-2">
                  <p className="text-start text-xl max-md:text-center">
                    {" "}
                    Adobe Illustrator adalah salah satu perangkat lunak desain
                    grafis yang sangat populer dan sering digunakan oleh para
                    desainer profesional. Program ini memungkinkan pengguna
                    untuk membuat ilustrasi vektor dengan tingkat detail dan
                    kepresisian yang tinggi.
                  </p>
                  <button
                    onClick={() => {
                      setAipro(true);
                    }}
                    className="border px-10 mt-3 text-center font-popins text-bold border-orange-500 rounded-md bg-transparent p-2 text-orange-500 hover:bg-orange-500 hover:text-slate-950"
                  >
                    My Project
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    </AnimatePresence>
  );
};

export default Skill;
