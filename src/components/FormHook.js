import React from 'react';
import { useForm } from "react-hook-form"

function FormHook() {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit=(data)=>{
        console.log(data);
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="FirstName">First Name</label>
                <input 
                type="text"
                name='firstName'
                id='firstName'
                ref={register({required:true})} 
                />
                {errors.firstName &&(
                    <span className='errors'>First Name is Required</span>
                )}
            </div>
            <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          ref={register({ required: true })}
        />
        {errors.lastName && (
          <span className="error">Last Name is required</span>
        )}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          ref={register({
            required: true,
            pattern: /^\S+@\S+$/i,
          })}
        />
        {errors.email && (
          <span className="error">Invalid Email Address</span>
        )}
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          ref={register({ required: true, minLength: 6 })}
        />
        {errors.password && (
          <span className="error">
            Password is required (minimum 6 characters)
          </span>
        )}
      </div>

      <button type='submit'>Register</button>
        </form>
    )
}

export default FormHook;