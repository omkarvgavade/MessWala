import TextField from '@mui/material/TextField';
import { useState } from "react"
import Button from '@mui/material/Button';
import axios from "axios";
import styled from "styled-components"
const A = styled.div`
background-color: rgb(239,243,244);;
padding: 30px;
width: 400px;
border:1px solid whitesmoke;
margin:auto;
.inputfield{
    margin: 10px auto;
    width:350px;

}
`
export function MealForm() {
    const [payload, setPayload] = useState({
        title: "",
        menu: "",
        image: "",
        price: "",
        mess_id:"61602d594d214233a9c43c74"
    });
  const handleChange = (e) => {
        const { name, value } = e.target;
        setPayload({
            ...payload,
            [name]: value,
        });

    };
      const handleSave = () => {
        
        axios.post("http://localhost:8000/meal", payload).then((res) => {
            console.log(res)
        })
       
      
    }
    console.log(payload)

    return <A>
        <div><TextField name="title" label="title" className="inputfield" onChange={handleChange} color="secondary"  /></div>
        <div><TextField name="menu" label="menu" className="inputfield" onChange={handleChange} color="secondary"  /></div>
        <div><TextField name="image" label="image" className="inputfield" onChange={handleChange} color="secondary"  /></div>
        <div><TextField name="price" label="price" className="inputfield" onChange={handleChange} color="secondary"  /></div>
       
        <div style={{margin:"auto",textAlign:"center"}} ><Button onClick={handleSave} variant="contained">Submit</Button></div>
        </A>
}