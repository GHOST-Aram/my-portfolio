import SectionTitle from '../components/SectionTitle'
import SkillPallet from '../components/SkillPallet'
const Skills = () => {
  return (
    <section>
        <SectionTitle text='Skills & Tools'/>
        <div className="container skills">
            {
                skills.map(skill => (
                    <SkillPallet skill={skill}/>
                ))
            }
        </div>
    </section>
  )
}

const skills: string[] = [
'Frontend development', 'Backend development', 'React',
'CSS', 'HTML', 'Nodejs', 'JavaScript' , 'Typescript',
'Material UI', 'Tailwind', 'MongoDB'
]
export default Skills