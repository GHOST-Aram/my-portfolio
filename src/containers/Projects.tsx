import SectionTitle from '../components/SectionTitle'
import liqourImgSrc from '../images/online-liqour-store.png'
import ProjectPreview from '../components/ProjectPreview'
import memoryGameImgSrc from '../images/memeory-game.png'

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
		imageSrc: liqourImgSrc,
    }, {
		title: 'Memory Game',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '+
			'Nulla praesentium saepe ullam necessitatibus quidem magnam. '+
			'Facere expedita, modi quas doloribus amet magnam deserunt consectetur'+
			' dolore et, enim voluptatibus, aut odio.',
		altText: 'online liqour store' ,
		imageSrc: memoryGameImgSrc
	},
	{
		title: 'Memory Game',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '+
			'Nulla praesentium saepe ullam necessitatibus quidem magnam. '+
			'Facere expedita, modi quas doloribus amet magnam deserunt consectetur'+
			' dolore et, enim voluptatibus, aut odio.',
		altText: 'online liqour store' ,
		imageSrc: memoryGameImgSrc
	}
]
export default Projects