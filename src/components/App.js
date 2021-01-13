import React from "react";
import Application from "./auth/Application.jsx";
import UserProvider from "./context/Context.jsx";

function App() {
  
  return (
    <UserProvider>
      <Application />
    </UserProvider>
  );
}

export default App;
