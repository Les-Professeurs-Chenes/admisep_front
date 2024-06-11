import "./App.css";
import "daisyui/dist/full.css";
import Home from "./views/home/Home";
import Login from "./views/auth/Login";
import { getUserByToken } from "./helpers/User";

const user = await getUserByToken();
const user_logged_in = user.id !== undefined;

function App() {
  return <>{user_logged_in ? <Home /> : <Login />}</>;
}

export default App;
