export default function Button({ text, disabled, onClick, type }) {
    return (
        <button
            type={type}
            className="w-full p-3 mt-6 text-sm font-bold text-white rounded-lg bg-dark-slate-grey bg-gradient-to-r hover:from-pink-500 hover:from-5% hover:via-tomato hover:to-tomato disabled:bg-slate-200 disabled:text-white"
            disabled={disabled}
            onClick={onClick}
        >
            {text}
        </button>
    );
}
