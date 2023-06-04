import React, { useState } from "react";
import {
    FormControl,
    FormLabel,
    RadioGroup,
    Radio,
    FormControlLabel,
    TextField,
    Button,
    Typography
} from '@mui/material';
import { Grid } from "@mui/material";
 
const Signup = (props) => {
    const initialValues = {
        firstName: "",
        lastName: "",
        gender: "male",
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };
 
    const [formValues, setFormValues] = useState(initialValues);
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formValues);
    };
 
    return (
        <div  style={{ display:"flex", alignItems:"center", justifyContent:"center", overflowX:"hidden", overflowY:"auto"}}>
            <form onSubmit={handleSubmit} style={{ display: 'flex' , gap:"10px", padding:"10px", width:"500px", flexDirection:"column", backgroundColor:"white", border:"2px solid gray"}}>
                <Typography component='h1' typography='h3' style={{marginBottom:"10px"}} >create new account</Typography>
                <Grid container spacing={4} >
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <TextField
                            id="firstName"
                            name="firstName"
                            label="First name"
                            type="text"
                            value={formValues.firstName}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12} > 
                        <TextField
                            id="lastName"
                            name="lastName"
                            label="Last name"
                            type="text"
                            value={formValues.lastName}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item  lg={12} alignItems="center"> 
                        <FormControl>
                            <FormLabel>Gender</FormLabel>
                            <RadioGroup
                                name="gender"
                                value={formValues.gender}
                                onChange={handleInputChange}
                                row
                            >
                                <FormControlLabel
                                    key="male"
                                    value="male"
                                    control={<Radio size="small" />}
                                    label="Male"
                                />
                                <FormControlLabel
                                    key="female"
                                    value="female"
                                    control={<Radio size="small" />}
                                    label="Female"
                                />
                                <FormControlLabel
                                    key="other"
                                    value="other"
                                    control={<Radio size="small" />}
                                    label="Other"
                                />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
 
 
                    <Grid item lg={12} sm={12} xs={12}>
                        <Button variant="contained" color="primary" type="submit" style={{
                            backgroundColor: "green",
                            margin: "5px"
                        }}>
                            Submit
                        </Button>
 
                    </Grid>
                </Grid>
            </form>
        </div>
    );
}
export default Signup;