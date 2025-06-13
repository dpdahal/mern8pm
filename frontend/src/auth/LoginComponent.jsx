import React from 'react';

import * as yup from 'yup';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import axios from 'axios';

let loginSchema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required(),
});


function LoginComponent() {
    const {setError, register, handleSubmit, formState: {errors}} =
          useForm({
              resolver: yupResolver(loginSchema)
          });
      let pStyle = {
        color: "#f60000",
    }
    const login =(data)=>{
      axios.post("http://localhost:3000/auth", data).then((res)=>{
        localStorage.setItem("token", res.data.token);
        window.location.href = "/admin";
      }).catch((err)=>{
        console.log(err);
        if (err.response && err.response.data) {
          if(err.response.data.field=='email'){
            setError("email", {type: "manual", message: err.response.data.message});
            
          }
          if(err.response.data.field=='password'){
            setError("password", {type: "manual", message: err.response.data.message});
          }
        } 
        
      })
    }

  return (
    <React.Fragment>
      <div className="container py-3">
        <div className="row">
          <div className="col-md-12">
            <h1>Login Page</h1>
          </div>
          <div className="col-md-12">
            <form action="" onSubmit={handleSubmit(login)}>
              
              <div className="from-group mb-2">
                <label htmlFor="email">Email:
                    {errors.email && <span style={pStyle}>{errors.email.message}</span>}
                </label>
                <input type="text" name='eamil'
                 {...register("email")}
                 className='form-control' />
              </div>
              <div className="from-group mb-2">
                <label htmlFor="password">Password:
                  {errors.password && <span style={pStyle}>{errors.password.message}</span>}
                </label>
                <input type="password" name='password'
                {...register("password")}
                className='form-control' />
              </div>           
        
              <div className="from-group mb-2">
                <button className='btn btn-success w-100'>Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default LoginComponent