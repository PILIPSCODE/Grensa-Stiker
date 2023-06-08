import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
import {
  BsHouseFill,
  BsTelephoneFill,
  BsPencilFill,
  BsArrowBarUp,
} from "react-icons/bs";
import { RiPaintBrushFill } from "react-icons/ri";
import React from "react";

function Footer({ SkillRef, Home, Desain, Contact }) {
  const skillroute = () => {
    SkillRef.current.scrollIntoView({ block: "start", behavior: "smooth" });
  };
  const Homeroute = () => {
    Home.current.scrollIntoView({ block: "start", behavior: "smooth" });
  };
  const Desainroute = () => {
    Desain.current.scrollIntoView({ block: "start", behavior: "smooth" });
  };
  const ContactRoute = () => {
    Contact.current.scrollIntoView({ block: "start", behavior: "smooth" });
  };
  return (
    <>
      <div
        onClick={Homeroute}
        className=" text-3xl fixed right-10 bottom-40 bg-white text-black rounded-xl p-3"
      >
        <motion.h1
        transition={{
          y: {
            duration: 0.4,
            ease: "easeOut",
          },
          backgroundColor: {
            duration: 0,
            ease: "easeOut",
            repeatDelay: 0.8,
          },
          
        }}
          animate={{
            y: ["100%", "-100%"],
            backgroundColor: ["#ff6699", "#6666ff"],
          }}
        >
          <BsArrowBarUp />
        </motion.h1>
      </div>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          duration: 2.5,
          stiffness: 260,
        }}
        id="Contact"
        className=" text-white font-nav p-7 font-popins"
      >
        <div className=" flex ms-4 justify-between max-md:flex-col">
          <div className="flex-col">
            <h1 className="text-4xl">Quick Link</h1>
            <div className="flex mt-3">
              <a href="https://www.instagram.com/lianjaiy/">
                <img src="/instagram.png" className="w-6 me-2" />
              </a>
              <a href="https://wa.me/6289674113469">
                <img src="/wa.png" className="w-6 me-2" />
              </a>
              <a href="https://www.tiktok.com/@lian.co1i?is_from_webapp=1&sender_device=pc">
                <img src="/tiktok.png" className="w-6 me-2" />
              </a>
            </div>
          </div>
          <div className="me-4 w-1/4 text-right max-md:w-full max-md:text-left max-md:mt-5">
            <h1 className="text-4xl">Navigation</h1>
            <div className="flex max-md:flex-col  mt-3 gap-3">
              <span onClick={Homeroute} className="flex items-center ">
                <BsHouseFill className="mr-1 text-xl max-sm:text-3xl max-[368px]:text-2xl " />
                <h1 className=" md:block text-lg">Home</h1>
              </span>
              <span onClick={skillroute} className="flex items-center ">
                <BsPencilFill className="mr-1 text-xl max-sm:text-3xl max-[368px]:text-2xl " />
                <h1 className=" md:block text-lg">Skill</h1>
              </span>
              <span onClick={Desainroute} className="flex items-center ">
                <RiPaintBrushFill className="mr-1 text-xl max-sm:text-3xl max-[368px]:text-2xl " />
                <h1 className=" md:block text-lg">Desain</h1>
              </span>
              <span onClick={ContactRoute} className="flex items-center ">
                <BsTelephoneFill className="mr-1 text-xl max-sm:text-3xl max-[368px]:text-2xl " />
                <h1 className=" md:block text-lg">Contact</h1>
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-center max-md:mt-5">
          <h1 className="flex items-center ">
            Copyright <AiOutlineCopyrightCircle /> 2023 by PilipsCode
          </h1>
        </div>
      </motion.div>
    </>
  );
}

export default Footer;
