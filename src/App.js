
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([])
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

  useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) =>setUsers(json));
  }, []);

  const mapData = () => {
    let square = numbers.map((number) => {
        return number * number;
    });
    console.log(square);
   /*  let filteredData = users.filter((user) => {
      return user.id <= 5;
    });

    setUsers(filteredData); */
  };


  return (
    <div className="App">
      <h1>Numbers</h1>
     {/*  <div className='card'>
      {users.map((user) =>(
        <div className='card-inner'>
          <p>{user.name}</p>
          <p>{user.username}</p>
        </div>
      ))}
      </div> */}

        <div  className='card'>
          {numbers.map((n) =>(
            <div className='card-inner'>{n}</div>
          ))}
        </div>

      <button onClick={mapData}>See Mappedd Array</button>
    </div>
  );
}

export default App;
