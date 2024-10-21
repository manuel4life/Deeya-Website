
const Button = ({ label, icon, onClick, disabled = false, className = "" }) => {
    return (
        <button onClick={onClick} disabled={disabled} className={`text-ui-label-semi-bold font-heebo rounded-[16px] items-center ${className}`}>
             {icon && <img src={icon} alt="icon" className="inline-block W-[30px] h-[30px]" />}
             {label}


        </button>
    )
}





export default Button;