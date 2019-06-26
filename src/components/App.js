import React, { useState } from "react";

function App() {
  const thingsData = JSON.parse(sessionStorage.getItem("things"));
  const [things] = useState(thingsData || []);
  return (
    <div>
      Home page
      {console.log("things shared between components? ", things)}
    </div>
  );
}

export default App;
