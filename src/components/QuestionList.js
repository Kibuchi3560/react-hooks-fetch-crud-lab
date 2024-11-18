import React, { useEffect, useState } from "react";

function QuestionList() {

  const [questions , setQuestions] = useState([]);

  useEffect(()=> {
    fetch ("http://localhost:4000/questions")
    .then ((r) => r.json())
    .then ((questions) => {console.log(questions)
      setQuestions(questions)
    })
    .catch(error => console.error('Error fetching data:', error))
  } ,[])
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map ((prompt , id) => (
        <li key={id}> {prompt} </li>
      ))}</ul>
    </section>
  );
}

export default QuestionList;
