import Image from 'next/image'

export default function AppThumbnaill(props: {img: string, tittle: string}) {
	return (<>
		<div className="w-[15rem] h-[7.5rem] relative bg-black rounded m-6 flex items-center justify-center ease-in-out
		 duration-300 hover:w-[18rem] hover:h-[9rem] group hover:border-2 hover:border-white">
			<Image className="rounded group-hover:opacity-40" fill={true} src={props.img} alt="Thumb"></Image>
			<h2 className="absolute text-white font-bold hidden group-hover:block">{props.tittle}</h2>
		</div>
	</>)
}