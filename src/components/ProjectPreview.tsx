import Image from './Image'

const ProjectPreview = ({ imageSrc, altText, description, title }: ProjectProps) => {
    return (
        <div className="project-preview">
            <h2 className="project-title">{title}</h2>
            <Image alt={altText} src={imageSrc}/>
            <p className="project-description">{description}</p>
        </div>
    )
}

interface ProjectProps{
    title: string
    imageSrc: string
    altText: string
    description: string
}

export default ProjectPreview