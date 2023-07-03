import Project from "./../Project-skeleton"
import Icon from "./../../../components/Icon"

export default function Page(){
	return <>
	<Project 
	tittle="ToDo App with Api - "
	iFramePage="https://todo-silk-one.vercel.app/docs"
	projectUrl="https://todo-silk-one.vercel.app/docs"
	previousPage="/backend"
	technologies={
		<>
		<Icon href="https://nextjs.org/" img="/assets/images/nexticon.png"/>
		<Icon href="https://react.dev/" img="/assets/images/reacticon.png"/>
		<Icon href="https://tailwindcss.com/" img="/assets/images/tailwindicon.svg"/>
		<Icon href="https://typescriptlang.org/" img="/assets/images/typescripticon.svg"/>
		<Icon href="https://postgresql.org/" img="/assets/images/postgresqlicon.svg"/>
		<Icon href="https://www.prisma.io/" img="/assets/images/prismaicon.svg"/>
		</>
	}
	/>
	</>
}