import { useEffect, useState } from "react"


export const UseEffectExample=()=>{
    const [count,setCount]=useState(10)
    useEffect(()=>{
        console.log(count,"I'll get invoke when the page mounts")
    },[])
    useEffect(()=>{
        console.log(count,"I'll get invoked every time count changes " )
    },[count])

    return <>
        <h3>Counter</h3>
        <h5>Count : {count}</h5>
        <button onClick={()=>{
            setCount(count=>count+5)
        }} >Add 5</button>
        <button onClick={()=>{
            setCount(count=>count-2)
        }}>Sub 2</button>
        <p>Example of useEffect * open console to see effect</p>
    </>
}