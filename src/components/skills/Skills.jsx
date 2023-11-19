import { skills } from '../../data'
import SectionTitle from '../utils/SectionTitle'
import SkillCard from './SkillCard'

const Skills = () => {
    return (
        <section className="py-10 align-element" id="skills">
            <SectionTitle text='tech stack'></SectionTitle>
            <div className="py-5 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {skills.map((skill) => {
                    return <SkillCard key={skill.id} {...skill}></SkillCard>
                })}
            </div>
        </section>
    )
}
export default Skills