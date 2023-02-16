import {useParams} from "react-router";

function Add(
  {
    b = 20,
    a = 30
  })
{
  const {parama, paramb} = useParams()
  // const {a, b} = props
  console.log(parama, paramb)
  const aval = parseInt(parama)
  const bval = parseInt(paramb)
  return(
    <div>
      <h3>Add component</h3>
      {parama} + {paramb} = {aval + bval}
    </div>
  )
}
export default Add