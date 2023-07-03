"use client"

import Link from 'next/link'
import AppThumbnail from '../../components/AppThumbnail'
import SlideLeft from '../animations/SlideLeft'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Frontend() {
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
    <SlideLeft isVisible={isVisible} >
      <AppThumbnail href="/todo" tittle="ToDo App" img="/assets/images/todo-screenshot.png"></AppThumbnail>
      <AppThumbnail href="/madrefarma" tittle="DrugStore Page" img="/assets/images/madrefarma-screenshot.png"></AppThumbnail>
      <Link href="/" onClick={closePageHandler}>
        <div className= "flex absolute top-0 left-[95vw] w-[5vw] h-[100vh] group items-center justify-end">
          <h1 className="pr-4 text-1xl group-hover:text-2xl ease-in-out duration-300">Voltar</h1>
        </div>
      </Link>
    </SlideLeft>
  )
}