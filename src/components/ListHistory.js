import React, { useEffect } from 'react';
import {pauseAction, tellStatus} from '../store/actions/taskAction'
import { useDispatch } from 'react-redux';

function ListHistory({uriMapped}){
    //uriMaped is taken as object
    let count = 0; // is used to stop useEffect

    const dispatch = useDispatch();

    /**
     * Status, progress and path comes from tellStatus Dispatch
     * re-runs every 15sn to update
     */
    useEffect( () => {
        // const interval = setInterval(() => {
            dispatch(tellStatus())
        // },15000);
    },[]);

    const handlePause = (uriMapped) =>{
        /**
         * it will trigger pauseAction
         */
        if (uriMapped.status === "active"){
            dispatch(pauseAction(uriMapped.id,uriMapped.gid));
            return false;
        } else if(uriMapped.status === "paused"){
            return false;
        } else if (uriMapped.status === "complete"){
            console.log("it is complete state ", uriMapped)
            return false;
       
        }
    }

    return (
        <React.Fragment>
            <tr>
                <th scope='row'>{uriMapped.gid}</th>
                <td>{uriMapped.status}</td>
                <td className='text-center'>{uriMapped.progress}</td>
                <td>{uriMapped.path}</td>
                {/* Button pause */}
                <td><button className='btn btn-light' onClick={(() => handlePause(uriMapped))}><i className="bi bi-pause-circle h6"></i></button></td>
                {/* Button resume */}
                <td><button className='btn btn-light'><i className="bi bi-play-fill h6"></i></button></td>
                {/* Button stop */}
                <td><button className='btn btn-light'><i className="bi bi-stop-circle h6"></i></button></td>

            </tr>
        </React.Fragment>
    )
}
export default ListHistory