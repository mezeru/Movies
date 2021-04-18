import React from 'react';
const Input = ({name,label,onChange,value,type,error}) => {

    return (            
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">{label}</label>
                <input name={name} onChange={onChange} value={value} type={type} className="form-control" id={name} />
                {error && <div className="alert alert-danger">{error}</div>}
            </div>
     );
}
 
export default Input;