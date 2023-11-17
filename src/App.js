
import AddUser from "./Components/AddUser";
import Errorhandling from "./Components/Errorhandling";
import RemoveUser from "./Components/RemoveUser";
import UpdateUser from "./Components/UpdateUser";
import Users from "./Components/Users";

function App() {
  return (
    <div>
      <Users />
      <AddUser />
      <UpdateUser />
      <RemoveUser />
      <Errorhandling />
    </div>
  );
}

export default App;