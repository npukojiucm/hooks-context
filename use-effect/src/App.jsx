import List from "./components/List.jsx";
import {useState} from "react";
import { UserContext } from "./components/UserContext.jsx";
import Details from "./components/Details.jsx";

function App() {
    const [userId, setUserId] = useState(null);

  return (
      <>
          <UserContext.Provider value={{ userId, setUserId }}>
              <List />
              <Details />
          </UserContext.Provider>
      </>
  )
}

export default App
