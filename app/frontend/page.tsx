import Link from 'next/link'
import AppThumbnail from '../../components/AppThumbnail'

export default function Frontend() {
  return (
    <>
      <AppThumbnail href="/todo" tittle="ToDo App" img="/assets/images/todo-screenshot.png"></AppThumbnail>
      <AppThumbnail href="" tittle="DrugStore Page" img="/assets/images/madrefarma-screenshot.png"></AppThumbnail>
      <Link href="/">
        <div className= "flex absolute top-0 left-[95vw] w-[5vw] h-[100vh] group items-center justify-end">
          <h1 className="pr-4 text-1xl group-hover:text-2xl ease-in-out duration-300">Voltar</h1>
        </div>
      </Link>
    </>
  )
}