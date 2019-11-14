import React from "react";
import HeadBar from "./Shared/HeadBar/HeadBar";
import FootBar from "./Shared/FootBar/FootBar";

import Tab from "./Component/Tab/Tab";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <HeadBar />
      <Tab />
      <FootBar />
    </React.Fragment>
  );
}

export default App;
