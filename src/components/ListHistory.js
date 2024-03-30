import React, { useEffect } from 'react';
import {forceRemoveAction, pauseAction, tellStatus, unPauseAction} from '../store/actions/taskAction'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

function ListHistory({uriMapped}){
    //uriMaped is taken as object
    const dispatch = useDispatch();

    /**
     * Status, progress and path comes from tellStatus Dispatch
     * re-runs every 5sn to update
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
            toast.info("Paused");
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
            toast.success("Resuming")
        }
        return true;
    }

    const handleStop = (uriMapped) =>{
        /**
         * it will remove iff the status is active
         */
        if (uriMapped.status === "active"){
            dispatch(forceRemoveAction(uriMapped.id, uriMapped.gid));
            toast.info("Removed");
        } else {
            /**
             * toastify message in here 
             * "must be in 'active' state "
             */
            toast.error("State must be 'active' !");
            return true;
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
                <td><button 
                data-testid = "actionBtnListHistoryPause"
                className='btn btn-light' 
                onClick={(() => handlePause(uriMapped))}><i className="bi bi-pause-circle h6"></i></button></td>
                {/* Button resume */}
                <td><button data-testid = "actionBtnListHistoryResume" className='btn btn-light' onClick={(() => handleResume(uriMapped))}><i className="bi bi-play-fill h6"></i></button></td>
                {/* Button stop */}
                <td><button data-testid = "actionBtnListHistoryStop" className='btn btn-light' onClick={(() => handleStop(uriMapped))}><i className="bi bi-stop-circle h6"></i></button></td>
            </tr>
        </React.Fragment>
    )
}
export default ListHistory