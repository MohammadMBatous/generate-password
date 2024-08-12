import { createContext, useState } from "react";


export const ContextGenerate = createContext();
const ContextProviderBuilder = (probs) => {
  const  [passwords , changepassword] = useState('');
  const [isupper,changeisupper] = useState(true);
  const [islower,changeislower] = useState(true);
  const [isnumber,changeisnumber] = useState(true);
  const [issymbol,changeissymbol] = useState(true);
  const [valuerange,setrange] = useState(8);


  function ongenerate(){
  // start coding generate
    const lowercase = 'qwertyuiopasdfghjklzxcvbnm';
    const uppercase = lowercase.toUpperCase();
    const symbol = '!@#$%^&*()[]{}-*/+\\';
    const number = '0123456789';
    let chars = '';
    let password ='';
    chars += isupper ? uppercase : '';
    chars += islower ? lowercase : '';
    chars += isnumber ? number : '';
    chars += issymbol ? symbol : '';
    if(chars.length !== 0){
      let lengthrange = Number.parseInt(valuerange);
      while(password.length !== lengthrange){
        password+=chars[Math.floor(Math.random() * chars.length)];
      }
      changepassword(password);
    }


  }


  function copypass(){
    navigator.clipboard.writeText(passwords).then(
      alert('sucssess copy')
    );
  }


    const contextValue = {
        passwords,isupper,islower,isnumber,
        issymbol,changeisupper,changeislower,
        changeisnumber,changeissymbol,ongenerate,
        valuerange,setrange,copypass
    }
    return <ContextGenerate.Provider value={contextValue}>
        {probs.children}
    </ContextGenerate.Provider>


}
export default ContextProviderBuilder;