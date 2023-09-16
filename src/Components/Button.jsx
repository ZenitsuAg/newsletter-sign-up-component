export default function Button({ text, disabled }) {
    return (
        <button
        className="p-3 border border-green-500 rounded hover:bg-green-500 hover:text-white disabled:bg-slate-400"
        disabled={disabled}
        >{ text }</button>
    )
}