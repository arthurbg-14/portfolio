import Project from "./../Project-skeleton"
import Icon from "./../../../components/Icon"

export default function Page(){
	return <>	
	<Project 
	iFramePage="https://madrefarma.com.br/"
	projectUrl="https://madrefarma.com.br/"
	previousPage="/frontend"
	tittle="Website to drugstore Madrefarma - "
	technologies={
		<>
		<Icon href="https://wordpress.com/" img="/assets/images/wordpressicon.png"/>	
		</>
	}
	/>
	</>
}