"use client"
import React, { useState } from 'react'
import "@/styles/globals.css"
import Hero from '@/Components/Hero'
import { useRef } from 'react'
import Navbar from '@/Components/Navbar'
import Skill from '@/Components/Skill'
import Desain from '@/Components/Desain'
import { motion } from "framer-motion";
import ContactUs from '@/Components/swiper/ContactUs'
import Footer from '@/Components/Footer'
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs'
const pageLayout = () => {
  const [ligtmode,setLightmode] = useState(false)
  const SkillRef = useRef()
  const Home = useRef()
  const Design = useRef()
  const Contact = useRef()
  return (
    <>
    <div onClick={() => {setLightmode(!ligtmode)}} className='absolute z-50 top-20 right-5  text-4xl p-3 '>
      <div className='mr-6'>
      <motion.h1 
      className='absolute opacity-0 text-black'
      
      animate={ligtmode ? {opacity:1,y:0} : {opacity:0,y:100}}> 
        <BsMoonStarsFill/>
      </motion.h1>
      <motion.h1
        className='absolute text-yellow-400'
        animate={ligtmode ? {opacity:0,y:100} :  {opacity:1,y:0}}
      >
        <BsSunFill/>
      </motion.h1>
      </div>
    </div>
    <Navbar Contact={Contact} SkillRef={SkillRef} Home={Home} Desain={Design} ligtmode={ligtmode}/>
    <div ref={Home}>

    <Hero ligtmode={ligtmode}/>
    </div>
    <div ref={SkillRef}>

    <Skill ligtmode={ligtmode} />
    </div>
    <div ref={Design}>
      <Desain ligtmode={ligtmode} Contact={Contact}/>
    </div>
    <div ref={Contact}>
      <ContactUs ligtmode={ligtmode}/>
    </div>
    <Footer ligtmode={ligtmode} Contact={Contact} SkillRef={SkillRef} Home={Home} Desain={Design}/>
    </>
  )
}

export default pageLayout