import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
// const { addUriAction } = require('../store/actions/taskAction.cjs');
import { addUriAction } from "../store/actions/taskAction.js";
import {toast} from 'react-toastify'

function InputLink() {

    const dispatch = useDispatch();
    const [link, setLink] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (link.length != 0){
            await dispatch(addUriAction(link));
            setLink('');
            toast.success("Downloading");
        } else {
            toast.warning("Link field is Empty!")
        }
    }

    return (
        <div>
            <form className="row m-1" onSubmit={handleSubmit}>
                <div className="col">
                    <input type="url" className="form-control" 
                        data-testid = "submitBtnInputLink"
                        placeholder="Enter the Link"
                        onChange={(e) => setLink(e.target.value)}
                        value={link}
                        >
                    </input>
                </div>
                <div className="col-auto">
                    <button type="submit" 
                        className="btn btn-success mb-3">
                            Start Download
                        </button>
                </div>
            </form>
        </div>
    )

}

export default InputLink