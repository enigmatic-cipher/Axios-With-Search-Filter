import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search User.."
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <h1>Users Name</h1>
      {users
        .filter((user) => {
          return search.toLowerCase() === ""
            ? user
            : user.name.toLowerCase().includes(search);
        })
        .map((user, id) => (
          <div key={id}>
            <h2>{user.name}</h2>
            <small>
              Email: {user.email} & Address:{user.address.city}
            </small>
          </div>
        ))}
    </div>
  );
}
