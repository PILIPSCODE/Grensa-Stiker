"use client"
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BsHouseFill,BsTelephoneFill, BsPencilFill} from "react-icons/bs";
import { RiPaintBrushFill} from "react-icons/ri";

const Navbar = ({SkillRef,Home,Desain,Contact}) => {
  const skillroute = () =>{

  SkillRef.current.scrollIntoView({ block: "start", behavior: "smooth" })

  } 
  const Homeroute = () =>{

  Home.current.scrollIntoView({ block: "start", behavior: "smooth" })

  } 
  const Desainroute = () =>{

  Desain.current.scrollIntoView({ block: "start", behavior: "smooth" })

  } 
  const ContactRoute = () => {
  Contact.current.scrollIntoView({ block: "start", behavior: "smooth" })
    
  }

  return (
    <AnimatePresence>

    <section className="flex w-screen justify-center z-50 text-black h-14 font-popins  absolute">
      <motion.div 
       initial={{ x:-200,opacity:0 }}
       animate={{ x:0 ,opacity:1}}
       transition={{
         type: "spring",
         stiffness: 260,
         delay:1.6,
         duration:2,
       }}
      className="bg-slate-950 rounded-b-3xl  flex max-md:justify-center   max-md:w-11/12 shadow-2xl ">
        <div className="flex items-center h-full  me-9 ms-9 max-sm:ms-0 max-sm:me-5 hov  max-[368px]:me-1">
        
          <span onClick={Homeroute} className="flex items-center ">
          <BsHouseFill className="mr-1 text-4xl max-sm:text-3xl max-[368px]:text-2xl " />
          <h1 className=" md:block text-2xl">Home</h1>
          </span>
     
        </div>
        <div className="flex items-center h-full  mx-9 max-sm:mx-4 hov  max-[368px]:mx-1">
         
        <span onClick={skillroute} className="flex items-center">
          <BsPencilFill className="mr-1 text-4xl max-sm:text-3xl max-[368px]:text-2xl"/>
          <h1 className=" md:block text-2xl">Skill</h1>
          </span>
         
        </div>
        <div className="flex items-center h-full  mx-9 max-sm:mx-4 hov max-[368px]:mx-1">
        <span onClick={Desainroute} className="flex items-center justify-center">
          <RiPaintBrushFill className="mr-1 text-4xl max-sm:text-3xl max-[368px]:text-2xl"/>
          <h1 className="md:block text-2xl">Desain</h1>
          </span>
        </div>
        <div className="flex items-center  h-full justify-center  me-9 ms-9 max-md:me-0 hov max-[368px]:mx-1">
        <span onClick={ContactRoute} className="flex items-center justify-center">
          <BsTelephoneFill className="ms-1 max-sm:mr-0 text-4xl max-sm:text-3xl max-[368px]:text-2xl"/>
          <h1 className=" md:block text-2xl">Contact</h1>
          </span>
        </div>
        
        
      </motion.div>
    </section>
    </AnimatePresence>
  );
};

export default Navbar;
