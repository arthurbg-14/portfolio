import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className="mt-[5%] w-full flex justify-center text-3xl">My Portfolio!</div>
      <Link href="/frontend" passHref>
        <div className="group flex items-center justify-center absolute w-[50vw] h-[100vh] left-0 top-0">
          <h1 className="text-2xl group-hover:text-4xl ease-in-out duration-300 pb-1 px-3 border-b-[2px]">Front-End</h1>
        </div>
      </Link>
      <Link href="/backend" passHref>
        <div className="group flex items-center justify-center absolute w-[50vw] h-[100vh] left-[50vw] top-0">
          <h1 className="text-2xl group-hover:text-4xl ease-in-out duration-300 pb-1 px-3 border-b-[2px]">Back-End</h1>
        </div>
      </Link>
    </>
  )
}