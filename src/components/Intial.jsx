import React from 'react'
import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom'


const initialData = {
    fullname: "",
    email: "",
    phone: "",
    password: "",
};

const reducer = (state, action) => {
    return {
        ...state,
        [action.field]: action.value
    }
};

const Register = () => {

    const [state, dispatch] = useReducer(reducer, initialData);

    const handleChange = (e) => {
        dispatch(
            {
                field: e.target.name,
                value: e.target.value,

            }
        );
    };

    const handleSubmit = () => {
        console.log(state);
        alert("Registered successfull");
    }
    
    return(
        <>
            <label>Fullname: </label>
            <input type="text" name="fullname" required onChange={handleChange}/><br/>

            <label>Password: </label>       
            <input type="password" name="password" required onChange={handleChange}/><br/>

            <label>Email: </label>
            <input type="email" name="email" required onChange={handleChange}/><br/>

            <label>Phone no:</label>
            <input type="number"  name="phone" required onChange={handleChange}/><br/>

            {/* <label>Age</label>
            <input type="number" name="age" id="" min="19" max="29"/><br/>

            <label>Select Gender: </label>
            <input type="radio" name="gender" />Male
            <input type="radio" name="gender" id=""/>Female<br/>
            
            <label>Upload Resume: </label>
            <input type="file" name="file" id=""/><br/>

        
            <label>select city:</label>
            <select>
            <option value="">select</option>
            <option value="">gujarat</option>
            <option value="">banglore</option>
            <option value="">maharashta</option>
            <option value="">chennai</option>
            </select><br/>

            <label>select DOB:</label>
            <input type="datetime-local"/><br/> */}

            
            <input type="button" name="button" value="submit" onClick={handleSubmit}/>
        </>
    )
}
export default Register;
