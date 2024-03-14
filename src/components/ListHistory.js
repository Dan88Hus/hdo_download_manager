import React, { useEffect } from 'react';
import {forceRemoveAction, pauseAction, tellStatus, unPauseAction} from '../store/actions/taskAction'
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
        const interval = setInterval(() => {
            dispatch(tellStatus())
        },5000);
    },[]);

    const handlePause = (uriMapped) =>{
        /**
         * it will trigger pauseAction
         * active status is going to be checked 2 times,in action as well,
         * since redux is async operation
         */
        if (uriMapped.status === "active"){
            dispatch(pauseAction(uriMapped.id,uriMapped.gid));
            return false;
        } else if(uriMapped.status === "paused"){
            return false;
        } else if (uriMapped.status === "complete"){
            return false;
       
        }
    }

    const handleResume = (uriMapped) =>{
        if (uriMapped.status === 'paused'){
            dispatch(unPauseAction(uriMapped.id,uriMapped.gid));
        }
        return true;
    }

    const handleStop = (uriMapped) =>{
        dispatch(forceRemoveAction(uriMapped.id, uriMapped.gid))
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
                <td><button className='btn btn-light' onClick={(() => handleResume(uriMapped))}><i className="bi bi-play-fill h6"></i></button></td>
                {/* Button stop */}
                <td><button className='btn btn-light' onClick={(() => handleStop(uriMapped))}><i className="bi bi-stop-circle h6"></i></button></td>

            </tr>
        </React.Fragment>
    )
}
export default ListHistory