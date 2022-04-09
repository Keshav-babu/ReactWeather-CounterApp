import axios from "axios"
import { useEffect, useState } from "react"

const initialState={
    query:"",
    data:[]
}
export const WeatherInfo=()=>{

    useEffect(()=>{
        handleSearch()
    },[])
    const handleSearch=()=>{
        //api call to weatherapi
        //params
        //api key 
        //q
        setLoading(true)
        axios({
            method:"get",
            baseURL:"https://api.weatherapi.com/v1",
            url:"/current.json",
            params:{
                key:"f87b2986947149e7b2a32245221003",
                q:state.query||"Delhi"
            }
        }).then(res=>{
            console.log(res.data)
            setState({...state,data:res.data})
            
        }).catch(err=>console.log(err))
        .finally(()=>setLoading(false))
    }
    const [state,setState]=useState(initialState)
    const [loading,setLoading]=useState(false)

  //  console.log("state",state)
    return <>
        <h1>Weather Information</h1>
        <input type="text" onChange={(e)=>{
            setState({...state,query:e.target.value})
        }} />
        <button onClick={handleSearch} >Show </button>
        {loading && <p>...loading</p>}
        {state?.data?.location &&
            <h2>{state.data?.location?.name}</h2>
        }
        {state?.data?.current &&
        <>
            <h2>Current Cond : - {state?.data?.current?.condition?.text}</h2>
            <img src={state?.data?.current?.condition?.icon} alt="weather logo" />
        </>
        }
    </>
}