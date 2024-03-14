export const Button = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="mt-2 py-1 px-20 bg-[#1877f2]  text-xl text-[#fff] font-medium font-serif rounded-md"
    >
      {label}
    </button>
  )
}
