export default function Button({ text, disabled, onClick }) {
    return (
        <button
        className="p-3 text-green-500 border border-green-500 rounded hover:bg-green-500 hover:text-white disabled:bg-slate-900 disabled:text-white"
        disabled={disabled}
        onClick={onClick}
        >{ text }</button>
    )
}