import SectionTitle from '../components/SectionTitle'
import ProjectPreview from '../components/ProjectPreview'
import { projects } from '../projects-details'

const Projects = () => {
  return (
    <section>
        <SectionTitle text='Projects'/>
        <div className="container projects">
			{
				projects.map(project => (
					<ProjectPreview 
						title={project.title}
						imageSrc={project.imageSrc}
						description={project.description}
						altText={project.altText}
						liveUrl={project.liveUrl}
						sourceUrl={project.sourceUrl}
					/>
				))
			}
        </div>
    </section>
  )
}
export default Projects