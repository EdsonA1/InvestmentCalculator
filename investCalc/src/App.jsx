import {useState} from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/result";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 5,
    duration: 15,
  });

  function handleChange(inputIndentifier, newValue){
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIndentifier]: +newValue
      }
    });
  };

  const inputIsValid = userInput.duration >= 1;

  return (
    <>
        <Header />
        <UserInput userInput={userInput} onChange ={handleChange}/>
        {!inputIsValid && <p className="center">Please enter  duration greater than 0. </p>}
        {inputIsValid && <Result input={userInput} />}
    </>
  )
}

export default App
