"use client"
import { AnimatePresence } from "framer-motion";
import React from "react";
import { motion } from "framer-motion";
import { BsFacebook, BsInstagram,} from "react-icons/bs";
function Hero({ligtmode}) {
  return (
    <AnimatePresence>
    <section id="home" className={`flex flex-col w-screen duration-150 h-screen md:flex-row-reverse ${ligtmode ? "bg-gradient-to-t from-slate-300 via-slate-300 to-gray-500 text-black" :"bg-gradient-to-t from-slate-950 via-slate-950 to-gray-800 text-white"}  overflow-x-hidden`}>
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          duration:0.5,
          damping: 20
        }}
      className="relative w-3/6  flex justify-center items-center max-md:w-full max-md:h-1/2 mt-20">
        <img
          src="/profile.png"
          className="w-52 absolute z-10 -translate-y-8 rounded-full"
        />
        <span className="absolute  w-9/12 max-md:w-9/12 max-sm:w-11/12  z-0">
          <img src="/bg.svg" />
        </span>
      </motion.div>
      <div className=" w-3/6 max-md:w-full flex justify-center items-center flex-col mt-2">
        <div className="ml-2">
          <motion.h1
           initial={{ scale: 0 }}
           animate={{ scale: 1 }}
           transition={{
             type: "spring",
             stiffness: 260,
             duration:0.5,
             damping: 20
           }}
           className="flex font-popins  "><BsInstagram className="text-xl mx-1"/> <BsFacebook className="text-xl"/></motion.h1>
          <div
        
           className="text-6xl font-popins flex font-bold max-[385px]:text-5xl max-[320px]:text-4xl">
            <motion.h1 
                initial={{ x:-200,scale:0,opacity:0 }}
                animate={{ x:0 ,scale:1,opacity:1}}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  delay:0.5,
                  damping: 20,
                }}
            className="font-popins  text-sendiri me-1 ">Hello</motion.h1>{" "}
            <motion.h1 
            initial={{ x:200,scale:0,opacity:0 }}
            animate={{ x:0 ,scale:1,opacity:1}}
            transition={{
              type: "spring",
              stiffness: 260,
              delay:0.8,
              damping: 20,
            }}
            >I'M Lian</motion.h1>
          </div>
          <motion.h1 
          initial={{ y:200,opacity:0 }}
          animate={{ y:0 ,opacity:1.1}}
          transition={{
            type: "spring",
            stiffness: 260,
            delay:1,
            damping: 20,
          }}
           className="font-popins text-xl font-light">
            Student || FreeLance
          </motion.h1>
          <motion.h1
           initial={{ y:200,opacity:0 }}
           animate={{ y:0 ,opacity:1.1}}
           transition={{
             type: "spring",
             stiffness: 260,
             delay:1,
             damping: 20,
           }}
           className="text-2xl font-popins font-light ">
            FreeLance ku dengan cara menjual stiker
          </motion.h1>
          <motion.button
           initial={{ scale:0,opacity:0 }}
           animate={{ scale:1,opacity:1}}
           transition={{
             type: "spring",
             stiffness: 260,
             delay:1.2,
             damping: 20,
           }}
           className="border font-popins text-bold border-orange-500 rounded-md bg-transparent p-2 text-orange-500 hover:bg-orange-500 hover:text-slate-950">Beli Stiker?</motion.button>
        </div>
      </div>
    </section>
    </AnimatePresence>
  );
}

export default Hero;
{
  /* <button className="btn btn-outline">Default</button>
<button className="btn btn-outline btn-secondary">Secondary</button>
<button className="btn btn-outline btn-accent">Accent</button> */
}
