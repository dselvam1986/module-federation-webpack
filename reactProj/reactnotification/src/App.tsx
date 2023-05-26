import logo from './logo.svg';
import './App.css';
import { Notify } from './Notify';
import { Provider } from 'react-redux';
import store from './store/counter.store';
import { Counter } from './Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
        <Notify message='Hello'></Notify>
        <Provider store={store}>
          <Counter></Counter>
        </Provider>
      </header>
    </div>
  );
}

export default App;