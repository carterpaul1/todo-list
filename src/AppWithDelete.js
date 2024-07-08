import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="ECPI-Seal.png" alt="ECPI-Seal" />
      </header>
      <div className="TodoList">
        <p>Todo list </p>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
