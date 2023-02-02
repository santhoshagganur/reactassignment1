import './index.css'

const HistoryResults = props => {
  const {history} = props
  const {timeAccessed, logoUrl, title, domainUrl} = history

  return (
    <li className="list-item">
      <div className="each-item">
        <p className="time"> {timeAccessed} </p>
        <img src={logoUrl} className="app-logo" alt="app" />
        <h1 className="title"> {title} </h1>
        <p className="time"> {domainUrl} </p>
      </div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-logo"
        />
      </div>
    </li>
  )
}

export default HistoryResults
