"use client"
import { useState } from 'react'


export default function Home() {
  return (
    <>
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center relative">
        <div className="mb-[30%] text-3xl">My Portfolio!</div>
        <div className="group flex items-center justify-center absolute w-[50vw] h-[100vh] left-0">
          <h1 className="text-2xl group-hover:text-4xl ease-in-out duration-300 pb-1 px-3 border-b-[2px]">Front-End</h1>
        </div>
        <div className="group flex items-center justify-center absolute w-[50vw] h-[100vh] left-[50vw]">
          <h1 className="text-2xl group-hover:text-4xl ease-in-out duration-300 pb-1 px-3 border-b-[2px]">Back-End</h1>
        </div>
      </div>
    </>
  )
}