export const InputBox = ({ placeholder, type, label, onChange }) => {
  return (
    <div>
      <div className="text-sm font-medium text-left py-2">{label}</div>
      <input
        className=" border-2 border-gray-400 text-base text-start px-6 py-1 font-thin font-serif text-gray-500 rounded-md"
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  )
}
