// this components will be used at top of the screen
import React from "react";
import { forcePauseAllAction, purgeLocalStorage } from "../store/actions/taskAction";
import { useDispatch } from "react-redux";
import configureStore from '../store/store';
const {persistor} = configureStore();

function TaskButtons() {
    const dispatch = useDispatch();

    const handleClickPauseAll = () => {
        /*
    this fn pause the all download, dispatch is used to send id
    action will be placed in taskActions
        */
        dispatch(forcePauseAllAction(0,0));
    }

    const handleClickClearAll = async () => {
        // this fn will be return [] state
        dispatch(purgeLocalStorage());
        await persistor.purge();
    }

    return (
        <div className="text-center">
            <li className="btn btn-secondary m-1" onClick={handleClickPauseAll}>Pause All</li>
            <li className="btn btn-secondary m-1" onClick={handleClickClearAll}>Clear History</li>
        </div>
    )
}

export default TaskButtons