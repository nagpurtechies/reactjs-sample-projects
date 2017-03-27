import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

class Layout extends React.Component {
  render() {
    return (
      <h2>React Hello World!</h2>
    );
  }
}
    
const app = document.getElementById('app');
    
ReactDOM.render(<App greeting="Lets bind some values" />, app);
