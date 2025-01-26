import { useEffect, useState } from "react";  
import "./Converter.css";  
import { MdOutlineCurrencyExchange } from "react-icons/md";  

function CurrencyConverter() {  
  const [currency, setCurrency] = useState([]);  
  const [fromCurrency, setFromCurrency] = useState();  
  const [toCurrency, setToCurrency] = useState();  
  const [amount, setAmount] = useState();  
  const [convertedAmount, setConvertedAmount] = useState(null);  

  const getCurrency = async () => {  
    try {  
      const res = await fetch('https://api.frankfurter.dev/v1/currencies');  
      const data = await res.json();  
      setCurrency(Object.keys(data));  
      setFromCurrency(Object.keys(data)[0]); 
      setToCurrency(Object.keys(data)[0]); 
    } catch (error) {  
      console.error('Error fetching currencies:', error);  
    }  
  };  

  const handleFromCurrency = (e) => {  
    setFromCurrency(e.target.value);  
  };  

  const handleToCurrency = (e) => {  
    setToCurrency(e.target.value);  
  };  

  const handleAmount = (e) => {  
    setAmount(e.target.value);  
  };  

  const convertCurrency = async () => {  
    if (amount && fromCurrency && toCurrency) {  
      try {  
        const res = await fetch(`https://api.frankfurter.dev/v1/latest?amount=${amount}&base=${fromCurrency}&symbols=${toCurrency}`);  
        const data = await res.json();  
        setConvertedAmount(data);  
        console.log(data);  
      } catch (error) {  
        console.error('Error converting currency:', error);  
      }  
    } else {  
      alert('Please fill in all fields.');  
    }  
  };  

  useEffect(() => {  
    getCurrency();  
  }, []);  

  return (  
    <div className="container">  
      <div className="main">  
        <h2 className="corrent">Currency Converter</h2>  

        <div>  
          <p className="amount">  
            AMOUNT <MdOutlineCurrencyExchange />  
          </p>  
          <input className="input" type="text" placeholder="Enter amount" onChange={handleAmount} />  
        </div>  

        <div>  
          <p className="amount">From Currency</p>  
          <select value={fromCurrency} className="input" onChange={handleFromCurrency}>  
            {currency.map((curval, index) => (  
              <option key={index} value={curval}>{curval}</option>  
            ))}  
          </select>  
        </div>  

        <div>  
          <p className="amount">To Currency</p>  
          <select value={toCurrency} className="input" onChange={handleToCurrency}>  
            {currency.map((curval, index) => (  
              <option key={index} value={curval}>{curval}</option>  
            ))}  
          </select>  
        </div>  

        <button onClick={convertCurrency}>Convert</button>  

        {convertedAmount && (  
          <div>  
            <h3>Converted Amount:</h3>  
            <p>{`${amount} ${fromCurrency} = ${convertedAmount.result} ${toCurrency}`}</p>  
          </div>  
        )}  
      </div>  
    </div>  
  );  
}  

export default CurrencyConverter;