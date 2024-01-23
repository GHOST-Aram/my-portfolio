import Image from './Image'
import { ProjectProps } from '../projects-details'

const ProjectPreview = (
    { imageSrc, altText, description, title, liveUrl, sourceUrl }: ProjectProps
    ) => {

        return (
            <div className="project-preview">
                <div>
                    <h2 className="project-title">{title}</h2>
                    <Image alt={altText} src={imageSrc}/>
                    <p className="project-description">{description}</p>
                </div>
                <div className="flex gap-8 view-btns">
                    <a href={liveUrl}>
                        <button>View Live</button>
                    </a>
                    <a href={sourceUrl}>
                        <button>View Code</button>
                    </a>
                </div>
            </div>
        )
}
export default ProjectPreview