import { Link } from "react-router-dom"
export const ButtonWarning = ({ label, to, buttonText }) => {
  return (
    <div className="flex">
      <div>{label}</div>
      <Link to={to} className="ml-1 underline font-medium">
        {buttonText}
      </Link>
    </div>
  )
}
