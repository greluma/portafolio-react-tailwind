import { social } from "../../data";

const Icons = () => {
    return social.map((item) => {
        const { id, url, icon, pdf } = item;
        if (url) {
            return (<a href={url} key={id} className='place-self-center' target="_blank" rel='noreferrer'>{icon}</a>)
        } else {
            return (<a href={pdf} download key={id} className='place-self-center' target="_blank" rel='noreferrer'>{icon}</a>)
        }
    })
}


export default Icons