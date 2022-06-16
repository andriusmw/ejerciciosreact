import logo from './logo.svg';
import './App.css';
import {useState} from "React";
import SearchForm from './components/searchForm';

function App() {
  const [playerResults, setPlayerResults] = useState([]);

  return (
    <>
      <header/>
      <main>
        <SearchForm />
        <list data={playerResults} />

      </main>
      
    
    </>
  );
}

export default App;
