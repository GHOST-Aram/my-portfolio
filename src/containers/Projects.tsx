import SectionTitle from '../components/SectionTitle'
import ImgSrc from '../images/online-liquor-store.png'
import ProjectPreview from '../components/ProjectPreview'

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
					/>
				))
			}
        </div>
    </section>
  )
}

const projects = [
    {
		title: 'Online Liqour Store',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '+
			'Nulla praesentium saepe ullam necessitatibus quidem magnam. '+
			'Facere expedita, modi quas doloribus amet magnam deserunt consectetur'+
			' dolore et, enim voluptatibus, aut odio.',
		altText: 'online liqour store' ,
		imageSrc: ImgSrc,
    }, {
		title: 'Online Liqour Store',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '+
			'Nulla praesentium saepe ullam necessitatibus quidem magnam. '+
			'Facere expedita, modi quas doloribus amet magnam deserunt consectetur'+
			' dolore et, enim voluptatibus, aut odio.',
		altText: 'online liqour store' ,
		imageSrc: ImgSrc
	},
	{
		title: 'Online Liqour Store',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '+
			'Nulla praesentium saepe ullam necessitatibus quidem magnam. '+
			'Facere expedita, modi quas doloribus amet magnam deserunt consectetur'+
			' dolore et, enim voluptatibus, aut odio.',
		altText: 'online liqour store' ,
		imageSrc: ImgSrc
	}
]
export default Projects