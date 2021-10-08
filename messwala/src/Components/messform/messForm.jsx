import TextField from '@mui/material/TextField';
import { useState } from "react"
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize'
import axios from "axios"
import styled from "styled-components"
const A = styled.div`
background-color: rgb(239,243,244);
padding: 30px;
width: 400px;
border:1px solid whitesmoke;
margin:auto;
.inputfield{
    margin: 10px auto;
    width:350px;

}

`
export function MessForm() {
     const [payload, setPayload] = useState({
       breakFastTiming: "",
city: "",
description: "",
eveningTimeSlot: "",
isBreakfast: "",
isDelivery: "",
mornigTimeSlot: "",
priceList: "",
review: "",
speciality: "",
         title: "",
         user_id:"61602d594d214233a9c43c74"

    });
  const handleChange = (e) => {
        const { name, value } = e.target;
        setPayload({
            ...payload,
            [name]: value,
        });

    };
      const handleSave = () => {
        
        axios.post("http://localhost:8000/mess", payload).then((res) => {
            console.log(res)
        })
       
      
    }
    console.log(payload)

    return <A>
        <div ><TextField name="title" label="title" className="inputfield" onChange={handleChange} color="secondary"  /></div>
        <div><TextareaAutosize name="description" label="description" className="inputfield" onChange={handleChange} color="secondary"  /></div>
        <div><TextField name="city" label="city" className="inputfield" onChange={handleChange} color="secondary"  /></div>
        <div><TextField name="speciality" label="speciality" className="inputfield" onChange={handleChange} color="secondary" /></div>
         <div><TextField name="isDelivery" label="isDelivery" className="inputfield" onChange={handleChange} color="secondary"  /></div>
        <div><TextField name="mornigTimeSlot" label="mornigTimeSlot" className="inputfield" onChange={handleChange} color="secondary"  /></div>
        <div><TextField name="eveningTimeSlot" label="eveningTimeSlot" className="inputfield" onChange={handleChange} color="secondary"  /></div>
        <div><TextField name="isBreakfast" label="isBreakfast" className="inputfield" onChange={handleChange} color="secondary"  /></div>
        <div><TextField name="breakFastTiming" label="breakFastTiming" className="inputfield" onChange={handleChange} color="secondary"  /></div>
        <div><TextField name="priceList" label="priceList" className="inputfield" onChange={handleChange} color="secondary"  /></div>
        <div><TextField name="review" label="review" className="inputfield" onChange={handleChange} color="secondary" /></div>
        <div style={{margin:"auto",textAlign:"center"}} ><Button onClick={handleSave} variant="contained">Submit</Button></div>
        </A>
}