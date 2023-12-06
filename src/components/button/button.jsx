import "./button.scss"

function Button({ btn }) {
    return (
        <button className="btn"><a href="#">{btn}</a></button>
    )
}
export default Button