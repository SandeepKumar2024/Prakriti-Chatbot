import { useEffect, useState } from 'react'
import './app.scss'
import back from "./img/new.jpg"
import { RouterProvider, createBrowserRouter } from "react-router-dom";


function App() {

  const [displayText, setDisplayText] = useState('');
  const originalText = "PRAKRITI CHATBOT";

  const [topPosition, setTopPosition] = useState(0);
  const [movingUp, setMovingUp] = useState(true);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      const newPosition = movingUp ? topPosition - 1 : topPosition + 1;

      setTopPosition(newPosition);

      // Change direction when reaching a certain position (e.g., -100px)
      if (newPosition <=150) {
        setMovingUp(false);
      } else if (newPosition >= 300) {
        setMovingUp(true);
      }
    }, 10); // Adjust the interval as needed for smoother animation

    return () => clearInterval(animationInterval);
  }, [topPosition, movingUp]);


  useEffect(() => {
    let index = 0;

    const intervalId = setInterval(() => {
      setDisplayText(originalText.substring(0, index));
      index++;

      if (index > originalText.length) {
        clearInterval(intervalId);
      }
    }, 200); 
    return () => clearInterval(intervalId);
  }, []);
  return (
   <>
   <div className="container">
    <div className="navbar">
      <div className="leftNav">
        <span>Prakriti <i style={{color:'orange'}}>Chatbot</i></span>
      </div>
      <div className="rightNav">
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>Doctors</li>
          <li><a href="https://github.com/SandeepKumar2024/Prakriti-Chatbot" style={{color: 'inherit', textDecoration: 'none'}} target='' >About</a></li>
        </ul>
      </div>
    </div>
    <div className="wrapper">

    
   <div className="left">
    <h1>WELCOME TO <i>{displayText} </i></h1>
    <p>
          Prakrti Chatbot is your personal assistant to help you understand and balance your doshas.
          Start a conversation to explore more about Ayurveda and how it can benefit your well-being.
        </p>

        <div className="buttons">
        <button>Start</button>
        <button>Explore </button>
        </div>

  </div>
  <div className="right">
  <img src={back} alt="" style={{top:`${topPosition}px`}}/>
    
    
    

 
  </div>

  </div>
   </div>
  </>
  )
 

  
}

export default App
