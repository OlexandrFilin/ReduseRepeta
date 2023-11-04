
import { useSelector } from 'react-redux';
import './App.css';
import { Account } from './components/account/account';


function App() {
  const lang=useSelector(state =>{
  return state.locale.lang
})
  return (
    <div className="App">
      <p>{`Lang ${lang}`}</p>
   <h2>User account data</h2>
   <Account/>
    

    </div>
  );
}

export default App;
