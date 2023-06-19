import React,{useState} from "react";
import Single from "./components/Single";
import Multiple from "./components/Multiple";

const App = () => {
  const [singleSelectArray, setSingleSelectArray] = useState([
    { label: "First", value: 0 },
    { label: "Second", value: 1 },
    { label: "Third", value: 2 },
    { label: "Fourth", value: 3 },
  ]);
  return (
    <React.Fragment>
     <Single singleSelectArray = {singleSelectArray} />
     <Multiple singleSelectArray = {singleSelectArray} />
    </React.Fragment>
  );
};

export default App;
