import "./App.css";
import Greet from "./Components/Greet";
import Welcome from "./Components/Welcome";
import Message from "./Components/Message";
import Counter from "./Components/Counter";
import FunctionClick from "./Components/FunctionClick";
import ClassClick from "./Components/ClassClick";
import EventBind from "./Components/EventBind";
import StyleSheet from "./Components/StyleSheet";
import Inline from "./Components/Inline";

import "./appStyles.css";
import styles from "./appStyles.module.css";
import Form from "./Components/Form";
import ParentComp from "./Components/ParentComp";

function App() {
  return (
    <div className="App">
      <ParentComp />
      {/* <Form /> */}
      {/* <h1 className='error'>error</h1>
      <h1 className={styles.success}>success</h1>
      <Inline /> */}
      {/* <StyleSheet /> */}
      {/* <EventBind /> */}
      {/* <ClassClick /> */}
      {/* <FunctionClick /> */}
      {/* <Counter /> */}
      {/* <Message />  */}
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
//Greet:fc, Welcome:CC, props explaination - 9
//Message: State explaination -10
//Counter: setState() explaination - 11
//FunctionClick: Event Handling - 13
//ClassClick: Event Handling - 13
//EventBind: Binidng Event Handlers - 14
//StyleSheet: Styling and CSS Basics - 20
// Form - 21 - Basics of Form Handling
// PureComp, RegularComponent, ParentCmp - 26 - PureComponent
