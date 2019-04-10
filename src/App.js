import React, { Component, useState, useEffect } from 'react';
import './App.css';
import HelloWorld from './HelloWorld'
import Clock from './Clock'

const Counter = () => {
  const [count, setCount] = useState(0)
  // const [name, setName] = useState('World')

  // const clickClick = () => {
  //   setCount(count + 1)
  //   setName('Liz')
  // }

  useEffect(() => {
    document.title = `You clicked ${count} times`
  })

  return (
    <div>
      <p>
        You clicked {count} times
      </p>
      <button onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </div>
  )
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Counter />
          <HelloWorld />
          <Clock />
        </header>
      </div>
    );
  }
}

export default App;
