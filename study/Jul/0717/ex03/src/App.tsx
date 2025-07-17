import "./App.css";
import "@fontsource/material-icons";
import RefTest from "./pages/RefTest";
import { UserProvider } from "./contexts/UserContext";
import UserProfile from "./pages/UserProfile";
import ThemeTest from "./pages/ThemeTest";

function App() {
  return (
    <div className="App">
      <RefTest />
      <UserProvider>
        <UserProfile />
      </UserProvider>
      <ThemeTest />
    </div>
  );
}

export default App;
