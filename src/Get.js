import React,{useState,useEffect} from 'react';
import axios from 'axios';

const Get = () => {
const [users,setUsers] = useState(null);

useEffect(() => {
  axios.get("https://jsonplaceholder.typicode.com/users")
  .then(res => setUsers(res.data))
  .catch((err) => console.log(err));
},[])

  return (
    users && users.map(user => <div>
{user.company.name}
    </div>)
  )
}

export default Get