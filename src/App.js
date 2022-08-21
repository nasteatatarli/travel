import { ReactComponent as Search } from "./assets/img/search.svg";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <img icon={<Search />} />
      <Header />
      <Search />
    </div>
  );
}

export default App;
