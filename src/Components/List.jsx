export default function List ({ text }) {
    return (
        <div className="flex items-center gap-4 mb-2">
            <img src="./assets/images/icon-success.svg" alt="success-icon" className="max-w-[20px] self-start"/>
            <p>{text}</p>
        </div>
    )
}