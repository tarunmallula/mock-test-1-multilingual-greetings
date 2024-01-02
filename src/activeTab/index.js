import './index.css'

const ActiveTab = props => {
  const {tabDetails, changeActiveId, isActive} = props
  const {id, buttonText} = tabDetails
  const className = isActive ? 'button1' : 'button2'

  const changeTab = () => {
    changeActiveId(id)
  }

  return (
    <li>
      <button className={className} type="button" onClick={changeTab}>
        {buttonText}
      </button>
    </li>
  )
}

export default ActiveTab
