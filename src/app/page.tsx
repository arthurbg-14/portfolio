"use client"
import { useState } from 'react'


export default function Home() {
  return (
    <>
      <div className="w-[100vw] h-[100vh] flex items-center justify-center flex-col">
        Minha pagina!
        <Contador/>
      </div>
    </>
  )
}

function Contador(){
  const [contador, setContador] = useState(0)

  function adicionarAoContador(){
    setContador(contador + 1)
  }

  return <div className="bg-gray-700 border-2 border-gray-800 m-5 p-4 rounded-md flex flex-col items-center">
    <div className="bg-gray-500 p-4 rounded">{contador}</div>
    <button className="bg-gray-500 w-6 h-6 flex items-center justify-center mt-3 rounded hover:bg-gray-300" onClick={adicionarAoContador}>+</button>
  </div>
}