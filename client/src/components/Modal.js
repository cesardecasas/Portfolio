import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';


const ModalFrame =(props)=> {
    const {deploy, title} = props

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
          title='demo'
          width="100%"
          height="500px"
          src={deploy}
          >
          </iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='dark' onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }


export default ModalFrame