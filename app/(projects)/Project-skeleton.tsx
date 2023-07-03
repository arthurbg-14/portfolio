import { ReactNode } from "react";
import Link from "next/link";

interface ProjectProps {
	iFramePage: string, 
	projectUrl: string, 
	technologies: ReactNode, 
	previousPage: string
}

export default function Project(props: ProjectProps) {
	return <>
	<div className="w-full h-[100vh] bg-sky-900 p-8">
		<div className="w-full h-[25rem] relative">
			<h2 className="bg-sky-900 absolute top-[-1rem] ml-4 p-1 px-2 font-bold text-lg text-white  rounded-lg">Preview </h2>
			<iframe className="w-full h-full rounded-lg bg-white" src={props.iFramePage}></iframe>
		</div>
		<div className="w-full h-12 rounded mt-6 bg-gray-800 relative flex items-center px-2 text-white">
			<h2 className="bg-gray-800 absolute top-[-1rem] px-2 font-bold text-md text-white rounded-lg">Tittle </h2>
			<h3 className="ml-2">ToDo App with Api - </h3>
			<a className="ml-1 text-blue-400" href={props.projectUrl}>Link</a>
		</div>
		<div className="w-full h-16 rounded mt-6 bg-gray-800 relative justify-center flex items-center ">
			<h2 className="bg-gray-800 absolute left-[0.5rem] top-[-1rem] px-2 font-bold text-md text-white rounded-lg">Technologies </h2>
			{props.technologies}
		</div>
		<Link href={props.previousPage}>
			<div className="absolute h-full w-12 top-0 left-0"></div>
			<div className="absolute h-full w-12 top-0 right-0"></div>
			<div className="absolute w-full h-12 top-0 right-0"></div>
			<div className="absolute w-full h-12 bottom-0 right-0"></div>
		</Link>
	</div>
	</>
}