import { useRef, useState } from 'react';  
import './Quiz.css';  
import { data } from '../../assets/data';  

function Quiz() {  
    const [index, setIndex] = useState(0);  
    const [question, setQuestion] = useState(data[index]);  
    const [lock, setLock] = useState(false);  
    
    const option1 = useRef(null);   
    const option2 = useRef(null);   
    const option3 = useRef(null);   
    const option4 = useRef(null);   

    const optionArray = [option1, option2, option3, option4];  

    const checkAns = (e, ans) => {  
        if (!lock) {  
            if (question.ans === ans) {  
                e.target.classList.add("correct");  
            } else {  
                e.target.classList.add("wrong");  
                optionArray[question.ans - 1].current.classList.add("correct");  
            }  
            setLock(true);  
        }  
    };  

    const handleNext = () => {  
        setLock(false);  
        optionArray.forEach(option => option.current.classList.remove("correct", "wrong"));  
        
        if (index < data.length - 1) {  
            setIndex(index + 1);  
            setQuestion(data[index + 1]);  
        } else {   
            alert("Quiz completed!");  
        }  
    };  

    return (  
        <div className='container'>  
            <h1>Quiz App</h1>  
            <hr />  
            <h2>{index + 1}. {question.question}</h2>  
            <ul>  
                <li ref={option1} onClick={(e) => { checkAns(e, 1) }}>{question.option1}</li>  
                <li ref={option2} onClick={(e) => { checkAns(e, 2) }}>{question.option2}</li>  
                <li ref={option3} onClick={(e) => { checkAns(e, 3) }}>{question.option3}</li>  
                <li ref={option4} onClick={(e) => { checkAns(e, 4) }}>{question.option4}</li>  
            </ul>  
            <button onClick={handleNext}>Next</button>  
            <div className="index">Question {index + 1} of {data.length}</div>  
        </div>  
    );  
}  

export default Quiz;