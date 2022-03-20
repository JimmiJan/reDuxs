import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { counter, counterMinus } from './Store/Action/Action';


function App() {

  const dispatch =useDispatch()
  const state = useSelector((store)=>store.CounterReducer)
  console.log(state)

  const Add = ()=>{
    dispatch(counter())
  }

  const Minus = ()=>{
    dispatch(counterMinus())
  }
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
        <button onClick={Minus}>
          -
        </button>
        <h1>
          {state}
        </h1>
        <button onClick={Add}>
          +
        </button >

    </div>
  
  );
}

export default App;
