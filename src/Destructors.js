function Destructors() {
  const house = {
    rooms: 3,
    baths: 2,
    sqft: 1500,
    windows: 123
  }

  const { baths, rooms, sqft} = house

  const colors = ['danger', 'primary', 'warning']

  const [qw, wer, ert] = colors

  return(
    <div>
      <h2>Destructors</h2>
      <h3>House</h3>
      Rooms: {rooms}<br/>
      Baths: {baths}<br/>
      SQFT: {sqft}
      <h3>Colors</h3>
      qw = {qw}<br/>
      wer = {wer}<br/>
      ert = {ert}
    </div>
  )
}
export default Destructors