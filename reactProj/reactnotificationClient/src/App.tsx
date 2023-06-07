import logo from './logo.svg';
import './App.css';
import { Notify } from './Notify';
import { BehaviorSubject, Observable } from 'rxjs';

function App() {

  // const numberObservable = new Observable<number>((observer) => {
  //   observer.next(1);
  //   observer.next(2);
  //   observer.next(3);
  //   observer.complete();
  // });

   const numberSubject = new BehaviorSubject(0);
   const numberSubject1 = new BehaviorSubject(0);
   const numberSubject2 = new BehaviorSubject('');
   const numberSubject3 = new BehaviorSubject('');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <hr></hr>
        
        <hr></hr>
        <div>
          <Notify message='Client-MFE-App' store$={numberSubject} counterSubject={numberSubject1}  messageHostSubject={numberSubject2} messageClient$={numberSubject3}></Notify>
        </div>
        
      </header>
    </div>
  );
}

export default App;



/**
 * <Notify message='Hello' count={[]}></Notify>
        <Provider store={store}>
          <Counter></Counter>
        </Provider>
 */