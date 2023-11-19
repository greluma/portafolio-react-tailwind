const SectionTitle = ({ text }) => {
    return (

        <div className="border-b border-gray-300 pb-5">
            <h2 className="text-3xl font-medium tracking-wider capitalize text-center">{text[0]} <span className="text-teal-600">{text[1]}</span></h2>
        </div>
    )
}
export default SectionTitle