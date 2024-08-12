import './switch.css';
 const Switch = ({id,value,onchange}) => {
  return (
    <div className='swtich'>
        <input onChange={(e)=>onchange(!(e.target.checked))} id={id} type='checkbox' value={value} />
        <label htmlFor={id}></label>
    </div>
  )
}
export default Switch;