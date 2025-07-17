import "./App.css";
import "@fontsource/material-icons";
import RefTest from "./pages/RefTest";
import { UserProvider } from "./contexts/UserContext";
import UserProfile from "./pages/UserProfile";
function App() {
  return (
    <div className="App">
      <RefTest />
      <UserProvider>
        <UserProfile />
      </UserProvider>
    </div>
  );
}

export default App;
