import { useState } from 'react';
import './App.css';
import Counterfunction from './components/Counterfunction';
import Counterclass from './components/Counterclass';
import User from './components/User';
import Employee from './components/Employee';
import Testclass from './components/Testclass';
import Testfunction from './components/Testfunction';

function App() {
  const [username, setUsername]=useState('ashi')
  const [age, setAge]=useState(22)

  return (

    <div style={{textAlign:"center", margin:"100px"}}className="App">
      <header className="App-header">
        <Counterfunction/>
        <Counterclass/>
        <User username={username}age={age}/>
        <Employee/>
      </header>
      </div>
  );
}

export default App;
