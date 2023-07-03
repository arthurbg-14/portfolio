import Image from 'next/image'
import Link from 'next/link'

export default function AppThumbnail(props: {img: string, href: string}) {
	return (<>
		<Link href={props.href}>
			<div className="w-[3rem] h-[3rem] relative rounded m-2 flex items-center justify-center ease-in-out
			duration-300 hover:w-[4rem] hover:h-[4rem] hover:border-2 hover:border-white">
				<Image className="rounded" fill={true} src={props.img} alt="Thumb"></Image>
			</div>
		</Link>
	</>)
}