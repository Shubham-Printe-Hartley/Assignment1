import {logout} from '../../redux/actions/userAction';
import { useDispatch } from 'react-redux';


const Home = () => {

  const dispatch = useDispatch();  

  const handleClick=(e) => {
    // preventing default behaviour
    e.preventDefault();
    dispatch(logout());    
  }

  return (
    <div data-testid="home" className="mid-container w-100">
      <div className="container">
        <div className="form-wrapper">
          <h3> You are now logged-in </h3>
          <div className="form">
            <button onClick={handleClick} className="btn btn-primary" type="submit">Log-out</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;