import { Fragment } from "react";

export const Checkbox = (props) => {
  const {
    label,
    parentClass="",
    margin
  } = props;

  return(
    <div className={`form-group1 password-box ${parentClass} ${margin?margin: "mb-0"}`}>
      <div className="checkbox-wrapper">
        <label className="checkbox-content" >                    
          {label}
          <CheckboxTag {...props} />
        </label>
      </div> 
      <a href="/#">Forgot password?</a>               
    </div>
  )
};

const CheckboxTag = (props) => {
  const{
    name,
    type,
    checked,
    value,
    onChange
  } = props;

  return(
    <Fragment>
      <input 
        name={name}
        type={type} 
        checked={checked} 
        value={value}
        onChange={onChange}
        />
        <span className="checkmark">
        </span>
    </Fragment>
  )
};