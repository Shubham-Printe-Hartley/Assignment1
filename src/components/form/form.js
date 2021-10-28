import {Formik} from 'formik';
import * as Yup from 'yup';

import {login} from '../../redux/actions/userAction';
import {useDispatch} from 'react-redux';


const Form = () => {

  const dispatch = useDispatch();



  return(
    <div className="form">
      <Formik
      initialValues={{
        username: '',
        password: '',
        remember: true
      }}
      onSubmit={(values, {setSubmitting}) => {
        // prepare dataObject
        const userCredentials = {
          email: values.username,
          password: values.password
        };
                 
        dispatch(login(userCredentials));
        // API call for loggin in

        // show error based on incorrect login credentials

        // push logged in page if login successful

      }}
      validationSchema = {Yup.object().shape({
        username: Yup.string("Enter username").email("Please enter a valid email-id").required("Username is required"),
        password: Yup.string("Enter password").min(6, "Must be at least 6 letters").matches(/[0-9]/, "Must contain 1 numeric value").required("Password is required")
        // .matches(/[A-Z]/, "Must contain 1 Upper case letter")  - add later may be 
      })}
      >
        {(props) => {
          
          const {values, touched, errors, handleChange, handleBlur, handleSubmit} = props;

          return(
            <form onSubmit={handleSubmit}>
              <div className="form-group1 fname">
                <label>Username</label>
                <input 
                  name="username"
                  type="text" 
                  className="form-control"
                  placeholder="fixitleads" 
                  vlaue={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  />
                  {errors.username && touched.username && (
                    <div className="text-danger my-2">{errors.username}</div>
                  )}
              </div>
              <div className="form-group1 password">
                <label >Password</label>
                <input 
                  name="password"
                  type="password" 
                  className="form-control"
                  placeholder="**********" 
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value = {values.password}
                  />
                  {errors.password && touched.password && (
                    <div className="text-danger my-2">{errors.password}</div>
                  )}
              </div>
              <div className="form-group1 password-box">
                <div className="checkbox-wrapper">
                  <label className="checkbox-content" >                    
                    Remember Me
                    <input 
                      name="remember"
                      type="checkbox" 
                      checked={values.remember?"checked":""} 
                      value={values.remember}
                      onChange={handleChange}
                      />
                      <span className="checkmark">
                      </span>
                  </label>
                </div> 
                <a href="#">Forgot password?</a>               
              </div>
              <div className="">
                  <button type="submit" className="btn btn-primary">
                    Log In
                  <i className="icon-arrow-thin-right">
                  </i>
                  </button>
              </div>
              <div className="login-help">
                <p>
                  If you have trouble logging in,
                  <br />
                  please contact Us at &nbsp;
                  <a href="#">800-320-7220</a>
                  , ext &nbsp;
                  <span>9995</span>
                  &nbsp;.
                </p>
              </div>
            </form>
          )
        }}
      </Formik>



    </div>
  )
}

export default Form;