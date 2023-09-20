import iconSuccess from './../../assets/images/icon-success.svg'

export default function List ({ text }) {
    return (
        <div className="flex items-center gap-4 mb-2">
            <img src={iconSuccess} alt="success-icon" className="max-w-[20px] self-start"/>
            <p>{text}</p>
        </div>
    )
}