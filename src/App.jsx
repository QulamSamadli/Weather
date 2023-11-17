import { useState } from "react";
import Form from "./Components/Form";
import Info from "./Components/Info";
import './Components/style.css'

function App() {
  const [info,setInfo] = useState([])
  const [state,setState] = useState(false)

  return (
    <div>
      <Form  setInfo={setInfo} setState={setState} />
      <Info info = {info} state ={state} />
    </div>
  );
}

export default App;
