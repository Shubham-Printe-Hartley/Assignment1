import Form from './form';
import { useSelector } from 'react-redux';

const FormContainer = () => {

  const loginError = useSelector((state) => state?.userLogin?.data?.message);


  return (
    <div className="form-wrapper">
      <h1>Log In</h1>
      <h3>DirectCreditLink</h3>
      {loginError && <p className="text-danger text-center">Invalid Credentials</p>}
      <Form />
    </div>
  )
}

export default FormContainer;