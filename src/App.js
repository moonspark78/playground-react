
import './App.css';
import { useEffect, useState } from 'react';
import {StateReact} from "./Components/StateReact"
import {Props} from "./Components/Props"
import {InlineConditionalExpressions} from './Components/InlineConditionalExpressions'
import {EventHandlingInReact} from './Components/EventHandlingInReact'
import {KeysInReact} from './Components/KeysInReact'
import {FormsInReact} from './Components/FormsInReact'
import { SearchBar } from './Components/SearchBar';
import { SearchBarResults } from './Components/SearchBarResults';
import { DynamicInputs } from './Components/DynamicInputs';
import { UncontrolledComponents } from './Components/UncontrolledComponents';
import { InnerHTML } from './Components/InnerHTML';

function App() {

  /* const [results, setResults] = useState([]); */

/*   const [users, setUsers] = useState([])
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

  useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) =>setUsers(json));
  }, []);
 */
  /* const mapData = () => {
    let numberLessThan5 = numbers
      .map((filtered) =>{
        return filtered * filtered
      })
      .filter((number) =>{
        return number <= 50;
      })
    setNumbers(numberLessThan5) */
    /* let square = numbers.map((number) => {
        return number * number;
    });
    console.log(square); */
   /*  let filteredData = users.filter((user) => {
      return user.id <= 5;
    });

    setUsers(filteredData); 
  };*/
  return (
    <div className="App">
    <InnerHTML/>
    {/* <UncontrolledComponents/> */}
    {/* <DynamicInputs/> */}
      {/* <div className='app-A'>
        <div className='search-bar-container'>
          <SearchBar setResults={setResults}/>
          <SearchBarResults results={results}/>
        </div>
      </div> */}
      {/* <FormsInReact/> */}
      {/* <KeysInReact/> */}
      {/* <EventHandlingInReact/> */}
      {/* <InlineConditionalExpressions/> */}
      {/* <Props/> */}
      {/* <StateReact/> */}
      {/* <h1>Numbers</h1> */}
     {/*  <div className='card'>
      {users.map((user) =>(
        <div className='card-inner'>
          <p>{user.name}</p>
          <p>{user.username}</p>
        </div>
      ))}
      </div> */}

      {/*   <div  className='card'>
          {numbers.map((n) =>(
            <div className='card-inner'>{n}</div>
          ))}
        </div>

      <button onClick={mapData}>See Mappedd Array</button> */}
    </div>
  );
}

export default App;
