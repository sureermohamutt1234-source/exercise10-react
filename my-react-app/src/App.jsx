
import UserList from "./UserList";

const App = () => {

  const users = [
    {
      id: 1,
      name: "Sureer",
      email: "sureer@gmail.com"
    },
    {
      id: 2,
      name: "Ayan",
      email: "ayan@gmail.com"
    },
    {
      id: 3,
      name: "Hiba",
      email: "hiba@gmail.com"
    }
  ];

  return (
    <div>
      <h1>React User Management</h1>

      <UserList users={users} />
    </div>
  );
};

export default App;
