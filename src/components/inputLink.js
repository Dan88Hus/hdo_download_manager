import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUriAction } from "../store/actions/taskAction";
import {toast} from 'react-toastify'

function InputLink() {

    const dispatch = useDispatch();
    const [link, setLink] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(addUriAction(link));
        toast.success("Trying to Download")
    }

    return (
        <div>
            <form className="row m-1" onSubmit={handleSubmit}>
                <div className="col">
                    <input type="url" className="form-control" 
                        placeholder="Enter the Link"
                        onChange={(e) => setLink(e.target.value)}
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