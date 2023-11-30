import { skills } from '../../data'
import SectionTitle from '../utils/SectionTitle'
import SkillCard from './SkillCard'
import { useAppContext } from '../Context';



const Skills = () => {
    const { before } = useAppContext()
    return (
        <section className=" align-element dark:bg-gray-800 py-4 relative" id="skills">
            {<style>
                {`#skills${before}`}
            </style>}
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