import { MyInstance } from "../Constants/AllConstants"


// set data after login / registrtion for after loading {cache}
export const setUserInstanceToLS=(data)=>{
    console.log(data);
    const stringiFiedData = JSON.stringify(data);
    localStorage.setItem(MyInstance,stringiFiedData);
}

// get user instance 
export const getUserInstanceFromLS=()=>{
    const temp = localStorage.getItem(MyInstance);
    const result = JSON.parse(temp);
    return result;
}

// remove user instance form LS
export const removeInstance=()=>{
    localStorage.removeItem(MyInstance);
}