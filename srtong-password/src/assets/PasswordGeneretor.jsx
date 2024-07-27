import {useState} from "react";

export const PasswordGenerator = () => {
    const [length,setLength] = useState(8)
    const [includeUpper,setIncludeUpper] = useState(true)
    const [includelower,setIncludeLower] = useState(true)
    const [includeNumber,setIncludeNumber] = useState(true)
    const [includeSymbol,setIncludeSymbol] = useState(true)
    const [Password, setPassword] = useState("");

const generatePassword=()=>{
    let charset="";
    if(includeUpper) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(includelower) charset += "abcdefghijklmnopqrstuvwxyz"
    if(includeNumber) charset += "0123456789"
    if(includeSymbol) charset += "!@#$%^&*()_+-="
    let generatedPassword ="";
    for(let i=0; i<length; i++){
        const randomIndex = Math.floor(Math.random()*charset.length)
        generatedPassword += charset[randomIndex]
}  setPassword(generatedPassword)
}
const copyClipboard =()=>{
    navigator.clipboard.writeText(Password)
    alert(`${Password} coppied`)
}

  return (
    <div className="password-generator">
      <h1>Strong Password Generator</h1>
      <div className="input-group">
        <label htmlFor="num">Password Length :</label>
        <input type="number" id="num" value={length}
        onChange={(e)=>setLength(parseInt(e.target.value))}/>
      </div>
      <div className="checkbox-group">
        <input type="checkbox" id="upper" checked={includeUpper} 
        onChange={(e)=>setIncludeUpper(e.target.checked)}/>
        <label htmlFor="upper">Include Uppercase</label>
      </div>
      <div className="checkbox-group">
        <input type="checkbox" id="lower"  checked={includelower}
        onChange={(e)=>setIncludeLower(e.target.checked)}/>
        <label htmlFor="lower">Include Lowercase</label>
      </div>
      <div className="checkbox-group">
        <input type="checkbox" id="numbers" checked={includeNumber}
        onChange={(e)=>setIncludeNumber(e.target.checked)}/>
        <label htmlFor="numbers">Include Numbers</label>
      </div>
      <div className="checkbox-group">
        <input type="checkbox" id="symbol" checked={includeSymbol}
        onChange={(e)=>setIncludeSymbol(e.target.checked)}/>
        <label htmlFor="symbol">Include Symbole</label>
      </div>
      <button className="generate-btn" onClick={generatePassword}>Generate Password</button>
      <div className="generate-password">
        <input type="text" readOnly value={Password}/>
        <button className="copy-btn" onClick={copyClipboard}>Copy</button>
      </div>
    </div>
  );
};
