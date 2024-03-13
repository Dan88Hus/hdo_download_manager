
import './App.css';
import {useSelector} from 'react-redux'
import TaskButtons from './components/TaskButtons';
import ListHistory from './components/ListHistory';



function App() {
const uri = useSelector(state => state.uri);

  return (
    <div className='container-fluid'>
      <div className='row'>
        <h3 className='text-center mt-2'> Download Manager</h3>
      </div>
      <div className='card'>
        <div className='row'>
          <TaskButtons/>
        </div>
        {/* input Link */}

        {/* List Hostory */}
        
        <table className="table table-striped">
          <thead>
            <tr>
                <th scope="col">GID</th>
                <th scope="col">Status</th>
                <th scope="col text-center">%Progress</th>
                <th scope="col">Path</th>
                <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {uri.map((uriMapped) => (
              <ListHistory uriMapped={uriMapped} key={uriMapped.id} />
            ))}
          </tbody>
        </table>

      </div>

    </div>
  );
}

export default App;
