"use client"

import Link from 'next/link'
import Spawn from './animations/Spawn'
import { useState } from 'react'
import { useRouter } from 'next/navigation'


export default function Home() {
  const router = useRouter()
  let [isVisible, setVisible] = useState(true)

  function goTo(target: string) {
    setTimeout(() => {
      router.push(target)
    },300)
  }

  return (
    <Spawn isVisible={isVisible}>
      <div className="mt-[5%] w-[100vw] flex justify-center text-3xl">Arthur | Dev Fullstack!</div>
      <Link href="/frontend" onClick={() => {goTo("/frontend")}}>
        <div className="group flex items-center justify-center absolute w-[50vw] h-[100vh] left-0 top-0">
          <h1 className="text-2xl group-hover:text-4xl ease-in-out duration-300 pb-1 px-3 border-b-[2px]">Front-End</h1>
        </div>
      </Link>
      <Link href="/backend" onClick={() => {goTo("/backend")}}>
        <div className="group flex items-center justify-center absolute w-[50vw] h-[100vh] left-[50vw] top-0">
          <h1 className="text-2xl group-hover:text-4xl ease-in-out duration-300 pb-1 px-3 border-b-[2px]">Back-End</h1>
        </div>
      </Link>
    </Spawn>
  )
}