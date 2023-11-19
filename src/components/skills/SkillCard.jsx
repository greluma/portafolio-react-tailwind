const SkillCard = ({ title, icon, text }) => {
    return (
        <article className="text-center">
            <span className="grid justify-items-center">{icon}</span>
            <h4 className="mt-6 font-bold">{title}</h4>
            <p className="mt-2 text-slate-500">{text}</p>
        </article>
    )
}
export default SkillCard