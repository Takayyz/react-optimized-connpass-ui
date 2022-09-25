import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { TimeTable } from "./components/TimeTable";

function App() {
  return (
    <div className="App">
      <Navbar />
      <TimeTable />
    </div>
  );
}

export default App;
