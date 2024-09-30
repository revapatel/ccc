import React, { useEffect, useState } from 'react'

export default function useWindowSize() {
    const [windowSize , setWindoeSize] =useState({
        width:window.innerWidth,
        height:window.innerHeight
    })

    useEffect(()=>{
        window.addEventListener('resize',()=>{
            setWindoeSize({
                width:window.innerWidth,
                height:window.innerHeight   
            })
        })
    } ,[])
  return windowSize;
}
