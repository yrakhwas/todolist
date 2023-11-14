
import './App.css';
import Counter from './component/Counter.jsx'
import User from './component/User.jsx'
import Phraze from './component/DailyFrase.jsx';

function App() {
  return (
    <div className='App'>
    <h1>To-Do List App</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, ut.</p>
    <Counter />
    <User />
    <Phraze />
</div>

  );
}

export default App;
