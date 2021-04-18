import React from 'react';
import { useState } from 'react';
import Joi, { schema } from 'joi-browser';
import Input from './input.jsx';

const Login = () => {

    const schema = {
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password')
    }

    const [data,setData] = useState({username:"",password:""});
    const [errors,setErrors] = useState({});

    const handleSubmit = (e) =>{
        let Errors = {}
        Errors = validate(e);

        if (Errors === null) {
            Errors = {}
        }

        setErrors(Errors)
        e.preventDefault();
    }

    const validateProperty = ({name,value}) =>{
        const obj = {[name]:value}
        const Schema = {
            [name]:schema[name]
        }
        const {error} = Joi.validate(obj,Schema);

        if (error) {
            return error.details[0].message
        }
        return null

    }

    const validate = () =>{

        const result = Joi.validate(data,schema,{abortEarly: false})

        if(!result.error){
            return null
        };

        const Errors = {}

        for(let item of result.error.details){
            Errors[item.path[0]] = item.message;
        };

        return Errors;

    }


    const handleChange = ({currentTarget:input}) =>{
        const Errors = {...errors};
        const Data = {...data};
        const errorMsg = validateProperty(input);

        if(errorMsg){
            Errors[input.name] = errorMsg;
        }
        else{
          delete Errors[input.name];
        }

        Data[input.name] = input.value;

        
        setData(Data);
        setErrors(Errors);
        console.log(errors)

    }


    return (
        <div>
            <h1 className="mb-5 mt-1" style={{fontFamily:"Arial, Helvetica, sans-serif"}}>Login</h1>
            <form onSubmit={handleSubmit}>
                        <Input onChange={handleChange} name="username" value={data.username} label="Username" type="text" error={errors.username} />
                        <Input onChange={handleChange} name="password" value={data.password} label="Password" type="password" error={errors.password} />
                <div><button disabled={validate()} className="btn btn-primary mt-2">Login</button></div>
            </form>
        </div>
      );
}
 
export default Login;