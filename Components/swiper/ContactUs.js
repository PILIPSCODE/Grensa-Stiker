"use client";
import React, { useState } from "react";
import { BsChatFill, BsMapFill, BsTelephoneFill } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";

const ContactUs = ({ligtmode}) => {
  const [Nama, setNama] = useState("");
  const [ig, setig] = useState("");
  const [Pesan, setPesan] = useState("");

  const HandleSubmit = (e) => {
    e.preventDefault();
    const url = `https://wa.me/6289674113469?text=Hello bang Lian Saya ${Nama},Ig:${ig},pesan:${Pesan} `;
    window.location.href = url;
  };
  return (
    <>
      <section className={`pb-10 pt-40 ${ligtmode ? " bg-gradient-to-b from-slate-300 to-purple-900 text-black" : " bg-gradient-to-b text-white from-slate-950 to-purple-900"}`}>
        <div className="flex text-5xl font-popins justify-start">
          <motion.h1
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              duration: 2.5,
              stiffness: 260,
            }}
            className="flex mx-6 gap-2 items-center font-bold"
          >
            <BsTelephoneFill /> Contact
          </motion.h1>
        </div>
        <div className="flex mt-20 max-lg:flex-col ">
          <div className="flex items-center flex-col gap-10 w-1/2   max-lg:w-full ">
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                duration: 2.5,
                stiffness: 260,
              }}
              className="text-3xl font-bold flex gap-3 ms-2"
            >
              <BsChatFill />
              Pesan Sekarang Dengan isi Form ini!!
            </motion.h1>
            <form
              onSubmit={HandleSubmit}
              className="flex flex-col gap-10 w-11/12"
            >
              <motion.input
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  duration: 2.5,
                  stiffness: 260,
                }}
                placeholder="Nama?"
                value={Nama}
                required
                className={`w-full  border-2 h-14 ps-2 rounded-md bg-transparent`}
                onChange={(e) => setNama(e.target.value)}
              ></motion.input>
              <motion.input
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  duration: 2.5,
                  stiffness: 260,
                  delay: 0.5,
                }}
                placeholder="Instagram?"
                value={ig}
                required
                onChange={(e) => setig(e.target.value)}
                className="w-full border-2 h-14 ps-2 rounded-md bg-transparent"
              ></motion.input>
              <motion.textarea
                initial={{ y: 100, opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  duration: 2.5,
                  stiffness: 260,
                  delay: 1,
                }}
                placeholder="Pesan?"
                value={Pesan}
                required
                onChange={(e) => setPesan(e.target.value)}
                className="w-full border-2 h-28 ps-2 rounded-md bg-transparent"
              ></motion.textarea>
              <div>
                <motion.button
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    duration: 2.5,
                    delay:1.5,
                    stiffness: 260,
                  }}
                  type="submit"
                  className="border px-10 mt-3 text-center font-popins text-bold border-green-400 rounded-md bg-transparent p-2 text-green-400 hover:bg-green-400 hover:text-slate-950"
                >
                  Submit
                </motion.button>
              </div>
            </form>
          </div>
          <div className="w-1/2 max-lg:w-full flex flex-col items-center justify-center max-md:mt-7">
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                duration: 2.5,
                stiffness: 260,
              }}
              viewport={{ once: true }}
              className="text-3xl font-bold flex gap-3"
            >
              <BsMapFill />
              Maps{" "}
            </motion.h1>
            <motion.iframe
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",

                duration: 2.5,
                stiffness: 260,
                delay: 1,
              }}
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d988.7471150638336!2d110.77009626957368!3d-7.576233999527377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMzQnMzQuNCJTIDExMMKwNDYnMTQuNyJF!5e0!3m2!1sid!2sid!4v1686228145390!5m2!1sid!2sid"
              width="600"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
            ></motion.iframe>
          </div>
        </div>
      </section>
      <img src="wafes.svg" />
    </>
  );
};

export default ContactUs;
