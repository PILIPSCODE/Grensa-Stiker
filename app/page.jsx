"use client"
import React from 'react'
import "@/styles/globals.css"
import Hero from '@/Components/Hero'
import { useRef } from 'react'
import Navbar from '@/Components/Navbar'
import Skill from '@/Components/Skill'
import Desain from '@/Components/Desain'
import ContactUs from '@/Components/swiper/ContactUs'
import Footer from '@/Components/Footer'
const pageLayout = () => {
  const SkillRef = useRef()
  const Home = useRef()
  const Design = useRef()
  const Contact = useRef()
  return (
    <>
    <Navbar Contact={Contact} SkillRef={SkillRef} Home={Home} Desain={Design}/>
    <div ref={Home}>

    <Hero/>
    </div>
    <div ref={SkillRef}>

    <Skill />
    </div>
    <div className='pt-20' ref={Design}>
      <Desain Contact={Contact}/>
    </div>
    <div ref={Contact} className='pt-20'>
      <ContactUs/>
    </div>
    <Footer Contact={Contact} SkillRef={SkillRef} Home={Home} Desain={Design}/>
    </>
  )
}

export default pageLayout