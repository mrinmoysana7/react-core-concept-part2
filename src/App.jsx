import './App.css'
import Batsman from './Batsmans';
import Counter from './Bounter';
import Bowler from './Bowlers'

function App() {
 
  function clickHandler() {
    alert('I am clicked')
  }

  const addNumHandler = (num) => {
    const addNum5 = num + 5;
    alert(addNum5)
  }

  // const arrowHandleClick = () => {
  //   alert('You click me')
  // }

  return (
    <>
      <section id="center"> 
          <h1>Get started</h1> 

          <Batsman></Batsman>

          <Bowler></Bowler>

          <Counter></Counter>

          <button onClick={clickHandler}>Click Me</button>   
          <button onClick={() => alert('You click me')}>You Click Me</button>   
          <button onClick={() => addNumHandler(10)}>Add Number</button>   
      </section>      
    </>
  )
}

export default App
