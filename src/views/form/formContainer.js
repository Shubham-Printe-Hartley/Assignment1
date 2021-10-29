import LoginForm from './form';
import { useSelector } from 'react-redux';
import Error from '../../components/error/errorComponent'
import Loader from '../../components/loader/loader'
import errorImg from '../../assets/errorIcon.png'

const FormContainer = () => {

  const errorMessage = useSelector((state) => state?.userLogin?.error?.message);  
  const loading = useSelector((state) => state?.userLogin?.loading)

  return (
    <div className="form-wrapper">
      <h1>Log In</h1>
      <h3>DirectCreditLink</h3>
      {errorMessage && 
      <Error 
      img={errorImg} 
      message={errorMessage} 
      />
      }
      {loading && <Loader color={"primary"}/>}
      <LoginForm />
    </div>
  )
}

export default FormContainer;