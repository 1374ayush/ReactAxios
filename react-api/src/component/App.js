import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react';
import AddCar from './AddCar';

const Home = () =>{
    const [data, setData]=useState([]);
    const [del, setDelete]=useState(false);
   
    //get Api calling using axios....
    useEffect(()=>{
        axios.get('https://localhost:7296/api/Car/GetData').then((response)=>{
            setData(response.data);
        })
    },[del])

    //delete Api calling using axios....
    const deleteCar = async(id) => {
        const response = await axios.delete('https://localhost:7296/api/Car/delete?carId='+id)
        console.log(response)
        setDelete(true);
    }

    //update Api calling 
    const updateCar = () => {
        console.log("car update logic");
        console.log("repairing log data")
    }

    return(
    <>

    <h1>We are going to play with Axios....</h1>
    <hr />
    <h5>Get Api and Delete Api : Retrieving the carModels from api</h5>
    <div>
      {data.map((item) => (
        <div key={item.id}>{item.carModel} 
        <button key={item.id} onClick={()=>deleteCar(item.id)}>delete</button>
        <button key={item.id} onClick={()=>updateCar(item.id)}>update</button>
        </div>
       
      ))}
    </div>

    <hr />
    <h5>Post Api : Add Car</h5>
    <AddCar />
    <hr />
    </>
    )
}

export default Home
