
const Button = ({ label, onClick, disabled = false, className = "" }) => {
    return (
        <button onClick={onClick} disabled={disabled} className={`text-ui-label-semi-bold font-heebo ${className}`}>
            {label}

        </button>
    )
}





export default Button;