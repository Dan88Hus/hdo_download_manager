// this file is planning to be used for keeping the GID in state

import axios from 'axios'

export const taskReducer = (state = [], action) => {   
    switch (action.type) {
        case "ADDURI":
            return [...state, action.payload]
        case "TELLSTATUS":
            state.map((task) => {
                let data = `{"id":"${task.id}","jsonrpc":"2.0","method": "aria2.tellStatus", "params": ["${task.gid}"]}`;
                let config = {
                    method: 'post',
                    url: 'http://localhost:6800/jsonrpc',
                    headers: {
                        'Content-Type': 'text/plain'
                    },
                    data: data
                };
                const fetchStatus = async() => await axios(config)
                    .then(function (response) {
                        if(response.data.id === task.id){
                            let progressPercent = ((response.data.result.completedLength / response.data.result.totalLength)*100).toFixed(2)
                            Object.assign(task, {status: response.data.result.status, progress: progressPercent, path: response.data.result.files[0].path})   

                        }
                })
                    .catch(function (error) {
                        console.log(error);
                    });
                fetchStatus()
            })
            return [...state]
        case "PAUSE":
            return [...state]
        case "PURGELOCALSTORAGE":
            return []
        case "UNPAUSE":
            return [...state]
        case "FORCEREMOVE" :
            return [...state]
        case "UNPAUSEALL":
            return [...state]
        case "FORCEPAUSEALL":
            return [...state]
        default:
            return state

    }

  
}