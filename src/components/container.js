import Logo from './logo/logo';
import FormContainer from './form/formContainer';
import Link from './links/link';
const Container = () => {
  return(
    <div style={{marginTop:"15px"}} className="wrapper">
      <div className="mid-container w-100">
      <div className="container">
        <Logo />
        <FormContainer />
        <Link />
      </div>
      </div>
    </div>
  )
}

export default Container