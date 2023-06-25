import Link from 'next/link'
import './index.css'

export default function Frontend() {
  return (
    <>
      <div className="bg-blue-950 text-white w-[100vw] h-[100vh] flex flex-col items-center justify-center relative">
        <Link href="home">
          <div className= "flex absolute top-0 left-[95vw] w-[5vw] h-[100vh] group items-center justify-end">
            <h1 className="pr-4 text-1xl group-hover:text-2xl ease-in-out duration-300">Voltar</h1>
          </div>
        </Link>
      </div>
    </>
  )
}