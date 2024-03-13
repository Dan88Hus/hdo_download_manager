import React from "react";
import { forcePauseAllAction } from "../store/actions/taskAction";
import { useDispatch } from "react-redux";

function TaskButtons() {
    const dispatch = useDispatch();

    const handleClickPauseAll = () => {
        /*
    this fn pause the all download, dispatch is used to send id
    action will be placed in taskActions
        */
        dispatch(forcePauseAllAction(0,0));
    }

    return (
        <div className="text-center">
            <li className="btn btn-secondary m-1" onClick={handleClickPauseAll}>Pause All</li>
            <li className="btn btn-secondary m-1" onClick={handleClickClear}>Clear History</li>
        </div>
    )
}

export default TaskButtons