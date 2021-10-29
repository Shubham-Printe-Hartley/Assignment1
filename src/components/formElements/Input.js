import { Fragment } from "react";

export const Input = (props) => {
  const {
    name,
    label,
    parentClass = "",
    margin
  } = props;

  return (
    <div className={`form-group1 ${parentClass} ${margin?margin: "mb-0"}`}>
      {label && (
        <label htmlFor = {name} className="custom-form-label">
          {label}
        </label>
      )}
      <InputTag {...props} />
    </div>
  )

}

const InputTag = (props) => {
  const{
    type,
    name,
    value,
    onChange,
    onBlur,
    className,
    placeholder,
    disabled
  } = props;

  return (
    <Fragment>
      <input 
        onChange={onChange}
        onBlur={onBlur}
        type={type}
        value={value}
        name={name}
        className={className}
        placeholder={placeholder}
        disabled={disabled}
        autoComplete="off"
      /> 
    </Fragment>
  )
}