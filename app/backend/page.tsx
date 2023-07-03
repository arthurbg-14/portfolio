"use client"

import Link from 'next/link'
import AppThumbnail from '../../components/AppThumbnail'
import SlideRight from '../animations/SlideRight'
import { useState } from 'react'
import { useRouter } from 'next/navigation'


export default function Backend() {
  const router = useRouter()
  let [isVisible, setVisible] = useState(true)

  function closePageHandler(e: any){
    e.preventDefault()

    setVisible(false)

    setTimeout(() => {
      router.push('/')
    }, 300)
  }

  return (
    <SlideRight isVisible={isVisible}>
      <AppThumbnail href="/todoapi" tittle="ToDo Api" img="/assets/images/todo-api-screenshot.png"></AppThumbnail>
        <Link href="/" onClick={closePageHandler}>
          <div className= "flex absolute top-0 left-0 w-[5vw] h-[100vh] group items-center justify-start">
            <h1 className="pl-4 text-1xl group-hover:text-2xl ease-in-out duration-300">Voltar</h1>
          </div>
        </Link>
    </SlideRight>
  )
}