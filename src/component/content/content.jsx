import './content.css';
import { MdOutlineCopyAll } from "react-icons/md";
import Switch from '../switch/switch';
import { useContext } from 'react';
import { ContextGenerate } from '../context/context';



 const Content = () => {
  const {passwords,isupper,islower,
    isnumber,issymbol,changeisupper
    ,changeislower,changeisnumber,changeissymbol,
    copypass,
    ongenerate,valuerange,setrange} = useContext(ContextGenerate);
  return (
    <main className='content'>
        <div className='card'>
            <div className='card-title'>
                <h2>Password Generator</h2>
            </div>
        <div className='card-body'>
          <div className='box-input'>
            <input id='password-generate-box' value={passwords} readOnly type='text'  placeholder='password generate ..'/>
            <MdOutlineCopyAll size={24} className='icon' onClick={ ()=>copypass()}/>
          </div>
       <div className='box-range'>
        <div className='box-length'>
        <p>password length</p>
        <span>{valuerange}</span>
        </div>
       <input value={valuerange} type='range' min={8} max={60} onChange={(e)=> {
        setrange(e.target.value);
       }}/>

       </div>
       <div className='box-options'>
      
        <div className='option'>
        <span>
          Uppercase(A-Z)
        </span>
        <Switch id={'upper'} value={isupper} onchange={changeisupper}/>
        
        </div>
        <div className='option'>
        <span>
          Lowercase(a-z)
        </span>
        <Switch id={'lower'} value={islower} onchange={changeislower}/>
        
        </div>
        <div className='option'>
        <span>
          Number(0-9)
        </span>
        <Switch id={'number'} value={isnumber} onchange={changeisnumber}/>
        
        </div>
        <div className='option'>
        <span>
          Symbols(-$%@)
        </span>
        <Switch id={'symobl'} value={issymbol} onchange={changeissymbol}/>
        
        </div>
       </div>
       <button onClick={()=>ongenerate()} className='btn'>Generate Password</button>
        </div>
        </div>
    </main>
  )
}

export default Content;