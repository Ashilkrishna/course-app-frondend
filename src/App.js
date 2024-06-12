import logo from './logo.svg';
import './App.css';
import Add from './components/Add';
import ViewAll from './components/ViewAll';
import Delete from './components/Delete';
import Search from './components/Search';

function App() {
  return (
    <div>
      <Add/>
      <ViewAll/>
      <Search/>
    </div>
  );
}

export default App;
