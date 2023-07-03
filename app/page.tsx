"use client"

import Link from 'next/link'
import Spawn from './animations/Spawn'
import { useState } from 'react'
import { useRouter } from 'next/navigation'


export default function Home() {
  const router = useRouter()
  let [isVisible, setVisible] = useState(true)

  function goToFrontend(e: any) {
    e.preventDefault()
    setVisible(false)
    setTimeout(() => {
      router.push("/frontend")
    },300)
  }
  function goToBackend(e: any) {
    e.preventDefault()
    setVisible(false)
    setTimeout(() => {
      router.push("/backend")
    },300)
  }

  return (
    <Spawn isVisible={isVisible}>
      <div className="mt-[5%] w-[100vw] flex justify-center text-3xl">My Portfolio!</div>
      <Link href="/frontend" onClick={goToFrontend}>
        <div className="group flex items-center justify-center absolute w-[50vw] h-[100vh] left-0 top-0">
          <h1 className="text-2xl group-hover:text-4xl ease-in-out duration-300 pb-1 px-3 border-b-[2px]">Front-End</h1>
        </div>
      </Link>
      <Link href="/backend" onClick={goToBackend}>
        <div className="group flex items-center justify-center absolute w-[50vw] h-[100vh] left-[50vw] top-0">
          <h1 className="text-2xl group-hover:text-4xl ease-in-out duration-300 pb-1 px-3 border-b-[2px]">Back-End</h1>
        </div>
      </Link>
    </Spawn>
  )
}