import React from "react";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  console.log(history);
  return (
    <div className="App">
      <div style={{ marginTop: "25px", marginBottom: "30px" }}></div>
      <div>Home Component</div>
    </div>
  );
}

export default Home;
