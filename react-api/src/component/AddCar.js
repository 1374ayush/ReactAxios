import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react';

const AddCar = () =>{
    const [model, setModel]=useState()
    const [maker, setMaker]=useState()
    const [price, setPrice]=useState()
    
    const handelModelChange = (e) => {
        e.preventDefault()

        setModel(e.target.value)
        console.log(model)
    } 
    const handelMakerChange = (e) => {
        e.preventDefault()

        setMaker(e.target.value)
        console.log(maker)
    }
    const handelPriceChange = (e) => {
        e.preventDefault()

        setPrice(e.target.value)
        console.log(price)
    }

    //post Api calling using axios....
    const submitClick=async()=>{
        try{
            const response = await axios.post('https://localhost:7296/api/Car/AddCars',
        {
            carModel:model,
            carMaker:maker,
            carRentalPrice:price,
            carStatus:true
        })

        console.log(response)
    } catch(error){
        console.log("Rrror Occured", error)
    }

    }

    return(
        <>

        <label>carModel</label>
        <input type="text" onChange={handelModelChange}/> <br /> <br />
        <label>carMaker</label>
        <input type="text" onChange={handelMakerChange} /> <br /> <br />
        <label>carRentalPrice</label>
        <input type="text" onChange={handelPriceChange} /> <br /> <br />

        <button onClick={submitClick}>submit</button>
        
        </>
    )
}

export default AddCar