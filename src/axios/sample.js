import React from "react"
import axios from "axios"
const sample=()=>{
    const[data,setdata]=useState
    const handleget=()=>{
        axios.method ("https://jsonplaceholder.typicode.com/users") .then(res=>{
           console.log("get method sucessfully",res);
           setdata(res.data)
});
}
    return (<>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>{data && data[0].name} </h1>
        <button onlick={handleget}>get</button>
        </>
    )
}
export default sample;