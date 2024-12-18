import UserList from "./components/UserList";
import CreateUser from "./components/CreateUser";

const App = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">User Management</h1>
      <CreateUser />
      <UserList />
    </div>
  );
};

export default App;
