// this components will be used at top of the screen
import React from "react";
import { forcePauseAllAction, purgeLocalStorage } from "../store/actions/taskAction";
import { useDispatch, useSelector } from "react-redux";
import configureStore from '../store/store';
import { toast } from "react-toastify";
const {persistor} = configureStore();

function TaskButtons() {
    const dispatch = useDispatch();
    const isStateEmpty = useSelector(state => state.uri);

    const handleClickPauseAll = () => {
        /*
    this fn pause the all download, dispatch is used to send id
    action will be placed in taskActions
        */
       if (isStateEmpty.length == 0){
        toast.error("State is empty");
       } else {
        dispatch(forcePauseAllAction(0,0));
        toast.success("Paused all downloads");
       }
    }

    const handleClickClearAll = async () => {
        // this fn will be return [] state
        dispatch(purgeLocalStorage());
        await persistor.purge();
        toast.success("Storage purged")
    }

    return (
        <div className="text-center">
            <li className="btn btn-secondary m-1" onClick={handleClickPauseAll}>Pause All</li>
            <li className="btn btn-secondary m-1" onClick={handleClickClearAll}>Clear History</li>
        </div>
    )
}

export default TaskButtons