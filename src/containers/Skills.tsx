import SectionTitle from '../components/SectionTitle'
import SkillPallet from '../components/SkillPallet'
import { skills } from '../skills'

const Skills = () => {
  return (
    <section id='#skills'>
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
export default Skills