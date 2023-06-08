"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
const Desain = ({Contact}) => {
  const [muncul,setmuncul] = useState("")
  const ContactRoute = () => {
    Contact.current.scrollIntoView({ block: "start", behavior: "smooth" })
      
    }
  const allStiker = [
    { stiker: "/stiker 1.jpg" },
    { stiker: "/stiker 2.jpg" },
    { stiker: "/stiker 3.jpg" },
    { stiker: "/stiker 4.jpg" },
    { stiker: "/stiker 5.jpg" },
    { stiker: "/stiker 6.jpg" },
    { stiker: "/stiker 7.jpg" },
    { stiker: "/stiker 8.jpg" },
    { stiker: "/stiker 9.jpg" },
    { stiker: "/stiker 10.jpg" },
    { stiker: "/stiker 11.jpg" },
   
  ];


  return (
    <section className="font-popins mt-6">
      <div className="flex justify-center md:ms-6">
        <div className="text-5xl max-md:text-3xl font-bold flexp-2 text-center">
          <motion.h1 
           initial={{ y:200,opacity:0 }}
           whileInView={{ y:0 ,opacity:1}}
           transition={{
             type: "spring",
             duration:2.5,
             
             stiffness: 260,
           }}
           viewport={{once:true}}
          className="bg-gradient-to-r pb-3 from-blue-200 to-cyan-200 bg-clip-text text-transparent">
            {" "}
            Desain Stiker yang biasa ku jual
          </motion.h1>
          <motion.h1 
           initial={{ y:200,opacity:0 }}
           whileInView={{ y:0 ,opacity:1}}
           viewport={{once:true}}
           transition={{
             type: "spring",
             duration:2.5,
             stiffness: 260,
           }}
           className="mt-1">
            Beli{" "}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Stiker
            </span>
            /
            <span className="bg-gradient-to-r from-teal-200 to-teal-500 bg-clip-text text-transparent">
              Desain
            </span>
            ?
          </motion.h1>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <div className="flex justify-center flex-grow flex-wrap gap-4">
          {allStiker.map((items, index) => (
            <motion.div key={index}
            transition={{
              type: "spring",
                stiffness: 100,
                duration:3,
                delay:index %= 2
            }}
            viewport={{once:true}}
            initial={{scale:0}}
             whileInView={{scale:1}}
            >
              <motion.div 
               transition={{
                duration:1
              }}
               animate={muncul === items.stiker? {scale:0.5} : {scale:1}}
               className="card flex-row w-96 h-60  bg-slate-900 shadow-lg rounded-3xl   shadow-slate-500">
                <motion.div 
                transition={{
                  duration:1
                }}
                animate={muncul === items.stiker? {scale:2} : {scale:0.8}}
                 className={ muncul === items.stiker ? "relative":" w-60  flex justify-start items-center ms-1"}>
                  <img
                    src={items.stiker}
                    alt="Shoes"
                    className="rounded-2xl max-w-full max-h-full "
                  />
                </motion.div> 
                <div 
                 className={muncul === items.stiker ? "hidden" : "card-body justify-center"}>
                  <div className="card-actions flex-col ">
                    <button onClick={ContactRoute} className="btn btn-primary ">Buy Now</button>
                    <button className="btn btn-primary" onClick={() => setmuncul(items.stiker)}>View</button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Desain;
