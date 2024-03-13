import axios from "axios";

export const addUriAction = (link) => async (dispatch, getState) => {
    let data = `{"id": "${Math.floor(Math.random() * 1000000000)}","jsonrpc":"2.0","method": "aria2.addUri", "params": [["${link}"]]}`;
    let config = {
        method: 'post',
        url: 'http://127.0.0.1:6800/jsonrpc',
        headers: {
            'Content-Type': 'text/plain'
        },
        data: data
    };
    
    await axios(config)
        .then(function (response) {
            // console.log(response.data.id);
            dispatch({
                type: "ADDURI",
                payload: {
                    id: response.data.id,
                    gid: response.data.result
                }
            })
        })
        .catch(function (error) {
            console.log(error.message);
        });
}

export const tellStatus = () => async (dispatch) => {
    dispatch({
        type: "TELLSTATUS",
    })
}


export const pauseAction = (id, gid) => async (dispatch, getState) => {
    let data = `{"id":"${id}","jsonrpc":"2.0","method": "aria2.pause", "params": ["${gid}"]}`;
    let config = {
        method: 'post',
        url: 'http://127.0.0.1:6800/jsonrpc',
        headers: {
            'Content-Type': 'text/plain'
        },
        data: data
    };
    axios(config)
        .then(function (response) {
            // console.log(JSON.stringify(response.data));
            dispatch({
                type: "PAUSE",
            })
        })
        .catch(function (error) {
            console.log(error);
        });
}

export const purgeLocalStorage = () => async (dispatch, getState) => {
// used in TaskButtons.js

    dispatch({
        type: "PURGELOCALSTORAGE",
    })
}

export const unPauseAction = (id, gid) => async (dispatch, getState) => {
    let data = `{"id":"${id}","jsonrpc":"2.0","method": "aria2.unpause", "params": ["${gid}"]}`;
    let config = {
        method: 'post',
        url: 'http://127.0.0.1:6800/jsonrpc',
        headers: {
            'Content-Type': 'text/plain'
        },
        data: data
    };
    axios(config)
        .then(function (response) {
            // console.log("UNPAUSE",JSON.stringify(response.data));
            dispatch({
                type: "UNPAUSE",
            })
        })
        .catch(function (error) {
            console.log(error);
        });
}

export const forceRemoveAction = (id, gid) => async (dispatch, getState) => {
    let data = `{"id":"${id}","jsonrpc":"2.0","method": "aria2.forceRemove", "params": ["${gid}"]}`;
    let config = {
        method: 'post',
        url: 'http://127.0.0.1:6800/jsonrpc',
        headers: {
            'Content-Type': 'text/plain'
        },
        data: data
    };
    axios(config)
        .then(function (response) {
            // console.log("REMOVE",JSON.stringify(response.data));
            dispatch({
                type: "FORCEREMOVE",
            })
        })
        .catch(function (error) {
            console.log(error);
        });
}

export const unPauseAllAction = (id, gid) => async (dispatch, getState) => {
    let data = `{"id":"${id}","jsonrpc":"2.0","method": "aria2.unpauseAll", "params": ["${gid}"]}`;
    let config = {
        method: 'post',
        url: 'http://127.0.0.1:6800/jsonrpc',
        headers: {
            'Content-Type': 'text/plain'
        },
        data: data
    };
    axios(config)
        .then(function (response) {
            // console.log("UNPAUSE",JSON.stringify(response.data));
            dispatch({
                type: "UNPAUSEALL",
            })
        })
        .catch(function (error) {
            console.log(error);
        });
}

export const forcePauseAllAction = (id, gid) => async (dispatch, getState) => {
// used in TaskButtons.js
    let data = `{"id":"${id}","jsonrpc":"2.0","method": "aria2.forcePauseAll", "params": ["${gid}"]}`;
    let config = {
        method: 'post',
        url: 'http://127.0.0.1:6800/jsonrpc',
        headers: {
            'Content-Type': 'text/plain'
        },
        data: data
    };
    axios(config)
        .then(function (response) {
            // console.log("UNPAUSE",JSON.stringify(response.data));
            dispatch({
                type: "FORCEPAUSEALL",
            })
        })
        .catch(function (error) {
            console.log(error);
        });
         
}