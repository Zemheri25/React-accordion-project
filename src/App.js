import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [question, setQuestion] = useState(data);
  console.log(question)
  return( 
  <main>
    <div className="container">
      <h3>Questions and answers about login</h3>
      <section className="info">
        {question.map((question) => {
          return <SingleQuestion key={question.id} {...question}/> 
        })}
      </section>
    </div>
  </main>
  
  );
 
}

export default App;
