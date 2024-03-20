import './button.css'

const Button = ({ label, children }) => {

    const viewLabel = () => {
        window.alert(label)
    }

  return (
    <>
        <button className="button" onClick={viewLabel}>
            {children}
        </button>
    </>
  )
}

export default Button
