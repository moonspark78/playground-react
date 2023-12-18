
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([])

  useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) =>setUsers(json));
  }, []);

  const mapData = () => {
    let filteredData = users.filter((user) => {
      return user.id <= 5;
    });

    setUsers(filteredData);
  };


  return (
    <div className="App">
      <h1>Users</h1>
      <div className='card'>
      {users.map((user) =>(
        <div className='card-inner'>
          <p>{user.name}</p>
          <p>{user.username}</p>
        </div>
      ))}
        
      </div>
      <button onClick={mapData}>See Mappedd Array</button>
    </div>
  );
}

export default App;
