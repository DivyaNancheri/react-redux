import "./App.css";
import Greet from "./Components/Greet";
import Welcome from "./Components/Welcome";
import Message from "./Components/Message";

function App() {
  return (
    <div className="App">
      <Message />
      {/* <Greet name="Divya">
        <p>child prop</p>
      </Greet>
      <Greet name="Reddy">
        <button>class</button>
      </Greet>
      <Welcome name="Divya" id="1" />
      <Welcome name="Reddy" /> */}
    </div>
  );
}

export default App;
