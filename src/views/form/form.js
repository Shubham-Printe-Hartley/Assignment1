import { Formik} from 'formik';
import * as Yup from 'yup';
import {Input, Checkbox} from '../../components/formElements';
import {login} from '../../redux/actions/userAction';
import {useDispatch} from 'react-redux';


const Form = () => {

  const dispatch = useDispatch();

  const initialValues = {
    username: '',
    password: '',
    remember: true
  }

  const validationRules = () => {
    return (
      Yup.object().shape({
        username: Yup.string("Enter username").email("Please enter a valid email-id").required("Username is required"),
        password: Yup.string("Enter password").min(6, "Must be at least 6 letters").matches(/[0-9]/, "Must contain 1 numeric value").required("Password is required")
        // .matches(/[A-Z]/, "Must contain 1 Upper case letter")  - add later may be 
      })
    )
  }

  
  const handleSubmit = async(values) => {
    var data = {
      email: values.username.toString().trim(),
      password: values.password.toString().trim()
    }
    dispatch(login(data));
  }

  // Render Login Form for Formik
  const renderForm = (formikProps) => {
    const {values, handleChange, handleBlur, errors, handleSubmit, touched} = formikProps;

    return(
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <Input 
            label="Email address"
            name="username"
            type={"text"}
            className="form-control"
            placeholder="Email adress"
            value={values.username}
            isRequired={true}
            onChange={handleChange}
            onBlur={handleBlur}
            errors={errors}
            touched={touched}            
          />
          {errors.username && touched.username && (
            <div className="text-danger my-2">{errors.username}</div>
          )}
        </div>
        <div className="mb-3">
          <Input 
            label="Password"
            name="password"
            type="password"
            className="form-control"
            placeholder="**********"
            value={values.password}
            isRequired={true}
            onChange={handleChange}
            onBlur={handleBlur}
            errors={errors}
            touched={touched}
          />
          {errors.password && touched.password && (
            <div className="text-danger my-2">{errors.password}</div>
          )}
        </div>
        <div className="mb-3">
            <Checkbox 
              label="Remember Me"
              name="remember"
              type="checkbox"
              checked={values.remember?"checked":""}
              value={values.remember}
              onChange={handleChange}
            />
        </div>
        <div className="mb-30">
          <button type="submit" className="btn btn-primary">
            Log In
          </button>
        </div>

        {/* Login Help Section */}
        <div className="login-help">
          <p>
            If you have trouble logging in,
            <br />
            please contact Us at &nbsp;
            <a href="/#">800-320-7220</a>
            , ext &nbsp;
            <span>9995</span>
            &nbsp;.
          </p>
        </div>
      </form>
    )
  }


  return(
    <div className="form">
      <Formik
      enableReinitialize
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema = {validationRules()}
      >
        {renderForm}
      </Formik>
    </div>
  )
}

export default Form;