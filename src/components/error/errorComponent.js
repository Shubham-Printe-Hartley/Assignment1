import {Modal, Button} from 'react-bootstrap';
import { useState } from 'react';
// import { useDispatch } from 'react-redux';


const Error = (props) => {

  const {desc, message, img} = props;
  // const dispatch = useDispatch();
  
  const [show, setShow] = useState(true);
  const handleClose = () => {
    setShow(false);
  };
  


  const modalComponent = () => {
    return(
      <>
        <Modal className="form-wrapper" show={show} onHide={handleClose}>
          <Modal.Body className="text-center mt-3">
            <img className="img-fluid w-25 mb-3" src={img} alt="error-img" />
            <p className="text-danger">{message}</p>
            <p className="text-danger">{desc}</p>
          </Modal.Body>
          <Modal.Footer className="justify-content-center">
            <Button variant="outline-danger" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        
      </>
    )
  }

  return(
    modalComponent()
  )
}

export default Error;