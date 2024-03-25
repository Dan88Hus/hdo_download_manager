const localStorageItems = window.localStorage.getItem('persist:root');
//parse converts to object
let objectUriItems = JSON.parse(JSON.parse(localStorageItems).uri);

document.addEventListener('DOMContentLoaded', function(){
    
    const tbody = document.getElementById("tbody");
    
    if(localStorageItems){
        for (let i=0; i<objectUriItems.length; i++){
            let newRow = tbody.insertRow(i);
            //id, gid...
            for (let j = 0; j < 1; j++){
                let newCell = newRow.insertCell(j);
                let newText = objectUriItems[i].status ? document.createTextNode(`${objectUriItems[i].status}`) : document.createTextNode('waiting')
                newCell.appendChild(newText);
            }
            for (let j = 1; j < 2; j++){
                let newCell = newRow.insertCell(j);
                let newText = objectUriItems[i].progress ? document.createTextNode(`${objectUriItems[i].progress}`) : document.createTextNode('0')
                newCell.appendChild(newText);
            }
            for (let j = 2; j < 3; j++){
                let newCell = newRow.insertCell(j);
                let newText = objectUriItems[i].path ? document.createTextNode(`${objectUriItems[i].path}`) : document.createTextNode('waiting')
                newCell.appendChild(newText);
            }
        }  
    }
})