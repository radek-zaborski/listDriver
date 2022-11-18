import "./App.scss";
import DataApi from "./components/dataApi/DataApi";
function App() {
  return (
    <div className="App md:container mx-auto flex flex-wrap">
      <h1 className="mx-auto my-6">Drivers List</h1>
      <DataApi />
    </div>
  );
}

export default App;
