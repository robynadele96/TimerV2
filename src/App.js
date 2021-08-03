import './App.css';
import Timer from './TimerApp/Timer.js';
import TodoAppHome from './TodoApp/ToDoHome';
import Theme from './ThemeApp/Theme';

function App() {
  return (
  <div className='App'>

      {/* Theme App */}
      <Theme/>

      {/* Timer App */}
      <Timer />

      {/* ToDo List App */}
      <TodoAppHome/>
    </div>
  );
}

export default App;