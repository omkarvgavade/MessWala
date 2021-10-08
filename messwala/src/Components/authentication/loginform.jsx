import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useDispatch, useSelector ,shallowEqual} from "react-redux";
import { logUser } from '../../Redux/auth/action';


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

export function Login() {
    const dispatch = useDispatch();
    const {
    auth: { user },
  } = useSelector((state) => state, shallowEqual);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

      const [payload, setPayload] = useState({
        email: "",
        password: "",
    });
  const handleChange = (e) => {
        const { name, value } = e.target;
        setPayload({
            ...payload,
            [name]: value,
        });

    };
    const handleSave = () => {
         dispatch(logUser(payload))
        // axios.post("http://localhost:8000/users/login", payload).then((res) => {
        //     console.log(res)
        // })
       
      
    }
console.log(payload)
  return (
    <div>
      <Button onClick={handleOpen}>Login</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
                      <TextField name="email" id="outlined-basic" onChange={handleChange} label="Email" variant="outlined" />
                      <TextField name="password" id="outlined-basic" onChange={handleChange} label="*********" variant="outlined" />
                      <Button variant="contained" onClick={handleSave}>Login</Button> 
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}