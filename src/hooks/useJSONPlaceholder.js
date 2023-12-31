const getUsers = () =>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) =>setUsers(json));
}

const getPosts = () =>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) =>setPosts(json));
}

function useData()

