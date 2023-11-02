import { useState } from 'react'
import './app.scss'

function App() {
  return (
   <>
   <div className="container">
   <div className="left">
    <h1>WELCOME TO PRAKRITI CHATBOT </h1>
  </div>
  <div className="right">
    <div className="tRight">
      <div className="logo">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
       </svg>

        <p>Hello I am sara </p>
      </div>
    </div>
    <div className="mRight">midddle</div>
    <div className="bRight">
      <div className="form">
        <form action="">
          <input type="text" placeholder='Type Here' />
          <button>Send</button>
        </form>
      </div>
    </div>

 
  </div>


   </div>
  </>
  )
 

  
}

export default App
