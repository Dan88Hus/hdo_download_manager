
import './App.css';
import TaskButtons from './components/TaskButtons';

function App() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <h3 className='text-center mt-2'> Download Manager</h3>
      </div>
      <div className='card'>
        <div className='row'>
          <TaskButtons/>

        </div>

      </div>

    </div>
  );
}

export default App;
