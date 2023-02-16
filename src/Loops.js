function Loops() {
  const colors = [
    'danger', 'warning', 'primary'
  ]
  return(
    <div>
      <h3>Loops</h3>
      <ul>
        {
          colors.map(color =>
            <li className={`bg-${color}`}>
              {color}
            </li>
          )
        }
      </ul>
    </div>
  )
}
export default Loops