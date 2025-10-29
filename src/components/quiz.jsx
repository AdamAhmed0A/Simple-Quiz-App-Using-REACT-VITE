import { useState } from "react";

function Quiz(){
    const questionBank = [{
        question: "What is the capital of France?",
        options: ["Berlin", "London", "Paris", "Rome"],
        answer: "Paris",
    },
    {
        question: "Which language is used for web apps?",
        options: ["PHP", "Python", "Javascript", "All"],
        answer: "All",
    },
    {
        question: "What does JSX stand for?",
        options: [
        "JavaScript XML",
        "Java Syntax eXtension",
        "Just a Simple eXample",
        "None of the above",
        ],
        answer: "JavaScript XML"
    }]
    // cosnt [currentQuestion, setCurrentQuestion] = useState(0)
    const initialAnswers = [null, null, null];
    const [userAnswers, setUserAnswers] = useState(initialAnswers);
    
    const [currentQuestion, setCurrentQuestion] = useState(0)

   return(
    <div>
        <h2> Question {currentQuestion + 1}</h2>
        <p className="question">
            {questionBank[currentQuestion].question}            
        </p>
        {questionBank[currentQuestion].options.map((option) => (
            <button className="option" onClick={() => handleSelectedOption(option)}>
                {option}
            </button>
        ))}

        <div className="nav-buttons">
            <button>Previous</button>
            <button>Next</button>
        </div>
    </div>
   );
}

export default Quiz;