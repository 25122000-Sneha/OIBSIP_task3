import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';

const App = () => {
  const [degrees, setDegrees] = useState();
  const [type, setType] = useState("");
  const [result, setResult] = useState("");
  const [resultType, setResultType] = useState("0");

  const inputDegrees = (e) => {
    const val = e.target.value;
    if(isNaN(val))
    {
      alert("Enter numeric degree value!!");
    }
    else 
    {
      setDegrees(val);
    }
    console.log(val);
  }
  const setSelectedOption = (e) => {
    console.log(e.target.value);
    setType(e.target.value);
  }

  const convertTemp = (e) => {
    e.preventDefault();
    let newTemp;
    if(type == 'celsius')
    {
      newTemp = (degrees*(9/5) + 32).toFixed(4);
      setResult(newTemp);
      setResultType("F");
    }
    else if(type == 'fahrenheit')
    {
      newTemp = ((degrees-32)*(5/9)).toFixed(4);
      setResult(newTemp);
      setResultType("C");
    }
  }

  const reloadEvent = () => {
    setDegrees();
    setType("");
    setResult(0);
    setResultType("");
    setSelectedOption()
  }
  return (
    <>
      <div className="container">
                <div className="inner">
                    <h3>Temperature Converter</h3>
                    <form>
                        <label htmlFor="degrees">Degrees</label>
                        <input type="text" id="degrees" onChange={inputDegrees} val={degrees}></input>
                        <label htmlFor="type">Type</label>
                        <select name="type" id="type" onChange={setSelectedOption}>
                          <option value="celsius">Celsius</option>
                          <option value="fahrenheit">Fahrenheit</option>
                        </select>
                        <br/>
                        <label htmlFor="result">Result</label>
                        <p>{result} {result==0 ? null : <span>&deg;</span>}{resultType}</p>
                        <Button variant='primary' size='lg' type='submit'  onClick={convertTemp}>Convert</Button>
                       <Button variant="warning" size="lg" type="reset" onClick={reloadEvent}>Reset</Button>
                    </form>
                </div>
            </div>
      
    </>
  )
};

export default App;