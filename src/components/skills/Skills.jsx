import { skills } from '../../data'
import SectionTitle from '../utils/SectionTitle'
import SkillCard from './SkillCard'



const Skills = () => {
    return (
        <section className="align-element py-10 dark:bg-gray-800" id="skills">
            <SectionTitle text={['tech', 'stack']}></SectionTitle>
            <div className="py-5 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {skills.map((skill) => {
                    return <SkillCard key={skill.id} {...skill}></SkillCard>
                })}
            </div>
        </section>
    )
}
export default Skills