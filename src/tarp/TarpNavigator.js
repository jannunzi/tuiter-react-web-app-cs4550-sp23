import {useState} from "react";

function TarpNavigator({active = 'Dashboard'}) {

  const [linkLabel, setLinkLabel] = useState('New Link')

  const [links, setLinks] = useState([
    'Northeastern',
    'Dashboard',
    'Courses',
    'Calendar',
    'Inbox',
    'Account'
  ])

  const onAdd = () => {
    const newLinks = [...links, linkLabel]
    setLinks(newLinks)
  }

  return(
    <div>
      <div className="list-group">
      {
         links.map((link, x) =>
            <a key={x} className={`list-group-item ${active === link ? 'active' : ''}`}
                href="#">{link}
            </a>)
      }
    </div>
      <input value={linkLabel} onChange={(e) => setLinkLabel(e.target.value)}/>
      <button onClick={onAdd} className="btn btn-primary">Add</button>
    </div>
  )
}
export default TarpNavigator