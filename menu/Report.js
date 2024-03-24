const localStorageItems = window.localStorage.getItem('persist:root');
//parse converts to object
console.log("objectLocalItems.length", JSON.parse(localStorageItems))

const objectUriItems = JSON.parse(objectLocalItems.uri);
const tbody = document.getElementById('tbody');

console.log("objectUriItems", objectUriItems)

if(localStorageItems){
    let objectLength = objectUriItems.length;
    for (let i=0; i<objectLength; i++){
        console.log("i:", i)
    }  
} else {
    console.log("here")
}