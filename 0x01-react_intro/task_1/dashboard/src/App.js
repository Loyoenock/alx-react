import logo from "./holberton-logo.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} alt="Holbrton" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div className="App-footer">
        <p>{`${getFooterCopy(true)} ${getFullYear()}`}</p>
      </div>
    </div>
  );
}

export default App;
