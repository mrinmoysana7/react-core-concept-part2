import { Suspense } from 'react';
import './App.css'
import Batsman from './Batsmans';
import Counter from './Bounter';
import Bowler from './Bowlers';
import Users from './Users';
import Friends from './Friends'

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())

const fetchFriends = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  return res.json()
}

function App() {

  const fetchPromise = fetchFriends()
 
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
          <Suspense fallback={<h3>Loading... </h3>}>
            <Users fetchUsers={fetchUsers}></Users>
          </Suspense>

          <Suspense fallback={<h3>My friends are cooming soon....</h3>}>
            <Friends fetchPromise={fetchPromise}></Friends>
          </Suspense>

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
