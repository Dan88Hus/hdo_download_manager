
import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import {unPauseAllAction} from './store/actions/taskAction';
import TaskButtons from './components/TaskButtons';
import ListHistory from './components/ListHistory';
import InputLink from './components/inputLink';
import { useEffect } from 'react';



function App() {

  const uri = useSelector(state => state.uri);
  const dispatch = useDispatch();

  useEffect(() =>{
  /**
  * useEffect is will be used to resume all task as program starts
  * 0,0 is dummy data as rpc does not need id, gid
  */
    dispatch(unPauseAllAction(0,0))
  },[])

  return (
    
    <div className='container-fluid'>
      <div className='row'>
        <h3 className='text-center mt-2'> Download Manager</h3>
      </div>
      <div className='card'>
        <div className='row'>
          <TaskButtons/>
        </div>
        {/* TaskButtons */}

        {/* input Link */}
        <div className='row'>
          <InputLink/>
        </div>

        {/* List History */}
        
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
