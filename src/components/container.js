import Logo from './logo/logo';
import FormContainer from './form/formContainer';
import Link from './links/link';

import logoImg from '../assets/logo2.png';
const Container = () => {
  return(
    <div className="wrapper">
      <div className="mid-container w-100">
      <div className="container">
        <Logo img={logoImg} />
        <FormContainer />
        <Link />
      </div>
      </div>
    </div>
  )
}

export default Container