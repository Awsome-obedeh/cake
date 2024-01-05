
"use client"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function Aos(){
  useEffect(() => {
    AOS.init({
   
         once: false,
         easing:'ease-out-quad'
       })
 }, [])
  
    return null
  
}