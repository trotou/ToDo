import "./App.css";
import ButtonAppBar from "./components/TopBar";
import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <header className="App-header">
        <Routes />
      </header>
    </div>
  );
}

export default App;
