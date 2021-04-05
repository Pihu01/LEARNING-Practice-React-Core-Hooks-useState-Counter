import ReactDOM from "react-dom";

import ClassCounter from "./components/ClassCounter";
import FunctionCounter from "./components/FunctionCounter";

const rootElement = document.getElementById("root");
ReactDOM.render(<><ClassCounter /><FunctionCounter/></>,rootElement);
