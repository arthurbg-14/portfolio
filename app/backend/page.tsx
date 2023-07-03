import Link from 'next/link'
import AppThumbnail from '../../components/AppThumbnail'

export default function Backend() {
  return (
    <>
      <AppThumbnail href="/todoapi" tittle="ToDo Api" img="/assets/images/todo-api-screenshot.png"></AppThumbnail>
      <Link href="/">
        <div className= "flex absolute top-0 left-0 w-[5vw] h-[100vh] group items-center justify-start">
          <h1 className="pl-4 text-1xl group-hover:text-2xl ease-in-out duration-300">Voltar</h1>
        </div>
      </Link>
    </>
  )
}