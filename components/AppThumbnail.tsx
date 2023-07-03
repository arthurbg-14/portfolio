import Image from 'next/image'
import Link from 'next/link'

export default function AppThumbnail(props: {img: string, tittle: string, href: string}) {
	return (<>
		<Link href={props.href}>
			<div className="w-[13rem] h-[6.5rem] relative bg-black rounded m-6 flex items-center justify-center ease-in-out
			duration-300 hover:w-[16rem] hover:h-[8rem] group hover:border-2 hover:border-white">
				<Image className="rounded group-hover:opacity-40" fill={true} src={props.img} alt="Thumb"></Image>
				<h2 className="absolute text-white font-bold hidden group-hover:block">{props.tittle}</h2>
			</div>
		</Link>
	</>)
}