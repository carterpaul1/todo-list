
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="ECPI-Seal.png" alt="ECPI-Seal" />
      </header>
      <div className="TodoList">
       <h2>Todo list </h2>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
