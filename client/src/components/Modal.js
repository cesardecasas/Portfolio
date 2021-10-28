import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { useState } from 'react';


const ModalFrame =(props)=> {
    const {deploy, title} = props

    const [mobileView, setMobileView] = useState(false)

    return (
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Check 
          type="switch"
          id="custom-switch"
          label='Mobile View'
          onChange={()=>setMobileView(!mobileView)}
        />
        {mobileView ? <em style={{fontWeight:'100',marginBottom:'4%' }}>Disclaimer: Mobile view pixel ratio from an iPhone 8 Plus</em>:<></>}

          {mobileView ? 

            <iframe
            title='demo'
            width="414px"
            height="736px"
            src={deploy}
            style={{marginLeft:'30%'}}
            >
            </iframe>
            :
            <iframe
            title='demo'
            width="100%"
            height="500px"
            src={deploy}
            >
            </iframe>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant='dark' onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }


export default ModalFrame