import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

import { useDispatch, useSelector, shallowEqual } from "react-redux"
import { regUser } from "../../Redux/auth/action"
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export function Signup() {
     const dispatch = useDispatch();
    const {
    auth: { user },
  } = useSelector((state) => state, shallowEqual);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
     const [payload, setPayload] = useState({
         first_name: "",
         last_name: "",
        email: "",
        password: "",
        roles: ["user"]
    });
  const handleChange = (e) => {
        const { name, value } = e.target;
        setPayload({
            ...payload,
            [name]: value,
        });

    };
    console.log(payload)
    const handleSave = () => {
         dispatch(regUser(payload))
        // axios.post("http://localhost:8000/users/signup", payload).then((res) => {
        //     console.log(res)
        // })
       
      
    }
    return (
      

    <div>
      <Button onClick={handleOpen}>signup</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
              <Box sx={style}>
                  <Typography >Welcome to MeeshWala</Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
                      <TextField  onChange={handleChange} name="first_name" id="outlined-basic" label="First_name" variant="outlined" />
                      <TextField  onChange={handleChange} name="last_name" id="outlined-basic" label="Last_name" variant="outlined" />
                      <TextField  onChange={handleChange} name="email" id="outlined-basic" label="Email" variant="outlined" />
                      <TextField  onChange={handleChange} name="password" id="outlined-basic" label="*********" variant="outlined" />
                      <Button onClick={handleSave}  onChange={handleChange} variant="contained">signup</Button>  
          </Typography>
         
        </Box>
      </Modal>
    </div>
  );
}

